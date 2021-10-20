import 'normalize.css';
import 'sakura.css';
import './layout.css';

import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import ModalContainer from './modal/container';

export default function Layout({ pageTitle, children }: { pageTitle: string, children: JSX.Element[] | JSX.Element }) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = setModalOpen.bind(null, false);
    const openModal = setModalOpen.bind(null, true);
    return (
        <>
            {modalOpen && (
                <ModalContainer>
                    <button onClick={closeModal}>Close</button>
                </ModalContainer>
            )}
            <Header onCreateClick={openModal}/>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
            <Footer/>
        </>
    )
}
