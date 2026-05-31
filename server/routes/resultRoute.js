const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// ✅ POST - Save result
router.post('/', async (req, res) => {
  const { name, age, score, autismType } = req.body;

  try {
    const newResult = new Result({ name, age, score, autismType });
    const saved = await newResult.save();
    res.json(saved);
  } catch (err) {
    console.error('❌ Error saving result:', err);
    res.status(500).json({ error: 'Failed to save result' });
  }
});

// ✅ GET - All results
router.get('/', async (req, res) => {
  try {
    const results = await Result.find().sort({ date: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ DELETE - By ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedResult = await Result.findByIdAndDelete(req.params.id);
    if (!deletedResult) return res.status(404).json({ success: false });
    res.json({ success: true });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;
