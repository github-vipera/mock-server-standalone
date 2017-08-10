const {ServerManagerFactory,ServerManager}  = require('de-mock-server-lib');
const fs = require('fs');
const path = require('path');
const basePath = process.cwd();
console.log("Starting your server: ",basePath);
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
resolvePaths(config);
const serverManager = ServerManagerFactory.createServerManager();
serverManager.start(config);


// Utilities
function resolvePaths(config) {
  if(config.mockModulePath) {
    config.mockModulePath = path.resolve(basePath,config.mockModulePath);
  }
  if(config.libraryLoaderPath) {
    config.libraryLoaderPath = path.resolve(basePath,config.libraryLoaderPath);
  }
  if(config.mockModulePath) {
    config.localDBPath = path.resolve(basePath,config.localDBPath);
  }
}
