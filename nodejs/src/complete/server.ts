import * as express from 'express';
import {
    details,
    intro,
    education,
    hobbies,
    work
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
router.get('/details', details);
router.get('/education', education);
router.get('/hobbies', hobbies);
router.get('/work', work);

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