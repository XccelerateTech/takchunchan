
module.exports = class NoteService{

    constructor(jsonFile){
        this.jsonFile = jsonFile;
    }
    

    create(post,user){
        return this.jsonFile.write((data)=>{
            data[user].push(post);
            return {
                data:data
            }
        });
    }

    // delete(postId){
    //     return this.jsonFile.write((data)=>{
    //         data.posts = data.posts.filter((post)=>{
    //             return post.id != postId;
    //         });
    //         return {
    //             id:postId,
    //             data:data
    //         }
    //     });
    // }


    list(user){
        return this.jsonFile.read((data)=>{
                return data[user];
            })
    }

    // update(id,newUser){
    //     return this.jsonFile.write((data)=>{
    //             let user = data.users.map((user)=>{
    //                 if(user.id == id){
    //                     return Object.assign(user,newUser);
    //                 }else{
    //                     return user;
    //                 }
    //             })
    //             return {
    //                 id:id,
    //                 data:data
    //             }
    //         })
    // }

    // search(searchCriteria,limit=100,offset=0){
    //     return this.jsonFile.read((data)=>{
    //             data.users.filter((user)=>{
    //                 for(let criterion in searchCriteria){
    //                     if(searchCriteria[criterion] != user[criterion]){
    //                         return false;
    //                     }
    //                 }
    //                 return true;
    //             });
    //             return data.users;
    //         });
    // }
}