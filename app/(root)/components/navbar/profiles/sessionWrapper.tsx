"use client"; // Client Component agar bisa pakai useSession

import { Button, Link, NavbarItem } from "@heroui/react";
import { signIn, useSession } from "next-auth/react";
import DropdownMenuProfile from "./dropdownMenu";
import NotificationWrapper from "../notification/notificationWrapper";

export default function SessionWrapper() {
  const { data: session, status } = useSession();

  if (status === "loading") return null; // Jangan tampilkan apapun saat loading

  return (
    <>
      {session && session.user ? (
        <>
          <NavbarItem>
            <NotificationWrapper />
          </NavbarItem>
          <NavbarItem>
            <DropdownMenuProfile />
          </NavbarItem>
        </>
      ) : (
        <>
          <NavbarItem className="hidden lg:flex">
            <Link className="font-semibold" href="#">
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              color="primary"
              variant="solid"
              onPress={() => signIn("github")}
            >
              Sign Up
            </Button>
          </NavbarItem>
        </>
      )}
    </>
  );
}
