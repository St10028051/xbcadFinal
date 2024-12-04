using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using MongoDB.Driver;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using TheActionSwimAcademy.backend.Services;

namespace TheActionSwimAcademy.backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Get the MongoDB connection string from appsettings.json
            string mongoConnectionString = builder.Configuration.GetConnectionString("MongoDB");
            var mongoClient = new MongoClient(mongoConnectionString);
            var mongoDatabase = mongoClient.GetDatabase("TheActionSwimAcademy");

            // Register MongoDB services
            builder.Services.AddSingleton<IMongoClient>(mongoClient);
            builder.Services.AddSingleton<IMongoDatabase>(mongoDatabase);

            // If you had IUserService or UserService before, remove or comment them out since we are not using Identity:
            builder.Services.AddScoped<IUserService, UserService>();

            // JWT Configuration from appsettings.json
            string issuer = builder.Configuration["Jwt:Issuer"];
            string audience = builder.Configuration["Jwt:Audience"];
            string key = builder.Configuration["Jwt:Key"];

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = issuer,
                        ValidAudience = audience,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
                    };
                });

            // Add Controllers
            builder.Services.AddControllers();

            // **Add CORS Policy**  
            // This allows all origins, methods, and headers. For security, restrict these in production.
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

            // Add Swagger for API Documentation (optional)
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            
            // **Use the CORS policy**
            app.UseCors("AllowAll");

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
