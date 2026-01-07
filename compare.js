const container = document.getElementById("compareContainer");

// For MVP, compare first 2 tools
const selectedTools = tools.slice(0, 2);

selectedTools.forEach((tool) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${tool.name}</h3>
    <p><strong>Category:</strong> ${tool.category}</p>
    <p><strong>Rating:</strong> ⭐ ${tool.rating}</p>
    <p><strong>Price:</strong> ${tool.price}</p>
    <p><strong>Stage:</strong> ${tool.stage}</p>
  `;
  container.appendChild(div);
});
