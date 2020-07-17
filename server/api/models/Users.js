const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
      maxlength: [20, 'Name must not be greater than 20 characters'],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
      maxlength: [96, 'Email must not be greater than 96 characters'],
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Password must have at least 8 characters'],
    },

    salt: String,
    bio: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'Users', timestamps: true }
);
UserSchema.plugin(uniqueValidator, { message: 'is already taken' });

UserSchema.statics.validUser = async function (email) {
  try {
    let user = await mongoose.model('Users', UserSchema).findOne({ email });
    if (!user.id) throw Error;
    return user;
  } catch (err) {
    throw {
      valid: false,
      message: 'No matching user with that email.',
      error: err,
    };
  }
};

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  this.password = this.hash;
};

UserSchema.methods.validPassword = function (password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
    .toString('hex');
  if (this.password !== hash)
    throw {
      valid: false,
      message: 'Incorrect Password',
    };
  return this.password === hash;
};

module.exports = mongoose.model('Users', UserSchema);
