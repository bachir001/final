const Contact = require('../models/Contact');

class ContactController {

    // read all contact msgs 
    getAllcontact(req, res, next) {
        Contact.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }


    // add  a contact 
    addcontact(req, res, next) {
        let body = req.body;
        let contact = new Contact(body);
        contact.save((err, response) => {
            if (err)  return next(err);
            res.status(200).send(response);
        });
    }

    // read by id 

    getcontactbyid(req, res, next) {
        let { id } = req.params;
        Contact.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }



    // delete contact 
    deletecontact(req, res, next) {
        let { id } = req.params;
        Contact.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const contactcontroller = new ContactController();

module.exports = contactcontroller;