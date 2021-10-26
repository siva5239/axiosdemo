import React, { Component } from 'react'

export class Customer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/customer").then((response)=>{response.json().then((result)=>{
            this.setState({list:result})
        })
    })
}
    
    render() {
        return (
            <div>
                 
            <div>
                <h1>Product list</h1>
                 <table className="table table-hover" align="center" border="4">
                     <tr>
                          <th>#</th>
                         <th>ID</th>
                         <th>name</th>
                         
                         <th>Password</th>
                         <th>Actions</th>
                     </tr>
                     {this.state.list.map((product,index)=> 
                     <tr>
                     <td key={index}>{index}</td>

                         <td>{product.id}</td>
                         <td>{product.name}</td>
                       
                         <td>{product.email}</td>
                         <td>
                            <button className="btn btn-primary">update</button>
                            <button className="btn btn-danger">Delete</button>
                         </td>

                     </tr> )}
                    </table>
                
            </div>
            </div>
        )
    }
}

export default Customer
