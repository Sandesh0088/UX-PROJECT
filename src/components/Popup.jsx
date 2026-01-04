import "./Popup.css";

export default function Popup({ onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <div className="popup-text">
          <h2>Download The App By Scanning QR</h2>
          <p>Scan the QR code to quickly download the app on your device.</p>
        </div>

        <img
          src="./images/scan.avif"
          alt="Scan QR"
          className="popup-image"
        />
      </div>
    </div>
  );
}
