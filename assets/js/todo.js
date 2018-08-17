
// Complete Todos
[].forEach.call(document.querySelectorAll("li"), addLiEventListener);

// Delete Todos
[].forEach.call(document.querySelectorAll("span"), addSpanEventListener); 

// Create Todos
document.querySelector("input[type='text'").addEventListener("keypress", function(event) {
    let enterKeyPressed = event.which === 13;
    if (enterKeyPressed) {
        var todoText = this.value;
        this.value = "";
        var liNode = document.createElement("li");
        liNode.innerHTML = "<span><i class='fa fa-trash-alt'></i></span> " + todoText;
        addLiEventListener(liNode);
        addSpanEventListener(liNode.querySelector("span"));
        document.querySelector("ul").appendChild(liNode);
    }
});

document.querySelector(".fa-edit").addEventListener("click", function() {
    $("input[type='text'").fadeToggle();
});

function addLiEventListener(li) {
    li.addEventListener("click", function() {
        this.classList.toggle("completed");
    });
}

function addSpanEventListener(span) {
    span.addEventListener("click", function() {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        event.stopPropagation();
    });
}