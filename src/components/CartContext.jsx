import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
      let aux = []
      let found = false
      cartList.map(itemList => {
        let itemAux = itemList
        if(item.id == itemList.id){
          found = true
          itemAux.qty += qty
        }
        aux.push(itemAux)
      })
      if(!found) aux.push({qty, ...item})
      
      setCartList(aux);
    }

    const removeItem = (item) => {
      let aux = []
      aux = cartList.filter(itemList => itemList.id != item.id)
      setCartList(aux)
    }

    const getTotal = () => {
      let total = 0;
      cartList.map(item => {
        let cost = item.cost * item.qty;
        total += cost;
      })
      return total;
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, getTotal}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;