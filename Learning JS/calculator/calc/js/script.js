const inputRub = document.querySelector('#rub')
const inputUsd = document.querySelector('#usd')

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest()

    request.open('GET', '/calculator/calc/js/current.json') 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    request.send()

    /*  request.addEventListener('readystatechange', () => { //* отслеживание статуса запроса
        if (request.readyState === 4 && request.status === 200) { //* 4 = DONE & 200 = OK
            console.log(request.response)
            const data = JSON.parse(request.response)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2) 
        } else {
            inputUsd.value = 'Something went wrong'
        }
    }) */ // readystatechange редко используется

    request.addEventListener('load', () => { // отслеживание статуса запроса. load срабатывает 1 раз, когда запрос уже полностью готов
        if (request.status === 200) { // 4 = DONE & 200 = OK
            console.log(request.response)
            const data = JSON.parse(request.response)
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2) // .toFixed(2) - 2 знака после запятой
        } else {
            inputUsd.value = 'Something went wrong'
        }
    })
})