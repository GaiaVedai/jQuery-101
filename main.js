var h1 = $('h1');
console.log(h1);

// var clicked = function () {
//     alert($('#my-input').val())
// };
// debugger;


var studentName = function () {
    return($('#nameInput').val());
};
var nameList = function () {
   alert ($('.students').text());
};
var checkName = function () {
    // if (studentName !== nameList)  {
        $('.students').append("<li>" + studentName() +"</li>");
    // };
}

$('#addRem').click(checkName);
$('.studets').on('click', function() {
    $('this').children('li').hide();
})





// $('#justClick').click(clicked);
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');

$('#greenLi').css('color', 'green');

$('#pinkLi').css('color', 'pink');

$('#brown-div').css('color', 'brown');