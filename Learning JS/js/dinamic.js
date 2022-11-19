/* const p = document.querySelectorAll('p')
console.log(p)


const script = document.createElement('script')
script.src = 'js/test.js'
document.body.append(script)

script.async = 'false' */

loadScript = (src) => {
	const script = document.createElement('script');
	script.src = src;
    script.async = 'false' // выключаем ассинхроность скрипта
	document.body.append(script);
};

loadScript('js/test.js')
loadScript('js/tasks.js')