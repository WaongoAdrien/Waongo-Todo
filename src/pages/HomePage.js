import React, { useState } from "react";
import Image from 'react-bootstrap/Image';
const url = "https://as1.ftcdn.net/v2/jpg/08/92/33/64/1000_F_892336441_QWR3Lk8iOkyG6j3t7oynGShhOTaYP4jT.jpg";

const HomePage = () => {
    return ( 
        <div>
            <h1>Welcome to my To-Do-List Application</h1>
            <p>
                Select Application to go to the application and start adding new tasks
            </p>
            <Image src={url}fluid />
        </div>
    );
};

export default HomePage;
