# 📚 LEARNING BACKUP - Code Knowledge Base
*Created: November 17, 2025*

## 🎯 **PURPOSE:**
Zentrale Sammlung aller gelernten Code-Konzepte mit Examples - nie wieder 3 Tage Code durchsuchen!

---

## 🎨 **CSS**

### **📏 SPACING & UNITS**
**`margin: 2rem`** - Außenabstand
- **rem** = relative unit (1rem = 16px standard)
- **2rem** = 32px Außenabstand auf allen Seiten
- **Beispiel:** `margin: 2rem 1rem;` (oben/unten: 2rem, links/rechts: 1rem)

**`padding: 1.5rem`** - Innenabstand
- Abstand zwischen Element-Rand und Inhalt

### **📐 CSS GRID**
**`grid-template-columns: repeat(5, 1fr)`** - 5 gleich große Spalten
- **1fr** = "1 fraction" = 1 Teil der verfügbaren Breite
- **repeat(5, 1fr)** = 5 Spalten, jede bekommt gleich viel Platz
- **Beispiel:** Bei 1000px Breite = jede Spalte 200px

**`grid-gap: 1rem`** - Abstände zwischen Grid-Items

### **🎯 FLEXBOX CENTERING**
**Perfect Centering Combo:**
```css
display: flex;
justify-content: center;  /* horizontal mittig */
align-items: center;      /* vertikal mittig */
```

---

## ⚛️ **REACT**

### **🔄 COMPONENT PATTERNS**
**Array Mapping Pattern:**
```javascript
{images.map((image, index) => (
  <ImageItem key={index} src={image.src} alt={image.alt} />
))}
```

---

## 📦 **JAVASCRIPT**

### **🗂️ DATA STRUCTURES**
**Array of Objects Pattern:**
```javascript
const images = [
  { src: '/image1.jpg', alt: 'Description 1' },
  { src: '/image2.jpg', alt: 'Description 2' }
];
```

---

*Next Entry: [Add new learnings here]*