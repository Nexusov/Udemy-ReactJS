//* =============== WeakMap ============== */

let user = {
    name:'Ivan'
}

let myMap = new kMap()

myMap.set(user,'data')

user = null // удаляем объект из памяти

console.log(myMap.has(user)) // true (объект не удалился)



let weakUser = {
    name:'Ivan'
}

let myWeakMap = new WeakMap()

myWeakMap.set(weakUser,'data')

weakUser = null // удаляем объект из памяти

console.log(myWeakMap.has(weakUser)) // false (объект удалился)




let cache = new WeakMap()

function cacheUser(user) {
    if (!cache.has(user)) { // если пользователя нет внутри кэша
        cache.set(user, Date.now())
    }

    return cache.get(user)
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena)) // false 
console.log(cache.has(alex)) // true




//* =============== WeakSet ============== */

// WeakSet поддерживает только .add(), .has(), .delete()

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Anton'},
    {text: 'okay', from: 'Yegor'},
]

let readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])

readMessages.add(messages[0]) // не добавится еще раз в weakSet 


messages.shift() // удаляем первый объект

