// import { graph } from "./utils/index.js";
// import { findBestPath } from "./utils/index.js";

// const source = "Science City Approach BRTS";
// const destination = "Thaltej Gam";

// const { path, steps, cost, line } = findBestPath(graph, source, destination);

// console.log(`Best path from ${source} to ${destination} (${cost} mins):`);
// // steps.forEach((step, index) => {
// //   console.log(
// //     `${index + 1}. ${step.from} ➡️ ${step.to} via ${step.type.toUpperCase()}`
// //   );
// // });

// for (const step of steps) {
//   const lineInfo = step.line ? ` on ${step.line}` : "";
//   console.log(`➡️ ${step.from} ➡ ${step.to} via ${step.type}${lineInfo}`);
// }

import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res)=>{
  res.send("Server is UP");
})
