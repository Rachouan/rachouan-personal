import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const section = cva("section", {
  variants: {
    size: {
      sm: "py-6 sm:py-12",
      md: "py-12 md:py-24",
      lg: "py-24 lg:py-32",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type SectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof section>;

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, size, ...rest }, ref) => (
    <section ref={ref} className={section({ size, className })} {...rest} />
  )
);

Section.displayName = "Section";

export default Section;
