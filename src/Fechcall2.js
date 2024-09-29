import React, { useEffect, useState } from 'react';

function Fechcall2() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result => result.json()))
            .then((json => setData(json)))
    })
    return (
        <div className='container'>
            <h1>fechcall 2</h1>
            <table border={1} className='w-50'>
                <tr>
                    <th>S.No</th>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {data.map((e, ind) => (
                    <tr>
                        <td>{ind + 1}</td>
                        <td>{e.userId}</td>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                        <td>{e.body}</td>
                    </tr>
                ))}
            </table>
            {/* <div className=''>
                <div className='f-wrap'>
                {data.map((e) => (
                    <div className='grid'>
                        <div>{e.userId}</div>
                        <div>{e.id}</div>
                        <div>{e.title}</div>
                        <div>{e.body}</div>
                    </div>
                ))}
                </div>
            </div> */}
        </div>
    )
}
export default Fechcall2;