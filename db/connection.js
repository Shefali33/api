import Mongoose from 'mongoose';
import config from './config';
Mongoose.Promise = global.Promise;
const connectToDb = async () => {
    let dbHost = config.dbHost;
    let dbPort = config.dbPort;
    let dbName = config.dbName;
    try {
        await Mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`);
        console.log('Connected to mongo!!!');
    }
    catch (err) {
        console.log('Could not connect to MongoDB');
    }
}
console.log("*-*-*-*-")

export default connectToDb;

