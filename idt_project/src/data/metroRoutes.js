const rawMetroRoutes = [
  {
    color: "Blue Line",
    stations: [
      { name: "Vastral Gam", brtsNearby: [] },
      { name: "Nirant Cross Road", brtsNearby: [] },
      { name: "Vastral", brtsNearby: [] },
      { name: "Rabari Colony", brtsNearby: ["Rabari Colony BRTS"] },
      { name: "Amraivadi", brtsNearby: [] },
      { name: "Apparel Park", brtsNearby: [] },
      { name: "Kankaria East", brtsNearby: [] },
      { name: "Kalupur Metro Station", brtsNearby: ["Kalupur BRTS"] },
      { name: "Ghee Kanta", brtsNearby: ["Raikhad Char Rasta BRTS"] },
      { name: "Shahpur", brtsNearby: ["Sarkari Litho Press BRTS"] },
      {
        name: "Old High Court",
        isInterchange: true,
        connectsTo: ["Red Line", "Blue Line"],
        brtsNearby: [],
      },
      { name: "SP Stadium", brtsNearby: [] },
      { name: "Commerce Six road", brtsNearby: [] },
      { name: "Gujarat University", brtsNearby: ["Memnagar BRTS"] },
      { name: "Gurukul Road", brtsNearby: [] },
      { name: "Doordarshan Kendra", brtsNearby: [] },
      { name: "Theltej", brtsNearby: [] },
      { name: "Thaltej Gam", brtsNearby: [] },
    ],
  },
  {
    color: "Red Line",
    stations: [
      { name: "APMC", brtsNearby: [] },
      { name: "Jivraj Park", brtsNearby: [] },
      { name: "Rajiv Nagar", brtsNearby: [] },
      { name: "Shreyas", brtsNearby: ["Dharnidhar Derasar BRTS"] },
      { name: "Paldi", brtsNearby: [] },
      { name: "Gandhigram", brtsNearby: [] },
      {
        name: "Old High Court",
        isInterchange: true,
        connectsTo: ["Red Line", "Blue Line"],
        brtsNearby: [],
      },
      { name: "Usmanpura", brtsNearby: [] },
      { name: "Vijaynagar", brtsNearby: [] },
      { name: "Vadaj", brtsNearby: [] },
      {
        name: "Ranip",
        brtsNearby: ["N R Patel Park BRTS", "Ranip Cross Road BRTS"],
      },
      { name: "AEC", brtsNearby: ["Sabarmati Power House BRTS"] },
      { name: "Sabarmati", brtsNearby: ["Sabarmati Police stations BRTS"] },
      {
        name: "Motera Stadium",
        isInterchange: true,
        connectsTo: ["Red Line", "Yellow Line"],
        brtsNearby: [],
      },
    ],
  },
  {
    color: "Violet Line",
    stations: [
      { name: "GIFT City", brtsNearby: [] },
      { name: "PDEU", brtsNearby: [] },
      {
        name: "GNLU",
        isInterchange: true,
        connectsTo: ["Violet Line", "Yellow Line"],
        brtsNearby: [],
      },
    ],
  },
  {
    color: "Yellow Line",
    stations: [
      {
        name: "Motera Stadium",
        isInterchange: true,
        connectsTo: ["Red Line", "Yellow Line"],
        brtsNearby: [],
      },
      {
        name: "GNLU",
        isInterchange: true,
        connectsTo: ["Violet Line", "Yellow Line"],
        brtsNearby: [],
      },
      { name: "Raysan", brtsNearby: [] },
      { name: "Randesan", brtsNearby: [] },
      { name: "Dholukava Circle", brtsNearby: [] },
      { name: "Infocity", brtsNearby: [] },
      { name: "Sector 1", brtsNearby: [] },
    ],
  },
];

export default rawMetroRoutes;