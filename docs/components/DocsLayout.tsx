import React, { ReactNode } from "react";
import { Type, Box } from "slang";
import Link from "next/link";
import styles from "./DocsLayout.module.scss";
import { useRouter } from "next/router";

const links = [
  { href: "/", text: "Getting Started" },
  { href: "/box", text: "Box" },
  { href: "/type", text: "Type" },
];

const boxSizes = {
  py: 2,
  px: 3,
  pr: 4,
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  return (
    <Box className={styles.DocsLayout}>
      <Box as="aside" pt={6}>
        <Box gap={0} place="start stretch" flow="column">
          <Box {...boxSizes} pb={boxSizes.py} pt={0}>
            <Type as="strong" size={1}>
              Slang
            </Type>
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
      <Box px={4} py={6}>
        <Box className={styles.tempContainer}>{children}</Box>
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
        {...boxSizes}
        className={styles.NavLink}
        {...(active ? { "aria-current": "page" } : {})}
      >
        <Type as="span">{text}</Type>
      </Box>
    </Link>
  );
}
