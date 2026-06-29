interface Props {
  text: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onPush: () => void;
}

function PushButton({ text, color, onPush }: Props) {
  return (
    <button className={"btn btn-" + color} onClick={onPush}>
      {text}
    </button>
  );
}

export default PushButton;
