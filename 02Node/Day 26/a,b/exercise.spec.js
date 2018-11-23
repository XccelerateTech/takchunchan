describe("The thing that you want to test",function(){
    it(`block 1`,function(){
        console.log("I am the it block 1!");
    });
    it(`block 2`,function(){
        console.log("I am the it block 2!");
    });
    it(`block 3`,function(){
        console.log("I am the it block 3!");
    });
    it(`block 4`,function(){
        console.log("I am the it block 4!");
    });
    it(`block 5`,function(){
        throw new Error("I am the it block 5 but I fail");
    });
});