const mongoose = require('mongoose');
const statusValidator = str => {
  const values = ['published', 'pending'];
  return values.includes(str.toLowerCase());
};

const PostSchema = mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
      validate: [
        statusValidator,
        `Post status must be set to either 'Published' or 'Pending'`,
      ],
    },
    timeToRead: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: [true, 'Post must include the author name.'],
      maxlength: [20, 'Name of author exceeds the 20 character limit'],
    },
    title: {
      type: String,
      required: [true, 'Post must have a title.'],
      maxlength: [100, 'Title exceeds the 50 character limit'],
    },
    subTitle: String,
    content: {
      blocks: [
        {
          _id: false,
          key: String,
          text: String,
          blocktype: {
            type: String,
            default: 'unstyled',
          },
          inlinestyles: Object,
          data: Object,
        },
      ],
    },
    comments: {
      body: String,
      date: {
        type: Date,
        default: Date.now,
      },
      meta: {
        likes: {
          type: Number,
          default: 0,
        },
      },
    },

    src: String,
    date: {
      type: Date,
      default: Date.now,
    },
    hidden: Boolean,
    meta: {
      likes: {
        type: Number,
        default: 0,
      },
      views: {
        type: Number,
        default: 0,
      },
    },
  },
  { collection: 'Posts', timestamps: true }
);
module.exports = mongoose.model('Posts', PostSchema);
