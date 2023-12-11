import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((usersData) => {
        setUsers(() => usersData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    if (users.length < 1) {
      getAllUsers();
    }
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      console.log("post :>> ", user);
      return (
        <div className="User-container" key={user.id}>
          <h2 className="User-names">
            {user.firstname} {user.lastname}
          </h2>
          <Link href={`emailto:${user.email}`} className="User-information">
            {user.email}
          </Link>
          <Link href={`tel:${user.phone}`} className="User-information">
            {user.phone}
          </Link>
          <p className="User-address">
            {user.address.city}, street: {user.address.street}
          </p>
        </div>
      );
    });
  };

  return <div className="User">{renderUsers()}</div>;
};

export default Users;
