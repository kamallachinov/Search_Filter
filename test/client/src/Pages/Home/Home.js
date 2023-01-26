import React from 'react'
import Courses from '../Courses/Courses'
import Header from '../Header/Header'
import Offers from '../Offers/Offers'
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="icon" type="image/png" href="https://t3.ftcdn.net/jpg/00/24/98/72/360_F_24987294_WSrhFrZmC5fnBUCoFI48l9xDIw39Oj3k.jpg" sizes="16x16" />
            </Helmet>
            <Header />
            <Courses />
            <Offers />
        </>
    )
}

export default Home