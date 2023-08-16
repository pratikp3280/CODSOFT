var screen=document.querySelector('#screen');
var btn=document.querySelectorAll('.btn');


for(items of btn)
{
    items.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        screen.value+=btntext;
    });
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}
