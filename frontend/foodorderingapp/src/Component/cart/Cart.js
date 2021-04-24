import React from 'react'

const Cart = (props) => {
    if(props.cartData.length!==0){
    return (<>
    <div className="item_heading">
        <div>{props.cartData.map((items, index) => <div key={index} className="cart_list">
        <div>
            <p>{items.name}</p>
            <p>Rs.{items.price}</p>
            <p>{items.description}</p>
            <button onClick={()=>{props.removeItem(index,items)}}>Remove</button>
        </div>
        <div><img src={items.image} alt="" /></div>

    </div>

    )}

    </div>
    <div  style={{textAlign:'center'}}> <button onClick={()=>{props.clearAll(props.cartData)}}>Place Order</button></div>
    </div>
    </>

    )
    }
    else
    {
        return <div style={{textAlign:'center'}}>Cart is Empty</div>
    }
}

export default Cart
