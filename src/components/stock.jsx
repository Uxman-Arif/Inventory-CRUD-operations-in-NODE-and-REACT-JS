import React, {useContext} from 'react';
import {stockcontext} from '../context/stockcontext';

export function Stock() {
    const stock = useContext(stockcontext);
    console.log(stock);
    return (
    <div>
        <form action="" method='' className='text-center'>
            <label htmlFor="" className='fw-bold'>Product: </label>
            <select className='m-1' name="category" id="">
                <option value="">default</option>
                <option value="">default</option>
                <option value="">default</option>
            </select><br />
            <label htmlFor="" className='fw-bold'>Supplier: </label>
            <select className='m-1' name="category" id="">
                <option value="">default</option>
                <option value="">default</option>
                <option value="">default</option>
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
                    <td>Sr.No.</td>
                    <td>Product</td>
                    <td>Supplier</td>
                    <td>Purchase Price</td>
                    <td>Sale Price</td>
                    <td>Quantity</td>
                    <td>Date of Expire</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
            </tbody>
        </table>
        
    </div>
    );
};