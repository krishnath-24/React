import React from "react";



const Ninjas = ({ninjas,deleteNinja}) =>{

    const ninjasList = ninjas.map(ninja => {

        return ninja.age !==27 ? (
            <div className="ninja" key={ninja.id}>
                <h4>Ninja</h4>
                <div>Name : {ninja.name} </div>
                <div>Age : {ninja.age} </div>
                <div>Belt : {ninja.belt} </div>
                <button onClick = {() => deleteNinja(ninja.id)}>Delete Ninja</button>
            </div>
        ) : null;

    }); 

    return (
        <div className = "ninjas-list">
            {ninjasList}
        </div>
    )
}


export default Ninjas;