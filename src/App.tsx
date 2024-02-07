import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string>("");

  function addToInput(buttonValue: string) {
    setValue((prevValue) => (prevValue += buttonValue));
  }

  function calculateResult() {
    setValue(String(eval(value)));
  }

  function square() {
    setValue((prevValue) => String(Number(prevValue) * Number(prevValue)));
  }

  function squareRoot() {
    setValue((prevValue) => String(Math.sqrt(Number(prevValue))));
  }

  function clearAll() {
    setValue("");
  }

  function clearLastValue() {
    setValue(value.slice(0, -1));
  }

  return (
    <div className="calculator">
      <input value={value} id="result" type="text" readOnly />

      <div className="buttons">
        <button onKeyUp={clearAll} onClick={clearAll} className="clear">
          C
        </button>

        <button onClick={() => addToInput("+")} className="operator">
          +
        </button>

        <button onClick={() => addToInput("-")} className="operator">
          -
        </button>

        <button onClick={() => addToInput("*")} className="operator">
          ∗
        </button>

        <button onClick={clearLastValue} className="clear">
          C1
        </button>

        <button
          onClick={() => addToInput("(")}
          className="operator"
        >{`(`}</button>

        <button
          onClick={() => addToInput(")")}
          className="operator"
        >{`)`}</button>

        <button onClick={() => addToInput("/")} className="operator">
          /
        </button>

        <button onClick={() => addToInput("7")} className="number">
          7
        </button>

        <button onClick={() => addToInput("8")} className="number">
          8
        </button>

        <button onClick={() => addToInput("9")} className="number">
          9
        </button>

        <button onClick={square} className="operator">
          x²
        </button>

        <button onClick={() => addToInput("4")} className="number">
          4
        </button>

        <button onClick={() => addToInput("5")} className="number">
          5
        </button>

        <button onClick={() => addToInput("6")} className="number">
          6
        </button>

        <button onClick={squareRoot} className="operator">
          √x
        </button>

        <button onClick={() => addToInput("1")} className="number">
          1
        </button>

        <button onClick={() => addToInput("2")} className="number">
          2
        </button>

        <button onClick={() => addToInput("3")} className="number">
          3
        </button>

        <button onClick={calculateResult} className="equals">
          =
        </button>

        <button onClick={() => addToInput("0")} className="number">
          0
        </button>

        <button onClick={() => addToInput(".")} className="decimal">
          .
        </button>
      </div>
    </div>
  );
}

export default App;
