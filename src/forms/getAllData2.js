import React,{useEffect, useState} from 'react'

function Dashboard() {
    const [users,setUser]=useState([])

    useEffect(()=>{
        getList()
    },[])

    console.warn(users)


    async function getList(){
        fetch("get_users").then((result)=>{
            result.json().then((resp)=>{
                setUser(resp)
            })
        })
    }

    async function deleteUser(id){
            await fetch(`users/${id}`,{
                method:'DELETE'
            }).then((result)=>{
                result.json().then((resp)=>{
                    console.warn(resp)
                    getList()
                })
            })
    }

    return(
        <div>
        <div>
            <h2>Dashboard</h2>
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
                users.map((item)=>
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

export default Dashboard