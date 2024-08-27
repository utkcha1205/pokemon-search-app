import {Schema, models, model} from 'mongoose'

const UserSchema = new Schema({
    email:{type:String ,require:true, unique:true},
    // username:{type:String ,require:true, unique:true},
    password:{type:String ,require:false},
},
{timestamps:true})

const User = models.User || model('User',UserSchema)

export default User;