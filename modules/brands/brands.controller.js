const globalHelper = require("../../utils/helper");
const brandService = require("./brands.service");

const createBrand = async (req, res) => {
  try {
    const { name } = req.body;

    const result = await brandService.createBrand(name);

    return res.status(201).json({
      success: true,
      data: result,
    })
  } catch (error) {
    return globalHelper.controllerErrorCatcher(res, error);
  }
};

const updateBrand = (req, res) => {};

const deleteBrand = (req, res) => {}; 

const getBrands = (req, res) => {};

const brandController = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrands,
};

module.exports = brandController;