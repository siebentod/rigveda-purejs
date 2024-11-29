export function itemHTMLTemplate(item) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${item.title}${item.id !== 'index' ? ` | Ригведа` : ''}</title>
    <meta
      name="description"
      content="Все гимны Ригведы с возможностью поиска"
    />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="styles.css" />
    <meta name="google-site-verification" content="yW0UNzfYP4wvVQU3xSXJO6QesaQccZ8FrrLVKo7xvtg" />
    <script type="module" src="/main.js" defer></script>
  </head>
  <body>
    <div class="prajapati">
      <div class="filter">
        <div class="icons scalable-icons">
          <a href="/about" data-native-url
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 192 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"
              ></path></svg></a
          ><a href="https://github.com/siebentod/rigveda-purejs" data-native-url
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
        <div class="filter__buttons">
          <div id="button-hide-cards">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </div><div class="arrow-up" id="button-hide-header">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </div>
          <div class="inputPlusRandom">
            <div class="inputPlusCheckbox scalable">
              <div class="search-wrapper">
                <input type="search" id="search-input" placeholder="Поиск по тексту" value="" />
                <button class="clear-select">&times;</button>
              </div>
              <input type="checkbox" id="checkbox" title="Строгий (не допускается поиск посреди слова)" />
            </div>
            <button class="openRandom scalable">Случайный</button>
          </div>
        </div>
        <div id="countResults">1028 результатов найдено</div>
      </div>
      <main class="">
        <div class="cards">
          <a class="card" id="1_1" href="/1_1"><p>I, 1. К Агни</p></a
          ><a class="card" id="1_2" href="/1_2"
            ><p>I, 2. К Ваю, Индре-Ваю, Митре-Варуне</p></a
          ><a class="card" id="1_3" href="/1_3"
            ><p>I, 3. К Ашвинам, Индре, Всем-Богам, Сарасвати</p></a
          ><a class="card" id="1_4" href="/1_4"><p>I, 4. К Индре</p></a
          ><a class="card" id="1_5" href="/1_5"><p>I, 5. К Индре</p></a
          ><a class="card" id="1_6" href="/1_6"><p>I, 6. К Индре</p></a
          ><a class="card" id="1_7" href="/1_7"><p>I, 7. К Индре</p></a
          ><a class="card" id="1_8" href="/1_8"><p>I, 8. К Индре</p></a
          ><a class="card" id="1_9" href="/1_9"><p>I, 9. К Индре</p></a
          ><a class="card" id="1_10" href="/1_10"><p>I, 10. К Индре</p></a
          ><a class="card" id="1_11" href="/1_11"><p>I, 11. К Индре</p></a
          ><a class="card" id="1_12" href="/1_12"><p>I, 12. К Агни</p></a
          ><a class="card" id="1_13" href="/1_13"><p>I, 13. Гимн-апри</p></a
          ><a class="card" id="1_14" href="/1_14"><p>I, 14. Ко Всем-Богам</p></a
          ><a class="card" id="1_15" href="/1_15"
            ><p>I, 15. К божествам, получающим жертву в урочное время</p></a
          ><a class="card" id="1_16" href="/1_16"><p>I, 16. К Индре</p></a
          ><a class="card" id="1_17" href="/1_17"><p>I, 17. К Индре-Варуне</p></a
          ><a class="card" id="1_18" href="/1_18"
            ><p>I, 18. К Брахманаспати</p></a
          ><a class="card" id="1_19" href="/1_19"
            ><p>I, 19. К Агни и Марутам</p></a
          ><a class="card" id="1_20" href="/1_20"><p>I, 20. К Рибху</p></a
          ><a class="card" id="1_21" href="/1_21"><p>I, 21. К Индре-Агни</p></a
          ><a class="card" id="1_22" href="/1_22"><p>I, 22. К разным богам</p></a
          ><a class="card" id="1_23" href="/1_23"><p>I, 23. К разным богам</p></a
          ><a class="card" id="1_24" href="/1_24"
            ><p>I, 24. К Агни, Савитару и Варуне</p></a
          ><a class="card" id="1_25" href="/1_25"><p>I, 25. К Варуне</p></a
          ><a class="card" id="1_26" href="/1_26"><p>I, 26. К Агни</p></a
          ><a class="card" id="1_27" href="/1_27"><p>I, 27. К Агни</p></a
          ><a class="card" id="1_28" href="/1_28"
            ><p>I, 28. Обряд простого выжимания сомы</p></a
          ><a class="card" id="1_29" href="/1_29"><p>I, 29. К Индре</p></a
          ><a class="card" id="1_30" href="/1_30"
            ><p>I, 30. К Индре, Ашвинам, Ушас</p></a
          ><a class="card" id="1_31" href="/1_31"><p>I, 31. К Агни</p></a
          ><a class="card" id="1_32" href="/1_32"><p>I, 32. К Индре</p></a
          ><a class="card" id="1_33" href="/1_33"><p>I, 33. К Индре</p></a
          ><a class="card" id="1_34" href="/1_34"><p>I, 34. К Ашвинам</p></a
          ><a class="card" id="1_35" href="/1_35"><p>I, 35. К Савитару</p></a
          ><a class="card" id="1_36" href="/1_36"><p>I, 36. К Агни</p></a
          ><a class="card" id="1_37" href="/1_37"><p>I, 37. К Марутам</p></a
          ><a class="card" id="1_38" href="/1_38"><p>I, 38. К Марутам</p></a
          ><a class="card" id="1_39" href="/1_39"><p>I, 39. К Марутам</p></a
          ><a class="card" id="1_40" href="/1_40"
            ><p>I, 40. К Брахманаспати</p></a
          ><a class="card" id="1_41" href="/1_41"
            ><p>I, 41. К Варуне, Митре, Арьяману, Адитьям</p></a
          ><a class="card" id="1_42" href="/1_42"><p>I, 42. К Пушану</p></a
          ><a class="card" id="1_43" href="/1_43"><p>I, 43. К Рудре</p></a
          ><a class="card" id="1_44" href="/1_44"><p>I, 44. К Агни</p></a
          ><a class="card" id="1_45" href="/1_45"><p>I, 45. К Агни</p></a
          ><a class="card" id="1_46" href="/1_46"><p>I, 46. К Ашвинам</p></a
          ><a class="card" id="1_47" href="/1_47"><p>I, 47. К Ашвинам</p></a
          ><a class="card" id="1_48" href="/1_48"><p>I, 48. К Ушас</p></a
          ><a class="card" id="1_49" href="/1_49"><p>I, 49. К Ушас</p></a
          ><a class="card" id="1_50" href="/1_50"><p>I, 50. К Сурье</p></a
          ><a class="card" id="1_51" href="/1_51"><p>I, 51. К Индре</p></a
          ><a class="card" id="1_52" href="/1_52"><p>I, 52. К Индре</p></a
          ><a class="card" id="1_53" href="/1_53"><p>I, 53. К Индре</p></a
          ><a class="card" id="1_54" href="/1_54"><p>I, 54. К Индре</p></a
          ><a class="card" id="1_55" href="/1_55"><p>I, 55. К Индре</p></a
          ><a class="card" id="1_56" href="/1_56"><p>I, 56. К Индре</p></a
          ><a class="card" id="1_57" href="/1_57"><p>I, 57. К Индре</p></a
          ><a class="card" id="1_58" href="/1_58"><p>I, 58. К Агни</p></a
          ><a class="card" id="1_59" href="/1_59"
            ><p>I, 59. К Агни-Вайшванаре</p></a
          ><a class="card" id="1_60" href="/1_60"><p>I, 60. К Агни</p></a
          ><a class="card" id="1_61" href="/1_61"><p>I, 61. К Индре</p></a
          ><a class="card" id="1_62" href="/1_62"><p>I, 62. К Индре</p></a
          ><a class="card" id="1_63" href="/1_63"><p>I, 63. К Индре</p></a
          ><a class="card" id="1_64" href="/1_64"><p>I, 64. К Марутам</p></a
          ><a class="card" id="1_65" href="/1_65"><p>I, 65. К Агни</p></a
          ><a class="card" id="1_66" href="/1_66"><p>I, 66. К Агни</p></a
          ><a class="card" id="1_67" href="/1_67"><p>I, 67. К Агни</p></a
          ><a class="card" id="1_68" href="/1_68"><p>I, 68. К Агни</p></a
          ><a class="card" id="1_69" href="/1_69"><p>I, 69. К Агни</p></a
          ><a class="card" id="1_70" href="/1_70"><p>I, 70. К Агни</p></a
          ><a class="card" id="1_71" href="/1_71"><p>I, 71. К Агни</p></a
          ><a class="card" id="1_72" href="/1_72"><p>I, 72. К Агни</p></a
          ><a class="card" id="1_73" href="/1_73"><p>I, 73. К Агни</p></a
          ><a class="card" id="1_74" href="/1_74"><p>I, 74. К Агни</p></a
          ><a class="card" id="1_75" href="/1_75"><p>I, 75. К Агни</p></a
          ><a class="card" id="1_76" href="/1_76"><p>I, 76. К Агни</p></a
          ><a class="card" id="1_77" href="/1_77"><p>I, 77. К Агни</p></a
          ><a class="card" id="1_78" href="/1_78"><p>I, 78. К Агни</p></a
          ><a class="card" id="1_79" href="/1_79"><p>I, 79. К Агни</p></a
          ><a class="card" id="1_80" href="/1_80"><p>I, 80. К Индре</p></a
          ><a class="card" id="1_81" href="/1_81"><p>I, 81. К Индре</p></a
          ><a class="card" id="1_82" href="/1_82"><p>I, 82. К Индре</p></a
          ><a class="card" id="1_83" href="/1_83"><p>I, 83. К Индре</p></a
          ><a class="card" id="1_84" href="/1_84"><p>I, 84. К Индре</p></a
          ><a class="card" id="1_85" href="/1_85"><p>I, 85. К Марутам</p></a
          ><a class="card" id="1_86" href="/1_86"><p>I, 86. К Марутам</p></a
          ><a class="card" id="1_87" href="/1_87"><p>I, 87. К Марутам</p></a
          ><a class="card" id="1_88" href="/1_88"><p>I, 88. К Марутам</p></a
          ><a class="card" id="1_89" href="/1_89"><p>I, 89. Ко Всем-Богам</p></a
          ><a class="card" id="1_90" href="/1_90"><p>I, 90. Ко Всем-Богам</p></a
          ><a class="card" id="1_91" href="/1_91"><p>I, 91. К Соме</p></a
          ><a class="card" id="1_92" href="/1_92"
            ><p>I, 92. К Ушас и Ашвинам</p></a
          ><a class="card" id="1_93" href="/1_93"><p>I, 93. К Агни и Соме</p></a
          ><a class="card" id="1_94" href="/1_94"><p>I, 94. К Агни</p></a
          ><a class="card" id="1_95" href="/1_95"><p>I, 95. К Агни</p></a
          ><a class="card" id="1_96" href="/1_96"
            ><p>I, 96. К Агни – дарителю богатства</p></a
          ><a class="card" id="1_97" href="/1_97"><p>I, 97. К Агни</p></a
          ><a class="card" id="1_98" href="/1_98"
            ><p>I, 98. К Агни-Вайшванаре</p></a
          ><a class="card" id="1_99" href="/1_99"
            ><p>I, 99. К Агни-Джатаведасу</p></a
          ><a class="card" id="1_100" href="/1_100"><p>I, 100. К Индре</p></a
          ><a class="card" id="1_101" href="/1_101"><p>I, 101. К Индре</p></a
          ><a class="card" id="1_102" href="/1_102"><p>I, 102. К Индре</p></a
          ><a class="card" id="1_103" href="/1_103"><p>I, 103. К Индре</p></a
          ><a class="card" id="1_104" href="/1_104"><p>I, 104. К Индре</p></a
          ><a class="card" id="1_105" href="/1_105"
            ><p>I, 105. Ко Всем-Богам</p></a
          ><a class="card" id="1_106" href="/1_106"
            ><p>I, 106. Ко Всем-Богам</p></a
          ><a class="card" id="1_107" href="/1_107"
            ><p>I, 107. Ко Всем-Богам</p></a
          ><a class="card" id="1_108" href="/1_108"
            ><p>I, 108. К Индре и Агни</p></a
          ><a class="card" id="1_109" href="/1_109"
            ><p>I, 109. К Индре и Агни</p></a
          ><a class="card" id="1_110" href="/1_110"><p>I, 110. К Рибху</p></a
          ><a class="card" id="1_111" href="/1_111"><p>I, 111. К Рибху</p></a
          ><a class="card" id="1_112" href="/1_112"><p>I, 112. К Ашвинам</p></a
          ><a class="card" id="1_113" href="/1_113"><p>I, 113. К Ушас</p></a
          ><a class="card" id="1_114" href="/1_114"><p>I, 114. К Рудре</p></a
          ><a class="card" id="1_115" href="/1_115"><p>I, 115. К Сурье</p></a
          ><a class="card" id="1_116" href="/1_116"><p>I, 116. К Ашвинам</p></a
          ><a class="card" id="1_117" href="/1_117"><p>I, 117. К Ашвинам</p></a
          ><a class="card" id="1_118" href="/1_118"><p>I, 118. К Ашвинам</p></a
          ><a class="card" id="1_119" href="/1_119"><p>I, 119. К Ашвинам</p></a
          ><a class="card" id="1_120" href="/1_120"><p>I, 120. К Ашвинам</p></a
          ><a class="card" id="1_121" href="/1_121"><p>I, 121. К Индре</p></a
          ><a class="card" id="1_122" href="/1_122"
            ><p>I, 122. Ко Всем-Богам</p></a
          ><a class="card" id="1_123" href="/1_123"><p>I, 123. К Ушас</p></a
          ><a class="card" id="1_124" href="/1_124"><p>I, 124. К Ушас</p></a
          ><a class="card" id="1_125" href="/1_125"
            ><p>I, 125. Хвала щедрому дарителю</p></a
          ><a class="card" id="1_126" href="/1_126"
            ><p>I, 126. Хвала щедрым дарам</p></a
          ><a class="card" id="1_127" href="/1_127"><p>I, 127. К Агни</p></a
          ><a class="card" id="1_128" href="/1_128"><p>I, 128. К Агни</p></a
          ><a class="card" id="1_129" href="/1_129"><p>I, 129. К Индре</p></a
          ><a class="card" id="1_130" href="/1_130"><p>I, 130. К Индре</p></a
          ><a class="card" id="1_131" href="/1_131"><p>I, 131. Гимн Индре</p></a
          ><a class="card" id="1_132" href="/1_132"><p>I, 132. К Индре</p></a
          ><a class="card" id="1_133" href="/1_133"><p>I, 133. К Индре</p></a
          ><a class="card" id="1_134" href="/1_134"><p>I, 134. К Ваю</p></a
          ><a class="card" id="1_135" href="/1_135"
            ><p>I, 135. К Ваю, Индре – Ваю</p></a
          ><a class="card" id="1_136" href="/1_136"
            ><p>I, 136. К Митре-Варуне</p></a
          ><a class="card" id="1_137" href="/1_137"
            ><p>I, 137. К Митре-Варуне</p></a
          ><a class="card" id="1_138" href="/1_138"><p>I, 138. К Пушану</p></a
          ><a class="card" id="1_139" href="/1_139"
            ><p>I, 139. Ко Всем-Богам</p></a
          ><a class="card" id="1_140" href="/1_140"><p>I, 140. К Агни</p></a
          ><a class="card" id="1_141" href="/1_141"><p>I, 141. К Агни</p></a
          ><a class="card" id="1_142" href="/1_142"><p>I, 142. Гимн-апри</p></a
          ><a class="card" id="1_143" href="/1_143"><p>I, 143. К Агни</p></a
          ><a class="card" id="1_144" href="/1_144"><p>I, 144. К Агни</p></a
          ><a class="card" id="1_145" href="/1_145"><p>I, 145. К Агни</p></a
          ><a class="card" id="1_146" href="/1_146"><p>I, 146. К Агни</p></a
          ><a class="card" id="1_147" href="/1_147"><p>I, 147. К Агни</p></a
          ><a class="card" id="1_148" href="/1_148"><p>I, 148. К Агни</p></a
          ><a class="card" id="1_149" href="/1_149"><p>I, 149. К Агни</p></a
          ><a class="card" id="1_150" href="/1_150"><p>I, 150. К Агни</p></a
          ><a class="card" id="1_151" href="/1_151"
            ><p>I, 151. К Митре-Варуне</p></a
          ><a class="card" id="1_152" href="/1_152"
            ><p>I, 152. К Митре-Варуне</p></a
          ><a class="card" id="1_153" href="/1_153"
            ><p>I, 153. К Митре-Варуне</p></a
          ><a class="card" id="1_154" href="/1_154"><p>I, 154. К Вишну</p></a
          ><a class="card" id="1_155" href="/1_155"><p>I, 155. К Вишну</p></a
          ><a class="card" id="1_156" href="/1_156"><p>I, 156. К Вишну</p></a
          ><a class="card" id="1_157" href="/1_157"><p>I, 157. К Ашвинам</p></a
          ><a class="card" id="1_158" href="/1_158"><p>I, 158. К Ашвинам</p></a
          ><a class="card" id="1_159" href="/1_159"
            ><p>I, 159. К Небу и Земле</p></a
          ><a class="card" id="1_160" href="/1_160"
            ><p>I, 160. К Небу и Земле</p></a
          ><a class="card" id="1_161" href="/1_161"><p>I, 161. К Рибху</p></a
          ><a class="card" id="1_162" href="/1_162"
            ><p>I, 162. Восхваление коня</p></a
          ><a class="card" id="1_163" href="/1_163"
            ><p>I, 163. Восхваление коня</p></a
          ><a class="card" id="1_164" href="/1_164"
            ><p>I, 164. Гимн-загадка</p></a
          ><a class="card" id="1_165" href="/1_165"
            ><p>I, 165. Разговор Индры, Марутов и Агастьи</p></a
          ><a class="card" id="1_166" href="/1_166"><p>I, 166. К Марутам</p></a
          ><a class="card" id="1_167" href="/1_167"><p>I, 167. К Марутам</p></a
          ><a class="card" id="1_168" href="/1_168"><p>I, 168. К Марутам</p></a
          ><a class="card" id="1_169" href="/1_169"><p>I, 169. К Индре</p></a
          ><a class="card" id="1_170" href="/1_170"
            ><p>I, 170. Разговор Агастьи и Марутов</p></a
          ><a class="card" id="1_171" href="/1_171"
            ><p>I, 171. К Марутам и Индре</p></a
          ><a class="card" id="1_172" href="/1_172"><p>I, 172. К Марутам</p></a
          ><a class="card" id="1_173" href="/1_173"><p>I, 173. К Индре</p></a
          ><a class="card" id="1_174" href="/1_174"><p>I, 174. К Индре</p></a
          ><a class="card" id="1_175" href="/1_175"><p>I, 175. К Индре</p></a
          ><a class="card" id="1_176" href="/1_176"><p>I, 176. К Индре</p></a
          ><a class="card" id="1_177" href="/1_177"><p>I, 177. К Индре</p></a
          ><a class="card" id="1_178" href="/1_178"><p>I, 178. К Индре</p></a
          ><a class="card" id="1_179" href="/1_179"
            ><p>I, 179. Агастья и Лопамудра</p></a
          ><a class="card" id="1_180" href="/1_180"><p>I, 180. К Ашвинам</p></a
          ><a class="card" id="1_181" href="/1_181"><p>I, 181. К Ашвинам</p></a
          ><a class="card" id="1_182" href="/1_182"><p>I, 182. К Ашвинам</p></a
          ><a class="card" id="1_183" href="/1_183"><p>I, 183. К Ашвинам</p></a
          ><a class="card" id="1_184" href="/1_184"><p>I, 184. К Ашвинам</p></a
          ><a class="card" id="1_185" href="/1_185"
            ><p>I, 185. К Небу и Земле</p></a
          ><a class="card" id="1_186" href="/1_186"
            ><p>I, 186. Ко Всем-Богам</p></a
          ><a class="card" id="1_187" href="/1_187"
            ><p>I, 187. Прославление пищи</p></a
          ><a class="card" id="1_188" href="/1_188"><p>I, 188. Гимн-апри</p></a
          ><a class="card" id="1_189" href="/1_189"><p>I, 189. К Агни</p></a
          ><a class="card" id="1_190" href="/1_190"
            ><p>I, 190. К Брихаспати</p></a
          ><a class="card" id="1_191" href="/1_191"
            ><p>I, 191. Заговор против ядовитых насекомых и змей</p></a
          ><a class="card" id="2_1" href="/2_1"><p>II, 1. К Агни</p></a
          ><a class="card" id="2_2" href="/2_2"><p>II, 2. К Агни</p></a
          ><a class="card" id="2_3" href="/2_3"><p>II, 3. Гимн-апри</p></a
          ><a class="card" id="2_4" href="/2_4"><p>II, 4. К Агни</p></a
          ><a class="card" id="2_5" href="/2_5"><p>II, 5. К Агни</p></a
          ><a class="card" id="2_6" href="/2_6"><p>II, 6. К Агни</p></a
          ><a class="card" id="2_7" href="/2_7"><p>II, 7. К Агни</p></a
          ><a class="card" id="2_8" href="/2_8"><p>II, 8. К Агни</p></a
          ><a class="card" id="2_9" href="/2_9"><p>II, 9. К Агни</p></a
          ><a class="card" id="2_10" href="/2_10"><p>II, 10. К Агни</p></a
          ><a class="card" id="2_11" href="/2_11"><p>II, 11. К Индре</p></a
          ><a class="card" id="2_12" href="/2_12"><p>II, 12. К Индре</p></a
          ><a class="card" id="2_13" href="/2_13"><p>II, 13. К Индре</p></a
          ><a class="card" id="2_14" href="/2_14"><p>II, 14. К Индре</p></a
          ><a class="card" id="2_15" href="/2_15"><p>II, 15. К Индре</p></a
          ><a class="card" id="2_16" href="/2_16"><p>II, 16. К Индре</p></a
          ><a class="card" id="2_17" href="/2_17"><p>II, 17. К Индре</p></a
          ><a class="card" id="2_18" href="/2_18"><p>II, 18. К Индре</p></a
          ><a class="card" id="2_19" href="/2_19"><p>II, 19. К Индре</p></a
          ><a class="card" id="2_20" href="/2_20"><p>II, 20. К Индре</p></a
          ><a class="card" id="2_21" href="/2_21"><p>II, 21. К Индре</p></a
          ><a class="card" id="2_22" href="/2_22"><p>II, 22. К Индре</p></a
          ><a class="card" id="2_23" href="/2_23"><p>II, 23. К Брихаспати</p></a
          ><a class="card" id="2_24" href="/2_24"
            ><p>II, 24. К Брахманаспати</p></a
          ><a class="card" id="2_25" href="/2_25"
            ><p>II, 25. К Брахманаспати</p></a
          ><a class="card" id="2_26" href="/2_26"
            ><p>II, 26. К Брахманаспати</p></a
          ><a class="card" id="2_27" href="/2_27"><p>II, 27. К Адитьям</p></a
          ><a class="card" id="2_28" href="/2_28"><p>II, 28. К Варуне</p></a
          ><a class="card" id="2_29" href="/2_29"><p>II, 29. Ко Всем-Богам</p></a
          ><a class="card" id="2_30" href="/2_30"
            ><p>II, 30. К Индре и другим богам</p></a
          ><a class="card" id="2_31" href="/2_31"><p>II, 31. Ко Всем-Богам</p></a
          ><a class="card" id="2_32" href="/2_32"
            ><p>II, 32. К разным богам</p></a
          ><a class="card" id="2_33" href="/2_33"><p>II, 33. К Рудре</p></a
          ><a class="card" id="2_34" href="/2_34"><p>II, 34. К Марутам</p></a
          ><a class="card" id="2_35" href="/2_35"><p>II, 35. К Апам Напату</p></a
          ><a class="card" id="2_36" href="/2_36"
            ><p>II, 36. К божествам, получающим жертвы в урочное время</p></a
          ><a class="card" id="2_37" href="/2_37"
            ><p>II, 37. К божествам, получающим жертвы в урочное время</p></a
          ><a class="card" id="2_38" href="/2_38"><p>II, 38. К Савитару</p></a
          ><a class="card" id="2_39" href="/2_39"><p>II, 39. К Ашвинам</p></a
          ><a class="card" id="2_40" href="/2_40"
            ><p>II, 40. К Соме и Пушану</p></a
          ><a class="card" id="2_41" href="/2_41"
            ><p>II, 41. К разным богам</p></a
          ><a class="card" id="2_42" href="/2_42"><p>II, 42. К вещей птице</p></a
          ><a class="card" id="2_43" href="/2_43"><p>II, 43. К вещей птице</p></a
          ><a class="card" id="3_1" href="/3_1"><p>III, 1. К Агни</p></a
          ><a class="card" id="3_2" href="/3_2"
            ><p>III, 2. К Агни Вайшванаре</p></a
          ><a class="card" id="3_3" href="/3_3"
            ><p>III, 3. К Агни-Вайшванаре</p></a
          ><a class="card" id="3_4" href="/3_4"><p>III, 4. Гимн-апри</p></a
          ><a class="card" id="3_5" href="/3_5"><p>III, 5. К Агни</p></a
          ><a class="card" id="3_6" href="/3_6"><p>III, 6. К Агни</p></a
          ><a class="card" id="3_7" href="/3_7"><p>III, 7. К Агни</p></a
          ><a class="card" id="3_8" href="/3_8"
            ><p>III, 8. К жертвенному столбу</p></a
          ><a class="card" id="3_9" href="/3_9"><p>III, 9. К Агни</p></a
          ><a class="card" id="3_10" href="/3_10"><p>III, 10. К Агни</p></a
          ><a class="card" id="3_11" href="/3_11"><p>III, И. К Агни</p></a
          ><a class="card" id="3_12" href="/3_12"
            ><p>III, 12. К Индре и Агни</p></a
          ><a class="card" id="3_13" href="/3_13"><p>III, 13. К Агни</p></a
          ><a class="card" id="3_14" href="/3_14"><p>III, 14. К Агни</p></a
          ><a class="card" id="3_15" href="/3_15"><p>III, 15. К Агни</p></a
          ><a class="card" id="3_16" href="/3_16"><p>III, 16. К Агни</p></a
          ><a class="card" id="3_17" href="/3_17"><p>III, 17. К Агни</p></a
          ><a class="card" id="3_18" href="/3_18"><p>III, 18. К Агни</p></a
          ><a class="card" id="3_19" href="/3_19"><p>III, 19. К Агни</p></a
          ><a class="card" id="3_20" href="/3_20"
            ><p>III, 20. К Агни и Всем-Богам</p></a
          ><a class="card" id="3_21" href="/3_21"><p>III, 21. К Агни</p></a
          ><a class="card" id="3_22" href="/3_22"><p>III, 22. К Агни</p></a
          ><a class="card" id="3_23" href="/3_23"><p>III, 23. К Агни</p></a
          ><a class="card" id="3_24" href="/3_24"><p>III, 24. К Агни</p></a
          ><a class="card" id="3_25" href="/3_25"><p>III, 25. К Агни</p></a
          ><a class="card" id="3_26" href="/3_26"
            ><p>III, 26. К Агни Вайшванаре</p></a
          ><a class="card" id="3_27" href="/3_27"><p>III, 27. К Агни</p></a
          ><a class="card" id="3_28" href="/3_28"><p>III, 28. К Агни</p></a
          ><a class="card" id="3_29" href="/3_29"><p>III, 29. К Агни</p></a
          ><a class="card" id="3_30" href="/3_30"><p>III, 30. К Индре</p></a
          ><a class="card" id="3_31" href="/3_31"><p>III, 31. К Индре</p></a
          ><a class="card" id="3_32" href="/3_32"><p>III, 32. К Индре</p></a
          ><a class="card" id="3_33" href="/3_33"
            ><p>III, 33. Вишвамитра и реки</p></a
          ><a class="card" id="3_34" href="/3_34"><p>III, 34. К Индре</p></a
          ><a class="card" id="3_35" href="/3_35"><p>III, 35. К Индре</p></a
          ><a class="card" id="3_36" href="/3_36"><p>III, 36. К Индре</p></a
          ><a class="card" id="3_37" href="/3_37"><p>III, 37. К Индре</p></a
          ><a class="card" id="3_38" href="/3_38"><p>III, 38. К Индреу</p></a
          ><a class="card" id="3_39" href="/3_39"><p>III, 39. К Индре</p></a
          ><a class="card" id="3_40" href="/3_40"><p>III, 40. К Индре</p></a
          ><a class="card" id="3_41" href="/3_41"><p>III, 41. К Индре</p></a
          ><a class="card" id="3_42" href="/3_42"><p>III, 42. К Индре</p></a
          ><a class="card" id="3_43" href="/3_43"><p>III, 43. К Индре</p></a
          ><a class="card" id="3_44" href="/3_44"><p>III, 44. К Индре</p></a
          ><a class="card" id="3_45" href="/3_45"><p>III, 45. К Индре</p></a
          ><a class="card" id="3_46" href="/3_46"><p>III, 46. К Индре</p></a
          ><a class="card" id="3_47" href="/3_47"><p>III, 47. К Индре</p></a
          ><a class="card" id="3_48" href="/3_48"><p>III, 48. К Индре</p></a
          ><a class="card" id="3_49" href="/3_49"><p>III, 49. К Индре</p></a
          ><a class="card" id="3_50" href="/3_50"><p>III, 50. К Индре</p></a
          ><a class="card" id="3_51" href="/3_51"><p>III, 51. К Индре</p></a
          ><a class="card" id="3_52" href="/3_52"><p>III, 52. К Индре</p></a
          ><a class="card" id="3_53" href="/3_53"><p>III, 53. К Индро</p></a
          ><a class="card" id="3_54" href="/3_54"
            ><p>III, 54. Ко Всем-Богам</p></a
          ><a class="card" id="3_55" href="/3_55"
            ><p>III, 55. Ко Всем-Богам</p></a
          ><a class="card" id="3_56" href="/3_56"
            ><p>III, 56. Ко Всем-Богам</p></a
          ><a class="card" id="3_57" href="/3_57"
            ><p>III, 57. Ко Всем-Богам</p></a
          ><a class="card" id="3_58" href="/3_58"><p>III, 58. К Ашвинам</p></a
          ><a class="card" id="3_59" href="/3_59"><p>III, 59. К Митре</p></a
          ><a class="card" id="3_60" href="/3_60"><p>III, 60. К Рибху</p></a
          ><a class="card" id="3_61" href="/3_61"><p>III, 61. К Ушас</p></a
          ><a class="card" id="3_62" href="/3_62"
            ><p>III, 62. К разным богам</p></a
          ><a class="card" id="4_1" href="/4_1"><p>IV, 1. К Агни</p></a
          ><a class="card" id="4_2" href="/4_2"><p>IV, 2. К Агни</p></a
          ><a class="card" id="4_3" href="/4_3"><p>IV, 3. К Агни</p></a
          ><a class="card" id="4_4" href="/4_4"
            ><p>IV, 4. К Агни – убийце ракшасов</p></a
          ><a class="card" id="4_5" href="/4_5"
            ><p>IV, 5. К Агни-Вайшванаре</p></a
          ><a class="card" id="4_6" href="/4_6"><p>IV, 6. К Агни</p></a
          ><a class="card" id="4_7" href="/4_7"><p>IV, 7. К Агни</p></a
          ><a class="card" id="4_8" href="/4_8"><p>IV, 8. К Агни</p></a
          ><a class="card" id="4_9" href="/4_9"><p>IV, 9. К Агни</p></a
          ><a class="card" id="4_10" href="/4_10"><p>IV, 10. К Агни</p></a
          ><a class="card" id="4_11" href="/4_11"><p>IV, 11. К Агни</p></a
          ><a class="card" id="4_12" href="/4_12"><p>IV, 12. К Агни</p></a
          ><a class="card" id="4_13" href="/4_13"><p>IV, 13. К Агни</p></a
          ><a class="card" id="4_14" href="/4_14"><p>IV, 14. К Агни</p></a
          ><a class="card" id="4_15" href="/4_15"><p>IV, 15. К Агни</p></a
          ><a class="card" id="4_16" href="/4_16"><p>IV, 16. К Индре</p></a
          ><a class="card" id="4_17" href="/4_17"><p>IV, 17. К Индре</p></a
          ><a class="card" id="4_18" href="/4_18"
            ><p>IV, 18. Разговор Индры, Адиги и Вамадевы</p></a
          ><a class="card" id="4_19" href="/4_19"><p>IV, 19. К Индре</p></a
          ><a class="card" id="4_20" href="/4_20"><p>IV, 20. Я Индре</p></a
          ><a class="card" id="4_21" href="/4_21"><p>IV, 21. К Индре</p></a
          ><a class="card" id="4_22" href="/4_22"><p>IV, 22. К Индре</p></a
          ><a class="card" id="4_23" href="/4_23"><p>IV, 23. К Индре</p></a
          ><a class="card" id="4_24" href="/4_24"><p>IV, 24. К Индре</p></a
          ><a class="card" id="4_25" href="/4_25"><p>IV, 25. К Индре</p></a
          ><a class="card" id="4_26" href="/4_26"><p>IV, 26. К Индре</p></a
          ><a class="card" id="4_27" href="/4_27"><p>IV, 27. Сома и орел</p></a
          ><a class="card" id="4_28" href="/4_28"
            ><p>IV, 28. К Индре и Соме</p></a
          ><a class="card" id="4_29" href="/4_29"><p>IV, 29. К Индре</p></a
          ><a class="card" id="4_30" href="/4_30"><p>IV, 30. К Индре</p></a
          ><a class="card" id="4_31" href="/4_31"><p>IV, 31. К Индре</p></a
          ><a class="card" id="4_32" href="/4_32"><p>IV, 32. К Индре</p></a
          ><a class="card" id="4_33" href="/4_33"><p>IV, 33. К Рибху</p></a
          ><a class="card" id="4_34" href="/4_34"><p>IV, 34. К Рибху</p></a
          ><a class="card" id="4_35" href="/4_35"><p>IV, 35. К Рибху</p></a
          ><a class="card" id="4_36" href="/4_36"><p>IV, 36. К Рибху</p></a
          ><a class="card" id="4_37" href="/4_37"><p>IV, 37. К Рибху</p></a
          ><a class="card" id="4_38" href="/4_38"><p>IV, 38. К Дадхикра</p></a
          ><a class="card" id="4_39" href="/4_39"><p>IV, 39. К Дадхикра</p></a
          ><a class="card" id="4_40" href="/4_40"
            ><p>IV, 40. К Дадхикравану</p></a
          ><a class="card" id="4_41" href="/4_41"
            ><p>IV, 41. К Индре и Варуне</p></a
          ><a class="card" id="4_42" href="/4_42"
            ><p>IV, 42. К Индре и Варуне</p></a
          ><a class="card" id="4_43" href="/4_43"><p>IV, 43. К Ашвинам</p></a
          ><a class="card" id="4_44" href="/4_44"><p>IV, 44. К Ашвинам</p></a
          ><a class="card" id="4_45" href="/4_45"><p>IV, 45. К Ашвинаму</p></a
          ><a class="card" id="4_46" href="/4_46"
            ><p>IV, 46. К Ваю, Индре и Ваю</p></a
          ><a class="card" id="4_47" href="/4_47"
            ><p>IV, 47. К Ваю, Индре и Ваю</p></a
          ><a class="card" id="4_48" href="/4_48"><p>IV, 48. К Ваю</p></a
          ><a class="card" id="4_49" href="/4_49"
            ><p>IV, 49. К Индре и Брихаспати</p></a
          ><a class="card" id="4_50" href="/4_50"><p>IV, 50. К Брихаспати</p></a
          ><a class="card" id="4_51" href="/4_51"><p>IV, 51. К Ушас</p></a
          ><a class="card" id="4_52" href="/4_52"><p>IV, 52. Я Ушас</p></a
          ><a class="card" id="4_53" href="/4_53"><p>IV, 53. К Савитару</p></a
          ><a class="card" id="4_54" href="/4_54"><p>IV, 54. К Савитару</p></a
          ><a class="card" id="4_55" href="/4_55"><p>IV, 55. Ко Всем-Богам</p></a
          ><a class="card" id="4_56" href="/4_56"
            ><p>IV, 56. К Небу и Земле</p></a
          ><a class="card" id="4_57" href="/4_57"
            ><p>IV, 57. К божествам поля</p></a
          ><a class="card" id="4_58" href="/4_58"><p>IV, 58. К жиру</p></a
          ><a class="card" id="5_1" href="/5_1"><p>V, 1. К Агни</p></a
          ><a class="card" id="5_2" href="/5_2"><p>V, 2. К Агни</p></a
          ><a class="card" id="5_3" href="/5_3"><p>V, 3. К Агни</p></a
          ><a class="card" id="5_4" href="/5_4"><p>V, 4. К Агни</p></a
          ><a class="card" id="5_5" href="/5_5"><p>V, 5. Гимн-апри</p></a
          ><a class="card" id="5_6" href="/5_6"><p>V, 6. К Агни</p></a
          ><a class="card" id="5_7" href="/5_7"><p>V, 7. К Агни</p></a
          ><a class="card" id="5_8" href="/5_8"><p>V, 8. К Агни</p></a
          ><a class="card" id="5_9" href="/5_9"><p>V, 9. К Агни</p></a
          ><a class="card" id="5_10" href="/5_10"><p>V, 10. К Агни</p></a
          ><a class="card" id="5_11" href="/5_11"><p>V, 11. К Агни</p></a
          ><a class="card" id="5_12" href="/5_12"><p>V, 12. К Агни</p></a
          ><a class="card" id="5_13" href="/5_13"><p>V, 13. К Агни</p></a
          ><a class="card" id="5_14" href="/5_14"><p>V, 14. К Агни</p></a
          ><a class="card" id="5_15" href="/5_15"><p>V, 15. К Агни</p></a
          ><a class="card" id="5_16" href="/5_16"><p>V, 16. К Агни</p></a
          ><a class="card" id="5_17" href="/5_17"><p>V, 17. К Агни</p></a
          ><a class="card" id="5_18" href="/5_18"><p>V, 18. К Агни</p></a
          ><a class="card" id="5_19" href="/5_19"><p>V, 19. К Агни</p></a
          ><a class="card" id="5_20" href="/5_20"><p>V, 20. К Агни</p></a
          ><a class="card" id="5_21" href="/5_21"><p>V, 21. К Агни</p></a
          ><a class="card" id="5_22" href="/5_22"><p>V, 22. К Агни</p></a
          ><a class="card" id="5_23" href="/5_23"><p>V, 23. К Агни</p></a
          ><a class="card" id="5_24" href="/5_24"><p>V, 24. К Агни</p></a
          ><a class="card" id="5_25" href="/5_25"><p>V, 25. К Агни</p></a
          ><a class="card" id="5_26" href="/5_26"><p>V, 26. К Агни</p></a
          ><a class="card" id="5_27" href="/5_27"><p>V, 27. К Агни</p></a
          ><a class="card" id="5_28" href="/5_28"><p>V, 28. К Агни</p></a
          ><a class="card" id="5_29" href="/5_29"><p>V, 29. К Индре</p></a
          ><a class="card" id="5_30" href="/5_30"><p>V, 30. К Индре</p></a
          ><a class="card" id="5_31" href="/5_31"><p>V, 31. К Индре</p></a
          ><a class="card" id="5_32" href="/5_32"><p>V, 32. К Индре</p></a
          ><a class="card" id="5_33" href="/5_33"><p>V, 33. К Индре</p></a
          ><a class="card" id="5_34" href="/5_34"><p>V, 34. К Индре</p></a
          ><a class="card" id="5_35" href="/5_35"><p>V, 35. К Индре</p></a
          ><a class="card" id="5_36" href="/5_36"><p>V, 36. К Индре</p></a
          ><a class="card" id="5_37" href="/5_37"><p>V, 37. К Индре</p></a
          ><a class="card" id="5_38" href="/5_38"><p>V, 38. К Индре</p></a
          ><a class="card" id="5_39" href="/5_39"><p>V, 39. К Индре</p></a
          ><a class="card" id="5_40" href="/5_40"
            ><p>V, 40. К Индре, Сурье, Атри</p></a
          ><a class="card" id="5_41" href="/5_41"><p>V, 41. Ко Всем-Богам</p></a
          ><a class="card" id="5_42" href="/5_42"><p>V, 42. Ко Всем-Богам</p></a
          ><a class="card" id="5_43" href="/5_43"><p>V, 43. Ко Всем-Богам</p></a
          ><a class="card" id="5_44" href="/5_44"><p>V, 44. Ко Всем-Богам</p></a
          ><a class="card" id="5_45" href="/5_45"><p>V, 45. Ко Всем-Богам</p></a
          ><a class="card" id="5_46" href="/5_46"><p>V, 46. Ко Всем-Богам</p></a
          ><a class="card" id="5_47" href="/5_47"><p>V, 47. Ко Всем-Богам</p></a
          ><a class="card" id="5_48" href="/5_48"><p>V, 48. Ко Всем-Богам</p></a
          ><a class="card" id="5_49" href="/5_49"><p>V, 49. Ко Всем-Богам</p></a
          ><a class="card" id="5_50" href="/5_50"><p>V, 50. Ко Всем-Богам</p></a
          ><a class="card" id="5_51" href="/5_51"><p>V, 51. Ко Всем-Богам</p></a
          ><a class="card" id="5_52" href="/5_52"><p>V, 52. К Марутам</p></a
          ><a class="card" id="5_53" href="/5_53"><p>V, 53. К Марутам</p></a
          ><a class="card" id="5_54" href="/5_54"><p>V, 54. К Марутам</p></a
          ><a class="card" id="5_55" href="/5_55"><p>V, 55. К Марутам</p></a
          ><a class="card" id="5_56" href="/5_56"><p>V, 56. К Марутам</p></a
          ><a class="card" id="5_57" href="/5_57"><p>V, 57. К Марутам</p></a
          ><a class="card" id="5_58" href="/5_58"><p>V, 58. К Марутам</p></a
          ><a class="card" id="5_59" href="/5_59"><p>V, 59. К Марутам</p></a
          ><a class="card" id="5_60" href="/5_60"><p>V, 60. К Марутам</p></a
          ><a class="card" id="5_61" href="/5_61"
            ><p>V, 61. Маруты и Шьявашва</p></a
          ><a class="card" id="5_62" href="/5_62"><p>V, 62. К Митре-Варуне</p></a
          ><a class="card" id="5_63" href="/5_63"><p>V, 63. К Митре-Варуне</p></a
          ><a class="card" id="5_64" href="/5_64"><p>V, 64. К Митре-Варуне</p></a
          ><a class="card" id="5_65" href="/5_65"><p>V, 65. К Митре-Варуне</p></a
          ><a class="card" id="5_66" href="/5_66"><p>V, 66. К Митре-Варуне</p></a
          ><a class="card" id="5_67" href="/5_67"><p>V, 67. К Митре-Варуне</p></a
          ><a class="card" id="5_68" href="/5_68"><p>V, 68. К Митре-Варуне</p></a
          ><a class="card" id="5_69" href="/5_69"><p>V, 69. К Митре-Варуне</p></a
          ><a class="card" id="5_70" href="/5_70"><p>V, 70. К Митре-Варуне</p></a
          ><a class="card" id="5_71" href="/5_71"><p>V, 71. К Митре-Варуне</p></a
          ><a class="card" id="5_72" href="/5_72"><p>V, 72. К Митре-Варуне</p></a
          ><a class="card" id="5_73" href="/5_73"><p>V, 73. К Ашвинам</p></a
          ><a class="card" id="5_74" href="/5_74"><p>V, 74. К Ашвинам</p></a
          ><a class="card" id="5_75" href="/5_75"><p>V, 75. К Ашвинам</p></a
          ><a class="card" id="5_76" href="/5_76"><p>V, 76. К Ашвинам</p></a
          ><a class="card" id="5_77" href="/5_77"><p>V, 77. К Ашвинам</p></a
          ><a class="card" id="5_78" href="/5_78"><p>V, 78. К Ашвинам</p></a
          ><a class="card" id="5_79" href="/5_79"><p>V, 79. К Ушас</p></a
          ><a class="card" id="5_80" href="/5_80"><p>V, 80. К Ушас</p></a
          ><a class="card" id="5_81" href="/5_81"><p>V, 81. К Савитару</p></a
          ><a class="card" id="5_82" href="/5_82"><p>V, 82. К Савитару</p></a
          ><a class="card" id="5_83" href="/5_83"><p>V, 83. К Парджанье</p></a
          ><a class="card" id="5_84" href="/5_84"><p>V, 84. К Земле</p></a
          ><a class="card" id="5_85" href="/5_85"><p>V, 85. К Варуне</p></a
          ><a class="card" id="5_86" href="/5_86"><p>V, 86. К Индре-Агни</p></a
          ><a class="card" id="5_87" href="/5_87"><p>V, 87. К Марутам</p></a
          ><a class="card" id="6_1" href="/6_1"><p>VI, 1. К Агни</p></a
          ><a class="card" id="6_2" href="/6_2"><p>VI, 2. К Агни</p></a
          ><a class="card" id="6_3" href="/6_3"><p>VI, 3. К Агни</p></a
          ><a class="card" id="6_4" href="/6_4"><p>VI, 4. К Агни</p></a
          ><a class="card" id="6_5" href="/6_5"><p>VI, 5. К Агни</p></a
          ><a class="card" id="6_6" href="/6_6"><p>VI, 6. К Агни</p></a
          ><a class="card" id="6_7" href="/6_7"
            ><p>VI, 7. К Агни-Вайшванаре</p></a
          ><a class="card" id="6_8" href="/6_8"
            ><p>VI, 8. К Агни-Вайшванаре</p></a
          ><a class="card" id="6_9" href="/6_9"
            ><p>VI, 9. К Агни-Вайшванаре</p></a
          ><a class="card" id="6_10" href="/6_10"><p>VI, 10. К Агни</p></a
          ><a class="card" id="6_11" href="/6_11"><p>VI, 11. К Агни</p></a
          ><a class="card" id="6_12" href="/6_12"><p>VI, 12. К Агни</p></a
          ><a class="card" id="6_13" href="/6_13"><p>VI, 13. К Агни</p></a
          ><a class="card" id="6_14" href="/6_14"><p>VI, 14. К Агни</p></a
          ><a class="card" id="6_15" href="/6_15"><p>VI, 15. К Агни</p></a
          ><a class="card" id="6_16" href="/6_16"><p>VI, 16. К Агни</p></a
          ><a class="card" id="6_17" href="/6_17"><p>VI, 17. К Индре</p></a
          ><a class="card" id="6_18" href="/6_18"><p>VI, 18. К Индре</p></a
          ><a class="card" id="6_19" href="/6_19"><p>VI, 19. К Индре</p></a
          ><a class="card" id="6_20" href="/6_20"><p>VI, 20. К Индре</p></a
          ><a class="card" id="6_21" href="/6_21"><p>VI, 21. К Индре</p></a
          ><a class="card" id="6_22" href="/6_22"><p>VI, 22. К Индре</p></a
          ><a class="card" id="6_23" href="/6_23"><p>VI, 23. К Индре</p></a
          ><a class="card" id="6_24" href="/6_24"><p>VI, 24. К Индре</p></a
          ><a class="card" id="6_25" href="/6_25"><p>VI, 25. К Индре</p></a
          ><a class="card" id="6_26" href="/6_26"><p>VI, 26. К Индре</p></a
          ><a class="card" id="6_27" href="/6_27"><p>VI, 27. К Индре</p></a
          ><a class="card" id="6_28" href="/6_28"
            ><p>VI, 28. К коровам и Индре</p></a
          ><a class="card" id="6_29" href="/6_29"><p>VI, 29. К Индре</p></a
          ><a class="card" id="6_30" href="/6_30"><p>VI, 30. К Индре</p></a
          ><a class="card" id="6_31" href="/6_31"><p>VI, 31. К Индре</p></a
          ><a class="card" id="6_32" href="/6_32"><p>VI, 32. К Индре</p></a
          ><a class="card" id="6_33" href="/6_33"><p>VI, 33. К Индре</p></a
          ><a class="card" id="6_34" href="/6_34"><p>VI, 34. К Индре</p></a
          ><a class="card" id="6_35" href="/6_35"><p>VI, 35. К Индре</p></a
          ><a class="card" id="6_36" href="/6_36"><p>VI, 36. К Индре</p></a
          ><a class="card" id="6_37" href="/6_37"><p>VI, 37. К Индре</p></a
          ><a class="card" id="6_38" href="/6_38"><p>VI, 38. К Индре</p></a
          ><a class="card" id="6_39" href="/6_39"><p>VI, 39. К Индре</p></a
          ><a class="card" id="6_40" href="/6_40"><p>VI, 40. К Индре</p></a
          ><a class="card" id="6_41" href="/6_41"><p>VI, 41. К Индре</p></a
          ><a class="card" id="6_42" href="/6_42"><p>VI, 42. К Индре</p></a
          ><a class="card" id="6_43" href="/6_43"><p>VI, 43. К Индре</p></a
          ><a class="card" id="6_44" href="/6_44"><p>VI, 44. К Индре</p></a
          ><a class="card" id="6_45" href="/6_45"><p>VI, 45. К Индре</p></a
          ><a class="card" id="6_46" href="/6_46"><p>VI, 46. К Индре</p></a
          ><a class="card" id="6_47" href="/6_47"
            ><p>VI, 47. Соме, Индре и др.</p></a
          ><a class="card" id="6_48" href="/6_48"
            ><p>VI, 48. К Агни, Марутам, Пушану</p></a
          ><a class="card" id="6_49" href="/6_49"><p>VI, 49. Ко Всем-Богам</p></a
          ><a class="card" id="6_50" href="/6_50"><p>VI, 50. Ко Всем-Богам</p></a
          ><a class="card" id="6_51" href="/6_51"><p>VI, 51. Ко Всем-Богам</p></a
          ><a class="card" id="6_52" href="/6_52"><p>VI, 52. Ко Всем-Богам</p></a
          ><a class="card" id="6_53" href="/6_53"><p>VI, 53. К Пушану</p></a
          ><a class="card" id="6_54" href="/6_54"><p>VI, 54. К Пушану</p></a
          ><a class="card" id="6_55" href="/6_55"><p>VI, 55. К Пушану</p></a
          ><a class="card" id="6_56" href="/6_56"><p>VI, 56. К Пушану</p></a
          ><a class="card" id="6_57" href="/6_57"
            ><p>VI, 57. К Пушану и Индре</p></a
          ><a class="card" id="6_58" href="/6_58"><p>VI, 58. К Пушану</p></a
          ><a class="card" id="6_59" href="/6_59"
            ><p>VI, 59. К Индре и Агни</p></a
          ><a class="card" id="6_60" href="/6_60"
            ><p>VI, 60. К Индре и Агни</p></a
          ><a class="card" id="6_61" href="/6_61"><p>VI, 61. К Сарасвати</p></a
          ><a class="card" id="6_62" href="/6_62"><p>VI, 62. К Ашвинам</p></a
          ><a class="card" id="6_63" href="/6_63"><p>VI, 63. К Ашвинам</p></a
          ><a class="card" id="6_64" href="/6_64"><p>VI, 64. К Ушас</p></a
          ><a class="card" id="6_65" href="/6_65"><p>VI, 65. К Ушас</p></a
          ><a class="card" id="6_66" href="/6_66"><p>VI, 66. К Марутам</p></a
          ><a class="card" id="6_67" href="/6_67"
            ><p>VI, 67. К Митре-Варуне</p></a
          ><a class="card" id="6_68" href="/6_68"
            ><p>VI, 68. К Индре-Варуне</p></a
          ><a class="card" id="6_69" href="/6_69"><p>VI, 69. К Индре-Вишну</p></a
          ><a class="card" id="6_70" href="/6_70"
            ><p>VI, 70. К Небу-и-Земле</p></a
          ><a class="card" id="6_71" href="/6_71"><p>VI, 71. К Савитару</p></a
          ><a class="card" id="6_72" href="/6_72"><p>VI, 72. К Индре-Соме</p></a
          ><a class="card" id="6_73" href="/6_73"><p>VI, 73. К Брихаспати</p></a
          ><a class="card" id="6_74" href="/6_74"><p>VI, 74. К Соме-Рудре</p></a
          ><a class="card" id="6_75" href="/6_75"><p>VI, 75. К оружию</p></a
          ><a class="card" id="7_1" href="/7_1"><p>VII, 1. К Агни</p></a
          ><a class="card" id="7_2" href="/7_2"><p>VII, 2. Гимн-апри</p></a
          ><a class="card" id="7_3" href="/7_3"><p>VII, 3. К Агни</p></a
          ><a class="card" id="7_4" href="/7_4"><p>VII, 4. К Агни</p></a
          ><a class="card" id="7_5" href="/7_5"
            ><p>VII, 5. К Агни-Вайшванаре</p></a
          ><a class="card" id="7_6" href="/7_6"
            ><p>VII, 6. К Агни-Вайшванаре</p></a
          ><a class="card" id="7_7" href="/7_7"><p>VII, 7. К Агни</p></a
          ><a class="card" id="7_8" href="/7_8"><p>VII, 8. К Агни</p></a
          ><a class="card" id="7_9" href="/7_9"><p>VII, 9. К Агни</p></a
          ><a class="card" id="7_10" href="/7_10"><p>VII, 10. К Агни</p></a
          ><a class="card" id="7_11" href="/7_11"><p>VII, 11. К Агни</p></a
          ><a class="card" id="7_12" href="/7_12"><p>VII, 12. К Агни</p></a
          ><a class="card" id="7_13" href="/7_13"
            ><p>VII, 13. К Агни-Вайшванаре</p></a
          ><a class="card" id="7_14" href="/7_14"><p>VII, 14. К Агни</p></a
          ><a class="card" id="7_15" href="/7_15"><p>VII, 15. К Агни</p></a
          ><a class="card" id="7_16" href="/7_16"><p>VII, 16. К Агни</p></a
          ><a class="card" id="7_17" href="/7_17"><p>VII, 17. К Агни</p></a
          ><a class="card" id="7_18" href="/7_18"><p>VII, 18. К Индре</p></a
          ><a class="card" id="7_19" href="/7_19"><p>VII, 19. К Индре</p></a
          ><a class="card" id="7_20" href="/7_20"><p>VII, 20. К Индре</p></a
          ><a class="card" id="7_21" href="/7_21"><p>VII, 21. К Индре</p></a
          ><a class="card" id="7_22" href="/7_22"><p>VII, 22. К Индре</p></a
          ><a class="card" id="7_23" href="/7_23"><p>VII, 23. К Индре</p></a
          ><a class="card" id="7_24" href="/7_24"><p>VII, 24. К Индре</p></a
          ><a class="card" id="7_25" href="/7_25"><p>VII, 25. К Индре</p></a
          ><a class="card" id="7_26" href="/7_26"><p>VII, 26. К Индре</p></a
          ><a class="card" id="7_27" href="/7_27"><p>VII, 27. К Индре</p></a
          ><a class="card" id="7_28" href="/7_28"><p>VII, 28. К Индре</p></a
          ><a class="card" id="7_29" href="/7_29"><p>VII, 29. К Индре</p></a
          ><a class="card" id="7_30" href="/7_30"><p>VII, 30. К Индре</p></a
          ><a class="card" id="7_31" href="/7_31"><p>VII, 31. К Индре</p></a
          ><a class="card" id="7_32" href="/7_32"><p>VII, 32. К Индре</p></a
          ><a class="card" id="7_33" href="/7_33"
            ><p>VII, 33. Гимн Васиштхам</p></a
          ><a class="card" id="7_34" href="/7_34"
            ><p>VII, 34. Ко Всем-Богам</p></a
          ><a class="card" id="7_35" href="/7_35"
            ><p>VII, 35. Ко Всем-Богам</p></a
          ><a class="card" id="7_36" href="/7_36"
            ><p>VII, 36. Ко Всем-Богам</p></a
          ><a class="card" id="7_37" href="/7_37"
            ><p>VII, 37. Ко Всем-Богам</p></a
          ><a class="card" id="7_38" href="/7_38"
            ><p>VII, 38. К Савитару и другим богам</p></a
          ><a class="card" id="7_39" href="/7_39"
            ><p>VII, 39. Ко Всем-Богам</p></a
          ><a class="card" id="7_40" href="/7_40"
            ><p>VII, 40. Ко Всем-Богам</p></a
          ><a class="card" id="7_41" href="/7_41"
            ><p>VII, 41. К Бхаге и другим богам</p></a
          ><a class="card" id="7_42" href="/7_42"
            ><p>VII, 42. Ко Всем-Богам</p></a
          ><a class="card" id="7_43" href="/7_43"
            ><p>VII, 43. Ко Всем-Богам</p></a
          ><a class="card" id="7_44" href="/7_44"><p>VII, 44. К Дадхикра</p></a
          ><a class="card" id="7_45" href="/7_45"><p>VII, 45. К Савитару</p></a
          ><a class="card" id="7_46" href="/7_46"><p>VII, 46. К Рудре</p></a
          ><a class="card" id="7_47" href="/7_47"><p>VII, 47. К водам</p></a
          ><a class="card" id="7_48" href="/7_48"><p>VII, 48. К Рибху</p></a
          ><a class="card" id="7_49" href="/7_49"><p>VII, 49. К водам</p></a
          ><a class="card" id="7_50" href="/7_50"
            ><p>VII, 50. К разным богам</p></a
          ><a class="card" id="7_51" href="/7_51"><p>VII, 51. К Адитьям</p></a
          ><a class="card" id="7_52" href="/7_52"><p>VII, 52. К Адитьям</p></a
          ><a class="card" id="7_53" href="/7_53"
            ><p>VII, 53. К Небу-и-Земле</p></a
          ><a class="card" id="7_54" href="/7_54"><p>VII, 54. К Вастошпати</p></a
          ><a class="card" id="7_55" href="/7_55"
            ><p>VII, 55. Гимн-усыпление</p></a
          ><a class="card" id="7_56" href="/7_56"><p>VII, 56. К Марутам</p></a
          ><a class="card" id="7_57" href="/7_57"><p>VII, 57. К Марутам</p></a
          ><a class="card" id="7_58" href="/7_58"><p>VII, 58. К Марутам</p></a
          ><a class="card" id="7_59" href="/7_59"><p>VII, 59. К Марутам</p></a
          ><a class="card" id="7_60" href="/7_60"
            ><p>VII, 60. К Митре-Варуне</p></a
          ><a class="card" id="7_61" href="/7_61"
            ><p>VII, 61. К Митре-Варуне</p></a
          ><a class="card" id="7_62" href="/7_62"
            ><p>VII, 62. К Сурье, Митре и Варуне</p></a
          ><a class="card" id="7_63" href="/7_63"
            ><p>VII, 63. К Сурье, Митре-Варуне</p></a
          ><a class="card" id="7_64" href="/7_64"
            ><p>VII, 64. К Митре-Варуне</p></a
          ><a class="card" id="7_65" href="/7_65"
            ><p>VII, 65. К Митре-Варуне</p></a
          ><a class="card" id="7_66" href="/7_66"
            ><p>VII, 66. К Митре-Варуне, Адитьям, Сурье</p></a
          ><a class="card" id="7_67" href="/7_67"><p>VII, 67. К Ашвинам</p></a
          ><a class="card" id="7_68" href="/7_68"><p>VII, 68. К Ашвинам</p></a
          ><a class="card" id="7_69" href="/7_69"><p>VII, 69. К Ашвинам</p></a
          ><a class="card" id="7_70" href="/7_70"><p>VII, 70. К Ашвинам</p></a
          ><a class="card" id="7_71" href="/7_71"><p>VII, 71. К Ашвинам</p></a
          ><a class="card" id="7_72" href="/7_72"><p>VII, 72. К Ашвинам</p></a
          ><a class="card" id="7_73" href="/7_73"><p>VII, 73. К Ашвинам</p></a
          ><a class="card" id="7_74" href="/7_74"><p>VII, 74. К Ашвинам</p></a
          ><a class="card" id="7_75" href="/7_75"><p>VII, 75. К Ушас</p></a
          ><a class="card" id="7_76" href="/7_76"><p>VII, 76. К Ушас</p></a
          ><a class="card" id="7_77" href="/7_77"><p>VII, 77. К Ушас</p></a
          ><a class="card" id="7_78" href="/7_78"><p>VII, 78. К Ушас</p></a
          ><a class="card" id="7_79" href="/7_79"><p>VII, 79. К Ушас</p></a
          ><a class="card" id="7_80" href="/7_80"><p>VII, 80. К Ушас</p></a
          ><a class="card" id="7_81" href="/7_81"><p>VII, 81. К Ушас</p></a
          ><a class="card" id="7_82" href="/7_82"
            ><p>VII, 82. К Индре и Варуне</p></a
          ><a class="card" id="7_83" href="/7_83"
            ><p>VII, 83. К Индре и Варуне</p></a
          ><a class="card" id="7_84" href="/7_84"
            ><p>VII, 84. К Индре и Варуне</p></a
          ><a class="card" id="7_85" href="/7_85"
            ><p>VII, 85. К Индре и Варуне</p></a
          ><a class="card" id="7_86" href="/7_86"><p>VII, 86. К Варуне</p></a
          ><a class="card" id="7_87" href="/7_87"><p>VII, 87. К Варуне</p></a
          ><a class="card" id="7_88" href="/7_88"><p>VII, 88. К Варуне</p></a
          ><a class="card" id="7_89" href="/7_89"><p>VII, 89. К Варуне</p></a
          ><a class="card" id="7_90" href="/7_90"><p>VII, 90. К Индре-Ваю</p></a
          ><a class="card" id="7_91" href="/7_91"><p>VII, 91. К Индре-Ваю</p></a
          ><a class="card" id="7_92" href="/7_92"><p>VII, 92. К Ваю</p></a
          ><a class="card" id="7_93" href="/7_93"><p>VII, 93. К Индре-Агни</p></a
          ><a class="card" id="7_94" href="/7_94"><p>VII, 94. К Индре-Агни</p></a
          ><a class="card" id="7_95" href="/7_95"
            ><p>VII, 95. К Сарасвати и Сарасвату</p></a
          ><a class="card" id="7_96" href="/7_96"
            ><p>VII, 96. К Сарасвати и Сарасвату</p></a
          ><a class="card" id="7_97" href="/7_97"
            ><p>VII, 97. К Индре и Брихаспати</p></a
          ><a class="card" id="7_98" href="/7_98"><p>VII, 98. К Индре</p></a
          ><a class="card" id="7_99" href="/7_99"><p>VII, 99. К Вишну</p></a
          ><a class="card" id="7_100" href="/7_100"><p>VII, 100. К Вишну</p></a
          ><a class="card" id="7_101" href="/7_101"
            ><p>VII, 101. К Парджанье</p></a
          ><a class="card" id="7_102" href="/7_102"
            ><p>VII, 102. К Парджанье</p></a
          ><a class="card" id="7_103" href="/7_103"
            ><p>VII, 103. К лягушкам</p></a
          ><a class="card" id="7_104" href="/7_104"
            ><p>VII, 104. К Индре-Соме, Индре и другим богам</p></a
          ><a class="card" id="8_1" href="/8_1"><p>VIII, 1. К Индре</p></a
          ><a class="card" id="8_2" href="/8_2"><p>VIII, 2. К Индре</p></a
          ><a class="card" id="8_3" href="/8_3"><p>VIII, 3. К Индре</p></a
          ><a class="card" id="8_4" href="/8_4"><p>VIII, 4. К Индре</p></a
          ><a class="card" id="8_5" href="/8_5"><p>VIII, 5. К Ашвинам</p></a
          ><a class="card" id="8_6" href="/8_6"><p>VIII, 6. К Индре</p></a
          ><a class="card" id="8_7" href="/8_7"><p>VIII, 7. К Марутам</p></a
          ><a class="card" id="8_8" href="/8_8"><p>VIII, 8. К Ашвинам</p></a
          ><a class="card" id="8_9" href="/8_9"><p>VIII, 9. К Ашвинам</p></a
          ><a class="card" id="8_10" href="/8_10"><p>VIII, 10. К Ашвинам</p></a
          ><a class="card" id="8_11" href="/8_11"><p>VIII, 11. К Агни</p></a
          ><a class="card" id="8_12" href="/8_12"><p>VIII, 12. К Индре</p></a
          ><a class="card" id="8_13" href="/8_13"><p>VIII, 13. К Индре</p></a
          ><a class="card" id="8_14" href="/8_14"><p>VIII, 14. К Индре</p></a
          ><a class="card" id="8_15" href="/8_15"><p>VIII, 15. К Индре</p></a
          ><a class="card" id="8_16" href="/8_16"><p>VIII, 16. К Индре</p></a
          ><a class="card" id="8_17" href="/8_17"><p>VIII, 17. К Индре</p></a
          ><a class="card" id="8_18" href="/8_18"><p>VIII, 18. К Адитьям</p></a
          ><a class="card" id="8_19" href="/8_19"><p>VIII, 19. К Агни</p></a
          ><a class="card" id="8_20" href="/8_20"><p>VIII, 20. К Марутам</p></a
          ><a class="card" id="8_21" href="/8_21"><p>VIII, 21. К Индре</p></a
          ><a class="card" id="8_22" href="/8_22"><p>VIII, 22. К Ашвинам</p></a
          ><a class="card" id="8_23" href="/8_23"><p>VIII, 23. К Агни</p></a
          ><a class="card" id="8_24" href="/8_24"><p>VIII, 24. К Индре</p></a
          ><a class="card" id="8_25" href="/8_25"
            ><p>VIII, 25. К Митре, Варуне и другим богам</p></a
          ><a class="card" id="8_26" href="/8_26"
            ><p>VIII, 26. К Ашвинам и Ваю</p></a
          ><a class="card" id="8_27" href="/8_27"
            ><p>VIII, 27. Ко Всем-Богам</p></a
          ><a class="card" id="8_28" href="/8_28"
            ><p>VIII, 28. Ко Всем-Богам</p></a
          ><a class="card" id="8_29" href="/8_29"
            ><p>VIII, 29. Ко Всем-Богам</p></a
          ><a class="card" id="8_30" href="/8_30"
            ><p>VIII, 30. Ко Всем-Богам</p></a
          ><a class="card" id="8_31" href="/8_31"
            ><p>VIII, 31. Восхваление жертвователя и его супруги</p></a
          ><a class="card" id="8_32" href="/8_32"><p>VIII, 32. К Индре</p></a
          ><a class="card" id="8_33" href="/8_33"><p>VIII, 33. К Индре</p></a
          ><a class="card" id="8_34" href="/8_34"><p>VIII, 34. К Индре</p></a
          ><a class="card" id="8_35" href="/8_35"><p>VIII, 35. К Ашвинам</p></a
          ><a class="card" id="8_36" href="/8_36"><p>VIII, 36. К Индре</p></a
          ><a class="card" id="8_37" href="/8_37"><p>VIII, 37. К Индре</p></a
          ><a class="card" id="8_38" href="/8_38"
            ><p>VIII, 38. К Индре и Агни</p></a
          ><a class="card" id="8_39" href="/8_39"><p>VIII, 39. К Агни</p></a
          ><a class="card" id="8_40" href="/8_40"
            ><p>VIII, 40. К Индре и Агни</p></a
          ><a class="card" id="8_41" href="/8_41"><p>VIII, 41. К Варуне</p></a
          ><a class="card" id="8_42" href="/8_42"
            ><p>VIII, 42. К Варуне и Ашвинам</p></a
          ><a class="card" id="8_43" href="/8_43"><p>VIII, 43. К Агни</p></a
          ><a class="card" id="8_44" href="/8_44"><p>VIII, 44. К Агни</p></a
          ><a class="card" id="8_45" href="/8_45"><p>VIII, 45. К Индре</p></a
          ><a class="card" id="8_46" href="/8_46"><p>VIII, 46. К Индре</p></a
          ><a class="card" id="8_47" href="/8_47"><p>VIII, 47. К Адитьям</p></a
          ><a class="card" id="8_48" href="/8_48"><p>VIII, 48. К Соме</p></a
          ><a class="card" id="8_49" href="/8_49"><p>VIII, 49. К Индре</p></a
          ><a class="card" id="8_50" href="/8_50"><p>VIII, 50. К Индре</p></a
          ><a class="card" id="8_51" href="/8_51"><p>VIII, 51. К Индре</p></a
          ><a class="card" id="8_52" href="/8_52"><p>VIII, 52. К Индре</p></a
          ><a class="card" id="8_53" href="/8_53"><p>VIII, 53. К Индре</p></a
          ><a class="card" id="8_54" href="/8_54"
            ><p>VIII, 54. К Индре и Всем-Богам</p></a
          ><a class="card" id="8_55" href="/8_55"
            ><p>VIII, 55. Восхваление даров</p></a
          ><a class="card" id="8_56" href="/8_56"
            ><p>VIII, 56. Восхваление даров</p></a
          ><a class="card" id="8_57" href="/8_57"><p>VIII, 57. К Ашвинам</p></a
          ><a class="card" id="8_58" href="/8_58"><p>VIII, 58. Отрывок</p></a
          ><a class="card" id="8_59" href="/8_59"
            ><p>VIII, 59. К Индре и Варуне</p></a
          ><a class="card" id="8_60" href="/8_60"><p>VIII, 60. К Агни</p></a
          ><a class="card" id="8_61" href="/8_61"><p>VIII, 61. К Индре</p></a
          ><a class="card" id="8_62" href="/8_62"><p>VIII, 62. К Индре</p></a
          ><a class="card" id="8_63" href="/8_63"><p>VIII, 63. К Индре</p></a
          ><a class="card" id="8_64" href="/8_64"><p>VIII, 64. К Индре</p></a
          ><a class="card" id="8_65" href="/8_65"><p>VIII, 65. К Индре</p></a
          ><a class="card" id="8_66" href="/8_66"><p>VIII, 66. К Индре</p></a
          ><a class="card" id="8_67" href="/8_67"><p>VIII, 67. К Адитьям</p></a
          ><a class="card" id="8_68" href="/8_68"><p>VIII, 68. К Индре</p></a
          ><a class="card" id="8_69" href="/8_69"><p>VIII, 69. К Индре</p></a
          ><a class="card" id="8_70" href="/8_70"><p>VIII, 70. К Индре</p></a
          ><a class="card" id="8_71" href="/8_71"><p>VIII, 71. К Агни</p></a
          ><a class="card" id="8_72" href="/8_72"
            ><p>VIII, 72. К Агни, или Восхваление жертвенных даров</p></a
          ><a class="card" id="8_73" href="/8_73"><p>VIII, 73. К Ашвинам</p></a
          ><a class="card" id="8_74" href="/8_74"><p>VIII, 74. К Агни</p></a
          ><a class="card" id="8_75" href="/8_75"><p>VIII, 75. К Агни</p></a
          ><a class="card" id="8_76" href="/8_76"><p>VIII, 76. К Индре</p></a
          ><a class="card" id="8_77" href="/8_77"><p>VIII, 77. К Индре</p></a
          ><a class="card" id="8_78" href="/8_78"><p>VIII, 78. К Индре</p></a
          ><a class="card" id="8_79" href="/8_79"><p>VIII, 79. К Соме</p></a
          ><a class="card" id="8_80" href="/8_80"><p>VIII, 80. К Индре</p></a
          ><a class="card" id="8_81" href="/8_81"><p>VIII, 81. К Индре</p></a
          ><a class="card" id="8_82" href="/8_82"><p>VIII, 82. К Индре</p></a
          ><a class="card" id="8_83" href="/8_83"
            ><p>VIII, 83. Ко Всем-Богам</p></a
          ><a class="card" id="8_84" href="/8_84"><p>VIII, 84. К Агни</p></a
          ><a class="card" id="8_85" href="/8_85"><p>VIII, 85. К Ашвинам</p></a
          ><a class="card" id="8_86" href="/8_86"><p>VIII, 86. К Ашвинам</p></a
          ><a class="card" id="8_87" href="/8_87"><p>VIII, 87. К Ашвинам</p></a
          ><a class="card" id="8_88" href="/8_88"><p>VIII, 88. К Индре</p></a
          ><a class="card" id="8_89" href="/8_89"><p>VIII, 89. К Индре</p></a
          ><a class="card" id="8_90" href="/8_90"><p>VIII, 90. К Индре</p></a
          ><a class="card" id="8_91" href="/8_91"><p>VIII, 91. К Индре</p></a
          ><a class="card" id="8_92" href="/8_92"><p>VIII, 92. К Индре</p></a
          ><a class="card" id="8_93" href="/8_93"><p>VIII, 93. К Индре</p></a
          ><a class="card" id="8_94" href="/8_94"><p>VIII, 94. К Марутам</p></a
          ><a class="card" id="8_95" href="/8_95"><p>VIII, 95. К Индре</p></a
          ><a class="card" id="8_96" href="/8_96"><p>VIII, 96. К Индре</p></a
          ><a class="card" id="8_97" href="/8_97"><p>VIII, 97. К Индре</p></a
          ><a class="card" id="8_98" href="/8_98"><p>VIII, 98. К Индре</p></a
          ><a class="card" id="8_99" href="/8_99"><p>VIII, 99. К Индре</p></a
          ><a class="card" id="8_100" href="/8_100"
            ><p>VIII, 100. К Индре и Ваю</p></a
          ><a class="card" id="8_101" href="/8_101"
            ><p>VIII, 101. К разным богам</p></a
          ><a class="card" id="8_102" href="/8_102"><p>VIII, 102. К Агни</p></a
          ><a class="card" id="8_103" href="/8_103"><p>VIII, 103. К Агни</p></a
          ><a class="card" id="9_1" href="/9_1"><p>IX, 1. К Соме</p></a
          ><a class="card" id="9_2" href="/9_2"><p>IX, 2.К Соме</p></a
          ><a class="card" id="9_3" href="/9_3"><p>IX, 3. К Соме</p></a
          ><a class="card" id="9_4" href="/9_4"><p>IX, 4. К Соме</p></a
          ><a class="card" id="9_5" href="/9_5"><p>IX, 5. Гимн-апри</p></a
          ><a class="card" id="9_6" href="/9_6"><p>IX, 6. К Соме</p></a
          ><a class="card" id="9_7" href="/9_7"><p>IX, 7. К Соме</p></a
          ><a class="card" id="9_8" href="/9_8"><p>IX, 8. К Соме</p></a
          ><a class="card" id="9_9" href="/9_9"><p>IX, 9. К Соме</p></a
          ><a class="card" id="9_10" href="/9_10"><p>IX, 10. К Соме</p></a
          ><a class="card" id="9_11" href="/9_11"><p>IX, 11. К Соме</p></a
          ><a class="card" id="9_12" href="/9_12"><p>IX, 12. К Соме</p></a
          ><a class="card" id="9_13" href="/9_13"><p>IX, 13. К Соме</p></a
          ><a class="card" id="9_14" href="/9_14"><p>IX, 14. К Соме</p></a
          ><a class="card" id="9_15" href="/9_15"><p>IX, 15. К Соме</p></a
          ><a class="card" id="9_16" href="/9_16"><p>IX, 16. К Соме</p></a
          ><a class="card" id="9_17" href="/9_17"><p>IX, 17. К Соме</p></a
          ><a class="card" id="9_18" href="/9_18"><p>IX, 18. К Соме</p></a
          ><a class="card" id="9_19" href="/9_19"><p>IX, 19. К Соме</p></a
          ><a class="card" id="9_20" href="/9_20"><p>IX, 20. К Соме</p></a
          ><a class="card" id="9_21" href="/9_21"><p>IX, 21. К Соме</p></a
          ><a class="card" id="9_22" href="/9_22"><p>IX, 22. К Соме</p></a
          ><a class="card" id="9_23" href="/9_23"><p>IX, 23. К Соме</p></a
          ><a class="card" id="9_24" href="/9_24"><p>IX, 24. К Соме</p></a
          ><a class="card" id="9_25" href="/9_25"><p>IX, 25. К Соме</p></a
          ><a class="card" id="9_26" href="/9_26"><p>IX, 26. К Соме</p></a
          ><a class="card" id="9_27" href="/9_27"><p>IX, 27. К Соме</p></a
          ><a class="card" id="9_28" href="/9_28"><p>IX, 28. К Соме</p></a
          ><a class="card" id="9_29" href="/9_29"><p>IX, 29. К Соме</p></a
          ><a class="card" id="9_30" href="/9_30"><p>IX, 30. К Соме</p></a
          ><a class="card" id="9_31" href="/9_31"><p>IX, 31. К Соме</p></a
          ><a class="card" id="9_32" href="/9_32"><p>IX, 32. К Соме</p></a
          ><a class="card" id="9_33" href="/9_33"><p>IX, 33. К Соме</p></a
          ><a class="card" id="9_34" href="/9_34"><p>IX, 34. К Соме</p></a
          ><a class="card" id="9_35" href="/9_35"><p>IX, 35. К Соме</p></a
          ><a class="card" id="9_36" href="/9_36"><p>IX, 36. К Соме</p></a
          ><a class="card" id="9_37" href="/9_37"><p>IX, 37. К Соме</p></a
          ><a class="card" id="9_38" href="/9_38"><p>IX, 38. К Соме</p></a
          ><a class="card" id="9_39" href="/9_39"><p>IX, 39. К Соме</p></a
          ><a class="card" id="9_40" href="/9_40"><p>IX, 40. К Соме</p></a
          ><a class="card" id="9_41" href="/9_41"><p>IX, 41. К Соме</p></a
          ><a class="card" id="9_42" href="/9_42"><p>IX, 42. К Соме</p></a
          ><a class="card" id="9_43" href="/9_43"><p>IX, 43. К Соме</p></a
          ><a class="card" id="9_44" href="/9_44"><p>IX, 44. К Соме</p></a
          ><a class="card" id="9_45" href="/9_45"><p>IX, 45. К Соме</p></a
          ><a class="card" id="9_46" href="/9_46"><p>IX, 46. К Соме</p></a
          ><a class="card" id="9_47" href="/9_47"><p>IX, 47. К Соме</p></a
          ><a class="card" id="9_48" href="/9_48"><p>IX, 48. К Соме</p></a
          ><a class="card" id="9_49" href="/9_49"><p>IX, 49. К Соме</p></a
          ><a class="card" id="9_50" href="/9_50"><p>IX, 50. К Соме</p></a
          ><a class="card" id="9_51" href="/9_51"><p>IX, 51. К Соме</p></a
          ><a class="card" id="9_52" href="/9_52"><p>IX, 52. К Соме</p></a
          ><a class="card" id="9_53" href="/9_53"><p>IX, 53. К Соме</p></a
          ><a class="card" id="9_54" href="/9_54"><p>IX, 54. К Соме</p></a
          ><a class="card" id="9_55" href="/9_55"><p>IX, 55. К Соме</p></a
          ><a class="card" id="9_56" href="/9_56"><p>IX, 56. К Соме</p></a
          ><a class="card" id="9_57" href="/9_57"><p>IX, 57. К Соме</p></a
          ><a class="card" id="9_58" href="/9_58"><p>IX, 58. К Соме</p></a
          ><a class="card" id="9_59" href="/9_59"><p>IX, 59. К Соме</p></a
          ><a class="card" id="9_60" href="/9_60"><p>IX, 60. К Соме</p></a
          ><a class="card" id="9_61" href="/9_61"><p>IX, 61. К Соме</p></a
          ><a class="card" id="9_62" href="/9_62"><p>IX, 62. К Соме</p></a
          ><a class="card" id="9_63" href="/9_63"><p>IX, 63. К Соме</p></a
          ><a class="card" id="9_64" href="/9_64"><p>IX, 64. К Соме</p></a
          ><a class="card" id="9_65" href="/9_65"><p>IX, 65. К Соме</p></a
          ><a class="card" id="9_66" href="/9_66"><p>IX, 66. К Соме</p></a
          ><a class="card" id="9_67" href="/9_67"><p>IX, 67. К Соме</p></a
          ><a class="card" id="9_68" href="/9_68"><p>IX, 68. К Соме</p></a
          ><a class="card" id="9_69" href="/9_69"><p>IX, 69. К Соме</p></a
          ><a class="card" id="9_70" href="/9_70"><p>IX, 70. К Соме</p></a
          ><a class="card" id="9_71" href="/9_71"><p>IX, 71. К Соме</p></a
          ><a class="card" id="9_72" href="/9_72"><p>IX, 72. К Соме</p></a
          ><a class="card" id="9_73" href="/9_73"><p>IX, 73. К Соме</p></a
          ><a class="card" id="9_74" href="/9_74"><p>IX, 74. К Соме</p></a
          ><a class="card" id="9_75" href="/9_75"><p>IX, 75. К Соме</p></a
          ><a class="card" id="9_76" href="/9_76"><p>IX, 76. К Соме</p></a
          ><a class="card" id="9_77" href="/9_77"><p>IX, 77. К Соме</p></a
          ><a class="card" id="9_78" href="/9_78"><p>IX, 78. К Соме</p></a
          ><a class="card" id="9_79" href="/9_79"><p>IX, 79. К Соме</p></a
          ><a class="card" id="9_80" href="/9_80"><p>IX, 80. К Соме</p></a
          ><a class="card" id="9_81" href="/9_81"><p>IX, 81. К Соме</p></a
          ><a class="card" id="9_82" href="/9_82"><p>IX, 82. К Соме</p></a
          ><a class="card" id="9_83" href="/9_83"><p>IX, 83. К Соме</p></a
          ><a class="card" id="9_84" href="/9_84"><p>IX, 84. К Соме</p></a
          ><a class="card" id="9_85" href="/9_85"><p>IX, 85. К Соме</p></a
          ><a class="card" id="9_86" href="/9_86"><p>IX, 86. К Соме</p></a
          ><a class="card" id="9_87" href="/9_87"><p>IX, 87. К Соме</p></a
          ><a class="card" id="9_88" href="/9_88"><p>IX, 88. К Соме</p></a
          ><a class="card" id="9_89" href="/9_89"><p>IX, 89. К Соме</p></a
          ><a class="card" id="9_90" href="/9_90"><p>IX, 90. К Соме</p></a
          ><a class="card" id="9_91" href="/9_91"><p>IX, 91. К Соме</p></a
          ><a class="card" id="9_92" href="/9_92"><p>IX, 92. К Соме</p></a
          ><a class="card" id="9_93" href="/9_93"><p>IX, 93. К Соме</p></a
          ><a class="card" id="9_94" href="/9_94"><p>IX, 94. К Соме</p></a
          ><a class="card" id="9_95" href="/9_95"><p>IX, 95. К Соме</p></a
          ><a class="card" id="9_96" href="/9_96"><p>IX, 96. К Соме</p></a
          ><a class="card" id="9_97" href="/9_97"><p>IX, 97. К Соме</p></a
          ><a class="card" id="9_98" href="/9_98"><p>IX, 98. К Соме</p></a
          ><a class="card" id="9_99" href="/9_99"><p>IX, 99. К Соме</p></a
          ><a class="card" id="9_100" href="/9_100"><p>IX, 100. К Соме</p></a
          ><a class="card" id="9_101" href="/9_101"><p>IX, 101. К Соме</p></a
          ><a class="card" id="9_102" href="/9_102"><p>IX, 102. К Соме</p></a
          ><a class="card" id="9_103" href="/9_103"><p>IX, 103. К Соме</p></a
          ><a class="card" id="9_104" href="/9_104"><p>IX, 104. К Соме</p></a
          ><a class="card" id="9_105" href="/9_105"><p>IX, 105. К Соме</p></a
          ><a class="card" id="9_106" href="/9_106"><p>IX, 106. К Соме</p></a
          ><a class="card" id="9_107" href="/9_107"><p>IX, 107. К Соме</p></a
          ><a class="card" id="9_108" href="/9_108"><p>IX, 108. К Соме</p></a
          ><a class="card" id="9_109" href="/9_109"><p>IX, 109. К Соме</p></a
          ><a class="card" id="9_110" href="/9_110"><p>IX, 110. К Соме</p></a
          ><a class="card" id="9_111" href="/9_111"><p>IX, 111. К Соме</p></a
          ><a class="card" id="9_112" href="/9_112"><p>IX, 112. К Соме</p></a
          ><a class="card" id="9_113" href="/9_113"><p>IX, 113. К Соме</p></a
          ><a class="card" id="9_114" href="/9_114"><p>IX, 114. К Соме</p></a
          ><a class="card" id="10_1" href="/10_1"><p>X, 1. К Агни</p></a
          ><a class="card" id="10_2" href="/10_2"><p>X, 2. К Агни</p></a
          ><a class="card" id="10_3" href="/10_3"><p>X, 3. К Агни</p></a
          ><a class="card" id="10_4" href="/10_4"><p>X, 4. К Агни</p></a
          ><a class="card" id="10_5" href="/10_5"><p>X, 5. К Агни</p></a
          ><a class="card" id="10_6" href="/10_6"><p>X, 6. К Агни</p></a
          ><a class="card" id="10_7" href="/10_7"><p>X, 7. К Агни</p></a
          ><a class="card" id="10_8" href="/10_8"><p>X, 8. К Агни</p></a
          ><a class="card" id="10_9" href="/10_9"><p>X, 9. К Водам</p></a
          ><a class="card" id="10_10" href="/10_10"><p>X, 10. Яма и Ями</p></a
          ><a class="card" id="10_11" href="/10_11"><p>X, 11. К Агни</p></a
          ><a class="card" id="10_12" href="/10_12"><p>X, 12. К Агни</p></a
          ><a class="card" id="10_13" href="/10_13"
            ><p>X, 13. К двум жертвенным повозкам</p></a
          ><a class="card" id="10_14" href="/10_14"><p>X, 14. К Яме</p></a
          ><a class="card" id="10_15" href="/10_15"
            ><p>X, 15. К умершим предкам</p></a
          ><a class="card" id="10_16" href="/10_16"
            ><p>X, 16. К Агни – погребальному костру</p></a
          ><a class="card" id="10_17" href="/10_17"
            ><p>X, 17. К разным богам</p></a
          ><a class="card" id="10_18" href="/10_18"
            ><p>X, 18. Похоронный гимн</p></a
          ><a class="card" id="10_19" href="/10_19"><p>X, 19. К коровам</p></a
          ><a class="card" id="10_20" href="/10_20"><p>X, 20. К Агни</p></a
          ><a class="card" id="10_21" href="/10_21"><p>X, 21. К Агни</p></a
          ><a class="card" id="10_22" href="/10_22"><p>X, 22. К Индре</p></a
          ><a class="card" id="10_23" href="/10_23"><p>X, 23. К Индре</p></a
          ><a class="card" id="10_24" href="/10_24"
            ><p>X, 24. К Индре и Ашвинам</p></a
          ><a class="card" id="10_25" href="/10_25"><p>X, 25. К Соме</p></a
          ><a class="card" id="10_26" href="/10_26"><p>X, 26. К Пушану</p></a
          ><a class="card" id="10_27" href="/10_27"><p>X, 27. К Индре</p></a
          ><a class="card" id="10_28" href="/10_28"><p>X, 28. К Индре</p></a
          ><a class="card" id="10_29" href="/10_29"><p>X, 29. К Индре</p></a
          ><a class="card" id="10_30" href="/10_30"><p>X, 30. К водам</p></a
          ><a class="card" id="10_31" href="/10_31"
            ><p>X, 31. Ко Всем-Богам</p></a
          ><a class="card" id="10_32" href="/10_32"><p>X, 32. К Индре</p></a
          ><a class="card" id="10_33" href="/10_33"><p>X, 33. Жалоба певца</p></a
          ><a class="card" id="10_34" href="/10_34"><p>X, 34. Гимн игрока</p></a
          ><a class="card" id="10_35" href="/10_35"
            ><p>X, 35. Ко Всем-Богам</p></a
          ><a class="card" id="10_36" href="/10_36"
            ><p>X, 36. Ко Всем-Богам</p></a
          ><a class="card" id="10_37" href="/10_37"><p>X, 37. К Сурье</p></a
          ><a class="card" id="10_38" href="/10_38"><p>X, 38. К Индре</p></a
          ><a class="card" id="10_39" href="/10_39"><p>X, 39. К Ашвинам</p></a
          ><a class="card" id="10_40" href="/10_40"><p>X, 40. К Ашвинам</p></a
          ><a class="card" id="10_41" href="/10_41"><p>X, 41. К Ашвинам</p></a
          ><a class="card" id="10_42" href="/10_42"><p>X, 42. К Индре</p></a
          ><a class="card" id="10_43" href="/10_43"><p>X, 43. К Индре</p></a
          ><a class="card" id="10_44" href="/10_44"><p>X, 44. К Индре</p></a
          ><a class="card" id="10_45" href="/10_45"><p>X, 45. К Агни</p></a
          ><a class="card" id="10_46" href="/10_46"><p>X, 46. К Агни</p></a
          ><a class="card" id="10_47" href="/10_47"><p>X, 47. К Индре</p></a
          ><a class="card" id="10_48" href="/10_48"
            ><p>X, 48. Самовосхваление Индры</p></a
          ><a class="card" id="10_49" href="/10_49"><p>X, 49. К Индре</p></a
          ><a class="card" id="10_50" href="/10_50"><p>X, 50. К Индре</p></a
          ><a class="card" id="10_51" href="/10_51"><p>X, 51. Боги и Агни</p></a
          ><a class="card" id="10_52" href="/10_52"><p>X, 52. Агни и боги</p></a
          ><a class="card" id="10_53" href="/10_53"><p>X, 53. Жрецы и Агни</p></a
          ><a class="card" id="10_54" href="/10_54"><p>X, 54. К Индре</p></a
          ><a class="card" id="10_55" href="/10_55"><p>X, 55. К Индре</p></a
          ><a class="card" id="10_56" href="/10_56"
            ><p>X, 56. Похоронное слово коню</p></a
          ><a class="card" id="10_57" href="/10_57"
            ><p>X, 57. Ко Всем-Богам</p></a
          ><a class="card" id="10_58" href="/10_58"
            ><p>X, 58. Заговор на возвращение духа</p></a
          ><a class="card" id="10_59" href="/10_59"
            ><p>X, 59. К разным богам</p></a
          ><a class="card" id="10_60" href="/10_60"
            ><p>X, 60. Восхваление царя Асамати</p></a
          ><a class="card" id="10_61" href="/10_61"
            ><p>X, 61. Ко Всем-Богам</p></a
          ><a class="card" id="10_62" href="/10_62"
            ><p>X, 62. К Ангирасам. Восхваление даров</p></a
          ><a class="card" id="10_63" href="/10_63"
            ><p>X, 63. Ко Всем-Богам</p></a
          ><a class="card" id="10_64" href="/10_64"
            ><p>X, 64. Ко Всем-Богам</p></a
          ><a class="card" id="10_65" href="/10_65"
            ><p>X, 65. Ко Всем-Богам</p></a
          ><a class="card" id="10_66" href="/10_66"
            ><p>X, 66. Ко Всем-Богам</p></a
          ><a class="card" id="10_67" href="/10_67"><p>X, 67. К Брихаспати</p></a
          ><a class="card" id="10_68" href="/10_68"><p>X, 68. К Брихаспати</p></a
          ><a class="card" id="10_69" href="/10_69"><p>X, 69. К Агни</p></a
          ><a class="card" id="10_70" href="/10_70"><p>X, 70. Гимн-апри</p></a
          ><a class="card" id="10_71" href="/10_71"><p>X, 71. Познание</p></a
          ><a class="card" id="10_72" href="/10_72"><p>X, 72. К богам</p></a
          ><a class="card" id="10_73" href="/10_73"><p>X, 73. К Индре</p></a
          ><a class="card" id="10_74" href="/10_74"><p>X, 74. К Индре</p></a
          ><a class="card" id="10_75" href="/10_75"><p>X, 75. К рекам</p></a
          ><a class="card" id="10_76" href="/10_76"
            ><p>X, 76. К давильным камням</p></a
          ><a class="card" id="10_77" href="/10_77"><p>X, 77. К Марутам</p></a
          ><a class="card" id="10_78" href="/10_78"><p>X, 78. К Марутам</p></a
          ><a class="card" id="10_79" href="/10_79"><p>X, 79. К Агни</p></a
          ><a class="card" id="10_80" href="/10_80"><p>X, 80. К Агни</p></a
          ><a class="card" id="10_81" href="/10_81"
            ><p>X, 81. К Вишвакарману</p></a
          ><a class="card" id="10_82" href="/10_82"
            ><p>X, 82. К Вишвакарману</p></a
          ><a class="card" id="10_83" href="/10_83"><p>X, 83. К Манью</p></a
          ><a class="card" id="10_84" href="/10_84"><p>X, 84. К Манью</p></a
          ><a class="card" id="10_85" href="/10_85"
            ><p>X, 85. Свадебный гимн</p></a
          ><a class="card" id="10_86" href="/10_86"><p>X, 86. Вришакапи</p></a
          ><a class="card" id="10_87" href="/10_87"
            ><p>X, 87. К Агни-убийце ракшасов</p></a
          ><a class="card" id="10_88" href="/10_88"
            ><p>X, 88. К Сурье и Агни-Вайшванаре</p></a
          ><a class="card" id="10_89" href="/10_89"><p>X, 89. К Индре</p></a
          ><a class="card" id="10_90" href="/10_90"><p>X, 90. Пуруша</p></a
          ><a class="card" id="10_91" href="/10_91"><p>X, 91. К Агни</p></a
          ><a class="card" id="10_92" href="/10_92"
            ><p>X, 92. Ко Всем-Богам</p></a
          ><a class="card" id="10_93" href="/10_93"
            ><p>X, 93. Ко Всем-Богам</p></a
          ><a class="card" id="10_94" href="/10_94"
            ><p>X, 94. К давильным камням</p></a
          ><a class="card" id="10_95" href="/10_95"
            ><p>X, 95. Пуруравас и Урваши</p></a
          ><a class="card" id="10_96" href="/10_96"
            ><p>X, 96. Восхваление буланых коней Индры</p></a
          ><a class="card" id="10_97" href="/10_97"
            ><p>X, 97. Восхваление лекарственных растений</p></a
          ><a class="card" id="10_98" href="/10_98"
            ><p>X, 98. Просьба Девапи о дожде</p></a
          ><a class="card" id="10_99" href="/10_99"><p>X, 99. К Индре</p></a
          ><a class="card" id="10_100" href="/10_100"
            ><p>X, 100. Ко Всем-Богам</p></a
          ><a class="card" id="10_101" href="/10_101"><p>X, 101. К жрецам</p></a
          ><a class="card" id="10_102" href="/10_102"
            ><p>X, 102. Состязание Мудгалани</p></a
          ><a class="card" id="10_103" href="/10_103"><p>X, 103. К Индре</p></a
          ><a class="card" id="10_104" href="/10_104"><p>X, 104. К Индре</p></a
          ><a class="card" id="10_105" href="/10_105"><p>X, 105. К Индре</p></a
          ><a class="card" id="10_106" href="/10_106"><p>X, 106. К Ашвинам</p></a
          ><a class="card" id="10_107" href="/10_107"><p>X, 107. К Дакшине</p></a
          ><a class="card" id="10_108" href="/10_108"
            ><p>X, 108. Сарама и Пани</p></a
          ><a class="card" id="10_109" href="/10_109"
            ><p>X, 109. Ко Всем-Богам</p></a
          ><a class="card" id="10_110" href="/10_110"><p>X, 110. Гимн-апри</p></a
          ><a class="card" id="10_111" href="/10_111"><p>X, 111. К Индре</p></a
          ><a class="card" id="10_112" href="/10_112"><p>X, 112. К Индре</p></a
          ><a class="card" id="10_113" href="/10_113"><p>X, 113. К Индре</p></a
          ><a class="card" id="10_114" href="/10_114"
            ><p>X, 114. Ко Всем-Богам</p></a
          ><a class="card" id="10_115" href="/10_115"><p>X, 115. К Агни</p></a
          ><a class="card" id="10_116" href="/10_116"><p>X, 116. К Индре</p></a
          ><a class="card" id="10_117" href="/10_117"
            ><p>X, 117. Гимн Щедрости</p></a
          ><a class="card" id="10_118" href="/10_118"
            ><p>X, 118. К Агни-убийце ракшасов</p></a
          ><a class="card" id="10_119" href="/10_119"
            ><p>X, 119. Самовосхваление под влиянием сомы</p></a
          ><a class="card" id="10_120" href="/10_120"><p>X, 120. К Индре</p></a
          ><a class="card" id="10_121" href="/10_121"
            ><p>X, 121. К неизвестному богу</p></a
          ><a class="card" id="10_122" href="/10_122"><p>X, 122. К Агни</p></a
          ><a class="card" id="10_123" href="/10_123"><p>X, 123. К Вене</p></a
          ><a class="card" id="10_124" href="/10_124"
            ><p>X, 124. К разным богам</p></a
          ><a class="card" id="10_125" href="/10_125"
            ><p>X, 125. К Священной Речи-Вач</p></a
          ><a class="card" id="10_126" href="/10_126"
            ><p>X, 126. Ко Всем-Богам</p></a
          ><a class="card" id="10_127" href="/10_127"><p>X, 127. К Ночи</p></a
          ><a class="card" id="10_128" href="/10_128"
            ><p>X, 128. Ко Всем-Богам</p></a
          ><a class="card" id="10_129" href="/10_129"
            ><p>X, 129. Космогония</p></a
          ><a class="card" id="10_130" href="/10_130"
            ><p>X, 130. Создание жертвоприношения</p></a
          ><a class="card" id="10_131" href="/10_131"><p>X, 131. К Индре</p></a
          ><a class="card" id="10_132" href="/10_132"
            ><p>X, 132. К Митре-Варуне</p></a
          ><a class="card" id="10_133" href="/10_133"><p>X, 133. К Индре</p></a
          ><a class="card" id="10_134" href="/10_134"><p>X, 134. К Индре</p></a
          ><a class="card" id="10_135" href="/10_135"
            ><p>X, 135. Мальчик и колесница</p></a
          ><a class="card" id="10_136" href="/10_136"
            ><p>X, 136. Косматые аскеты</p></a
          ><a class="card" id="10_137" href="/10_137"
            ><p>X, 137. Ко Всем-Богам</p></a
          ><a class="card" id="10_138" href="/10_138"><p>X, 138. К Индре</p></a
          ><a class="card" id="10_139" href="/10_139"><p>X, 139. К Сурье</p></a
          ><a class="card" id="10_140" href="/10_140"><p>X, 140. К Агни</p></a
          ><a class="card" id="10_141" href="/10_141"
            ><p>X, 141. Ко Всем-Богам</p></a
          ><a class="card" id="10_142" href="/10_142"><p>X, 142. К Агни</p></a
          ><a class="card" id="10_143" href="/10_143"><p>X, 143. К Ашвинам</p></a
          ><a class="card" id="10_144" href="/10_144"><p>X, 144. К Индре</p></a
          ><a class="card" id="10_145" href="/10_145"
            ><p>X, 145. Против соперницы</p></a
          ><a class="card" id="10_146" href="/10_146"
            ><p>X, 146. К Араньяни</p></a
          ><a class="card" id="10_147" href="/10_147"><p>X, 147. К Индре</p></a
          ><a class="card" id="10_148" href="/10_148"><p>X, 148. К Индре</p></a
          ><a class="card" id="10_149" href="/10_149"
            ><p>X, 149. К Савитару</p></a
          ><a class="card" id="10_150" href="/10_150"><p>X, 150. К Агни</p></a
          ><a class="card" id="10_151" href="/10_151"><p>X, 151. К Вере</p></a
          ><a class="card" id="10_152" href="/10_152"><p>X, 152. К Индре</p></a
          ><a class="card" id="10_153" href="/10_153"><p>X, 153. К Индре</p></a
          ><a class="card" id="10_154" href="/10_154"
            ><p>X, 154. К умершему</p></a
          ><a class="card" id="10_155" href="/10_155"
            ><p>X, 155. Против ведьмы</p></a
          ><a class="card" id="10_156" href="/10_156"><p>X, 156. К Агни</p></a
          ><a class="card" id="10_157" href="/10_157"
            ><p>X, 157. Ко Всем-Богам</p></a
          ><a class="card" id="10_158" href="/10_158"><p>X, 158. К Сурье</p></a
          ><a class="card" id="10_159" href="/10_159"
            ><p>X, 159. Самовосхваление женщины</p></a
          ><a class="card" id="10_160" href="/10_160"><p>X, 160. К Индре</p></a
          ><a class="card" id="10_161" href="/10_161"
            ><p>X, 161. Против болезни якиша</p></a
          ><a class="card" id="10_162" href="/10_162"
            ><p>X, 162. Против демонов, вредящих зародышу</p></a
          ><a class="card" id="10_163" href="/10_163"
            ><p>X, 163. Против болезни якшма</p></a
          ><a class="card" id="10_164" href="/10_164"
            ><p>X, 164. Против дурных снов</p></a
          ><a class="card" id="10_165" href="/10_165"
            ><p>X, 165. Против голубя, предвещающего гибель</p></a
          ><a class="card" id="10_166" href="/10_166"
            ><p>X, 166. Против соперников</p></a
          ><a class="card" id="10_167" href="/10_167"><p>X, 167. К Индре</p></a
          ><a class="card" id="10_168" href="/10_168"><p>X, 168. К Вате</p></a
          ><a class="card" id="10_169" href="/10_169"
            ><p>X, 169. На процветание коров</p></a
          ><a class="card" id="10_170" href="/10_170"><p>X, 170. К Сурье</p></a
          ><a class="card" id="10_171" href="/10_171"><p>X, 171. К Индре</p></a
          ><a class="card" id="10_172" href="/10_172"><p>X, 172. К ?</p></a
          ><a class="card" id="10_173" href="/10_173"
            ><p>X, 173. На помазание царя</p></a
          ><a class="card" id="10_174" href="/10_174"
            ><p>X, 174. На превосходство царя</p></a
          ><a class="card" id="10_175" href="/10_175"
            ><p>X, 175. К давильным камням</p></a
          ><a class="card" id="10_176" href="/10_176"><p>X, 176. К Агни</p></a
          ><a class="card" id="10_177" href="/10_177"
            ><p>X, 177. К птице-Патанга</p></a
          ><a class="card" id="10_178" href="/10_178"><p>X, 178. К Таркшье</p></a
          ><a class="card" id="10_179" href="/10_179"><p>X, 179. К Индре</p></a
          ><a class="card" id="10_180" href="/10_180"><p>X, 180. К Индре</p></a
          ><a class="card" id="10_181" href="/10_181"
            ><p>X, 181. Ко Всем-Богам</p></a
          ><a class="card" id="10_182" href="/10_182"
            ><p>X, 182. К Брихаспати</p></a
          ><a class="card" id="10_183" href="/10_183"
            ><p>X, 183. На рождение сына</p></a
          ><a class="card" id="10_184" href="/10_184"
            ><p>X, 184. На удачное зачатие и рождение ребенка</p></a
          ><a class="card" id="10_185" href="/10_185"><p>X, 185. К Адити</p></a
          ><a class="card" id="10_186" href="/10_186"><p>X, 186. К Ваю</p></a
          ><a class="card" id="10_187" href="/10_187"><p>X, 187. К Агни</p></a
          ><a class="card" id="10_188" href="/10_188"
            ><p>X, 188. К Агни-Джатаведасу</p></a
          ><a class="card" id="10_189" href="/10_189"><p>X, 189. К ?</p></a
          ><a class="card" id="10_190" href="/10_190"
            ><p>X, 190. Космический жар</p></a
          ><a class="card" id="10_191" href="/10_191"
            ><p>X, 191. Гимн единения</p></a
          >
        </div>
        <div class="modal-content" id="root">
          ${
            item.id !== 'index'
              ? `<a class="modal-close" href="/">&times;</a
          >`
              : ''
          }
          <div class="modal-scrollable-content">
            ${
              item.id !== 'index'
                ? `
            <h2>${item.title}</h2>
            `
                : ''
            }
            <p>${item.content}</p>
          </div>
        </div>
      </main>
    </div>
  </body>
</html>
`;
}

export const aboutHTML = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Все гимны Ригведы | Rigveda Hymns</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="/main.js" defer></script>
  </head>
  <body>
    <html lang="ru">
      <body>
        <div class="about">
          <div class="about__icons">
            <a href="/" data-native-url
              ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="about__main">
            <p>
              Текст с благодарностью взят
              <a href="https://samskrtam.ru/parallel-corpus/rigveda.html" data-native-url
                >отсюда<span class="external-link"></span
              ></a>
              и переделан в <a
                href="https://github.com/siebentod/rigveda-purejs/tree/main/app/data" data-native-url
                >json и js форматы<span class="external-link"></span></a
              >.
            </p>
          </div>
        </div>
      </body>
    </html>
  </body>
</html>`;
