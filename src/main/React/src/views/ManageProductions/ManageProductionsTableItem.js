import React, {Component} from "react";
import {apiRequest} from "../../index";

class ManageProductionsTableItem extends React.Component {

    editProfile = (e) =>{
        e.preventDefault();
        window.location.href="/editProfile/"+this.props.user.id

    }

    deleteUser = (e)=> {
        e.preventDefault();
            console.log(this.props.user.id);
            console.log(e.target);
        apiRequest.delete('/users/'+this.props.user.id)
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
                setTimeout(()=>{
                    window.location.reload();
                },100);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })


    }

    render() {
        return (
            <tr>
                <td>{this.props.production.product.name}</td>
                <td>{this.props.production.user.username}</td>
                <td>{this.props.production.compaign.name}</td>
                <td>{this.props.production.exploitation.name}</td>
                <td>{this.props.production.quantity}</td>
                <td>
                    <button className="btn-primary" style={{marginRight:"15px"}}><i className="icon-eye">

                    </i></button>
                    <button className="btn-warning" style={{marginRight:"15px"}} onClick={this.editProfile}><i className="icon-note">

                    </i></button>
                    <button className="btn-danger" style={{marginRight:"15px"}} onClick={this.deleteUser}><i className="icon-trash">

                    </i></button>
                </td>
            </tr>
        );
    }

}

export default ManageProductionsTableItem;