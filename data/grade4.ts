import { Grade } from "./types";

const grade4: Grade = {
  grade: 4,
  label: "Grade 4",
  emoji: "🌍",
  color: "#0891B2",
  units: [

    // ─── Unit 1: Multi-digit Multiplication ──────────────────────────────────
    {
      teks: "4.4D",
      cambridge: "Stage 4 · 4Nc3",
      emoji: "🏭",
      title: {
        en: "Multi-digit Multiplication",
        es: "Multiplicación de Varios Dígitos",
        ur: "کئی ہندسوں کی ضرب",
      },
      vocabulary: [
        {
          id: "multiply",
          emoji: "✖️",
          word: { en: "multiply", es: "multiplicar", ur: "ضرب کرنا" },
          definition: {
            en: "combine equal groups — a faster way to add the same number many times",
            es: "combinar grupos iguales — una forma más rápida de sumar el mismo número varias veces",
            ur: "برابر گروپ ملانا — ایک ہی نمبر کئی بار جمع کرنے کا تیز طریقہ",
          },
        },
        {
          id: "partial-product",
          emoji: "🔢",
          word: { en: "partial product", es: "producto parcial", ur: "جزوی حاصل ضرب" },
          definition: {
            en: "a step in multiplication where you multiply one part at a time, then add",
            es: "un paso en la multiplicación donde multiplicas una parte a la vez, luego sumas",
            ur: "ضرب کا وہ قدم جہاں ایک وقت میں ایک حصہ ضرب کرتے ہیں، پھر جمع کرتے ہیں",
          },
        },
        {
          id: "regroup",
          emoji: "🔄",
          word: { en: "regroup", es: "reagrupar", ur: "دوبارہ گروپ کرنا" },
          definition: {
            en: "carry a value to the next place when a digit is 10 or more",
            es: "llevar un valor al siguiente lugar cuando un dígito es 10 o más",
            ur: "جب ہندسہ 10 یا زیادہ ہو تو قیمت اگلی جگہ لے جانا",
          },
        },
        {
          id: "estimate",
          emoji: "🎯",
          word: { en: "estimate", es: "estimar", ur: "تخمینہ لگانا" },
          definition: {
            en: "find a close answer quickly by rounding — check if your answer makes sense",
            es: "encontrar una respuesta cercana rápidamente redondeando — comprueba si tu respuesta tiene sentido",
            ur: "گول کر کے جلدی قریبی جواب نکالنا — دیکھو کہ تمہارا جواب سمجھ میں آتا ہے",
          },
        },
      ],
      lesson: {
        en: "🏭 **Bigger multiplication, bigger impact!**\n\nIn Grade 4 we multiply larger numbers — which helps us plan big community projects.\n\n**How to multiply 24 × 6 using partial products:**\n- Break 24 into 20 + 4\n- 20 × 6 = 120\n- 4 × 6 = 24\n- 120 + 24 = **144**\n\n🧡 Real example: A food bank packs 24 boxes per hour. They work for 6 hours. How many boxes?\n24 × 6 = **144 boxes** — enough to help 144 families!\n\n☀️ Another example: A school raises money for solar panels. Each panel costs $213. They want 4 panels.\n213 × 4 = **$852** — that's clean energy for the whole school!\n\nThe bigger your multiplication skills, the bigger problems you can solve for your community. 🌍",
        es: "🏭 **¡Mayor multiplicación, mayor impacto!**\n\nEn 4° grado multiplicamos números más grandes — lo que nos ayuda a planear grandes proyectos comunitarios.\n\n**Cómo multiplicar 24 × 6 usando productos parciales:**\n- Divide 24 en 20 + 4\n- 20 × 6 = 120\n- 4 × 6 = 24\n- 120 + 24 = **144**\n\n🧡 Ejemplo real: Un banco de alimentos empaca 24 cajas por hora. Trabajan durante 6 horas. ¿Cuántas cajas?\n24 × 6 = **144 cajas** — ¡suficiente para ayudar a 144 familias!\n\n☀️ Otro ejemplo: Una escuela recauda dinero para paneles solares. Cada panel cuesta $213. Quieren 4 paneles.\n213 × 4 = **$852** — ¡eso es energía limpia para toda la escuela!\n\nCuanto mejores sean tus habilidades de multiplicación, mayores serán los problemas que podrás resolver para tu comunidad. 🌍",
        ur: "🏭 **بڑی ضرب، بڑا اثر!**\n\nچوتھی جماعت میں ہم بڑے نمبر ضرب کرتے ہیں — جو بڑے کمیونٹی پروجیکٹوں کی منصوبہ بندی میں مدد کرتا ہے۔\n\n**جزوی حاصل ضرب سے 24 × 6 کیسے ضرب کریں:**\n- 24 کو 20 + 4 میں توڑو\n- 20 × 6 = 120\n- 4 × 6 = 24\n- 120 + 24 = **144**\n\n🧡 اصلی مثال: ایک فوڈ بینک فی گھنٹہ 24 بکسے بھرتا ہے۔ وہ 6 گھنٹے کام کرتے ہیں۔ کتنے بکسے؟\n24 × 6 = **144 بکسے** — 144 خاندانوں کی مدد کے لیے کافی!\n\n☀️ ایک اور مثال: ایک اسکول سولر پینل کے لیے پیسے جمع کرتا ہے۔ ہر پینل $213 کا ہے۔ انہیں 4 پینل چاہیے۔\n213 × 4 = **$852** — پورے اسکول کے لیے صاف توانائی!\n\nتمہاری ضرب کی مہارت جتنی بڑی، اتنے بڑے مسئلے تم اپنی کمیونٹی کے لیے حل کر سکتے ہو۔ 🌍",
      },
      exercises: [
        {
          id: "ex-4.4D-1",
          type: "multiple-choice",
          prompt: {
            en: "🥫 A food drive volunteer packs 32 cans per box. The class fills 5 boxes for families in need. How many cans did they pack in all?",
            es: "🥫 Un voluntario de la colecta empaca 32 latas por caja. La clase llena 5 cajas para familias necesitadas. ¿Cuántas latas empacaron en total?",
            ur: "🥫 فوڈ ڈرائیو کا رضاکار فی بکسہ 32 ڈبے پیک کرتا ہے۔ کلاس ضرورتمند خاندانوں کے لیے 5 بکسے بھرتی ہے۔ انہوں نے کل کتنے ڈبے پیک کیے؟",
          },
          choices: [
            { en: "150", es: "150", ur: "150" },
            { en: "160", es: "160", ur: "160" },
            { en: "145", es: "145", ur: "145" },
            { en: "155", es: "155", ur: "155" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-4.4D-2",
          type: "multiple-choice",
          prompt: {
            en: "🌳 An environmental club plants 43 trees each month to fight climate change. How many trees do they plant in 6 months?",
            es: "🌳 Un club ambiental planta 43 árboles cada mes para combatir el cambio climático. ¿Cuántos árboles plantan en 6 meses?",
            ur: "🌳 ایک ماحولیاتی کلب موسمیاتی تبدیلی سے لڑنے کے لیے ہر ماہ 43 درخت لگاتا ہے۔ وہ 6 مہینوں میں کتنے درخت لگاتے ہیں؟",
          },
          choices: [
            { en: "248", es: "248", ur: "248" },
            { en: "258", es: "258", ur: "258" },
            { en: "268", es: "268", ur: "268" },
            { en: "278", es: "278", ur: "278" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-4.4D-3",
          type: "true-false",
          prompt: {
            en: "☀️ A community center installs 3 solar panels. Each panel produces 215 kilowatt-hours of energy per year. The total is 3 × 215 = 645 kilowatt-hours.",
            es: "☀️ Un centro comunitario instala 3 paneles solares. Cada panel produce 215 kilovatios-hora de energía al año. El total es 3 × 215 = 645 kilovatios-hora.",
            ur: "☀️ ایک کمیونٹی سینٹر 3 سولر پینل لگاتا ہے۔ ہر پینل سالانہ 215 کلو واٹ گھنٹے توانائی پیدا کرتا ہے۔ کل 3 × 215 = 645 کلو واٹ گھنٹے ہے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-4.4D-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A city plants 125 trees in each of its 7 parks to reduce air pollution. How many trees are planted in all?",
            es: "🌍 Una ciudad planta 125 árboles en cada uno de sus 7 parques para reducir la contaminación del aire. ¿Cuántos árboles se plantan en total?",
            ur: "🌍 ایک شہر فضائی آلودگی کم کرنے کے لیے اپنے 7 پارکوں میں سے ہر ایک میں 125 درخت لگاتا ہے۔ کل کتنے درخت لگائے جاتے ہیں؟",
          },
          choices: [
            { en: "875", es: "875", ur: "875" },
            { en: "750", es: "750", ur: "750" },
            { en: "900", es: "900", ur: "900" },
            { en: "825", es: "825", ur: "825" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-4.4D-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ A recycling program collects 246 pounds of plastic every week. How many pounds are collected in 4 weeks?",
            es: "♻️ Un programa de reciclaje recoge 246 libras de plástico cada semana. ¿Cuántas libras se recogen en 4 semanas?",
            ur: "♻️ ایک ری سائیکلنگ پروگرام ہر ہفتے 246 پاؤنڈ پلاسٹک جمع کرتا ہے۔ 4 ہفتوں میں کتنے پاؤنڈ جمع ہوتے ہیں؟",
          },
          choices: [
            { en: "864", es: "864", ur: "864" },
            { en: "984", es: "984", ur: "984" },
            { en: "924", es: "924", ur: "924" },
            { en: "946", es: "946", ur: "946" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-4.4D-3",
          type: "multiple-choice",
          prompt: {
            en: "📚 A school district donates 312 books to each of 8 community libraries to improve literacy. What is the total number of books donated?",
            es: "📚 Un distrito escolar dona 312 libros a cada una de las 8 bibliotecas comunitarias para mejorar la lectoescritura. ¿Cuál es el número total de libros donados?",
            ur: "📚 ایک اسکول ڈسٹرکٹ خواندگی بہتر کرنے کے لیے 8 کمیونٹی لائبریریوں میں سے ہر ایک کو 312 کتابیں دیتا ہے۔ عطیہ کی گئی کتابوں کی کل تعداد کیا ہے؟",
          },
          choices: [
            { en: "2,396", es: "2,396", ur: "2,396" },
            { en: "2,496", es: "2,496", ur: "2,496" },
            { en: "2,456", es: "2,456", ur: "2,456" },
            { en: "2,596", es: "2,596", ur: "2,596" },
          ],
          correctIndex: 1,
        },
      ],
    },

    // ─── Unit 2: Adding & Subtracting Fractions ──────────────────────────────
    {
      teks: "4.3E",
      cambridge: "Stage 4 · 4Nf1",
      emoji: "🍕",
      title: {
        en: "Adding & Subtracting Fractions",
        es: "Sumar y Restar Fracciones",
        ur: "کسروں کو جمع اور تفریق کرنا",
      },
      vocabulary: [
        {
          id: "like-denominators",
          emoji: "🤝",
          word: { en: "like denominators", es: "denominadores iguales", ur: "ایک جیسے مخرج" },
          definition: {
            en: "fractions that have the same bottom number — you can add or subtract them directly",
            es: "fracciones que tienen el mismo número de abajo — puedes sumarlas o restarlas directamente",
            ur: "وہ کسریں جن کا نیچے والا نمبر ایک جیسا ہو — انہیں سیدھا جمع یا تفریق کر سکتے ہو",
          },
        },
        {
          id: "numerator",
          emoji: "⬆️",
          word: { en: "numerator", es: "numerador", ur: "شمارہ" },
          definition: {
            en: "the top number in a fraction — the part you add or subtract",
            es: "el número de arriba en una fracción — la parte que sumas o restas",
            ur: "کسر میں اوپر کا نمبر — وہ حصہ جو جمع یا تفریق کرتے ہیں",
          },
        },
        {
          id: "simplify",
          emoji: "✂️",
          word: { en: "simplify", es: "simplificar", ur: "آسان کرنا" },
          definition: {
            en: "write a fraction in its simplest form — like 4/8 = 1/2",
            es: "escribir una fracción en su forma más simple — como 4/8 = 1/2",
            ur: "کسر کو سب سے آسان شکل میں لکھنا — جیسے 4/8 = 1/2",
          },
        },
        {
          id: "benchmark",
          emoji: "🏁",
          word: { en: "benchmark fraction", es: "fracción de referencia", ur: "حوالہ کسر" },
          definition: {
            en: "a familiar fraction used to estimate — like 0, 1/4, 1/2, 3/4, and 1",
            es: "una fracción conocida usada para estimar — como 0, 1/4, 1/2, 3/4 y 1",
            ur: "تخمینہ لگانے کے لیے جانی پہچانی کسر — جیسے 0، 1/4، 1/2، 3/4، اور 1",
          },
        },
      ],
      lesson: {
        en: "🍕 **Adding fractions = sharing more fairly!**\n\nWhen fractions have the **same denominator**, just add or subtract the **numerators** — the denominator stays the same.\n\n🧡 Adding: 2/8 + 3/8 = **5/8**\n(2 + 3 = 5, keep the 8)\n\n💛 Subtracting: 7/8 − 3/8 = **4/8 = 1/2**\n(7 − 3 = 4, keep the 8, then simplify)\n\n🌍 Real example: A community garden is divided into 8 equal sections.\n- Your class plants vegetables in 3/8 of the garden\n- Another class plants flowers in 2/8\n- Together: 3/8 + 2/8 = **5/8** of the garden is being used to feed and beautify the neighborhood!\n\nUse benchmark fractions to check: is 5/8 close to 1/2 or 1? It's a bit more than 1/2 — that makes sense! ✅",
        es: "🍕 **¡Sumar fracciones = compartir de manera más justa!**\n\nCuando las fracciones tienen el **mismo denominador**, solo suma o resta los **numeradores** — el denominador se queda igual.\n\n🧡 Suma: 2/8 + 3/8 = **5/8**\n(2 + 3 = 5, mantén el 8)\n\n💛 Resta: 7/8 − 3/8 = **4/8 = 1/2**\n(7 − 3 = 4, mantén el 8, luego simplifica)\n\n🌍 Ejemplo real: Un jardín comunitario está dividido en 8 secciones iguales.\n- Tu clase planta verduras en 3/8 del jardín\n- Otra clase planta flores en 2/8\n- Juntos: 3/8 + 2/8 = **5/8** del jardín se usa para alimentar y embellecer el vecindario!\n\n¡Usa fracciones de referencia para verificar: ¿está 5/8 cerca de 1/2 o de 1? Es un poco más de 1/2 — ¡eso tiene sentido! ✅",
        ur: "🍕 **کسریں جمع کرنا = زیادہ منصفانہ بانٹنا!**\n\nجب کسروں کا **مخرج ایک جیسا** ہو تو صرف **شمارے** جمع یا تفریق کرو — مخرج ویسا ہی رہتا ہے۔\n\n🧡 جمع: 2/8 + 3/8 = **5/8**\n(2 + 3 = 5، 8 رہنے دو)\n\n💛 تفریق: 7/8 − 3/8 = **4/8 = 1/2**\n(7 − 3 = 4، 8 رہنے دو، پھر آسان کرو)\n\n🌍 اصلی مثال: ایک کمیونٹی گارڈن 8 برابر حصوں میں بٹا ہے۔\n- تمہاری کلاس باغ کے 3/8 میں سبزیاں لگاتی ہے\n- دوسری کلاس 2/8 میں پھول لگاتی ہے\n- مل کر: 3/8 + 2/8 = **5/8** باغ کا حصہ محلے کو کھانا دینے اور خوبصورت بنانے کے لیے استعمال ہو رہا ہے!\n\nجانچ کے لیے حوالہ کسریں استعمال کرو: کیا 5/8، 1/2 کے قریب ہے یا 1 کے؟ یہ 1/2 سے تھوڑا زیادہ ہے — یہ سمجھ میں آتا ہے! ✅",
      },
      exercises: [
        {
          id: "ex-4.3E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Students used 3/6 of the compost pile on Monday and 2/6 on Tuesday to help the garden grow. What fraction of the compost was used in all?",
            es: "🌱 Los estudiantes usaron 3/6 del montón de compost el lunes y 2/6 el martes para ayudar a crecer el jardín. ¿Qué fracción del compost se usó en total?",
            ur: "🌱 طلبا نے باغ کو بڑھانے میں مدد کے لیے پیر کو کھاد کے ڈھیر کا 3/6 اور منگل کو 2/6 استعمال کیا۔ کل کھاد کا کون سا حصہ استعمال ہوا؟",
          },
          choices: [
            { en: "5/12", es: "5/12", ur: "5/12" },
            { en: "6/6", es: "6/6", ur: "6/6" },
            { en: "5/6", es: "5/6", ur: "5/6" },
            { en: "1/6", es: "1/6", ur: "1/6" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-4.3E-2",
          type: "multiple-choice",
          prompt: {
            en: "🥫 A community pantry had 7/8 of a shelf filled with canned food. After giving out supplies, 3/8 of the shelf was used. How much food is left on the shelf?",
            es: "🥫 Una despensa comunitaria tenía 7/8 de un estante lleno de comida enlatada. Después de repartir suministros, se usó 3/8 del estante. ¿Cuánta comida queda en el estante?",
            ur: "🥫 ایک کمیونٹی پینٹری کا 7/8 شیلف ڈبہ بند کھانے سے بھرا تھا۔ سامان بانٹنے کے بعد 3/8 شیلف استعمال ہو گئی۔ شیلف پر کتنا کھانا بچا؟",
          },
          choices: [
            { en: "3/8", es: "3/8", ur: "3/8" },
            { en: "1/2", es: "1/2", ur: "1/2" },
            { en: "4/8", es: "4/8", ur: "4/8" },
            { en: "Both 4/8 and 1/2 are correct", es: "Tanto 4/8 como 1/2 son correctos", ur: "4/8 اور 1/2 دونوں صحیح ہیں" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-4.3E-3",
          type: "true-false",
          prompt: {
            en: "⚖️ 3/4 + 1/4 = 4/4, which equals 1 whole. So if two groups each get a fair fraction of supplies and they add up to 1, then all supplies have been shared.",
            es: "⚖️ 3/4 + 1/4 = 4/4, que es igual a 1 entero. Entonces si dos grupos reciben cada uno una fracción justa de suministros y suman 1, todos los suministros han sido repartidos.",
            ur: "⚖️ 3/4 + 1/4 = 4/4، جو 1 پوری کے برابر ہے۔ تو اگر دو گروپوں کو سامان کی منصفانہ کسر ملے اور وہ مل کر 1 بنائیں تو تمام سامان بانٹا جا چکا ہے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-4.3E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A climate action project uses 4/10 of its budget on tree planting and 3/10 on recycling bins. What fraction of the budget was spent in all?",
            es: "🌍 Un proyecto de acción climática usa 4/10 de su presupuesto en plantar árboles y 3/10 en contenedores de reciclaje. ¿Qué fracción del presupuesto se gastó en total?",
            ur: "🌍 ایک موسمیاتی ایکشن پروجیکٹ اپنے بجٹ کا 4/10 درخت لگانے پر اور 3/10 ری سائیکلنگ بن پر خرچ کرتا ہے۔ کل بجٹ کا کون سا حصہ خرچ ہوا؟",
          },
          choices: [
            { en: "7/20", es: "7/20", ur: "7/20" },
            { en: "7/10", es: "7/10", ur: "7/10" },
            { en: "1/10", es: "1/10", ur: "1/10" },
            { en: "8/10", es: "8/10", ur: "8/10" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-4.3E-2",
          type: "multiple-choice",
          prompt: {
            en: "🤝 A school raised enough money to fill 1 whole shelf of books for a community library. They already donated 5/8 of the shelf. How much more do they need to donate?",
            es: "🤝 Una escuela recaudó suficiente dinero para llenar 1 estante completo de libros para la biblioteca comunitaria. Ya donaron 5/8 del estante. ¿Cuánto más necesitan donar?",
            ur: "🤝 ایک اسکول نے کمیونٹی لائبریری کے لیے 1 پوری شیلف کتابوں سے بھرنے کے لیے کافی پیسے جمع کیے۔ انہوں نے پہلے ہی شیلف کا 5/8 عطیہ کیا۔ انہیں کتنا مزید عطیہ کرنا ہے؟",
          },
          choices: [
            { en: "2/8", es: "2/8", ur: "2/8" },
            { en: "4/8", es: "4/8", ur: "4/8" },
            { en: "3/8", es: "3/8", ur: "3/8" },
            { en: "1/8", es: "1/8", ur: "1/8" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-4.3E-3",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A garden is split into 6 equal sections. Students planted herbs in 1/6, tomatoes in 2/6, and left 3/6 for neighbors to use. Is 1/6 + 2/6 + 3/6 = 1 whole garden?",
            es: "🌱 Un jardín está dividido en 6 secciones iguales. Los estudiantes plantaron hierbas en 1/6, tomates en 2/6 y dejaron 3/6 para que lo usen los vecinos. ¿Es 1/6 + 2/6 + 3/6 = 1 jardín entero?",
            ur: "🌱 ایک باغ 6 برابر حصوں میں بٹا ہے۔ طلبا نے 1/6 میں جڑی بوٹیاں، 2/6 میں ٹماٹر لگائے اور 3/6 پڑوسیوں کے لیے چھوڑا۔ کیا 1/6 + 2/6 + 3/6 = 1 پورا باغ ہے؟",
          },
          choices: [
            { en: "No — it equals 6/18", es: "No — equivale a 6/18", ur: "نہیں — یہ 6/18 کے برابر ہے" },
            { en: "Yes — 6/6 = 1 whole ✅", es: "Sí — 6/6 = 1 entero ✅", ur: "ہاں — 6/6 = 1 پوری ✅" },
            { en: "No — it equals 6/6 but not 1", es: "No — equivale a 6/6 pero no a 1", ur: "نہیں — یہ 6/6 کے برابر ہے لیکن 1 نہیں" },
          ],
          correctIndex: 1,
        },
      ],
    },

    // ─── Unit 3: Decimals ─────────────────────────────────────────────────────
    {
      teks: "4.2E",
      cambridge: "Stage 4 · 4Nf2",
      emoji: "💰",
      title: {
        en: "Decimals & Money",
        es: "Decimales y Dinero",
        ur: "اعشاریہ اور پیسہ",
      },
      vocabulary: [
        {
          id: "decimal",
          emoji: "•",
          word: { en: "decimal", es: "decimal", ur: "اعشاریہ" },
          definition: {
            en: "a number with a dot that shows parts less than one — like 0.5 or 3.75",
            es: "un número con un punto que muestra partes menores que uno — como 0.5 o 3.75",
            ur: "ایک نقطے والا نمبر جو ایک سے کم حصے دکھاتا ہے — جیسے 0.5 یا 3.75",
          },
        },
        {
          id: "tenths",
          emoji: "1️⃣",
          word: { en: "tenths", es: "décimas", ur: "دسویں" },
          definition: {
            en: "one place after the decimal point — splitting a whole into 10 equal parts",
            es: "un lugar después del punto decimal — dividir un entero en 10 partes iguales",
            ur: "اعشاری نقطے کے بعد پہلی جگہ — پوری چیز کو 10 برابر حصوں میں بانٹنا",
          },
        },
        {
          id: "hundredths",
          emoji: "💯",
          word: { en: "hundredths", es: "centésimas", ur: "سویں" },
          definition: {
            en: "two places after the decimal point — splitting a whole into 100 equal parts (like cents in a dollar)",
            es: "dos lugares después del punto decimal — dividir un entero en 100 partes iguales (como centavos en un dólar)",
            ur: "اعشاری نقطے کے بعد دوسری جگہ — پوری چیز کو 100 برابر حصوں میں بانٹنا (جیسے ڈالر میں سینٹ)",
          },
        },
        {
          id: "compare-decimals",
          emoji: "⚖️",
          word: { en: "compare decimals", es: "comparar decimales", ur: "اعشاریوں کا موازنہ" },
          definition: {
            en: "decide which decimal is greater, less, or equal — line up the decimal points first",
            es: "decidir qué decimal es mayor, menor o igual — primero alinea los puntos decimales",
            ur: "فیصلہ کرنا کہ کون سا اعشاریہ بڑا، چھوٹا یا برابر ہے — پہلے اعشاری نقطے ایک سیدھ میں کرو",
          },
        },
      ],
      lesson: {
        en: "💰 **Decimals help us manage money for good causes!**\n\nDecimals show amounts smaller than 1. In money:\n- $0.10 = 1 dime = one-tenth of a dollar (1/10)\n- $0.01 = 1 cent = one-hundredth of a dollar (1/100)\n- $3.75 = 3 dollars + 7 dimes + 5 cents\n\n🧡 Real example: Your class raises money for a community garden. You collected:\n- Monday: $12.50\n- Tuesday: $8.75\n- Total: $12.50 + $8.75 = **$21.25**\n\n🌍 To compare decimals, line up the decimal points:\n$8.75\n$8.50\n→ 8.75 > 8.50 because 7 tenths > 5 tenths\n\nEvery dollar and cent you raise can plant a seed, buy a book, or help a family. Decimals make your fundraising count! 💚",
        es: "💰 **¡Los decimales nos ayudan a administrar dinero para buenas causas!**\n\nLos decimales muestran cantidades menores que 1. En dinero:\n- $0.10 = 1 moneda de 10¢ = una décima de dólar (1/10)\n- $0.01 = 1 centavo = una centésima de dólar (1/100)\n- $3.75 = 3 dólares + 7 monedas de 10¢ + 5 centavos\n\n🧡 Ejemplo real: Tu clase recauda dinero para un jardín comunitario. Juntaron:\n- Lunes: $12.50\n- Martes: $8.75\n- Total: $12.50 + $8.75 = **$21.25**\n\n🌍 Para comparar decimales, alinea los puntos decimales:\n$8.75\n$8.50\n→ 8.75 > 8.50 porque 7 décimas > 5 décimas\n\n¡Cada dólar y centavo que recaudes puede plantar una semilla, comprar un libro o ayudar a una familia. ¡Los decimales hacen que tu recaudación cuente! 💚",
        ur: "💰 **اعشاریے اچھے مقاصد کے لیے پیسے سنبھالنے میں مدد کرتے ہیں!**\n\nاعشاریے 1 سے کم مقداریں دکھاتے ہیں۔ پیسوں میں:\n- $0.10 = 1 ڈائم = ڈالر کا دسواں حصہ (1/10)\n- $0.01 = 1 سینٹ = ڈالر کا سواں حصہ (1/100)\n- $3.75 = 3 ڈالر + 7 ڈائم + 5 سینٹ\n\n🧡 اصلی مثال: تمہاری کلاس کمیونٹی گارڈن کے لیے پیسے جمع کرتی ہے:\n- پیر: $12.50\n- منگل: $8.75\n- کل: $12.50 + $8.75 = **$21.25**\n\n🌍 اعشاریوں کا موازنہ کرنے کے لیے اعشاری نقطے ایک سیدھ میں کرو:\n$8.75\n$8.50\n→ 8.75 > 8.50 کیونکہ 7 دسویں > 5 دسویں\n\nتم جو ہر ڈالر اور سینٹ جمع کرتے ہو وہ بیج لگا سکتا ہے، کتاب خرید سکتا ہے، یا ایک خاندان کی مدد کر سکتا ہے۔ اعشاریے تمہاری فنڈ ریزنگ کو اہم بناتے ہیں! 💚",
      },
      exercises: [
        {
          id: "ex-4.2E-1",
          type: "multiple-choice",
          prompt: {
            en: "💰 A student raises $4.60 selling lemonade for a food bank. Another raises $3.85. Which amount is greater?",
            es: "💰 Un estudiante recauda $4.60 vendiendo limonada para un banco de alimentos. Otro recauda $3.85. ¿Cuál cantidad es mayor?",
            ur: "💰 ایک طالب علم فوڈ بینک کے لیے لیمنیڈ بیچ کر $4.60 جمع کرتا ہے۔ دوسرا $3.85 جمع کرتا ہے۔ کون سی رقم زیادہ ہے؟",
          },
          choices: [
            { en: "$3.85", es: "$3.85", ur: "$3.85" },
            { en: "They are equal", es: "Son iguales", ur: "وہ برابر ہیں" },
            { en: "$4.60", es: "$4.60", ur: "$4.60" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-4.2E-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Seeds for the garden cost $2.35 per packet. A student has $2.50. How much change will they receive?",
            es: "🌱 Las semillas para el jardín cuestan $2.35 por sobre. Un estudiante tiene $2.50. ¿Cuánto cambio recibirá?",
            ur: "🌱 باغ کے بیجوں کی قیمت فی پیکٹ $2.35 ہے۔ ایک طالب علم کے پاس $2.50 ہے۔ اسے کتنا بقایا ملے گا؟",
          },
          choices: [
            { en: "$0.25", es: "$0.25", ur: "$0.25" },
            { en: "$0.10", es: "$0.10", ur: "$0.10" },
            { en: "$0.20", es: "$0.20", ur: "$0.20" },
            { en: "$0.15", es: "$0.15", ur: "$0.15" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-4.2E-3",
          type: "true-false",
          prompt: {
            en: "♻️ The class collected $15.40 in coins for a recycling drive. $15.40 is the same as 15 dollars and 4 dimes.",
            es: "♻️ La clase juntó $15.40 en monedas para una campaña de reciclaje. $15.40 es lo mismo que 15 dólares y 4 monedas de 10 centavos.",
            ur: "♻️ کلاس نے ری سائیکلنگ مہم کے لیے سکوں میں $15.40 جمع کیے۔ $15.40 کا مطلب ہے 15 ڈالر اور 4 ڈائم۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-4.2E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 Three students raised money for a climate fund: Aisha raised $9.25, Leo raised $9.52, and Maya raised $9.05. Who raised the most?",
            es: "🌍 Tres estudiantes recaudaron dinero para un fondo climático: Aisha recaudó $9.25, Leo recaudó $9.52 y Maya recaudó $9.05. ¿Quién recaudó más?",
            ur: "🌍 تین طالب علموں نے موسمیاتی فنڈ کے لیے پیسے جمع کیے: عائشہ نے $9.25، لیو نے $9.52، اور مایا نے $9.05 جمع کیے۔ سب سے زیادہ کس نے جمع کیا؟",
          },
          choices: [
            { en: "Aisha — $9.25", es: "Aisha — $9.25", ur: "عائشہ — $9.25" },
            { en: "Maya — $9.05", es: "Maya — $9.05", ur: "مایا — $9.05" },
            { en: "Leo — $9.52", es: "Leo — $9.52", ur: "لیو — $9.52" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-4.2E-2",
          type: "multiple-choice",
          prompt: {
            en: "💰 A community bake sale raised $24.75 on Saturday and $18.30 on Sunday for the school garden fund. How much was raised in all?",
            es: "💰 Una venta de pasteles comunitaria recaudó $24.75 el sábado y $18.30 el domingo para el fondo del jardín escolar. ¿Cuánto se recaudó en total?",
            ur: "💰 ایک کمیونٹی بیک سیل نے اسکول گارڈن فنڈ کے لیے ہفتہ کو $24.75 اور اتوار کو $18.30 جمع کیے۔ کل کتنا جمع ہوا؟",
          },
          choices: [
            { en: "$42.05", es: "$42.05", ur: "$42.05" },
            { en: "$43.05", es: "$43.05", ur: "$43.05" },
            { en: "$43.50", es: "$43.50", ur: "$43.50" },
            { en: "$42.50", es: "$42.50", ur: "$42.50" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-4.2E-3",
          type: "multiple-choice",
          prompt: {
            en: "📚 A book costs $6.99. A student has a $10 bill to buy it for the classroom library. How much change should they get?",
            es: "📚 Un libro cuesta $6.99. Un estudiante tiene un billete de $10 para comprarlo para la biblioteca del salón. ¿Cuánto cambio debe recibir?",
            ur: "📚 ایک کتاب کی قیمت $6.99 ہے۔ ایک طالب علم کے پاس کلاس لائبریری کے لیے خریدنے کو $10 کا نوٹ ہے۔ اسے کتنا بقایا ملنا چاہیے؟",
          },
          choices: [
            { en: "$4.01", es: "$4.01", ur: "$4.01" },
            { en: "$3.01", es: "$3.01", ur: "$3.01" },
            { en: "$3.11", es: "$3.11", ur: "$3.11" },
            { en: "$3.99", es: "$3.99", ur: "$3.99" },
          ],
          correctIndex: 1,
        },
      ],
    },

    // ─── Unit 4: Perimeter & Area ─────────────────────────────────────────────
    {
      teks: "4.5D",
      cambridge: "Stage 4 · 4Ml1",
      emoji: "🏡",
      title: {
        en: "Perimeter & Area",
        es: "Perímetro y Área",
        ur: "محیط اور رقبہ",
      },
      vocabulary: [
        {
          id: "perimeter",
          emoji: "🔲",
          word: { en: "perimeter", es: "perímetro", ur: "محیط" },
          definition: {
            en: "the total distance around the outside edge of a shape",
            es: "la distancia total alrededor del borde exterior de una figura",
            ur: "کسی شکل کے باہری کنارے کے گرد کل فاصلہ",
          },
        },
        {
          id: "area",
          emoji: "📐",
          word: { en: "area", es: "área", ur: "رقبہ" },
          definition: {
            en: "the amount of surface inside a shape — measured in square units",
            es: "la cantidad de superficie dentro de una figura — medida en unidades cuadradas",
            ur: "کسی شکل کے اندر سطح کی مقدار — مربع اکائیوں میں ناپی جاتی ہے",
          },
        },
        {
          id: "perimeter-formula",
          emoji: "🔢",
          word: { en: "perimeter formula", es: "fórmula de perímetro", ur: "محیط کا فارمولہ" },
          definition: {
            en: "for a rectangle: P = 2l + 2w (add all four sides)",
            es: "para un rectángulo: P = 2l + 2w (suma los cuatro lados)",
            ur: "مستطیل کے لیے: P = 2l + 2w (چاروں اطراف جمع کرو)",
          },
        },
        {
          id: "area-formula",
          emoji: "🔢",
          word: { en: "area formula", es: "fórmula de área", ur: "رقبے کا فارمولہ" },
          definition: {
            en: "for a rectangle: A = l × w (length times width)",
            es: "para un rectángulo: A = l × w (longitud por ancho)",
            ur: "مستطیل کے لیے: A = l × w (لمبائی ضرب چوڑائی)",
          },
        },
        {
          id: "dimension",
          emoji: "↔️",
          word: { en: "dimension", es: "dimensión", ur: "جہت" },
          definition: {
            en: "a measurement of a shape — length and width are the two dimensions of a rectangle",
            es: "una medida de una figura — la longitud y el ancho son las dos dimensiones de un rectángulo",
            ur: "کسی شکل کی پیمائش — لمبائی اور چوڑائی مستطیل کی دو جہتیں ہیں",
          },
        },
      ],
      lesson: {
        en: "🏡 **Perimeter and area help us design spaces for our community!**\n\n**Perimeter** = the fence around a garden — add all sides\n**Area** = the growing space inside — length × width\n\n🧡 Example: A community garden plot is 12 m long and 8 m wide.\n- Perimeter = 2(12) + 2(8) = 24 + 16 = **40 meters** of fencing needed\n- Area = 12 × 8 = **96 square meters** of growing space!\n\n⚠️ Key difference:\n- Perimeter is measured in **units** (m, ft)\n- Area is measured in **square units** (m², ft²)\n\n🌍 When communities design parks, playgrounds, and gardens, they use perimeter to buy fencing or borders, and area to figure out how much space is inside. This math helps create safe, beautiful public spaces for everyone! 🌱",
        es: "🏡 **¡El perímetro y el área nos ayudan a diseñar espacios para nuestra comunidad!**\n\n**Perímetro** = la cerca alrededor de un jardín — suma todos los lados\n**Área** = el espacio para cultivar adentro — longitud × ancho\n\n🧡 Ejemplo: Una parcela del jardín comunitario mide 12 m de largo y 8 m de ancho.\n- Perímetro = 2(12) + 2(8) = 24 + 16 = **40 metros** de cerca necesaria\n- Área = 12 × 8 = **96 metros cuadrados** de espacio para cultivar!\n\n⚠️ Diferencia clave:\n- El perímetro se mide en **unidades** (m, pie)\n- El área se mide en **unidades cuadradas** (m², pie²)\n\n🌍 Cuando las comunidades diseñan parques, patios de recreo y jardines, usan el perímetro para comprar cercas o bordes, y el área para saber cuánto espacio hay adentro. ¡Esta matemática ayuda a crear espacios públicos seguros y hermosos para todos! 🌱",
        ur: "🏡 **محیط اور رقبہ کمیونٹی کے لیے جگہیں ڈیزائن کرنے میں مدد کرتے ہیں!**\n\n**محیط** = باغ کے گرد باڑ — سارے اطراف جمع کرو\n**رقبہ** = اندر اگانے کی جگہ — لمبائی × چوڑائی\n\n🧡 مثال: ایک کمیونٹی گارڈن پلاٹ 12 میٹر لمبا اور 8 میٹر چوڑا ہے۔\n- محیط = 2(12) + 2(8) = 24 + 16 = **40 میٹر** باڑ درکار\n- رقبہ = 12 × 8 = **96 مربع میٹر** اگانے کی جگہ!\n\n⚠️ اہم فرق:\n- محیط **اکائیوں** میں ناپا جاتا ہے (میٹر، فٹ)\n- رقبہ **مربع اکائیوں** میں ناپا جاتا ہے (م²، فٹ²)\n\n🌍 جب کمیونٹیز پارک، کھیل کے میدان اور باغات بناتی ہیں تو باڑ یا حدود خریدنے کے لیے محیط اور اندر کتنی جگہ ہے یہ جاننے کے لیے رقبہ استعمال کرتی ہیں۔ یہ ریاضی سب کے لیے محفوظ، خوبصورت عوامی جگہیں بنانے میں مدد کرتی ہے! 🌱",
      },
      exercises: [
        {
          id: "ex-4.5D-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A school garden is 15 meters long and 9 meters wide. The class wants to put a fence all the way around it. How much fencing do they need?",
            es: "🌱 Un jardín escolar mide 15 metros de largo y 9 metros de ancho. La clase quiere poner una cerca alrededor de todo. ¿Cuánta cerca necesitan?",
            ur: "🌱 ایک اسکول گارڈن 15 میٹر لمبا اور 9 میٹر چوڑا ہے۔ کلاس اس کے گرد باڑ لگانا چاہتی ہے۔ انہیں کتنی باڑ چاہیے؟",
          },
          choices: [
            { en: "48 meters", es: "48 metros", ur: "48 میٹر" },
            { en: "135 meters", es: "135 metros", ur: "135 میٹر" },
            { en: "24 meters", es: "24 metros", ur: "24 میٹر" },
            { en: "48 square meters", es: "48 metros cuadrados", ur: "48 مربع میٹر" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-4.5D-2",
          type: "multiple-choice",
          prompt: {
            en: "🏫 A new community playground is 20 meters long and 14 meters wide. What is the area of the playground?",
            es: "🏫 Un nuevo parque comunitario mide 20 metros de largo y 14 metros de ancho. ¿Cuál es el área del parque?",
            ur: "🏫 ایک نئے کمیونٹی کھیل کے میدان کی لمبائی 20 میٹر اور چوڑائی 14 میٹر ہے۔ کھیل کے میدان کا رقبہ کیا ہے؟",
          },
          choices: [
            { en: "68 square meters", es: "68 metros cuadrados", ur: "68 مربع میٹر" },
            { en: "280 meters", es: "280 metros", ur: "280 میٹر" },
            { en: "280 square meters", es: "280 metros cuadrados", ur: "280 مربع میٹر" },
            { en: "34 square meters", es: "34 metros cuadrados", ur: "34 مربع میٹر" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-4.5D-3",
          type: "true-false",
          prompt: {
            en: "☀️ A rooftop solar panel array is 11 feet long and 6 feet wide. Its perimeter is 2(11) + 2(6) = 34 feet, and its area is 11 × 6 = 66 square feet.",
            es: "☀️ Un conjunto de paneles solares en el techo mide 11 pies de largo y 6 pies de ancho. Su perímetro es 2(11) + 2(6) = 34 pies, y su área es 11 × 6 = 66 pies cuadrados.",
            ur: "☀️ چھت پر سولر پینل کی صف 11 فٹ لمبی اور 6 فٹ چوڑی ہے۔ اس کا محیط 2(11) + 2(6) = 34 فٹ ہے، اور رقبہ 11 × 6 = 66 مربع فٹ ہے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      quiz: [
        {
          id: "qz-4.5D-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A mural about global warming will be painted on a rectangular wall 18 feet long and 7 feet tall. What is the area of the mural?",
            es: "🌍 Un mural sobre el calentamiento global se pintará en una pared rectangular de 18 pies de largo y 7 pies de alto. ¿Cuál es el área del mural?",
            ur: "🌍 گلوبل وارمنگ کے بارے میں ایک دیواری تصویر 18 فٹ لمبی اور 7 فٹ اونچی مستطیل دیوار پر بنائی جائے گی۔ دیواری تصویر کا رقبہ کیا ہے؟",
          },
          choices: [
            { en: "50 square feet", es: "50 pies cuadrados", ur: "50 مربع فٹ" },
            { en: "126 feet", es: "126 pies", ur: "126 فٹ" },
            { en: "116 square feet", es: "116 pies cuadrados", ur: "116 مربع فٹ" },
            { en: "126 square feet", es: "126 pies cuadrados", ur: "126 مربع فٹ" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-4.5D-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A community needs to fence a rectangular vegetable garden that is 16 m long and 11 m wide. How many meters of fencing are needed?",
            es: "🌱 Una comunidad necesita cercar un jardín rectangular de 16 m de largo y 11 m de ancho. ¿Cuántos metros de cerca se necesitan?",
            ur: "🌱 ایک کمیونٹی کو 16 میٹر لمبے اور 11 میٹر چوڑے مستطیل سبزی کے باغ کی باڑ لگانی ہے۔ کتنے میٹر باڑ چاہیے؟",
          },
          choices: [
            { en: "54 meters", es: "54 metros", ur: "54 میٹر" },
            { en: "176 meters", es: "176 metros", ur: "176 میٹر" },
            { en: "27 meters", es: "27 metros", ur: "27 میٹر" },
            { en: "176 square meters", es: "176 metros cuadrados", ur: "176 مربع میٹر" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-4.5D-3",
          type: "multiple-choice",
          prompt: {
            en: "🏡 Two garden plots are available for families. Plot A: 13 m × 5 m. Plot B: 9 m × 8 m. Which plot has the greater area?",
            es: "🏡 Hay dos parcelas disponibles para familias. Parcela A: 13 m × 5 m. Parcela B: 9 m × 8 m. ¿Qué parcela tiene mayor área?",
            ur: "🏡 خاندانوں کے لیے دو گارڈن پلاٹ دستیاب ہیں۔ پلاٹ A: 13 م × 5 م۔ پلاٹ B: 9 م × 8 م۔ کس پلاٹ کا رقبہ زیادہ ہے؟",
          },
          choices: [
            { en: "Plot A — 65 m²", es: "Parcela A — 65 m²", ur: "پلاٹ A — 65 م²" },
            { en: "Plot B — 72 m²", es: "Parcela B — 72 m²", ur: "پلاٹ B — 72 م²" },
            { en: "They are equal", es: "Son iguales", ur: "وہ برابر ہیں" },
          ],
          correctIndex: 1,
        },
      ],
    },

  ],
};

export default grade4;
