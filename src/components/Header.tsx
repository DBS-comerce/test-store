import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Item } from '../reducers/types';
import { RootState } from '../reducers';

interface HeaderProps {
    items?: Item[];
}

const Header = (props: HeaderProps): JSX.Element => {
    const totalPrice =
        props.items &&
        props.items.reduce((accumulator: number, currentValue: Item) => {
            return accumulator + currentValue.cost;
        }, 0);
    return (
        <header
            style={{
                background: `hsl(208, 94%, 68%)`,
                marginBottom: `1.45rem`,
            }}
        >
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `1.45rem 1.0875rem`,
                }}
            >
                <Link href="/">
                    <h1 style={{ margin: 0, color: `white`, display: `inline-block`, cursor: 'pointer' }}>
                        Test Store{' '}
                    </h1>
                </Link>

                <Link href="/cart">
                    <div
                        style={{
                            margin: 0,
                            color: `white`,
                            display: `inline-block`,
                            float: `right`,
                            cursor: 'pointer',
                        }}
                    >
                        <h2 style={{ display: 'inline-block' }}>Cart</h2>
                        <p style={{ display: 'inline-block', padding: '10px', float: 'right' }}>
                            {`Total Items:  ${props.items && props.items.length}  |  Total Price:  ${totalPrice} $`}
                        </p>
                    </div>
                </Link>
            </div>
        </header>
    );
};

const mapStateToProps = (state: RootState): HeaderProps => {
    return {
        items: state.cart.items,
    };
};

export default connect(mapStateToProps, null)(Header);
