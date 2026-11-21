
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("show");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // CLOSE MOBILE MENU AFTER CLICK
    document.querySelectorAll("#navLinks a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// FOOD CATEGORY FILTER
const categoryButtons = document.querySelectorAll(".category-btn");
const foodCards = document.querySelectorAll(".food-card");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Active category
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const selectedCategory = button.dataset.category;

        // Filter food items
        foodCards.forEach(card => {
            if (
                selectedCategory === "all" ||
                card.dataset.category === selectedCategory
            ) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        });
    });
});

// SHOPPING CART
let cart = [];

const cartCount = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {
    button.addEventListener("click", () => {

        const foodName = button.dataset.name;
        const foodPrice = Number(button.dataset.price);

        cart.push({
            name: foodName,
            price: foodPrice
        });

        // Update cart counter
        cartCount.textContent = cart.length;

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "+";
        }, 700);

        console.log("Cart Items:", cart);

        alert(foodName + " added to your cart!");
    });
});

// VIEW CART
document.querySelector(".cart-btn").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = 0;

    let cartMessage = "YOUR FOOD ORDER\n\n";

    cart.forEach((item, index) => {
        cartMessage += `${index + 1}. ${item.name} - ₹${item.price}\n`;
        total += item.price;
    });

    cartMessage += `\nTotal Amount: ₹${total}`;

    alert(cartMessage);
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();
});

// INITIALIZE ICONS
if (window.lucide) {
    lucide.createIcons();
}
