import React, { Component, useState,useEffect } from 'react'

class FetchData extends React.Component{

constructor(props){
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
    }
}



    async componentDidMount(){
         const url = "get_users";
        await fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
        console.log(this.state);

    }

    render(){

    //    async function getList() {
    //     const url = "get_users";
    //     await fetch(url)
    //     .then(res => res.json())
    //     .then(json => {
    //         this.setState({
    //             isLoaded: true,
    //             items: json,
    //         })
    //     })
    //     console.log(this.state);
    //    }

       async function deleteUser(id) {
            alert(id);
            await fetch(`users/${id}`,{
                method:'DELETE'
            }).then((result)=>{
                result.json().then((resp)=>{
                    console.warn(resp)
                    //componentDidMount()
//                    getList()
                })
            })
        }

        var {isLoaded, items} = this.state;

        if (!isLoaded){
            return <div>Loading....</div>;
        }
        else{
        return (
            <div>
                <div>
                    <h2>User Data</h2>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                    {
                        items.map((item)=>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                            
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
        }
    }
}


export default FetchData