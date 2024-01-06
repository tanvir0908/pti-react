import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h1 className="font-primary">Hello world</h1>
      <Outlet />
    </div>
  );
}
