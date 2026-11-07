// ====== SETTINGS ======
const WHATSAPP_NUMBER = "918369405815"; // country code + number, no + or spaces
const V1 = "Regular", V2 = "Large";      // momo size labels (edit to match your portions)

// ====== MENU DATA ======  format: "Item:price" or "Item:price1/price2" for two sizes
const MENU = [
 {id:"veg-momos",t:"Veg Momos",v:1,d:"Veg Steam:150/210;Veg Fried:170/230;Veg Kurkure:190/260;Veg Cheese:190/260;Veg Burnt Garlic Cheese:200/270;Veg Tandoori:190/260;Veg Pahadi:190/260;Veg Peri Peri Pan Fried:190/260;Veg Chilli:190/260;Veg Schezwan:190/260"},
 {id:"chicken-momos",t:"Chicken Momos",d:"Chicken Steam:160/220;Chicken Fried:170/230;Chicken Kurkure:200/270;Chicken Cheese:200/270;Chicken Burnt Garlic Cheese:210/280;Chicken Tandoori:200/270;Chicken Pahadi:200/270;Chicken Peri Peri Pan Fried:200/270;Chicken Chilli:200/270;Chicken Schezwan:200/270"},
 {id:"veg-fries",t:"Veg Fries",v:1,d:"Plain Fries:150;Cheezy Fries:170;Peri Peri Fries:170;Tandoori Fries:170;Smoky Fries:170;Schezwan Cheese Fries:170;Thecha Fries:180;Mint Velvet Fries:180;Chipotle Veg Fries:180;Veg Korean Fries:220;Chilli Garlic Fries:220;Sweet Potato Fries:250;Veg Fries Bowl:260"},
 {id:"chicken-fries",t:"Chicken Fries & Bites",d:"Tandoori Chicken Fries:210;Ceasar Fries:220;Smoky Chicken Fries:220;Peri Peri Chicken Fries:230;Chipotle Chicken Fries:230;Fishi Fries:230;Chicken Fries Bowl:230;Korean Fries:250;Chicken Fries Bowl (Loaded):280;Chicken Jungle Fries:320;Chicken Popcorn (20 pcs):210;Chicken Nuggets (10 pcs):200"},
 {id:"dirty-soda",t:"Dirty Soda",v:1,d:"Pumpkin Pie:280;Gulf Shores:290;Rainbow Rush:290;Passion Punch:290;Raspberry Queen:290;Orange Dream Float:290;Dr. Caramel Apple:310;Ghoul Fuel:310;Dirty Salted Caramel:320;Red Velvet Cheese Cake:320;Poison Apple:320;Dirty Pina Colada:320;Coco Cabana:320;Apple Berry:330;Dirty Energy Caramel Apple (Red Bull):350;Afterlife Rush (Red Bull):350;Dreamsicle Dirty (Red Bull):360"},
 {id:"milkshakes",t:"Milkshakes",v:1,d:"Rosy Gulkand:190;Good O Vanilla:220;Butterscotch:220;Kesar Badam:230;Kiwi Crush:250;Loving Litchi:250;Spicy Guava:250;Red Velvet:260;Frozen Bounty:260;Bubble Gum:270;Garden Strawberry:270;Candy Crush:280;Cotton Candy:280;Berry Blast:280;Popcorn Time:290;Chilli Chocolate:290;Oreo Cheesecake:290;Snicker Surprise:290;Salted Caramel:290;Tiramisu:290;Nutty Chocolate:310;Mint Choco Chip:310;Chocolate Hazelnut:310;Kitkat Oreo:310;Choco Hazelnut Brownie:330;Belgian Chocolate:330;Ferrero Rocher:350"},
 {id:"coffee",t:"Coffee",v:1,d:"Ice Americano:290;Ice Mocha:290;Pistachio Iced Latte:310;Blueberry Ice Latte:310;Orange Americano:320;Lemon Honey Americano:320;Capa-Chillo:320;Vegan Shake:320;Mocha-Chillo:340;Blue Orange Cloud:340;Frappe:350;Tonic Americano:350;Pineapple Mont Blanc:350;Dark Frappe:370;Mocha Frappe:370"},
 {id:"matcha",t:"Matcha",v:1,d:"Blue Iced Matcha:360;Matcha Strawberry Mint:360;Matcha Strawberry Cloud:360;Iced Matcha Orange:360;Matcha Caramel Latte:360;Ube Iced Matcha:420;Kesar Matcha Cloud:420;Blueberry Yakult Matcha:420;Iced Matcha Cocoa Milk:420"},
 {id:"affogato",t:"Affogato (200ml)",v:1,d:"Vanilla Affogato:270;Hazelnut Affogato:300;Caramel Affogato:300;Berries Affogato:320;Pistachio Affogato:360"},
 {id:"crunchies",t:"Add-on Crunchies",d:"Onion Rings (3 pcs):80;Cheese Corn Nugget (5 pcs):80;Chicken Popcorn (5 pcs):90;Chicken Nuggets (5 pcs):90"},
 {id:"mayyo",t:"Add-on Mayyo",v:1,d:"Cheese Mayyo:40;Cheese & Jalapeno Mayyo:40;Peri Peri Mayyo:40;Tandoori Mayyo:40;BBQ Chilli Mayyo:40;Chilli Cheese Mayyo:40;Grilled Ghost Mayyo:40;Ceasar Dressing:40;Mexican Mayyo:40;Mint Mayyo:40;Tartare Mayyo:40;Chipotle Mayyo:40;Thecha:60;Guacamole:125"},
 {id:"fats",t:"Add Good Fats",v:1,d:"Avocado:95;Mozzarella Cheese:60;Cheddar Cheese:60;Feta Cheese:60;Parmesan Cheese:60;Bocconcini Cheese:60"},
 {id:"protein",t:"Add-on Protein",d:"Grilled Chicken (40 gms):75;Smoked Chicken (40 gms):90;Boiled Egg (2 pcs):60;Grilled Paneer (40 gms):75;Grilled Tofu (40 gms):75;Fish Finger (4 pcs):120;Falafel (4 pcs):100"}
];

// Category photos in the /main folder. Add your own files with these names (momos-veg.jpg, momos-chicken.jpg).
// A missing file is hidden automatically.
const IMG = {"veg-momos":"momos-veg.jpg","chicken-momos":"momos-chicken.jpg","veg-fries":"fries-veg.jpg","chicken-fries":"fries-chicken.jpg","dirty-soda":"dirty-soda.jpg","milkshakes":"milkshakes.jpg","coffee":"coffee.jpg","matcha":"matcha.jpg","affogato":"affogato.jpg"};

const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let cart = {};
try { cart = JSON.parse(localStorage.getItem("sc_cart")) || {}; } catch (e) {}

// ---- render menu ----
$("#chips").innerHTML = MENU.map(c => `<a href="#${c.id}">${c.t}</a>`).join("");
$("#menu").innerHTML = MENU.map(c => {
  const items = c.d.split(";").map(s => {
    const [name, p] = s.split(":"), prices = p.split("/").map(Number);
    const mark = c.id.includes("chicken") || /chicken|fish/i.test(name) ? "nv" : "veg";
    const dot = (c.id.includes("momos") || c.id.includes("fries")) ? `<i class="${mark}"></i>` : "";
    const btns = prices.map((pr, i) => {
      const label = prices.length > 1 ? [V1, V2][i] : "";
      const key = label ? `${name} (${label})` : name;
      return `<button data-k="${esc(key)}" data-p="${pr}" aria-label="Add ${esc(key)} for ₹${pr}">${label ? `<small>${label}</small>` : ""}₹${pr}</button>`;
    }).join("");
    return `<div class="it">${dot}<span class="nm">${esc(name)}</span><span class="lead"></span><span class="prices">${btns}</span></div>`;
  }).join("");
  const img = IMG[c.id] ? `<img src="${IMG[c.id]}" alt="${esc(c.t)}" loading="lazy" onerror="this.remove()">` : "";
  return `<section class="cat" id="${c.id}"><div class="cat-side"><h2>${c.t}</h2>${img}</div><div class="list">${items}</div></section>`;
}).join("");

// ---- cart ----
function save() { try { localStorage.setItem("sc_cart", JSON.stringify(cart)); } catch (e) {} }
function render() {
  const keys = Object.keys(cart);
  const n = keys.reduce((a, k) => a + cart[k].q, 0);
  const total = keys.reduce((a, k) => a + cart[k].q * cart[k].p, 0);
  $("#count").textContent = n;
  $("#total").textContent = "₹" + total;
  $("#cartItems").innerHTML = keys.length ? keys.map(k => `
    <div class="row"><div class="nm">${esc(k)}<small>₹${cart[k].p} each</small></div>
    <div class="qty"><button data-m="${esc(k)}" aria-label="Remove one">−</button><span>${cart[k].q}</span><button data-a="${esc(k)}" aria-label="Add one">+</button></div>
    <strong>₹${cart[k].q * cart[k].p}</strong></div>`).join("") : `<p class="empty">Your cart is empty. Add something tasty from the menu.</p>`;
  save();
}
function add(k, p, d) {
  cart[k] = cart[k] || {p, q: 0};
  cart[k].q += d;
  if (cart[k].q <= 0) delete cart[k];
  render();
}
document.addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.k) { add(b.dataset.k, +b.dataset.p, 1); const c = $("#openCart"); c.animate([{transform:"scale(1.15)"},{transform:"scale(1)"}], 200); }
  else if (b.dataset.a) add(b.dataset.a, cart[b.dataset.a].p, 1);
  else if (b.dataset.m) add(b.dataset.m, cart[b.dataset.m].p, -1);
});
const toggle = o => document.body.classList.toggle("open", o);
$("#openCart").onclick = () => toggle(true);
$("#closeCart").onclick = $("#overlay").onclick = () => toggle(false);
document.addEventListener("keydown", e => e.key === "Escape" && toggle(false));
$("#mode").onchange = e => { $("#address").hidden = e.target.value !== "Delivery"; };

// ---- send to WhatsApp ----
$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  const keys = Object.keys(cart), err = $("#err");
  const name = $("#name").value.trim(), phone = $("#phone").value.trim();
  const mode = $("#mode").value, addr = $("#address").value.trim(), notes = $("#notes").value.trim();
  if (!keys.length) return err.textContent = "Add at least one item to your cart.";
  if (!name || phone.replace(/\D/g, "").length < 10) return err.textContent = "Enter your name and a valid 10-digit phone number.";
  if (mode === "Delivery" && !addr) return err.textContent = "Enter your delivery address.";
  err.textContent = "";
  const total = keys.reduce((a, k) => a + cart[k].q * cart[k].p, 0);
  const lines = keys.map(k => `• ${k} x ${cart[k].q} = ₹${cart[k].q * cart[k].p}`).join("\n");
  const msg = `*New Order - Shake Chilli*\n\n${lines}\n\n*Total: ₹${total}*\n\nName: ${name}\nPhone: ${phone}\nType: ${mode}` +
    (mode === "Delivery" ? `\nAddress: ${addr}` : "") + (notes ? `\nNotes: ${notes}` : "");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
});

// highlight active category chip
const chips = [...document.querySelectorAll("#chips a")];
const io = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) chips.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
}), {rootMargin: "-30% 0px -65% 0px"});
document.querySelectorAll(".cat").forEach(s => io.observe(s));

$("#yr").textContent = new Date().getFullYear();
render();
