import Layout from "@/containers/Layout";

export default function Hiragana() {
  return (
    <>
      <Layout>
        <h1>Hiragana</h1>
        (고정)
        <br /> Reset
        <br />
        <br />
        (첫화면)
        <br />
        From character : 이미지로부터 영어 발음 입력
        <br /> From pronunciation : 영문발음으로부터 일본어 입력
        <br /> Start
        <br />
        <br />
        (진행중) <br />
        image(유사이미지) <br />
        Answer input
        <br />
        정답보기 버튼
        <br />
        힌트보기 버튼
        <br />
        <br />
        (성공 또는 정답보기 버튼클릭시)
        <br />
        이미지(연상이미지)
        <br />
        <br /> (두 번 오답 시)
        <br /> 힌트보기 활성화 (첫글자)
        <br />
      </Layout>
    </>
  );
}
