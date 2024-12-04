using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using TheActionSwimAcademy.backend.Models;

namespace TheActionSwimAcademy.backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMongoCollection<User> _users;
        private readonly IConfiguration _configuration;

        public AccountController(IMongoDatabase database, IConfiguration configuration)
        {
            _users = database.GetCollection<User>("users");
            _configuration = configuration;
        }

        [HttpPost("admin-login")]
        public async Task<IActionResult> AdminLogin([FromBody] LoginViewModel model)
        {
            var adminUser = await _users.Find(u => u.Email == model.Email).FirstOrDefaultAsync();

            if (adminUser == null)
            {
                return Unauthorized("Invalid admin credentials.");
            }

            // Check password
            if (!VerifyPassword(model.Password, adminUser.PasswordHash))
            {
                return Unauthorized("Invalid admin credentials.");
            }

            // Check role
            if (adminUser.Role != "Admin")
            {
                return Unauthorized("User is not an admin.");
            }

            // Generate JWT token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, adminUser.Username),
                    new Claim(ClaimTypes.Role, "Admin")
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
                Issuer = _configuration["Jwt:Issuer"],
                Audience = _configuration["Jwt:Audience"]
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return Ok(new { Token = tokenHandler.WriteToken(token) });
        }

        private bool VerifyPassword(string password, string storedHash)
        {
            // Recreate the hash of the provided password and compare with storedHash
            using (var sha256 = SHA256.Create())
            {
                var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                var computedHash = Convert.ToBase64String(bytes);
                return computedHash == storedHash;
            }
        }
    }
}
