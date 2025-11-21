# 📚 LEARNING BACKUP - Code Knowledge Base
*Created: November 17, 2025*

## 🎯 **PURPOSE:**
Zentrale Sammlung aller gelernten Code-Konzepte mit Examples - nie wieder 3 Tage Code durchsuchen!

---

## 🧠 ADS-OPTIMIZED CODING & MENTAL HEALTH

### Sustainable Development Practices
```
⚡ REALISTIC PROFI-DEVELOPER HOURS:
- Junior Dev: 2-4 hours actual coding per day
- Senior Dev: 1-3 hours actual coding per day (!)
- Rest: Meetings, code reviews, debugging, planning, documentation

🎯 ADS-OPTIMIZED SESSIONS:
- Short, focused coding blocks (1-2 hours)
- Clear, achievable goals per session
- Regular breaks to prevent overwhelm
- Pair programming for accountability

### Terminal & File Management
```
📁 ORDNER ERSTELLEN (PowerShell):
mkdir src/data/images/HomeGalleryContent
# Erstellt automatisch alle fehlenden Zwischenordner!
# Existierende Ordner bleiben unverändert

🚚 DATEIEN VERSCHIEBEN VS CODE DRAG & DROP:
- Funktioniert zuverlässig für .js Files
- Auto-Update von Import-Pfaden ✅
- Perfekt für Content-Files und Data-Refactoring
```

---

## 🎨 **CSS**

### **📐 CSS POSITION PROPERTIES**
```css
/* STATIC (Default) - Normal im Dokumentenfluss, wie Text in einem Buch
[Element1] [Element2] [Element3] ← normal nebeneinander */

/* RELATIVE - Relative to original position */  
position: relative;
top: 10px; left: 20px;
/* Moves element BUT keeps original space reserved! */
/* [Element1] [Element2-moved] [   space   ] [Element3] */

/* ABSOLUTE - relativ zum Container, in dem es sich befindet */
position: absolute;
top: 50px; right: 30px;
/* Element removed from flow, positioned relative to parent */
/* [Element1] [Element3] ← Element2 floats somewhere else */
/* Beispiel: Navbar bleibt oben im CONTAINER, scrollt mit der Seite weg! */


/* FIXED - relativ zum Bildschirm */  
position: fixed;
top: 0; left: 0; right: 0; bottom: 0;  
/* Navbar klebt am BILDSCHIRM, scrollt NICHT mit! */
/* FIXED - klebt SOFORT fest */
/* Navbar ist AB SOFORT immer oben sichtbar */

/* STICKY - Hybrid: relative + fixed */
position: sticky;
top: 0;
/* Acts relative until scroll position, then becomes fixed */
/* STICKY - klebt erst fest WENN erreicht */
/* Navbar scrollt erst normal mit, klebt dann oben fest wenn sie oben ankommt */
```

### **📦 FLEXBOX SYSTEM**
```css
/* Activate Flexbox Container, ohne diese Aktivierung hätten die anderen Alignments KEINEN Einfluß!*/
display: flex;

/* Horizontal Alignment */
justify-content: flex-start;    /* [Items]          */
justify-content: center;        /*   [Items]        */
justify-content: flex-end;      /*          [Items] */
justify-content: space-between; /* [Item]    [Item] */

/* Vertical Alignment */
align-items: flex-start;        /* Items at top */
align-items: center;            /* Items centered */
align-items: flex-end;          /* Items at bottom */

/* IMPORTANT: display: flex does NOT include justify-content automatically! */
```

### **⚡ CSS ANIMATIONS**
```css
/* Animation Fill Modes */
animation: myAnimation 0.3s ease-out forwards;

/* FORWARDS - Stays at end state */
/* Element: start → end → STAYS AT END ✅ */

/* BACKWARDS - Returns to start state */  
/* Element: start → end → JUMPS BACK TO START */

/* both = Kombiniert diese Regeln: */
/* - forwards: Bleibt am Ende stehen */
/* - backwards: Wendet Startzustand vor Animation an */
/* 1. Element hat schon VOR Animation den Startzustand */  
/* 2. UND bleibt nach Animation im Endzustand */
/* Praktisch: Selten gebraucht! forwards ist Standard! */

/* TIMELINE: */
/* Vor Start: Startzustand wird angewendet */
/* Animation: 0% → 100% */  
/* Nach Ende: Endzustand bleibt stehen */

/* NONE - Only applies during animation time */

/* Example Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to   { opacity: 1; transform: scale(1); }
}
```

### **🎨 BACKDROP EFFECTS**
```css
/* Backdrop Filter - Effects BEHIND the element */
backdrop-filter: blur(4px);           /* Blurs background */
backdrop-filter: brightness(0.5);     /* Darkens background */
backdrop-filter: contrast(1.5);       /* Increases contrast */
backdrop-filter: saturate(2);         /* More vivid colors */

/* Use Case: Modal overlays, frosted glass effects */
```



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

### **🎯 EVENT HANDLING & EVENT OBJECTS**
```javascript
// Event Handler Function
const handleClick = (e) => {  // 'e' = Event Object (JavaScript standard)
    console.log(e.target);        // das gerade geklicke Event
    console.log(e.currentTarget); // Element mit Eventlistener, also das beobachtete Element
    console.log(e.type);          // 'click', 'keydown', etc.
}

// Modal Close Pattern - Click außerhalb des Bildes um es zu schließen
const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
        onClose(); // Löst nur aus, wenn das Overlay geklickt wird und nicht das beobachtete Element
    }
    // Warum das funktioniert:
    // currentTarget = LightboxOverlay (hat den Event Listener)
    // target = was WIRKLICH geklickt wurde
    // Gleich = Overlay geklickt → User will schließen
    // Verschieden = Bild geklickt → User will NICHT schließen
};

// Props Destructuring
const MyComponent = ({ isOpen, onClose, data }) => {
    // Instead of: props.isOpen, props.onClose, props.data
    // We destructure: { isOpen, onClose, data } = props
}

// Conditional Rendering
if (!isOpen) return null;  // Don't render if closed
`

### **🔄 REACT HOOKS PATTERNS**

**useState Hook:**
```javascript
const [selectedImage, setSelectedImage] = React.useState(null);
const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

// legt Variablen an mit denen wir die Lightbox steuern können, eine um den Zustand das ausgewählte Bildes zu speichern und eine um den Zustand der Lightbox (offen/geschlossen) zu speichern
const openLightbox = (image) => {
    setSelectedImage(image);      
    setIsLightboxOpen(true);      
};
```

**useEffect Hook + Event Listeners:**
```javascript
// der useEffect muss explizit importiert werden, der reine React import reicht nicht aus
import React, { useEffect } from "react";

useEffect(() => {
    // Setup: Event-Listener für ESC-Keyboard-Support
    const handleKeyDown = (event) => {
        if (event.key === 'Escape' && isLightboxOpen) {
            setIsLightboxOpen(false);
        }
    };
    
    // Listener für GANZE SEITE hinzufügen (nicht nur Component!)
    document.addEventListener('keydown', handleKeyDown);
    
    // Cleanup: Listener wieder entfernen (verhindert Memory Leaks!)
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
    // DEPENDENCY ARRAY ERKLÄRUNG:
    // [] (leer) = nur beim Mount/Unmount
    // [state] = bei Mount + jedes Mal wenn sich state ändert  
    // kein Array = bei jedem Re-Render (meist zu oft!)
}, [isLightboxOpen]);

// WARUM DEPENDENCY ARRAY?
// - Performance-Optimierung
// - Verhindert endlose Event-Listener-Erstellung
// - Modal öffnet sich → Event-Listener erstellt
// - Modal schließt sich → Event-Listener entfernt
```

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