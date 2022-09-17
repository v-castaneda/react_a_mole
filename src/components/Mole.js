import React, {useEffect} from 'react'
import moleImg from '../img/mole.png'

function Mole(props) {
    useEffect(() => {
        let randSec = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
           props.toggle(false)
        }, randSec)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img 
            style={{'width': '30vw'}}
            src={moleImg} 
            onClick={props.handleClick}
            />
        </div>
    )
}

export default Mole