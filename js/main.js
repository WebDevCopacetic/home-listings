var $address = $('#address')
var $bedrooms = $('#bedrooms')
var $bathrooms = $('#bathrooms')
var $list = $('#list')
var $form = $('form')

$form.on('submit', function (evt) {
    evt.preventDefault () // This will keep us on the page as opposed to it refreshing when the submit button is clicked. 
    var addressValue = $address.val()
    var bedroomsValue = $bedrooms.val()
    var bathroomsValue = $bathrooms.val()

    $("ul").append(`<li style="display:none">Address: ${addressValue} Bedrooms: ${bedroomsValue}  
    Bedrooms: ${bathroomsValue}`)
    $('li').last().fadeIn(2000)

});

// If user clicks anywhere on the list
// 'this' refers to the specific thing within
// that was clicked
$list.on('click', 'li', function () {
    $(this).fadeOut(function () {
        $(this).remove()
    })
})