import 'normalize.css';
import 'sakura.css';
import './layout.css';

import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ pageTitle, children }: { pageTitle: string, children: JSX.Element[] | JSX.Element }) {
    return (
        <>
            <Header/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer/>
        </>
    )
}
