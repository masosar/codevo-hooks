import React, {useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=> setDisplay(!display)}>Toggle display</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer

/* 
> Variable name is display. Setter is setDisplay and the initial value is true.
> The button will toggle the value  of display by passing (not)display to setDisplay function.
> If this display variable is setted to true, we render the HookMoouse component (display && HookMouse)
a */