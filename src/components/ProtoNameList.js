import React from 'react'

function ProtoNameList() {
    const names = ['Huey','Duey','Louie','Cool and the Gang']
    //const NameList = names.map(name => <h2>{name}</h2>)
    const NameList = names.map((name, index) => <h2 key={index}>{index}-{name}</h2>)
    return (
        <div>
            {/* {
                names.map(name => <h2>{name}</h2>)
            } */}
            {NameList}
        </div>
    )
}

export default ProtoNameList

