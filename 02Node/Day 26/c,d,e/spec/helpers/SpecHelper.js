beforeEach(function () {
    jasmine.addMatchers({
        toBeInTheSameAlbumAs : function () {
        return {
          compare: function (a, b) {
            return {
              pass: a.album === b.album
            }
          }
        };
      }
    });
  });