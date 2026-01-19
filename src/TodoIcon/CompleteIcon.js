import React from "react";
import { TodoIcon } from './';

function CompleteIcon({completed , onComplete }) {
    return <TodoIcon
    type='check'
    color={ completed ? '' : 'gray' }
    onClick={onComplete}/>
}

export { CompleteIcon };