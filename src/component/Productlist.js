import React, { Component } from 'react'

export class Productlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              list:[]
        }
    }
    componentDidMount(){
        fetch(" http://localhost:3000/login").then((response)=>{response.json().then((result)=>{
            this.setState({list:result})
        })
    })
        
    }
    
    render() {
        return (
            <div>
                <h1>Product list</h1>
                 <table class="table table-striped" align="center" border="4">
                     <tr>
                         <th>#</th>
                         <th>ID</th>
                         <th>name</th>
                         
                         <th>Password</th>
                     </tr>
                     {this.state.list.map((product,index)=> 
                     <tr>
                     <td key={index}>{index}</td>

                         <td>{product.id}</td>
                         <td>{product.username}</td>
                       
                         <td>{product.password}</td>
                         <td>
                            <button className="btn btn-primary">update</button>
                            <button className="btn btn-danger">Delete</button>
                         </td>

                     </tr> )}
                    </table>
                
            </div>
        )
    }
}

export default Productlist
