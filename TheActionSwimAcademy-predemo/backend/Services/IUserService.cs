namespace TheActionSwimAcademy.backend.Services
{
    public interface IUserService
    {
        Task<bool> ValidateUserAsync(string username, string password);
        Task CreateUserAsync(string username, string email, string password);
    }
}
