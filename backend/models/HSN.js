const mongoose = require("mongoose");

const hsnSchema = new mongoose.Schema(
{
    hsnCode:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    description:{
        type:String,
        required:true,
        trim:true
    },

    gstRate:{
        type:Number,
        required:true
    },

    cessRate:{
        type:Number,
        default:0
    },

    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    },

    notes:{
        type:String,
        default:""
    },

    isDeleted:{
        type:Boolean,
        default:false
    },

    isGSTApplicable:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("HSN",hsnSchema);