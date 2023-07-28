import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUsers = () => {

    const data = useSelector((state) => {
        return state.users
    })
    return <>
        {
            data.map((item, index) => {
                return (
                    <>
                        <li key={index}>{item}</li>
                        <button>delete</button>
                    </>
                )
            })
        }
    </>

}

export default DisplayUsers