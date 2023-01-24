import clsx from "clsx";

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C>;

export default function Button<C extends React.ElementType>({
  as,
  children,
  className,
  ...rest
}: ButtonProps<C>) {
  const Component = as || "button";
  return (
    <Component
      className={clsx(
        `px-4 py-2 bg-denim-700 rounded text-sm text-denim-50 hover:bg-denim-600`,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
