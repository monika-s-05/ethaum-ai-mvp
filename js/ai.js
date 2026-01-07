function recommendTool(category) {
  const result = tools.filter((tool) => tool.category === category);
  return result.length ? result[0].name : "No tool found";
}
