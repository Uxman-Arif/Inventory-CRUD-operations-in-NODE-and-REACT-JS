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
    })
    return <stockcontext.Provider value={{stock}}>
        {props.children};
    </stockcontext.Provider>
}