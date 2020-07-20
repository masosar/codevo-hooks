import React, {useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    /*
    > 2. Create a new State variable for the mainInput element     */
    const [name, setName] = useState('')
/* 
    > 1. useEffect is a function so it has to be called. This hook passes a 
    > parameter: a function which is executed after every render of the component.
    > So the argumet will be an arrow function which updates the document title.
 */
    useEffect( ()=> {
        console.log('useEffect - Updating  document title')
        document.title = `You clicked ${count} times.`
    }, [count] )
    /*
    > 3. Input element    */
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=> setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
