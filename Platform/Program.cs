// Running with ngrok
// > ngrok http http://localhost:5246
using Microsoft.EntityFrameworkCore;
using Platform.Models;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("LangFlashDbContextConnection") ?? throw new InvalidOperationException("Connection string 'LangFlashDbContextConnection' not found.");
builder.Services.AddDbContext<LangFlashDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});

// Dependency injection
builder.Services.AddScoped<ICardSetRepository, CardSetRepository>();

builder.Services.AddControllers();

var app = builder.Build();

app.MapControllers();

app.Run();