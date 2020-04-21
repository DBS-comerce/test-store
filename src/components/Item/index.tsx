import React, { useEffect } from 'react';
import { Card, Button, CardTitle, CardText, Row, CardBody, Container, CardSubtitle } from 'reactstrap';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteItemFromCart, addItemToCart } from '../../actions/cart';
import { loadItemsData } from '../../actions/items';
import { Item as ItemType } from '../../reducers/types';
import { RootState } from '../../reducers';

function Item(props: PropsFromRedux): JSX.Element {
    useEffect(() => {
        props.loadItemsData();
    }, []);
    const router = useRouter();

    const { id } = router.query;
    console.log(id);
    const item: ItemType | null =
        (id && props.items.filter((item: ItemType) => item.id === parseInt(id[0]))[0]) || null;
    return (
        <Container>
            {item ? (
                <Row>
                    <div>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <h2>{item.name}</h2>
                                </CardTitle>
                                <CardSubtitle>{item.descr}</CardSubtitle>
                                <CardText>{item.cost + ' ' + '$'}</CardText>
                                {props.cartItems.filter((cartItem: ItemType) => cartItem.id === item.id).length > 0 ? (
                                    <Button color="danger" onClick={() => props.deleteItemFromCart(item.id)}>
                                        REMOVE FROM CART
                                    </Button>
                                ) : (
                                    <Button onClick={() => props.addItemToCart(item)}>ADD TO CART</Button>
                                )}
                            </CardBody>
                        </Card>
                    </div>
                </Row>
            ) : (
                <div style={{ margin: 'auto' }}>Item not found</div>
            )}
        </Container>
    );
}

const mapStateToProps = (state: RootState): any => {
    return {
        items: state.items.items,
        cartItems: state.cart.items,
    };
};

const connector = connect(mapStateToProps, { loadItemsData, deleteItemFromCart, addItemToCart });
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Item);
