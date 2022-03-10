<<<<<<< HEAD
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

=======
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

>>>>>>> c2169ba77d2dece1f9eeec06a233b2ede44b7181
export default Layout