import react from 'react'

const Login = () => {
    return(
        <div>
            <h3>Login</h3>
            <div className="col-sm-6 offset-sm-3">
            <input type="text" placeholder="email" className="form-control"/>
                <br/><br/>
            <input type="text" placeholder="password" className="form-control"/>
                <br/><br/>
            <button className="btn btn-primary">Login</button>
            </div>
            </div>
    )
}


export default Login