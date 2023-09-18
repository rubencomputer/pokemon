import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

type LogOutProps = {};

const LogOut = (props: LogOutProps) => {
  return (
    <Button
      color="primary"
      size="lg"
      radius="sm"
      className="w-full bg-buttons font-bold tracking-wide h-14"
      startContent={
        <FontAwesomeIcon icon={faRightFromBracket} rotation={180} />
      }
    >
      LOG OUT
    </Button>
  );
};

export default LogOut;
