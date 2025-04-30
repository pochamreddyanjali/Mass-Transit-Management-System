import { brtsRoutes, metroRoutes } from "./index.js";

const rawAllStops = [];

brtsRoutes.forEach((route) => {
  if (route.stations) {
    Array.isArray(route.stations)
      ? rawAllStops.push(...route.stations)
      : rawAllStops.push(route.stations);
  }
});

metroRoutes.forEach((route) => {
  if (route.stations) {
    route.stations.forEach((station) => {
      if (station.name) {
        rawAllStops.push(station.name);
      }
    });
  }
});

const allStops = [...new Set(rawAllStops)];

export { allStops };
