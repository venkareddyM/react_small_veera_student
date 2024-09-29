import React, { useEffect, useState } from 'react';

function Fetchcall() {
    const [data, setData] = useState([])

    const [searchkey, setSearchkey] = useState("")


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result => result.json()))
            .then((json => setData(json)))
    }, [])
    // console.log(data)

    const searchHandler = (e) => {
        let search = e.target.value.toLowerCase();
        setSearchkey(search)
    }

    var filterdata = searchkey !== '' ?
        data.filter((e) => e.title.toLowerCase().startsWith(searchkey)) : data;

    return (
        <div className="container">
            <h1>API call</h1>

            <div>
                <input type="text" placeholder='search..' onChange={searchHandler} />
            </div>
            <br />
            <table border={1} className='w-50'>
                <tr>
                    <th>S.No</th>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {filterdata.map((e, ind) => (

                    <tr>
                        <td>{ind + 1}</td>
                        <td>{e.userId}</td>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                        <td>{e.body}</td>
                    </tr>

                ))}
            </table>
            
            {/* <div className='f-wrap'> 
            {data.map((e)=>(
                <div className='grid'>
                    <div>{e.userId}</div>
                    <div>{e.id}</div>
                    <div>{e.title}</div>
                    <div>{e.body}</div>
                    
                </div>
            ))}
            </div>  */}

        </div>
    )
}

export default Fetchcall;