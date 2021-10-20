import React from "react";
import Layout from '../components/layout';
import Quote from '../components/quotes/quote';
import { QuoteModel } from "../components/quotes/quote-model";
import JSONData from "../components/quotes/quotes.json"

const quotes: QuoteModel[] = JSONData;
const IndexPage = (): JSX.Element => {
  return (
    <Layout pageTitle={'Rap Quotes'}>
        {quotes.map(quote => (<Quote quote={quote} key={quote.id}/>))}
    </Layout>
  )
}

export default IndexPage
