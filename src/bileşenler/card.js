const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  const headlineDiv = document.createElement('div');
  headlineDiv.className = 'headline';
  headlineDiv.textContent = makale.anabaslik;
  const authorDiv = document.createElement('div');
  authorDiv.className = 'author';
  const imgContainerDiv = document.createElement('div');
  imgContainerDiv.className = 'img-container';
  const img = document.createElement('img');
  img.src = makale.yazarFoto;
  imgContainerDiv.appendChild(img);
  authorDiv.appendChild(imgContainerDiv);
  const authorSpan = document.createElement('span');
  authorSpan.textContent = makale.yazarAdi + ' tarafından';
  authorDiv.appendChild(authorSpan);
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.addEventListener('click', () => {
    console.log(makale.anabaslik);
  });

  return cardDiv;











}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const hedefElement = document.querySelector(secici);
  if (hedefElement) {
    fetch('http://localhost:5001/api/makaleler')
    .then((response) => response.json())
    .then((veri) => {
        makaleler.forEach((makale) => {
          const kart = Card(makale);
          hedefElement.appendChild(kart);
        });
      })
      .catch((hata) => {
        console.error('API isteği sırasında hata oluştu:', hata);
      });
  } else {
    console.error("Belirtilen seçici ile eşleşen bir DOM öğesi bulunamadı.");
  }
}

export { Card, cardEkleyici }
