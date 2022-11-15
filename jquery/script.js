import $ from 'jquery'

const btn = $('#btn'); // получаем элемент по id "btn"
console.log(btn)


$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active')
    })

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    })

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'togle'
        }, 2000)
    })

})

