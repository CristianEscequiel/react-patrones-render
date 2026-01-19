import { ReactComponent as CheckSVG } from './complete.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG 
    className='Icon-svg' color={color}/>,
    "delete": (color) => <DeleteSVG 
    className='Icon-svg' color={color}/>
}

function TodoIcon({ type , color , onClick}) {
    return (
        <span
        className={`Icon-container Icon-container-${type}`} 
        onClick={onClick}
        >
        {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon }