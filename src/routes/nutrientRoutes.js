import express from 'express';

import controllers from '../controllers/nutrientController'

const router = express.Router();

router.post('/create', controllers.createNutrientTable);
router.get('/all', controllers.getAllNutrientTable);
router.get('/table', controllers.getNutrietnTable);


export default router;