$(()=>{
    $.get('/api/note').then((data)=>{
        data.forEach(e=>{
            // Retrieve template and create a clone
            let noteTemplate = $('#note-template').clone();

            // Retrieve all <p> element in template
            let noteContainer = noteTemplate.contents().find("p");

            // Assign values to <p> element's content
            noteContainer.eq(0).html(e.content);

            console.log(noteContainer)

            // Retrieve the container which will hold all users' info
            let contentContainer = $("#content-container");
    
            // Append the clone to the DOM 
            contentContainer.append(noteTemplate.html());
        });
    })
})