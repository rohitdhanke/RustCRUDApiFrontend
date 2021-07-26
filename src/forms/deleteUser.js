import axios from 'axios'
import React, {Component} from 'react'


class DelForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            id:"",
        }
    }

    changeHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios.delete("/users", this.state,{
            headers:{
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization,X-PINGOTHER, Content-Type',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
                'Accept': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Authorization': `Bearer`
                
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        const{id}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <label>ID : </label>
                        <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}

export default DelForm