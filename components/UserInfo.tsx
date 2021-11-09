import Heading from "./Heading";
import { FC } from "react";
import { IUser } from "../interfaces/User";

export interface IUserProps {
  user: IUser;
}

const UserInfo: FC<IUserProps> = ({ user }) => {
  const { name, email, address } = user || {};
  const { street, suite, city, zipcode } = address || {};

  if (!user) {
    return <Heading tag="h3" text="Empty user" />;
  }

  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default UserInfo;
