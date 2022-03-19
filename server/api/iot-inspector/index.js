import express from 'express';
import * as controller from './iot-inspector.controller';

const router = express.Router();

router.get('/subscribe', controller.subscribeDevices);
router.get('/get_traffic', controller.getTraffic);
router.get('/aggregate_traffic', controller.aggregateTraffic);

module.exports = router;
