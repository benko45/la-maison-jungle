import "../styles/CartElement.css"
import { useState } from "react"

function CartElement({name, price, amount, cart, updateCart}){
    const [isShown, setIsShown] = useState(true)

    function deleteLine(){
        setIsShown(false)
        updateCart(cart.filter((plant) => plant.name !== name))
    }
    function addToCart(){
        let newCart = []
        cart.forEach((object) => {
            if(object.name !== name){
                newCart.push(object)
            } else {
                const entries = new Map([
                    ['name', name],
                    ['price', price],
                    ['amount', amount + 1],
                ])
                newCart.push(Object.fromEntries(entries))
            }
        })
        updateCart(newCart)
    }

    function removerFromCart()
    {
        if(amount === 1){
            deleteLine()
        } else {
            let newCart = []
            cart.forEach((object) => {
                if(object.name !== name){
                    newCart.push(object)
                } else {
                    const entries = new Map([
                        ['name', name],
                        ['price', price],
                        ['amount', amount - 1],
                    ])
                    newCart.push(Object.fromEntries(entries))
                }
            })
            updateCart(newCart)
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