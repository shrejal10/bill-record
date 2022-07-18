const {gql} = require('apollo-server-express');

const recordDefs = gql `
    type Record {
        id : ID
        meterNo : String
        username : String
        address : String
        units : String
        month : String
        

    }
    type createBillRes {
        status : Boolean
        message : String
        data : Record
        error : String
    }
    type BillRes {
        status : Boolean
        message : String
        data : [Record]
        error : String
    }
    type resp {
        status : Boolean
        message : String
        error : String

    }
    type Query{
        getAllRecords : BillRes

        getSingleBill(id: ID): createBillRes
    }
    


    input RecordInput {
        meterNo : String
        username : String
        address : String
        units : String
        month : String
    }

    
    type Mutation {
        createBill(record : RecordInput) : createBillRes
        deleteRecord(id: ID): resp
        updateRecord(id: ID, record: RecordInput): resp
    }

`;

module.exports = recordDefs;