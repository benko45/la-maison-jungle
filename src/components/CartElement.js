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
                        <div className="cartItem">
                            {name} : {price}€ x {amount}
                        </div>
                        <div className="boutonsCart">
                            <button className="boutonPlus" onClick={() => addToCart()}></button>
                            <button className="boutonMoins" onClick={() => removerFromCart()}></button>
                            <button className="boutonSupprimer"onClick={() => deleteLine()}></button>
                         </div>
		            </div>
                    )   
    )
}

export default CartElement