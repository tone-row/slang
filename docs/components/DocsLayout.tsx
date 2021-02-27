import React, { ReactNode } from "react";
import { Box, VerticalGrid, Layout, Type, Container } from "@tone-row/slang";
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
    <Layout className={styles.DocsLayout}>
      <Box as="aside" pt={6}>
        <VerticalGrid gap={0}>
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
        </VerticalGrid>
      </Box>
      <Box px={4} py={6}>
        <Container>{children}</Container>
      </Box>
    </Layout>
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
