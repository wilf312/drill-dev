import React from "react";
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 720px;
  margin: auto;
  padding: calc(var(--margin));
  box-sizing: border-box;
`
const Main = styled.main`
  margin: calc(var(--margin) * 2) 0 0 0;
`
const Title = styled.h1`
  font-size: 30px;
  padding: calc(var(--margin) * 4);
  text-align: center;
  font-style: oblique;
  font-family: 'Cantarell', sans-serif;
`
const H2 = styled.h2`
  font-size: 24px;
  line-height: 1.8em;
  margin: calc(var(--margin) * 4) 0 calc(var(--margin) * 2);
`
const Para = styled.p`
  line-height: 1.9em;
`

export const Top: React.FC = () => {
  return (
    <div className="App">
      <Wrap>
        <Title>株式会社 DRILL</Title>
        <Main>
          <Para>株式会社DRILLはWebアプリケーションにおけるフロントエンドチーム開発の継続可能なチーム設計をする会社です。</Para>

          <H2>Mission</H2>
          <Para>サービスが継続可能なチームにし、売上を伸ばす施策を効率的に支援します</Para>

          <H2>Vision</H2>
          <Para>よいプロダクトを産み出すエンジンになる</Para>

          <H2>Value</H2>
          <Para>Webアプリケーションを作る上で混乱する業務フローの最適化</Para>
          <Para>フロントエンド開発者の教育</Para>
          <Para>開発プロセスの最適化</Para>
        </Main>
      </Wrap>
    </div>
  );
};
