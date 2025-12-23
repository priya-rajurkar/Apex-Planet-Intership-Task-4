let products = [
    { name: "HTML Book", category: "book", price: 200 },
    { name: "CSS Book", category: "book", price: 150 },
    { name: "JS Course", category: "course", price: 500 }
];

function showProducts() {
    let filter = document.getElementById("filter").value;
    let sort = document.getElementById("sort").value;

    let result = products.filter(p =>
        filter === "all" ? true : p.category === filter
    );

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    let div = document.getElementById("productList");
    div.innerHTML = "";

    result.forEach(p => {
        div.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>Category: ${p.category}</p>
                <p>Price: ₹${p.price}</p>
            </div>`;
    });
}

showProducts();
