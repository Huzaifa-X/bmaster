export default function ListFooter({ hasCompleted, onClearCompleted }) {
  if (!hasCompleted) return null;

  return (
    <div className="mt-8 pt-4 border-t border-slate-200 flex justify-center">
      <button 
        className="bg-transparent text-slate-400 font-semibold text-sm border-none cursor-pointer hover:text-rose-500 transition-colors" 
        onClick={onClearCompleted}
      >
        Clear completed tasks
      </button>
    </div>
  );
}