const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

// =======================
// VIEW ENGINE
// =======================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =======================
// MIDDLEWARE
// =======================
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "kumbh-secret",
    resave: false,
    saveUninitialized: true
  })
);

// =======================
// ROUTES
// =======================
const indexRoutes = require("./routes/index.routes");
const userRoutes = require("./routes/user.routes");
const bookingRoutes = require("./routes/booking.routes");
const adminModule = require("./routes/admin.routes");

app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/booking", bookingRoutes);

// Backend admin routes (API / logic)
app.use("/admin", adminModule.router);

// =======================
// UI PAGE ROUTES
// =======================

// MAP PAGE → Opens user.html
app.get("/map", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "user.html"));
});

// ADMIN UI PAGE → Opens admin.html (no conflict with /admin backend)
app.get("/admin-panel", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// =======================
// SERVER
// =======================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
