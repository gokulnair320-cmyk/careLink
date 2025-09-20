import React, { useState } from "react";
import QRCode from "qrcode";

const QrCodeGenerator = () => {
  const [uniqueID, setUniqueID] = useState("");
  const [qrUrl, setQrUrl] = useState("");

  const handleChange = (e) => {
    setUniqueID(e.target.value);
  };

  const handleGenerate = async () => {
    if (uniqueID) {
      const url = await QRCode.toDataURL(uniqueID);
      setQrUrl(url);
    }
  };

  const handleDownloadQR = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qr_img.png";
    link.click();
  };

  const handleDownloadID = () => {
    const blob = new Blob([uniqueID], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ID.txt";
    link.click();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type in your unique ID"
        value={uniqueID}
        onChange={handleChange}
      />
      <button onClick={handleGenerate}>Generate QR</button>
      {qrUrl && (
        <div>
          <img src={qrUrl} alt="QR Code" />
          <br />
          <button onClick={handleDownloadQR}>Download QR Image</button>
          <button onClick={handleDownloadID}>Download ID as Text</button>
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;