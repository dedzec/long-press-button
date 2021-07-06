const useLongPress = () => {
  return (callback) => {
    let timeout;
    let preventClick = false;

    const start = () => {
      timeout = setTimeout(() => {
        preventClick = true;
        callback();
      }, 500);
    };

    const clear = () => {
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
      onMouseLeave: clear,
      onTouchMove: clear,
      onTouchEnd: clear,
      onClickCapture: clickCaptureHandler,
    };
  };
};

export default useLongPress;
