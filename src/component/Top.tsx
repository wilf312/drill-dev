import React from "react";
import styled from 'styled-components';

const Wrap = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 8px;
  box-sizing: border-box;
`
const Title = styled.h1`
  font-size: 30px;
  padding: 24px;
  text-align: center;
  font-family: 'Cantarell', sans-serif;
`
const 見出し = styled.h2`
  font-size: 24px;
  line-height: 1.8em;
  margin: 16px 0 8px;
`
const Para = styled.p`
  line-height: 1.5em;
`

export const Top: React.FC = () => {
  return (
    <div className="App">
      <Wrap>
        <Title>DRILL</Title>
        <Para>株式会社DRILLはWebアプリケーションにおけるフロントエンドチーム開発の最適化を行い 継続可能なチーム設計をする会社です。</Para>

        <見出し>Mission</見出し>
        <Para>SaaSサービスが継続可能なチームにし、ビジネスのスピードを加速する</Para>

        <見出し>Vision</見出し>
        <Para>開発チームがかかえる課題をクリアにする</Para>
        <Para>開発チームの文化を作り、システムを進化させる</Para>

        <見出し>Value</見出し>
        <Para>Webアプリケーションを作る上で混乱する業務フローの最適化</Para>
        <Para>フロントエンド開発者の教育</Para>
        <Para>開発プロセスの最適化</Para>
      </Wrap>
    </div>
  );
};
