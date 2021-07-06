const useLongPress = () => {
  return (onClick, onLongPress) => {
    let timeout;
    let preventClick = false;

    const start = () => {
      timeout = setTimeout(() => {
        preventClick = true;
        onLongPress();
      }, 500);
    };

    const clear = () => {
      if (timeout) onClick();
      timeout && clearTimeout(timeout);
      preventClick = false;
    };

    const clickCaptureHandler = (e) => {
      if (preventClick) {
        e.stopPropagation();
        preventClick = false;
      }
    };

    return {
      onMouseDown: start,
      onTouchStart: start,
      onMouseUp: clear,
      onTouchEnd: clear,
      onClickCapture: clickCaptureHandler,
    };
  };
};

export default useLongPress;
