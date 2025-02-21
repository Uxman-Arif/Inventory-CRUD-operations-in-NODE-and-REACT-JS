import React, {useState, useEffect, createContext} from 'react';

export const stockcontext = createContext(null);
async function fetchstock() {
    const response = await fetch('http://127.0.0.1:8000/stock', {method:'GET'});
    const stock = response.json();
    return stock;
}
export function Contextprovider(props) {
    const [stock, setstock] = useState([]);
    useEffect(()=>{
        fetchstock().then((stk)=>{setstock(stk)});
    });

    const handlesubmitstock = async (e) => {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/stock',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({product:e.target.product.value, supplier:e.target.supplier.value, purchaseprice:e.target.purchaseprice.value, saleprice:e.target.saleprice.value, quantity:e.target.quantity.value, expiredate:e.target.expiredate.value,})
        });
        e.target.reset();
        fetchstock().then((stk)=>{setstock(stk)});
    };

    return <stockcontext.Provider value={{stock, handlesubmitstock}}>
        {props.children};
    </stockcontext.Provider>
}