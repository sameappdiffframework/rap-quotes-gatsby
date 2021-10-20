import './quote.css';
import React from 'react';
import { QuoteModel } from './quote-model';

export default function Quote({ quote }: { quote: QuoteModel }) {
    return (
        <figure>
            <blockquote>
                <p>{quote.quote}</p>
            </blockquote>
            <img src={quote.source.image} alt={quote.source.name}/>
            <figcaption>
                <p>{quote.artist.name}</p>
                <cite>
                    <a href={quote.source.url} target="_blank">{quote.source.name}</a>
                </cite>
            </figcaption>
        </figure>
    );
}
