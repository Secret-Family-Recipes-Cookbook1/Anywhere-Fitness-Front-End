import React from 'react'

function ClassForm({ details }) {
    if (!details) {
        return <h3>Working fetching your employee&apos;s details...</h3>
    }


    return(

        <div className='class container'>

            <h2>{ details.title }</h2>
            <p>{ details.email }</p>
            <p> { details.length } </p>
            <p> { details.intensity } </p>
            <p> { details.type } </p>
            <p> { details.location } </p>
            <p> { details.maxsize } </p>
            


        </div> 

    )


}   

export default ClassForm