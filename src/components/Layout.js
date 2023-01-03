import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar.js';

const Layout =({children}) =>{
    return(
        <div className="App">
            <div style={{width: "20vw"}}>
                <Navbar />
            </div>
            <div style={{marginLeft: "25vw", width: "55vw", height: "100vh", textAlign: "left", position: "absolute"}}>{children}</div>
            <footer style={{marginLeft: "20vw", width: "80vw", position: "absolute", bottom: '15px', textAlign: "center"}}>
                © 2021 UTM White Van. All Rights Reserved.
            </footer>
        </div>
    )
}

export default Layout;