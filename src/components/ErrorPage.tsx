import { Button } from "@material-tailwind/react";
import { FooterCalc } from "./FooterCalc";
import { Header } from "./Header";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <Header />
      {/* Page Header Section: Simple */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto py-4 px-4  lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="text-center">
            <h2 className="mb-4 text-7xl font-black text-black dark:text-white">
              404
            </h2>
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300 lg:w-2/3">
              Esto ocurrio por alguna razon, recargaste la pagina y ocurrio un
              error entre otras razones o ingresaste a una{" "}
              <span className="text-red-400 font-extrabold">url erronea</span>
            </h3>
            <div className="flex justify-center">
              <Link to={"/"}>
                <Button
                  color="blue"
                  //   variant="text"
                  className="flex items-center gap-2 mt-6"
                >
                  Inicio{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* END Page Header Section: Simple */}
      <FooterCalc />
    </>
  );
};

export default ErrorPage;
