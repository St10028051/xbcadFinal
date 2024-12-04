using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TheActionSwimAcademy.backend.Models;

namespace TheActionSwimAcademy.backend.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // Add DbSet properties here for your application models
        public DbSet<User> Users { get; set; } // Replace 'User' with your user model if applicable
        public DbSet<Event> Events { get; set; } // Example: Events in your application
        public DbSet<KitItem> KitItems { get; set; } // Example: Inventory or similar feature
    }
}
