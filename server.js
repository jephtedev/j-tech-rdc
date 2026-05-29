const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importation de la configuration propre
const connectDB = require('./config/db');

// Validation critique initiale
if (!process.env.MONGO_DB_URI) {
    console.error("❌ ERREUR FATALE : MONGO_DB_URI non défini dans le fichier .env");
    process.exit(1); 
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Initialisation de la connexion centrale
connectDB();

// Routes stratégiques
app.get('/', (req, res) => {
    res.json({ 
        service: "J-TECH HUB API",
        status: "Opérationnel",
        modules_actifs: ["J-TECH PAY", "SENTINELLE", "GeoSystem"]
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 J-TECH HUB Serveur actif sur le port ${PORT}`));

