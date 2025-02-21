import React, {useContext} from 'react';
import {stockcontext} from '../context/stockcontext';

export function Stock() {
    const stock = useContext(stockcontext);
    console.log(stock.stock.products)
    return (
    <div>
        <form action="" method='' className='text-center'>
            <label htmlFor="" className='fw-bold'>Product: </label>
            <select className='m-1' name="category" id="">
                {
                    stock.stock.products?
                    stock.stock.products.map((stk)=>(
                        <option value={stk._id}>{stk.name}</option>
                    )):<option value="">default</option>
                }
                
            </select><br />
            <label htmlFor="" className='fw-bold'>Supplier: </label>
            <select className='m-1' name="category" id="">
            {
                    stock.stock.suppliers?
                    stock.stock.suppliers.map((stk)=>(
                        <option value={stk._id}>{stk.name}</option>
                    )):<option value="">default</option>
                }
            </select><br />
            <label htmlFor="" className='fw-bold'>Purchase Price: </label>
            <input className='m-1' type="number" name="category" id="" /><br />

            <label htmlFor="" className='fw-bold'>Sale Price: </label>
            <input className='m-1' type="number" name="category" id="" /><br />

            <label htmlFor="" className='fw-bold'>Quantity: </label>
            <input className='m-1' type="number" name="category" id="" /><br />

            <label htmlFor="" className='fw-bold'>Expire Date: </label>
            <input className='m-1' type="date" name="category" id="" /><br />
            <button className='btn btn-info'>Add Stock</button>
        </form>

        <table className='table table-bordered'>
            <tbody>
                <tr>
                    <th>Sr.No.</th>
                    <th>Product</th>
                    <th>Supplier</th>
                    <th>Batch No</th>
                    <th>Purchase Price</th>
                    <th>Sale Price</th>
                    <th>Quantity</th>
                    <th>Date of Expire</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>

                {
                    stock.stock.stock?
                    stock.stock.stock.map((stk, index)=>(
                        <tr>
                            <td>{index + 1}</td>
                            <td>{stk?.product?.name}</td>
                            <td>{stk.supplier.name}</td>
                            <td>{stk.batch}</td>
                            <td>{stk.purchaseprice}</td>
                            <td>{stk.saleprice}</td>
                            <td>{stk.quantity}</td>
                            <td>{stk.expiredate}</td>
                            <td><a href="" className='btn btn-info'>Update</a></td>
                            <td>
                                <form action="">
                                    <input type="hidden" name="hidden" value={stk._id} id="" />
                                <button className='btn btn-danger'>Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))
                    :<tr><td className='colspan-4'>No Stock found</td></tr>
                }
            </tbody>
        </table>
        
    </div>
    );
};