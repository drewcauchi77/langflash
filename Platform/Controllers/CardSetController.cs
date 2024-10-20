using Microsoft.AspNetCore.Mvc;
using Platform.Models;

namespace Platform.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CardSetController : ControllerBase
    {
        private readonly ICardSetRepository _cardSetRepository;

        public CardSetController(ICardSetRepository cardSetRepository)
        {
            _cardSetRepository = cardSetRepository;
        }

        // Get: api/cardset
        [HttpGet]
        public async Task<IActionResult> GetAllCardSets()
        {
            var allCardSets = await _cardSetRepository.AllCardSets();
            return Ok(allCardSets);
        }

        // Post: api/cardset
        [HttpPost]
        // Expecting the data in JSON form from payload
        public async Task<IActionResult> CreateNewCardSet([FromBody] CardSet cardSet)
        {
            if (cardSet == null) 
            {
                return BadRequest("CardSet is null");
            }

            await _cardSetRepository.CreateCardSet(cardSet);
            // Return 201 status code
            return CreatedAtAction(nameof(GetAllCardSets), new { id = cardSet.Id }, cardSet);
        }
    }
}
