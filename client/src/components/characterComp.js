import React from 'react'

function CharacterComp({hero}) {
// function CharacterComp(props) {
    if (!hero.length) {
        return <h3>No heroes loaded</h3>
    }
  return (
    <div>
        {hero.map(item => {
            <div key={item.id}>
                <h3>{item.name}</h3>
                <h3>{item.type}</h3>
                <h3>{item.description}</h3>
                <h3>{item.type}</h3>
            </div>
        })}
    </div>
    // <div>
    //             <h3>{hero.name}</h3>
    //             <h3>{hero.type}</h3>
    //             <h3>{hero.description}</h3>
    //             <h3>{hero.type}</h3>
    // </div>
  )
};

export default CharacterComp