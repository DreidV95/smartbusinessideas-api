const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta principal de la API
app.post('/generar-idea', (req, res) => {
  const { intereses = '', nivel_experiencia = '', presupuesto = '', pais = '' } = req.body;

  // ↪️  Lógica provisional (la “IA” real la añadiremos después)
  const idea = {
    idea_negocio: `Crea un blog o canal sobre ${intereses.trim() || 'tu pasión'} enfocado en personas de nivel ${nivel_experiencia || 'principiante'} en ${pais || 'tu país'}.`,
    dificultad: 'Fácil',
    modelo_monetizacion: 'Publicidad + contenidos premium',
    necesitas: ['Conexión a Internet', 'Herramientas gratuitas', 'Redes sociales']
  };

  res.json(idea);
});

app.listen(PORT, () => {
  console.log(`✅ SmartBusinessIdeas API corriendo en http://localhost:${PORT}`);
});
