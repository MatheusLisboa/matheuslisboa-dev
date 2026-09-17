export default function SectionHeader({ index, label }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
        {index}. {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
    </div>
  );
}
