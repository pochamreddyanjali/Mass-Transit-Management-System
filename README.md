# Ahmedabad Public Transport Path Finder 🚍

This is a full-stack application designed to help users find the most efficient path between two public transport stops in Ahmedabad, using both BRTS and Metro routes. The project prioritizes minimal interchanges and route efficiency, with a modern and sleek frontend interface.

## 📁 Project Overview

This project includes:

- A **Node.js + Express** backend with smart pathfinding logic.
- A **React + TailwindCSS** frontend with real-time suggestions and interactive UX.
- Support for **inter-modal transport** between BRTS and Metro systems.
- Autocomplete feature for both source and destination input fields.

---

## 🧠 How the Pathfinding Works

- The core algorithm (`findBestPath`) is responsible for computing the best route using a weighted graph constructed from available BRTS and Metro data.
- Metro routes are preferred over BRTS when possible.
- Interchanges are detected and added to the result path intelligently.

---

## 📡 API Endpoints

### 1. `GET /api/path`

**Purpose**: Returns the best route from a source to a destination stop.

**Query Parameters**:

- `source` – the starting stop name (string)
- `destination` – the ending stop name (string)

**Example Request**:

```http
GET /api/path?source=Science City Approach BRTS&destination=Thaltej Gam
```

**Response**:

```json
{
  "path": ["Stop A", "Stop B", ..., "Stop Z"],
  "steps": [
    {
      "from": "Stop A",
      "to": "Stop B",
      "type": "BRTS" | "Metro" | "interchange",
      "line": "Line Name"
    },
    ...
  ],
  "cost": 34 // in minutes or unit weight
}
```

---

### 2. `GET /api/stops`

**Purpose**: Returns all available stop names or filters them by a prefix for autocomplete.

**Query Parameters**:

- `stopName` (optional) – a prefix string to filter the stop names

**Examples**:

- `GET /api/stops` → returns all stops
- `GET /api/stops?stopName=Go` → returns all stops starting with "Go"

**Response**:

```json
["Gota", "Gota Cross Road", "Gordhanbaug BRTS", ...]
```

---

## 🗃️ Data Storage Format

### BRTS Data (`brtsRoutes`)

```js
[
  {
    routeId: "9D",
    stations: ["Maninagar BRTS", "Gita Mandir BRTS", ...]
  },
  ...
]
```

### Metro Data (`metroRoutes`)

```js
[
  {
    color: "Blue Line",
    stations: [
      { name: "Vastral Gam", brtsNearby: [] },
      { name: "Nirant Cross Road", brtsNearby: ["Some BRTS Stop"] },
      ...
    ]
  },
  ...
]
```

> A combined set of **unique stop names** is generated from both sources and exposed via the `/api/stops` endpoint.

---

## 💻 Frontend Progress

- Built using **React** with **TailwindCSS** for styling.
- Path Finder form is complete with:
  - Sleek and responsive layout
  - Real-time loading and error handling
  - Full integration with the `/api/path` endpoint
- Autocomplete feature:
  - Suggests top 5 stops in real time from the backend as users type
  - Allows users to click and select a stop to autofill the input
  - Styled dropdown using modern Tailwind design

---

## 🔧 Next Steps

- Add debounce for API requests on autocomplete to optimize performance
- Implement keyboard navigation for suggestions (↑ ↓ Enter)
- Display route visually on a map using libraries like Leaflet or Mapbox (optional)
- Save recent searches or allow bookmarking routes
- Add AMTS routes to get all options availiable for Public Transport

---

## 🧑‍💻 Author & Credits

Developed by Ved Lakkad from Ahmedabad, combining clean UI with efficient backend logic to make public transport more accessible 🚍🗺️
"Minor change" 
