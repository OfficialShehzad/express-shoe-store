const BrandModel = require('../../models/brand.model');
const { serviceErrorThrower } = require('../../utils/helper');

// FUNCTION TO CREATE A BRAND
const createBrand = async (name) => {
  if (!name) serviceErrorThrower(400, "Name is required");

  const existingBrand = await BrandModel.findOne({ name });

  if (existingBrand) serviceErrorThrower(409, "Brand with the same name already exists");

  const brand = await BrandModel.create({ name });

  return brand;
};


// FUNCTION TO UPDATE AN EXISTING BRAND
const updateBrand = async (id, name) => {
  if (!id) serviceErrorThrower(400, "Brand not selected to udpate. Please try again");

  const brandToEdit = BrandModel.findOne({ _id: id });
  
  if (!brandToEdit) serviceErrorThrower(404, "Brand not found");
  if (brandToEdit.name === name) serviceErrorThrower(400, "Brand name was not changed");

  const updatedBrand = await BrandModel.findOneAndUpdate({ 
    _id: id 
  }, { 
    name 
  });
};

const deleteBrand = () => {};

const getBrands = () => {};

const brandService = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrands,
};

module.exports = brandService;