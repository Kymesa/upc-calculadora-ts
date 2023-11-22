import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { UiCreators } from "@TypesApp";
import keinerImg from "../assets/keinerImg.jpg";
import adrianImg from "../assets/adrianImg.jpg";
const creators: UiCreators[] = [
  {
    name: "KEINER MESA",
    rol: "ESTUDIANTE ING SISTEMA - UPC",
    img: keinerImg,
  },
  {
    name: "ADRIAN VILLA",
    rol: "ESTUDIANTE ING SISTEMA - UPC",
    img: adrianImg,
  },
  {
    name: "RICARDO MADRID",
    rol: "ESTUDIANTE ING SISTEMA - UPC",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
];

const CardCreators = (): JSX.Element => {
  return (
    <>
      {creators
        ? creators.map((p: UiCreators, inx: number) => (
            <Card className="w-52 mx-auto my-6" key={inx}>
              <CardHeader floated={false}>
                <img src={p.img} alt="profile-picture" />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {p.name}
                </Typography>
                <Typography
                  color="blue-gray"
                  className="font-medium"
                  textGradient
                >
                  {p.rol}
                </Typography>
              </CardBody>
              <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Like">
                  <Typography
                    as="a"
                    href="#facebook"
                    variant="lead"
                    color="blue"
                    textGradient
                  >
                    <i className="fab fa-facebook" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#twitter"
                    variant="lead"
                    color="light-blue"
                    textGradient
                  >
                    <i className="fab fa-twitter" />
                  </Typography>
                </Tooltip>
                <Tooltip content="Follow">
                  <Typography
                    as="a"
                    href="#instagram"
                    variant="lead"
                    color="purple"
                    textGradient
                  >
                    <i className="fab fa-instagram" />
                  </Typography>
                </Tooltip>
              </CardFooter>
            </Card>
          ))
        : null}
    </>
  );
};

export { CardCreators };
