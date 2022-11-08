'use strict';

const checkbox = document.querySelector('#checkbox')
const form = document.querySelector('form')
const change = document.querySelector('#color')

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red'
} 

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true)
})

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg')
        form.style.backgroundColor = 'white'
    } else {
        localStorage.setItem('bg', 'changed')
        form.style.backgroundColor = 'red'
    }
})
