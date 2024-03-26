import { Outlet } from "react-router-dom";
import Banner from "../Banner";

export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Banner />

            <Outlet />
            {children}
        </main>
    )
}