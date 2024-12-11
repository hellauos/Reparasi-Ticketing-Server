const express = require("express");
const router = express.Router();
const {JWTVerifier,authorizeRoles} = require("../middleware/JWTVerifier");
const ticketController = require("../controllers/ticketsController")


router.use(JWTVerifier);

router.route("/")
.get(ticketController.getAllTickets)
.post(ticketController.createTicket)
.patch(ticketController.updateTicket)
.delete(ticketController.deleteTicket);

module.exports = router;
