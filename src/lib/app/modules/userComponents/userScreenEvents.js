export let userScreenEvents = {
  screenCheck: function() {
    window.addEventListener('load', () => {
      if (window.innerWidth < window.innerHeight) {
        setTimeout(
          () =>
            alert(
              'Please adjust orientation to landscape mode to view content'
            ),
          1000
        );
      }
    });
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeAlert, 1000);
    });

    function resizeAlert() {
      if (window.innerWidth < window.innerHeight) {
        alert('Please adjust orientation to landscape mode to view content');
      }
    }
  }
};

userScreenEvents.screenCheck();
