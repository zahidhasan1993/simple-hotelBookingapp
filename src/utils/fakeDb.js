// use local storage to manage cart data
const addToDb = id => {
    let jobCart = {}

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      jobCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = jobCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      jobCart[id] = newQuantity
    } else {
      jobCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(jobCart))
  }
  
  const getStoredCart = () => {
    let jobCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      jobCart = JSON.parse(storedCart)
    }
    return jobCart
  }
  
  
export { addToDb, getStoredCart }