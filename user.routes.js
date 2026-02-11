const express = require("express");
const router = express.Router();
const QRCode = require("qrcode");
const { getAdminState } = require("./admin.routes");
const db = require("../config/db");


/* ---------------- USER DASHBOARD ---------------- */
router.get("/", (req, res) => {
  res.render("user", { title: "User Dashboard" });
});

/* 🔧 CRITICAL FIX: HANDLE GET /user/plan */
router.get("/plan", (req, res) => {
  // If plan exists, show summary
  if (req.session.userPlan) {
    return res.redirect("/user/final-plan");
  }
  // Otherwise go back to booking
  return res.redirect("/booking");
});

/* ---------------- GENERATE SMART PLAN ---------------- */
router.post("/plan", async (req, res) => {
  const {
    name,
    age,
    gender,
    fromCity,
    travelDate,
    place,
    temple,
    activity
  } = req.body;
  

  const adminState = getAdminState();

  let crowdLevel = adminState.globalCrowd || "Medium";
  let routeAdvice = "Follow standard routes and signage.";
  let timeAdvice = adminState.timeAdvisory?.bestTime || "Early Morning";
  let adminNote = adminState.notice || "Follow official advisories.";

  if (Number(age) >= 60) {
    routeAdvice = "Senior-friendly routes with minimal walking.";
    timeAdvice = "Prefer early morning & avoid peak hours.";
  }

  if (activity === "Shahi Snan") {
    crowdLevel = "High";
    timeAdvice = "Strictly follow Shahi Snan advisory timings.";
  }

  if (place === "All Major Locations") {
    timeAdvice = "Split visit into multiple time slots.";
  }

  // SAVE PLAN
  req.session.userPlan = {
    name,
    age: age || "21",
    gender: gender || "Male",
    fromCity: fromCity || "Nashik",
    travelDate: travelDate || "Not specified",
    place,
    activity,
    crowdLevel,
    routeAdvice,
    timeAdvice,
    adminNote
  };

  // QR CODE
  const planUrl = `${req.protocol}://${req.get("host")}/user/final-plan`;
  const qrCode = await QRCode.toDataURL(planUrl);

  req.session.qrCode = qrCode;
  req.session.planUrl = planUrl;

  res.redirect("/user/final-plan");
});

/* ---------------- FINAL SUMMARY ---------------- */
router.get("/final-plan", (req, res) => {
  if (!req.session.userPlan) {
    return res.redirect("/booking");
  }

  res.render("user-summary", {
    title: "My Smart Mahakumbh Journey Plan",
    user: req.session.userPlan,
    accommodation: req.session.selectedAccommodation || null,
    temple: req.session.selectedTemple || null,
    ghat: req.session.selectedGhat || null,
    qrCode: req.session.qrCode || null,
    planUrl: req.session.planUrl || null
  });
});

module.exports = router;
