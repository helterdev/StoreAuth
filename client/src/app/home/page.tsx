'use client';
import { allProducts } from '@/api/api';
import ListProducts from '@/components/ListProducts/ListProducts';
import { Loading } from '@/components/UI/Loading/Loading';
import { useNotify } from '@/hooks/useNotify/useNotify';
import { ProductsApi } from '@/interfaces/Api';
import { useEffect, useState } from 'react';

type Props = ProductsApi[];
export default function Products() {
  const [products, setProducts] = useState<Props | null>(null);
  const notify = useNotify();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await allProducts();
        if (response.statusText === 'OK') {
          const data: Props = response.data.products;
          return setProducts(data);
        }
      } catch (error) {
        return notify('Error al conectar con el servidor', 500, 'error');
      }
    };

    getProducts();
  }, [notify]);

  return (
    <div className='w-4/5 m-auto'>
      <ul className='flex flex-col items-center py-4 gap-4 md:flex-row md:flex-wrap md:justify-center md:gap-x-4'>
        {products ? (
          products.map((product: ProductsApi) => (
            <ListProducts key={product.id} product={product} />
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
}
