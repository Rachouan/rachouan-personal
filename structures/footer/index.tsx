import NewsLetter from "@/structures/newsletter";
import clsx from "clsx";
import Anchor from "../../components/anchor";
import Container from "../../components/container";
import { IconHeart, IconNextJs } from "../../components/icons";
import Logo from "../../components/logo";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={clsx(
        "bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-600 shadow-inner overflow-hidden transition",
        className
      )}
    >
      <Container className="relative">
        <div className="absolute left-0 -top-10 h-4 w-full bg-gradient-to-r from-denim-700 via-pink-500 to-yellow-500 blur-xl"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-8 md:py-16">
          <FooterStack className="col-span-2">
            <Logo className="fill-denim-600" />
            <h3 className="text-gray-700 dark:text-white text-lg">
              Wanna work together?
              <br />
              Let’s hop on a call.
            </h3>
          </FooterStack>

          <div className="col-span-3 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <FooterStack title="Contact me">
              <ul className="flex gap-4">
                <li>
                  <Anchor href="mailto:info@rachouan.com">
                    info@rachouan.com
                  </Anchor>
                </li>
              </ul>
            </FooterStack>
            <FooterStack
              title="Join my monthly newsletter"
              description="Get the latest information about all front end related topics."
            >
              <div className="flex-grow">
                <NewsLetter />
              </div>
            </FooterStack>
          </div>
        </div>
        <div className="py-4 border-t dark:border-gray-600 text-gray-600 dark:text-white/80 text-sm text-center justify-center flex items-center gap-1">
          © {year} Rachouan - Built with
          <Anchor
            href={"https://nextjs.org"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <IconNextJs className="w-4 h-4" />
            Next.js
          </Anchor>
        </div>
      </Container>
    </footer>
  );
}

interface FooterStackProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

function FooterStack({
  title,
  description,
  children,
  className,
}: FooterStackProps) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      {title && <h6 className="font-semibold text-lg">{title}</h6>}
      {description && (
        <p className="text-md text-gray-600 dark:text-white/90">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
