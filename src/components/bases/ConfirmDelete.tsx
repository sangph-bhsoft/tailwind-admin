import { BaseSyntheticEvent, FC, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import { RootState } from "../../redux/interfaces";
import { closeConfirmDeleteAction } from "../../features/base/actions";
import { connect, ConnectedProps } from "react-redux";
import { useHistory } from "react-router-dom";

const mapState = (state: RootState) => ({
  isOpen: state.base.dialog.isShow,
  onDelete: state.base.dialog.callback,
});

const mapDispatch = {
  closeConfirmDeleteAction,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

const Modal: FC<Props> = ({ isOpen, onDelete, closeConfirmDeleteAction }) => {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return history.listen(() => closeConfirmDeleteAction());
  }, [history, closeConfirmDeleteAction]);

  const transitions = useTransition(isOpen, null, {
    from: { opacity: 0, transform: "translateY(-100px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-100px)" },
  });

  const handleCloseDialog = (e: BaseSyntheticEvent) => {
    if (ref.current === e.target) {
      closeConfirmDeleteAction();
    }
  };

  return (
    <div
      className={`fixed h-full w-full inset-0 z-50 bg-modal-bg  flex justify-center py-5  ${
        isOpen ? "m-fadeIn" : "m-fadeOut"
      }`}
      ref={ref}
      onClick={handleCloseDialog}
    >
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div
              className="w-80 h-32 z-50 bg-white items-center justify-center px-4 py-4 rounded-md shadow-lg"
              key={key}
              style={style}
            >
              <div className="text-red-600 flex">
                <span className="text-xl">
                  <i className="fas fa-exclamation-circle"></i>
                </span>
                <p className="text-xl ml-2">Do you want delete item?</p>
              </div>
              <div className="mt-5 flex items-center justify-end space-x-2">
                <button
                  className="bg-red-600 px-2 py-2 text-white rounded-lg outline-none focus:outline-none"
                  onClick={() => {
                    onDelete && onDelete();
                    closeConfirmDeleteAction();
                  }}
                >
                  Delete
                </button>
                <button
                  className="bg-gray-400 px-2 py-2 text-white rounded-lg outline-none focus:outline-none"
                  onClick={closeConfirmDeleteAction}
                >
                  Cancel
                </button>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
};

export default connector(Modal);
