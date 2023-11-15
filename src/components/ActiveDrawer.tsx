import { useState } from "react";
import { Drawers } from "./Drawer";

const ActiveDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openDrawer = (): void => setOpen(true);
  const closeDrawer = (): void => setOpen(false);
  return (
    <>
      {open && <Drawers open={open} closeDrawer={closeDrawer} />}
      <div className="absolute top-5 left-2">
        <span onClick={() => openDrawer()}>
          <svg
            className="h-10 w-10 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export { ActiveDrawer };
