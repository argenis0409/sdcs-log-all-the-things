# Log All The Things

## General Info

* This server app will log all requests to itself in log.csv.
*  Creates new log files as the log files get longer.
* The server doesn't stop and restart in terms of finding the latest log file.

## Setup
Fork/clone the repo onto your local system then run the following command:
```
npm install
```
```
npm start
```
Then go to http://localhost:3000/ in your browser or go to http://localhost:3000/logs to see the logs in JSON format.
## To test
Run the following commands in two separate terminals
```
npm start
```
```
npm test
```