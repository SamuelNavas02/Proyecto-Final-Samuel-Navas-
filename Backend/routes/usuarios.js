const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Middleware para poder leer JSON en el body
router.use(bodyParser.json());

// Lista simulada de usuarios
let usuarios = [
  { nombre: 'Juan', email: 'juan@mail.com' },
  { nombre: 'Ana', email: 'ana@mail.com' }
];

// GET: obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(usuarios);
});

// POST: crear un nuevo usuario
router.post('/', (req, res) => {
  const nuevoUsuario = req.body;

  // Validación simple
  if (!nuevoUsuario.nombre || !nuevoUsuario.email || !nuevoUsuario.password) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

module.exports = router;