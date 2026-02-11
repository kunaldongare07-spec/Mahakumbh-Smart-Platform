const express = require("express");
const router = express.Router();
const db = require("../config/db");

/* ================= BOOKING HOME ================= */
router.get("/", (req, res) => {
  res.render("booking", {
    title: "Booking & Planning | Mahakumbh"
  });
});

/* ================= ACCOMMODATION ================= */
router.get("/accommodation", (req, res) => {
  res.render("booking-accommodation", {
    title: "Accommodation Booking"
  });
});

router.post("/accommodation/select", (req, res) => {
  const { name, type, price, distance } = req.body;
  const userId = req.session.userId;

  // Save in session
  req.session.selectedAccommodation = { name, type, price, distance };

  // Save in DB
  if (userId) {
    db.query(
      `INSERT INTO accommodations (user_id, name, type, price, distance)
       VALUES (?, ?, ?, ?, ?)`,
      [userId, name, type, price, distance]
    );
  }

  res.send(`
    <script>
      alert("✅ Accommodation selected: ${name}");
      window.location.href = "/booking";
    </script>
  `);
});

/* ================= SHAHI SNAN ================= */
router.get("/ghats", (req, res) => {
  res.render("booking-shahi-snan", {
    title: "Shahi Snan Ghats"
  });
});

router.post("/ghats/select", (req, res) => {
  const { ghatName, snanType, timeSlot, crowdLevel } = req.body;
  const userId = req.session.userId;

  req.session.selectedGhat = {
    name: ghatName,
    snanType,
    timeSlot,
    crowdLevel
  };

  if (userId) {
    db.query(
      `INSERT INTO shahi_snan (user_id, ghat_name, snan_type, time_slot, crowd_level)
       VALUES (?, ?, ?, ?, ?)`,
      [userId, ghatName, snanType, timeSlot, crowdLevel]
    );
  }

  res.send(`
    <script>
      alert("🌊 Shahi Snan booked at ${ghatName}\\n⏰ ${timeSlot}");
      window.location.href = "/booking";
    </script>
  `);
});

/* ================= TEMPLE ================= */
router.get("/temples", (req, res) => {
  res.render("booking-temples", {
    title: "Temple Darshan Booking"
  });
});

router.post("/temples/select", (req, res) => {
  const { templeName, rating, darshanType, timeSlot } = req.body;
  const userId = req.session.userId;

  req.session.selectedTemple = {
    name: templeName,
    rating,
    type: darshanType,
    time: timeSlot
  };

  if (userId) {
    db.query(
      `INSERT INTO temple_bookings (user_id, temple_name, rating, darshan_type, time_slot)
       VALUES (?, ?, ?, ?, ?)`,
      [userId, templeName, rating, darshanType, timeSlot]
    );
  }

  res.send(`
    <script>
      alert("🛕 Temple booked: ${templeName}\\n⏰ ${timeSlot}");
      window.location.href = "/booking";
    </script>
  `);
});

module.exports = router;
