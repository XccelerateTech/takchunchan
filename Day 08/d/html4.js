class User {
    constructor(firstName,lastName,email,dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
}       

let randomPerson = (callback) => {

    var http = new XMLHttpRequest();
        
        http.open('GET', `https://randomuser.me/api/`);

        http.onreadystatechange = function(player) {
            if(http.readyState != XMLHttpRequest.DONE) {
                return;
            } else if(http.status == 200) {
                let data = JSON.parse(http.responseText);
                let player = new User (data.results[0].name.first, data.results[0].name.last, data.results[0].email, data.results[0].dob.date)
                callback (player)
            } else {
                console.log('error occurred' + http.status);
            }
        };
        
        http.send();       
}

randomMultiplePerson = (numberOfPerson) => {
    var i;
    for (i = 0; i < numberOfPerson; i++){
        randomPerson (function(player){
            console.log(player)})
    }
}

randomMultiplePerson(5)