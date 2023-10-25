module.exports = mongoose => {
  var Notification_schema = new mongoose.Schema({
      type_doc: String,
      title: String,
      desc: String,
      user_send: String,
      send_id: String,
      boss_name: String,
      boss_id: String,
      hr_name: String,
      hr_id: String,
      user_send_name: String,
      user_send_id: String,
    },
      { timestamps: true, versionKey: false }
    );


    Notification_schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });


  const Notification = mongoose.model("notifications",Notification_schema);
  return Notification;

};