const Task=require("../models/task");
const aqp = require('api-query-params');
module.exports={
    getTask:async(queryString)=>{
        try{
            const page=queryString.page;
            const { filter,limit,population } = aqp(queryString);
            delete filter.page;
            let offset = (page - 1) * limit;
            let result = await Task.find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
            return result;
        }catch(error){
            console.log("error:",error);
        }
    },
    createTask:async(data)=>{
        try{
            if(data.type==="EMPTY-TASK"){
                let result=await Task.create(data);
                return result;
            }
            return null;
        }catch(error){
            console.log("error:",error);
        }
    },
    uTask:async(data)=>{
        try{
            let result=await Task.updateOne({_id:data.id},{...data});
            return result;
        }catch(error){
            console.log("error:",error);
        }
    },
    dTask:async(id)=>{
        try{
            let result=await Task.deleteById(id);
            return result;
        }catch(error){
            console.log("error:",error);
        }
    }
}