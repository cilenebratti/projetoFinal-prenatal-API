const controller = require("../controller/prenatalController");

const express = require("express");

const router = express.Router();


router.post("/new", controller.newPrenatal); // ok

router.get("/all", controller.findAllPrenatal); //ok

router.get("/consultas", controller.getAppointmentByDate); // ok

router.get("/exams", controller.getExamsByDate); // ok

router.patch("/update", controller.updatePrenatalBynumeroProntuario); // ok

router.get("/:numeroProntuario", controller.findBynumeroProntuario); // ok

router.delete("/delete", controller.deletePrenatal); // ok

module.exports = router;