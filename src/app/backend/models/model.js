module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        username: String,
        password: String,
        name: String,
        department: String,
        published: Boolean
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tutorial = mongoose.model("user", schema);
    return Tutorial;
  };