const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connexion à J-TECH DB réussie"))
  .catch(err => console.error("❌ Erreur de connexion", err));

app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API J-TECH RDC" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Serveur actif sur le port ${PORT}`));
  
