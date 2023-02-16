
const db = require("../models");
const userAll = db.userAll;

// Create and Save a new UserAll
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }


    //Create a UserAll
    const userall = new userAll({
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email:req.body.email,
        tal:req.body.tal,
        published: req.body.published ? req.body.published : false
    });

    //Save the UserAll in the database
    userall.save(userall).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while saving the UserAll"
        });
    });
};

// Retrieve all UserAlls from the database.
exports.findAll = (req, res) => {
    const firstname = req.query.firstname;
    var condition = firstname ? { firstname:  RegExp(firstname), $option: "i" }  : {};
    userAll.find(condition).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving UserAlls."
            });
        });

};

// Find a single UserAll with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    userAll.findById(id).then(data => {
        if (!data)
            res.status(404).send({ message: "Not found userAll with id " + id });
        else res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving userAll with id " + id });
        });
};

// Update a UserAll by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        });

    }
    const id = req.params.id;

    userAll.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update userall with id=${id}. Maybe userall was not found` });
        } else res.send({ message: "userall updated successfully" });
    })
        .catch(err => {
            res.status(500).send({ message: "Error updating userall with id=" + id });
        });
};

// Delete a UserAll with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    userAll.findByIdAndRemove(id, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete userall with id=${id}. Maybe userall was not found.` });

        } else {
            res.send({ message: "userall was deleted successfully!" });
        }
    })
        .catch(err => {
            res.status(500).send({ message: "Couldn't delete userall with id" + id });
        });
};

// Delete all UserAlls from the database.
exports.deleteAll = (req, res) => {
    userAll.deleteMany({}).then(data => {
        res.send({ message: `${data.deletedCount} userAlls were deleted successfully` });
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all userAlls"
        });
    });
};

// Find all published userAlls
exports.findAllPublished = (req, res) => {
    userAll.find({ published: true }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the tutorials."
            });
        });
};
