let addToDoButton = document.getElementById('addToDo');
let toDoConatiner = document.getElementById('todoconatiner');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText= inputField.value;
    toDoConatiner.appendChild(paragraph);
    inputField.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        toDoConatiner.removeChild(paragraph);    
    })
    $("button").click(function(){
        $("#todoConatiner").fadeIn();
        // $("#todoConatiner").fadeIn("slow");
        // $("#todoConatiner").fadeIn(3000);
      });
})
