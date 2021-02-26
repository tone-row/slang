import React, { ReactNode } from "react";
import {
  Global,
  Box,
  VerticalGrid,
  Layout,
  Type,
  Container,
} from "@tone-row/slang";
import Link from "next/link";
import { config } from "../styles/slang.config";
import styles from "./DocsLayout.module.scss";
import { useRouter } from "next/router";

const links = [
  { href: "/", text: "Getting Started" },
  { href: "/box", text: "Box" },
  { href: "/type", text: "Type" },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();
  return (
    <>
      <Global config={config} />
      <Layout className={styles.DocsLayout}>
        <Box as="aside" py={3}>
          <VerticalGrid gap={0}>
            {links.map((link) => (
              <SidebarLink
                key={link.href}
                {...link}
                active={pathname === link.href}
              />
            ))}
          </VerticalGrid>
        </Box>
        <Box px={2} py={3}>
          <Container>{children}</Container>
        </Box>
      </Layout>
    </>
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
        py={1}
        px={3}
        pr={5}
        className={styles.NavLink}
        {...(active ? { "aria-current": "page" } : {})}
      >
        <Type>{text}</Type>
      </Box>
    </Link>
  );
}
