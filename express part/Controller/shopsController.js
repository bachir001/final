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


    // read all shops of this adder

    getshopbyadder(req, res, next) {
        let { adder } = req.params;
        Shop.find({ shopadder: adder, accept: "yes" }, (err, response) => {
            if (err) return next(err);
            return res.status(200).send(response);
        });
    }


    // add  a shop 
    async addshop(req, res, next) {

        let body = req.body;
        let shopname = body.shopname;
        let locationInfo = body.locationInfo;
        let phonenumber = body.phonenumber;
        let shopadder = body.shopadder;
        let accept = body.accept;

        if (req.file === undefined) {
            return res.send("image can't be void");
        } else {
            var shopimg = [req.file.filename].toString();
        }
        const newShop = new Shop({
            shopname,
            locationInfo,
            shopimg,
            phonenumber,
            shopadder,
            accept

        });


        newShop.save((err, response) => {
            if (err) return res.send(newShop);
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


    // read where accept is yes

    getacceptedshops(req, res, next) {
        Shop.find({ accept: "yes" }, (err, response) => {
            if (err) return next(err);
            return res.status(200).send(response);
        });
    }


    // get latest


    // getlatestshops(req, res, next) {
    //     Shop.find({ accept: "yes" }).sort({$natural: -1})
    //     .limit(3, (err, response) => {
    //         if (err) return next(err);
    //         return res.status(200).send(response);
    //     });
    // }

 


    // read shops by location

    getshopbylocation(req, res, next) {

        let { location } = req.params;
        Shop.find({ locationInfo: location, accept: "yes" }, (err, response) => {
            if (err) return next(err);
            return res.status(200).send(response);
        });
    }




    // update shop 

    async updateshop(req, res, next) {

        let { id } = req.params;
        let body = req.body;

        let shopname = body.shopname;
        let locationInfo = body.locationInfo;
        let phonenumber = body.phonenumber;
        let shopadder = body.shopadder;
        let accept = body.accept;

        if (req.file === undefined) {

            var shopimg = undefined;


            await Shop.findById(id, (err, response) => {
                if (err) return res.send(err);
                var shop = response;
                if (shopimg === undefined) {
                    shopimg = shop.shopimg
                }
            })
        } else {
            var shopimg = [req.file.filename].toString();
        }

        await Shop.findById(id, (err, response) => {
            if (err) return next(err);
            var shop = response;
            if (shopname === undefined) {
                shopname = shop.shopname
            }
        })

        await Shop.findById(id, (err, response) => {
            if (err) return next(err);
            var shop = response;
            if (locationInfo === undefined) {
                locationInfo = shop.locationInfo
            }
        })



        await Shop.findById(id, (err, response) => {
            if (err) return next(err);
            var shop = response;
            if (phonenumber === undefined) {
                phonenumber = shop.phonenumber
            }
        })

        await Shop.findById(id, (err, response) => {
            if (err) return next(err);
            var shop = response;
            if (shopadder === undefined) {
                shopadder = shop.shopadder
            }
        })


        await Shop.findById(id, (err, response) => {
            if (err) return next(err);
            var shop = response;
            if (shopadder === undefined) {
                shopadder = shop.shopadder
            }
        })


        await Shop.findById(id, (err, response) => {
            if (err) return next(err);
            var shop = response;
            if (accept === undefined) {
                accept = shop.accept
                console.log(accept);
            }
        })

        Shop.updateOne({ _id: id }, {

            $set: {
                body,
                locationInfo,
                shopname,
                shopadder,
                shopimg,
                phonenumber,
                accept,
            }

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