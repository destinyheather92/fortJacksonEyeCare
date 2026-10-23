interface PlaceholderProps {
  /** What's missing, e.g. "Office address". */
  children: string;
  className?: string;
}

/**
 * A clearly labeled stand-in for practice information that hasn't been
 * provided yet. Never replace these with guessed values — update
 * src/config/practice.ts instead.
 */
export function Placeholder({ children, className }: PlaceholderProps) {
  return (
    <span className={['todo-value', className].filter(Boolean).join(' ')}>
      <span className="todo-value__tag">To be added</span>
      {children}
    </span>
  );
}
