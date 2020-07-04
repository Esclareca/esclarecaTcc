// const mongoose = require('mongoose');
// var Users = new mongoose.Schema({
//     _id: {
//         type: Number
//     },
//     name: {
//         type: String
//     },
//     email: {
//         type: String
//     },
//     password: {
//         type: String
//     },
//     userPhoto: {
//         type: Schema.Types.Mixed
//     }
// });

// const UsersClass = mongoose.model('Users', Users);
// module.exports = UsersClass;

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    tags: [String],
    key: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
    //userPhoto: { Schema.Types.Mixed }
});

UserSchema.pre("save", function(){
    if(!this.url){
        this.url = `http:192.168.29.66:3333/files/${this.key}`;//coloca AQUI seu localhost
    }
})

module.exports = mongoose.model('Users', UserSchema);