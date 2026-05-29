const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // La SENTINELLE vérifie l'intégrité de la connexion
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("✅ SENTINELLE J-TECH : Connexion établie avec succès");
    } catch (err) {
        console.error("❌ Erreur Critique SENTINELLE (DB) :", err.message);
        process.exit(1); // Arrêt immédiat pour sécurité si la DB est inaccessible
    }
};

module.exports = connectDB;
