import React from 'react'

const Article = (props) => {
    return <div className = "article">
        <p>
            <b>{props.text}</b>
        </p>
    </div>
}

export default Article