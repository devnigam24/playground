import * as express from 'express';
const router = express.Router();

router.get('/', (request, response) => {
    response.sendFile(`${__dirname}/templates/index.html`);
});

export default router;