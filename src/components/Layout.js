import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar.js';

const Layout =({children}) =>{
    return(
        <div className="App">
            <div style={{width: "20vw"}}>
                <Navbar />
            </div>
            <div style={{marginLeft: "1vw", width: "79vw", height: "100vh", textAlign: "left", position: "relative", paddingBottom: "2.5rem", marginTop: "0px"}}>
                <div style={{minHeight: "90vh"}}>
                    {children}
                </div>
                <footer style={{width: "80vw", height: "2.5rem", textAlign: "center", position: "relative"}}>
                    © 2021 UTM White Van. All Rights Reserved.
                </footer>
            </div>
        </div>
    )
}

export default Layout;