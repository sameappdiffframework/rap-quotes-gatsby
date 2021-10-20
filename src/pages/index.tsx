import React from "react";
import Layout from '../components/layout';
import Quote from '../components/quote';
import { QuoteModel } from "../components/quote-model";
import JSONData from "../components/quotes.json"

const quotes: QuoteModel[] = JSONData;
const IndexPage = (): JSX.Element => {
  return (
    <Layout pageTitle={'Rap Quotes'}>
        {quotes.map(quote => (<Quote quote={quote} key={quote.id}/>))}
    </Layout>
  )
}

export default IndexPage
