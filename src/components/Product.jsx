import styled from 'styled-components';
import { ShoppingCartOutlined } from '@mui/icons-material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
    opacity: 0;
    background: rgba(0,0,0,0.2);
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    position: absolute;
    z-index:3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity:1;
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index:2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover {
        background: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
    return ( 
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
     );
}
 
export default Product;