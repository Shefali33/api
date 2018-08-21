import path from "path";
let config = {};
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'apiTest';
config.serverPort = process.env.serverPort || 8585;

export default config;