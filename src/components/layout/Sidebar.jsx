import { CheckCircle2, ListTodo, Calendar } from 'lucide-react';
import ProgressCard from '../ui/ProgressCard';

export default function Sidebar({ activeTab, setActiveTab, totalCount, activeCount, progressPercentage }) {
  return (
    <aside className="w-[280px] bg-white border-r border-slate-200 flex flex-col flex-shrink-0 h-screen">
      <div className="h-[72px] flex items-center px-6 gap-3 border-b border-slate-50">
        <div className="bg-blue-600 rounded-[10px] w-9 h-9 flex items-center justify-center">
          <CheckCircle2 size={24} color="white" />
        </div>
        <h2 className="text-xl font-extrabold tracking-tight">TaskMaster</h2>
      </div>

      <nav className="p-6 pt-4 flex flex-col gap-2 flex-1">
        <button
          className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-[15px] transition-all ${activeTab === 'all' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}
          onClick={() => setActiveTab('all')}
        >
          <ListTodo size={18} />
          <span className="flex-1 text-left">All Tasks</span>
          <span className="bg-slate-200 text-slate-500 text-xs font-bold px-2 py-0.5 rounded-full">{totalCount}</span>
        </button>
        <button
          className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-[15px] transition-all ${activeTab === 'active' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}
          onClick={() => setActiveTab('active')}
        >
          <Calendar size={18} />
          <span className="flex-1 text-left">Active</span>
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{activeCount}</span>
        </button>
        <button
          className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-[15px] transition-all ${activeTab === 'completed' ? 'bg-blue-50 text-blue-600' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-600'}`}
          onClick={() => setActiveTab('completed')}
        >
          <CheckCircle2 size={18} />
          <span className="flex-1 text-left">Completed</span>
        </button>
      </nav>

      <div className="p-6 border-t border-slate-50">
        <ProgressCard percentage={progressPercentage} showComplete={totalCount > 0} />
      </div>
    </aside>
  );
}