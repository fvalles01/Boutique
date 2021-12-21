// const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
// const Schema = mongoose.Schema;


// const userSchema = Schema({
//     'username':{ type: String, required: true },
//     'email':{ type: String, required: true, unique: true },
//     'password': { type: String, required: true },
//     'roles': 
//         {
//             type: Schema.Types.ObjectId,
//             ref: "Role"
//         }

// });

// userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model('User', userSchema);

const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;