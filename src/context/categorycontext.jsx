import {useState, useContext, createContext, useEffect} from 'react';

async function fetchcategories() {
    const response = await fetch('http://127.0.0.1:8000/categories', {method:'GET'});
    const categories = response.json() ;
    return categories;
};


export const createcategorycontext = createContext(null);

export function Categorycntxtprovider(props) {
    const [categoryName, setCategoryName] = useState("");
    const [category, setcategory] = useState([]);
    useEffect(()=>{
        fetchcategories().then((catapi)=>{setcategory(catapi)});
    }, []);

    const handledelete = async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:8000/categories", {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({hidden:e.target.elements['hidden'].value})
        });
        e.target.reset();
        fetchcategories().then((catapi)=>{setcategory(catapi)});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: e.target.category.value }),
        });
        e.target.reset();
        fetchcategories().then((catapi)=>{setcategory(catapi)});
    };
    

    return (
    <createcategorycontext.Provider value={{category, setcategory, handleSubmit, categoryName, setCategoryName, handledelete}}>;
        {props.children}
    </createcategorycontext.Provider>
    );
};