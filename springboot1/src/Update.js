import React, {Component} from "react";
import axios from 'axios';
import './Create.css'
import {Navigate} from 'react-router-dom';
import { useParams } from "react-router-dom";


class Update extends Component {
    state = {
        data: [],
        update: false
    }
    
    // componentDidMount() {
    //     const {match} = this.props;
    //     const id = match.params.id;
    //     axios.get(`http://127.0.0.1:8080/get/${id}`).then(response =>{this.setState({data: response.data});
    //     console.log(this.props.params.id);
    // })
    // .catch(error => {console.log(error);
    // });
    // }
    
    handleaccidchange = (event) => {
        this.setState({id:event.target.value});   
    };
    
    handleclientnamechange = (event) => {
        this.setState({clientName: event.target.value});
    };
    
    handlebanknamechange = (event) => {
        this.setState({bankName: event.target.value});
    };
    
    handlebranchchange = (event) => {
        this.setState({branch: event.target.value});
    };
    
    handlemobilechange = (event) => {
        this.setState({mobile: event.target.value});
    };
    
    handlemailidchange = (event) => {
        this.setState({mail: event.target.value});
    };
    
    handlebalancechange = (event) => {
        this.setState({balance: event.target.value});
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id : this.state.id,
            clientName: this.state.clientName,
            bankName: this.state.bankName,
            branch: this.state.branch,
            mobile: this.state.mobile,
            mail: this.state.mail,
            balance: this.state.balance,
            submitted: true
        };
        this.setState({submitted: true});
        axios.put(`http://127.0.0.1:8080/update/${this.state.id}`, data)
        console.log(data);
    };
    render(){
        // console.log(this.props.id);
        return(
            <>
            {
                this.state.submitted===true && <Navigate to="/Table"/>
            }
            <form onSubmit={this.handleSubmit} className="login-form" id="inputdata">
                <label className="login-label">Account id</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.Id}
                    onChange={this.handleaccidchange}
                    />
                <label className="login-label">Client Name</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleclientnamechange}
                    />
                <label className="login-label">Bank Name</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.bname}
                    onChange={this.handlebanknamechange}
                    />
                <label className="login-label">Branch</label>
                <input 
                    className="login-input"
                    type="text"
                    value={this.state.branch}
                    onChange={this.handlebranchchange}
                    />
                <label className="login-label">Mobile</label>
                <input 
                    className="login-input"
                    type="number"
                    value={this.state.mobile}
                    onChange={this.handlemobilechange}
                    />
                <label className="login-label">Mail ID</label>
                <input 
                    className="login-input"
                    type="email"
                    value={this.state.mail}
                    onChange={this.handlemailidchange}
                    />
                <label className="login-label">Balance</label>
                <input 
                    className="login-input"
                    type="number"
                    value={this.state.balance}
                    onChange={this.handlebalancechange}
                    />
                <button className="login-button" type="submit">Add</button>
            </form>
                { this.state.submitted && <Navigate to="/Table"/>}
            
            </>
        )
    }
}

export default Update;