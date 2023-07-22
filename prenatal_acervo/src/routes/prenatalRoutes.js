const controller = require("../controller/prenatalController");

const express = require("express");

const router = express.Router();


router.post("/new", controller.newPrenatal);

router.get("/all", controller.findAllPrenatal);

router.get("/:prontuario", controller.findById);// tenho que mudar o findById??? se estou usando a palavra prontuário??

// router.get("/date", controller.getByDate);

router.patch("/:prontuario", controller.updatePrenatalById);// tenho que mudar o findById??? se estou usando a palavra prontuário??

router.delete("/:prontuario", controller.deletePrenatal);// tenho que mudar o findById??? se estou usando a palavra prontuário??

module.exports = router;