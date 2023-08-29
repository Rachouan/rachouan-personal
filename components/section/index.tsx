export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ className = "", ...rest }: SectionProps) {
  return <section className={`py-12 md:py-24 ${className}`} {...rest} />;
}
