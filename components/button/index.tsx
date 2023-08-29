import clsx from "clsx";
import Spinner from "../spinner";

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C>;

export default function Button<C extends React.ElementType>({
  as,
  children,
  loading,
  className,
  ...rest
}: ButtonProps<C>) {
  const Component = as || "button";
  return (
    <Component
      className={clsx(
        `px-4 py-2 bg-denim-600 border border-denim-700 rounded-full text-sm text-denim-50 hover:bg-denim-700 hover:border-denim-900 transition-all`,
        className
      )}
      {...rest}
    >
      <div className="inline-flex flex-row gap items-center">
        {loading && <Spinner size={16} />}
        {children}
      </div>
    </Component>
  );
}
