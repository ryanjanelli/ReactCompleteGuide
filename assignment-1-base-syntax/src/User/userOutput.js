import React from 'react';

const userOutput = (props) => {
    const outputStyle = {
        width: '60%',
        margin: '16px auto',
        border: '1px solid #eee',
        boxShadow: '0 2px 3px #ccc',
        padding: '16px',
        textAlign: 'center',
        }
    return (
        <div style={outputStyle}>
            <p>Username: {props.username}</p>
            <p>Second Paragraph</p>
        </div>
    )
}

export default userOutput;