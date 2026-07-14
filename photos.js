// =====================================================
//  ARCHIVIO FOTO — questo è l'UNICO file da modificare
//
//  PER AGGIUNGERE UNA FOTO:
//    1. metti il file nella cartella giusta dentro images/
//    2. aggiungi il percorso del file nella lista "foto"
//       del blocco giusto qui sotto
//
//  PER AGGIUNGERE UNA COLLEZIONE:
//    copia un intero blocco { ... } (dalla graffa aperta a
//    quella chiusa, virgola inclusa) e cambia id, titolo, foto.
//    L'indice in foto.html si aggiorna da solo.
//
//  TIPI DI PAGINA:
//    normale                → griglia di miniature + lightbox
//    con  layout: "scroll"  → foto in colonna, si scorre la pagina
//
//  COLLEZIONE VUOTA (foto: [])
//    → la pagina mostra solo la scritta "W.I.P."
//      Appena aggiungi dei file alla lista, torna una griglia.
//
//  Lo slideshow della home pesca automaticamente da tutte
//  le collezioni qui sotto.
// =====================================================

const ARCHIVIO = [
  {
    id: "2021",
    titolo: "2021",
    foto: [
      "images/2021/2021-1.jpg",
      "images/2021/2021-2.jpg",
      "images/2021/2021-3.jpg",
      "images/2021/2021-4.jpg",
      "images/2021/2021-5.jpg",
      "images/2021/2021-6.jpg",
      "images/2021/2021-7.jpg",
      "images/2021/2021-8.jpg",
      "images/2021/2021-9.jpg",
      "images/2021/2021-10.jpg",

      "images/2021/2021-12.jpg",
      "images/2021/2021-13.jpg",
      "images/2021/2021-14.jpg",
      "images/2021/2021-15.jpg",
      "images/2021/2021-16.jpg",
      "images/2021/2021-17.jpg",
      "images/2021/2021-18.jpg",
      "images/2021/2021-19.jpg",
      "images/2021/2021-20.jpg",

      "images/2021/2021-22.jpg",
      "images/2021/2021-23.jpg",
    ]
  },
  {
    id: "2022",
    titolo: "2022",
    foto: [
      "images/2022/2022-1.jpg",
      "images/2022/2022-2.jpg",
      "images/2022/2022-3.jpg",
      "images/2022/2022-4.jpg",
      "images/2022/2022-5.jpg",
      "images/2022/2022-6.jpg",
      "images/2022/2022-7.jpg",
      "images/2022/2022-8.jpg",
      "images/2022/2022-9.jpg",
      "images/2022/2022-10.jpg",
      "images/2022/2022-11.jpg",
    ]
  },
  {
    id: "2023",
    titolo: "2023",
    foto: [
      "images/2023/2023-1.jpg",
      "images/2023/2023-2.jpg",
      "images/2023/2023-3.jpg",
      "images/2023/2023-4.jpg",
      "images/2023/2023-5.jpg",
      "images/2023/2023-6.jpg",
      "images/2023/2023-7.jpg",
    ]
  },
  {
    id: "2024",
    titolo: "2024",
    foto: [
      "images/2024/2024-1.jpg",
      "images/2024/2024-2.jpg",
      "images/2024/2024-3.jpg",
      "images/2024/2024-4.jpg",
      "images/2024/2024-5.jpg",
      "images/2024/2024-6.jpg",
      "images/2024/2024-7.jpg",
      "images/2024/2024-9.jpg",
    ]
  },
  {
    id: "2025",
    titolo: "2025",
    foto: [
      "images/2025/2025-1.jpg",
      "images/2025/2025-2.jpg",
      "images/2025/2025-3.jpg",
      "images/2025/2025-4.jpg",
      "images/2025/2025-5.jpg",
      "images/2025/2025-6.jpg",
      "images/2025/2025-7.jpg",
    ]
  },
  {
    id: "2026",
    titolo: "2026",
    foto: [] // nessuna foto per ora → la pagina mostra "W.I.P."
  },
  {
    id: "polaroid-e-stampe",
    titolo: "polaroid e stampe",
    layout: "scroll",
    foto: [
      "images/polaroid-e-stampe/polaroid-e-stampe-1.png",
      "images/polaroid-e-stampe/polaroid-e-stampe-2.png",
      "images/polaroid-e-stampe/polaroid-e-stampe-3.png",
      "images/polaroid-e-stampe/polaroid-e-stampe-4.png",
      "images/polaroid-e-stampe/polaroid-e-stampe-5.png",
      "images/polaroid-e-stampe/polaroid-e-stampe-6.png",
      "images/polaroid-e-stampe/polaroid-e-stampe-7.png",
    ]
  },
];
