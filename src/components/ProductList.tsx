import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { type Product } from '../types';
import { Button, Card, Col, Row } from 'react-bootstrap';

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
};

const ProductList = () => {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const dispatch = useDispatch();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <Row>
      {products?.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={product.image} height="200" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                ${product.price} - {product.category}
                <br />
                Rating: {product.rating.rate} ({product.rating.count})
                <br />
                {product.description.substring(0, 100)}...
              </Card.Text>
              <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;