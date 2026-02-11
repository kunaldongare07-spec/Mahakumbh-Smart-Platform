let adminState = {
  globalCrowd: "Low",

  timeAdvisory: {
    bestTime: "5–8 AM",
    avoidTime: "12–4 PM"
  },

  routesPriority: [
    { name: "Route A – Railway Station to Sangam", priority: 1 },
    { name: "Route B – Bus Stand to Sangam", priority: 2 },
    { name: "Route C – Parking Zone East", priority: 3 },
    { name: "Route D – Parking Zone West", priority: 4 },
    { name: "Route E – Temporary Bridge Path", priority: 5 }
  ],

  templePriority: [
    { name: "Hanuman Mandir", priority: 1 },
    { name: "Akshayvat Temple", priority: 2 },
    { name: "Bade Hanuman Ji", priority: 3 },
    { name: "Patalpuri Temple", priority: 4 },
    { name: "Kalyani Devi Temple", priority: 5 }
  ],

  ghatPriority: [
    { name: "Sangam Ghat", priority: 1, suitableFor: "All" },
    { name: "Araail Ghat", priority: 2, suitableFor: "Families & Elderly" },
    { name: "Dashashwamedh Ghat", priority: 3, suitableFor: "General" },
    { name: "Rasoolabad Ghat", priority: 4, suitableFor: "Low Crowd" },
    { name: "Jhunsi Ghat", priority: 5, suitableFor: "Alternate Route" }
  ],

  notice: ""
};

function getAdminState() {
  return adminState;
}

function setAdminState(newState) {
  adminState = {
    ...adminState,
    ...newState
  };
}

module.exports = {
  getAdminState,
  setAdminState
};
