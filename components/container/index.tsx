import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const container = cva("container mx-auto px-4", {
  variants: {
    size: {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

export type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof container>;

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...rest }, ref) => (
    <div ref={ref} className={container({ size, className })} {...rest} />
  )
);

Container.displayName = "ContainerNew";

export default Container;
