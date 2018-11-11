$(() => {
    $.get('/api/note').then((data) => {
        let id = 0;
        data.forEach(e => {
            // Retrieve template and create a clone
            let noteTemplate = $('#note-template').clone();

            // Retrieve all <p> element in template
            let noteContainer = noteTemplate.contents().find("p");

            // Assign values to <p> element's content
            noteContainer.eq(0).html(e.content);

            //assign id 
            noteContainer.attr('id',id)

            // Retrieve the container which will hold all users' info
            let contentContainer = $("#content-container");

            // Append the clone to the DOM 
            contentContainer.prepend(noteTemplate.html());

            id++
        });
    })
})




$().ready(function () {
    $('#add-note-form').on('submit', function (e) {
        e.preventDefault();

        this.submit();

        setTimeout(function () {
            window.location.reload();
        }, 0);

    });
});

var temptext;

//onclick change (shit can make it)
$(document).on('click', 'p', function () {
    console.log($(this).attr("id"))
    var temptext = $(this).text();
    console.log(temptext)
    $(this).replaceWith(`<form id="update-form" action="/api/note/${$(this).attr("id")}" method="PUT" enctype='application/json' target="dummyframe">
    <input type="text" name="content" id="content" placeholder="Input your content">
    <input type="submit" value="Submit">
</form> `)
    console.log($(this).attr("id"))

    // $.ajax({
    //     'url': '/api/note',
    //     'type': 'PUT',
    //     'success': function(data) {
    //       if (data == "success") {
    //         alert('request sent!');
    //       }
    //     }
    //   })



});