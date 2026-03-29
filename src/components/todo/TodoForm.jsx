import { Plus } from 'lucide-react';

export default function TodoForm({ input, setInput, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form className="flex gap-4 mb-10 sticky top-0 z-10 bg-slate-100 py-4" onSubmit={handleSubmit}>
      <div className="flex-1 relative flex items-center">
        <Plus size={20} className="absolute left-4 text-slate-400" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done? Press Enter to add."
          className="w-full pl-12 pr-4 py-4 border border-white rounded-[16px] text-base font-medium bg-white shadow-sm transition-all outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 placeholder:text-slate-400 placeholder:font-normal"
        />
      </div>
      <button 
        type="submit" 
        className="bg-slate-900 text-white px-6 rounded-xl font-semibold text-[15px] transition-all active:translate-y-px disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed shadow-sm" 
        disabled={!input.trim()}
      >
        Add Task
      </button>
    </form>
  );
}