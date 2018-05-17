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
})