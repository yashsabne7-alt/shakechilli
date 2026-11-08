
// ================================================
// SHAKE CHILLI - COMPLETE WEBSITE JAVASCRIPT
// ================================================


// ====== SETTINGS ======

const WHATSAPP_NUMBER = "918369405815";
const V1 = "Regular";
const V2 = "Large";


// ====== MENU DATA ======

const MENU = [

{
id:"veg-momos",
t:"Veg Momos",
v:1,
d:"Veg Steam:150/210;Veg Fried:170/230;Veg Kurkure:190/260;Veg Cheese:190/260;Veg Burnt Garlic Cheese:200/270;Veg Tandoori:190/260;Veg Pahadi:190/260;Veg Peri Peri Pan Fried:190/260;Veg Chilli:190/260;Veg Schezwan:190/260"
},

{
id:"chicken-momos",
t:"Chicken Momos",
d:"Chicken Steam:160/220;Chicken Fried:170/230;Chicken Kurkure:200/270;Chicken Cheese:200/270;Chicken Burnt Garlic Cheese:210/280;Chicken Tandoori:200/270;Chicken Pahadi:200/270;Chicken Peri Peri Pan Fried:200/270;Chicken Chilli:200/270;Chicken Schezwan:200/270"
},

{
id:"veg-fries",
t:"Veg Fries",
v:1,
d:"Plain Fries:150;Cheezy Fries:170;Peri Peri Fries:170;Tandoori Fries:170;Smoky Fries:170;Schezwan Cheese Fries:170;Thecha Fries:180;Mint Velvet Fries:180;Chipotle Veg Fries:180;Veg Korean Fries:220;Chilli Garlic Fries:220;Sweet Potato Fries:250;Veg Fries Bowl:260"
},

{
id:"chicken-fries",
t:"Chicken Fries & Bites",
d:"Tandoori Chicken Fries:210;Ceasar Fries:220;Smoky Chicken Fries:220;Peri Peri Chicken Fries:230;Chipotle Chicken Fries:230;Fishi Fries:230;Chicken Fries Bowl:230;Korean Fries:250;Chicken Fries Bowl (Loaded):280;Chicken Jungle Fries:320;Chicken Popcorn (20 pcs):210;Chicken Nuggets (10 pcs):200"
},

{
id:"dirty-soda",
t:"Dirty Soda",
v:1,
d:"Pumpkin Pie:280;Gulf Shores:290;Rainbow Rush:290;Passion Punch:290;Raspberry Queen:290;Orange Dream Float:290;Dr. Caramel Apple:310;Ghoul Fuel:310;Dirty Salted Caramel:320;Red Velvet Cheese Cake:320;Poison Apple:320;Dirty Pina Colada:320;Coco Cabana:320;Apple Berry:330;Dirty Energy Caramel Apple (Red Bull):350;Afterlife Rush (Red Bull):350;Dreamsicle Dirty (Red Bull):360"
},

{
id:"milkshakes",
t:"Milkshakes",
v:1,
d:"Rosy Gulkand:190;Good O Vanilla:220;Butterscotch:220;Kesar Badam:230;Kiwi Crush:250;Loving Litchi:250;Spicy Guava:250;Red Velvet:260;Frozen Bounty:260;Bubble Gum:270;Garden Strawberry:270;Candy Crush:280;Cotton Candy:280;Berry Blast:280;Popcorn Time:290;Chilli Chocolate:290;Oreo Cheesecake:290;Snicker Surprise:290;Salted Caramel:290;Tiramisu:290;Nutty Chocolate:310;Mint Choco Chip:310;Chocolate Hazelnut:310;Kitkat Oreo:310;Choco Hazelnut Brownie:330;Belgian Chocolate:330;Ferrero Rocher:350"
},

{
id:"coffee",
t:"Coffee",
v:1,
d:"Ice Americano:290;Ice Mocha:290;Pistachio Iced Latte:310;Blueberry Ice Latte:310;Orange Americano:320;Lemon Honey Americano:320;Capa-Chillo:320;Vegan Shake:320;Mocha-Chillo:340;Blue Orange Cloud:340;Frappe:350;Tonic Americano:350;Pineapple Mont Blanc:350;Dark Frappe:370;Mocha Frappe:370"
},

{
id:"matcha",
t:"Matcha",
v:1,
d:"Blue Iced Matcha:360;Matcha Strawberry Mint:360;Matcha Strawberry Cloud:360;Iced Matcha Orange:360;Matcha Caramel Latte:360;Ube Iced Matcha:420;Kesar Matcha Cloud:420;Blueberry Yakult Matcha:420;Iced Matcha Cocoa Milk:420"
},

{
id:"affogato",
t:"Affogato (200ml)",
v:1,
d:"Vanilla Affogato:270;Hazelnut Affogato:300;Caramel Affogato:300;Berries Affogato:320;Pistachio Affogato:360"
},

{
id:"crunchies",
t:"Add-on Crunchies",
d:"Onion Rings (3 pcs):80;Cheese Corn Nugget (5 pcs):80;Chicken Popcorn (5 pcs):90;Chicken Nuggets (5 pcs):90"
},

{
id:"mayyo",
t:"Add-on Mayyo",
v:1,
d:"Cheese Mayyo:40;Cheese & Jalapeno Mayyo:40;Peri Peri Mayyo:40;Tandoori Mayyo:40;BBQ Chilli Mayyo:40;Chilli Cheese Mayyo:40;Grilled Ghost Mayyo:40;Ceasar Dressing:40;Mexican Mayyo:40;Mint Mayyo:40;Tartare Mayyo:40;Chipotle Mayyo:40;Thecha:60;Guacamole:125"
},

{
id:"fats",
t:"Add Good Fats",
v:1,
d:"Avocado:95;Mozzarella Cheese:60;Cheddar Cheese:60;Feta Cheese:60;Parmesan Cheese:60;Bocconcini Cheese:60"
},

{
id:"protein",
t:"Add-on Protein",
d:"Grilled Chicken (40 gms):75;Smoked Chicken (40 gms):90;Boiled Egg (2 pcs):60;Grilled Paneer (40 gms):75;Grilled Tofu (40 gms):75;Fish Finger (4 pcs):120;Falafel (4 pcs):100"
}

];


// ====== CATEGORY IMAGES ======

const IMG = {
"veg-momos":"momos-veg.jpg",
"chicken-momos":"momos-chicken.jpg",
"veg-fries":"fries-veg.jpg",
"chicken-fries":"fries-chicken.jpg",
"dirty-soda":"dirty-soda.jpg",
"milkshakes":"milkshakes.jpg",
"coffee":"coffee.jpg",
"matcha":"matcha.jpg",
"affogato":"affogato.jpg"
};


// ====== HELPERS ======

const $ = s => document.querySelector(s);

const esc = s => String(s).replace(/[&<>"']/g, c => ({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;"
}[c]));


// ====== CART STORAGE ======

let cart = {};

try {
  const stored = JSON.parse(localStorage.getItem("sc_cart")) || {};

  Object.entries(stored).forEach(([key, item]) => {
    if (
      item &&
      Number.isFinite(Number(item.p)) &&
      Number.isInteger(Number(item.q)) &&
      Number(item.p) > 0 &&
      Number(item.q) > 0
    ) {
      cart[key] = {
        p: Number(item.p),
        q: Number(item.q)
      };
    }
  });

} catch (e) {
  cart = {};
}


// ====== RENDER CATEGORY CHIPS ======

$("#chips").innerHTML = MENU.map(category => `
  <a href="#${category.id}">
    ${esc(category.t)}
  </a>
`).join("");


// ====== RENDER MENU ======

$("#menu").innerHTML = MENU.map(category => {

  const items = category.d.split(";").map(item => {

    const [name, priceText] = item.split(":");

    const prices = priceText.split("/").map(Number);

    const mark =
      category.id.includes("chicken") ||
      /chicken|fish/i.test(name)
      ? "nv"
      : "veg";

    const dot =
      category.id.includes("momos") ||
      category.id.includes("fries")
      ? `<i class="${mark}"></i>`
      : "";

    const buttons = prices.map((price, index) => {

      const label =
        prices.length > 1
        ? [V1, V2][index]
        : "";

      const key = label
        ? `${name} (${label})`
        : name;

      return `
        <button
          data-k="${esc(key)}"
          data-p="${price}"
          aria-label="Add ${esc(key)} for ₹${price}"
        >
          ${label ? `<small>${label}</small>` : ""}
          ₹${price}
        </button>
      `;

    }).join("");

    return `
      <div class="it">
        ${dot}
        <span class="nm">${esc(name)}</span>
        <span class="lead"></span>
        <span class="prices">${buttons}</span>
      </div>
    `;

  }).join("");

  const image = IMG[category.id]
    ? `
      <img
        src="${IMG[category.id]}"
        alt="${esc(category.t)}"
        loading="lazy"
        onerror="this.remove()"
      >
    `
    : "";

  return `
    <section class="cat" id="${category.id}">
      <div class="cat-side">
        <h2>${esc(category.t)}</h2>
        ${image}
      </div>

      <div class="list">
        ${items}
      </div>
    </section>
  `;

}).join("");


// ================================================
// CART FUNCTIONS
// ================================================


// ====== SAVE CART ======

function save() {

  try {
    localStorage.setItem(
      "sc_cart",
      JSON.stringify(cart)
    );
  } catch (e) {
    console.warn("Cart could not be saved.", e);
  }

}


// ====== CALCULATE TOTAL ======

function getCartTotal() {

  return Object.keys(cart).reduce(
    (total, key) =>
      total + cart[key].q * cart[key].p,
    0
  );

}


// ====== RENDER CART ======

function render() {

  const keys = Object.keys(cart);

  const quantity = keys.reduce(
    (total, key) => total + cart[key].q,
    0
  );

  const total = getCartTotal();

  $("#count").textContent = quantity;

  $("#total").textContent = "₹" + total;

  $("#cartItems").innerHTML = keys.length

    ? keys.map(key => `

      <div class="row">

        <div class="nm">
          ${esc(key)}
          <small>₹${cart[key].p} each</small>
        </div>

        <div class="qty">

          <button
            data-m="${esc(key)}"
            aria-label="Remove one"
          >−</button>

          <span>${cart[key].q}</span>

          <button
            data-a="${esc(key)}"
            aria-label="Add one"
          >+</button>

        </div>

        <strong>
          ₹${cart[key].q * cart[key].p}
        </strong>

      </div>

    `).join("")

    : `
      <p class="empty">
        Your cart is empty.
        Add something tasty from the menu.
      </p>
    `;

  save();

}


// ====== ADD / REMOVE ITEMS ======

function add(key, price, change) {

  if (!cart[key]) {

    if (change < 0) return;

    cart[key] = {
      p: Number(price),
      q: 0
    };

  }

  cart[key].q += change;

  if (cart[key].q <= 0) {
    delete cart[key];
  }

  render();

}


// ====== MENU AND CART BUTTON EVENTS ======

document.addEventListener("click", event => {

  const button = event.target.closest("button");

  if (!button) return;

  if (button.dataset.k) {

    add(
      button.dataset.k,
      Number(button.dataset.p),
      1
    );

    const cartButton = $("#openCart");

    if (cartButton.animate) {

      cartButton.animate(
        [
          { transform: "scale(1.12)" },
          { transform: "scale(1)" }
        ],
        200
      );

    }

  }

  else if (button.dataset.a) {

    const key = button.dataset.a;

    if (cart[key]) {
      add(key, cart[key].p, 1);
    }

  }

  else if (button.dataset.m) {

    const key = button.dataset.m;

    if (cart[key]) {
      add(key, cart[key].p, -1);
    }

  }

});


// ================================================
// CART DRAWER
// ================================================

function toggleCart(open) {

  document.body.classList.toggle("open", open);

}

$("#openCart").addEventListener("click", () => {
  toggleCart(true);
});

$("#closeCart").addEventListener("click", () => {
  toggleCart(false);
});

$("#overlay").addEventListener("click", () => {
  toggleCart(false);
});

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    toggleCart(false);
  }

});


// ================================================
// PICKUP / DELIVERY
// ================================================

$("#mode").addEventListener("change", event => {

  const address = $("#address");

  const isDelivery = event.target.value === "Delivery";

  address.hidden = !isDelivery;

  address.required = isDelivery;

  if (!isDelivery) {
    address.value = "";
  }

});


// ================================================
// WHATSAPP ORDER SYSTEM
// ================================================

$("#orderForm").addEventListener("submit", event => {

  event.preventDefault();

  const error = $("#err");

  const keys = Object.keys(cart);

  const name = $("#name").value.trim();

  const phone = $("#phone").value.trim();

  const mode = $("#mode").value;

  const address = $("#address").value.trim();

  const notes = $("#notes").value.trim();


  // Check cart

  if (!keys.length) {

    error.textContent =
      "Add at least one item to your cart.";

    return;

  }


  // Check customer name

  if (!name) {

    error.textContent =
      "Please enter your name.";

    $("#name").focus();

    return;

  }


  // Check phone

  const cleanPhone = phone.replace(/\D/g, "");

  if (cleanPhone.length < 10 || cleanPhone.length > 15) {

    error.textContent =
      "Enter a valid phone number.";

    $("#phone").focus();

    return;

  }


  // Check delivery address

  if (mode === "Delivery" && !address) {

    error.textContent =
      "Please enter your delivery address.";

    $("#address").focus();

    return;

  }


  error.textContent = "";


  // Calculate total

  const total = getCartTotal();


  // Prepare order items

  const orderLines = keys.map(key => {

    return `• ${key} x ${cart[key].q} = ₹${cart[key].q * cart[key].p}`;

  }).join("\n");


  // Create WhatsApp message

  const message =

    `*New Order - Shake Chilli*\n\n` +

    `${orderLines}\n\n` +

    `*Total: ₹${total}*\n\n` +

    `Name: ${name}\n` +

    `Phone: ${phone}\n` +

    `Type: ${mode}` +

    (mode === "Delivery"
      ? `\nAddress: ${address}`
      : "") +

    (notes
      ? `\nNotes: ${notes}`
      : "");


  // Open WhatsApp

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );

});


// ================================================
// ACTIVE CATEGORY HIGHLIGHT
// ================================================

const chips = [
  ...document.querySelectorAll("#chips a")
];

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        chips.forEach(chip => {

          chip.classList.toggle(
            "on",
            chip.getAttribute("href") ===
            "#" + entry.target.id
          );

        });

      }

    });

  }, {
    rootMargin: "-30% 0px -65% 0px"
  });


  document.querySelectorAll(".cat").forEach(section => {

    observer.observe(section);

  });

}


// ================================================
// FOOTER YEAR
// ================================================

$("#yr").textContent = new Date().getFullYear();


// ================================================
// INITIALIZE WEBSITE
// ================================================

render();

console.log("Shake Chilli website initialized successfully.");
