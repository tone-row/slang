import React, { ReactNode } from "react";
import { Type, Box } from "slang";
import Link from "next/link";
import styles from "./DocsLayout.module.scss";
import { useRouter } from "next/router";

const links = [
  { href: "/test-index", text: "Home" },
  { href: "/getting-started", text: "Getting Started" },
  { href: "/box", text: "Box" },
  { href: "/type", text: "Type" },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  return (
    <Box
      className={styles.DocsLayout}
      at={{ tablet: { template: "none / auto minmax(0, 1fr)" } }}
      root
      background="palette-white-0"
    >
      <Box
        as="aside"
        background="palette-white-3"
        display={false}
        at={{ tablet: { display: true } }}
      >
        <Box className={styles.Aside} py={10}>
          <Box px={4} pb={3}>
            <Link href="/" passHref>
              <Type as="a" weight="700" size={1}>
                Slang
              </Type>
            </Link>
          </Box>
          {links.map((link) => (
            <SidebarLink
              key={link.href}
              {...link}
              active={pathname === link.href}
            />
          ))}
        </Box>
      </Box>
      <Box px={6} py={6} contain={230} at={{ tablet: { py: 10 } }}>
        {children}
      </Box>
    </Box>
  );
}

function SidebarLink({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: boolean;
}) {
  return (
    <Link href={href} passHref>
      <Box
        as="a"
        className={styles.NavLink}
        py={3}
        pl={4}
        pr={8}
        {...(active ? { "aria-current": "page" } : {})}
        hover={{ background: "palette-white-2" }}
      >
        <Type as="span">{text}</Type>
      </Box>
    </Link>
  );
}
