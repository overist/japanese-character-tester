import { hiraganaTestState } from "@/recoil/atoms";
import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { hiraganas } from "@/datas/hiraganas";

export default function Hiragana() {
  // ** states and conditions
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [hiraganaTest, setHiraganaTest] = useRecoilState(hiraganaTestState);
  const { stage, mode, quizs } = hiraganaTest;
  const isCharacterMode = mode === 0;
  const isPronunciationMode = mode === 1;
  const [wrongCount, setWrongCount] = React.useState(0);
  const [isEnded, setIsEnded] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [quiz, setQuiz] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  // ** effects
  useEffect(() => {
    setWrongCount(0);
    console.log(quizs[stage - 1]);
    if (inputRef.current) inputRef.current?.focus();
    if (stage > hiraganas.length) {
      setIsEnded(true);
    }
    if (mode === 0 && stage > 0) {
      setQuiz(quizs[stage - 1].character);
      setAnswer(quizs[stage - 1].pronunciation);
    } else if (mode === 1 && stage > 0) {
      setQuiz(quizs[stage - 1].pronunciation);
      setAnswer(quizs[stage - 1].character);
    }
  }, [stage]);

  // ** handlers
  const setModeFromCharacter = () => {
    setHiraganaTest({
      mode: 0,
      stage: 1,
      wrongs: [],
      quizs: hiraganas.map((v) => v).sort(() => Math.random() - 0.5),
    });
  };
  const setModeFromPronunciation = () => {
    setHiraganaTest({
      mode: 1,
      stage: 1,
      wrongs: [],
      quizs: hiraganas.map((v) => v).sort(() => Math.random() - 0.5),
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputData = inputRef.current?.value;
    setInputValue("");

    console.log("nbow", inputData, "a", answer);
    if (inputData === answer) {
      setHiraganaTest({
        ...hiraganaTest,
        stage: stage + 1,
      });
    } else {
      setWrongCount((prev) => prev + 1);
      setHiraganaTest({
        ...hiraganaTest,
        wrongs: [...hiraganaTest.wrongs, quizs[stage - 1]],
      });
    }
  };

  // ** renders
  const renderTestStatus = () => {
    return (
      <TestStatusWrap>
        <span>
          stage: {stage}
          <br />
          mode: {mode === 0 ? "from character" : "from pronunciation"}
        </span>
        <button
          onClick={() =>
            setHiraganaTest({ stage: 0, mode: 0, wrongs: [], quizs: [] })
          }
        >
          Reset
        </button>
      </TestStatusWrap>
    );
  };
  const renderReadyPage = () => {
    return (
      <ReadyWrap>
        <button onClick={setModeFromCharacter}>From character</button>
        <button onClick={setModeFromPronunciation}>From pronunciation</button>
      </ReadyWrap>
    );
  };
  const renderFromCharacter = () => {
    return (
      <TestWrap>
        {renderTestStatus()}
        <span className="quiz">{quizs[stage - 1].character}</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </TestWrap>
    );
  };
  const renderFromPronunciation = () => {
    return (
      <TestWrap>
        {renderTestStatus()}
        <span className="quiz">{quizs[stage - 1].pronunciation}</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => {
              e.preventDefault();
              setInputValue(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </TestWrap>
    );
  };
  const renderTextHint = () => {
    return <HintWrap>{answer.split("").slice(0, wrongCount - 1)}</HintWrap>;
  };

  return (
    <>
      <Title>Hiragana Test</Title>

      {stage === 0 && renderReadyPage()}
      {stage > 0 && isCharacterMode && !isEnded && renderFromCharacter()}
      {stage > 0 &&
        isPronunciationMode &&
        !isEnded &&
        renderFromPronunciation()}
      {wrongCount > 1 && renderTextHint()}
    </>
  );
}

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 20px 0;
  text-transform: uppercase;
`;

const ReadyWrap = styled.div`
  display: flex;
  padding-top: 20px;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const TestStatusWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 300px;

  button {
    width: 90px;
    padding: 10px 20px;
    background-color: #dee2e6;
    color: #fff;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

const TestWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  span.quiz {
    font-size: 100px;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  form {
    display: flex;
    align-items: center;
    margin-top: 20px;

    input {
      padding: 10px 20px;
      border: 1px solid #dee2e6;
      border-radius: 5px;
      margin-right: 10px;
    }

    button {
      width: 90px;
      padding: 10px 20px;
      background-color: #fa5252;
      color: #fff;
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
`;

const HintWrap = styled.div`
  font-size: 16px;
`;
