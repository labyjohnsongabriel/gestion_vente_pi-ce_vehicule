const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db');


require('dotenv').config();

app.use(cors());
app.use(express.json());

// 🔗 Import des routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/pieces', require('./routes/pieceRoutes'));
app.use('/api/ventes', require('./routes/venteRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`));
