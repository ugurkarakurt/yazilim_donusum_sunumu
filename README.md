## 🚀 Genel Bakış

Bu proje, yazılım geliştirme süreçlerinin modernizasyonunu interaktif ve görsel bir şekilde sunan bir Next.js uygulamasıdır. Sunum, Framer Motion animasyonları ve SVG görsellerle zenginleştirilmiş, responsive bir tasarıma sahiptir.

## 📋 Özellikler

- İnteraktif bölüm navigasyonu
- Animasyonlu geçişler
- Detaylı metrik gösterimleri
- İki dilli içerik (İngilizce/Türkçe)
- Responsive tasarım
- SVG görselleştirmeler
- Modal detay görünümü

## 🛠 Teknoloji Stack'i

- Next.js
- TypeScript
- Framer Motion
- CSS Modules
- Lucide Icons

## 💻 Kurulum

1. **Projeyi oluşturun:**
```bash
npx create-next-app@latest process-modernization --typescript
cd process-modernization
```

2. **Gerekli paketleri yükleyin:**
```bash
yarn add framer-motion lucide-react
# veya
npm install framer-motion lucide-react
```

3. **Dosya yapısını oluşturun:**
```
src/
  ├── components/
  │   └── ProcessPresentation/
  │       ├── ProcessPresentation.tsx
  │       └── styles.module.css
  └── app/
      └── page.tsx
```

4. Paylaşılan kodları ilgili dosyalara kopyalayın:
   - `ProcessPresentation.tsx` → `src/components/ProcessPresentation/ProcessPresentation.tsx`
   - `styles.module.css` → `src/components/ProcessPresentation/styles.module.css`

5. `page.tsx` dosyasını güncelleyin:
```typescript
import ProcessPresentation from '@/components/ProcessPresentation/ProcessPresentation'

export default function Home() {
  return (
    <main>
      <ProcessPresentation />
    </main>
  )
}
```

## 🎯 Kullanım

### Navigasyon

- Üst kısımdaki butonlar ile bölümler arası geçiş yapabilirsiniz:
  - Current State Analysis
  - Strategic Goals & Vision
  - Implementation Strategy
  - Implementation Timeline
  - Expected Benefits & ROI

### Detay Görünümü

- Her kartta "Click for details" butonuna tıklayarak detay modalını açabilirsiniz
- Modalde şunları görebilirsiniz:
  - Detaylı açıklamalar
  - Metrikler
  - Önem seviyesi
  - İlerleme göstergeleri

### Metrikler

Her bölümde şu metrikleri takip edebilirsiniz:
- Current State: Mevcut durum metrikleri
- Goals: Hedef metrikler
- Changes: Değişim metrikleri
- Timeline: Zaman çizelgesi
- Benefits: ROI ve iyileştirme metrikleri

## 📱 Responsive Tasarım

Sunum aşağıdaki ekran boyutlarına uyum sağlar:
- Desktop (> 1024px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## 🔄 İçerik Güncelleme

### Yeni Bölüm Ekleme

`sections` objesine yeni bir bölüm eklemek için:

```typescript
sections: {
  newSection: {
    title: "New Section Title (Yeni Bölüm Başlığı)",
    icon: <YourIcon className={styles.icon} />,
    color: "#hexColor",
    description: "Description (Açıklama)",
    items: [
      {
        title: "Item Title (Öğe Başlığı)",
        description: "Item Description (Öğe Açıklaması)",
        details: ["Detail 1", "Detail 2"],
        importance: "high" | "medium" | "low",
        metrics: [
          { label: "Metric", value: "Value", trend: "up" | "down" }
        ]
      }
    ]
  }
}
```

### SVG Görsel Ekleme

Yeni SVG görseller için:

```typescript
svg: (
  <svg viewBox="0 0 100 100" className={styles.svgContainer}>
    // SVG elementleri
    <text x="50" y="90" fontSize="8" textAnchor="middle">Label</text>
  </svg>
)
```

## 🎨 Stil Özelleştirme

`styles.module.css` dosyasında şu bölümleri özelleştirebilirsiniz:
- Renk şeması
- Font boyutları
- Spacing değerleri
- Animasyon süreleris
- Responsive breakpoint'ler

## 📈 Performans İpuçları

- SVG'leri optimize edin
- Gereksiz re-render'ları önlemek için React.memo kullanın
- Büyük assets'leri lazy load yapın
- Production build'de performansı test edin
