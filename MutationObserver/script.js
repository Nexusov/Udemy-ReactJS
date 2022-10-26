const box = document.querySelector('.box');


// MutationObserver

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords)
})

observer.observe(box, {childList: true})

observer.disconnect() // удаляем наблюдателя

