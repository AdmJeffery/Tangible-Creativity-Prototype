import React, {Component } from 'react';
import API from '../../utils/API';
import TableRow from './TableRow'




class Table extends Component {
  
   constructor(props){
    super(props)
    this.state = {
      items:[],
      
    }
  }

  componentDidMount (){
    API.getSubs()
    .then(
      subs => {
        console.log(subs)
        this.setState({
          items:subs.data,
          loading:true
        })
      })
    
  }
  
  
    render (){
      if (this.state.items.length === 0 ){
        return null;
    }
    console.log(this.state)

        return (
            
            <table style= {{marginTop:"5%", display:""}} class="table table-hover table-dark">
            <thead>
              <tr>
                
                <th scope="col">Name</th>
                <th scope="col">Email</th>
               
              </tr>
            </thead>
            <tbody>
             {this.state.items.map((items) =>
             {return(
               <TableRow name = {items.name} email = {items.email}/>)
             })
            }
            </tbody>
          </table>
        )
    }
}


export default Table;