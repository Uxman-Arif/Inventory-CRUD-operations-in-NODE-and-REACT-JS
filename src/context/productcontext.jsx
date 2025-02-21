import React, {createContext, useState, useEffect} from 'react';

export const prodcontext = createContext(null);

export async function fetchproducts() {
    const response = await fetch('http://127.0.0.1:8000/products');
    const productsfrombackend = response.json();
    return productsfrombackend;
}

export function ProdcontextProvider(props) {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        fetchproducts().then((prod)=>{setproducts(prod)});
    });

    const handleuploadprod = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/products', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:e.target.name.value, description:e.target.description.value, category:e.target.category.value})
        });
        e.target.reset();
        fetchproducts().then((prod)=>{setproducts(prod)});
    };

    const handledeleteprod = async (e) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/products', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({hidden:e.target.hidden.value})
        });
        e.target.reset();
        fetchproducts().then((prod)=>{setproducts(prod)});
    };



    return <prodcontext.Provider value={{products, handleuploadprod, handledeleteprod}}>
        {props.children}
    </prodcontext.Provider>
}