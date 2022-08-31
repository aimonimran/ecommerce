import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
        width: 40%;
        background: #fff;
        padding: 20px;
        ${mobile({width: "75%"})};
`;

const Title = styled.h1`
        font-size: 24px;
        font-weight: 300;
        text-align: center;
`;

const Form = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid lightgrey;
    border-radius: 5px;

`;

const Button = styled.button`
        width: 40%;
        background: teal;
        border: none;
        color: #fff;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;

`;

const Link = styled.a`
        margin: 5px 0;
        font-size: 12px;
        cursor: pointer;
        margin-bottom: 10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Userame"></Input>
          <Input placeholder="Password"></Input>
          <Button>SIGN IN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
