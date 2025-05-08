let x=0;
increasebtn.onclick=function(){
    x++;
    count.textContent=x;
}
decreasebtn.onclick=function(){
    x--;
    count.textContent=x;
}
resetbtn.onclick=function()
{
    x=0;
    count.textContent=x;
}
