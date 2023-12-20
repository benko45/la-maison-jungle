import "../styles/CartElement.css"
import { useState } from "react"

function CartElement({name, price, amount, cart, updateCart}){
    const [isShown, setIsShown] = useState(true)

    function deleteLine(){
        setIsShown(false)
        updateCart(cart.filter((plant) => plant.name !== name))
    }
    return (
        isShown && ( <div>
			            {name} {price}€ x {amount} <br/>
                         <button onClick={() => deleteLine()}>🗑️Supprimer</button>
		            </div>
                    )   
    )
}

export default CartElement