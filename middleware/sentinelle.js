const sentinelleAgent = (req, res, next) => {
    // L'agent vérifie ici si la requête est légitime
    console.log(`[SENTINELLE] Analyse de la requête : ${req.method} ${req.url}`);
    
    // Si une anomalie est détectée, on bloque ici
    if (req.headers['x-malicious-attempt']) {
        return res.status(403).send("Accès refusé par la Sentinelle");
    }
    
    next(); // Si tout est propre, on laisse passer
};

module.exports = sentinelleAgent;
  
