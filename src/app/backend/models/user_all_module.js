module.exports = mongoose => {
  var userAll_schema = mongoose.Schema(
    {
      firstname: String,
      lastname: String,
      username: String,
      password: String,
      email: String,
      tal:String,
      published: Boolean
    },
    { timestamps: true }
  );

  userAll_schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const userAll = mongoose.model("userAll", userAll_schema);
  return userAll;
};