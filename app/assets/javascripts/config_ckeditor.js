$(document).ready(function(){
  if ($('textarea').length > 0) {
    var data = $('.ckeditor');
    $.each(data, function(i) {
      CKEDITOR.replace(data[i].id)
    });
  }
  // CKEDITOR.config.height = 800;
  CKEDITOR.config.image_previewText = "Image Preview";
  CKEDITOR.on( 'dialogDefinition', function(ev){
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    if (dialogName == 'link')
    {
      dialogDefinition.removeContents('advanced');
      dialogDefinition.removeContents('target');
    }

    if (dialogName == 'image')
    {
      dialogDefinition.removeContents('advanced');
      dialogDefinition.removeContents('Link');
      dialogDefinition.removeContents('Upload');
      // dialogDefinition.height = 800;
      dialogDefinition.width = 1700;
    }

    var infoTab = dialogDefinition.getContents('info');
    // infoTab.remove('txtAlt');
    // infoTab.remove('cmbAlign');
    // infoTab.remove( 'previewImage');
    // infoTab.remove( 'txtBorder' ); //Remove Element Border From Tab Info
    // infoTab.remove( 'txtHSpace' ); //Remove Element Horizontal Space From Tab Info
    // infoTab.remove( 'txtVSpace' ); //Remove Element Vertical Space From Tab Info
    // infoTab.remove( 'txtWidth' ); //Remove Element Width From Tab Info
    // infoTab.remove( 'txtHSpace');
    // infoTab.remove( 'txtVSpace');

    if (dialogName == 'flash')
    {
      dialogDefinition.removeContents('advanced');
    }
  });
});
