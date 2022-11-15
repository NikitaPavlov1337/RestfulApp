import Router from 'express';
// eslint-disable-next-line import/extensions
import PostController from '../postController/PostController.js';

const router = new Router();

router.post('/posts', PostController.create);

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;
