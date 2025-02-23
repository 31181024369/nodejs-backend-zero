const Project=require("../models/project");
const aqp = require('api-query-params');
module.exports={
    createProject:async(data)=>{
        try{
            if(data.type==="EMPTY.PROJECT"){
                let result=await Project.create(data);
                return result;
            }
            if(data.type==="ADD-USERS"){
                let myProject=await Project.findById(data.projectId).exec();
                for(let i=0;i<data.usersArr.length;i++){
                    myProject.usersInfor.push(data.usersArr[i]);
                }
                let newResult=await myProject.save();
                console.log(newResult);
                return newResult;
            }
        }catch(error){
            console.log("Error in createProject:", error);
            throw error;
        }
       
    },
    getProject: async(queryString)=>{
        try{
            const page=queryString.page;
            const { filter,limit,population } = aqp(queryString);
            delete filter.page;
            let offset = (page - 1) * limit;
            let result = await Project.find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
            return result;

        }catch(error){
            console.log(error);
        }

    }
}