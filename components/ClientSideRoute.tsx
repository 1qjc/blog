"use client";

import Link from "next/link";

export const ClientSideRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};
