import { Link } from 'gatsby';
import React from 'react';
import './header.css';

export default function Header() {
    return (
        <header>
            <nav>
                <ul className="no-bullets">
                    <li>
                        <button>Create quote</button>
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
