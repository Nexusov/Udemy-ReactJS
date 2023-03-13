const currRate: string = '1.05'

const fetchCurr = (response: string): number => {
   const data = JSON.parse(response)
   return data
}

function transferEurToUsd(available: boolean, amount: number, fee: number): void {
   if (available) {
      let res = fetchCurr(currRate) * amount * fee;
      console.log(res)
   } else {
      console.log('Сейчас обмен недоступен')
   }
}

transferEurToUsd(true, 500, 1.05)
