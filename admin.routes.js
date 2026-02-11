const express = require("express");
const router = express.Router();

/* ---------------- ADMIN STATE (SINGLE SOURCE OF TRUTH) ---------------- */

let adminState = {
  globalCrowd: "Low",

  zones: {
    ghats: "Low",
    temples: "Low",
    routes: "Low",
    accommodation: "Low"
  },

  timeAdvisory: {
    bestTime: "5–8 AM",
    avoidTime: "12–4 PM"
  },

  notice: "",

  routesPriority: [
    { name: "Railway Station Route", priority: 1 },
    { name: "Bus Stand Route", priority: 2 },
    { name: "Highway Entry Route", priority: 3 },
    { name: "Parking Route", priority: 4 }
  ],

  templePriority: [
    { name: "Bade Hanuman Ji", priority: 1 },
    { name: "Akshayvat Temple", priority: 2 },
    { name: "Saraswati Koop", priority: 3 }
  ],

  ghatPriority: [
    { name: "Sangam Ghat", suitableFor: "General", priority: 1 },
    { name: "Araail Ghat", suitableFor: "Senior Citizens", priority: 2 },
    { name: "Jhunsi Ghat", suitableFor: "Family", priority: 3 }
  ]
};

/* ---------------- HELPERS ---------------- */

function getAdminState() {
  return adminState;
}

function setAdminState(update) {
  adminState = {
    ...adminState,
    ...update
  };
}

/* ---------------- ROUTES ---------------- */

// ADMIN DASHBOARD
router.get("/", (req, res) => {
  res.render("admin", {
    title: "Admin Panel",
    adminData: adminState
  });
});

// UPDATE GLOBAL CROWD
router.post("/update", (req, res) => {
  setAdminState({ globalCrowd: req.body.globalCrowd });
  res.redirect("/admin");
});

// UPDATE TIME ADVISORY
router.post("/update-time", (req, res) => {
  setAdminState({
    timeAdvisory: {
      bestTime: req.body.bestTime,
      avoidTime: req.body.avoidTime
    }
  });
  res.redirect("/admin");
});

// UPDATE ZONES
router.post("/update-zones", (req, res) => {
  setAdminState({
    zones: {
      ghats: req.body.ghats,
      temples: req.body.temples,
      routes: req.body.routes,
      accommodation: req.body.accommodation
    }
  });
  res.redirect("/admin");
});

// UPDATE ROUTE PRIORITY
router.post("/update-routes", (req, res) => {
  adminState.routesPriority.forEach((route, i) => {
    route.priority = Number(req.body[`priority_${i}`]);
  });
  res.redirect("/admin");
});

// UPDATE TEMPLE PRIORITY
router.post("/update-temples", (req, res) => {
  adminState.templePriority.forEach((temple, i) => {
    temple.priority = Number(req.body[`priority_${i}`]);
  });
  res.redirect("/admin");
});

// UPDATE GHAT PRIORITY
router.post("/update-ghats", (req, res) => {
  adminState.ghatPriority.forEach((ghat, i) => {
    ghat.priority = Number(req.body[`priority_${i}`]);
  });
  res.redirect("/admin");
});

module.exports = {
  router,
  getAdminState
};
