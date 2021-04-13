import React from "react";
import AutoCompleteCus from "../../../components/bases/AutoComplete";

const Filter = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-lg mb-5 px-4 py-3">
      <h5>Filter</h5>
      <div className="w-full flex space-x-3">
        <AutoCompleteCus
          data={[
            {
              title: "axxxx",
              value: "aaaaaaa",
            },
            {
              title: "abcccc",
              value: "aaaabbbbb",
            },
            {
              title: "acdd",
              value: "aaaccccc",
            },
          ]}
        />
        <AutoCompleteCus
          data={[
            {
              title: "axxxx",
              value: "aaaaaaa",
            },
            {
              title: "abcccc",
              value: "aaaabbbbb",
            },
            {
              title: "acdd",
              value: "aaaccccc",
            },
          ]}
        />
        <AutoCompleteCus
          data={[
            {
              title: "axxxx",
              value: "aaaaaaa",
            },
            {
              title: "abcccc",
              value: "aaaabbbbb",
            },
            {
              title: "acdd",
              value: "aaaccccc",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Filter;
