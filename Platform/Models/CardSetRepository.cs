using Microsoft.EntityFrameworkCore;

namespace Platform.Models
{
    public class CardSetRepository: ICardSetRepository
    {
        private readonly LangFlashDbContext _dbContext;

        public CardSetRepository(LangFlashDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<CardSet>> AllCardSets()
        { 
            return await _dbContext.CardSets.ToListAsync();
        }

        public async Task CreateCardSet(CardSet cardSet)
        {
            await _dbContext.CardSets.AddAsync(cardSet);
            await _dbContext.SaveChangesAsync();
        }
    }
}
