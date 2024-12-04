using MongoDB.Driver;
using System.Security.Cryptography;
using System.Text;
using TheActionSwimAcademy.backend.Models;

namespace TheActionSwimAcademy.backend.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _users;

        public UserService(IMongoDatabase database)
        {
            _users = database.GetCollection<User>("users");
        }

        public async Task<bool> ValidateUserAsync(string username, string password)
        {
            // Find user by username or email. Adjust this logic based on what you consider "username"
            var user = await _users.Find(u => u.Email == username || u.Username == username).FirstOrDefaultAsync();
            if (user == null)
            {
                return false;
            }

            // Compare hashed password
            return VerifyPassword(password, user.PasswordHash);
        }

        public async Task CreateUserAsync(string username, string email, string password)
        {
            // Check if user already exists
            var existingUser = await _users.Find(u => u.Email == email).FirstOrDefaultAsync();
            if (existingUser != null)
            {
                throw new Exception("User with this email already exists.");
            }

            var hashedPassword = HashPassword(password);
            var newUser = new User
            {
                Username = username,
                Email = email,
                PasswordHash = hashedPassword,
                Role = "User" // default role
            };

            await _users.InsertOneAsync(newUser);
        }

        private bool VerifyPassword(string password, string storedHash)
        {
            using (var sha256 = SHA256.Create())
            {
                var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                var computedHash = Convert.ToBase64String(bytes);
                return computedHash == storedHash;
            }
        }

        private string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(bytes);
            }
        }
    }
}
