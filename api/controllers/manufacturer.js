const Model = require('../model');
const {Product, Manufacturer} = Model;

const manufacturerController = {
    all (req, res) {
      // Returns all manufacturers
        Manufacturer.find({})
            .exec((err, manufacturers) => res.json(manufacturers))
    },
    byId (req, res) {
        const idParam = req.params.id;
        // Returns a single product
        // based on the passed in ID parameter
        Manufacturer
            .findOne({_id: idParam})
            .exec( (err, manufacturer) => res.json(manufacturer) );
    },
    create (req, res) {
        const requestBody = req.body;
        // Creates a new record from a submitted form
        const newManufacturer = new Manufacturer(requestBody);
        // and saves the record to
        // the data base
        newManufacturer.save( (err, saved) => {
            // Returns the saved product
            // after a successful save
            Manufacturer
                .findOne({_id: saved._id})
                .exec((err, manufacture) => res.json(manufacture));
        } )
    },
    update (req, res) {
        const idParam = req.params.id;
        let manufacture = req.body;
        // Finds a product to be updated
        Manufacturer.findOne({_id: idParam}, (err, data) => {
            // Updates the product payload
            data.name = manufacture.name;
            // Saves the product
            data.save((err, updated) => res.json(updated));
        })
    },
    remove (req, res) {
        const idParam = req.params.id;
        // Removes a product
        Manufacturer.findOne({_id: idParam}).remove( (err, removed) => res.json(idParam) )
    }
};

module.exports = manufacturerController;