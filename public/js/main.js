// import Jimp from 'jimp';

$(document).ready(function () {
  function downloadBase64File(contentType, base64Data, fileName) {
    const linkSource = `data:${contentType};base64,${base64Data}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  $('#btn-download').click(function () {
    const value = $('#friend-input').val();
    console.log($('#friend-input'));
    if (!value) alert('Chưa nhập tên thì biết ai???');
    console.log(value);
    $('#talltweets').html(value);
    // $('<img>', {
    //   src: img,
    // }).appendTo($('#image-placeholder'));
    var node = document.getElementById('image-wrapper');
    html2canvas(node, {
      backgroundColor: 'transparent',
    }).then(function (canvas) {
      $('.image-wrapper')[0].addClass = 'd-none';
      const pngUrl = canvas.toDataURL('image/png');
      $('#image-placeholder').html(`<img src='${pngUrl}'>`);
    });
  });
});
