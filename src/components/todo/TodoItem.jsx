import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`group flex items-center gap-4 p-5 bg-white rounded-[16px] shadow-sm border border-transparent transition-all hover:shadow-md hover:border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300 ${todo.completed ? 'opacity-60 bg-transparent border-slate-200 border-dashed shadow-none' : ''}`}>
      <button
        className="bg-transparent border-none cursor-pointer flex items-center justify-center text-slate-200 transition-colors hover:text-blue-500 flex-shrink-0"
        onClick={() => onToggle(todo.id)}
        aria-label="Toggle completion"
      >
        {todo.completed ? (
          <CheckCircle2 size={24} className="text-emerald-500 stroke-[2.5]" />
        ) : (
          <Circle size={24} className="stroke-[2.5]" />
        )}
      </button>

      <div className="flex-1 flex flex-col gap-1 overflow-hidden">
        <span className={`text-[17px] font-semibold text-slate-900 whitespace-nowrap overflow-hidden text-overflow-ellipsis transition-all ${todo.completed ? 'line-through text-slate-400' : ''}`}>
          {todo.text}
        </span>
        {todo.category && (
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full self-start">
            {todo.category}
          </span>
        )}
      </div>

      <button
        className="bg-transparent border-none text-slate-200 w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all flex-shrink-0 group-hover:text-slate-400 hover:bg-rose-50 hover:text-rose-500"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}