function changeMyColor(color)
/*{
    var myp = document.getElementById('merodesh');
    myp.style.backgroundColor = color;
}*/

function onoff(btn)
{
    var bulb = document.getElementById('bulb');
    var status = bulb.getAttribute('src');

    if(status == 'img/off.png')
    {
        bulb.setAttribute('src','img/on.png');
        btn.innerText = "off";
    }
    else
    {
        bulb.setAttribute('src','img/off.png');
        btn.innerText = "on"; 
    }
}