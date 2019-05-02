const express = require('express');
const router = express.Router();
const labourController = require('../controllers/labour-controller');

router.post('/add-labour', labourController.addLabour);
router.get('/get-labours', labourController.getAllLabours);
router.get('/get-lobour', labourController.getLabourById);
router.post('/remove-labours', labourController.deleteLabour);

module.exports = router;