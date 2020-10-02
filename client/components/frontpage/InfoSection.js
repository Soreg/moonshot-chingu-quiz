import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  padding: 30px 20px 50px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoBox = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: #ccc;
  margin: 0 auto 25px;
`;

const Headline = styled.h3`
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  max-width: 400px;
  margin: 0 auto;
`;

const InfoSection = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <InfoBox>
          <Icon />
          <Headline>Have Fun</Headline>
          <Text>
            At eripuit signiferumque sea, vel ad mucius molestie, cu labitur
            iuvaret vulputate sed.
          </Text>
        </InfoBox>

        <InfoBox>
          <Icon />
          <Headline>Grow Your Skills</Headline>
          <Text>
            Test your knowledge in multiple languages or topics, and get a
            detailed summary upon completion, including explanations and
            resource links
          </Text>
        </InfoBox>

        <InfoBox>
          <Icon />
          <Headline>Contribute to Open Source</Headline>
          <Text>
            Chingu believes in growing together. As a result, this project is
            purely open source, and everyone can contribute at any given time.
          </Text>
        </InfoBox>
      </InnerWrapper>
    </Wrapper>
  );
};

export default InfoSection;