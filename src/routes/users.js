import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/', UserController.listUsers);
router.get('/disponibility', UserController.getScheduleAvailableUsers);
router.get('/:id/disponibility', UserController.getDisponibilityByUserId);
router.get('/:id/meetings', UserController.getMeetingsByUserId);
router.get('/:id', UserController.findById);





export default router;