import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function TextFieldComponent({label, variant}) {
    return (
        <TextField id="filled" label={label} variant={variant} color="secondary" size="medium"
        style={{backgroundColor:'#333333', 
        color: "#ffffff", 
        borderRadius: '4px', 
        width: '300px',
        marginBottom:'16px'}}
        />
    )
}

