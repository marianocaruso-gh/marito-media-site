export function Card({ children, className = '' }) {
  return <div className={`rounded-2xl shadow p-4 bg-white ${className}`}>{children}</div>;
}
export function CardHeader({ children, className = '' }) {
  return <div className={`mb-2 ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = '' }) {
  return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;
}
export function CardContent({ children, className = '' }) {
  return <div className={`${className}`}>{children}</div>;
}
