# Chokidar

**Deadline: 30.05.2021 23:59 Minsk**

# Task description

1. Create a directory called data. We will assume that CSV files with new products will be uploaded in this directory for processing by our application.

2. In your application create a local module called dirwatcher. Create a class DirWatcher that should be able to watch a given path with a given delay  
and emit a ‘changed‘ event if directory contents have been changed (implement method watch(path, delay) by yourself, try not to use native fs.watch()).  
When the path is checked for the first time all files should be treated as new.

3. Create a module called an importer. Create class Importer. It should be able to listen to DirWatcher events and start importing CSV files (converting the data to JavaScript objects) on ‘dirwatcher:changed’ event.
    * Implement import(path): should return a promise with imported data from the file at path.
    * Implement importSync(path): should be synchronous and return all imported data from the file at path.

4. In app.js:
    * Import all of the above modules.
    * Create a Dirwatcher and Importer for processing files asynchronously from the data directory.
    * Log imported data to console.


Note: _every CSV file in a directory should be processed only once._  
Note: _feel free to use an already implemented library for transforming CSV into JSON._
Note: _do not use already implemented external libraries for watching_

Example:
```
const fs = require('fs');
const { EventEmitter } = require('events');
const path = require('path');
const prettyjson = require('prettyjson');
const config = require('./config/config');
const eventEmitter = new EventEmitter();
const DirWatcher = require('./src/dirWatcher').inject(config, fs, eventEmitter, path);
DirWatcher.watch({
  path: './data'
});
const Importer = require('./src/importer').inject(config, fs, eventEmitter, prettyjson);
Importer.listen();
```

---

Criteria for evaluation:
1. CSV files are placed in the appropriate directory.
2. DirWatcher module is implemented and matches described criteria.
3. Importer module is implemented and matches described criteria.
4. Application logic is implemented for a fixed (predefined) number of CSV files.
5. Application logic is implemented for the arbitrary number of CSV files (all tasks and subtasks are implemented properly) which could be added/changed/removed at any time.
