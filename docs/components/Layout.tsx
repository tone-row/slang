import React, { ReactNode } from "react";
import { Global, Box, VerticalGrid } from "slang";
import Link from "next/link";
import { config } from "../styles/slang.config";
import styles from "./Layout.module.scss";

const links = [
  { href: "/", text: "Getting Started" },
  { href: "/box", text: "Box" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Global config={config} />
      <div className={styles.Layout}>
        <Box as="aside">
          <VerticalGrid gap={0}>
            {links.map((link) => (
              <SidebarLink key={link.href} {...link} />
            ))}
          </VerticalGrid>
        </Box>
        <Box p={1}>{children}</Box>
      </div>
    </>
  );
}

function SidebarLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} passHref>
      <Box as="a" py={1} px={2} pr={3}>
        {text}
      </Box>
    </Link>
  );
}
