module.exports = mongoose => {
  var userAll_schema = mongoose.Schema(
    {
      firstname: String,
      lastname: String,
      username: String,
      password: String,
      email: String,
      tal:String,
      // department:String,
      // role:String,
      departmentDetail: {
        role: String, //ระดับสิทธิ์
        salary: Number, //เงินเดือน 
        department: String // แผนก
      },
      status: {
        role: String, //ระดับสิทธิ์
        active: Boolean //ยืนยันการสมัคร
      },
      position: {type:String,default:'member'},
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