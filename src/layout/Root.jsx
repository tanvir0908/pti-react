import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h1>Hello world</h1>
      <Outlet />
    </div>
  );
}
