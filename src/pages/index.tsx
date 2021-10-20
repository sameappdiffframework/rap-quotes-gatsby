import React from "react";
import Layout from '../components/layout';
import '../components/quote.css';

const IndexPage = (): JSX.Element => {
  return (
    <Layout pageTitle={'Rap Quotes'}>
        <figure>
            <blockquote>
                <p>
                    Y'all wearing dresses and purses, dressing in Birkins, fam. I put a cap in that gown - pop and
                    circumstance.
                </p>
            </blockquote>
            <img src="https://i.scdn.co/image/ab67616d0000b27357641c5581a8d6527741748a"/>
            <figcaption>
                <p>Joell Ortiz</p>
                <cite><a href="https://open.spotify.com/album/5kCNU9ouaRoRtQNJrtfavl" target="_blank">Black Rock</a></cite>
            </figcaption>
        </figure>
        <figure>
            <blockquote>
                <p>
                    The boy's slick like three kids stacked in an overcoat at a twenty-one and over show.
                </p>
            </blockquote>
            <img src="https://i.scdn.co/image/ab67616d0000b273b7ddccc528879dbacb7662bb"/>
            <figcaption>
                <p>Aesop Rock</p>
                <cite><a href="https://open.spotify.com/album/3KJsSVL5vtJlb11tLHjdQN" target="_blank">Lice Team,
                    Baby</a></cite>
            </figcaption>
        </figure>
        <figure>
            <blockquote>
                <p>
                    From the get-go, this pop can cause a panic at the disco.
                </p>
            </blockquote>
            <img src="https://i.scdn.co/image/ab67616d0000b2739b7da1018417380cf15e54b9"/>
            <figcaption>
                <p>Method Man</p>
                <cite><a href="https://open.spotify.com/album/7q3ff38RxgNN0HbG5WNDWF" target="_blank">Hard Living</a></cite>
            </figcaption>
        </figure>
        <figure>
            <blockquote>
                <p>
                    You give me steps to climb, I redesign. I made some bleachers.
                </p>
            </blockquote>
            <img src="https://i.scdn.co/image/ab67616d0000b27357641c5581a8d6527741748a"/>
            <figcaption>
                <p>Oddisee</p>
                <cite><a href="https://open.spotify.com/album/5kCNU9ouaRoRtQNJrtfavl" target="_blank">No Trouble</a></cite>
            </figcaption>
        </figure>
    </Layout>
  )
}

export default IndexPage
