export default function PageHeader({ activeTab, activeCount }) {
  const getTitle = () => {
    if (activeTab === 'all') return 'Good Morning';
    if (activeTab === 'active') return "Let's Get Done";
    return 'Completed Tasks';
  };

  const getSubtitle = () => {
    if (activeTab === 'completed') return "You've crushed these tasks.";
    return `You have ${activeCount} tasks to complete today.`;
  };

  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  return (
    <header className="flex justify-between items-end mb-10">
      <div>
        <h1 className="text-[36px] font-extrabold tracking-tight leading-tight mb-1 text-slate-900">{getTitle()}</h1>
        <p className="text-slate-500 text-lg">{getSubtitle()}</p>
      </div>

      <div className="hidden sm:block">
        <span className="bg-white border border-slate-200 px-4 py-2 rounded-[20px] text-sm font-semibold text-slate-500 shadow-sm">{formattedDate}</span>
      </div>
    </header>
  );
}