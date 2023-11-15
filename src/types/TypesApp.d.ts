declare module "@TypesApp" {
  type PropsTypesDrawer = {
    open: boolean;
    closeDrawer: () => void;
  };

  type UiCreators = { name: string; rol: string; img: string };

  type UiAlert = {
    alertDev: boolean;
    setAlertDev: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
