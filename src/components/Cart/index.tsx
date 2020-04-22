import React, { useState } from 'react';
import { Button, Row, Col, Container, Table, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect, ConnectedProps } from 'react-redux';
import { deleteItemFromCart, clearCart } from '../../actions/cart';
import { Item } from '../../reducers/types';
import { RootState } from '../../reducers';
import InputMask from 'react-input-mask';

function Cart(props: PropsFromRedux): JSX.Element {
    const [emailValue, setEmailValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    // const [filteredItems, setFilteredItems] = useState(null);
    const totalPrice = props.items.reduce((accumulator: number, currentValue: Item) => {
        return accumulator + currentValue.cost;
    }, 0);

    const resetForm = (): void => {
        setEmailValue('');
        setPhoneValue('');
        setNameValue('');
    };
    const cartItems = props.items.map((item: Item, key: number) => (
        <tr key={item.name + key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.descr}</td>
            <td>{item.cost}</td>
            <td>
                <Button color="danger" size="sm" onClick={(): void => props.deleteItemFromCart(item.id)}>
                    REMOVE
                </Button>
            </td>
        </tr>
    ));

    return (
        <Container>
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Total items: {`${props.items.length}`}</td>
                            <td>Total price: {`${totalPrice} $`}</td>
                        </tr>
                    </tbody>
                </Table>
                <Button
                    size="sm"
                    color="primary"
                    style={{ margin: '8px' }}
                    onClick={(): void => {
                        props.clearCart();
                    }}
                >
                    Clear Cart
                </Button>
            </Row>
            <br />
            <Row>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                {/**
                                 * email validation is already presented in reactstrap component
                                 */}
                                <Input
                                    value={emailValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        e.stopPropagation();
                                        setEmailValue(e.target.value);
                                    }}
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="Insert your email"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Phone</Label>
                                <Input
                                    type="tel"
                                    value={phoneValue}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        e.stopPropagation();
                                        setPhoneValue(e.target.value);
                                    }}
                                    mask="+7 (999) 999-99-99"
                                    name="phone"
                                    id="formPhone"
                                    placeholder="+7 (999) 999-99-99"
                                    tag={InputMask}
                                    maskChar=" "
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            value={nameValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                e.stopPropagation();
                                setNameValue(e.target.value);
                            }}
                            name="name"
                            id="exampleAddress"
                            placeholder="Joe Doe"
                        />
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="exampleCheck" />
                        <Label for="exampleCheck" check>
                            I have agree with everything
                        </Label>
                    </FormGroup>
                    <div>
                        <Button
                            size="sm"
                            style={{ margin: '8px' }}
                            onClick={(): void => {
                                resetForm();
                            }}
                        >
                            Clear Form
                        </Button>
                        <Button color="primary" size="sm" style={{ padding: '4px' }}>
                            Checkout
                        </Button>
                    </div>
                </Form>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state: RootState): { items: Item[] } => {
    return {
        items: state.cart.items,
    };
};

const connector = connect(mapStateToProps, { deleteItemFromCart, clearCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
