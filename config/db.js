// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`✅ SENTINELLE J-TECH : Connecté au cluster ${conn.connection.host}`);
    } catch (err) {
        console.error(`❌ Erreur Critique SENTINELLE : ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
      
