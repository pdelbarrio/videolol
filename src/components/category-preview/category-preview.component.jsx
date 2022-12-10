import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  const titleUp = title.toUpperCase();
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{titleUp}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
