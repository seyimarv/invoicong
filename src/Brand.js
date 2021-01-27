import React, {useState, useEffect} from 'react'
import './Brand.css'
import {Link} from 'react-router-dom'



const Brand = () => {
    const [data, setData] = useState([])

    useEffect(() => {
     async function getRandomBrands() {
       try {
         const response = await fetch('https://swapi.dev/api/people')
         console.log(response)
          const data = await response.json()
          console.log(data.results)
          setData(data.results)
      
       } catch(err) {
         console.log("error: ", err);
       }
     }
       getRandomBrands()
    }, [])
    console.log(data)
    return (
     <div className='container fluid'>
        <h6>Brands</h6>
        <div className='row'>
          {
              data.map(({name}) => 
              <div key={name} className='col-4 my-2'>
                 
                <Link to={`/Products/${name}`}><button className='w-100'>{name}</button></Link>
             
              </div>
              )
          }

        </div>
        </div>

    )
}

export default Brand