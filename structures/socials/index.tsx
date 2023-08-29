import Anchor from "@/components/anchor";
import {
  IconBrandDribbbleFilled,
  IconBrandGithub,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

export function Socials() {
  const socials = [
    {
      name: "github",
      href: "https://github.com/rachouan",
      icon: <IconBrandGithub />,
    },
    {
      name: "dribbble",
      href: "https://dribbble.com/rachouan",
      icon: <IconBrandDribbbleFilled />,
    },
    {
      name: "twitter",
      href: "https://twitter.com/rachouanrejeb",
      icon: <IconBrandTwitterFilled />,
    },
  ];

  return (
    <div className="flex gap-1">
      {socials.map(({ href, icon }, i) => (
        <Anchor
          key={`social-${i}`}
          href={href}
          target="_blank"
          className="flex justify-center items-center p-1 w-10 h-10 rounded-full bg-gray-50/10 hover:bg-gray-50 dark:bg-gray-900/10 dark:hover:bg-gray-900/20 transition"
        >
          {icon}
        </Anchor>
      ))}
    </div>
  );
}
