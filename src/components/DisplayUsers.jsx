import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, removeUser } from "../store/slices/userSlice";

const DisplayUsers = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return state.users
    })

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }
    return <>
        {
            data.map((item, index) => {
                return (
                    <>
                        <li key={index}>{item}</li>
                        <button onClick={() => deleteUser(index)}>delete</button>
                    </>
                )
            })
        }
    </>

}

export default DisplayUsers