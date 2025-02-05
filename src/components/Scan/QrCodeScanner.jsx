import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./qrCodeScanner.module.css";

import { SCAN_DATA } from "../../constants";

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };
  console.log("f", scanned);
  console.log(SCAN_DATA);

  //   const settings = {
  //     // audio: false,
  //     finder: false,
  //   };

  //   const styleSettings = {
  //     container: { width: 350 },
  //   };
  return (
    <div className={s.container}>
      <Scanner
        // allowMultiple
        onScan={scanHandler}
        components={{ finder: false }}
        styles={{ container: { width: 200 } }}
      />
      <p className={s.result}>{scanned}</p>
    </div>
  );
};
