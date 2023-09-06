import { cva, VariantProps } from "class-variance-authority";
import Spinner from "../spinner";

const button = cva("button transition-all rounded-full", {
  variants: {
    variant: {
      primary: "bg-denim-600 border border-denim-700 text-denim-50 hover:bg-denim-700 hover:border-denim-900",
      secondary: "border border-gray-100 hover:border-gray-200 hover:bg-gray-50"
    },
    size: {
      sm: "px-2 py-1 text-xs",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-lg",
    },
    loading: {
      true: "cursor-not-allowed",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps<C extends React.ElementType> = {
  as?: C;
  className?: string;
  loading?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<C> & VariantProps<typeof button>;

export default function Button<C extends React.ElementType>({
  as,
  children,
  loading,
  className,
  size,
  variant,
  ...rest
}: ButtonProps<C>) {
  const Component = as || "button";
  return (
    <Component
      className={button({ size, variant, loading, className })}
      {...rest}
    >
      <div className="inline-flex flex-row gap items-center">
        {loading && <Spinner size={16} />}
        {children}
      </div>
    </Component>
  );
}
