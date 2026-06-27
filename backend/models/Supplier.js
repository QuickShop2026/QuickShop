const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
{
    supplierCode:{
        type:String,
        unique:true,
        trim:true
    },

    businessName:{
        type:String,
        required:true,
        trim:true
    },

    contactPerson:{
        type:String,
        default:""
    },

    mobile:{
        type:String,
        required:true
    },

    alternateMobile:{
        type:String,
        default:""
    },

    whatsapp:{
        type:String,
        default:""
    },

    email:{
        type:String,
        default:""
    },

    address:{
        type:String,
        default:""
    },

    city:{
        type:String,
        default:""
    },

    state:{
        type:String,
        default:""
    },

    pincode:{
        type:String,
        default:""
    },

    supplierType:{
        type:String,
        enum:["Registered","Unregistered"],
        default:"Registered"
    },

    purchaseType:{
        type:String,
        enum:[
            "GST",
            "NON_GST",
            "BOTH"
        ],
        default:"GST"
    },

    gstNumber:{
        type:String,
        default:""
    },

    panNumber:{
        type:String,
        default:""
    },

    bankName:{
        type:String,
        default:""
    },

    accountNumber:{
        type:String,
        default:""
    },

    ifscCode:{
        type:String,
        default:""
    },

    openingBalance:{
        type:Number,
        default:0
    },

    allowCredit:{
        type:Boolean,
        default:true
    },

    creditLimit:{
        type:Number,
        default:0
    },

    paymentTerms:{
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

    slug: {
    type: String,
    unique: true,
    trim: true,
    },


},
{
    timestamps:true
});

module.exports = mongoose.model("Supplier",supplierSchema);