const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema(
{
    title:{
        type:String,
        trim:true
    },

    value:{
        type:String,
        trim:true
    }

},
{
    _id:false
});

const productSchema = new mongoose.Schema({

    productCode:{
        type:String,
        unique:true,
        trim:true
    },

    name:{
        type:String,
        required:true,
        trim:true
    },

    slug:{
        type:String,
        unique:true,
        trim:true
    },

    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        required:true
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },

    unit:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Unit",
        required:true
    },

    hsn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"HSN",
        required:true
    },

    trackingType:{
        type:String,
        enum:["IMEI","SERIAL","NONE"],
        default:"NONE"
    },

    shortDescription:String,

    description:String,

    mrp:{
        type:Number,
        default:0
    },

    sellingPrice:{
        type:Number,
        default:0
    },

    offerPrice:{
        type:Number,
        default:0
    },

    mainImage:{
        type:String,
        default:""
    },

    gallery:{
        type:[String],
        default:[]
    },

    highlights:{
        type:[String],
        default:[]
    },

    specifications:{
        type:[specificationSchema],
        default:[]
    },

    boxContents:{
        type:[String],
        default:[]
    },

    barcode:String,

    tags:{
        type:[String],
        default:[]
    },

    minimumStock:{
        type:Number,
        default:0
    },

    currentStock:{
        type:Number,
        default:0
    },

    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    },

    notes:String,

    isDeleted:{
        type:Boolean,
        default:false
    }

},
{
    timestamps:true
});

module.exports=mongoose.model("Product",productSchema);