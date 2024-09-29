import React, { useEffect, useState } from 'react'

function Dbjson() {
    const [data, setData] = useState([])

    const [searchkey, setSearchkey] = useState("")



    useEffect(() => {
        fetch('http://localhost:3000/data')
            .then((res) => res.json())
            .then((json) => setData(json))
    }, [])
    // console.log(data)



    const searchHandler = (e) => {
        let search = e.target.value.toLowerCase();
        setSearchkey(search)
    }

    var filterdata = searchkey !== '' ?
        data.filter((e) => e.category.toLowerCase().startsWith(searchkey)) : data;

    return (
        <div className='container'>
            
            <div>
                <input type="text" placeholder='search..' onChange={searchHandler} />
            </div>
            <br />

            <div className='f-wrap '>



                {filterdata.map((e) => (
                    <div className='grid'>
                        <div>
                            <img className='w-100' src={e.imageUrl} />
                        </div>
                        <h3>{e.title} </h3>
                        <h3>{e.category} </h3>
                        <h2>price:  &#8377;{e.price} </h2>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Dbjson;