import connect from "@/lib/db";
import User from "@/lib/modals/user";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

const ObjectId = require("mongoose").Types.ObjectId;
export const  GET = async() => {

    try{
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), {status:200})
    }
    catch(error){
        return new NextResponse("Error: " + error,{status:500})
    }
    
} 


export const POST = async(request:Request) => {
    try{
        const body = await request.json();
        await connect();
        const newUsers = new User(body);
        await newUsers.save();
        return new NextResponse(JSON.stringify({message:"User Created", user:newUsers}), {status:201})
    }
    catch(error){
        return new NextResponse("Error: Creating " + error,{status:500})
    }
}

export const PATCH = async(request:Request) => {
    try{
        const body = await request.json();
        const { userId, newUsername } = body;
        await connect();
        if(!userId || !newUsername){
            return new NextResponse(
                JSON.stringify({message:"ID or new username are required"}),
                {status:400}
            )
        }
         
        if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid user ID"}),{status:400,})
        }

        const updatedUser = await User.findOneAndUpdate(
            {_id : new ObjectId(userId)},
            {username:newUsername},
            {new:true}
        );

        if(!updatedUser){
            return new NextResponse(JSON.stringify({message:"User not found"}),{status:404})
        }

        return new NextResponse(JSON.stringify({message:"User updated", user:updatedUser}), {status:200})
    }
    catch(error){
        return new NextResponse("Error: in Updating " + error,{status:500})
    }
}


export const DELETE = async(request: Request) => {
    try{
        const {searchParams} = new URL(request.url)
        const userId = searchParams.get("userId")
        
        if(!userId){
            return new NextResponse(
                JSON.stringify({message:"ID is required"}),
                {status:400}
            )
        }
         
        if(!Types.ObjectId.isValid(userId)){
            return new NextResponse(JSON.stringify({message:"Invalid user ID"}),{status:400,})
        }

        await connect();
        
        const deletedUser = await User.findByIdAndDelete(new Types.ObjectId(userId));

        if(!deletedUser){
            return new NextResponse(JSON.stringify({message:"User not found"}),{status:404})
        }

        return new NextResponse(JSON.stringify({message:"User deleted", user:deletedUser}), {status:200})

    }
    catch(error){
        return new NextResponse("Error: in Deleting " + error,{status:500})
    }
}