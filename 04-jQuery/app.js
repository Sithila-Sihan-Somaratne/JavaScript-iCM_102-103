//Select by tag name
console.log(jQuery('h1'));
console.log($('button'));
let titleTag = jQuery('title');
console.log(titleTag);
//Select by class
let sbc = $('.btn-danger');
console.log(sbc);
//Select by id
let sbi = $('#sv-btn');
console.log(sbi);
///////////////////////
let sp = $('button.btn#sv-btn');
console.log(sp);
console.log($('button').not('.btn-danger'));
console.log($('button').filter(':odd'));
////////////////////////////////////////////////////////
// perform actions
///////////////////////////////////////////////////////
//Set Text Content
$('h1').text('Sri Lanka');

//Get Text Content
console.log($('h1').text());

//Get HTML element
console.log($('body').html());

//Set HTML element
$('strong').html('<bold>I am bold!</bold>');
////////////////////////////////////////////////////////
//Modify Attributes
////////////////////////////////////////////////////////

//Get an attribute
console.log($('button#sv-btn').attr('id'));
console.log($('button#sv-btn').attr('class'));
//Set an attribute
$('button#sv-btn').attr('id',"btn");
$('button').attr('id',"btn");
console.log($('button').attr('id'))
////////////////////////////////////////////////////////
//Add or remove classes
////////////////////////////////////////////////////////

//Add a class
$('strong').addClass('strong');
console.log($('strong').attr('class'));
//Remove a class
$('strong').removeClass('strong');
console.log($('strong').attr('class'));
////////////////////////////////////////////////////////
//Changing CSS property
////////////////////////////////////////////////////////
$('h1').css('color','orange');
////////////////////////////////////////////////////////
//Handling Events
////////////////////////////////////////////////////////
$('h1').click(function() {
    console.log('The h1 tag clicked.');
});
$('h1').mouseover(function() {
    console.log('Mouse over event triggered on h1 tag.');
});