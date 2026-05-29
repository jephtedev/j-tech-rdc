const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Validation critique : On utilise MONGO_DB_URI pour correspondre à votre .env
if (!process.env.MONGO_DB_URI) {
    console.error("❌ ERREUR FATALE : MONGO_DB_URI non défini");
    process.exit(1); 
}

const app = express();

// Middleware de base
app.use(cors());
app.use(express.json());

// 2. Connexion à la base de données avec intégration "SENTINELLE"
// La SENTINELLE surveille l'état de la connexion et les accès
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("✅ SENTINELLE J-TECH : Connexion établie avec succès");
    } catch (err) {
        console.error("❌ Erreur Critique SENTINELLE (DB) :", err.message);
        process.exit(1); 
    }
};

connectDB();

// 3. Routes stratégiques (Architecture J-TECH HUB)
app.get('/', (req, res) => {
    res.json({ 
        service: "J-TECH HUB API",
        status: "Opérationnel",
        modules_actifs: ["J-TECH PAY", "SENTINELLE", "GeoSystem"]
    });
});

// À implémenter :
// app.use('/api/pay', require('./routes/payment'));
// app.use('/api/sentinelle', require('./routes/security'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 J-TECH HUB Serveur actif sur le port ${PORT}`));
