import React, { useState } from 'react';

function List() {

    var students = ["raju", "kiran", "Veera", "Mahesh", "Suresh", "pavan", "ragu", "kumar"]
    const [data, setData] = useState(students)

    const searchHander = (e) => {

        let search = e.target.value.toLowerCase();
        setData(students.filter((a) =>
            a.toLowerCase().startsWith(search)))       //includes
        // console.log(search)
    }
    return (
        <div>
            <h2>List data</h2>
            {/* 
            {data.map((e) => {
                return (
                    <div>{e}</div>
                )
            })} */}

            <div>
                <input type="text" placeholder='search..' onChange={searchHander} />
            </div>

            {data.map((e) => (
                <div>{e} </div>
            ))}

        </div>
    )
}
export default List;