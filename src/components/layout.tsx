import 'normalize.css';
import 'sakura.css';
import './layout.css';

import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import ModalContainer from './modal/container';
import CreateQuoteForm from './quotes/create-quote-form';
import type { QuoteEntry} from './quotes/create-quote-form'
import type { QuoteModel } from './quotes/quote-model';

export default function Layout({ pageTitle, children }: { pageTitle: string, children: JSX.Element[] | JSX.Element }) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = setModalOpen.bind(null, false);
    const openModal = setModalOpen.bind(null, true);
    const createQuoteAndCloseModal = (newQuote: QuoteEntry) => {
        const quote: Partial<QuoteModel> = {
            quote: newQuote.quote,
            artist: { name: newQuote.artist },
            source: { name: newQuote.source }
        };
        console.log('quote', quote);
        closeModal();
    };
    return (
        <>
            {modalOpen && (
                <ModalContainer>
                    <CreateQuoteForm onReset={closeModal} onSubmit={createQuoteAndCloseModal}/>
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
