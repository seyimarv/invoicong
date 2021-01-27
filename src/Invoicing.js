import React from 'react'
import { Link } from 'react-router-dom'



const Invoicing = () => {
    
    return (
        <div className='container fluid'>
          <h6>Products</h6>
        <div className='row'>
           <div className='col-4 product'>
             <Link to='/invoicingproducts'><p> Guides</p> </Link> 
           </div>
           <div className='col-4  product'>
             <p>Rental equipment</p> 
            </div>
             <div className='col-4  product'>
              <p> Trekking gear </p>
            </div>
            <div className='col-4  product'>
              <p>cabs</p> 
              </div>
              <div className='col-4  product'>
             <p> 2 wheeler rent </p>
            </div>
            <div  className='col-4  product'>
             <p>events</p>
            </div>
            <div className='col-4 product'>
                <p>foods</p> 
           </div>
           <div className='col-4  product'>
             <p>car rent</p>
            </div>
             <div className='col-4  product'>
               <p>stationary and grocery</p>
            </div>
        </div>
        </div>

    )
}


export default Invoicing