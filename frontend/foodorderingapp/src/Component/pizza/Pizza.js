import React from 'react'

const Pizza = (props) => { 
     
    return <>
        <div className="itemlist_container">
            {props.fetchdata.map((item, index) =>{
                if (item.name === "Pizza") {
                    return <div key={index} className="item_heading"> <h1 style={{ textAlign: 'center' }}>{item.subItemsData.name}</h1>
                        {
                            <div>{item.subItemsData.subItems.map((items, index) => <div  key ={index} className="item_list">
                                <div>
                                    <p>{items.name}</p>
                                    <p>Rs.{items.price}</p>
                                    <p>{items.description}</p>
                                    <button onClick={()=>{props.increment(items)}}>Order Now</button>
                                </div>
                                <div><img src={items.image} alt="" /></div>

                            </div>
                            )}

                            </div>
                        }

                    </div>
                }
                   
            }
            )}
        </div>

    </>

}

export default Pizza
