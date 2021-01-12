const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,         // mongoose.Schema.Types.ObjectId
    required: true,
    ref: 'User',            // User 컬렉션의 ObjectId(JOIN)
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema);