const Customer = require("../models/customer");
const { createCustomerService, createArrayCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {

        } else {
            let result = await uploadSingleFile(req.files.image);
            imageUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);
        return res.status(200).json({
            EC: 0,
            data: customer
        });
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            });
        } else {
            return res.status(200).json({
                EC: -1,
                data: customers
            });
        }

    }
}