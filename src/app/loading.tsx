export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bgDark">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="w-12 h-12 rounded-xl border-2 border-accent/20 border-t-accent animate-spin" />
          <span className="absolute font-mono text-xs font-black text-accent">MS</span>
        </div>
        <p className="text-xs font-mono tracking-widest text-secondaryText uppercase">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
