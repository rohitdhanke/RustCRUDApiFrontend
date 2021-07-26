import React, { Component } from 'react'

class DeleteEmployee extends Component {


    async postData(){
            try {
                let result = await fetch("/users/13",{
                    method:'DELETE',
                   // mode:'no-cors',
                    headers:{
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization,X-PINGOTHER, Content-Type',
                        'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Credentials': 'true',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                        'Authorization': `Bearer`
                    },
                    // body: JSON.stringify({
                    //      id=""
                    // })
                });

                console.log('Result: '+result);
            } catch (e) {
                console.log(e);
            }
    };

    render(){
    return(
        <div>
            <h3>Delete Employee</h3>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="id" className="form-control"/>
                <br/><br/>
            <button className="btn btn-primary" onClick={ () => this.postData()}>Delete</button>
            </div>
            </div>
    );
    }
}


export default DeleteEmployee