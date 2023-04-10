// use local storage to manage cart data
const addToDb = id => {
    let applyCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('apply-cart')
    if (storedCart) {
      applyCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = applyCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      applyCart[id] = newQuantity
    } else {
      applyCart[id] = 1
    }
    localStorage.setItem('apply-cart', JSON.stringify(applyCart))
  }
  
  const getStoredCart = () => {
    let applyCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('apply-cart')
    if (storedCart) {
      applyCart = JSON.parse(storedCart)
    }
    return applyCart;
  }
  
 
  
  export { addToDb, getStoredCart}
  