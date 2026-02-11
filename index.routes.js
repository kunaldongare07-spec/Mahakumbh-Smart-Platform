const express = require("express");
const router = express.Router();
const adminState = require("./admin.state");

router.get("/", (req, res) => {
  const adminData = adminState.getAdminState();

  res.render("home", {
    title: "Mahakumbh Smart Platform",
    adminData
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Mahakumbh Smart Platform"
  });
});


module.exports = router;
