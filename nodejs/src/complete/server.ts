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
    addHobbies,
    updateDetails,
    updateEducation,
    updateHobbies,
    updateIntro,
    updateWork,
    deleteEducation,
    deleteHobbies,
    deleteWork
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

router.put('/details', updateDetails);
router.put('/intro', updateIntro);
router.put('/education/:id', updateEducation);
router.put('/hobbies/:id', updateHobbies);
router.put('/work/:id', updateWork);

router.delete('/hobbies/:id', deleteHobbies);
router.delete('/education/:id', deleteEducation);
router.delete('/work/:id', deleteWork);
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