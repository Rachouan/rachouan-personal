import clsx from "clsx";

type TextInputProps<C extends React.ElementType> = {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  className?: string;
  children: React.ReactNode;
  onChange?: (value: string) => void;
} & React.ComponentPropsWithRef<C>;

export default function TextInput<C extends React.ElementType>({
  type,
  children,
  onChange,
  className,
  ...rest
}: TextInputProps<C>) {
  return (
    <input
      type={type}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      className={clsx(
        `px-3 py-2 bg-white border focus:outline-none focus:ring focus:ring-gray-100 dark:focus:ring-gray-600 outline-gray-200 border-gray-100 rounded text-sm text-gray-900 dark:text-white dark:bg-gray-900 dark:border-gray-500 focus:border-gray-200 dark:focus:border-gray-400 transition-all`,
        className
      )}
      {...rest}
    >
      {children}
    </input>
  );
}
