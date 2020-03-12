import React from 'react';

const validation = props => {
    
    let lengthMessage = 'Text too short';

    if (props.textLength > 5) {
        
        lengthMessage = 'Text long enough'
    }

    return (
        <div>
            <p>{lengthMessage}</p>
        </div>
    )
}

export default validation