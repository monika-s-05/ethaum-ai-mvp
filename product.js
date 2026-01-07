const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

const product = tools.find((t) => t.id === id);

document.getElementById("productDetails").innerHTML = `
  <h2>${product.name}</h2>
  <p>${product.description}</p>
  <p>Rating: ⭐ ${product.rating}</p>
  <p>Price: ${product.price}</p>
  <p>Stage: ${product.stage}</p>
  <ul>
    ${product.features.map((f) => `<li>${f}</li>`).join("")}
  </ul>
`;
