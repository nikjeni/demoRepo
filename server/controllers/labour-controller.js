const Labour = require('../models/labour-model');

exports.addLabour = async (req, res, next) => {
    const labour = new Labour();
    labour.firstName = req.body.firstName;
    labour.lastName = req.body.lastName;
    labour.contact = req.body.contact;
    labour.comments = req.body.comments;
    labour.image.data = req.body.imagePath;
    labour.image.contentType = 'image/png'
    try {
        const result = await labour.save();
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            errMessage: 'Unable to save'
        })
    }
}

exports.getAllLabours = async (req, res, next) => {
    try {
        const result = await Labour.find();
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            errMessage: 'Unable to fetch labours'
        });
    }
}

exports.getLabourById = async (req, res, next) => {
    try {
        const result = await Labour.findById({
            _id: req.params.id
        });
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            errMessage: 'Unable to fetch labour'
        });
    }
}

exports.deleteLabour = async (req, res, next) => {
    try {
        const result = await Labour.deleteOne({
            _id: req.body.id
        })
        res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            errMessage: 'Unable to delete labour'
        });
    }
}