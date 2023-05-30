document.getElementById('qrCodeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    

    
    const form = event.target;
    const requestBody = {
      K: form.elements.K.value,
      V: form.elements.V.value,
      C: form.elements.C.value,
      R: form.elements.R.value,
      N: form.elements.N.value,
      I: `RSD${form.elements.I.value}`,
      P: form.elements.P.value,
      SF: form.elements.SF.value,
      S: form.elements.S.value,
      RO: form.elements.RO.value
    };

    //       P: `${form.elements.PName.value}\r\n${form.elements.PAddress.value}\r\n${form.elements.PCity.value}`,
    
    fetch('https://nbs.rs/QRcode/api/qr/v1/gen/500', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
    
        const qrCodeImage = document.createElement('img');
        qrCodeImage.src = url;
    
        const qrCodeContainer = document.getElementById('qrCodeContainer');
        qrCodeContainer.innerHTML = '';
        qrCodeContainer.appendChild(qrCodeImage);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  