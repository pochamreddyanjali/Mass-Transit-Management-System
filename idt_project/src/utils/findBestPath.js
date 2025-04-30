import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function findBestPath(graph, source, destination) {
  const pq = new MinPriorityQueue((x) => x.cost);
  const visited = new Set();
  const previous = {};
  const modeMap = {};
  const costMap = {};
  const lineMap = {};

  pq.enqueue({ node: source, path: [source], cost: 0, mode: null, line: null });
  costMap[source] = 0;

  while (!pq.isEmpty()) {
    const { node, path, cost, mode, line } = pq.dequeue();

    if (visited.has(node)) continue;
    visited.add(node);
    modeMap[node] = mode;

    if (node === destination) {
      const steps = [];
      for (let i = 0; i < path.length - 1; i++) {
        const from = path[i];
        const to = path[i + 1];
        const connection = graph[from].find((n) => n.node === to);
        steps.push({ from, to, type: connection.type, line: connection.line });
      }
      return { path, steps, cost };
    }

    for (const neighbor of graph[node] || []) {
      const nextNode = neighbor.node;
      const travelCost = neighbor.time;
      const totalCost = cost + travelCost;

      if (!costMap[nextNode] || totalCost < costMap[nextNode]) {
        costMap[nextNode] = totalCost;
        previous[nextNode] = node;
        pq.enqueue({
          node: nextNode,
          path: [...path, nextNode],
          cost: totalCost,
          mode: neighbor.type,
          line: neighbor.line,
        });
      }
    }
  }

  return { path: [], steps: [], cost: Infinity, line: [] };
}

export { findBestPath };
