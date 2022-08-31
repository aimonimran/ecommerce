import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
    /* ${mobile({margin: "10px 5px"})} */
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
    ${mobile({margin: "5px 10px", display: "flex", flexDirection: "column", width: "0 20px"})};
`;

const FilterText = styled.h3`
    font-weight: 600;
    font-size: 20px;
    margin-right: 20px;
    ${mobile({marginRight: "0"})}
`;

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
    ${mobile({margin: "10px 0px"})}
`;

const Option = styled.option``;

const ProductList = () => {
    return ( 
        <Container>
            <Announcement />
            <Navbar />
            <Title>Vintage Boxes</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option  selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
}
 
export default ProductList;