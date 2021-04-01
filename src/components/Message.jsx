import React from 'react'
import {Chip,Avatar} from '@material-ui/core'

function Message(props) {
    const userAvatar=props.user.split('')
    return (
        <div>
        <Chip avatar={<Avatar>{userAvatar[0]}</Avatar>} variant="outlined" color='primary' label={props.text} />

            
        </div>
    )
}

export default Message
