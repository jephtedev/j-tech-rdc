const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importation de la configuration de base de données
const connectDB = require('./config/db');

// Importation de l'agent SENTINELLE (situé dans votre dossier 'intergiciel')
const sentinelleAgent = require('./intergiciel/sentinelle');

// Validation critique : Vérification de la présence de l'URI MongoDB
if (!process.env.MONGO_DB_URI) {
    console.error("❌ ERREUR FATALE : MONGO_DB_URI non défini dans le fichier .env");
    process.exit(1); 
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Activation de la SENTINELLE (doit être placé avant vos routes)
app.use(sentinelleAgent);

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

// À implémenter prochainement :
// app.use('/api/pay', require('./routes/payment'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 J-TECH HUB Serveur actif sur le port ${PORT}`));
