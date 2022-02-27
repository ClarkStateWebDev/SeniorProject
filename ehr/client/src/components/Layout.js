import { Outlet } from "react-router-dom"
import NavBar from "../layout/NavBar"
import NavBarRedo from "../layout/NavBarRedo";
import Container from "react-bootstrap/esm/Container";
import Footer from "../layout/footer";
const Layout = () => {
    const isAuth = sessionStorage.getItem("accessToken");
    return (
        <>
            {isAuth && <NavBarRedo />}
            <main className="App">
                <Outlet />
                
            </main>
            <Footer />
        </>
    )
}

export default Layout