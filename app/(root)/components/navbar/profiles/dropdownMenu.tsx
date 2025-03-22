import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavDropdownMenu = () => {
  const { data: session } = useSession();

  if (!session || !session.user) return null;
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          src={session.user.image ?? ""}
          size="sm"
          radius="sm"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="faded">
        <DropdownItem key="profile" className="h-14 gap-2 pr-6">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{session.user.email}</p>
        </DropdownItem>
        <DropdownSection showDivider title="Your Account">
          <DropdownItem
            key="settings"
            startContent={
              <Icon
                icon="solar:settings-bold-duotone"
                width={20}
                height={20}
                color="#cccccc"
              />
            }
          >
            My Settings
          </DropdownItem>
          <DropdownItem
            key="bookmarks"
            startContent={
              <Icon
                icon="solar:bookmark-bold-duotone"
                width={20}
                height={20}
                color="#cccccc"
              />
            }
          >
            Bookmarks
          </DropdownItem>
          <DropdownItem
            key="activity-center"
            startContent={
              <Icon
                icon="solar:clock-circle-bold-duotone"
                width={20}
                height={20}
                color="#cccccc"
              />
            }
          >
            Activity
          </DropdownItem>
          <DropdownItem
            key="logout"
            className="text-danger"
            classNames={{
              title: "font-semibold",
            }}
            color="danger"
            startContent={
              <Icon
                icon="solar:logout-2-bold-duotone"
                width={20}
                height={20}
                color="#f31260"
              />
            }
            onPress={() => signOut()}
          >
            Log Out
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Astofo Center">
          <DropdownItem
            key="request-anime"
            startContent={
              <Icon
                icon="solar:document-add-bold-duotone"
                width={20}
                height={20}
                color="#cccccc"
              />
            }
          >
            Request Anime
          </DropdownItem>
          <DropdownItem
            key="join-community"
            startContent={
              <Icon
                icon="solar:users-group-two-rounded-bold-duotone"
                width={20}
                height={20}
                color="#cccccc"
              />
            }
          >
            Join Community
          </DropdownItem>
          <DropdownItem
            key="help-feedback"
            startContent={
              <Icon
                icon="solar:help-bold-duotone"
                width={20}
                height={20}
                color="#cccccc"
              />
            }
          >
            Help & Feedback
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavDropdownMenu;
