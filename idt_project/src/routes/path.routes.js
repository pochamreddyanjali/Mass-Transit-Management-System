import express from "express";
import { graph } from "../utils/index.js";
import { findBestPath } from "../utils/index.js";
import { allStops } from "../data/index.js";

const router = express.Router();

router.get("/path", (req, res) => {
  const { source, destination } = req.query;

  if (!source || !destination) {
    return res
      .status(400)
      .json({ error: "Source and destination are required." });
  }

  const result = findBestPath(graph, source, destination);

  if (result.path.length === 0) {
    return res.status(404).json({ error: "No path found." });
  }

  res.json(result);
});

router.get("/stops", (req, res) => {
  const { stopName } = req.query;
  if (!stopName) {
    return res.json(allStops);
  }
  const filteredStops = allStops.filter((stop) =>
    stop.toLowerCase().startsWith(stopName.toLowerCase())
  );
  res.json(filteredStops);
});

export default router;
