import { VariantProps, cva } from "class-variance-authority";

const title = cva("title font-bold font-rachouan", {
  variants: {
    size: {
      base: "text-lg",
      lg: "text-2xl",
      xl: "text-4xl",
      "2xl": "text-6xl",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof title> {
  order?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title = ({ order = 1, size, className, ...rest }: TitleProps) => {
  const Heading = `h${order}` as const;
  return <Heading className={title({ size, className })} {...rest} />;
};
