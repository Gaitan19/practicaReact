import Navbar from "@/components/Navbar";
import Users from "@/components/Users";
import HeadPage from "@/components/HeadPage";

export default function UsersPage() {
  return (
    <>
      <HeadPage title="Users" />
      <Navbar />
      <Users />
    </>
  );
}
