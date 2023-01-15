
const db = require("../models");
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }


    //Create a tutorial
    const tutorial = new Tutorial({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        department: req.body.department,
        published: req.body.published ? req.body.published : false
    });

    //Save the tutorial in the database
    tutorial.save(tutorial).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while saving the tutorial"
        });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { $regex: new RegExp(username), $option: "i"} } :{};
    Tutorial.find(condition).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message:
        err.message || "Some error occurred while retrieving tutorials."
        });
    });

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Tutorial.findById(id).then(data => {
        if (!data) 
        res.status(404).send({ message:"Not found Tutorial with id " + id});
        else res.send(data);
    })
    .catch(err => {
        res.status(500).send({ message: "Error retrieving Tutorial with id " + id });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "Data to update cannot be empty"
    });

}
    const id = req.params.id;

    Tutorial.findByIdAndUpdate(id, req.body,{useFindAndModify: false}).then(data => {
        if (!data){
            res.status(404).send({ message: `Cannot update tutorial with id=${id}. Maybe Tutorial was not found`});
        }else res.send({message:"Tutorial updated successfully"});
    })
    .catch(err => {
        res.status(500).send({ message: "Error updating tutorial with id=" + id});
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.findByIdAndRemove(id, {useFindAndModify: false}).then(data => {
        if(!data){ res.status(404).send({ message: `Cannot delete tutorial with id=${id}. Maybe Tutorial was not found.` });
    
    }else{
        res.send({ message:"Tutorial was deleted successfully!"});
    }
    })
    .catch(err => {
        res.status(500).send({ message:"Couldn't delete tutorial with id"+id });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({}).then(data => {
        res.send({ message:`${data.deletedCount} Tutorials were deleted successfully`});
    }).catch(err => {
        res.status(500).send({ message:
        err.message || "Some error occurred while removing all Tutorials" });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.find({published:true}).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the tutorials."
        });
    });
};