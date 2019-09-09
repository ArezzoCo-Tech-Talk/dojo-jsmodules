(function (jomarQuery, counter) {
  var elWrapper = jomarQuery('.wrapper');

  var value = 0;
  setInterval(function () {

    if (Math.random() * 10 > 4) {
      value = counter.increment();
    } else {
      value = counter.decrement();
    }

    elWrapper.html(value);
  }, 1000);
})(jQuery, window.counter);
