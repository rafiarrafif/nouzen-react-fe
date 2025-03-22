import { Button, Popover, PopoverTrigger } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import NotificationContent from "./notificationContent";

const notifWrapper = () => {
  return (
    <div>
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Button variant="light" isIconOnly>
            <Icon icon={"solar:bell-bold-duotone"} width={23} height={23} />
          </Button>
        </PopoverTrigger>
        <NotificationContent />
      </Popover>
    </div>
  );
};

export default notifWrapper;
