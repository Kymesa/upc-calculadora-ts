import { Typography } from "@material-tailwind/react";
import upcLogo from "../assets/LOGO-UPC.png";
const Header = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-center my-6">
        <img src={upcLogo} className="h-24 w-52" alt="UPC" />
      </div>
      <div>
        <Typography variant="h3" color="light-blue">
          FULL CALCULADORA FISICA
        </Typography>
      </div>
    </>
  );
};

export { Header };
