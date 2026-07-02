import { useState } from "react";
import "./DropArea.css";

interface Props {
  onDrop: () => void;
}

const DropArea = ({ onDrop }: Props) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={showDrop ? "drop_area" : "hide_drop"}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop here
    </section>
  );
};

export default DropArea;
