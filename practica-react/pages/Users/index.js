import Head from "next/head";
import Examples from "@/components/examples";
import Navbar from "@/components/Navbar";
import Users from "@/components/Users";
import { Suspense } from "react";
import { CSpinner } from "@coreui/react";
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
