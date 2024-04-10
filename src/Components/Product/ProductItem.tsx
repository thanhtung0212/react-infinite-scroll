import { Product } from "../../Services/Types";

const ProductItem = ({ item }: { item: Product }) => {
  return (
    <div className='card'>
      <img className='card-thumbnail' src={item.thumbnail} alt={item.title} />
      <div style={{ padding: 16 }}>
        <h3>{item.title}</h3>
        <p>
          Price: <b>${item.price}</b>
        </p>
        <p className='card-description'>{item.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
