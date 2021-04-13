import { useSpring, animated } from "react-spring";

type Props = {
  width: string;
};

function Simple(props: Props) {
  const { width } = useSpring({ width: props.width });

  return (
    <animated.div className="bg-pink-400 h-4" style={{ width }}></animated.div>
  );
}

export default Simple;
