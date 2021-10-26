import React from 'react'

function Namelist() {
    
        const names=['siva','ravi','mohit']
        const persons=[{
            id:1,
            name:"siva",
            age:23,
            skill:"React"
        },
    {
        id:2,
        name:"ravi",
        age:25,
        skill:"angular"
    },
    {
        id:3,
        name:"mohit",
        age:24,
        skill:"javascript"
    }]
    // const personList=persons.map(person=><Person key={person.id}person={person}/>)
    const nameList=names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
    
    return (
        <div>
            <table align="center" border="3">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {
                    names.map((name,index) => <tr>
                        <td key={index}>{index}</td>
                        <td>{name}</td>
                    </tr>)
                }
            </table>
        </div>
    )
}

export default Namelist

