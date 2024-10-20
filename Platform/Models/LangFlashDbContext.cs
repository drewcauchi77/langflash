using Microsoft.EntityFrameworkCore;

namespace Platform.Models
{
    public class LangFlashDbContext : DbContext
    {
        public LangFlashDbContext(DbContextOptions<LangFlashDbContext> options) : base(options)
        {
        }

        public DbSet<Card> Cards { get; set; }
        public DbSet<CardSet> CardSets { get; set; }
    }
}