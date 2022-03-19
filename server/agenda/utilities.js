import {agenda} from './';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
const moment = require("moment");

require("moment-timezone");

export async function scheduleReoccurringJob(name, interval, timezone, data) {
  const job = agenda.create(name, data);
  job.repeatEvery(interval, {
    timezone,
  });
  job.computeNextRunAt();
  await job.save();
}

export async function clearAllJobs() {
  const rawJobs = await agenda.jobs();
  const jobs = rawJobs.map(job => job.attrs);
  const groupedJobs = groupBy(jobs, 'name')

  for (const jobName in groupedJobs) {
    const orderedJobs = orderBy(groupedJobs[jobName], job => new moment(job.lastRunAt), ['asc']);

    orderedJobs.pop();

    for (const job in orderedJobs) {
      const cancelQuery = orderedJobs[job].name === 'Collect Traffic' ?
        { name: orderedJobs[job].name } : { _id: orderedJobs[job]._id };

      await agenda.cancel(cancelQuery);
    }
  }
}
