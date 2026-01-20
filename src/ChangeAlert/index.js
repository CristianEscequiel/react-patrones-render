import React from "react";
import { withStorageListenner } from './withStorageListenner'

function ChangeAlert({show , toggleShow }) {
    if(show){
        return (
            <div>
                <p>Hubo Cambuios</p>
                <button
                onClick={()=>
                    toggleShow(false) 
                }
                >Volver a cargar la informacion</button>
            </div>
        )
    } else {
        return null
    }
    
}

const ChangeAlertWithStorageListener  = withStorageListenner(ChangeAlert)

export {  ChangeAlertWithStorageListener }