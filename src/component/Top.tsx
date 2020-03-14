import React from "react";
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 800px;
  margin: auto;
`
const Title = styled.h1`
  font-size: 30px;

`
const Para = styled.p`
`

export const Top: React.FC = () => {
  return (
    <div className="App">
      <Wrap
      >
        <Title>
          DRILL


        </Title>
        <Para>株式会社DRILLはWebアプリケーションにおけるフロントエンドチーム開発の最適化を行い 継続可能なチーム設計をする会社です。
        </Para>

      </Wrap>
    </div>
  );
};
