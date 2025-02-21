import React, {useContext} from 'react';
import {prodcontext} from '../context/productcontext';


export function Products() {
    const prods = useContext(prodcontext);
    console.log(prods.products.categories)
    return (
    <div>
        <form action="" method='' className='text-center' onSubmit={prods.handleuploadprod}>
            <label htmlFor="" className='fw-bold'>Name: </label>
            <input className='m-1' type="text" name="name" id="" /><br />
            <label htmlFor="" className='fw-bold'>Description: </label>
            <input className='m-1' type="text" name="description" id="" /><br />
            <label htmlFor="" className='fw-bold'>Category: </label>
            <select className='m-1' name="category" id="">
                {
                    prods.products.categories?
                    prods.products.categories.map((cat)=>(
                        <option value={cat._id}>{cat.name}</option>
                    ))
                    :<option value="">default</option>
                }
            </select><br />
            <button className='btn btn-info m-1'>Add Product</button>
        </form>

        <table className='table table-bordered'>
            <tbody>
                <tr>

                    <th>Sr.No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Update</th>
                    <th>Delete</th>

                </tr>
                {prods.products.products?
                    prods.products.products.map((prod, index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{prod.name}</td>
                            <td>{prod.description}</td>
                            <td>{prod.category.name}</td>
                            <td><a href="" className='btn btn-success'>Update</a></td>
                            <td>
                                <form action="" onSubmit={prods.handledeleteprod}>
                                    <input type="hidden" name="hidden" value={prod._id} id="" />
                                <button className='btn btn-danger'>Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))
                    :<tr><td className='colspan-4'>No Products found</td></tr>
                }
            </tbody>
        </table>

        
    </div>
    );
};