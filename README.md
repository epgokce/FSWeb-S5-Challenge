# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

* [+] Bu projenyi forklayarak bir kopyasını oluşturun.
* [+] Reponun kendi versiyonunuzu klonlayın.
* [+] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [+] Komut satırınızla projenin kök dizinine gidin.
- [+] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [+] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [+] Chrome'da `http://localhost:3000` konumuna gidin
- [+] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [+] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [+] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [+] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.


## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
   Bir web sayfasinin her ogesine erisim ve manipulasyon imkani saglayan modeldir.
2. Bir event nedir?
   Web sayfasinda bir kullanicinin bir butona tiklamasi, bir klavye tusuna basmasi veya fareyi hareket ettirmesi gibi etkilesimler herbiri bir event tetikler, bu etkilesimlerin tamamina event denir.
3. Bir event dinleyici(listener) nedir?
   Belirli bir event'i bekleyen ve event gerceklestirildiginde belirli bir islevi cagiran islevlerdir.
4. Neden bir NodeList'i Array'e dönüştürelim??
   Dizi islevlerinin kullanim yetenegi ve dongulerde dorudan dolasilabilinmesi.
5. Bileşen nedir?
   Daha kucuk ve daha yonetilebilir parcalara bolunmus yeniden kullanilabilir uygulama parcalaridir.
