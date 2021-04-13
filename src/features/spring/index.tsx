import { useState } from "react";
import MyAutoCompleteInput from "../../components/bases/MyAutoCompleteInput";
import Simple from "./components/Example";
import ListExample from "./components/ListExample";
import { data } from "./data";

export default function SpringExample() {
  const [width, set] = useState(200);

  return (
    <div>
      <div className="flex space-x-2">
        <button
          className="h-5 w-5 outline-none focus:outline-none mb-2 flex items-center justify-center bg-primary text-white"
          onClick={() => set((w) => w + 200)}
        >
          +
        </button>
        <button
          className="h-5 w-5 outline-none focus:outline-none mb-2 flex items-center justify-center bg-primary text-white"
          onClick={() => set((w) => w - 200)}
        >
          -
        </button>
      </div>
      <Simple width={`${width}px`} />

      <ListExample items={data} />

      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience the autocomplete wizardry!</h2>
      <MyAutoCompleteInput
        suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"]}
      />
      <p>AAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
    </div>
  );
}
