import React from 'react';


const Rainbow = (WrappedComponent) => {

    const colors = ['violet','indigo','blue','green','yellow','orange','red']
    var color  = colors[Math.random(Math.random()*7)];
    var className = color + '-text';

    return (props) => {

        return (

            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow;