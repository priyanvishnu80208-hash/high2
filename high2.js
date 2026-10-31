// API URL
let url = "https://fakestoreapi.com/products";

// TASK 19: Display Loading message
document.querySelector(".api").innerHTML = "Loading...";

document.querySelector(".projectStatus").innerHTML = "Loading...";

// Fetch API
fetch(url)

.then(res => {
    if (!res.ok) {
        throw new Error("API request failed");
    }
    return res.json();
})

.then(data => {

    // TASK 18: Success message
    document.querySelector(".api").innerHTML =
    "API data loaded successfully";

    // TASK 1: Title inside h1
    data.forEach(product => {
        document.querySelector("#task1").innerHTML +=
        `<h1>${product.title}</h1>`;
    });

    // TASK 2: ID and title inside h2
    data.forEach(product => {
        document.querySelector("#task2").innerHTML +=
        `<h2>${product.id} - ${product.title}</h2>`;
    });

    // TASK 3: First 30 characters of title
    data.forEach(product => {
        document.querySelector("#task3").innerHTML +=
        `<p>${product.title.slice(0, 30)}</p>`;
    });

    // TASK 4: First 100 characters of description
    data.forEach(product => {
        document.querySelector("#task4").innerHTML +=
        `<p>${product.description.slice(0, 100)}</p>`;
    });

    // TASK 5: Image inside div
    data.forEach(product => {
        document.querySelector("#task5").innerHTML +=
        `<div><img src="${product.image}" width="200"></div>`;
    });

    // TASK 6: Title, description and image inside div
    data.forEach(product => {
        document.querySelector("#task6").innerHTML +=
        `<div>
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" width="200">
        </div>`;
    });

    // TASK 7: Price inside p
    data.forEach(product => {
        document.querySelector("#task7").innerHTML +=
        `<p>Price: $${product.price}</p>`;
    });

    // TASK 8: Category inside h3
    data.forEach(product => {
        document.querySelector("#task8").innerHTML +=
        `<h3>${product.category}</h3>`;
    });

    // TASK 9: Title in uppercase
    data.forEach(product => {
        document.querySelector("#task9").innerHTML +=
        `<p>${product.title.toUpperCase()}</p>`;
    });

    // TASK 10: Title and character count
    data.forEach(product => {
        document.querySelector("#task10").innerHTML +=
        `<p>${product.title} - Characters: ${product.title.length}</p>`;
    });

    // TASK 11: First 5 products
    data.slice(0, 5).forEach(product => {
        document.querySelector("#task11").innerHTML +=
        `<h3>${product.title}</h3>`;
    });

    // TASK 12: ID, title and price
    data.forEach(product => {
        document.querySelector("#task12").innerHTML +=
        `<p>ID: ${product.id} | ${product.title} | $${product.price}</p>`;
    });

    // TASK 13: Image width 200px
    data.forEach(product => {
        document.querySelector("#task13").innerHTML +=
        `<img src="${product.image}" width="200">`;
    });

    // TASK 14: Separate card for each product
    data.forEach(product => {
        document.querySelector("#task14").innerHTML +=
        `<div class="card">
            <h3>${product.title}</h3>
        </div>`;
    });

    // TASK 15: Title and first 50 description characters
    data.forEach(product => {
        document.querySelector("#task15").innerHTML +=
        `<h3>${product.title}</h3>
         <p>${product.description.slice(0, 50)}</p>`;
    });

    // TASK 16: Titles in console and webpage
    data.forEach(product => {
        console.log(product.title);

        document.querySelector("#task16").innerHTML +=
        `<p>${product.title}</p>`;
    });

    // TASK 17: Title and category inside same div
    data.forEach(product => {
        document.querySelector("#task17").innerHTML +=
        `<div>
            <h3>${product.title}</h3>
            <p>${product.category}</p>
        </div>`;
    });

    // TASK 20: Finally message is displayed below

    // MINI PROJECT
    document.querySelector(".projectStatus").innerHTML =
    "Products loaded successfully";

    let products = document.querySelector(".products");

    data.forEach(product => {

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h2>ID: ${product.id}</h2>
            <h3>${product.title.slice(0, 50)}</h3>
            <p>Price: $${product.price}</p>
            <p>${product.description.slice(0, 100)}</p>
            <img src="${product.image}" width="200">
        `;

        products.appendChild(card);

    });

})

.catch(error => {

    // Display API errors in red
    document.querySelector(".api").innerHTML =
    `<p style="color:red">Error: ${error.message}</p>`;

    document.querySelector(".projectStatus").innerHTML =
    `<p style="color:red">Error: ${error.message}</p>`;

})

.finally(() => {

    // TASK 20: API request completed
    document.querySelector(".api").innerHTML +=
    "<p>API request completed</p>";

    // Mini project completion message
    document.querySelector(".projectStatus").innerHTML +=
    "<p>API request completed</p>";

});