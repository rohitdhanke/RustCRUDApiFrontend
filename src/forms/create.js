import react, { Component } from 'react'

class CreateEmployee extends Component {


    async createData(){

            try {                
                    
                    let result = await fetch("users/post",{
                        "first_name": "Mayur",
                        "last_name": "Pande",
                        "email": "s@gmail.com"
                    },{
                    method:"POST",
                    //mode:'no-cors',
                    headers:{
                        'Access-Control-Allow-Origin': "*",
                        'Access-Control-Request-Method': "POST",
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                        
                    },
                    // body: JSON.stringify({
                    //     "first_name": "Mayur",
                    //     "last_name": "Pande",
                    //     "email": "s@gmail.com"
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
        <h3>Create</h3>
        <div className="col-sm-6 offset-sm-3">
        <input type="text" placeholder="first-name" className="form-control"/>
            <br/><br/>
        <input type="text" placeholder="last-name" className="form-control"/>
            <br/><br/>
            <input type="text" placeholder="email" className="form-control"/>
            <br/><br/>
            {/* <input type="text" placeholder="age" className="form-control"/>
            <br/><br/> */}
        <button className="btn btn-primary" onClick={ () => this.createData()}>Create</button>
        </div>
        </div>
    );
    }
}


export default CreateEmployee