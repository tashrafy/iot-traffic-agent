import Agenda from "agenda";
import config from "../config/environment";
import * as initializeTrafficJob from './initialize-traffic-job';
import * as collectTrafficJob from './collect-traffic-job';

const agenda = new Agenda({
  db: {
    address: config.mongo.uri,
  },
});

agenda.on("ready", () => {
  console.log('AGENDA INITIALIZED');

  agenda.defaultConcurrency(50);

  agenda.define(initializeTrafficJob.jobName, initializeTrafficJob.jobHandler);
  agenda.define(collectTrafficJob.jobName, collectTrafficJob.jobHandler);

  agenda.now(initializeTrafficJob.jobName);

  agenda.on("start", (job) => {
    // log necessary info
  });

  agenda.on("success", (job) => {
    // log necessary info
  });
  agenda.on("fail", (err, job) => {
    // log necessary info
  });
});

function graceful() {
  agenda.stop(() => {
    process.exit(0);
  });
}

process.on("SIGTERM", graceful);
process.on("SIGINT" , graceful);

export {agenda};
