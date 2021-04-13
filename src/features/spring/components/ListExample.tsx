import React from "react";
import { Item } from "../interfaces";
import { useTransition, animated } from "react-spring";

type Props = {
  items: Item[];
};

const ListExample: React.FC<Props> = ({ items }) => {
  const transition = useTransition(items, (item) => item.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
  });

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="flex flex-col space-y-2">
        {transition.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            <div className="flex px-2 py-5 space-x-10 border rounded-lg shadow-lg  uppercase bg-purple-600 text-white justify-between">
              <p>{item.title}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default ListExample;
