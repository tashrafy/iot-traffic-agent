import axios from 'axios';
import config from "../config/environment";
const ENDPOINT = `http://${config.domain}:${config.port}`;

const moment = require("moment");
require("moment-timezone");

const jobName = "Collect Traffic";

async function jobHandler(job, done) {
  const userId = job.attrs.data;
  const { data: devices } = await axios.get(`${ENDPOINT}/api/iot-inspector/subscribe`);
  const { data: traffic } = await axios.get(`${ENDPOINT}/api/iot-inspector/get_traffic`, {
    params: {
      userId
    }
  });

  done();
}

export {jobName, jobHandler};
