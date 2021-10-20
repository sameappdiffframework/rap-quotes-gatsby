import { Link } from 'gatsby';
import React from 'react';
import './header.css';

export default function Header({ onCreateClick }: { onCreateClick: () => void }) {
    return (
        <header>
            <nav>
                <ul className="no-bullets">
                    <li>
                        <button onClick={onCreateClick}>Create quote</button>
                    </li>
                    <li>
                        <Link to="/">All quotes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
