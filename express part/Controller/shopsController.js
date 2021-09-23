const Shop = require('../models/Shop');

class ShopController {

    // read all shops 
    getAllshops(req, res, next) {
        Shop.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }


    // read all shops  with adder name 
    getShopsAdderName(req, res, next) {
        Shop.find({}).populate('shopadder', 'username').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    // add  a shop 
    addshop(req, res, next) {
        let body = req.body;
        let shop = new Shop(body);
        shop.save((err, response) => {
            if (err) return res.send(shop);
            res.status(200).send(response);
        });
    }

    // read by id 

    getshopbyid(req, res, next) {
        let { id } = req.params;
        Shop.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    // update shop 

    updateshop(req, res, next) {

        let { id } = req.params;
        let body = req.body;

        Shop.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return res.send(err);
            res.status(200).send(response);
        });
    }


    // delete shop 
    deleteshop(req, res, next) {
        let { id } = req.params;
        Shop.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const shopcontroller = new ShopController();

module.exports = shopcontroller;