import { SCAN_DATA } from "../constants";
import { QRCodeSVG } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import s from "./ScanHistory.module.css";

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  console.log(data);
  let key = uuidv4();
  return (
    <div className={s.list}>
      {data.map((text) => {
        return (
          <div key={text} className={s.row}>
            <p className={s.text}>{text}</p>
            <div>
              <QRCodeSVG value={text} size={100} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { ScanHistory };
