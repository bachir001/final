const Subscriber = require('../models/Subscriber')

class SubscriberController {

    // read all subs 

    getAllsubs(req, res, next) {

        Subscriber.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    // add  a subs 
    addsubs(req, res, next) {

        let body = req.body;
        let subs = new Subscriber(body);
        subs.save((err, response) => {
            if (err) return res.send(subs);
            res.status(200).send(response);
        });
    }

    // read by id 

    getsubsbyid(req, res, next) {

        let { id } = req.params;
        Subscriber.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    // update subs 

    updatesubs(req, res, next) {

        let { id } = req.params;
        let body = req.body;
        Subscriber.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    // delete subs 
    deletesubs(req, res, next) {
        let { id } = req.params;
        Subscriber.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }
}

const subscribercontroller = new SubscriberController();

module.exports = subscribercontroller;