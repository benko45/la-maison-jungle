import "../styles/CartElement.css"
import { useState } from "react"

function CartElement({name, price, amount}){
    return (
        <div>
			{name} {price}€ x {amount}
		</div>
    )

}

export default CartElement