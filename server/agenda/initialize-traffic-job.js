import { v4 as uuidv4 } from 'uuid';
import { clearAllJobs, scheduleReoccurringJob } from './utilities';
const moment = require("moment");

require("moment-timezone");

const jobName = "Initialize Capture";

async function jobHandler(job, done) {
  const userId = process.env.UUID || uuidv4();

  await clearAllJobs();
  await scheduleReoccurringJob("Collect Traffic", "2 seconds", "America/New_York", userId);

  done();
}

export {jobName, jobHandler};
