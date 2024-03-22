import React, { useContext, useState } from 'react';
import './ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show

    const categoryProducts = all_product.filter(item => item.category === props.category);

    const handleLoadMore = () => {
        setItemsToShow(itemsToShow + 6); // Increment the number of items to show by 6
    };

    return (
        <>
        <div className='shop-category'>
            <img className='shopcategory-img' src={props.banner} alt="" />
            <div className='shopcategory-indexsort'>
                <p>
                    <span>Showing 1-{Math.min(itemsToShow, categoryProducts.length)}</span> out of {categoryProducts.length} products
                </p>
                <div className='shopcategory-sort'>{props.catname}</div>
            </div>
            <div className="shopcategory-products">
                {categoryProducts.slice(0, itemsToShow).map((item, index) => (
                    <Item key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price} />
                ))}
            </div>
            {itemsToShow < categoryProducts.length && ( // Render the "Load more" button if there are more items to show
                <div className="shopcategory-loadmore" onClick={handleLoadMore}>
                    Load more
                </div>
            )}
        </div>
        <Footer />
        </>
    );
}

export default ShopCategory;
