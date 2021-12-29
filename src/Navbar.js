import React, {useState} from 'react'

const Navbar = () => {

   
    const [text,setText]=useState('')
    return (
        <nav>
                
                <input  onChange={(e)=> setText(e.target.value)} value={text}/>
        <h1>{text}</h1>


        </nav>
    )
}

export default Navbar
