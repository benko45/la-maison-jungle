import "../styles/CartElement.css"
import { useState } from "react"

function CartElement({name, price, amount, cart, updateCart}){
    const [isShown, setIsShown] = useState(true)

    function deleteLine(){
        setIsShown(false)
        updateCart(cart.filter((plant) => plant.name !== name))
    }
    function addToCart(){
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name !== name
        )
        updateCart([
            ...cartFilteredCurrentPlant,
            { name, price, amount: amount + 1 }])
    }

    function removerFromCart()
    {
        if(amount === 1){
            deleteLine()
        } else {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: amount - 1 }])
        }
    }

    return (
        isShown && ( <div>
			            {name} {price}€ x {amount} <br/>
                        <button onClick={() => addToCart()}>➕</button>
                        <button onClick={() => removerFromCart()}>➖</button>
                         <button onClick={() => deleteLine()}>🗑️Supprimer</button>
		            </div>
                    )   
    )
}

export default CartElement