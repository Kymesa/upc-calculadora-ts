import "../App.css";
import Iframe from "react-iframe";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { ActiveDrawer } from "../components/ActiveDrawer";
import { FooterCalc } from "../components/FooterCalc";
// import { AlertDev } from "../components/AlertDev";
const Inicio = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);
  // const [alertDev, setAlertDev] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlertDev(true);
  //     setTimeout(() => {
  //       setAlertDev(false);
  //     }, 6000);
  //   }, 1500);
  // }, []);

  return (
    <>
      <ActiveDrawer />
      <Header />
      {loading && (
        <div className="flex justify-center mt-20">
          <Spinner className="h-16 w-16 text-gray-900/50" color="blue" />
        </div>
      )}
      {/* {alertDev && <AlertDev alertDev={alertDev} setAlertDev={setAlertDev} />} */}
      <Iframe
        className=" text-center px-2"
        url="https://kymesa.github.io/convert-unit-upc/"
        width="365px"
        height="300px"
        frameBorder={0}
        scrolling="no"
        loading="eager"
        onLoad={() => setLoading(false)}
      />
      <FooterCalc />
    </>
  );
};

export { Inicio };
