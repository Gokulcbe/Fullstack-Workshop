import axios from 'axios';
import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';

class Table extends Component {
    state = {
        data: [],
        update: false
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8080/get').then(response =>{this.setState({data: response.data});
    })
    .catch(error => {console.log(error);
    });
    }

    deleteData(id, e){
        axios.delete(`http://127.0.0.1:8080/delete/${id}`).then(response => {console.log(response);
        
        const data = this.state.data.filter(item => item.id !== id);
        this.setState({ data });
    })
    }

    // updateData(id, e){
    //     axios.put(`http://127.0.0.1:8080/update/${id}`).then(response => {console.log(response);
        
        
    // })
    // }
    handleSubmit = (event) => {
        this.setState({update: true});

    }

    render(){
        return(
            <table border={1}>
                <thead>
                    <tr>
                        <th>Account id</th>
                        <th>Client Name</th>
                        <th>Bank Name</th>
                        <th>Branch</th>
                        <th>Mobile</th>
                        <th>Mailid</th>
                        <th>Balance</th>
                        <th>Actions</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(bankaccount => (
                        <tr key={bankaccount.id}>
                            <td>{bankaccount.id}</td>
                            <td>{bankaccount.clientName}</td>
                            <td>{bankaccount.bankName}</td>
                            <td>{bankaccount.branch}</td>
                            <td>{bankaccount.mobile}</td>
                            <td>{bankaccount.mail}</td>
                            <td>{bankaccount.balance}</td>
                            <td>
                                <button className='btn btn-danger' onClick={(e) => this.deleteData(bankaccount.id, e)}>Delete</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={this.handleSubmit}> {this.state.update && <Navigate to={'/Update/'+`${bankaccount.id}`}/>} Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        )
    }
}

export default Table;