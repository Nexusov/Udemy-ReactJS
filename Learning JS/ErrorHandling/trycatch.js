try {
    document.querySelector('.active').addEventListener('click', () => {
    console.log('click')
})
} catch (error) {
    console.log(error)
}

console.log('normal')