import express from 'express';

import controllers from '../controllers/dietController'

const router = express.Router();

router.post('/create', controllers.createDietTable);
router.get('/all', controllers.getAllDietTable);
router.get('/table', controllers.getDietTable);


export default router;