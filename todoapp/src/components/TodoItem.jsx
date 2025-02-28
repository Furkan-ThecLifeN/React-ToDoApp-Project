import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";
import {} from "react-icons/fa";

const TodoItem = ({ todo, toggle, deleteTodo }) => {
  return (
    <div
      className="w-full bg-blue-300 flex items-center px-2 py-4 gap-2 mb-1 border-b cursor-pointer select-none"
      onClick={() => toggle(todo.id)}
    >
      {todo.isComplete ? (
        <FaRegCheckCircle className="text-[#EAEAEA] size-5" />
      ) : (
        <FaRegCircle className="text-[#EAEAEA] size-5" />
      )}
      <p className={`flex-1 ${todo.isComplete ? "line-through" : ""}`}>
        {todo.text}
      </p>
      <BsTrash3Fill
        className="text-[#E52020] size-5 hover:scale-110 transition-all"
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
};

export default TodoItem;
