import clsx from "clsx";

type LinkProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C>;

export default function Anchor<C extends React.ElementType>({
  as,
  children,
  className,
  ...rest
}: LinkProps<C>) {
  const Component = as || "a";
  return (
    <Component
      className={clsx(`rounded text-gray-700 hover:text-gray-900`, className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
