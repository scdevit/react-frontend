import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            username: '',
            nama_user: '',
            email: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changeNamaUserHandler = this.changeNamaUserHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({username: user.username,
                nama_user: user.nama_user,
                email : user.email
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, nama_user: this.state.nama_user, email: this.state.email};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user,this.state.id).then( res => {
            this.props.history.push('/');
        });
    }
    
    changeUsernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changeNamaUserHandler= (event) => {
        this.setState({nama_user: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUsernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="nama_user" className="form-control" 
                                                value={this.state.nama_user} onChange={this.changeNamaUserHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUserComponent
