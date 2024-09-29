import React from 'react';

function Datadisplay() {

    var student = [
        { name: "raju", marks: 330, city: "Bangalore" },
        { name: "ramu", marks: 400, city: "Hyadrabad" },
        { name: "ravi", marks: 330, city: "Ananthapur" },
        { name: "rajesh", marks: 360, city: "Chenni" }

    ]
    return (
        <div>
            <h1>Data display</h1>
            {/* <h3>student: {student[0]["name"]}</h3> */}
            <table border={1} className='w-30'>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>city</th>
                </tr>
                {student.map((e, ind) => (
                    <tr key={e.name}>
                        <td>{ind + 1}</td>
                        <td>{e.name}</td>
                        <td>{e.marks}</td>
                        <td>{e.city}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default Datadisplay;