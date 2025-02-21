import React, {useContext} from 'react';
import {suppliercntxt} from '../context/suppliercontext';

export function Suppliers() {
    const suppliercontextcreate = useContext(suppliercntxt);
    console.log(suppliercontextcreate);
    // console.log(suppliercontextcreate.supplier);
    console.log(suppliercontextcreate.supplier.msg);
    return (
    <div>
        <form action="" method='' className='text-center' onSubmit={suppliercontextcreate.handleSubmit}>
            <label htmlFor="" className='fw-bold'>Name: </label> 
            <input type="text" name="name" id="" className='m-1' required /><br />

            <label htmlFor="" className='fw-bold'>Eamil: </label> 
            <input type="email" name="email" id="" className='m-1' required /><br />

            <label htmlFor="" className='fw-bold'>Phone No: </label> 
            <input type="number" name="ph_no" id="" className='m-1' required /><br />
            {suppliercontextcreate.supplier.msg?<p className='alert alert-danger'>{suppliercontextcreate.supplier.msg}</p>:<></>}
            <button className='btn btn-success m-1'>Add Supplier</button>
        </form>
        
        <table className='table table-rounded'>
            <tbody>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone No</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {suppliercontextcreate && suppliercontextcreate.supplier.suppliers ? (
                    suppliercontextcreate.supplier.suppliers.map((sup, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{sup.name}</td>
                            <td>{sup.email}</td>
                            <td>{sup.phone_no}</td>
                            <td><a href="" className='btn btn-info'>Update</a></td>
                            <td>
                                <form action="" onSubmit={suppliercontextcreate.handlesupplierdelete}>
                                    <input type="hidden" name="hidden" value={sup._id} id="" />
                                <button className='btn btn-danger'>Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">Loading suppliers...</td>
                    </tr>
                )}

            </tbody>
        </table>
        
    </div>
    );
};