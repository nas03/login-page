import mongoose, { connection } from "mongoose";
import getConfig from "next/config";
import mysql from 'mysql2'
import Bluebird from "bluebird";


export async function connectMongoDB() {
    try {
        mongoose.connect(process.env.MONGO_URI);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);

    }
}

export function connectMySQL() {
    const { serverRuntimeConfig } = getConfig();
    const { host, port, user, password, database } = serverRuntimeConfig.mysql;
    
    try {
        const mySQLConnection =  mysql.createConnection({ host, port, user, password });
        mySQLConnection.query(`USE ${database}`);
        console.log("Connect MySqL successfully")
        return mySQLConnection;
    } catch (error) {
        console.log("MySQL Error:", error)
    }
    return null;
}

