import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [role,setrole]=useState("");
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault();
        const userobj={name,email,phone,role};
        dispatch(FunctionAddUser(userobj));
        navigate('/user')
    }
    return ( 
        <div>
            <form onSubmit={handlesubmit}>
            <div className="card">
                <div className="card-header" style={{textAlign:"left"}}>
                    <h2>Add User</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1g-12">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-1g-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                            </div>
                    </div>
                    <div className="col-1g-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input className="form-control" value={phone} onChange={(e)=>{setphone(e.target.value)}}></input>
                            </div>
                    </div>
                    <div className="col-1g-12">
                            <div className="form-group">
                                <label>Role</label>
                                <input className="form-control" value={role} onChange={(e)=>{setrole(e.target.value)}}></input>
                            </div>
                        </div>
                </div>
                <div className="card-footer" style={{textAlign:"left"}}>
                    <button className="btn btn-primary" type="button">Submit</button>
                    <Link className="btn btn-danger" to={'/user'}>Back</Link>
                </div>
            </div>
            </form>
        </div>
     );
}
 
export default Adduser;