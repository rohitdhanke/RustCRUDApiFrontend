import react from 'react'

const Register = () => {
    return(
        <div>
            <h3>Register</h3>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="first-name" className="form-control"/>
                <br/><br/>
            <input type="text" placeholder="last-name" className="form-control"/>
                <br/><br/>
                <input type="text" placeholder="email" className="form-control"/>
                <br/><br/>
                <input type="text" placeholder="password" className="form-control"/>
                <br/><br/>               
            <button className="btn btn-primary">Register</button>
            </div>
            </div>
    )
}


export default Register