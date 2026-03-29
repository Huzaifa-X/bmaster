import { Sparkles } from 'lucide-react';

export default function ProgressCard({ percentage, showComplete }) {
  return (
    <div className="bg-slate-100 p-4 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Daily Progress</span>
        <span className="text-sm font-bold text-blue-600">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {percentage === 100 && showComplete && (
        <p className="flex items-center gap-1 text-[10px] font-semibold text-slate-900 mt-3">
          <Sparkles size={14} className="text-amber-400" /> All caught up!
        </p>
      )}
    </div>
  );
}