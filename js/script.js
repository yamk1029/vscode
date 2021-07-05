$('#mydiv').mouseenter(function () {
  $(this).css('background-color', 'red');
  $(this).css('border-radius', '20px');
});

$('#mydiv').mouseleave(function () {
  $(this).css('background-color', 'peru');
  $(this).css('border-radius', '0px');
});

$('#mydiv').dblclick(function () {
  $(this).css('background-color', 'green');
  $(this).css('color','black');
});

$('#mydiv').contextmenu(function () {
  $(this).css('background-color', 'yellow');
 
});

$('body').keydown(function () {
  $(this).css('background-color', 'skyblue');
});


$('body').keyup(function () {
  $(this).css('background-color', 'blue');
});

$('#fname').focus(function () {
  
  $(this).css({
      'border': '2px solid red',
      'width': '500px',
      'height':'30px',
  });
});

$('#fname').blur(function () {

  $(this).css({
      'border': '2px solid green',
      'border-radius':'10px',
      'width': '500px',
      'height': '30px',
  });
});

$('#country').change(function () {
  $(this).css('background-color', 'yellow');
})


$('#fname').select(function () {

  $(this).css('background-color','red');
});

$('#myform').submit(function () {
  console.log("my form is submited");
})












































// $('#btnhide').click(function(){
//     $('#merodesh').hide();
// });


// $('#btnshow').click(function(){
//     $('#merodesh').show();
// });



// $('#btn').click(function(){
//     $('#merodesh').toggle();
// });


//   });



// });








































// function changeMyColor(color)
// {
//     var myp = document.getElementById('merodesh');
//     myp.style.backgroundColor = color;
// }

// function onoff(btn)
// {
//     var bulb = document.getElementById('bulb');
//     var status = bulb.getAttribute('src');

//     if(status == 'img/off.png')
//     {
//         bulb.setAttribute('src','img/on.png');
//         btn.innerText = "off";
//     }
//     else
//     {
//         bulb.setAttribute('src','img/off.png');
//         btn.innerText = "on"; 
//     }
// }