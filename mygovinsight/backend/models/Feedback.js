const mongoose = require('mongoose');
const FeedbackSchema =  new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'User',
        required: true
    },
    sector:{
        type: String,
        enum: ['health', 'education', 'trransport'],
        required: true
    },
    institution:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min: 1,
        max:5,
        required: true
    },
    comment:{
        type: String,
        required: true,
        trim: true
    },
    staus:{
        type: String,
        enum: ['pending','resolved','rejected'],
        default: 'pending'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema) 