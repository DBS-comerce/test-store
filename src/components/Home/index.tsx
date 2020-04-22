import React, { useEffect, useState } from 'react';
import {
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    Container,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { connect, ConnectedProps } from 'react-redux';
import Link from 'next/link';
import { loadItemsData, loadCategoriesData } from '../../actions/items';
import { Item, Category, CartItem } from '../../reducers/types';
import { addItemToCart, deleteItemFromCart } from '../../actions/cart';
import { RootState } from '../../reducers';

function Home(props: PropsFromRedux): JSX.Element {
    useEffect(() => {
        props.loadItemsData();
        props.loadCategoriesData();
    }, []);

    const [dropdownOpen, setOpen] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const toggle = (): void => setOpen(!dropdownOpen);

    const frontendFilter = (id: number): void => {
        console.log(id);
        const updatedItems = (props.items && props.items.filter((item: Item) => item.categories.includes(id))) || [];
        setFilteredItems((prevState: [] | Item[]): any => {
            console.log(updatedItems);
            return [...prevState, ...updatedItems];
        });
    };
    console.log(filteredItems);
    const itemsList = filteredItems.length > 0 ? filteredItems : props.items;
    const items =
        itemsList &&
        itemsList.map((item: Item, index: number) => (
            <Col key={item.name + index} sm="3" style={{ padding: '10px' }}>
                <Card body>
                    <CardTitle>
                        <Link href={`/item?id=${item.id}`}>
                            <h4 style={{ cursor: 'pointer' }}>{item.name}</h4>
                        </Link>
                    </CardTitle>
                    <CardText>{item.descr}</CardText>
                    <CardText>{`${item.cost} $`}</CardText>
                    {props.cartItems &&
                    props.cartItems.filter((cartItem: Item) => cartItem.id === item.id).length > 0 ? (
                        <Button color="danger" onClick={(): void => props.deleteItemFromCart(item.id)}>
                            REMOVE FROM CART
                        </Button>
                    ) : (
                        <Button color="primary" onClick={(): void => props.addItemToCart(item)}>
                            ADD TO CART
                        </Button>
                    )}
                </Card>
            </Col>
        ));

    const filterItems =
        props.categories &&
        props.categories.map((category: Category) => (
            <DropdownItem key={category.id} onClick={(): void => frontendFilter(category.id)}>
                {category.title}
            </DropdownItem>
        ));

    return (
        <Container>
            {props.items ? (
                <>
                    <Row>
                        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle style={{ marginLeft: '10px' }} caret>
                                Filter by
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={(): void => setFilteredItems([])}>---</DropdownItem>
                                {filterItems}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Row>
                    <Row>{items}</Row>
                </>
            ) : null}
        </Container>
    );
}

const mapStateToProps = (state: RootState): { items: Item[]; categories: Category[]; cartItems: CartItem[] } => {
    return {
        items: state.items.items,
        categories: state.items.categories,
        cartItems: state.cart.items,
    };
};

const connector = connect(mapStateToProps, { loadItemsData, addItemToCart, loadCategoriesData, deleteItemFromCart });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
