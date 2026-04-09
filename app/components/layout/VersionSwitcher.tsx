import Link from 'next/link';

type VersionSwitcherProps = {
  current: 'v1' | 'v2';
};

export default function VersionSwitcher({
  current,
}: VersionSwitcherProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 p-1.5 shadow-lg shadow-slate-900/5 backdrop-blur">
      <Link
        href="/"
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          current === 'v1'
            ? 'bg-slate-900 text-white'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
      >
        Switch to v1
      </Link>
      <Link
        href="/v2"
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          current === 'v2'
            ? 'bg-slate-900 text-white'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
      >
        Switch to v2
      </Link>
    </div>
  );
}
