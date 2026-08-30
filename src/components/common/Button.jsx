function Button({ children, variant = 'primary', className = '', ...props }) {
  const variants = {
    primary: 'bg-brand-teal text-brand-navy hover:bg-cyan-300',
    secondary: 'bg-brand-navy text-white hover:bg-indigo-900',
    ghost: 'bg-transparent border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white',
  };

  return (
    <button
      className={`rounded-full px-6 py-3 font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
