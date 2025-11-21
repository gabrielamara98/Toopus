import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="mt-10">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;