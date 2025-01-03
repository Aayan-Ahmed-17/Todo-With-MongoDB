import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import React, {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

// pages/TodoPage.jsx
const TodoPage = () => {
  const [todos, setTodos] = useState([]); //All todo Array
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("add"); // 'view', 'add', 'edit'
  const [currentTodo, setCurrentTodo] = useState(null); //Selected to array

  //* Add Todo
  const handleAddTodo = async (todoText) => {
    setIsLoading(true);

      //* add todo to the local variable
      const newTodo = {
        title: todoText,
        user: auth.currentUser.uid,
        docid: docRef.id,
      };

      setTodos((prev) => [...prev, newTodo]);
      setMode("view");
  };

  //* Edit Todo
  const handleUpdateTodo = async (todoText) => {
  };

  //* Delete todo local & firebase on click
  const handleDeleteTodo = async (todoId) => {
    setIsLoading(true);
  };

  //* edit button functionality
  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setMode("edit");
  };
  
  //* cancel button functionality
  const handleCancel = () => {
    setMode("view");
    setCurrentTodo(null);
    setError(null);
  };

  return (
    <>
      {mode === "view" ? (
        <div className="w-3/4 mx-auto grid">
          <TodoList
            todos={todos}
            onEdit={handleEdit}
            onDelete={handleDeleteTodo}
          />
          <button
            onClick={() => setMode("add")}
            className="bg-[#6C63FF] text-[#F7F7F7] rounded-sm justify-self-end py-2 px-4 text-2xl box-content mt-4 max-w-6"
          >
            +
          </button>
        </div>
      ) : (
        <TodoForm
          onSubmit={mode === "add" ? handleAddTodo : handleUpdateTodo}
          initialValue={currentTodo?.title || ""}
          mode={mode}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default TodoPage;
