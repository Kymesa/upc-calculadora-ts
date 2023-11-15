/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Button,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import { PropsTypesDrawer } from "@TypesApp";
const Drawers = ({ open, closeDrawer }: PropsTypesDrawer) => {
  const { state } = useLocation();

  return (
    <React.Fragment>
      <Drawer
        transition={{ duration: 0.5 }}
        size={270}
        open={open}
        onClose={closeDrawer}
      >
        <div className="mb-2 flex items-center justify-between p-4 text-center">
          <Typography variant="h5" color="light-blue" className="w-10">
            UPC CALCULADORA
          </Typography>
          <Button
            variant="gradient"
            color="blue"
            size="sm"
            className="!absolute top-5 right-3"
            onClick={closeDrawer}
          >
            X
          </Button>
        </div>
        <List>
          <Link to={"/"} onClick={closeDrawer} state={{ path_route: "inicio" }}>
            <ListItem
              style={
                state &&
                (state.path_route === "inicio"
                  ? { backgroundColor: "#4fc3f7" }
                  : null)
              }
            >
              <ListItemPrefix>
                <svg
                  className="h-10 w-10 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="5 12 3 12 12 3 21 12 19 12" />{" "}
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{" "}
                  <rect x="10" y="12" width="4" height="4" />
                </svg>
              </ListItemPrefix>
              <Typography variant="h6" color="blue-gray">
                INICIO
              </Typography>
            </ListItem>
          </Link>

          <Link
            to={"/creadores"}
            onClick={closeDrawer}
            state={{ path_route: "creadores" }}
          >
            <ListItem
              style={
                state && state.path_route === "creadores"
                  ? { backgroundColor: "#4fc3f7" }
                  : undefined
              }
            >
              <ListItemPrefix>
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </ListItemPrefix>
              <Typography variant="h6" color="blue-gray">
                CREADORES
              </Typography>
            </ListItem>
          </Link>
          <Link
            to={"/documentacion"}
            onClick={closeDrawer}
            state={{ path_route: "documentacion" }}
          >
            <ListItem
              style={
                state && state.path_route === "documentacion"
                  ? { backgroundColor: "#4fc3f7" }
                  : undefined
              }
            >
              <ListItemPrefix>
                <svg
                  className="h-10 w-10 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{" "}
                  <line x1="13" y1="8" x2="15" y2="8" />{" "}
                  <line x1="13" y1="12" x2="15" y2="12" />
                </svg>
              </ListItemPrefix>
              <Typography variant="h6" color="blue-gray">
                DOCUMENTACION
              </Typography>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
};
export { Drawers };
