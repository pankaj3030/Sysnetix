/* ---------- Menu Interaction ---------- */
const menuData = {
    starters: [
        { name: "Bruschetta", price: "USD 8", img: "images/bruschetta.jpg", description: "Grilled bread topped with tomato & basil." },
        { name: "Calamari", price: "USD 12", img: "images/calamari.jpg", description: "Crispy fried calamari with lemon aioli." }
    ],
    mains: [
        { name: "Grilled Salmon", price: "USD 22", img: "images/salmon.jpg", description: "Fresh salmon with herb butter." },
        { name: "Ribeye Steak", price: "USD 30", img: "images/steak.jpg", description: "12‑oz ribeye cooked to perfection." }
    ],
    desserts: [
        { name: "Tiramisu", price: "USD 9", img: "images/tiramisu.jpg", description: "Classic Italian coffee dessert." },
        { name: "Cheesecake", price: "USD 9", img: "images/cheesecake.jpg", description: "Creamy New York style." }
    ],
    drinks: [
        { name: "Mojito", price: "USD 10", img: "images/mojito.jpg", description: "Mint, lime & rum." },
        { name: "Chianti", price: "USD 14", img: "images/chianti.jpg", description: "Tuscan red wine." }
    ]
};

function renderMenu(category) {
    const container = document.getElementById('menu-items');
    container.innerHTML = '';
    menuData[category].forEach(dish => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.innerHTML = `
            <img src="${dish.img}" alt="${dish.name}" class="dish-img">
            <div class="dish-info">
                <h3>${dish.name}</h3>
                <p>${dish.description}</p>
                <p class="price">${dish.price}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

/* Tab click handling */
document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        renderMenu(btn.dataset.category);
    });
});

/* Initialize with starters */
renderMenu('starters');

/* ---------- Reservation Form ---------- */
const form = document.getElementById('reservation-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    // Simple client side validation (all required fields already enforced)
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    if (name.length < 2) {
        message.textContent = "Please enter a valid name.";
        message.style.color = "#c0392b";
        return;
    }
    // Simulate success response
    message.textContent = `Thank you, ${name}. Your reservation request has been sent!`;
    message.style.color = "#27ae60";
    form.reset();
});
