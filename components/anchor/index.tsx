import { cva, VariantProps } from "class-variance-authority";

const anchor = cva("text-gray-900 dark:text-white", {
  variants: {
    color: {
      primary: "text-blue-500",
    },
    underline: {
      true: "underline",
      false: "no-underline",
    },
  },
});

type LinkProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  undeline?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C> &
  VariantProps<typeof anchor>;

export default function Anchor<C extends React.ElementType>({
  as,
  underline,
  color,
  className,
  ...rest
}: LinkProps<C>) {
  const Component = as || "a";

  return (
    <Component className={anchor({ underline, color, className })} {...rest} />
  );
}
