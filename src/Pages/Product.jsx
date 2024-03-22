import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Footer from '../Components/Footer/Footer';
const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productID} = useParams();
    const product = all_product.find((e) => e.id === Number(productID));
  return (
    <>
    <div>
      
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
          <DescriptionBox />
          <RelatedProducts />
          
    </div>
   <Footer />
   </>
  )
}

export default Product;