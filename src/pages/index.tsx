import React from "react";
import Layout, { QuoteContext } from '../components/layout';
import Quote from '../components/quotes/quote';

const IndexPage = (): JSX.Element => {
    return (
        <Layout pageTitle={'Rap Quotes'}>
            <QuoteContext.Consumer>
                {quotes =>
                    quotes.map(quote => (<Quote quote={quote} key={quote.id}/>))
                }
            </QuoteContext.Consumer>
        </Layout>
    )
}

export default IndexPage
