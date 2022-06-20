const router = require('express').Router();

const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} = require('../../controllers/pizza-controller');

// Setup GET all and POST at /api/pizzas
router.route('/').get(getAllPizza).post(createPizza);

// Setup GET one, PUT, and Delete at /api/pizzas/:id
router.route('/:id').get(getPizzaById).put(updatePizza).delete(deletePizza);

module.exports = router;
