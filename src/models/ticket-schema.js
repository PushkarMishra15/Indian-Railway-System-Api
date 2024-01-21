import mongoose from "mongoose";

const ticketSchema = mongoose.Schema({

    name :{
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    },
    class :{
        type: String,
        required: true
    },
    seatstatus: {
        type: String,
        required: true
    },
    trainno: {
        type : Number,
        required: true
    },
    date: {
        type : String,
        required: true
    },

});

export default mongoose.model("Ticket", ticketSchema);