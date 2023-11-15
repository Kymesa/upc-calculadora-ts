import { Typography } from "@material-tailwind/react";
import { ActiveDrawer } from "../components/ActiveDrawer";
import { CardCreators } from "../components/CardCreators";
import { Header } from "../components/Header";
import { FooterCalc } from "../components/FooterCalc";
const Creadores = (): JSX.Element => {
  return (
    <>
      <ActiveDrawer />
      <Header />
      <Typography variant="h5" className="my-6">
        CREADORES
      </Typography>
      <CardCreators />
      <FooterCalc ft />
    </>
  );
};

export { Creadores };
