"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://Trial_owner:lqd8wYcmsFB0@ep-flat-frost-a5ihtv2m.us-east-2.aws.neon.tech/Trial?sslmode=require"
});
function createUserTables() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
// createUserTables();
//INSECURE WAY TO DO INSERTION   
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const userPass = "password123"; // Example password, replace with actual password
            const insertQuery = `INSERT INTO users (username, email, password) VALUES ('username1', 'user@gmail.com', '${userPass}');`;
            const res = yield client.query(insertQuery);
            console.log("Insertion success", res);
        }
        catch (error) {
            console.error("Error during insertion", error);
        }
    });
}
// insertData();
function secureInput(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertSecureData = "INSERT INTO users(username,email,password) VALUES ($1, $2, $3);";
            const values = [username, email, password];
            const res = yield client.query(insertSecureData, values);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// secureInput('priyam','p@gmail.com','pass');
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const userData = "SELECT * FROM users WHERE email = $1;";
            const res = yield client.query(userData, [email]);
            if (res.rows.length > 0) {
                console.log("USER FOUND", res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("USER NOT FOUND");
                return null;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
getUser('p@gmail.com');
