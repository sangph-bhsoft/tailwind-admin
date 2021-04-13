import React, { useState } from "react";
import Autocomplete from "react-autocomplete";

type Item = {
  title: string;
  value: string | number;
};

interface IProps {
  data: Item[];
}

function renderMovieTitle(state: Item, val: string) {
  return state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1;
}

const AutoCompleteCus: React.FC<IProps> = ({ data }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="autocomplete-wrapper">
      <h3>React Autocomplete Demo</h3>
      <Autocomplete
        value={value}
        items={data}
        getItemValue={(item: Item) => item.title}
        shouldItemRender={renderMovieTitle}
        renderMenu={(item) => <div className="dropdown">{item}</div>}
        renderItem={(item, isHighlighted) => (
          <div className={`item ${isHighlighted ? "selected-item" : ""}`}>
            {item.title}
          </div>
        )}
        onChange={(event, val) => setValue(val)}
        onSelect={(val) => setValue(val)}
      />
    </div>
  );
};

export default AutoCompleteCus;
