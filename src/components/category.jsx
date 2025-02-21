import React, {useContext} from 'react';
import {createcategorycontext} from '../context/categorycontext';


export function Category() {
    const catfetch = useContext(createcategorycontext);
    return (
    <div>
        <form className='text-center' action="" onSubmit={catfetch.handleSubmit}>
            <label htmlFor="" className='fw-bold'>Category: </label> 
            <input 
                type="text" 
                name="category"
            /><br />
            <button className='btn btn-success mt-1'>Add Category</button><br /><br />
        </form>

            <table className='table table-bordered bg-black'>
                <tbody>
                    <tr>
                        <th>Sr.No.</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {catfetch.category.map((category, index)=>{return<tr><td>{index+1}</td><td>{category.name}</td><td><a href="" className='btn btn-info'>Update</a></td>
                    <td>
                        <form action="" onSubmit={catfetch.handledelete}>
                            <input type="hidden" name="hidden" value={category._id} id="" />
                          <button className='btn btn-danger'>Delete</button>
                        </form>
                    </td></tr>})}
                </tbody>
            </table>

            {catfetch.category.msg?<h1>{catfetch.category.msg}</h1>:<></>}


    </div>
    );
};