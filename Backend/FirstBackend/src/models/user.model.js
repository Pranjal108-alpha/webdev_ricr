import mongoose, { Types } from "mongoose";


const Userschema = mongoose.Schema({
    fullName:{
        type: String,
        required:true,
    },
    email:{
       type: String,
        required:true,
        unique:true,
    },
    phone:{
       type: String,
        required:true,
    },
     gender:{
       type: String,
        required:true,
    },
     photo:{
        url:{type: String,
        },
        pubiId:{
            type:String,
        }
    },
     password:{
       type: String,
        required:true,
    },
     dob:{
       type: String,
        required:true,
    },
    
},
{
        timestamps:true,
    }
);

const User = mongoose.model("User",Userschema);

export default User;
