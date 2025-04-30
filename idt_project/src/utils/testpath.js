import { graph } from "./index.js";
import { findBestPath } from "./index.js";

const source = "Shahpur";
const destination = "AEC";

const { path, steps, cost } = findBestPath(graph, source, destination);

console.log(`Best path from ${source} to ${destination} (${cost} mins):`);
steps.forEach((step, index) => {
  console.log(
    `${index + 1}. ${step.from} ➡️ ${step.to} via ${step.type.toUpperCase()}`
  );
});
