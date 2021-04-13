import { BaseSyntheticEvent, FC, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { RootState } from "../../redux/interfaces";
import { closeSideModalAction } from "../../features/base/actions";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";

const mapState = (state: RootState) => ({
  isOpen: state.base.sideModal.isOpen,
  component: state.base.sideModal.component,
});

const mapDispatch = {
  closeSideModalAction,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const Modal: FC<Props> = ({ isOpen, closeSideModalAction, component }) => {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return history.listen(() => closeSideModalAction());
  }, [history, closeSideModalAction]);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });

  const handleCloseModal = (e: BaseSyntheticEvent) => {
    if (ref.current === e.target) {
      closeSideModalAction();
    }
  };

  return (
    <div
      ref={ref}
      className={`fixed h-full w-full inset-0 z-40 bg-modal-bg opacity-50  flex justify-center  ${
        isOpen ? "m-fadeIn" : "m-fadeOut"
      }`}
      onClick={handleCloseModal}
    >
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div
              className="w-full md:w-1/3 lg:w-1/4 h-full absolute right-0 z-50 bg-white items-center shadow-lg"
              key={key}
              style={style}
            >
              <button
                className="absolute top-4 right-3 focus:outline-none outline-none text-gray-400 text-sm"
                onClick={closeSideModalAction}
              >
                <i className="fas fa-times"></i>
              </button>
              {component}
            </animated.div>
          )
      )}
    </div>
  );
};

export default connector(Modal);
