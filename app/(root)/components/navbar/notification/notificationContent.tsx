import { Button, Divider, PopoverContent } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const notificationContent = () => {
  return (
    <PopoverContent className="max-h-[40vh] w-[32vh]">
      <div
        id="header"
        className="w-full flex justify-between items-center pl-2"
      >
        <h1>No Notification</h1>
        <Button color="primary" variant="flat" className="font-semibold">
          Clear All
        </Button>
      </div>
      <Divider className="mt-1" />
      <div
        id="content"
        className="flex flex-col justify-center items-center gap-2 py-4"
      >
        <Icon
          icon={"solar:inbox-bold-duotone"}
          color="#999999"
          width={32}
          height={32}
        />
        <p className="text-neutral-400 text-sm text-center">
          Nothing here... for now
        </p>
      </div>
    </PopoverContent>
  );
};

export default notificationContent;
