import { Alert, Button } from "@material-tailwind/react";
import { UiAlert } from "@TypesApp";
const Icon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const AlertDev = ({ alertDev, setAlertDev }: UiAlert): JSX.Element => {
  return (
    <Alert
      open={alertDev}
      action={
        <Button
          variant="gradient"
          color="blue"
          size="sm"
          className="!absolute top-3 right-3"
          onClick={() => setAlertDev(false)}
        >
          X
        </Button>
      }
      icon={<Icon />}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 },
      }}
      className="rounded-md border-l-4 border-[#03A9F4] bg-[#FFB8A2]/20 font-extrabold text-[#03A9F4] mx-auto mt-10"
    >
      En Desarrollo habran mas de 20 formas de hacer conversiones..
    </Alert>
  );
};
export { AlertDev };
