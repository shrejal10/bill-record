const RecordModel = require('./../models/RecordModel');
const utils = require('./../utils/utils');
const recordResolvers = {
    Query : {
        getSingleBill: async (parent, { id }, context, info) => {
            try{
              const record = await RecordModel.findById(id);
            if(record == null)
            {
              return utils.sendResponse(true,"No Records found !!!", record,' ');

            }
            else
            return utils.sendResponse(true,"Bill Records !!!", record,' ');

            }
            catch(error){
              const errorMsg = `Something went wrong Please try again !!! (${error})`
              return utils.sendResponse(true,"Some Went wrong !!!", [],errorMsg);
            }
          
          
          },
        
        getAllRecords : async () =>{
           try{
                const record = await RecordModel.find();
                if(record == null)
            {
              return utils.sendResponse(true,"No Records found !!!", [],' ');

            }
            else
            return utils.sendResponse(true,"Bill Records !!!", record,' ');

            
           }
           catch(error){
                const errorMsg = `Something went wrong Please try again !!! (${error})`
                return utils.sendResponse(true,"Some Went wrong !!!", [],errorMsg);
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
            return utils.sendResponse(true,"Bill Uploaded Successfully !!", record,' ');
          }
          catch(error){
              const errorMsg = `Something went wrong Please try again !!! (${error})`
      
              return utils.sendResponse(false, "Something went wrong !!!", [], errorMsg);
          }
        },
        deleteRecord: async (parent, args, context, info) => {
            try{
                const { id } = args;
            await RecordModel.findByIdAndDelete(id);
            return utils.sendRespStatus(true,"Bill deleted succesfully !!!", ' ')
           
            }
            catch(error){
                const errorMsg = `Something went wrong Please try again !!! (${error})`
                return utils.sendRespStatus(false, "Something went wrong !!!",  errorMsg);
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
            return utils.sendRespStatus(true,"Updated succesfully !!!", ' ')

           }
           catch(error){
            const errorMsg = `Something went wrong Please try again !!! (${error})`
            return utils.sendRespStatus(false, "Something went wrong !!!",  errorMsg);
          }
           
          },

    }
};
module.exports = recordResolvers;