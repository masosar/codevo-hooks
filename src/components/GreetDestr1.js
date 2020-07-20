import React from 'react'


//DESTRUCTURING PROPS IN THE PARAMETERS OF THE FUNCTION
const GreetDestr1 = ({name, heroName}) => {
    //console.log(props)
    return (
        <div>
            <h1>Hello {name}</h1>
            I know you are {heroName}
        </div>
    )
}

export default GreetDestr1