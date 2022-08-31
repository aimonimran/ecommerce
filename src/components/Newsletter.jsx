import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../responsive';

const Container = styled.div`
    background: #fcf5f5;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})};
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: center;
    background:#fff;
    border: 1px solid lightgrey;
    ${mobile({width: "80%"})};
`;

const Input = styled.input`
    border: none;
    width: 100%;
    padding-left: 20px;
    flex:8;
`;

const Button = styled.button`
    flex:1;
    background: teal;
    border: none;
    color: #fff;
`;

const Newsletter = () => {
    return ( 
        <Container>
            <Title>Newsletter</Title>
            <Description>Get daily updates of our products!</Description>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    );
}
 
export default Newsletter;