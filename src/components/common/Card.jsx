function Card({ children, className = '' }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft ${className}`}>{children}</div>;
}

export default Card;
