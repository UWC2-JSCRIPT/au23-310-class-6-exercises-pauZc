// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
$('p').last().after(`<a id='cta' >Buy Now!<a/>`)
// Access (read) the data-color attribute of the <img>,
// log to the console
const $imgColor = $('img')[0].dataset.color
console.log($imgColor)
// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
const $li = $('li')
$li.addClass(function(index){
    if(index == 2)
        return "highlight"
})

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$('p').last().remove()

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$(document).ready(function(){
    //all of your code in here
    $('#cta').click(function(){
        this.remove()
        $('ul').last().after(`<p>Added to cart</p>`)
    })
    //this uses jQuery, but there is a plain
    //Javaascript way to do this as well
})