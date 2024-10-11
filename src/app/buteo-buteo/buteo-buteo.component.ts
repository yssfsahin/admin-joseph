import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buteo-buteo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buteo-buteo.component.html',
  styleUrls: ['./buteo-buteo.component.scss']
})
export class ButeoButeoComponent implements OnInit {
  buteom: any;

  ngOnInit() {
    this.buteom = [
      {
        "id": 1,
        "baslik": "Görünüm ve Tanımlama",
        "aciklama": "Orta büyüklükte bir yırtıcı kuştur: Buteo buteo, genellikle 50-60 cm uzunluğundadır ve orta büyüklükteki diğer yırtıcı kuşlarla benzer boyutlardadır. Kanat açıklığı genellikle 110-130 cm arasında değişir: Bu geniş kanat açıklığı, Buteo buteo'nun süzülerek uzun süre havada kalmasına ve geniş alanları taramasına olanak tanır.Tüy rengi büyük farklılıklar gösterir: Tüy rengi kahverengi tonlarında olup bireyden bireye büyük farklılıklar gösterebilir. Bu renk farklılıkları, tüylü bölgelerde daha açık tonlar veya koyu lekeler şeklinde kendini gösterir. Kuyruğu geniş ve kısa, uçları yuvarlaktır: Bu kuyruk yapısı, kuşun havada manevra yapmasını ve dengede kalmasını kolaylaştırır.",
        "resim": "assets/pics/buteo-buteo.jpg"
      },
      {
        "id": 2,
        "baslik": "Habitat",
        "aciklama": "Çeşitli habitatlarda bulunabilir: Buteo buteo, açık alanlar, tarım arazileri, ormanlık alanlar ve dağlık bölgelerde yaygın olarak bulunur. Bu adaptasyon yeteneği, türün geniş bir coğrafi alanda yaşamasını sağlar. Genellikle ağaçlarda, kayalıklarda veya bazen insan yapısı olan yerlerde yuva yaparlar: Yüksek yerlere yuva yaparak, hem kendilerini hem de yavrularını yırtıcı hayvanlardan korurlar.",
        "resim": "assets/pics/buteo-buteo-2.jpg"
      },
      {
        "id": 3,
        "baslik": "Davranış ve Beslenme",
        "aciklama": "Genellikle tek başına veya çiftler halinde görülürler: Buteo buteo, sosyal olmayan bir kuştur; yalnız veya eşleriyle avlanır. Beslenmeleri, büyük ölçüde küçük memeliler, kuşlar, sürüngenler ve böceklerden oluşur: Bu diyet çeşitliliği, besin kaynaklarının bol olduğu bölgelerde hayatta kalmalarını sağlar. Avlarını genellikle pusuya yatarak veya süzülerek yakalarlar: Sabırla avlarını bekler veya süzülerek geniş alanları tarar ve fırsat bulduklarında hızla saldırırlar.",
        "resim": "assets/pics/buteo-buteo-3.jpg"
      },
      {
        "id": 4,
        "baslik": "Göç ve Dağılım",
        "aciklama": "Buteo buteo, kısmi göçmendir: Bazı popülasyonlar kış aylarında daha sıcak bölgelere göç ederken, diğerleri yıl boyunca aynı bölgede kalır. Avrupa, Asya ve Afrika'nın bazı bölgelerinde yaygın olarak bulunur: Geniş dağılım alanı, türün farklı iklim ve çevre koşullarına uyum sağlama yeteneğini gösterir.",
        "resim": "assets/pics/buteo-buteo-4.jpg"
      },
      {
        "id": 5,
        "baslik": "Üreme",
        "aciklama": "Dişiler genellikle 2-4 yumurta bırakır ve kuluçka süresi yaklaşık 33-38 gündür: Dişi şahinler, bu süre zarfında yumurtaları korur ve sıcak tutar. Yavrular, 6-7 hafta sonra yuvadan ayrılır: Bu süre zarfında, yavrular hızla büyür ve uçma yeteneklerini geliştirirler. Yuvadan ayrıldıktan sonra da bir süre ebeveynleri tarafından beslenmeye devam ederler.",
        "resim": "assets/pics/buteo-buteo-5.jpg"
      },
      {
        "id": 6,
        "baslik": "Kısaca",
        "aciklama": "Buteo buteo, hem biyolojik çeşitliliğin bir parçası olarak ekosistemlerde önemli bir rol oynar hem de yırtıcı kuşların davranışlarını gözlemlemek için ideal bir türdür.",
        "resim": ""
      },
    ];
  }
}
