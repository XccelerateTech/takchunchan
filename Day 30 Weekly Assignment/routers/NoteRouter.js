const express = require("express");


class NoteRouter{

    constructor(noteService){
        this.noteService = noteService;
        console.log(noteService);
    }

    router(){
        let router = express.Router();
        router.get("/",this.get.bind(this));
        router.post("/",this.post.bind(this));
        router.put("/:id",this.put.bind(this));
        router.delete("/:id",this.delete.bind(this));
        return router;
    }

    get(req,res){
        console.log('routerget')
        //Validation Logic
        return this.noteService.list(req.auth.user)
            .then((data)=>res.json(data))
            .catch((err)=> res.status(500).json(err));
    }

    post(req,res){
        console.log('routerpost')
        return this.noteService.create(req.body, req.auth.user)
            .then((data)=>res.json(data))
            .catch((err)=> res.status(500).json(err));
    }

    put(req,res){
        //Validation Logic
        onsole.log('routerput')
        console.log(req.params.id)
        return this.noteService.update(req.params.id,req.body)
            .then((data)=>res.json(data))
            .catch((err)=>res.status(500).json(err));
    }

    delete(req,res){
        //Validation Logic
        return this.noteService.delete(req.params.id)
            .then((data)=>res.json(data))
            .catch((err)=>res.status(500).json(err));
    }
}


module.exports = NoteRouter

