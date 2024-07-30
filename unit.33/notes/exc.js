document.addEventListener('DOMContentLoaded', async function() {
    const deck = {
        async init() {
            try {
                let res = await axios.get('https://www.deckofcardsapi.com/api/deck/new/');
                this.deckId = res.data.deck_id;
                await this.shuffle();
            } catch (error) {
                console.error('Error initializing deck:', error);
            }
        },
        async shuffle() {
            try {
                let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);
                console.log('Deck shuffled:', res.data);
            } catch (error) {
                console.error('Error shuffling deck:', error);
            }
        },
        async drawCard() {
            try {
                let res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
                return res.data.cards[0];
            } catch (error) {
                console.error('Error drawing card:', error);
            }
        }
    };

    await deck.init();

    document.getElementById('draw-card').addEventListener('click', async function() {
        let card = await deck.drawCard();
        if (card) {
            document.getElementById('cards').innerHTML = `<div class="card"><img src="${card.image}" alt="${card.value} of ${card.suit}"></div>`;
        } else {
            document.getElementById('cards').innerHTML = '<div class="card">No more cards in the deck.</div>';
        }
    });
});

