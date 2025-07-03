export function Button({ children, asChild = false, variant = 'default', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium transition';
  const sizes = { sm: 'px-3 py-1 text-sm', md: 'px-4 py-2', lg: 'px-6 py-3 text-lg' };
  const variants = {
    default: 'bg-teal-600 text-white hover:bg-teal-700',
    outline: 'border border-teal-600 text-teal-600 hover:bg-teal-50',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (asChild) return props.children;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
