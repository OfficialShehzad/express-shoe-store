const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const BrandModel = new mongoose.model('Brand', BrandSchema);

module.exports = BrandModel;