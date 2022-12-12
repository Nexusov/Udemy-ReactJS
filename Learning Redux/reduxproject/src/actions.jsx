export const inc = () => ({type:'INC'}) // actionCreator
export const dec = () => ({type:'DEC'}) // actionCreator
export const rnd = () => ({type:'RND', payload: Math.floor(Math.random() * 30 - 10)}) // actionCreator



/* const bindActionCreator = (creator, dispatch) => (...args) => {
   dispatch(creator(...args))
} */


/* const decDispatch = bindActionCreator(dec, dispatch)
const rndDispatch = bindActionCreator(rnd, dispatch) */
