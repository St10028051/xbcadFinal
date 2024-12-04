using Microsoft.AspNetCore.Mvc;
using TheActionSwimAcademy.backend.Models;
using MongoDB.Driver;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace TheActionSwimAcademy.backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly IMongoCollection<User> _users;

        public RegisterController(IMongoDatabase database)
        {
            _users = database.GetCollection<User>("users");
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if email already exists
            var existingUser = await _users.Find(u => u.Email == model.Email).FirstOrDefaultAsync();
            if (existingUser != null)
            {
                return BadRequest(new { message = "Email is already registered." });
            }

            // Hash password
            var passwordHash = HashPassword(model.Password);

            // Create new user
            var newUser = new User
            {
                Username = model.Name,
                Email = model.Email,
                PasswordHash = passwordHash
            };

            await _users.InsertOneAsync(newUser);

            return Ok(new { message = "User registered successfully!" });
        }

        private string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return System.Convert.ToBase64String(bytes);
            }
        }
    }
}
