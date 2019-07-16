import React from 'react'
import {navigateToUrl} from 'single-spa'

const topMenuStyle = {
    position: 'fixed',
    width: '100%',
    height: '20px',
    padding: '10px',
    background: 'black',
    color: 'white',
    textAlign: 'center',
    top: '0',
    left: '0',
    zIndex: '10',
};

const sideBarNavStyle = {
    position: 'fixed',
    width: '150px',
    height: '100%',
    padding: '50px 10px',
    background: 'linear-gradient(180deg, #3F51B5 0%, #3F51B5 35%, rgba(0,212,255,1) 100%)',
    color: 'white',
    top: '0',
    left: '0',
    zIndex: '5',
};

const pageContentStyle = {
    padding: '40px 0 0 170px',
    background: '#efefef',
    height: '100vh',
    width: '100vw',
};


export default class Root extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        // noinspection HtmlUnknownTarget
        return (
            <div>
                <nav style={topMenuStyle}>top menu</nav>
                <nav style={sideBarNavStyle}>
                    <ul className="side-nav-links">
                        <li><a href="/step-1" onClick={navigateToUrl}>STEP 1</a></li>
                        <li><a href="/step-2" onClick={navigateToUrl}>STEP 2</a></li>
                        <li><a href="/step-3" onClick={navigateToUrl}>STEP 3</a></li>
                    </ul>
                </nav>
                <div style={pageContentStyle}>
                    <div id="current-step"/>
                </div>
            </div>
        )
    }
}
