import express from 'express';

import fitnessRoutes from './routes/fitnessRoutes';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());

//Routes
app.use('/api/fitness', fitnessRoutes)


export default app;