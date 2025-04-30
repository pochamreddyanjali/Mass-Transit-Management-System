import { brtsRoutes } from "../data/index.js";
import { metroRoutes } from "../data/index.js";

function buildTransitGraph(brtsRoutes, metroRoutes) {
  const graph = {};

  // Helper to add bidirectional edge
  function addEdge(from, to, type = "BRTS", time = 2, line) {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];

    graph[from].push({ node: to, type, time, line });
    graph[to].push({ node: from, type, time, line });
  }

  // Add BRTS route edges
  for (const route of brtsRoutes) {
    const stops = route.stations;
    const lineName = route.routeId || "Unknown BRTS Line";

    for (let i = 0; i < stops.length - 1; i++) {
      const from = stops[i];
      const to = stops[i + 1];
      addEdge(from, to, "BRTS", 2, lineName);
    }
  }

  // Add Metro route edges
  for (const line of metroRoutes) {
    const stations = line.stations;
    const lineName = line.color || "Unknown Metro Line";

    for (let i = 0; i < stations.length - 1; i++) {
      const from = stations[i].name;
      const to = stations[i + 1].name;
      addEdge(from, to, "Metro", 2, lineName);
    }
  }

  // Add BRTS <=> Metro interchange connections
  for (const line of metroRoutes) {
    for (const station of line.stations) {
      const metroStop = station.name;
      const nearbyBrtsStops = station.brtsNearby || [];

      for (const brtsStop of nearbyBrtsStops) {
        addEdge(metroStop, brtsStop, "interchange", 10); // interchange cost
      }
    }
  }

  return graph;
}

const graph = buildTransitGraph(brtsRoutes, metroRoutes);
export { buildTransitGraph, graph };
