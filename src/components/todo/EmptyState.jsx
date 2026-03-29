import { CheckCircle2 } from 'lucide-react';

export default function EmptyState({ activeTab }) {
  const getMessage = () => {
    if (activeTab === 'completed') {
      return "You haven't completed any tasks yet.";
    }
    return "You're all caught up! Enjoy your day or add a new task.";
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-4">
        <CheckCircle2 size={48} className="text-slate-400 opacity-50" />
      </div>
      <h3 className="text-lg font-bold text-slate-900">No tasks found</h3>
      <p className="text-slate-500 max-w-[200px] mt-1">{getMessage()}</p>
    </div>
  );
}