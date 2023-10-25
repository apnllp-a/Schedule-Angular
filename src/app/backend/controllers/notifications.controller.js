
const db = require("../models");
const notifiCations = db.notification;

// Create and Save a new notification
exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }


    //Create a notification
    const notification = new notifiCations({
        type_doc:req.body.type_doc,
        title: req.body.title,
        desc: req.body.desc,
        user_send: req.body.user_send,
        send_id: req.body.send_id,
        boss_name:req.body.boss_name,
        boss_id:req.body.boss_id,
        hr_name:req.body.hr_name,
        hr_id:req.body.hr_id,
        user_send_name:req.body.user_send_name,
        user_send_id:req.body.user_send_id,
        published: req.body.published ? req.body.published : false
    });

    //Save the notification in the database
    notification.save(notification).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while saving the notification"
        });
    });
};

// Retrieve all notifications from the database.
exports.findAll = (req, res) => {
    const name = req.query.user_send_id;
    var condition = name ? { name:  RegExp(name), $option: "i" }  : {};
    notifiCations.find(condition).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving notifications."
            });
        });

};

// Find a single notification with an id
exports.findOneByID = (req, res) => {
    const id = req.params.id;

    notifiCations.findById(id).then(data => {
        if (!data)
            res.status(404).send({ message: "Not found notification with id " + id });
        else res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving WTF notification with id " + id });
        });
};



// Find a single notification with an id
exports.findOne = (req, res) => {
    const id = req.params.user_send_id;

    notifiCations.findOne({ id: id }, req.body).then(data => {
        if (!data)
            res.status(404).send({ message: "Not found notification with id " + id });
        else res.send(data);
    })
        .catch(err => {
            res.status(500).send({ message: "Error retrieving notification with id " + id });
        });
};

// Update a notification by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        });

    }
    const id = req.params.user_send_id;

    notifiCations.findOneAndUpdate({ id: id }, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot update notification with id=${id}. Maybe notification was not found` });
        } else res.send({ message: "notification updated successfully" });
    })
        .catch(err => {
            res.status(500).send({ message: "Error updating notification with id=" + id });
        });
};

// Delete a notification with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    notifiCations.findByIdAndRemove(id, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({ message: `Cannot delete notification with id=${id}. Maybe notification was not found.` });

        } else {
            res.send({ message: "notification was deleted successfully!" });
        }
    })
        .catch(err => {
            res.status(500).send({ message: "Couldn't delete notification with id" + id });
        });
};

// Delete all notifications from the database.
exports.deleteAll = (req, res) => {
    notifiCations.deleteMany({}).then(data => {
        res.send({ message: `${data.deletedCount} notifications were deleted successfully` });
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while removing all notifications"
        });
    });
};

// Find all published notifications
exports.findAllPublished = (req, res) => {
    notifiCations.find({ published: true }).then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the tutorials."
            });
        });
};
