import { toast } from "react-toastify";
import { DELETE_USER, FAIL_REQUEST , GET_USER_LIST, MAKE_REQUEST , ADD_USER, UPDATE_USER, GET_USER_OBJ } from "./Actiontype";
import axios from "axios"
export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList=(data)=>{
    return{
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
export const adduser=()=>{
    return{
        type:ADD_USER
    }
}
export const UpdateUser=()=>{
    return{
        type:UPDATE_USER
    }
}
export const getUserObjr=()=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}

export const FetchUserList=()=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.get("url").then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const RemoveUser=(code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.delete("url").then(res=>{
            dispatch(deleteUser);
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const FunctionAddUser=(data)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.post("url",data).then(res=>{
            dispatch(adduser());
            toast.success("user Added Successfully")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const FunctionUpdateUser=(data,code)=>{
    return(dispatch)=>{
        dispatch(makeRequest());
        axios.put("url"+code,data).then(res=>{
            dispatch(UpdateUser());
            toast.success("user Updated Successfully")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}