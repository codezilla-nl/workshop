import * as express from 'express';
import {
    intro
} from './controllers/';

/**
 * Init
 */
const app = express();
const { Router } = express;
const router: express.Router = Router();
app.use('/', router);

/**
 * Routes
 */
router.get('/intro', intro);

/**
 * Error handling
 */
app.use((error, req, res, next) => {
    res.sendStatus(503);
});

/**
 * Start server
 */
app.listen(4000, () => {
    console.log(`Listening on port: 4000`);
});