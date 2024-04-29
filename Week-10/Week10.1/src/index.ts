import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://Trial_owner:lqd8wYcmsFB0@ep-flat-frost-a5ihtv2m.us-east-2.aws.neon.tech/Trial?sslmode=require"
})


async function createUserTables() {
    await client.connect();
    const result = await client.query(`
        CREATE TABLE users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
}

// createUserTables();



//INSECURE WAY TO DO INSERTION   
async function insertData(){
    try {
        await client.connect();
        const userPass = "password123"; // Example password, replace with actual password
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ('username1', 'user@gmail.com', '${userPass}');`;
        const res = await client.query(insertQuery);
        console.log("Insertion success", res);
        
    } catch (error) {
        console.error("Error during insertion", error);
    }
}

// insertData();

async function secureInput(username: String, email: String, password: String) {
    try {
        await client.connect();
        const insertSecureData = "INSERT INTO users(username,email,password) VALUES ($1, $2, $3);";
        const values = [username, email, password];
        const res = await client.query(insertSecureData, values);
    } catch (error) {
        console.log(error);
    }
}

// secureInput('priyam','p@gmail.com','pass');

async function getUser(email:string) {
   try {
    await client.connect();
    const userData = "SELECT * FROM users WHERE email = $1;";
    const res=await client.query(userData, [email]);

    if(res.rows.length >0){
        console.log("USER FOUND",res.rows[0]);
        return res.rows[0];
    }else{
        console.log("USER NOT FOUND");
        return null;
    }

   } catch (error) {
    console.log(error);
   }
}

getUser('p@gmail.com')