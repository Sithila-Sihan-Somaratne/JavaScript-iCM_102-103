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