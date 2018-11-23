
module.exports = class NoteService {

    constructor(jsonFile) {
        this.jsonFile = jsonFile;
    }

    create(post, user) {
        return this.jsonFile.write((data) => {
            data[user].unshift(post);
            return {
                data: data
            }
        });
    }

    delete(postId){
        return this.jsonFile.write((data)=>{
            data.posts = data.posts.filter((post)=>{
                return post.id != postId;
            });
            return {
                id:postId,
                data:data
            }
        });
    }


    list(user) {
        return this.jsonFile.read((data) => {
            return data[user];
        })
    }

    update(id, body, user) {
        this.id = id;
        this.body = body;
        this.user = user;
        return this.jsonFile.write((data) => {
            let notes = data[this.user].map((notes) => {
                if (data[this.user][this.id] == notes) {
                    console.log('inside')
                    return Object.assign(data[this.user][this.id], this.body);
                } else {
                    return notes;
                }

            });
            return {
                data: data,
                id: id
            }

        });
    };

}