// Mengelola Modal Login
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');

loginBtn.addEventListener('click', () => {
    loginModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    loginModal.classList.add('hidden');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        alert('Login berhasil! Selamat datang, ' + username);
        loginModal.classList.add('hidden');
    } else {
        alert('Username atau password salah!');
    }
    loginForm.reset();
});

// Mengelola Slider
const slides = document.querySelector('.slider').children;
const prevBtn = document.querySelector('.absolute.left-0');
const nextBtn = document.querySelector('.absolute.right-0');
let index = 0;

function showSlide(n) {
    index = (n + slides.length) % slides.length;
    for (let slide of slides) {
        slide.style.display = 'none';
    }
    slides[index].style.display = 'block';
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));
showSlide(index);

// Daftar produk
const products = [
    { name: "Beras Organik", price: 12000, stock: 500 },
    { name: "Jagung Manis", price: 8000, stock: 200 },
    { name: "Kedelai", price: 9000, stock: 300 },
    { name: "Cabe Merah", price: 15000, stock: 150 },
    { name: "Kol", price: 9000, stock: 150 }
];

// Mengisi tabel produk
const productTableBody = document.getElementById("productTableBody");
products.forEach((product) => {
    const row = document.createElement("tr");
    row.classList.add("border-b");

    row.innerHTML = `
         <td class="px-4 py-2">${product.name}</td>
         <td class="px-4 py-2">Rp ${product.price.toLocaleString()}</td>
         <td class="px-4 py-2">${product.stock} kg</td>
     `;

    productTableBody.appendChild(row);
});

// Mengisi dropdown "Nama Produk" di form pesanan
const productSelect = document.getElementById("productSelect");
products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Mengelola form pesanan
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedProduct = productSelect.value;
    const orderQuantity = parseInt(document.getElementById("orderQuantity").value);
    const customerName = document.getElementById("customerName").value;
    const customerPhone = document.getElementById("customerPhone").value;

    // Validasi stok
    const product = products.find((item) => item.name === selectedProduct);
    if (orderQuantity > product.stock) {
        alert("Stok tidak mencukupi!");
        return;
    }

    // Mengurangi stok
    product.stock -= orderQuantity;

    // Mengupdate tabel produk
    productTableBody.innerHTML = "";
    products.forEach((product) => {
        const row = document.createElement("tr");
        row.classList.add("border-b");

        row.innerHTML = `
             <td class="px-4 py-2">${product.name}</td>
             <td class="px-4 py-2">Rp ${product.price.toLocaleString()}</td>
             <td class="px-4 py-2">${product.stock} kg</td>
         `;

        productTableBody.appendChild(row);
    });

    // Menampilkan pesan sukses
    alert(`Pesanan berhasil! Terima kasih, ${customerName}. Pesanan Anda untuk ${orderQuantity} kg ${selectedProduct} telah diterima.`);

    // Reset form
    orderForm.reset();
});
