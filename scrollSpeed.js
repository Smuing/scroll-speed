function changeWheelSpeed(container, speedY) {
  let scrollY = document.documentElement.scrollTop;
  var handleScrollReset = function () {
    scrollY = container.scrollTop;
  };
  var handleMouseWheel = function (e) {
    e.preventDefault();
    scrollY += speedY * e.deltaY;
    if (scrollY < 0) {
      scrollY = 0;
    } else {
      var limitY = container.scrollHeight - container.clientHeight;
      if (scrollY > limitY) {
        scrollY = limitY;
      }
    }

    container.scrollTop = scrollY;
  };
  container.addEventListener("mouseup", handleScrollReset, { passive: false });
  container.addEventListener("mousedown", handleScrollReset, { passive: false });
  container.addEventListener("mousewheel", handleMouseWheel, { passive: false });
  return function (removed = false) {
    if (removed) {
      container.removeEventListener("mouseup", handleScrollReset, { passive: false });
      container.removeEventListener("mousedown", handleScrollReset, { passive: false });
      container.removeEventListener("mousewheel", handleMouseWheel, { passive: false });
      return;
    }
  };
}

// set scroll speed
// let scrollSpeed = changeWheelSpeed(document.documentElement, 0.6);

// set new scroll speed
// scrollSpeed(true);
// changeWheelSpeed(document.documentElement, 0);
