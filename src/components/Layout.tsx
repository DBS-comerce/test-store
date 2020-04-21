import React from 'react';
import Header from './Header';

interface Props {
    children: JSX.Element[] | JSX.Element;
}

function Layout(props: Props): JSX.Element {
    const { children } = props;
    return (
        <>
            <Header />
            <div className="site-inner">
                <main>{children}</main>
            </div>
        </>
    );
}

export default Layout;
