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
            
            <table style= {{marginTop:"5%", width:"70%", marginLeft:"15%", marginRight:"15%", textAlign:"center"}} class="table table-hover table-bordered table-gradient">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
             {this.state.items.map((items) =>
             {return(
               <TableRow id = {items._id} name = {items.name} email = {items.email}/>)
             })
            }
            </tbody>
          </table>
        )
    }
}


export default Table;