$(document).ready(function() {
    const favoriteNumber = 42;
    const multipleNumbers = [3, 9, 27, 42];

    // Get a fact about the favorite number
    axios.get(`http://numbersapi.com/${favoriteNumber}?json`)
        .then(response => {
            $('#fact').append(`<p>${response.data.text}</p>`);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    // Get facts about multiple numbers
    axios.get(`http://numbersapi.com/${multipleNumbers}?json`)
        .then(response => {
            for (let num in response.data) {
                $('#multiple-facts').append(`<p>${response.data[num]}</p>`);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});





$(document).ready(function() {
    const favoriteNumber = 15;
    const numFacts = 4;
    let factsPromises = [];

    // Make 4 requests to get facts about the favorite number
    for (let i = 0; i < numFacts; i++) {
        factsPromises.push(axios.get(`http://numbersapi.com/${favoriteNumber}?json`));
    }

    // Wait for all requests to complete
    Promise.all(factsPromises)
        .then(responses => {
            responses.forEach(response => {
                $('#facts').append(`<p>${response.data.text}</p>`);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});


$(document).ready(function() {
  let deckId;
  let zIndex = 1;

  // Create a new deck when the page loads
  axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(response => {
      deckId = response.data.deck_id;
      console.log('Deck ID:', deckId);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Draw a card when the button is clicked
  $('#draw-card').click(function() {
      if (!deckId) {
          console.error('Deck ID not found.');
          return;
      }

      axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(response => {
          if (response.data.remaining === 0) {
              $('#draw-card').attr('disabled', true).text('No more cards');
          }

          let card = response.data.cards[0];
          $('#cards').append(
            `<div class="card" style="z-index: ${zIndex++};">${card.value} of ${card.suit}</div>`
          );
        })
        .catch(error => {
          console.error('Error:', error);
        });
  });
});
