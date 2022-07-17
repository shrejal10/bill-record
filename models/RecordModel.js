const mongoose = require('mongoose');
const billRecordSchema = new mongoose.Schema({
    meterNo: {
        type: String,
    required:true,
    },
    username: {
        type: String,
    required:true,
    },
    address: {
        type: String,
    required:true,
    },
    units: {
        type: String,
    required:true,
    },
    month: {
        type: String,
    required:true,
    },
  
});
const RecordModel = mongoose.model("record", billRecordSchema);
module.exports = RecordModel;
