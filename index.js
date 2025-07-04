// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * GET /ping
 * Endpoint de salud para Health Check en RapidAPI.
 * Devuelve "pong" con status 200.
 */
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

/**
 * POST /generar-idea
 * Genera una idea de negocio simple basada en los datos de entrada.
 * Body JSON esperado:
 * {
 *   intereses: string,
 *   nivel_experiencia: string,
 *   presupuesto: string,
 *   pais: string
 * }
 */
app.post('/generar-idea', (req, res) => {
  const {
    intereses = '',
    nivel_experiencia = '',
    presupuesto = '',
    pais = ''
  } = req.body;

  // Lógica básica (placeholder) — la “IA” real la añadiremos después
  const idea = {
    idea_negocio: `Crea un blog o canal sobre ${intereses.trim() || 'tu pasión'} enfocado en personas de nivel ${nivel_experiencia || 'principiante'} en ${pais || 'tu país'}.`,
    dificultad: 'Fácil',
    modelo_monetizacion: 'Publicidad + contenidos premium',
    necesitas: [
      'Conexión a Internet',
      'Herramientas gratuitas',
      'Redes sociales'
    ]
  };

  res.json(idea);
});

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`✅ SmartBusinessIdeas API corriendo en http://localhost:${PORT}`);
});
