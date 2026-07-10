// Flat animated equalizer strip — bars loop via .js-eq in StoryScroller.
export default function Waveform({
  bars = 24,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <div aria-hidden className={`flex items-end gap-1 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="js-eq w-1.5 flex-1 bg-current"
          style={{ height: `${25 + 70 * Math.abs(Math.sin(i * 1.7 + 1))}%` }}
        />
      ))}
    </div>
  );
}
