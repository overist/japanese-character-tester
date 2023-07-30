import ModalHiraganaGuide from "@/components/ModalHiraganaGuide";
import ModalKatakanaGuide from "@/components/ModalKatakanaGuide";
import Layout from "@/containers/Layout";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <TitleImageWrap>
        <img src="/images/common/flag.png" alt="title" />
      </TitleImageWrap>
      <Title>
        <span>JA</span> Character Tester
      </Title>
      <SubjectGrid>
        <Subject
          onClick={() => {
            router.push("/hiragana");
          }}
        >
          <img src="/images/common/card-hiragana.png" alt="hiragana" />
          <span>HIRAGANA</span>
        </Subject>
        <Subject
          onClick={() => {
            router.push("/katakana");
          }}
        >
          <img src="/images/common/card-katakana.png" alt="katakana" />
          <span>KATAKANA</span>
        </Subject>
        <Subject
          onClick={() => {
            router.push("/kanji");
          }}
        >
          <img src="/images/common/card-kanji.png" alt="kanji" />
          <span>KANJI</span>
        </Subject>

        <ModalHiraganaGuide />
        <ModalKatakanaGuide />
      </SubjectGrid>
    </Layout>
  );
}
const TitleImageWrap = styled.div`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
`;

export const Subject = styled.div`
  width: 100px;
  height: 100%;
  cursor: pointer;
  img {
    width: 100%;
    padding: 15px;
  }
  span {
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
`;
