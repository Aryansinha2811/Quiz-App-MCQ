function selectCard(card) {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
}

function beginGame() {
    const selectedCard = document.querySelector('.card.selected');
    if (selectedCard) {
        const url = selectedCard.getAttribute('data-url');
        window.open(url, '_blank'); // Opens the URL in a new tab or window
    } else {
        alert('Please select a card to begin the game.');
    }
}
