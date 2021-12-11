import express from 'express';

import dietRoutes from './routes/dietRoutes';
import nutrientRoutes from './routes/nutrientRoutes'

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());

//Routes
app.use('/api/dieta', dietRoutes)
app.use('/api/nutrientes', nutrientRoutes)


export default app;