import { Typography } from "@material-tailwind/react";
import { ActiveDrawer } from "../components/ActiveDrawer";
import { Header } from "../components/Header";
import { FooterCalc } from "../components/FooterCalc";
const Documentacion = (): JSX.Element => {
  return (
    <>
      <ActiveDrawer />
      <Header />
      <a
        href="https://docs.google.com/file/d/1mxWl-KxFR3SR0MiSd6O4OrL8w9IsLI1y/edit?usp=docslist_api&filetype=msword"
        target="_blank"
      >
        <Typography variant="h5" className="my-6">
          DESCARGAR DOCUMENTACION PRESIONAR
        </Typography>
      </a>

      <FooterCalc />
    </>
  );
};

export { Documentacion };
