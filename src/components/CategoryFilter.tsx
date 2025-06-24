import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Form } from 'react-bootstrap';
import type { Product } from '../types';

const fetchCategories = async (): Promise<string[]> => {
  const response = await axios.get('https://fakestoreapi.com/products/categories');
  return response.data;
};

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const queryClient = useQueryClient();

  const { data: categories } = useQuery<string[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    queryClient.setQueryData(['products'], (oldData: Product[] | undefined) => {
      if (!oldData) return [];
      return e.target.value === 'all'
        ? oldData
        : oldData.filter((product) => product.category === e.target.value);
    });
  };

  return (
    <Form.Select value={selectedCategory} onChange={handleCategoryChange} className="mb-4">
      <option value="all">All Categories</option>
      {categories?.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Form.Select>
  );
};

export default CategoryFilter;