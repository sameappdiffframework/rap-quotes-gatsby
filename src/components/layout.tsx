import 'normalize.css';
import 'sakura.css';
import './layout.css';

import React, { createContext, useState } from 'react';
import Header from './header';
import Footer from './footer';
import ModalContainer from './modal/container';
import CreateQuoteForm from './quotes/create-quote-form';
import type { QuoteEntry } from './quotes/create-quote-form';
import type { QuoteModel } from './quotes/quote-model';
import JSONData from "../components/quotes/quotes.json"
import { v4 as uuid } from '@lukeed/uuid';
export const QuoteContext = createContext([] as QuoteModel[]);

// NOTE: the fact that I'm doing this outside of the Layout comp
// is a red flag I'm not doing this right. There's the potential
// for race conditions, but since Layout will only be used once
// we're good ... for now.
let quotes: QuoteModel[] = [...JSONData];

export default function Layout({ pageTitle, children }: { pageTitle: string, children: JSX.Element[] | JSX.Element }) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = setModalOpen.bind(null, false);
    const openModal = setModalOpen.bind(null, true);
    const createQuoteAndCloseModal = (newQuote: QuoteEntry) => {
        const quote: QuoteModel = {
            id: uuid(),
            quote: newQuote.quote,
            artist: { name: newQuote.artist },
            source: { name: newQuote.source }
        };
        quotes = [quote, ...quotes];
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
                <QuoteContext.Provider value={quotes}>
                    {children}
                </QuoteContext.Provider>
            </main>
            <Footer/>
        </>
    )
}
