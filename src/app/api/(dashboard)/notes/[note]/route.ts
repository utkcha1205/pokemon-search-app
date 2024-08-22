import connect from "@/lib/db";
import Note from "@/lib/modals/notes";
import User from "@/lib/modals/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server";


export const GET = async (request: Request, context:{params:any}) =>{
    const noteId = context.params.note;
    try{
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

        return new NextResponse(JSON.stringify(note), {status:200})
    }
    catch(error){
        return new NextResponse("Error: " + error,{status:500})
    }

}