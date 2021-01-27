import React, {useState, useEffect} from 'react'



const Products = ({match}) => {
    const [product, setProduct] = useState({})
    const {mass, hair_color, eye_color, gender,  skin_color } = product
    
   const {name} = match.params
    useEffect(() => {
     async function getRandomProducts() {
       try {
         const response = await fetch('https://swapi.dev/api/people')
         console.log(response)
          const data = await response.json()
          console.log(data.results)
          setProduct(data.results.find(product => 
            product.name === name
            ))
      console.log(product)
       } catch(err) {
         console.log("error: ", err);
       }
     }
       getRandomProducts()
    }, [])
console.log(product)
    return (
        <div className='container'>
          <h6>Products</h6>
        <div className='row'>
           <div className='col-4 product'>
                <p>{name}</p> 
           </div>
           <div className='col-4  product'>
               {gender}  
            </div>
             <div className='col-4  product'>
                {mass} 
            </div>
            <div className='col-4  product'>
                 {hair_color}
              </div>
              <div className='col-4  product'>
                {eye_color}
            </div>
            <div  className='col-4  product'>
              { skin_color}
            </div>
        </div>
        </div>

    )
}


export default Products