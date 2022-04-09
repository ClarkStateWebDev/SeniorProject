import React, { useContext, useState } from 'react';
import { Outlet } from "react-router-dom"
import NavBarRedo from "../layout/NavBarRedo";
import Container from "react-bootstrap/esm/Container";
import Footer from "../layout/footer";
const Layout = () => {
    const isAuth = sessionStorage.getItem("accessToken");
      //menuCollapse state using useState hook
      const [menuCollapse, setMenuCollapse] = useState(false)
    return (
        <>
            {isAuth && <NavBarRedo/>}
            <main
                className="App"
            >
                <Outlet 
                />
                
            </main>
            <Footer />
        </>
    )
}

export default Layout