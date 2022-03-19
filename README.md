# IoT Traffic Agent
This application leverages the IoT Inspector API to obtain the flow and type of traffic received from IoT devices on the local area network.  The traffic is captured on a schedule based on the user-defined interval and aggregated to be outputted to any modality component.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^14.16.1
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

## Getting Started
1. First, clone and setup the [IoT Inspector API](https://github.com/tashrafy/iot-inspector-local) and run the local webserver.  [Follow the README.md](https://github.com/nyu-mlab/iot-inspector-local/tree/master/src) provided on the repository.
2. Finally, clone this application.

### Developing

1. Run `npm install` to install server dependencies.
2. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running
3. Run `npm start` to start the development server.
