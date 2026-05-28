const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Validation critique : Arrêt immédiat si les variables manquent
if (!process.env.MONGO_URI) {
    console.error("❌ ERREUR FATALE : MONGO_URI non défini dans le fichier .env");
    process.exit(1); 
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 2. Connexion sécurisée avec arrêt du processus en cas d'échec
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Sentinelle J-TECH : Base de données active"))
  .catch(err => {
      console.error("❌ Erreur Critique Sentinelle :", err);
      process.exit(1); // On ne lance pas le serveur si la DB est inaccessible
  });

app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API J-TECH HUB - Infrastructure Opérationnelle" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 J-TECH Serveur actif sur le port ${PORT}`));
        
