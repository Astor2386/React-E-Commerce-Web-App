import './App.css';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div className="container py-4">
      <h1>E-Commerce Store</h1>
      <CategoryFilter />
      <ProductList />
      <ShoppingCart />
    </div>
  );
};

export default App;