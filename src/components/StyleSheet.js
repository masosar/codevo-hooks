import React from 'react'
import './myStyles.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    console.log(className)
    return (
        <div>
            <h1 className={className}>Stylesheets</h1>
        </div>
    )
}

     export default StyleSheet
