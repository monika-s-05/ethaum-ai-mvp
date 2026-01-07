const toolList = document.getElementById("toolList");

tools.forEach((tool) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${tool.name}</h3>
    <p class="category">${tool.category}</p>

    <p class="rating">⭐ ${tool.rating}</p>

    <p class="price">${tool.price}</p>
    <span class="badge">${tool.stage}</span>

    <a class="btn" href="product.html?id=${tool.id}">
      View Details
    </a>
  `;

  toolList.appendChild(card);
});
