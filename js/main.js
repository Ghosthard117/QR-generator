// wrap DOM elements
let imgBox = document.getElementById('imgBox'),
qrImage = document.getElementById('qrImg'),
qrText = document.getElementById('inputQR')

function generateQR() {
  if (qrText.value.length > 1){
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
    imgBox.classList.add('show-img')
  } else {
    qrText.classList.add('error')
    setTimeout(() => {
      qrText.classList.remove('error')
    }, 1000);
  }
}