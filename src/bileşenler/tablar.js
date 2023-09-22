const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const topicsDiv = document.createElement('div');
  topicsDiv.className = 'topics';
  konular.forEach((konu) => {
    const tabDiv = document.createElement('div');
    tabDiv.className = 'tab';
    tabDiv.textContent = konu;
    topicsDiv.appendChild(tabDiv);
  });
  return topicsDiv;


}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const hedefElement = document.querySelector(secici);
  if (hedefElement) {
    fetch('http://localhost:5001/api/konular')
    .then((response) => response.json())
    .then((veri) => {
      const konular = veri.konular;
      const tablar = Tablar(konular);
      hedefElement.appendChild(tablar);
    })
    .catch((hata) => {
      console.error('API isteği sırasında hata oluştu:', hata);
    });
  } else {
    console.error("Belirtilen seçici ile eşleşen bir DOM öğesi bulunamadı.");
  }
}

export { Tablar, tabEkleyici }
