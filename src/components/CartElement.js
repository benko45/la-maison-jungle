import "../styles/CartElement.css"
import { useState } from "react"

function CartElement({name, price, amount}){
    const [isShown, setIsShown] = useState(true)
    return (
        isShown && ( <div>
			            {name} {price}€ x {amount} <br/>
                         <button onClick={() => setIsShown(false)}>🗑️Supprimer</button>
		            </div>
                    )   
    )
}

export default CartElement