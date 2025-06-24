import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { type RootState } from '../redux/store'; // Using import type for RootState
import { type Product } from '../types'; // Using import type for Product
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useEffect } from 'react';
import { addToCart } from '../redux/cartSlice'; // For restoring cart

const ShoppingCart = () => {
  const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  // Load from sessionStorage on mount
  useEffect(() => {
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
      const parsedCart: Product[] = JSON.parse(savedCart);
      parsedCart.forEach((item) => dispatch(addToCart(item)));
    }
  }, [dispatch]);

  // Type cartItems as Product[]
  const saveToSessionStorage = (cartItems: Product[]) => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  };

  // Sync with sessionStorage
  if (items.length > 0) saveToSessionStorage(items);

  const handleCheckout = () => {
    dispatch(clearCart());
    sessionStorage.removeItem('cart');
    alert('Checkout successful! Cart cleared.');
  };

  return (
    <Card className="mt-4">
      <Card.Header>Shopping Cart ({totalItems} items)</Card.Header>
      <ListGroup variant="flush">
        {items.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              <img src={item.image} alt={item.title} width="50" />
              {item.title} - ${item.price} x {item.quantity}
            </div>
            <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </Button>
          </ListGroup.Item>
        ))}
        <ListGroup.Item>
          <strong>Total: ${totalPrice.toFixed(2)}</strong>
          <Button variant="primary" onClick={handleCheckout} className="ms-2">
            Checkout
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ShoppingCart;