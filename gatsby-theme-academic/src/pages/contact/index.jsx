import {Container, Row, Col} from 'rsuite';
import React from 'react';

import ContactForm from '../../components/PageFragments/ContactForm';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import SEO from '../../components/Seo';
import Video from "../../components/video";

const Contact = () => (
    <Container className="outerPadding">
        <Container className="container">
            <SEO
                title="Contact"
                description="Hello folks Rolwin here. You can contact me through the contact form on this page.
                    Please feel free to contact me, don't be shy guys, just remember Rolwin is always open to talk about web
                    technologies especially Javascript techstacks. Currently I'm a part of Gatsby organization on github.
                    Find me on github - rolwin100."
                path="/contact"
                keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby', 'technology']}
            />
                <div className="marginTopTitle">
                    <h1 className="titleSeparate">404 page not found</h1>
                </div>
            <p>You just hit a page that doesn't exist... the sadness.</p>
            <p>May I suggest a video instead?</p>
            <br/>
                <Video
                    videoSrcURL="https://www.youtube.com/embed/VZrDxD0Za9I"
                    videoTitle="Official Music Video on YouTube"
                />

        </Container>
    </Container>
);

export default Contact;
