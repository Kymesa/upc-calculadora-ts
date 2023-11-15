import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { UiCreators } from "@TypesApp";
const creators: UiCreators[] = [
  {
    name: "KEINER MESA",
    rol: "ESTUDIANTE ING SISTEMA - UPC",
    img: "https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/399937746_771691718054666_6142436198761798185_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEeloqaQaZAroqEgn1GvrjnSu55PQbrSbFK7nk9ButJsTrKaIV4nupj4e_Oh4HEPujfzEm74D6JbrWCeyybG4rZ&_nc_ohc=OmKKu9rvHC4AX8FzD7y&_nc_ht=scontent.feoh2-1.fna&oh=00_AfBQfWthKWZNJ7RaagZmn5PXP1MqH9PMb11aks4SZ0oFqA&oe=65586606",
  },
  {
    name: "ADRIAN VILLA",
    rol: "ESTUDIANTE ING SISTEMA - UPC",
    img: "https://scontent.feoh2-1.fna.fbcdn.net/v/t39.30808-6/274883866_103103535658208_3668879682185844994_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvsAbakKRATuvttD5ZqbCOdCS2tuJCwll0JLa24kLCWU5c39AAIjLn7DBB78EGZ0JYzULGMrdpxYeD3RsdB_OE&_nc_ohc=jsU8U4N2O1oAX8koYqo&_nc_ht=scontent.feoh2-1.fna&oh=00_AfAtub5UDXXnnW657wfsxi4I57b89uWO03W7ZhmYRq17Ng&oe=6557678B",
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
