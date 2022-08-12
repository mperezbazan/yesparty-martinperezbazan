import {createContext, useState} from 'react';

export const CartContext= createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalInCart, setTotalInCart]=useState(0);
    const [totalItems, setTotalItems]=useState(0);
    const addToCart =(product)=>{
        //console.log(product)

        const productIndex = cart.findIndex( (productInCart)=>productInCart.id === product.id);

        if(productIndex=== -1){
            setCart ([...cart,product]);
            const total= totalInCart + product.quantity * product.price;
            setTotalInCart(total)
            setTotalItems(totalItems + product.quantity)
        }else{
            const cartCopy = [...cart];
            cartCopy[productIndex].quantity = cartCopy[productIndex].quantity + product.quantity;
            setCart(cartCopy);
            const total= totalInCart + product.quantity * product.price;
            setTotalInCart(total)
            setTotalItems(totalItems + product.quantity)
        }

    }
    const removeFromCart =(id)=>{
        const productData= cart.find((product)=>product.id === id)
        setTotalInCart(totalInCart - productData.quantity*productData.price)
        setTotalItems(totalItems - productData.quantity)
        const newCart = cart.filter((product)=>product.id !== id);
        setCart(newCart);
        
    }
    const clear =()=>{
        setCart([]);
        setTotalInCart(0);
        setTotalItems(0);
    }
    return (
        <CartContext.Provider value ={{addToCart, clear, removeFromCart, cart, totalInCart, totalItems }}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider