function Badge({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-brand-cream px-3 py-1 text-sm font-semibold text-brand-navy ${className}`}>
      {children}
    </span>
  );
}

export default Badge;
