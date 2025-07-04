const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint para Health Check (GET) - Nuevo
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'API operativa',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Ruta principal de la API (POST)
app.post('/generar-idea', (req, res) => {
  const { intereses = '', nivel_experiencia = '', presupuesto = '', pais = '' } = req.body;

  // Lógica provisional
  const idea = {
    idea_negocio: `Crea un blog o canal sobre ${intereses.trim() || 'tu pasión'} enfocado en personas de nivel ${nivel_experiencia || 'principiante'} en ${pais || 'tu país'}.`,
    dificultad: 'Fácil',
    modelo_monetizacion: 'Publicidad + contenidos premium',
    necesitas: ['Conexión a Internet', 'Herramientas gratuitas', 'Redes sociales']
  };

  res.json(idea);
});

app.listen(PORT, () => {
  console.log(`✅ SmartBusinessIdeas API corriendo en http://localhost:${PORT}`);
});