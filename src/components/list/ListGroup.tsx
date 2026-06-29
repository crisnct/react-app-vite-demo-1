import { useState, type MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (
    event: MouseEvent<HTMLLIElement>,
    item: string,
    index: number,
  ) => {
    console.log(
      "Clicked",
      item,
      event.altKey,
      event.ctrlKey,
      event.shiftKey,
      event.metaKey,
    );
    setSelectedIndex(index);
    onSelectItem(item);
  };

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(event) => handleClick(event, item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
