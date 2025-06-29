import React, { useState } from "react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Reset copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Optionally display an error message to the user
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "transparent",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        {text}
      </button>
      {copied && (
        <span style={{ marginLeft: "8px", color: "white" }}>Copied!</span>
      )}
    </div>
  );
}

export default CopyButton;
