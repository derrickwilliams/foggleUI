(function() {
  angular.module('foggle').controller('openCtrl', function($scope, $document) {

    var input = new moxie.file.FileInput({
      browse_button: $document[0].querySelector('.open-file-btn')
    });

    input.bind('change', onFilePicked);

    input.init();

    function onFilePicked(e) {
      var file;

      if (e.target.files.length === 0) {
        return false;
      }

      file = e.target.files[0];
      fLog(file.name);

      var reader = new FileReader();
      reader.onload = function(e) {
        fLog(e.target.result);
      };

      reader.readAsText(file.getSource());
    }

  });
})();