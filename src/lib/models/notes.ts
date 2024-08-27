import {Schema, models, model} from 'mongoose'

const NoteSchema = new Schema({
    title:{type:String ,require:true},
    description:{type:String},
    user:{type:Schema.Types.ObjectId ,ref:"User"},
})

const Note = models.Note || model('Note',NoteSchema)

export default Note;