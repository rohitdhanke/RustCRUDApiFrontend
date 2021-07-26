import axios from 'axios'
import React, {Component} from 'react'


class PostForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            first_name:'',
            last_name:'',
            email:''
        }
    }

    changeHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)

        axios.post("/users/post", this.state,{
            headers:{
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                
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
        const{first_name,last_name,email}=this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>First Name : </label>
                        <input type="text" name="first_name" value={first_name} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <label>Last Name : </label>
                        <input type="text" name="last_name" value={last_name} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                    <label>Email : </label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm