import React from "react";

function withStorageListenner(WrappedComponent){
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange , setStorageChange] = React.useState(false);
        window.addEventListener('storage',(change) => {
        if(change.key === 'TODOS_V1'){
            console.log('hUBO CAMBIOS EN todo_v1')
            setStorageChange(true)
        }
        });

        const toggleShow = () => {
            setStorageChange(false);
            props.sincronize()
        }


        return (
        <WrappedComponent 
            show={storageChange}
            toggleShow={toggleShow}/>)
    }
}

export { withStorageListenner }