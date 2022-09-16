import React, { useEffect } from 'react'
import hillImg from '../img/molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSec = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSec)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={hillImg}/>
        </div>
    )
}

export default EmptySlot