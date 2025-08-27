import express from 'express';
import {
  getAllData,
  getDataById,
  createData,
  getDataByLocation,
  getLatestData,
  deleteData
} from '../controllers/dataController.js';

const router = express.Router();

// Data routes - Simplified to avoid Express 5 compatibility issues
router.get('/', getAllData);
router.get('/latest', getLatestData);
router.get('/location/:location', getDataByLocation);
router.post('/', createData);
router.get('/:id', getDataById);
router.delete('/:id', deleteData);

export default router;
