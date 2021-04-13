import { FC } from "react";
import { spring, AnimatedSwitch } from "react-router-transition";

function mapStyles(styles: any) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val: any) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}
const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.05,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const AnimateSwitch: FC = ({ children }) => {
  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"
    >
      {children}
    </AnimatedSwitch>
  );
};

export default AnimateSwitch;
