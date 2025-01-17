document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productTitle = card.querySelector('h3')?.textContent || 'Unknown Product';
            alert(`You clicked on ${productTitle}`);
        });
    });
});
