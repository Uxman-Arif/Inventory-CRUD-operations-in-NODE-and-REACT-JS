import React, {createContext, useState, useEffect} from 'react';

export const suppliercntxt = createContext(null);
async function fetchingsupliers() {
    const response = await fetch('http://127.0.0.1:8000/supplier', {
        method:'GET'
    });
    const suppliers = response.json();
    return suppliers;
};


export function Suppliercntxtprovider(props) {
    const [supplier, setsupplier] = useState([]);
    useEffect(()=>{
        fetchingsupliers().then((data)=>{setsupplier(data)});
    }, []);
    
    async function handlesupplierdelete(e) {
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/supplier', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({hidden:e.target.hidden.value})
        });
        e.target.reset();
        fetchingsupliers().then((sup)=>{setsupplier(sup)});
    };

    async function handleSubmit(e){
        e.preventDefault();
        await fetch('http://127.0.0.1:8000/supplier', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:e.target.name.value, email:e.target.email.value, phone_no:e.target.ph_no.value})
        });
        e.target.reset();
        fetchingsupliers().then((sup)=>{setsupplier(sup)});
    };
    return (<suppliercntxt.Provider value={{supplier, handleSubmit, handlesupplierdelete}}>
        {props.children}
    </suppliercntxt.Provider>);
};