import { useScrollPosition } from '@/hooks/useScrollPosition';

export default function ScrollProgress() {
  const { scrollPercentage } = useScrollPosition();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
