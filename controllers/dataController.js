import { Data } from '../models/Data.js';

// Get all sensor data
export const getAllData = async (req, res) => {
  try {
    const data = await Data.find({}).sort({ timestamp: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get data by ID
export const getDataById = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new sensor data
export const createData = async (req, res) => {
  try {
    const data = new Data(req.body);
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get data by location
export const getDataByLocation = async (req, res) => {
  try {
    const data = await Data.find({ location: req.params.location }).sort({ timestamp: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get latest sensor reading
export const getLatestData = async (req, res) => {
  try {
    const data = await Data.findOne({}).sort({ timestamp: -1 });
    if (!data) {
      return res.status(404).json({ message: 'No data found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete data
export const deleteData = async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
