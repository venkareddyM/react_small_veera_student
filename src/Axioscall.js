import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Axioscall() {
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setData(res.data))
    }, [])
    console.log(data)
    return (
        <div className='container'>
            <h1>Axioscall</h1>
            <table border="1">
                <tr>
                    <th>S.No</th>
                    <th>userid</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                {data.map((e, ind) => (
                    <tr key={e.name}>
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
                    <div>{e.userId} </div>
                    <div>{e.id} </div>
                    <div>{e.title} </div>
                    <div>{e.body} </div>
                    </div>
            ))}
            </div> */}
        </div>
    )
}
export default Axioscall;