import { Typography } from "@material-tailwind/react";
import { ActiveDrawer } from "../components/ActiveDrawer";
import { Header } from "../components/Header";
import { FooterCalc } from "../components/FooterCalc";
const Documentacion = (): JSX.Element => {
  return (
    <>
      <ActiveDrawer />
      <Header />
      <Typography variant="h5" className="my-6">
        DOC
      </Typography>
      <FooterCalc />
    </>
  );
};

export { Documentacion };
