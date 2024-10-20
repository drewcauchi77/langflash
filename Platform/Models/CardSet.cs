namespace Platform.Models
{
    public class CardSet
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Language { get; set; } = string.Empty;
        public List<Card> Cards { get; set; } = [];
    }
}
