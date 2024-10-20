namespace Platform.Models
{
    public interface ICardSetRepository
    {
        Task<IEnumerable<CardSet>> AllCardSets();
        Task CreateCardSet(CardSet cardSet);
    }
}
