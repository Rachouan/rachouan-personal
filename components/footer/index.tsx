import clsx from "clsx";
import Image from "next/image";
import Anchor from "../anchor";
import Container from "../container";
import { IconNextJs } from "../icons";
import Logo from "../logo";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 md:py-16">
          <FooterStack>
            <Logo className="fill-denim-600" />
            <h3 className="text-gray-700 dark:text-white text-lg">
              Wanna work together?
              <br />
              Let’s hop on a call.
            </h3>
          </FooterStack>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
              <div></div>
            </FooterStack>
          </div>
        </div>
        <div className="py-4 border-t dark:border-gray-600 text-gray-600 dark:text-white/60 text-sm text-center justify-center flex items-center gap-1">
          © {year} Rachouan - Built with ❤️ and
          <Anchor
            href={"https://nextjs.org"}
            target="_blank"
            className="flex items-center gap-1"
          >
            <IconNextJs />
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
}

function FooterStack({ title, description, children }: FooterStackProps) {
  return (
    <div className="flex flex-col gap-4">
      {title && <h6 className="font-medium">{title}</h6>}
      {description && (
        <p className="text-sm text-gray-700 dark:text-white/70">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
