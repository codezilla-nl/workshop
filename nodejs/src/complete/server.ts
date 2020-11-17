import * as express from 'express';
import * as bp from 'body-parser';
import {
    details,
    intro,
    education,
    hobbies,
    work,
    addWork,
    addEducation,
    addHobbies
} from './controllers/';

/**
 * Init
 */
const app = express();
const { Router } = express;
const router: express.Router = Router();
app.use(bp.json());
app.use('/', router);

/**
 * Routes
 */
router.get('/intro', intro);
router.get('/details', details);
router.get('/education', education);
router.get('/hobbies', hobbies);
router.get('/work', work);

router.post('/education', addEducation);
router.post('/hobbies', addHobbies);
router.post('/work', addWork);

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