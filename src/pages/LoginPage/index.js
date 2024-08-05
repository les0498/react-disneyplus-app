import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styled from 'styled-components';

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignUpClick = () => {
    navigate('/main'); // Navigate to /main on click
  };

  return (
    <Container>
      <Content>
        <Center>
          <LogoOne src={`${process.env.PUBLIC_URL}/images/cta-logo-one.svg`} alt="logo-one" />
          <SignUpLink onClick={handleSignUpClick}>지금 가입</SignUpLink>
          <Description>
            영화에 대한 프리미어 액세스를 얻으십시오.
            디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
          </Description>
          <LogoTwo src={`${process.env.PUBLIC_URL}/images/cta-logo-two.png`} alt="logo-two" />
        </Center>
        <BgImage />
      </Content>
    </Container>
  );
};

export default LoginPage;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-image: url("${process.env.PUBLIC_URL}/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUpLink = styled.button` // Change from 'a' to 'button' to use onClick event
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  border: none;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const LogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
