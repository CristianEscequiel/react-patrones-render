import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { 
        setOpenModal,
        addtodo,
     } = React.useContext(TodoContext);

     const [ newTodoValue , setNewTodoValue] = React.useState('');

     const onSubmit = (event) => {
            event.preventDefault();
            addtodo(newTodoValue);
            setOpenModal(false);
     };
    const onCancel = () => {
            setOpenModal(false);
     };
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
     };
    return (

        <form 
            className="FormContainer"
        onSubmit={onSubmit}>
            <label className="FormTitle"
            > Esbribe tu nuevo TODO</label>
            <textarea
            value={newTodoValue}
            onChange={onChange}
            className="FormTextArea"
                placeholder="Cortar cebolla para el 
            almuerzo"/>
            <div className="ButtonContainer">
                <button
                    type="button"
                    className="TodoForm-button 
                    TodoForm-button-cancel"
                    onClick={onCancel}>Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button 
                    TodoForm-button-add">Añadir</button>
            </div>

        </form>
    )
}

export { TodoForm }