import { Outlet } from "react-router";
import Header from "./Header.jsx";

export default function RootLayOut() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  )
}
