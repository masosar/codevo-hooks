import React, {useState} from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])
    const addItem = () => {
        /*  
        > Make a copy with the spread(...) operator. Append the new item (items) and pass it as argument
        > to the setter function (setItems)
        */
        setItems( [ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 100) + 1
        }] )
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                { 
                    /*
                    > Let's get each item and then render a list item. The key is going to be item.id and
                    > we render item.value. We are dealing with an array of objects 
                    */
                    items.map(item => <li key = {item.id }>{ item.value }</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterFour
