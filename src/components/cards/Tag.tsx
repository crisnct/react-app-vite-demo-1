import { type ReactNode } from "react";
import "./Tag.css";

interface Props {
  name?: "tag";
  children: ReactNode;
  selectTag?: (tag: string) => void;
  selected?: boolean;
}

const Tag = ({ name, children, selectTag, selected }: Props) => {
  return (
    <button
      type="button"
      name={name}
      className={`tag ${selected ? "selected" : ""}`}
      onClick={() => {
        if (selectTag) {
          selectTag(children as string);
        }
      }}
    >
      {children}
    </button>
  );
};

export default Tag;
