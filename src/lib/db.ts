import mongoose from 'mongoose';

const MONGOOSE_URL = process.env.DATABASE_URL;

const connect = async ()=>{
    console.log(MONGOOSE_URL,'MONGOOSE_URLMONGOOSE_URL')
    const connectionState = mongoose.connection.readyState;
    
    if(connectionState === 1){
        console.log("Already Connected");
        return ;
    }
    if(connectionState === 2){
        console.log("Connecting.....");
        return ;
    }
    try{
        mongoose.connect(MONGOOSE_URL!,{
            dbName:'todo',
            bufferCommands:false
        })
        console.log('Connnected');
        
    }
    catch (error){
        console.log('Error in connecting', error)
        throw new Error('Error in connecting')
    }
}

export default connect;