// models/Technicien.js
const mongoose = require('mongoose');

const TechnicienSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    specialite: { type: String, required: true },
    note: { type: Number, default: 0 },
    avis: { type: Number, default: 0 },
    localisation: {
        type: { type: String, default: 'Point' },
        coordinates: [Number] // [Longitude, Latitude]
    },
    disponible: { type: Boolean, default: true }
});

// Index géospatial pour la recherche de proximité ultra-rapide
TechnicienSchema.index({ localisation: '2dsphere' });

module.exports = mongoose.model('Technicien', TechnicienSchema);
      
