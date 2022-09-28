$(eventhandler);

function eventhandler(){
    const clearMsg = () => $("#message").text("");
    const success = data => {
        $("#question").val(data.answer);
    }
    const failure = () => {
        $("#message").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    // text box enter key event
    $('#question').on("keypress",function(e){
        if (e.keyCode == 13){ 
            const data = {
                question: $("#question").val()};
            $.ajax({
                url: "/8ball",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8"
            }).done(success)
                .fail(failure).always(done);
            return false; // prevent the button click from happening
        }
    })

    // button submit event
    $("#submit").click(() => {
        const data = {
            question: $("#question").val()
        };
        $.ajax({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(success)
            .fail(failure).always(done);
        return false;
    })

    const done=()=>{
        $("#question").focus(function () {
            $(this).select();
        })
        console.log("done");
    }
}