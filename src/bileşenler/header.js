const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div');
  headerDiv.className = 'header';

  const dateSpan = document.createElement('span');
  dateSpan.className = 'date';
  dateSpan.textContent = tarih;

  const h1 = document.createElement('h1');
  h1.textContent = baslik;
  

  const tempSpan = document.createElement('span');
  tempSpan.className = 'temp';
  tempSpan.textContent = yazi;

  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
}


const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const headerEkleyici = (secici) => {
    const hedefElement = document.querySelector(secici);
  
    if (hedefElement) {
      const header = Header("Başlık", "Tarih", "Yazı"); // İstediğiniz değerleri burada belirleyebilirsiniz.
  
      hedefElement.appendChild(header);
    } else {
      console.error("Belirtilen seçici ile eşleşen bir DOM öğesi bulunamadı.");
    }
  }
}

export { Header, headerEkleyici }
