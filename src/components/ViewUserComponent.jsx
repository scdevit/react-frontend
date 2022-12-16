import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
            console.log(res);
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Username: </label>
                            <div> &nbsp;  { this.state.user.username }</div>
                        </div>
                        <div className = "row">
                            <label> Nama User: </label>
                            <div> &nbsp; { this.state.user.nama_user }</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> &nbsp;  { this.state.user.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
