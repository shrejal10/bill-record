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
    
    type resp {
        message : String

    }
    type Query{
        getAllRecords : [Record]

        getSingleBill(id: ID): Record
    }
    


    input RecordInput {
        meterNo : String
        username : String
        address : String
        units : String
        month : String
    }

    
    type Mutation {
        createBill(record : RecordInput) : resp
        deleteRecord(id: ID): resp
        updateRecord(id: ID, record: RecordInput): resp
    }

`;

module.exports = recordDefs;