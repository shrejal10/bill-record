const RecordModel = require('./../models/RecordModel');

const recordResolvers = {
    Query : {
        getSingleBill: async (parent, { id }, context, info) => {
            const record = await RecordModel.findById(id);
            return record;  
          
          },
        
        getAllRecords : async () =>{
           try{
                const record = await RecordModel.find();
                
            return record;
           }
           catch(error){
                const errorMsg = `Something went wrong Please try again !!! (${error})`
                return errorMsg;
            }
        },
      


    },

    Mutation : {

        createBill : async (parent, args, context,info) =>{
          try{
            const {meterNo, username, address, units, month} = args.record;
            const record = new RecordModel({
                meterNo, username, address, units, month
            });
            await record.save();
            return "Bill uploaded successfully !!";
          }
          catch(error){
              const errorMsg = `Something went wrong Please try again !!! (${error})`
              return errorMsg;
          }
        },
        deleteRecord: async (parent, args, context, info) => {
            try{
                const { id } = args;
            await RecordModel.findByIdAndDelete(id);
            return "Bill deleted succesfully !!!";
            }
            catch(error){
                const errorMsg = `Something went wrong Please try again !!! (${error})`
                return errorMsg;
            }
          },
          updateRecord: async (parent, args, context, info) => {
           try{
            const { id } = args;
            const { meterNo, username, address, units, month} = args.record;
            const record = await RecordModel.findByIdAndUpdate(
              id,
              { meterNo, username, address, units, month},
              { new: true }

            );
            return "Updated Successfully !!";
           }
           catch(error){
            const errorMsg = `Something went wrong Please try again !!! (${error})`
            return errorMsg;
         }
           
          },

    }
};
module.exports = recordResolvers;