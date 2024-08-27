import connect from "@/lib/db";
import Note from "@/lib/models/notes";
import User from "@/lib/models/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

const ObjectId = require("mongoose").Types.ObjectId;

export const  GET = async(request:Request) => {
    try{
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");
        if(!userId || !Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid user ID"}),{status:400,})
        }
        await connect();
        const user = await User.findById(userId);
        if(!user){
            return new NextResponse(JSON.stringify({message:"User not found"}),{status:404})
        }
        const notes = await Note.find({user:new Types.ObjectId(userId)});
        return new NextResponse(JSON.stringify(notes), {status:200})
    }
    catch(error){
        return new NextResponse("Error: " + error,{status:500})
    }
    
} 

export const POST = async(request:Request) => {
    try{
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        const body = await request.json();
        const {title, description} = body;
        
        if(!userId ||!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid user ID"}),{status:400,})
        }

        await connect();
       
        const user = await User.findById(userId);
        if(!user){
            return new NextResponse(JSON.stringify({message:"User not found"}),{status:404})
        }
        const newNote = new Note({title, description, user:new Types.ObjectId(userId)});
        
        await newNote.save();
        return new NextResponse(JSON.stringify({message:"Note Created", note:newNote}), {status:201})
    }
    catch(error){
        return new NextResponse("Error: Creating " + error,{status:500})
    }
}


export const PATCH = async(request:Request) => {
    try{
        const body = await request.json();
        const { noteId, title, description} = body;

        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if(!noteId || !Types.ObjectId.isValid(noteId)){
            return new NextResponse(
                JSON.stringify({message:"Invalid or missing note id", noteId:noteId}),
                {status:400}
            )
        }
         
        if(!userId || !Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid user ID"}),{status:400,})
        }

        await connect();

        const user = await User.findById(userId);
        if(!user){
            return new NextResponse(JSON.stringify({message:"User not found"}),{status:404})
        }

        const note = await Note.findOne({_id:noteId, user:userId})
        if(!note){
            return new NextResponse(JSON.stringify({message:"Note not found"}),{status:404})
        }

        const updatedNotes  = await Note.findByIdAndUpdate(noteId, {title, description}, {new:true})

        return new NextResponse(JSON.stringify({message:"User updated", user:updatedNotes}), {status:200})
    }
    catch(error){
        return new NextResponse("Error: in Updating " + error,{status:500})
    }
}


export const DELETE = async(request: Request) => {
    try{
        const {searchParams} = new URL(request.url)
        const userId = searchParams.get("userId")
        const noteId = searchParams.get("noteId")
        
        if(!userId || !Types.ObjectId.isValid(userId)){
            return new NextResponse(
                JSON.stringify({message:"User ID is required"}),
                {status:400}
            )
        }


        if(!noteId || !Types.ObjectId.isValid(noteId)){
            return new NextResponse(
                JSON.stringify({message:"Note ID is required"}),
                {status:400}
            )
        }

        await connect();

        const user = await User.findById(userId);
        if(!user){
            return new NextResponse(JSON.stringify({message:"User not found"}),{status:404})
        }

        const note = await Note.findOne({_id:noteId, user:userId})
        if(!note){
            return new NextResponse(JSON.stringify({message:"Note not found or note does not belong to user"}),{status:404})
        }

        await Note.findByIdAndDelete(noteId);
        
        const deletedNote = await Note.findByIdAndDelete(new Types.ObjectId(noteId));


        return new NextResponse(JSON.stringify({message:"Note deleted", user:deletedNote}), {status:200})

    }
    catch(error){
        return new NextResponse("Error: in Deleting " + error,{status:500})
    }
}