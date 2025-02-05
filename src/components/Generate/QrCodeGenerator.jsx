import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import { GENERATE_DATA } from "../../constants";
import s from "./qrCodeGenerator.module.css";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    setResult("");
  };

  console.log("result:", result);

  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
        className={s.input}
      />
      <button className={s.button} type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>

      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={value} size={200} />
        </div>
      )}
    </div>
  );
};

export { QrCodeGenerator };
