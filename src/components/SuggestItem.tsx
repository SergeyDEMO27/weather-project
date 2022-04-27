import React from "react";
import "../style/SuggestItem.scss";

interface ISuggestItemProps {
  city: string;
}

const SuggestItem: React.FC<ISuggestItemProps> = ({ city }) => {
  return (
    <li className="suggest-item">
      <div className="suggest-item__title">{city}</div>
    </li>
  );
};

export default SuggestItem;
