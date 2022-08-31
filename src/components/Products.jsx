import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';


const Container = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
`;

const Products = () => {
    return ( 
        <Container>
            {popularProducts.map(item => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
     );
}
 
export default Products;