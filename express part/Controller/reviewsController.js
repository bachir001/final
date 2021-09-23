const Review = require('../models/Review');

class ReviewController {

    // read all reviews 
    getAllreviews(req, res, next) {
        Review.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }


    // read all reviews  with reviewer name 
    getReviewerName(req, res, next) {
        Review.find({}).populate('idr', 'username').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    // add  a review 
    addreview(req, res, next) {
        let body = req.body;
        let review = new Review(body);
        review.save((err, response) => {
            if (err) return res.send(shop);
            res.status(200).send(response);
        });
    }

    // read by id 

    getreviewbyid(req, res, next) {
        let { id } = req.params;
        Review.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }


    //  get specific review  with reviewer name 
    getReviewerNameByid(req, res, next) {
        let { id } = req.params;
        Review.findById(id).populate('idr').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }


    // update review 

    updatereview(req, res, next) {

        let { id } = req.params;
        let body = req.body;

        Review.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return res.send(err);
            res.status(200).send(response);
        });
    }


    // delete Review 
    deletereview(req, res, next) {
        let { id } = req.params;
        Review.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const reviewcontroller = new ReviewController();

module.exports = reviewcontroller;