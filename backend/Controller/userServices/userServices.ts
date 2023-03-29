

import { Request, Response } from "express";
import { User } from "../../models/MongooseModle";

type User={
    userId:Number,
    userName:string,
    isAdmin:Boolean,
    password:string    
}

interface RequestParam extends Request {
    params: {
        [key: string]: string
    };
}


export default class UserService {


   public async getUser (req:RequestParam, res:Response) {
        const id =Number(req.params?.id); // Get a data from ReqParams.
        const user:User ={
            userId:id,
            userName:"Test User.",
            isAdmin:true,
            password:"9458qkfq3rkl3lk5"
        }
       const result =  await User.create(user); 

       res.status(200).json(result);
    }
}


