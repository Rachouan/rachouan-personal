import clsx from "clsx";
import { forwardRef } from "react";

const Container = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={clsx("container mx-auto px-4", className)}
    {...rest}
  />
));

Container.displayName = "ContainerNew";

export default Container;
