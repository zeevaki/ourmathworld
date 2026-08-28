import { Grade } from "./types";

const grade1: Grade = {
  grade: 1,
  label: "Grade 1",
  emoji: "🌱",
  color: "#22C55E",
  units: [

    // ─── Bundling to 120 ──────────────────────────────────────────────────────
    {
      teks: "1.2B",
      cambridge: "Stage 1 · 1Nn6",
      emoji: "📦",
      title: {
        en: "Bundling to 120",
        es: "Agrupar hasta 120",
        ur: "120 تک بنڈل بنانا",
      },
      learningObjective: {
        en: "I am learning to compose and decompose numbers up to 120 using tens and ones so that I can understand what a number really means.",
        es: "Estoy aprendiendo a componer y descomponer números hasta 120 usando decenas y unidades para poder entender lo que un número realmente significa.",
        ur: "میں دہائیوں اور اکائیوں کا استعمال کرتے ہوئے 120 تک نمبر جوڑنا اور توڑنا سیکھ رہا ہوں تاکہ سمجھ سکوں کہ نمبر کا اصل مطلب کیا ہے۔",
      },
      successCriteria: [
        { en: "I can build a number by counting bundles of ten and leftover ones.", es: "Puedo construir un número contando grupos de diez y las unidades que sobran.", ur: "میں دس کے بنڈل اور بچی ہوئی اکائیاں گن کر ایک نمبر بنا سکتا ہوں۔" },
        { en: "I can break a number apart into tens and ones in more than one way.", es: "Puedo separar un número en decenas y unidades de más de una forma.", ur: "میں ایک نمبر کو دہائیوں اور اکائیوں میں ایک سے زیادہ طریقوں سے توڑ سکتا ہوں۔" },
        { en: "I can show a number up to 120 using bundles.", es: "Puedo mostrar un número hasta 120 usando grupos.", ur: "میں بنڈلوں کا استعمال کرتے ہوئے 120 تک نمبر دکھا سکتا ہوں۔" },
      ],
      lessonImage: "1.2B_Lesson.png",
      vocabulary: [
        {
          id: "bundle-of-ten",
          emoji: "📦",
          word: { en: "bundle of ten", es: "grupo de diez", ur: "دس کا بنڈل" },
          definition: {
            en: "ten ones grouped or tied together to make counting faster and easier",
            es: "diez unidades agrupadas o atadas juntas para contar más rápido y fácil",
            ur: "دس اکائیاں ایک ساتھ گروہ بند کی گئیں تاکہ گنتی تیز اور آسان ہو",
          },
        },
        {
          id: "tens-ones-120",
          emoji: "🔟",
          word: { en: "tens and ones", es: "decenas y unidades", ur: "دہائیاں اور اکائیاں" },
          definition: {
            en: "the two place values we use to build numbers — how many bundles of ten, and how many are left over",
            es: "los dos valores posicionales que usamos para construir números — cuántos grupos de diez, y cuántos quedan sueltos",
            ur: "دو جگہ کی قدریں جو نمبر بنانے میں استعمال ہوتی ہیں — کتنے دس کے بنڈل، اور کتنے اکیلے بچے",
          },
        },
        {
          id: "hundred-bundle",
          emoji: "💯",
          word: { en: "hundred", es: "centena", ur: "سو" },
          definition: {
            en: "ten bundles of ten grouped together to make one hundred",
            es: "diez grupos de diez agrupados juntos para formar una centena",
            ur: "دس کے دس بنڈل مل کر ایک سو بناتے ہیں",
          },
        },
        {
          id: "compose-120",
          emoji: "🧩",
          word: { en: "compose", es: "componer", ur: "جوڑنا" },
          definition: {
            en: "put tens and ones together to build a number",
            es: "juntar decenas y unidades para construir un número",
            ur: "ایک نمبر بنانے کے لیے دہائیاں اور اکائیاں جوڑنا",
          },
        },
        {
          id: "decompose-120",
          emoji: "🔓",
          word: { en: "decompose", es: "descomponer", ur: "توڑنا" },
          definition: {
            en: "break a number apart into tens and ones — there is more than one way to do it!",
            es: "separar un número en decenas y unidades — ¡hay más de una forma de hacerlo!",
            ur: "ایک نمبر کو دہائیوں اور اکائیوں میں توڑنا — اسے کرنے کے ایک سے زیادہ طریقے ہیں!",
          },
        },
      ],
      lesson: {
        en: "📦 **Bundling makes big numbers easy to build!**\n\nWhen our community collects cans, bottles, or seed packets for a good cause, we bundle them into groups of ten — it makes counting fast, even for big piles!\n\n**Building a number:** Count the bundles of ten, then count what's left over.\n\n🧡 Example: A recycling club collects cans and bundles them by ten.\nThey have **6 bundles of ten** and **3 loose cans**.\n6 tens + 3 ones = **63 cans!**\n\n**Numbers past 100:** Ten bundles of ten make **one hundred**! If a food drive collects 112 cans, that's **1 hundred, 1 ten, and 2 ones**.\n\n**More than one way:** 63 can also be built as **5 tens + 13 ones** — same total, different bundles! Numbers up to 120 can always be composed and decomposed more than one way.\n\nBundling isn't just neat — it helps our whole community count faster when we're working together to help the planet! 🌍",
        es: "📦 **¡Agrupar hace que los números grandes sean fáciles de construir!**\n\nCuando nuestra comunidad recolecta latas, botellas o sobres de semillas para una buena causa, las agrupamos de diez en diez — ¡así contamos rápido, incluso montones grandes!\n\n**Construir un número:** Cuenta los grupos de diez, luego cuenta lo que sobra.\n\n🧡 Ejemplo: Un club de reciclaje recolecta latas y las agrupa de diez en diez.\nTienen **6 grupos de diez** y **3 latas sueltas**.\n6 decenas + 3 unidades = **¡63 latas!**\n\n**Números después de 100:** ¡Diez grupos de diez forman **una centena**! Si una colecta de comida junta 112 latas, eso es **1 centena, 1 decena y 2 unidades**.\n\n**Más de una forma:** 63 también se puede formar como **5 decenas + 13 unidades** — ¡el mismo total, con grupos diferentes! Los números hasta 120 siempre se pueden componer y descomponer de más de una manera.\n\n¡Agrupar no solo es ordenado — ayuda a toda nuestra comunidad a contar más rápido cuando trabajamos juntos para ayudar al planeta! 🌍",
        ur: "📦 **بنڈل بنانا بڑے نمبر آسانی سے بنانے میں مدد دیتا ہے!**\n\nجب ہماری کمیونٹی کسی اچھے مقصد کے لیے ڈبے، بوتلیں یا بیجوں کے پیکٹ جمع کرتی ہے، تو ہم انہیں دس دس کے بنڈل میں گروہ بند کرتے ہیں — اس سے بڑے ڈھیر بھی جلدی گنے جا سکتے ہیں!\n\n**نمبر بنانا:** پہلے دس کے بنڈل گنو، پھر جو بچا ہے اسے گنو۔\n\n🧡 مثال: ایک ری سائیکلنگ کلب ڈبے جمع کرتا ہے اور انہیں دس دس کے بنڈل میں گروہ بند کرتا ہے۔\nان کے پاس **6 بنڈل دس کے** اور **3 اکیلے ڈبے** ہیں۔\n6 دہائیاں + 3 اکائیاں = **63 ڈبے!**\n\n**100 کے بعد کے نمبر:** دس کے دس بنڈل مل کر **ایک سو** بناتے ہیں! اگر کھانے کی مہم 112 ڈبے جمع کرے، تو یہ **1 سو، 1 دہائی، اور 2 اکائیاں** ہیں۔\n\n**ایک سے زیادہ طریقے:** 63 کو **5 دہائیاں + 13 اکائیاں** کے طور پر بھی بنایا جا سکتا ہے — وہی کل تعداد، مختلف بنڈل! 120 تک کے نمبر ہمیشہ ایک سے زیادہ طریقوں سے جوڑے اور توڑے جا سکتے ہیں۔\n\nبنڈل بنانا صرف صاف ستھرا نہیں — یہ پوری کمیونٹی کو تیزی سے گننے میں مدد دیتا ہے جب ہم مل کر زمین کی مدد کر رہے ہوں! 🌍",
      },
      exercises: [
        {
          id: "ex-1.2B-1",
          type: "multiple-choice",
          prompt: {
            en: "♻️ A recycling club bundles cans into groups of ten. They have 6 bundles of ten and 3 loose cans. How many cans do they have in all?",
            es: "♻️ Un club de reciclaje agrupa las latas de diez en diez. Tienen 6 grupos de diez y 3 latas sueltas. ¿Cuántas latas tienen en total?",
            ur: "♻️ ایک ری سائیکلنگ کلب ڈبوں کو دس دس کے گروہ میں بنڈل کرتا ہے۔ ان کے پاس 6 بنڈل دس کے اور 3 اکیلے ڈبے ہیں۔ ان کے پاس کل کتنے ڈبے ہیں؟",
          },
          choices: [
            { en: "63", es: "63", ur: "63" },
            { en: "36", es: "36", ur: "36" },
            { en: "60", es: "60", ur: "60" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-1.2B-2",
          type: "multiple-choice",
          prompt: {
            en: "🌳 A tree-planting group has 84 seedlings. Which shows 84 built from tens and ones?",
            es: "🌳 Un grupo de siembra de árboles tiene 84 plantas. ¿Cuál muestra el 84 formado con decenas y unidades?",
            ur: "🌳 ایک درخت لگانے والے گروہ کے پاس 84 پودے ہیں۔ کون سا دکھاتا ہے کہ 84 دہائیوں اور اکائیوں سے کیسے بنا؟",
          },
          choices: [
            { en: "8 tens + 4 ones", es: "8 decenas + 4 unidades", ur: "8 دہائیاں + 4 اکائیاں" },
            { en: "4 tens + 8 ones", es: "4 decenas + 8 unidades", ur: "4 دہائیاں + 8 اکائیاں" },
            { en: "8 tens + 40 ones", es: "8 decenas + 40 unidades", ur: "8 دہائیاں + 40 اکائیاں" },
            { en: "80 tens + 4 ones", es: "80 decenas + 4 unidades", ur: "80 دہائیاں + 4 اکائیاں" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-1.2B-3",
          type: "true-false",
          prompt: {
            en: "💯 A community food drive collected 112 bottles. That means they have 1 hundred, 1 ten, and 2 ones.",
            es: "💯 Una colecta comunitaria de alimentos recolectó 112 botellas. Eso significa que tienen 1 centena, 1 decena y 2 unidades.",
            ur: "💯 ایک کمیونٹی فوڈ ڈرائیو نے 112 بوتلیں جمع کیں۔ اس کا مطلب ہے کہ ان کے پاس 1 سو، 1 دہائی اور 2 اکائیاں ہیں۔",
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
          id: "qz-1.2B-1",
          type: "multiple-choice",
          prompt: {
            en: "♻️ A recycling drive collected 9 bundles of ten cans and 5 loose cans. How many cans in total?",
            es: "♻️ Una campaña de reciclaje recolectó 9 grupos de diez latas y 5 latas sueltas. ¿Cuántas latas en total?",
            ur: "♻️ ایک ری سائیکلنگ مہم نے 9 بنڈل دس دس ڈبوں کے اور 5 اکیلے ڈبے جمع کیے۔ کل کتنے ڈبے ہیں؟",
          },
          choices: [
            { en: "95", es: "95", ur: "95" },
            { en: "59", es: "59", ur: "59" },
            { en: "90", es: "90", ur: "90" },
            { en: "14", es: "14", ur: "14" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-1.2B-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 57 seed packets need to be bundled for planting day. Which is one way to compose 57?",
            es: "🌱 57 sobres de semillas necesitan agruparse para el día de siembra. ¿Cuál es una forma de componer el 57?",
            ur: "🌱 پودے لگانے کے دن کے لیے 57 بیجوں کے پیکٹ بنڈل کرنے ہیں۔ 57 بنانے کا ایک طریقہ کون سا ہے؟",
          },
          choices: [
            { en: "5 tens + 7 ones", es: "5 decenas + 7 unidades", ur: "5 دہائیاں + 7 اکائیاں" },
            { en: "7 tens + 5 ones", es: "7 decenas + 5 unidades", ur: "7 دہائیاں + 5 اکائیاں" },
            { en: "50 tens + 7 ones", es: "50 decenas + 7 unidades", ur: "50 دہائیاں + 7 اکائیاں" },
            { en: "5 tens + 70 ones", es: "5 decenas + 70 unidades", ur: "5 دہائیاں + 70 اکائیاں" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-1.2B-3",
          type: "multiple-choice",
          prompt: {
            en: "🔓 42 = 4 tens + 2 ones. Which is another correct way to build 42?",
            es: "🔓 42 = 4 decenas + 2 unidades. ¿Cuál es otra forma correcta de construir el 42?",
            ur: "🔓 42 = 4 دہائیاں + 2 اکائیاں۔ 42 بنانے کا ایک اور درست طریقہ کون سا ہے؟",
          },
          choices: [
            { en: "3 tens + 12 ones", es: "3 decenas + 12 unidades", ur: "3 دہائیاں + 12 اکائیاں" },
            { en: "5 tens + 2 ones", es: "5 decenas + 2 unidades", ur: "5 دہائیاں + 2 اکائیاں" },
            { en: "4 tens + 20 ones", es: "4 decenas + 20 unidades", ur: "4 دہائیاں + 20 اکائیاں" },
            { en: "2 tens + 4 ones", es: "2 decenas + 4 unidades", ur: "2 دہائیاں + 4 اکائیاں" },
          ],
          correctIndex: 0,
        },
      ],
    },

    // ─── Unit 1: Comparing Numbers >, <, = ───────────────────────────────────
    {
      teks: "1.2G",
      cambridge: "Stage 1 · 1Nn3",
      emoji: "⚖️",
      title: {
        en: "Comparing Numbers",
        es: "Comparar Números",
        ur: "نمبروں کا موازنہ",
      },
      learningObjective: {
        en: "I am learning to compare two numbers so that I can tell which is greater, less, or equal using >, <, or =.",
        es: "Estoy aprendiendo a comparar dos números para poder decir cuál es mayor, menor o igual usando >, < o =.",
        ur: "میں دو نمبروں کا موازنہ کرنا سیکھ رہا ہوں تاکہ >، <، یا = استعمال کر کے بتا سکوں کون بڑا، چھوٹا یا برابر ہے۔",
      },
      successCriteria: [
        { en: "I can compare two numbers and choose the correct symbol: >, <, or =.", es: "Puedo comparar dos números y elegir el símbolo correcto: >, < o =.", ur: "میں دو نمبروں کا موازنہ کر کے صحیح نشان چن سکتا ہوں: >، <، یا =۔" },
        { en: "I can explain why one number is greater or less than another.", es: "Puedo explicar por qué un número es mayor o menor que otro.", ur: "میں وضاحت کر سکتا ہوں کہ ایک نمبر دوسرے سے بڑا یا چھوٹا کیوں ہے۔" },
        { en: "I can use comparing words like greater than and less than out loud.", es: "Puedo usar palabras de comparación como mayor que y menor que en voz alta.", ur: "میں زیادہ اور کم جیسے موازنہ کرنے والے الفاظ زبانی استعمال کر سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "greater-than",
          emoji: "➡️",
          word: { en: "greater than  >", es: "mayor que  >", ur: "زیادہ ہے  >" },
          definition: {
            en: "the first number is bigger — the open side points to the bigger number",
            es: "el primer número es más grande — el lado abierto señala al número mayor",
            ur: "پہلا نمبر بڑا ہے — کھلی طرف بڑے نمبر کی طرف ہوتی ہے",
          },
        },
        {
          id: "less-than",
          emoji: "⬅️",
          word: { en: "less than  <", es: "menor que  <", ur: "کم ہے  <" },
          definition: {
            en: "the first number is smaller — the open side still points to the bigger number",
            es: "el primer número es más pequeño — el lado abierto sigue señalando al número mayor",
            ur: "پہلا نمبر چھوٹا ہے — کھلی طرف پھر بھی بڑے نمبر کی طرف ہوتی ہے",
          },
        },
        {
          id: "equal-to",
          emoji: "🟰",
          word: { en: "equal to  =", es: "igual a  =", ur: "برابر ہے  =" },
          definition: {
            en: "both numbers are exactly the same — completely fair",
            es: "ambos números son exactamente iguales — completamente justo",
            ur: "دونوں نمبر بالکل ایک جیسے ہیں — مکمل انصاف",
          },
        },
        {
          id: "compare",
          emoji: "🔍",
          word: { en: "compare", es: "comparar", ur: "موازنہ کرنا" },
          definition: {
            en: "look at two numbers and decide which is bigger, smaller, or the same",
            es: "mirar dos números y decidir cuál es mayor, menor o igual",
            ur: "دو نمبروں کو دیکھنا اور فیصلہ کرنا کہ کون بڑا، چھوٹا یا برابر ہے",
          },
        },
      ],
      lesson: {
        en: "⚖️ **Fair sharing starts with comparing!**\n\nWhen we share things in our community, we compare numbers to make sure everyone gets a fair amount.\n\nWe use three symbols:\n- **>** means **greater than** → 15 > 8 (15 is greater than 8)\n- **<** means **less than** → 8 < 15 (8 is less than 15)\n- **=** means **equal to** → 10 = 10 (both the same — fair!)\n\n🧡 Tip: Think of the symbol as a hungry crocodile mouth. The open mouth always faces the **bigger** number because it wants to eat the bigger one!\n\nWhen we see that one classroom has **more** supplies than another, we can use math to make it fair for everyone! ⚖️",
        es: "⚖️ **¡Compartir de forma justa empieza con comparar!**\n\nCuando compartimos cosas en nuestra comunidad, comparamos números para asegurarnos de que todos reciban una cantidad justa.\n\nUsamos tres símbolos:\n- **>** significa **mayor que** → 15 > 8 (15 es mayor que 8)\n- **<** significa **menor que** → 8 < 15 (8 es menor que 15)\n- **=** significa **igual a** → 10 = 10 (¡los dos son iguales — justo!)\n\n🧡 Consejo: ¡Imagina el símbolo como la boca hambrienta de un cocodrilo. La boca abierta siempre apunta al número **mayor** porque quiere comerlo!\n\n¡Cuando vemos que un salón tiene **más** materiales que otro, podemos usar las matemáticas para que sea justo para todos! ⚖️",
        ur: "⚖️ **منصفانہ بانٹنا موازنے سے شروع ہوتا ہے!**\n\nجب ہم کمیونٹی میں چیزیں بانٹتے ہیں تو نمبروں کا موازنہ کرتے ہیں تاکہ یقینی ہو کہ سب کو برابر حصہ ملے۔\n\nہم تین نشان استعمال کرتے ہیں:\n- **>** مطلب **زیادہ ہے** → 15 > 8 (15، 8 سے زیادہ ہے)\n- **<** مطلب **کم ہے** → 8 < 15 (8، 15 سے کم ہے)\n- **=** مطلب **برابر ہے** → 10 = 10 (دونوں ایک جیسے — انصاف!)\n\n🧡 ٹِپ: نشان کو بھوکے مگرمچھ کے منہ کی طرح سوچو۔ کھلا منہ ہمیشہ **بڑے** نمبر کی طرف ہوتا ہے کیونکہ وہ اسے کھانا چاہتا ہے!\n\nجب ہم دیکھتے ہیں کہ ایک کلاس میں دوسری سے **زیادہ** سامان ہے تو ریاضی سے سب کے لیے انصاف کر سکتے ہیں! ⚖️",
      },
      exercises: [
        {
          id: "ex-1.2G-1",
          type: "multiple-choice",
          prompt: {
            en: "🌿 Room 101 collected 14 cans of food. Room 102 collected 9 cans. Which symbol goes in the blank?  14 ___ 9",
            es: "🌿 El salón 101 juntó 14 latas de comida. El salón 102 juntó 9 latas. ¿Qué símbolo va en el espacio?  14 ___ 9",
            ur: "🌿 کمرہ 101 نے کھانے کے 14 ڈبے جمع کیے۔ کمرہ 102 نے 9 ڈبے جمع کیے۔ خالی جگہ میں کون سا نشان آئے گا؟  14 ___ 9",
          },
          choices: [
            { en: ">", es: ">", ur: ">" },
            { en: "<", es: "<", ur: "<" },
            { en: "=", es: "=", ur: "=" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-1.2G-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Two classes each planted some trees. Class A planted 11 trees. Class B planted 16 trees. Which is true?",
            es: "🌱 Dos clases plantaron algunos árboles cada una. La clase A plantó 11 árboles. La clase B plantó 16 árboles. ¿Cuál es verdadero?",
            ur: "🌱 دو کلاسوں نے درخت لگائے۔ کلاس A نے 11 درخت لگائے۔ کلاس B نے 16 درخت لگائے۔ کون سا صحیح ہے؟",
          },
          choices: [
            { en: "11 > 16", es: "11 > 16", ur: "11 > 16" },
            { en: "11 = 16", es: "11 = 16", ur: "11 = 16" },
            { en: "11 < 16", es: "11 < 16", ur: "11 < 16" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.2G-3",
          type: "true-false",
          prompt: {
            en: "⚖️ Both kindergarten classes recycled 13 bottles each. Since 13 = 13, they recycled an equal amount — that is fair!",
            es: "⚖️ Ambas clases de kínder reciclaron 13 botellas cada una. Como 13 = 13, reciclaron la misma cantidad — ¡eso es justo!",
            ur: "⚖️ دونوں کنڈرگارٹن کلاسوں نے 13-13 بوتلیں ری سائیکل کیں۔ چونکہ 13 = 13 ہے، انہوں نے برابر مقدار ری سائیکل کی — یہ انصاف ہے!",
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
          id: "qz-1.2G-1",
          type: "multiple-choice",
          prompt: {
            en: "📚 The library has 18 English books and 12 Spanish books. Which sentence is true?",
            es: "📚 La biblioteca tiene 18 libros en inglés y 12 en español. ¿Cuál oración es verdadera?",
            ur: "📚 لائبریری میں 18 انگریزی کتابیں اور 12 اردو کتابیں ہیں۔ کون سا جملہ صحیح ہے؟",
          },
          choices: [
            { en: "18 < 12", es: "18 < 12", ur: "18 < 12" },
            { en: "18 = 12", es: "18 = 12", ur: "18 = 12" },
            { en: "12 > 18", es: "12 > 18", ur: "12 > 18" },
            { en: "18 > 12", es: "18 > 12", ur: "18 > 12" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-1.2G-2",
          type: "multiple-choice",
          prompt: {
            en: "🤝 To be fair, both food drive teams need to collect the same number of cans. Team 1 has 15. Team 2 needs ___ cans to be equal.",
            es: "🤝 Para ser justo, ambos equipos de colecta de alimentos deben reunir el mismo número de latas. El equipo 1 tiene 15. El equipo 2 necesita ___ latas para ser iguales.",
            ur: "🤝 منصفانہ ہونے کے لیے دونوں فوڈ ڈرائیو ٹیموں کو ایک جتنے ڈبے جمع کرنے ہیں۔ ٹیم 1 کے پاس 15 ہیں۔ برابر ہونے کے لیے ٹیم 2 کو ___ ڈبے چاہیے۔",
          },
          choices: [
            { en: "12", es: "12", ur: "12" },
            { en: "17", es: "17", ur: "17" },
            { en: "15", es: "15", ur: "15" },
            { en: "10", es: "10", ur: "10" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.2G-3",
          type: "multiple-choice",
          prompt: {
            en: "🌍 Which symbol makes this true?   7 ___ 13",
            es: "🌍 ¿Qué símbolo hace esto verdadero?   7 ___ 13",
            ur: "🌍 کون سا نشان اسے صحیح بناتا ہے؟   7 ___ 13",
          },
          choices: [
            { en: "=", es: "=", ur: "=" },
            { en: ">", es: ">", ur: ">" },
            { en: "<", es: "<", ur: "<" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 2: Skip-Counting & Fact Families ───────────────────────────────
    {
      teks: "1.5",
      cambridge: "Stage 2 · 2Pt1",
      emoji: "↔️",
      title: {
        en: "Skip-Counting & Patterns",
        es: "Conteo de Salto y Patrones",
        ur: "چھوڑ کر گنتی اور نمونے",
      },
      learningObjective: {
        en: "I am learning to skip-count by twos, fives, and tens so that I can count a large group of objects quickly and find number patterns.",
        es: "Estoy aprendiendo a contar de dos en dos, de cinco en cinco y de diez en diez para poder contar un grupo grande rápidamente y encontrar patrones numéricos.",
        ur: "میں دو، پانچ اور دس کی چھلانگوں میں گننا سیکھ رہا ہوں تاکہ بڑے گروپ کو تیزی سے گن سکوں اور نمبر کے نمونے تلاش کر سکوں۔",
      },
      successCriteria: [
        { en: "I can skip-count by twos to count a group of objects.", es: "Puedo contar de dos en dos para contar un grupo de objetos.", ur: "میں اشیاء کا گروپ گننے کے لیے دو دو کر کے گن سکتا ہوں۔" },
        { en: "I can skip-count by fives and tens to find a total up to 120.", es: "Puedo contar de cinco en cinco y de diez en diez para encontrar un total hasta 120.", ur: "میں 120 تک کل تعداد جاننے کے لیے پانچ اور دس کی چھلانگوں میں گن سکتا ہوں۔" },
        { en: "I can find the number that is 10 more or 10 less than a given number.", es: "Puedo encontrar el número que es 10 más o 10 menos que un número dado.", ur: "میں کسی دیے گئے نمبر سے 10 زیادہ یا 10 کم نمبر تلاش کر سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "skip-count",
          emoji: "⏭️",
          word: { en: "skip count", es: "contar de salto", ur: "چھوڑ کر گننا" },
          definition: {
            en: "count by jumping over numbers — like counting by 2s: 2, 4, 6, 8...",
            es: "contar saltando números — como de 2 en 2: 2, 4, 6, 8...",
            ur: "نمبر چھوڑتے ہوئے گننا — جیسے 2 کی گنتی: 2، 4، 6، 8...",
          },
        },
        {
          id: "inverse",
          emoji: "🔄",
          word: { en: "inverse", es: "inverso", ur: "الٹا" },
          definition: {
            en: "opposite operation — addition and subtraction are inverses of each other",
            es: "operación opuesta — la suma y la resta son inversas",
            ur: "مخالف عمل — جمع اور تفریق ایک دوسرے کے الٹ ہیں",
          },
        },
        {
          id: "fact-family",
          emoji: "👨‍👩‍👧",
          word: { en: "fact family", es: "familia de operaciones", ur: "حقائق خاندان" },
          definition: {
            en: "a set of related addition and subtraction sentences using the same three numbers",
            es: "un conjunto de sumas y restas relacionadas con los mismos tres números",
            ur: "ایک ہی تین نمبروں سے بنے جمع اور تفریق کے جملوں کا مجموعہ",
          },
        },
        {
          id: "related",
          emoji: "🔗",
          word: { en: "related facts", es: "operaciones relacionadas", ur: "متعلقہ حقائق" },
          definition: {
            en: "addition and subtraction sentences that use the same numbers — like 5+3=8 and 8-3=5",
            es: "sumas y restas que usan los mismos números — como 5+3=8 y 8-3=5",
            ur: "ایک ہی نمبروں کے جمع اور تفریق جملے — جیسے 5+3=8 اور 8-3=5",
          },
        },
      ],
      lesson: {
        en: "↔️ **Skip-counting is like multiplication in disguise!**\n\n• **By 2s:** 2, 4, 6, 8, 10, 12... (count pairs!)\n• **By 5s:** 5, 10, 15, 20, 25... (like counting nickels!)\n• **By 10s:** 10, 20, 30, 40, 50... (like counting dimes!)\n\n**Addition and subtraction are INVERSE operations** — they undo each other!\nIf you know **5 + 3 = 8**, then you also know **8 − 3 = 5** and **8 − 5 = 3**.\n\nThis is called a **fact family**. One set of three numbers gives you four math facts!\n\nExample with community garden: If you plant 6 tomatoes and 4 peppers, you have 10 plants total. And 10 − 4 = 6. Math works both ways! 🌿",
        es: "↔️ **¡Contar de salto es como la multiplicación disfrazada!**\n\n• **De 2 en 2:** 2, 4, 6, 8, 10, 12...\n• **De 5 en 5:** 5, 10, 15, 20, 25... (¡como contar níqueles!)\n• **De 10 en 10:** 10, 20, 30, 40, 50...\n\n**La suma y la resta son operaciones INVERSAS** — se anulan entre sí.\nSi sabes **5 + 3 = 8**, también sabes **8 − 3 = 5** y **8 − 5 = 3**.\n\nEsto se llama **familia de operaciones**. ¡Un conjunto de tres números te da cuatro datos matemáticos!\n\nEjemplo: Si plantas 6 tomates y 4 pimientos, tienes 10 plantas. Y 10 − 4 = 6. ¡Las matemáticas funcionan en ambos sentidos! 🌿",
        ur: "↔️ **چھوڑ کر گننا ضرب کا چھپا ہوا روپ ہے!**\n\n• **2 کی گنتی:** 2، 4، 6، 8، 10، 12...\n• **5 کی گنتی:** 5، 10، 15، 20، 25... (جیسے نکل گننا!)\n• **10 کی گنتی:** 10، 20، 30، 40، 50...\n\n**جمع اور تفریق الٹے عمل ہیں** — وہ ایک دوسرے کو ختم کرتے ہیں!\nاگر تمہیں معلوم ہے **5 + 3 = 8**، تو تمہیں یہ بھی معلوم ہے **8 − 3 = 5** اور **8 − 5 = 3**۔\n\nاسے **حقائق خاندان** کہتے ہیں۔ تین نمبروں سے چار حقائق!\n\nمثال: 6 ٹماٹر اور 4 مرچیں = 10 پودے۔ اور 10 − 4 = 6۔ ریاضی دونوں طرف کام کرتی ہے! 🌿",
      },
      exercises: [
        {
          id: "ex-1.5-1",
          type: "multiple-choice",
          prompt: {
            en: "🌿 Skip count by 2s. What is the missing number? 2, 4, 6, ___, 10",
            es: "🌿 Cuenta de 2 en 2. ¿Cuál es el número que falta? 2, 4, 6, ___, 10",
            ur: "🌿 2 کی گنتی کرو۔ لاپتہ نمبر کیا ہے؟ 2، 4، 6، ___، 10",
          },
          choices: [
            { en: "7", es: "7", ur: "7" },
            { en: "9", es: "9", ur: "9" },
            { en: "8", es: "8", ur: "8" },
            { en: "12", es: "12", ur: "12" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.5-2",
          type: "multiple-choice",
          prompt: {
            en: "🪙 Skip count by 5s. What comes next? 5, 10, 15, ___",
            es: "🪙 Cuenta de 5 en 5. ¿Qué sigue? 5, 10, 15, ___",
            ur: "🪙 5 کی گنتی کرو۔ آگے کیا آتا ہے؟ 5، 10، 15، ___",
          },
          choices: [
            { en: "18", es: "18", ur: "18" },
            { en: "25", es: "25", ur: "25" },
            { en: "20", es: "20", ur: "20" },
            { en: "16", es: "16", ur: "16" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.5-3",
          type: "multiple-choice",
          prompt: {
            en: "🔄 If 7 + 6 = 13, which related subtraction fact is also true?",
            es: "🔄 Si 7 + 6 = 13, ¿qué resta relacionada también es correcta?",
            ur: "🔄 اگر 7 + 6 = 13، تو کون سا متعلقہ تفریق حقیقت بھی صحیح ہے؟",
          },
          choices: [
            { en: "13 − 7 = 5", es: "13 − 7 = 5", ur: "13 − 7 = 5" },
            { en: "13 − 6 = 6", es: "13 − 6 = 6", ur: "13 − 6 = 6" },
            { en: "13 − 6 = 7", es: "13 − 6 = 7", ur: "13 − 6 = 7" },
            { en: "13 − 7 = 7", es: "13 − 7 = 7", ur: "13 − 7 = 7" },
          ],
          correctIndex: 2,
        },
      ],
      quiz: [
        {
          id: "qz-1.5-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Skip count by 10s. What is missing? 10, 20, ___, 40, 50",
            es: "🌱 Cuenta de 10 en 10. ¿Qué falta? 10, 20, ___, 40, 50",
            ur: "🌱 10 کی گنتی۔ کیا لاپتہ ہے؟ 10، 20، ___، 40، 50",
          },
          choices: [
            { en: "25", es: "25", ur: "25" },
            { en: "35", es: "35", ur: "35" },
            { en: "30", es: "30", ur: "30" },
            { en: "22", es: "22", ur: "22" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.5-2",
          type: "multiple-choice",
          prompt: {
            en: "👨‍👩‍👧 Which set of numbers makes a fact family? 4 + 9 = 13 means ___.",
            es: "👨‍👩‍👧 4 + 9 = 13 significa también que ___.",
            ur: "👨‍👩‍👧 4 + 9 = 13 کا مطلب یہ بھی ہے کہ ___۔",
          },
          choices: [
            { en: "13 − 4 = 8", es: "13 − 4 = 8", ur: "13 − 4 = 8" },
            { en: "13 + 4 = 17", es: "13 + 4 = 17", ur: "13 + 4 = 17" },
            { en: "13 − 9 = 4", es: "13 − 9 = 4", ur: "13 − 9 = 4" },
            { en: "9 − 4 = 5", es: "9 − 4 = 5", ur: "9 − 4 = 5" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.5-3",
          type: "true-false",
          prompt: {
            en: "🔄 If 8 + 5 = 13, then 13 − 5 = 8. True or False?",
            es: "🔄 Si 8 + 5 = 13, entonces 13 − 5 = 8. ¿Verdadero o falso?",
            ur: "🔄 اگر 8 + 5 = 13، تو 13 − 5 = 8۔ صحیح یا غلط؟",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      wordProblems: [
        {
          id: "wp-1.5-1",
          emoji: "🌱🔢",
          scene: "Community garden planting day — skip-counting rows of seeds",
          prompt: {
            en: "Each row has 5 seeds. The class plants 4 rows. Skip count by 5s: 5, 10, 15, ___. How many seeds total?",
            es: "Cada fila tiene 5 semillas. La clase planta 4 filas. Cuenta de 5 en 5: 5, 10, 15, ___. ¿Cuántas semillas en total?",
            ur: "ہر قطار میں 5 بیج ہیں۔ کلاس 4 قطاریں لگاتی ہے۔ 5 کی گنتی: 5، 10، 15، ___۔ کل کتنے بیج؟",
          },
          answer: 20,
          answerUnit: { en: "seeds", es: "semillas", ur: "بیج" },
          difficulty: "easy",
        },
        {
          id: "wp-1.5-2",
          emoji: "🔄🍎",
          scene: "School snack sharing — using fact families to check your work",
          prompt: {
            en: "Omar has 14 apples. He gives 6 to friends. He has 8 left. Which related fact checks his work: 8 + ___ = 14?",
            es: "Omar tiene 14 manzanas. Da 6 a amigos. Le quedan 8. ¿Qué dato relacionado verifica su trabajo: 8 + ___ = 14?",
            ur: "عمر کے پاس 14 سیب ہیں۔ وہ 6 دوستوں کو دیتا ہے۔ 8 بچتے ہیں۔ کون سا متعلقہ حقیقت جانچتا ہے: 8 + ___ = 14؟",
          },
          answer: 6,
          answerUnit: { en: "apples", es: "manzanas", ur: "سیب" },
          difficulty: "medium",
        },
        {
          id: "wp-1.5-3",
          emoji: "🧩🌻",
          scene: "Community garden supply shed — a missing-number fact family puzzle",
          prompt: {
            en: "The shed has some watering cans. 7 are taken out, leaving 9. Using the fact family for 7, 9, and 16, how many watering cans were in the shed at the start?",
            es: "El cobertizo tiene regaderas. Se sacan 7, quedan 9. Usando la familia de datos de 7, 9 y 16, ¿cuántas regaderas había al principio?",
            ur: "شیڈ میں کچھ پانی دینے والے ڈبے ہیں۔ 7 نکالے گئے، 9 باقی رہے۔ 7، 9، اور 16 کی حقیقت فیملی استعمال کرتے ہوئے، شروع میں کتنے ڈبے تھے؟",
          },
          answer: 16,
          answerUnit: { en: "watering cans", es: "regaderas", ur: "پانی دینے والے ڈبے" },
          difficulty: "hard",
        },
      ],
    },

    // ─── Unit 3: Adding & Subtracting within 20 ──────────────────────────────
    {
      teks: "1.3B",
      cambridge: "Stage 1 · 1Nc3",
      emoji: "🌿",
      title: {
        en: "Adding & Subtracting within 20",
        es: "Sumar y Restar hasta 20",
        ur: "20 تک جمع اور تفریق",
      },
      learningObjective: {
        en: "I am learning to solve addition and subtraction word problems within 20 so that I can figure out totals and what's left in real situations.",
        es: "Estoy aprendiendo a resolver problemas de suma y resta hasta 20 para poder calcular totales y lo que queda en situaciones reales.",
        ur: "میں 20 تک جمع اور تفریق کے مسائل حل کرنا سیکھ رہا ہوں تاکہ حقیقی حالات میں کل اور بچی ہوئی مقدار معلوم کر سکوں۔",
      },
      successCriteria: [
        { en: "I can use objects or pictures to solve a joining (addition) word problem.", es: "Puedo usar objetos o dibujos para resolver un problema de unir (suma).", ur: "میں ملانے (جمع) کا مسئلہ حل کرنے کے لیے اشیاء یا تصویریں استعمال کر سکتا ہوں۔" },
        { en: "I can use objects or pictures to solve a separating (subtraction) word problem.", es: "Puedo usar objetos o dibujos para resolver un problema de separar (resta).", ur: "میں الگ کرنے (تفریق) کا مسئلہ حل کرنے کے لیے اشیاء یا تصویریں استعمال کر سکتا ہوں۔" },
        { en: "I can find the missing number in a number sentence like 3 + ? = 7.", es: "Puedo encontrar el número que falta en una oración numérica como 3 + ? = 7.", ur: "میں 3 + ? = 7 جیسے نمبر جملے میں غائب نمبر تلاش کر سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "add",
          emoji: "➕",
          word: { en: "add", es: "sumar", ur: "جمع کرنا" },
          definition: {
            en: "join two groups together to get a bigger number",
            es: "unir dos grupos para obtener un número más grande",
            ur: "دو گروپ ملانا تاکہ بڑا نمبر ملے",
          },
        },
        {
          id: "subtract",
          emoji: "➖",
          word: { en: "subtract", es: "restar", ur: "تفریق کرنا" },
          definition: {
            en: "take away from a group to get a smaller number",
            es: "quitar de un grupo para obtener un número más pequeño",
            ur: "گروپ سے کچھ ہٹانا تاکہ چھوٹا نمبر ملے",
          },
        },
        {
          id: "sum",
          emoji: "🔢",
          word: { en: "sum", es: "la suma", ur: "حاصل جمع" },
          definition: {
            en: "the answer when you add two numbers",
            es: "la respuesta cuando sumas dos números",
            ur: "جمع کرنے کا جواب",
          },
        },
        {
          id: "difference",
          emoji: "🔢",
          word: { en: "difference", es: "la diferencia", ur: "فرق" },
          definition: {
            en: "the answer when you subtract one number from another",
            es: "la respuesta cuando restas un número de otro",
            ur: "تفریق کرنے کا جواب",
          },
        },
        {
          id: "altogether",
          emoji: "🤲",
          word: { en: "altogether", es: "en total", ur: "سب ملا کر" },
          definition: {
            en: "counting everything together as one group",
            es: "contar todo junto como un solo grupo",
            ur: "سب کو ایک گروپ میں گننا",
          },
        },
      ],
      lesson: {
        en: "🌿 **We add and subtract to help our neighbors!**\n\nOur school is collecting food for families who need it. When more food arrives, we **add** it to what we already have. When we give food to a family, we **subtract** from our total.\n\n🧡 Example: We have 8 cans on the shelf. Friends bring 7 more. **8 + 7 = 15 cans altogether!**\n\n💛 Then we pack a bag for a family: we give away 6 cans. **15 − 6 = 9 cans left.**\n\nEvery can you count is food for someone who needs it. Your math skills make a real difference! 🌟",
        es: "🌿 **¡Sumamos y restamos para ayudar a nuestros vecinos!**\n\nNuestra escuela junta comida para familias que la necesitan. Cuando llega más comida, la **sumamos** a lo que ya tenemos. Cuando damos comida a una familia, la **restamos** de nuestro total.\n\n🧡 Ejemplo: Tenemos 8 latas en la repisa. Los amigos traen 7 más. **¡8 + 7 = 15 latas en total!**\n\n💛 Luego empacamos una bolsa para una familia: damos 6 latas. **15 − 6 = 9 latas quedan.**\n\n¡Cada lata que cuentas es comida para alguien que la necesita. ¡Tus habilidades de matemáticas hacen una diferencia real! 🌟",
        ur: "🌿 **ہم اپنے پڑوسیوں کی مدد کے لیے جمع اور تفریق کرتے ہیں!**\n\nہمارا اسکول ضرورتمند خاندانوں کے لیے کھانا جمع کر رہا ہے۔ جب مزید کھانا آتا ہے تو ہم اسے **جمع** کرتے ہیں۔ جب کسی خاندان کو کھانا دیتے ہیں تو **تفریق** کرتے ہیں۔\n\n🧡 مثال: شیلف پر 8 ڈبے ہیں۔ دوست 7 مزید لاتے ہیں۔ **8 + 7 = سب ملا کر 15 ڈبے!**\n\n💛 پھر ایک خاندان کے لیے بیگ بھرتے ہیں: 6 ڈبے دیتے ہیں۔ **15 − 6 = 9 ڈبے بچے۔**\n\nتم جو بھی ڈبہ گنتے ہو وہ کسی ضرورتمند کے لیے کھانا ہے۔ تمہاری ریاضی واقعی فرق ڈالتی ہے! 🌟",
      },
      exercises: [
        {
          id: "ex-1.3B-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Your class planted 9 trees on Monday and 6 trees on Tuesday to give the neighborhood clean air. How many trees did you plant altogether?",
            es: "🌱 Tu clase plantó 9 árboles el lunes y 6 el martes para dar aire limpio al vecindario. ¿Cuántos árboles plantaron en total?",
            ur: "🌱 تمہاری کلاس نے پیر کو 9 درخت اور منگل کو 6 درخت لگائے تاکہ محلے کو صاف ہوا ملے۔ تم نے سب ملا کر کتنے درخت لگائے؟",
          },
          choices: [
            { en: "14", es: "14", ur: "14" },
            { en: "16", es: "16", ur: "16" },
            { en: "15", es: "15", ur: "15" },
            { en: "13", es: "13", ur: "13" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.3B-2",
          type: "multiple-choice",
          prompt: {
            en: "🌿 The food shelf had 17 cans. The class gave 8 cans to families in need. How many cans are left?",
            es: "🌿 La despensa tenía 17 latas. La clase dio 8 latas a familias que las necesitaban. ¿Cuántas latas quedan?",
            ur: "🌿 فوڈ شیلف پر 17 ڈبے تھے۔ کلاس نے ضرورتمند خاندانوں کو 8 ڈبے دیے۔ کتنے ڈبے بچے؟",
          },
          choices: [
            { en: "10", es: "10", ur: "10" },
            { en: "8", es: "8", ur: "8" },
            { en: "11", es: "11", ur: "11" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-1.3B-3",
          type: "true-false",
          prompt: {
            en: "♻️ Students collected 12 bottles for recycling in the morning and 5 more in the afternoon. The sum is 17 bottles kept out of the trash.",
            es: "♻️ Los estudiantes recolectaron 12 botellas para reciclar por la mañana y 5 más por la tarde. La suma es 17 botellas que no fueron a la basura.",
            ur: "♻️ طلبا نے صبح ری سائیکلنگ کے لیے 12 بوتلیں اور دوپہر میں 5 مزید جمع کیں۔ حاصل جمع 17 بوتلیں ہیں جو کوڑے میں نہیں گئیں۔",
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
          id: "qz-1.3B-1",
          type: "multiple-choice",
          prompt: {
            en: "🤝 A community garden has 7 tomato plants and 8 pepper plants to share with neighbors. How many plants are there altogether?",
            es: "🤝 Un jardín comunitario tiene 7 plantas de tomate y 8 de pimiento para compartir con los vecinos. ¿Cuántas plantas hay en total?",
            ur: "🤝 ایک کمیونٹی گارڈن میں پڑوسیوں کے ساتھ بانٹنے کے لیے 7 ٹماٹر کے پودے اور 8 مرچ کے پودے ہیں۔ سب ملا کر کتنے پودے ہیں؟",
          },
          choices: [
            { en: "14", es: "14", ur: "14" },
            { en: "16", es: "16", ur: "16" },
            { en: "13", es: "13", ur: "13" },
            { en: "15", es: "15", ur: "15" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-1.3B-2",
          type: "multiple-choice",
          prompt: {
            en: "📚 The school library got 20 new books. They gave 11 books to classrooms that needed them most. How many books are left in the library?",
            es: "📚 La biblioteca escolar recibió 20 libros nuevos. Repartió 11 libros a los salones que más los necesitaban. ¿Cuántos libros quedan en la biblioteca?",
            ur: "📚 اسکول کی لائبریری کو 20 نئی کتابیں ملیں۔ انہوں نے 11 کتابیں ان کلاسوں کو دیں جنہیں سب سے زیادہ ضرورت تھی۔ لائبریری میں کتنی کتابیں بچیں؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "10", es: "10", ur: "10" },
            { en: "9", es: "9", ur: "9" },
            { en: "11", es: "11", ur: "11" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.3B-3",
          type: "multiple-choice",
          prompt: {
            en: "🌳 Grade 1 planted 13 trees for Earth Day. A storm knocked down 4 of them. How many trees are still standing to clean our air?",
            es: "🌳 El primer grado plantó 13 árboles para el Día de la Tierra. Una tormenta derribó 4 de ellos. ¿Cuántos árboles siguen en pie para limpiar nuestro aire?",
            ur: "🌳 پہلی جماعت نے یوم ارض پر 13 درخت لگائے۔ طوفان نے ان میں سے 4 گرا دیے۔ ہماری ہوا صاف کرنے کے لیے کتنے درخت ابھی بھی کھڑے ہیں؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "10", es: "10", ur: "10" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 3: Making 10 ────────────────────────────────────────────────────
    {
      teks: "1.3C",
      cambridge: "Stage 1 · 1Nc4",
      emoji: "🌿",
      title: {
        en: "Making 10",
        es: "Formar el 10",
        ur: "10 بنانا",
      },
      learningObjective: {
        en: "I am learning all the ways to make 10 so that I can add bigger numbers faster.",
        es: "Estoy aprendiendo todas las formas de formar el 10 para poder sumar números más grandes más rápido.",
        ur: "میں 10 بنانے کے تمام طریقے سیکھ رہا ہوں تاکہ بڑے نمبر تیزی سے جمع کر سکوں۔",
      },
      successCriteria: [
        { en: "I can name pairs of numbers that add up to 10.", es: "Puedo nombrar pares de números que suman 10.", ur: "میں ان نمبر جوڑوں کے نام بتا سکتا ہوں جو ملا کر 10 بنتے ہیں۔" },
        { en: "I can use a ten frame to show a way to make 10.", es: "Puedo usar un marco de diez para mostrar una forma de formar el 10.", ur: "میں 10 بنانے کا طریقہ دکھانے کے لیے ٹین فریم استعمال کر سکتا ہوں۔" },
        { en: "I can use what I know about making 10 to solve a harder addition problem.", es: "Puedo usar lo que sé sobre formar el 10 para resolver un problema de suma más difícil.", ur: "میں 10 بنانے کے علم سے مشکل جمع کا مسئلہ حل کر سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "ten-frame",
          emoji: "🔲",
          word: { en: "ten frame", es: "marco de diez", ur: "ٹین فریم" },
          definition: {
            en: "a box with 10 spaces that helps you see numbers and make 10",
            es: "un cuadro con 10 espacios que te ayuda a ver números y formar el 10",
            ur: "10 جگہوں والا خانہ جو تمہیں نمبر دیکھنے اور 10 بنانے میں مدد دیتا ہے",
          },
        },
        {
          id: "addend",
          emoji: "➕",
          word: { en: "addend", es: "sumando", ur: "جمع ہونے والا نمبر" },
          definition: {
            en: "a number you add to another number",
            es: "un número que sumas a otro número",
            ur: "وہ نمبر جو دوسرے نمبر میں جمع کیا جائے",
          },
        },
        {
          id: "missing",
          emoji: "❓",
          word: { en: "missing number", es: "número que falta", ur: "غائب نمبر" },
          definition: {
            en: "the number we need to find to make 10",
            es: "el número que necesitamos encontrar para formar el 10",
            ur: "وہ نمبر جو 10 بنانے کے لیے ڈھونڈنا ہے",
          },
        },
        {
          id: "decompose",
          emoji: "🔓",
          word: { en: "decompose", es: "descomponer", ur: "توڑنا" },
          definition: {
            en: "break a number into smaller parts — like 10 = 6 + 4",
            es: "separar un número en partes más pequeñas — como 10 = 6 + 4",
            ur: "نمبر کو چھوٹے حصوں میں توڑنا — جیسے 10 = 6 + 4",
          },
        },
      ],
      lesson: {
        en: "🌿 **10 is a magic number in math!**\n\nWhen you know all the ways to make 10, adding bigger numbers becomes easy. Think of a ten frame — it has 10 spots.\n\n🌱 If 6 students each bring a seed packet to plant, how many more do we need to have 10? **6 + ? = 10** → we need **4 more!**\n\nKnowing that 6 + 4 = 10 helps you solve bigger problems fast — like 16 + 4 = 20!\n\nHere are all the ways to make 10:\n6 + 4 · 7 + 3 · 8 + 2 · 9 + 1 · 5 + 5 · 10 + 0\n\nThese are your secret math tools. Learn them and you can help your community faster! 🌍",
        es: "🌿 **¡El 10 es un número mágico en matemáticas!**\n\nCuando sabes todas las formas de formar el 10, sumar números más grandes se vuelve fácil. Piensa en el marco de diez — tiene 10 espacios.\n\n🌱 Si 6 estudiantes traen un sobre de semillas para plantar, ¿cuántos más necesitamos para tener 10? **6 + ? = 10** → ¡necesitamos **4 más!**\n\nSaber que 6 + 4 = 10 te ayuda a resolver problemas más grandes rápido — ¡como 16 + 4 = 20!\n\nEstas son todas las formas de formar el 10:\n6 + 4 · 7 + 3 · 8 + 2 · 9 + 1 · 5 + 5 · 10 + 0\n\n¡Estas son tus herramientas secretas de matemáticas. ¡Apréndelas y podrás ayudar a tu comunidad más rápido! 🌍",
        ur: "🌿 **ریاضی میں 10 ایک جادوئی نمبر ہے!**\n\nجب تم 10 بنانے کے سارے طریقے جانتے ہو تو بڑے نمبر جمع کرنا آسان ہو جاتا ہے۔ ٹین فریم سوچو — اس میں 10 جگہیں ہیں۔\n\n🌱 اگر 6 طالب علم لگانے کے لیے بیجوں کے پیکٹ لائیں تو 10 کے لیے کتنے مزید چاہیے؟ **6 + ? = 10** → **4 مزید چاہیے!**\n\n6 + 4 = 10 جاننا تمہیں بڑے مسئلے جلدی حل کرنے میں مدد دیتا ہے — جیسے 16 + 4 = 20!\n\n10 بنانے کے سارے طریقے:\n6 + 4 · 7 + 3 · 8 + 2 · 9 + 1 · 5 + 5 · 10 + 0\n\nیہ تمہارے خفیہ ریاضی کے اوزار ہیں۔ انہیں یاد کرو اور اپنی کمیونٹی کی تیزی سے مدد کرو! 🌍",
      },
      exercises: [
        {
          id: "ex-1.3C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 The garden club needs 10 seed packets. They already have 7. How many more do they need to make 10?",
            es: "🌱 El club de jardinería necesita 10 sobres de semillas. Ya tienen 7. ¿Cuántos más necesitan para formar el 10?",
            ur: "🌱 گارڈن کلب کو 10 بیجوں کے پیکٹ چاہیے۔ ان کے پاس پہلے سے 7 ہیں۔ 10 بنانے کے لیے کتنے مزید چاہیے؟",
          },
          choices: [
            { en: "4", es: "4", ur: "4" },
            { en: "2", es: "2", ur: "2" },
            { en: "3", es: "3", ur: "3" },
            { en: "5", es: "5", ur: "5" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.3C-2",
          type: "multiple-choice",
          prompt: {
            en: "🌿 A ten frame has 10 spots. There are 5 cans of food on the top row. How many spots are empty on the bottom row?",
            es: "🌿 Un marco de diez tiene 10 espacios. Hay 5 latas de comida en la fila de arriba. ¿Cuántos espacios están vacíos en la fila de abajo?",
            ur: "🌿 ٹین فریم میں 10 جگہیں ہیں۔ اوپر کی قطار میں 5 کھانے کے ڈبے ہیں۔ نیچے کی قطار میں کتنی جگہیں خالی ہیں؟",
          },
          choices: [
            { en: "4", es: "4", ur: "4" },
            { en: "6", es: "6", ur: "6" },
            { en: "5", es: "5", ur: "5" },
            { en: "3", es: "3", ur: "3" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.3C-3",
          type: "true-false",
          prompt: {
            en: "♻️ A student puts 8 bottles in the recycling bin. To make 10, she needs 2 more bottles. 8 + 2 = 10.",
            es: "♻️ Una estudiante pone 8 botellas en el contenedor de reciclaje. Para formar el 10, necesita 2 botellas más. 8 + 2 = 10.",
            ur: "♻️ ایک طالبہ ری سائیکلنگ بن میں 8 بوتلیں ڈالتی ہے۔ 10 بنانے کے لیے اسے 2 مزید بوتلیں چاہیے۔ 8 + 2 = 10۔",
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
          id: "qz-1.3C-1",
          type: "multiple-choice",
          prompt: {
            en: "🤝 A class wants to collect 10 blankets to donate. They have 4 so far. What is the missing addend? 4 + ___ = 10",
            es: "🤝 Una clase quiere juntar 10 cobijas para donar. Hasta ahora tienen 4. ¿Cuál es el sumando que falta? 4 + ___ = 10",
            ur: "🤝 ایک کلاس 10 کمبل دینے کے لیے جمع کرنا چاہتی ہے۔ ابھی تک 4 ہیں۔ غائب نمبر کیا ہے؟ 4 + ___ = 10",
          },
          choices: [
            { en: "5", es: "5", ur: "5" },
            { en: "7", es: "7", ur: "7" },
            { en: "6", es: "6", ur: "6" },
            { en: "4", es: "4", ur: "4" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.3C-2",
          type: "multiple-choice",
          prompt: {
            en: "🌻 Which pair of numbers makes 10? Students will use this to plan how many sunflowers to plant in two garden rows.",
            es: "🌻 ¿Qué par de números forma el 10? Los estudiantes lo usarán para planear cuántos girasoles plantar en dos hileras del jardín.",
            ur: "🌻 کون سا جوڑا 10 بناتا ہے؟ طلبا اسے باغ کی دو قطاروں میں سورج مکھیاں لگانے کی منصوبہ بندی کے لیے استعمال کریں گے۔",
          },
          choices: [
            { en: "3 + 8", es: "3 + 8", ur: "3 + 8" },
            { en: "6 + 5", es: "6 + 5", ur: "6 + 5" },
            { en: "9 + 1", es: "9 + 1", ur: "9 + 1" },
            { en: "4 + 7", es: "4 + 7", ur: "4 + 7" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.3C-3",
          type: "multiple-choice",
          prompt: {
            en: "📚 The class has 10 library books. Some are on the shelf and 3 are checked out. How many books are on the shelf? 10 = ___ + 3",
            es: "📚 La clase tiene 10 libros de biblioteca. Algunos están en la repisa y 3 están prestados. ¿Cuántos libros están en la repisa? 10 = ___ + 3",
            ur: "📚 کلاس کے پاس 10 لائبریری کتابیں ہیں۔ کچھ شیلف پر ہیں اور 3 باہر دی گئی ہیں۔ شیلف پر کتنی کتابیں ہیں؟ 10 = ___ + 3",
          },
          choices: [
            { en: "6", es: "6", ur: "6" },
            { en: "8", es: "8", ur: "8" },
            { en: "5", es: "5", ur: "5" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 3,
        },
      ],
    },

    // ─── The Commutative Property: Flipping Addends within 10 ─────────────────
    {
      teks: "1.5G",
      cambridge: "Stage 1 · TBD",
      emoji: "🔄",
      title: {
        en: "The Commutative Property",
        es: "La Propiedad Conmutativa",
        ur: "تبادلی خاصیت",
      },
      learningObjective: {
        en: "I am learning to use the Commutative Property (the \"flip-flop\" rule) so that I can add numbers more quickly and efficiently.",
        es: "Estoy aprendiendo a usar la Propiedad Conmutativa (la regla de voltear) para poder sumar números más rápido y con más eficiencia.",
        ur: "میں تبادلی خاصیت (پلٹنے کا اصول) استعمال کرنا سیکھ رہا ہوں تاکہ نمبر زیادہ تیزی اور مؤثر طریقے سے جمع کر سکوں۔",
      },
      successCriteria: [
        { en: "I can flip the order of two addends and get the same sum.", es: "Puedo voltear el orden de dos sumandos y obtener la misma suma.", ur: "میں دو جمع ہونے والے نمبروں کی ترتیب پلٹ کر وہی حاصل جمع حاصل کر سکتا ہوں۔" },
        { en: "I can explain that addition order doesn't change the answer.", es: "Puedo explicar que el orden de la suma no cambia la respuesta.", ur: "میں وضاحت کر سکتا ہوں کہ جمع کی ترتیب جواب نہیں بدلتی۔" },
        { en: "I can choose the easier order to add two numbers in my head.", es: "Puedo elegir el orden más fácil para sumar dos números mentalmente.", ur: "میں ذہنی طور پر دو نمبر جمع کرنے کے لیے آسان ترتیب چن سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "commutative-property",
          emoji: "🔄",
          word: { en: "commutative property", es: "propiedad conmutativa", ur: "تبادلی خاصیت" },
          definition: {
            en: "you can add two numbers in any order and get the same sum",
            es: "puedes sumar dos números en cualquier orden y obtener la misma suma",
            ur: "تم دو نمبروں کو کسی بھی ترتیب میں جمع کر سکتے ہو اور حاصل جمع وہی رہے گا",
          },
        },
        {
          id: "flip-flop-rule",
          emoji: "🔀",
          word: { en: "flip-flop rule", es: "regla de voltear", ur: "پلٹنے کا اصول" },
          definition: {
            en: "another name for the commutative property — swap the order of the addends without changing the answer",
            es: "otro nombre para la propiedad conmutativa — cambia el orden de los sumandos sin cambiar la respuesta",
            ur: "تبادلی خاصیت کا دوسرا نام — جواب بدلے بغیر جمع ہونے والے نمبروں کی ترتیب بدلنا",
          },
        },
        {
          id: "addend-flip",
          emoji: "➕",
          word: { en: "addend", es: "sumando", ur: "جمع ہونے والا نمبر" },
          definition: {
            en: "a number being added to another number",
            es: "un número que se suma a otro número",
            ur: "وہ نمبر جو دوسرے نمبر میں جمع کیا جائے",
          },
        },
        {
          id: "order-flip",
          emoji: "🔢",
          word: { en: "order", es: "orden", ur: "ترتیب" },
          definition: {
            en: "the sequence numbers are written or added in",
            es: "la secuencia en la que se escriben o suman los números",
            ur: "وہ ترتیب جس میں نمبر لکھے یا جمع کیے جاتے ہیں",
          },
        },
      ],
      lesson: {
        en: "🔄 **You can flip addends and the sum stays the same!**\n\nThe Commutative Property is also called the **flip-flop rule**: when you add two numbers, you can swap their order and get the exact same answer.\n\n🧡 Example: A community garden has 3 tomato plants and 7 pepper plants.\n3 + 7 = 10 plants\n7 + 3 = 10 plants\n\nSame two numbers, same sum — just flipped! Knowing this means if you already know 7 + 3, you also know 3 + 7 without doing new work.\n\n**Why it helps:** If one number is harder to start with, flip it! 2 + 8 is easier to solve as 8 + 2 — starting with the bigger number and counting on just 2 more.\n\nThe flip-flop rule helps you add faster with numbers you already know. 🌟",
        es: "🔄 **¡Puedes voltear los sumandos y la suma queda igual!**\n\nLa propiedad conmutativa también se llama la **regla de voltear**: cuando sumas dos números, puedes cambiar su orden y obtener exactamente la misma respuesta.\n\n🧡 Ejemplo: Un jardín comunitario tiene 3 plantas de tomate y 7 plantas de pimiento.\n3 + 7 = 10 plantas\n7 + 3 = 10 plantas\n\n¡Los mismos dos números, la misma suma — solo volteados! Saber esto significa que si ya sabes 7 + 3, también sabes 3 + 7 sin hacer trabajo nuevo.\n\n**Por qué ayuda:** Si un número es más difícil para empezar, ¡voltéalo! 2 + 8 es más fácil resolverlo como 8 + 2 — empezando con el número más grande y contando solo 2 más.\n\nLa regla de voltear te ayuda a sumar más rápido con números que ya conoces. 🌟",
        ur: "🔄 **تم جمع ہونے والے نمبروں کو پلٹ سکتے ہو اور حاصل جمع وہی رہتا ہے!**\n\nتبادلی خاصیت کو **پلٹنے کا اصول** بھی کہتے ہیں: جب تم دو نمبر جمع کرتے ہو، تو ان کی ترتیب بدل سکتے ہو اور بالکل وہی جواب ملے گا۔\n\n🧡 مثال: ایک کمیونٹی گارڈن میں 3 ٹماٹر کے پودے اور 7 مرچ کے پودے ہیں۔\n3 + 7 = 10 پودے\n7 + 3 = 10 پودے\n\nوہی دو نمبر، وہی حاصل جمع — بس پلٹے ہوئے! یہ جاننا مطلب ہے کہ اگر تم 7 + 3 جانتے ہو تو 3 + 7 بھی بغیر نئے کام کے جانتے ہو۔\n\n**یہ کیوں مدد کرتا ہے:** اگر ایک نمبر سے شروع کرنا مشکل ہو تو اسے پلٹ دو! 2 + 8 کو 8 + 2 کے طور پر حل کرنا آسان ہے — بڑے نمبر سے شروع کر کے صرف 2 مزید گنو۔\n\nپلٹنے کا اصول تمہیں معلوم نمبروں سے تیزی سے جمع کرنے میں مدد دیتا ہے۔ 🌟",
      },
      exercises: [
        { id: "ex-1.5G-1", type: "multiple-choice", prompt: { en: "🌱 A garden has 4 sunflowers and 6 daisies. Which shows the flip-flop of 4 + 6 = 10?", es: "🌱 Un jardín tiene 4 girasoles y 6 margaritas. ¿Cuál muestra el volteo de 4 + 6 = 10?", ur: "🌱 ایک باغ میں 4 سورج مکھی اور 6 گل داؤدی ہیں۔ 4 + 6 = 10 کا پلٹا ہوا کون سا ہے؟" }, choices: [{ en: "6 + 4 = 10", es: "6 + 4 = 10", ur: "6 + 4 = 10" }, { en: "4 + 6 = 11", es: "4 + 6 = 11", ur: "4 + 6 = 11" }, { en: "10 + 4 = 14", es: "10 + 4 = 14", ur: "10 + 4 = 14" }, { en: "6 − 4 = 2", es: "6 − 4 = 2", ur: "6 − 4 = 2" }], correctIndex: 0 },
        { id: "ex-1.5G-2", type: "true-false", prompt: { en: "➕ If 5 + 8 = 13, then 8 + 5 = 13 too.", es: "➕ Si 5 + 8 = 13, entonces 8 + 5 = 13 también.", ur: "➕ اگر 5 + 8 = 13 ہے، تو 8 + 5 بھی 13 ہے۔" }, choices: [{ en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" }, { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" }], correctIndex: 0 },
        { id: "ex-1.5G-3", type: "multiple-choice", prompt: { en: "🔄 Which addition sentence is the flip-flop of 9 + 1?", es: "🔄 ¿Cuál oración de suma es el volteo de 9 + 1?", ur: "🔄 9 + 1 کا پلٹا ہوا کون سا جمع کا جملہ ہے؟" }, choices: [{ en: "1 + 9", es: "1 + 9", ur: "1 + 9" }, { en: "9 − 1", es: "9 − 1", ur: "9 − 1" }, { en: "1 − 9", es: "1 − 9", ur: "1 − 9" }, { en: "9 + 9", es: "9 + 9", ur: "9 + 9" }], correctIndex: 0 },
      ],
      quiz: [
        { id: "qz-1.5G-1", type: "multiple-choice", prompt: { en: "🌿 A recycling bin has 7 cans and 3 bottles. Which shows the flip-flop?", es: "🌿 Un contenedor de reciclaje tiene 7 latas y 3 botellas. ¿Cuál muestra el volteo?", ur: "🌿 ری سائیکلنگ بن میں 7 ڈبے اور 3 بوتلیں ہیں۔ پلٹا ہوا کون سا ہے؟" }, choices: [{ en: "3 + 7", es: "3 + 7", ur: "3 + 7" }, { en: "7 − 3", es: "7 − 3", ur: "7 − 3" }, { en: "3 − 7", es: "3 − 7", ur: "3 − 7" }, { en: "7 + 7", es: "7 + 7", ur: "7 + 7" }], correctIndex: 0 },
        { id: "qz-1.5G-2", type: "true-false", prompt: { en: "🔄 6 + 2 and 2 + 6 both equal 8.", es: "🔄 6 + 2 y 2 + 6 son iguales a 8.", ur: "🔄 6 + 2 اور 2 + 6 دونوں 8 کے برابر ہیں۔" }, choices: [{ en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" }, { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" }], correctIndex: 0 },
        { id: "qz-1.5G-3", type: "multiple-choice", prompt: { en: "➕ Which pair of number sentences shows the commutative property?", es: "➕ ¿Qué par de oraciones numéricas muestra la propiedad conmutativa?", ur: "➕ نمبر کے کون سے جوڑے تبادلی خاصیت دکھاتے ہیں؟" }, choices: [{ en: "5 + 4 and 4 + 5", es: "5 + 4 y 4 + 5", ur: "5 + 4 اور 4 + 5" }, { en: "5 + 4 and 5 − 4", es: "5 + 4 y 5 − 4", ur: "5 + 4 اور 5 − 4" }, { en: "5 + 4 and 4 − 5", es: "5 + 4 y 4 − 5", ur: "5 + 4 اور 4 − 5" }, { en: "5 + 4 and 9 + 0", es: "5 + 4 y 9 + 0", ur: "5 + 4 اور 9 + 0" }], correctIndex: 0 },
      ],
    },

    // ─── Unit 5: Shapes & Equal Parts ────────────────────────────────────────
    {
      teks: "1.6",
      cambridge: "Stage 2 · 2Gs1",
      emoji: "⬡",
      title: {
        en: "Shapes & Equal Parts",
        es: "Figuras y Partes Iguales",
        ur: "شکلیں اور برابر حصے",
      },
      learningObjective: {
        en: "I am learning to build and describe two-dimensional shapes and divide them into equal parts so that I can understand how shapes fit together and how to share fairly.",
        es: "Estoy aprendiendo a construir y describir figuras bidimensionales y dividirlas en partes iguales para poder entender cómo encajan las figuras y cómo compartir de forma justa.",
        ur: "میں دو جہتی شکلیں بنانا اور بیان کرنا اور انہیں برابر حصوں میں تقسیم کرنا سیکھ رہا ہوں تاکہ سمجھ سکوں کہ شکلیں کیسے فٹ ہوتی ہیں اور منصفانہ طریقے سے کیسے بانٹا جائے۔",
      },
      successCriteria: [
        { en: "I can name and describe basic 2D shapes using their sides and corners.", es: "Puedo nombrar y describir figuras 2D básicas usando sus lados y esquinas.", ur: "میں بنیادی دو جہتی شکلوں کو ان کے اطراف اور کونوں سے نام دے اور بیان کر سکتا ہوں۔" },
        { en: "I can put shapes together to build a new, bigger shape.", es: "Puedo unir figuras para construir una nueva figura más grande.", ur: "میں شکلوں کو ملا کر ایک نئی، بڑی شکل بنا سکتا ہوں۔" },
        { en: "I can divide a shape into two or four equal parts and name them halves or fourths.", es: "Puedo dividir una figura en dos o cuatro partes iguales y nombrarlas mitades o cuartos.", ur: "میں کسی شکل کو دو یا چار برابر حصوں میں تقسیم کر کے انہیں آدھا یا چوتھائی کہہ سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "half",
          emoji: "½",
          word: { en: "half", es: "mitad", ur: "آدھا" },
          definition: {
            en: "one of two equal parts of a whole — 2 halves make 1 whole",
            es: "una de dos partes iguales de un todo — 2 mitades forman 1 entero",
            ur: "ایک چیز کے دو برابر حصوں میں سے ایک — 2 آدھے = 1 پورا",
          },
        },
        {
          id: "fourth",
          emoji: "¼",
          word: { en: "fourth", es: "cuarto", ur: "چوتھائی" },
          definition: {
            en: "one of four equal parts of a whole — also called a quarter",
            es: "una de cuatro partes iguales de un todo — también llamada cuarto",
            ur: "ایک چیز کے چار برابر حصوں میں سے ایک — کوارٹر بھی کہتے ہیں",
          },
        },
        {
          id: "whole",
          emoji: "⭕",
          word: { en: "whole", es: "entero", ur: "پورا" },
          definition: {
            en: "all the parts together — a complete shape or object",
            es: "todas las partes juntas — una figura o un objeto completo",
            ur: "تمام حصے مل کر — مکمل شکل یا چیز",
          },
        },
        {
          id: "equal-parts",
          emoji: "⚖️",
          word: { en: "equal parts", es: "partes iguales", ur: "برابر حصے" },
          definition: {
            en: "parts that are exactly the same size",
            es: "partes que son exactamente del mismo tamaño",
            ur: "حصے جو بالکل ایک ہی سائز کے ہوں",
          },
        },
        {
          id: "compose",
          emoji: "🔲",
          word: { en: "compose", es: "componer", ur: "جوڑنا" },
          definition: {
            en: "to put shapes together to make a new, larger shape",
            es: "unir figuras para formar una nueva figura más grande",
            ur: "شکلیں جوڑ کر ایک نئی بڑی شکل بنانا",
          },
        },
      ],
      lesson: {
        en: "⬡ **Shapes can be made of other shapes — and divided into equal parts!**\n\n**Composing shapes:** Two triangles can be put together to make a square. Four squares can make one big square! This is called *composing*.\n\n**Equal parts:** When we cut a pizza into 2 equal slices, each slice is called a **half** (½). When we cut it into 4 equal slices, each piece is a **fourth** or **quarter** (¼).\n\nThe parts must be **equal** — the same size. A pizza cut into one big piece and one tiny piece is NOT two halves!\n\nIn our community: sharing food equally is a form of fairness and math! 🌿🍕",
        es: "⬡ **¡Las figuras se pueden hacer con otras figuras y dividir en partes iguales!**\n\n**Componer figuras:** Dos triángulos forman un cuadrado. ¡Cuatro cuadrados forman un cuadrado grande!\n\n**Partes iguales:** Cuando cortamos una pizza en 2 pedazos iguales, cada pedazo es una **mitad** (½). En 4 pedazos iguales, cada pieza es un **cuarto** (¼).\n\nLas partes deben ser **iguales** — del mismo tamaño. ¡Una pizza cortada en un pedazo grande y uno pequeño NO son dos mitades!\n\n¡En nuestra comunidad, compartir alimentos por igual es una forma de justicia y matemáticas! 🌿🍕",
        ur: "⬡ **شکلیں دوسری شکلوں سے بن سکتی ہیں اور برابر حصوں میں تقسیم ہو سکتی ہیں!**\n\n**شکلیں جوڑنا:** دو مثلث مل کر مربع بناتے ہیں۔ چار مربع مل کر ایک بڑا مربع!\n\n**برابر حصے:** جب ہم پیزا کو 2 برابر ٹکڑوں میں کاٹتے ہیں تو ہر ٹکڑا **آدھا** (½) ہوتا ہے۔ 4 برابر ٹکڑوں میں ہر ٹکڑا **چوتھائی** (¼) ہے۔\n\nحصے **برابر** ہونے چاہئیں — ایک ہی سائز کے۔ ایک بڑا ٹکڑا اور ایک چھوٹا ٹکڑا دو آدھے نہیں ہیں!\n\nکمیونٹی میں: کھانا برابر بانٹنا انصاف اور ریاضی دونوں ہے! 🌿🍕",
      },
      exercises: [
        {
          id: "ex-1.6-1",
          type: "multiple-choice",
          prompt: {
            en: "🍕 A pizza is cut into 2 equal pieces. What is each piece called?",
            es: "🍕 Una pizza se corta en 2 pedazos iguales. ¿Cómo se llama cada pedazo?",
            ur: "🍕 پیزا کو 2 برابر ٹکڑوں میں کاٹا گیا۔ ہر ٹکڑے کو کیا کہتے ہیں؟",
          },
          choices: [
            { en: "A fourth (¼)", es: "Un cuarto (¼)", ur: "چوتھائی (¼)" },
            { en: "A half (½)", es: "Una mitad (½)", ur: "آدھا (½)" },
            { en: "A whole", es: "Un entero", ur: "پورا" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-1.6-2",
          type: "multiple-choice",
          prompt: {
            en: "🔲 Two triangles are put together to make one shape. What shape do they make?",
            es: "🔲 Dos triángulos se juntan para formar una figura. ¿Qué figura forman?",
            ur: "🔲 دو مثلث جوڑے جاتے ہیں۔ وہ کون سی شکل بناتے ہیں؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Rectangle or square", es: "Rectángulo o cuadrado", ur: "مستطیل یا مربع" },
            { en: "Triangle", es: "Triángulo", ur: "مثلث" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-1.6-3",
          type: "true-false",
          prompt: {
            en: "🍫 A chocolate bar is broken into 4 equal pieces. Each piece is a fourth (¼) of the whole bar.",
            es: "🍫 Una barra de chocolate se rompe en 4 pedazos iguales. Cada pedazo es un cuarto (¼) de la barra entera.",
            ur: "🍫 ایک چاکلیٹ بار 4 برابر ٹکڑوں میں توڑا گیا۔ ہر ٹکڑا پوری بار کا چوتھائی (¼) ہے۔",
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
          id: "qz-1.6-1",
          type: "multiple-choice",
          prompt: {
            en: "🌸 A garden is divided into 4 equal sections for different plants. What is each section called?",
            es: "🌸 Un jardín se divide en 4 secciones iguales para diferentes plantas. ¿Cómo se llama cada sección?",
            ur: "🌸 ایک باغ کو مختلف پودوں کے لیے 4 برابر حصوں میں تقسیم کیا گیا۔ ہر حصے کو کیا کہتے ہیں؟",
          },
          choices: [
            { en: "A half (½)", es: "Una mitad (½)", ur: "آدھا (½)" },
            { en: "A whole", es: "Un entero", ur: "پورا" },
            { en: "A fourth (¼)", es: "Un cuarto (¼)", ur: "چوتھائی (¼)" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.6-2",
          type: "multiple-choice",
          prompt: {
            en: "⬡ How many fourths make one whole?",
            es: "⬡ ¿Cuántos cuartos forman un entero?",
            ur: "⬡ کتنی چوتھائیاں مل کر ایک پورا بناتی ہیں؟",
          },
          choices: [
            { en: "2", es: "2", ur: "2" },
            { en: "3", es: "3", ur: "3" },
            { en: "4", es: "4", ur: "4" },
            { en: "8", es: "8", ur: "8" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.6-3",
          type: "true-false",
          prompt: {
            en: "½ Two halves make one whole. True or False?",
            es: "½ Dos mitades forman un entero. ¿Verdadero o falso?",
            ur: "½ دو آدھے مل کر ایک پورا بناتے ہیں۔ صحیح یا غلط؟",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      wordProblems: [
        {
          id: "wp-1.6-1",
          emoji: "🍕🌿",
          scene: "Community pizza night — sharing equally at a Dallas school fundraiser",
          prompt: {
            en: "The class orders 1 pizza. It is cut into 4 equal pieces. 3 students each eat 1 piece. How many pieces are left?",
            es: "La clase pide 1 pizza. Se corta en 4 pedazos iguales. 3 estudiantes comen 1 pedazo cada uno. ¿Cuántos pedazos quedan?",
            ur: "کلاس نے 1 پیزا منگوایا۔ اسے 4 برابر ٹکڑوں میں کاٹا گیا۔ 3 طلبہ نے 1 ایک ٹکڑا کھایا۔ کتنے ٹکڑے بچے؟",
          },
          answer: 1,
          answerUnit: { en: "piece", es: "pedazo", ur: "ٹکڑا" },
        },
        {
          id: "wp-1.6-2",
          emoji: "🔲🔷",
          scene: "Shape art project — students compose shapes to make pictures",
          prompt: {
            en: "Zara uses 2 triangles to make 1 square, and she makes 3 squares. How many triangles did she use in all?",
            es: "Zara usa 2 triángulos para hacer 1 cuadrado y hace 3 cuadrados. ¿Cuántos triángulos usó en total?",
            ur: "زارا 2 مثلث سے 1 مربع بناتی ہے اور 3 مربع بناتی ہے۔ اس نے کل کتنے مثلث استعمال کیے؟",
          },
          answer: 6,
          answerUnit: { en: "triangles", es: "triángulos", ur: "مثلث" },
        },
      ],
    },

    // ─── Unit 6: Coin Values ──────────────────────────────────────────────────
    {
      teks: "1.4",
      cambridge: "Stage 2 · 2Mm1",
      emoji: "💰",
      title: {
        en: "Coin Values",
        es: "Valor de las Monedas",
        ur: "سکوں کی قیمت",
      },
      learningObjective: {
        en: "I am learning to identify U.S. coins and their values so that I can figure out how much a group of coins is worth.",
        es: "Estoy aprendiendo a identificar las monedas de EE.UU. y sus valores para poder calcular cuánto vale un grupo de monedas.",
        ur: "میں امریکی سکے اور ان کی قدر پہچاننا سیکھ رہا ہوں تاکہ معلوم کر سکوں کہ سکوں کے گروپ کی مالیت کتنی ہے۔",
      },
      successCriteria: [
        { en: "I can name a penny, nickel, dime, and quarter and tell its value.", es: "Puedo nombrar un penique, una moneda de cinco centavos, una de diez centavos y una de veinticinco centavos y decir su valor.", ur: "میں پینی، نکل، ڈائم، اور کوارٹر کے نام بتا کر ان کی قدر بتا سکتا ہوں۔" },
        { en: "I can skip-count by fives or tens to find the value of a group of coins.", es: "Puedo contar de cinco en cinco o de diez en diez para encontrar el valor de un grupo de monedas.", ur: "میں سکوں کے گروپ کی مالیت جاننے کے لیے پانچ یا دس کی چھلانگوں میں گن سکتا ہوں۔" },
        { en: "I can write a coin's value using the cent symbol.", es: "Puedo escribir el valor de una moneda usando el símbolo de centavo.", ur: "میں سینٹ کی علامت استعمال کر کے سکے کی قدر لکھ سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "penny",
          emoji: "🟤",
          word: { en: "penny", es: "centavo / penny", ur: "پینی" },
          definition: {
            en: "1 cent (1¢) — the copper-colored coin",
            es: "1 centavo (1¢) — la moneda de color cobre",
            ur: "1 سینٹ (1¢) — تانبے کے رنگ کا سکہ",
          },
        },
        {
          id: "nickel",
          emoji: "⚪",
          word: { en: "nickel", es: "níquel", ur: "نکل" },
          definition: {
            en: "5 cents (5¢) — the thick silver coin",
            es: "5 centavos (5¢) — la moneda plateada gruesa",
            ur: "5 سینٹ (5¢) — موٹا چاندی کا سکہ",
          },
        },
        {
          id: "dime",
          emoji: "🔘",
          word: { en: "dime", es: "moneda de 10 centavos", ur: "ڈائم" },
          definition: {
            en: "10 cents (10¢) — the small thin silver coin",
            es: "10 centavos (10¢) — la moneda plateada pequeña y delgada",
            ur: "10 سینٹ (10¢) — چھوٹا پتلا چاندی کا سکہ",
          },
        },
        {
          id: "quarter",
          emoji: "🟡",
          word: { en: "quarter", es: "cuarto de dólar", ur: "کوارٹر" },
          definition: {
            en: "25 cents (25¢) — the large silver coin",
            es: "25 centavos (25¢) — la moneda plateada más grande",
            ur: "25 سینٹ (25¢) — بڑا چاندی کا سکہ",
          },
        },
        {
          id: "value",
          emoji: "💲",
          word: { en: "value", es: "valor", ur: "قیمت" },
          definition: {
            en: "how much a coin is worth in cents",
            es: "cuánto vale una moneda en centavos",
            ur: "ایک سکہ سینٹ میں کتنے مالیت کا ہے",
          },
        },
      ],
      lesson: {
        en: "💰 **Every coin has a value!**\n\n| Coin | Value |\n|------|-------|\n| Penny | 1¢ |\n| Nickel | 5¢ |\n| Dime | 10¢ |\n| Quarter | 25¢ |\n\n**Counting like coins:** Skip count by the coin's value!\n• 3 dimes: 10¢, 20¢, 30¢ → **30¢**\n• 4 nickels: 5¢, 10¢, 15¢, 20¢ → **20¢**\n• 6 pennies: 1¢, 2¢, 3¢, 4¢, 5¢, 6¢ → **6¢**\n\nAt the community garden sale, knowing coin values helps you buy exactly what you need! 🌿",
        es: "💰 **¡Cada moneda tiene un valor!**\n\n| Moneda | Valor |\n|--------|-------|\n| Centavo (Penny) | 1¢ |\n| Níquel (Nickel) | 5¢ |\n| Diez centavos (Dime) | 10¢ |\n| Cuarto de dólar (Quarter) | 25¢ |\n\n**Contar monedas iguales:** ¡Cuenta de salto por el valor de la moneda!\n• 3 dimes: 10¢, 20¢, 30¢ → **30¢**\n• 4 níqueles: 5¢, 10¢, 15¢, 20¢ → **20¢**\n\n¡En la venta del jardín comunitario, saber el valor de las monedas te ayuda a comprar lo que necesitas! 🌿",
        ur: "💰 **ہر سکے کی ایک قیمت ہوتی ہے!**\n\n| سکہ | قیمت |\n|------|-------|\n| پینی | 1¢ |\n| نکل | 5¢ |\n| ڈائم | 10¢ |\n| کوارٹر | 25¢ |\n\n**ایک جیسے سکے گننا:** سکے کی قیمت سے چھوڑ کر گنو!\n• 3 ڈائم: 10¢، 20¢، 30¢ → **30¢**\n• 4 نکل: 5¢، 10¢، 15¢، 20¢ → **20¢**\n\nکمیونٹی باغ کی سیل میں سکوں کی قیمت جاننے سے آپ صحیح چیز خرید سکتے ہیں! 🌿",
      },
      exercises: [
        {
          id: "ex-1.4-1",
          type: "multiple-choice",
          prompt: {
            en: "🔘 Count 4 dimes. How much is that in all? (Skip count by 10s)",
            es: "🔘 Cuenta 4 monedas de 10 centavos. ¿Cuánto es en total? (Cuenta de 10 en 10)",
            ur: "🔘 4 ڈائم گنو۔ یہ کل کتنا ہے؟ (10 کی گنتی کرو)",
          },
          choices: [
            { en: "30¢", es: "30¢", ur: "30¢" },
            { en: "40¢", es: "40¢", ur: "40¢" },
            { en: "14¢", es: "14¢", ur: "14¢" },
            { en: "50¢", es: "50¢", ur: "50¢" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-1.4-2",
          type: "multiple-choice",
          prompt: {
            en: "⚪ Count 3 nickels. How much is that in all? (Skip count by 5s)",
            es: "⚪ Cuenta 3 níqueles. ¿Cuánto es en total? (Cuenta de 5 en 5)",
            ur: "⚪ 3 نکل گنو۔ یہ کل کتنا ہے؟ (5 کی گنتی کرو)",
          },
          choices: [
            { en: "3¢", es: "3¢", ur: "3¢" },
            { en: "25¢", es: "25¢", ur: "25¢" },
            { en: "15¢", es: "15¢", ur: "15¢" },
            { en: "20¢", es: "20¢", ur: "20¢" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.4-3",
          type: "multiple-choice",
          prompt: {
            en: "🟤 Count 5 pennies. How much is that in all?",
            es: "🟤 Cuenta 5 centavos. ¿Cuánto es en total?",
            ur: "🟤 5 پینی گنو۔ یہ کل کتنا ہے؟",
          },
          choices: [
            { en: "10¢", es: "10¢", ur: "10¢" },
            { en: "1¢", es: "1¢", ur: "1¢" },
            { en: "5¢", es: "5¢", ur: "5¢" },
            { en: "25¢", es: "25¢", ur: "25¢" },
          ],
          correctIndex: 2,
        },
      ],
      quiz: [
        {
          id: "qz-1.4-1",
          type: "multiple-choice",
          prompt: {
            en: "🟡 Count 2 quarters. How much is that in all?",
            es: "🟡 Cuenta 2 cuartos de dólar. ¿Cuánto es en total?",
            ur: "🟡 2 کوارٹر گنو۔ یہ کل کتنا ہے؟",
          },
          choices: [
            { en: "25¢", es: "25¢", ur: "25¢" },
            { en: "75¢", es: "75¢", ur: "75¢" },
            { en: "50¢", es: "50¢", ur: "50¢" },
            { en: "52¢", es: "52¢", ur: "52¢" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.4-2",
          type: "multiple-choice",
          prompt: {
            en: "💰 Which coin is worth more — a nickel or a dime?",
            es: "💰 ¿Qué moneda vale más — un níquel o un dime?",
            ur: "💰 کون سا سکہ زیادہ قیمتی ہے — نکل یا ڈائم؟",
          },
          choices: [
            { en: "Nickel (5¢)", es: "Níquel (5¢)", ur: "نکل (5¢)" },
            { en: "They are the same value", es: "Tienen el mismo valor", ur: "دونوں برابر ہیں" },
            { en: "Dime (10¢)", es: "Dime (10¢)", ur: "ڈائم (10¢)" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.4-3",
          type: "true-false",
          prompt: {
            en: "💲 A dime is worth less than a nickel because a dime is a smaller coin. True or False?",
            es: "💲 Un dime vale menos que un níquel porque el dime es una moneda más pequeña. ¿Verdadero o falso?",
            ur: "💲 ڈائم نکل سے کم قیمتی ہے کیونکہ ڈائم چھوٹا سکہ ہے۔ صحیح یا غلط؟",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌ — a dime (10¢) is worth MORE than a nickel (5¢)", es: "Falso ❌ — un dime (10¢) vale MÁS que un níquel (5¢)", ur: "غلط ❌ — ڈائم (10¢) نکل (5¢) سے زیادہ قیمتی ہے" },
          ],
          correctIndex: 1,
        },
      ],
      wordProblems: [
        {
          id: "wp-1.4-1",
          emoji: "🌽💰",
          scene: "Community farmers market — first graders buy vegetables with coins",
          prompt: {
            en: "Mia has 3 dimes. She wants to buy corn that costs 25¢. Does she have enough money?",
            es: "Mia tiene 3 dimes. Quiere comprar maíz que cuesta 25¢. ¿Tiene suficiente dinero?",
            ur: "میا کے پاس 3 ڈائم ہیں۔ وہ 25¢ کی مکئی خریدنا چاہتی ہے۔ کیا اس کے پاس کافی پیسے ہیں؟",
          },
          answer: 30,
          answerUnit: { en: "cents — Yes, she has 30¢ which is more than 25¢", es: "centavos — Sí, tiene 30¢ que es más de 25¢", ur: "سینٹ — ہاں، اس کے پاس 30¢ ہیں جو 25¢ سے زیادہ ہیں" },
        },
        {
          id: "wp-1.4-2",
          emoji: "🍎🪙",
          scene: "School snack stand — students use coins to buy healthy snacks",
          prompt: {
            en: "An apple costs 20¢. Omar has 4 nickels. How much does he have? Is that enough for the apple?",
            es: "Una manzana cuesta 20¢. Omar tiene 4 níqueles. ¿Cuánto tiene? ¿Alcanza para la manzana?",
            ur: "ایک سیب 20¢ کا ہے۔ عمر کے پاس 4 نکل ہیں۔ اس کے پاس کتنے ہیں؟ کیا سیب کے لیے کافی ہے؟",
          },
          answer: 20,
          answerUnit: { en: "cents — Yes! 4 nickels = 20¢, exactly enough", es: "centavos — ¡Sí! 4 níqueles = 20¢, exactamente suficiente", ur: "سینٹ — ہاں! 4 نکل = 20¢، بالکل کافی" },
        },
      ],
    },

    // ─── Unit 7: Measurement & Time ──────────────────────────────────────────
    {
      teks: "1.7",
      cambridge: "Stage 2 · 2Ml2",
      emoji: "🕐",
      title: {
        en: "Measuring & Telling Time",
        es: "Medir y Decir la Hora",
        ur: "پیمائش اور وقت بتانا",
      },
      learningObjective: {
        en: "I am learning to measure length and tell time so that I can describe how long something is and what time it is.",
        es: "Estoy aprendiendo a medir la longitud y decir la hora para poder describir cuánto mide algo y qué hora es.",
        ur: "میں لمبائی ناپنا اور وقت بتانا سیکھ رہا ہوں تاکہ بتا سکوں کوئی چیز کتنی لمبی ہے اور کیا وقت ہوا ہے۔",
      },
      successCriteria: [
        { en: "I can measure an object's length using same-size units placed end-to-end.", es: "Puedo medir la longitud de un objeto usando unidades del mismo tamaño colocadas una tras otra.", ur: "میں ایک جیسی اکائیوں کو ایک دوسرے کے ساتھ رکھ کر کسی چیز کی لمبائی ناپ سکتا ہوں۔" },
        { en: "I can describe a length using a number and a unit.", es: "Puedo describir una longitud usando un número y una unidad.", ur: "میں ایک نمبر اور اکائی کا استعمال کر کے لمبائی بیان کر سکتا ہوں۔" },
        { en: "I can tell time to the hour and half hour on an analog and digital clock.", es: "Puedo decir la hora en punto y media hora en un reloj análogo y digital.", ur: "میں اینالاگ اور ڈیجیٹل گھڑی پر گھنٹے اور آدھے گھنٹے تک وقت بتا سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "length",
          emoji: "↔️",
          word: { en: "length", es: "longitud", ur: "لمبائی" },
          definition: {
            en: "how long something is from one end to the other",
            es: "qué tan largo es algo de un extremo al otro",
            ur: "کوئی چیز ایک سرے سے دوسرے سرے تک کتنی لمبی ہے",
          },
        },
        {
          id: "measure",
          emoji: "📏",
          word: { en: "measure", es: "medir", ur: "پیمائش کرنا" },
          definition: {
            en: "to find out how long, tall, or heavy something is",
            es: "determinar qué tan largo, alto o pesado es algo",
            ur: "کوئی چیز کتنی لمبی، اونچی یا بھاری ہے یہ معلوم کرنا",
          },
        },
        {
          id: "non-standard",
          emoji: "📎",
          word: { en: "non-standard unit", es: "unidad no estándar", ur: "غیر معیاری اکائی" },
          definition: {
            en: "everyday objects used to measure — like paperclips, cubes, or your hand",
            es: "objetos cotidianos usados para medir — como sujetapapeles, cubos o tu mano",
            ur: "روزمرہ چیزیں جو پیمائش میں استعمال ہوں — جیسے کلپ، مکعب یا ہاتھ",
          },
        },
        {
          id: "hour-hand",
          emoji: "🕐",
          word: { en: "hour hand", es: "manecilla de las horas", ur: "گھنٹے کی سوئی" },
          definition: {
            en: "the short hand on a clock that shows the hour",
            es: "la manecilla corta del reloj que muestra la hora",
            ur: "گھڑی کی چھوٹی سوئی جو گھنٹہ بتاتی ہے",
          },
        },
        {
          id: "minute-hand",
          emoji: "⏱️",
          word: { en: "minute hand", es: "minutero", ur: "منٹ کی سوئی" },
          definition: {
            en: "the long hand on a clock — when it points to 12, it is exactly on the hour; when it points to 6, it is half past",
            es: "la manecilla larga del reloj — cuando apunta al 12, es la hora en punto; al 6, es y media",
            ur: "گھڑی کی لمبی سوئی — جب 12 پر ہو تو پوری گھنٹی؛ 6 پر ہو تو آدھی",
          },
        },
        {
          id: "half-hour",
          emoji: "🕧",
          word: { en: "half past / half hour", es: "y media", ur: "آدھا گھنٹہ / ساڑھے" },
          definition: {
            en: "30 minutes after the hour — 2:30 is 'half past two'",
            es: "30 minutos después de la hora — 2:30 es 'las dos y media'",
            ur: "گھنٹے کے 30 منٹ بعد — 2:30 کو 'ساڑھے دو' کہتے ہیں",
          },
        },
      ],
      lesson: {
        en: "🕐 **We can measure length and tell time!**\n\n**Measuring length without a ruler:** Lay paperclips 📎 end to end along the object. Count how many fit! A pencil might be 7 paperclips long.\n\nWe can also measure with cubes, your finger, or your foot — these are called **non-standard units**.\n\n**Telling time on an analog clock:**\n• **Short hand** = hour hand (where it points tells you the hour)\n• **Long hand** = minute hand\n  - Points to **12** → exactly on the hour (e.g., 3:00)\n  - Points to **6** → half past the hour (e.g., 3:30)\n\nAt school, knowing the time helps you know when lunch starts, when recess ends, and when it is time to go home! ⏰🌿",
        es: "🕐 **¡Podemos medir longitudes y decir la hora!**\n\n**Medir longitud sin regla:** Coloca sujetapapeles 📎 de extremo a extremo junto al objeto. ¡Cuenta cuántos caben! Un lápiz puede medir 7 sujetapapeles de largo.\n\nTambién podemos medir con cubos, tu dedo o tu pie — estas se llaman **unidades no estándar**.\n\n**Decir la hora en un reloj analógico:**\n• **Manecilla corta** = hora\n  - Apunta al **12** → en punto (ej. 3:00)\n  - Apunta al **6** → y media (ej. 3:30)\n\n¡En la escuela, saber la hora te ayuda a saber cuándo empieza el almuerzo y cuándo termina el recreo! ⏰🌿",
        ur: "🕐 **ہم لمبائی ناپ سکتے ہیں اور وقت بتا سکتے ہیں!**\n\n**بغیر پیمانے کے لمبائی ناپنا:** کلپ 📎 کو چیز کے ساتھ سرے سے سرے تک رکھو۔ گنو کتنے فٹ ہوتے ہیں! ایک پنسل 7 کلپ لمبی ہو سکتی ہے۔\n\nہم مکعب، انگلی یا پاؤں سے بھی ناپ سکتے ہیں — انہیں **غیر معیاری اکائیاں** کہتے ہیں۔\n\n**اینالاگ گھڑی پر وقت بتانا:**\n• **چھوٹی سوئی** = گھنٹہ\n• **لمبی سوئی** = منٹ\n  - **12** پر → پوری گھنٹی (مثلاً 3:00)\n  - **6** پر → آدھی (مثلاً 3:30)\n\nاسکول میں وقت جاننا تمہیں بتاتا ہے کب کھانا شروع ہوتا ہے اور کب چھٹی ہوتی ہے! ⏰🌿",
      },
      exercises: [
        {
          id: "ex-1.7-1",
          type: "multiple-choice",
          prompt: {
            en: "📎 A student measures a leaf using paperclips laid end to end. The leaf is 5 paperclips long. What unit did the student use?",
            es: "📎 Un estudiante mide una hoja usando sujetapapeles. La hoja mide 5 sujetapapeles de largo. ¿Qué unidad usó?",
            ur: "📎 ایک طالب علم کلپ سے پتا ناپتا ہے۔ پتا 5 کلپ لمبا ہے۔ طالب علم نے کون سی اکائی استعمال کی؟",
          },
          choices: [
            { en: "A standard unit (inches)", es: "Una unidad estándar (pulgadas)", ur: "معیاری اکائی (انچ)" },
            { en: "A non-standard unit (paperclips)", es: "Una unidad no estándar (sujetapapeles)", ur: "غیر معیاری اکائی (کلپ)" },
            { en: "A ruler", es: "Una regla", ur: "پیمانہ" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-1.7-2",
          type: "multiple-choice",
          prompt: {
            en: "🕒 The short hand points to 3 and the long hand points to 12. What time is it?",
            es: "🕒 La manecilla corta apunta al 3 y la larga al 12. ¿Qué hora es?",
            ur: "🕒 چھوٹی سوئی 3 پر اور لمبی سوئی 12 پر ہے۔ کیا وقت ہے؟",
          },
          choices: [
            { en: "12:03", es: "12:03", ur: "12:03" },
            { en: "3:30", es: "3:30", ur: "3:30" },
            { en: "3:00", es: "3:00", ur: "3:00" },
            { en: "12:30", es: "12:30", ur: "12:30" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.7-3",
          type: "multiple-choice",
          prompt: {
            en: "🕧 The short hand is between 7 and 8, and the long hand points to 6. What time is it?",
            es: "🕧 La manecilla corta está entre 7 y 8, y la larga apunta al 6. ¿Qué hora es?",
            ur: "🕧 چھوٹی سوئی 7 اور 8 کے درمیان ہے اور لمبی سوئی 6 پر۔ کیا وقت ہے؟",
          },
          choices: [
            { en: "6:07", es: "6:07", ur: "6:07" },
            { en: "7:30", es: "7:30", ur: "7:30" },
            { en: "8:00", es: "8:00", ur: "8:00" },
            { en: "6:30", es: "6:30", ur: "6:30" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "qz-1.7-1",
          type: "multiple-choice",
          prompt: {
            en: "📎 A pencil is 8 cubes long and a crayon is 5 cubes long. How much longer is the pencil?",
            es: "📎 Un lápiz mide 8 cubos y un crayón mide 5 cubos. ¿Cuánto más largo es el lápiz?",
            ur: "📎 پنسل 8 مکعب لمبی ہے اور کریون 5 مکعب۔ پنسل کتنی زیادہ لمبی ہے؟",
          },
          choices: [
            { en: "2 cubes", es: "2 cubos", ur: "2 مکعب" },
            { en: "13 cubes", es: "13 cubos", ur: "13 مکعب" },
            { en: "3 cubes", es: "3 cubos", ur: "3 مکعب" },
            { en: "4 cubes", es: "4 cubos", ur: "4 مکعب" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.7-2",
          type: "multiple-choice",
          prompt: {
            en: "🕐 Which hand on a clock is the HOUR hand?",
            es: "🕐 ¿Cuál manecilla del reloj es la de las HORAS?",
            ur: "🕐 گھڑی پر کون سی سوئی گھنٹے کی سوئی ہے؟",
          },
          choices: [
            { en: "The long hand", es: "La manecilla larga", ur: "لمبی سوئی" },
            { en: "The short hand", es: "La manecilla corta", ur: "چھوٹی سوئی" },
            { en: "Both hands", es: "Ambas manecillas", ur: "دونوں سوئیاں" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-1.7-3",
          type: "true-false",
          prompt: {
            en: "🕧 When the minute hand points to 6, the time is half past the hour (e.g., 2:30). True or False?",
            es: "🕧 Cuando el minutero apunta al 6, la hora es y media (ej. 2:30). ¿Verdadero o falso?",
            ur: "🕧 جب منٹ کی سوئی 6 پر ہو تو وقت آدھا گھنٹہ (مثلاً 2:30) ہوتا ہے۔ صحیح یا غلط؟",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      wordProblems: [
        {
          id: "wp-1.7-1",
          emoji: "🌿📏",
          scene: "School garden measuring day — comparing plant heights with cubes",
          prompt: {
            en: "Amir's plant is 9 cubes tall. Zara's plant is 6 cubes tall. How much taller is Amir's plant?",
            es: "La planta de Amir mide 9 cubos. La de Zara mide 6 cubos. ¿Cuánto más alta es la de Amir?",
            ur: "امیر کا پودا 9 مکعب اونچا ہے۔ زارا کا 6 مکعب۔ امیر کا پودا کتنا زیادہ اونچا ہے؟",
          },
          answer: 3,
          answerUnit: { en: "cubes taller", es: "cubos más alto", ur: "مکعب زیادہ اونچا" },
        },
        {
          id: "wp-1.7-2",
          emoji: "⏰🏫",
          scene: "School schedule — first graders read the clock at Dallas elementary",
          prompt: {
            en: "School lunch starts at 12:00 and ends at 12:30. How long is lunch — a whole hour or half an hour?",
            es: "El almuerzo escolar comienza a las 12:00 y termina a las 12:30. ¿Cuánto dura el almuerzo — una hora entera o media hora?",
            ur: "اسکول کا کھانا 12:00 پر شروع اور 12:30 پر ختم ہوتا ہے۔ کھانا کتنی دیر ہے — پوری گھنٹی یا آدھی؟",
          },
          answer: 30,
          answerUnit: { en: "minutes (half an hour)", es: "minutos (media hora)", ur: "منٹ (آدھا گھنٹہ)" },
        },
      ],
    },

    // ─── Unit 8: Graphs & Data ────────────────────────────────────────────────
    {
      teks: "1.8A",
      cambridge: "Stage 1 · 1Dh1",
      emoji: "📊",
      title: {
        en: "Graphs & Data",
        es: "Gráficas y Datos",
        ur: "گراف اور ڈیٹا",
      },
      learningObjective: {
        en: "I am learning to collect, sort, and organize data so that I can use it to answer questions.",
        es: "Estoy aprendiendo a recolectar, clasificar y organizar datos para poder usarlos y responder preguntas.",
        ur: "میں معلومات جمع کرنا، چھانٹنا اور منظم کرنا سیکھ رہا ہوں تاکہ سوالات کے جواب دینے کے لیے استعمال کر سکوں۔",
      },
      successCriteria: [
        { en: "I can sort information into up to three categories.", es: "Puedo clasificar información en hasta tres categorías.", ur: "میں معلومات کو تین اقسام تک چھانٹ سکتا ہوں۔" },
        { en: "I can record data using tally marks or a T-chart.", es: "Puedo registrar datos usando marcas de conteo o una tabla en T.", ur: "میں ٹیلی مارکس یا ٹی چارٹ کا استعمال کرتے ہوئے ڈیٹا ریکارڈ کر سکتا ہوں۔" },
        { en: "I can use my organized data to answer a question.", es: "Puedo usar mis datos organizados para responder una pregunta.", ur: "میں اپنے منظم ڈیٹا کا استعمال کر کے سوال کا جواب دے سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "data",
          emoji: "🗂️",
          word: { en: "data", es: "datos", ur: "ڈیٹا" },
          definition: {
            en: "information we collect by counting or asking questions",
            es: "información que recopilamos contando o haciendo preguntas",
            ur: "وہ معلومات جو ہم گن کر یا سوال پوچھ کر جمع کرتے ہیں",
          },
        },
        {
          id: "tally",
          emoji: "📝",
          word: { en: "tally mark", es: "marca de conteo", ur: "گنتی کا نشان" },
          definition: {
            en: "a mark we make to count — every 5th mark crosses the others: ||||",
            es: "una marca que hacemos para contar — cada 5ª marca cruza las otras: ||||",
            ur: "گنتی کا نشان — ہر 5واں نشان باقیوں کو کاٹتا ہے: ||||",
          },
        },
        {
          id: "graph",
          emoji: "📊",
          word: { en: "graph", es: "gráfica", ur: "گراف" },
          definition: {
            en: "a picture that shows data so it is easy to compare",
            es: "una imagen que muestra los datos para que sea fácil compararlos",
            ur: "ایک تصویر جو ڈیٹا دکھاتی ہے تاکہ موازنہ آسان ہو",
          },
        },
        {
          id: "most",
          emoji: "🏆",
          word: { en: "most", es: "más", ur: "سب سے زیادہ" },
          definition: {
            en: "the category with the biggest number",
            es: "la categoría con el número más grande",
            ur: "وہ زمرہ جس میں سب سے بڑا نمبر ہو",
          },
        },
        {
          id: "least",
          emoji: "🔻",
          word: { en: "least", es: "menos", ur: "سب سے کم" },
          definition: {
            en: "the category with the smallest number",
            es: "la categoría con el número más pequeño",
            ur: "وہ زمرہ جس میں سب سے چھوٹا نمبر ہو",
          },
        },
      ],
      lesson: {
        en: "📊 **Data helps us understand our community!**\n\nWhen we collect information — like how many bottles each class recycled — that is called **data**. We can sort data into groups, count with **tally marks**, and show it on a **graph** so everyone can understand it.\n\n🌍 Example — Recycling Drive results:\n| Class | Bottles |\n|-------|---------|\n| Room 1 | 8 |\n| Room 2 | 5 |\n| Room 3 | 11 |\n\nWhich class recycled the **most**? Room 3 with 11!\nWhich recycled the **least**? Room 2 with 5.\n\nWhen we share data like this, we can celebrate who is helping the most and encourage others to do more. Data is how we measure kindness! 💚",
        es: "📊 **¡Los datos nos ayudan a entender nuestra comunidad!**\n\nCuando recopilamos información — como cuántas botellas recicló cada clase — eso se llama **datos**. Podemos ordenar los datos en grupos, contar con **marcas de conteo** y mostrarlos en una **gráfica** para que todos puedan entenderlos.\n\n🌍 Ejemplo — Resultados de la colecta de reciclaje:\n| Clase | Botellas |\n|-------|---------|\n| Salón 1 | 8 |\n| Salón 2 | 5 |\n| Salón 3 | 11 |\n\n¿Qué clase recicló **más**? ¡El salón 3 con 11!\n¿Cuál recicló **menos**? El salón 2 con 5.\n\nCuando compartimos datos así, podemos celebrar quién más está ayudando y animar a otros a hacer más. ¡Los datos son cómo medimos la bondad! 💚",
        ur: "📊 **ڈیٹا ہمیں اپنی کمیونٹی سمجھنے میں مدد کرتا ہے!**\n\nجب ہم معلومات جمع کرتے ہیں — جیسے ہر کلاس نے کتنی بوتلیں ری سائیکل کیں — اسے **ڈیٹا** کہتے ہیں۔ ہم ڈیٹا کو گروپوں میں چھانٹ سکتے ہیں، **گنتی کے نشانوں** سے گن سکتے ہیں، اور **گراف** پر دکھا سکتے ہیں تاکہ سب سمجھ سکیں۔\n\n🌍 مثال — ری سائیکلنگ مہم کے نتائج:\n| کلاس | بوتلیں |\n|-------|---------|\n| کمرہ 1 | 8 |\n| کمرہ 2 | 5 |\n| کمرہ 3 | 11 |\n\nکس کلاس نے **سب سے زیادہ** ری سائیکل کیا؟ کمرہ 3 نے 11 کے ساتھ!\nکس نے **سب سے کم** ری سائیکل کیا؟ کمرہ 2 نے 5 کے ساتھ۔\n\nجب ہم اس طرح ڈیٹا شیئر کرتے ہیں تو جشن منا سکتے ہیں کہ کون سب سے زیادہ مدد کر رہا ہے اور دوسروں کو مزید کرنے کی ترغیب دے سکتے ہیں۔ ڈیٹا وہ طریقہ ہے جس سے ہم مہربانی ناپتے ہیں! 💚",
      },
      exercises: [
        {
          id: "ex-1.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "📊 The class counted how many seeds each table planted:\nTable A: 6 seeds  |  Table B: 9 seeds  |  Table C: 4 seeds\nWhich table planted the most seeds?",
            es: "📊 La clase contó cuántas semillas plantó cada mesa:\nMesa A: 6 semillas  |  Mesa B: 9 semillas  |  Mesa C: 4 semillas\n¿Qué mesa plantó más semillas?",
            ur: "📊 کلاس نے گنا کہ ہر میز نے کتنے بیج لگائے:\nمیز A: 6 بیج  |  میز B: 9 بیج  |  میز C: 4 بیج\nکس میز نے سب سے زیادہ بیج لگائے؟",
          },
          choices: [
            { en: "Table A", es: "Mesa A", ur: "میز A" },
            { en: "Table C", es: "Mesa C", ur: "میز C" },
            { en: "Table B", es: "Mesa B", ur: "میز B" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Students sorted recyclables: 7 bottles, 5 cans, 3 newspapers. What did they collect the least of?",
            es: "♻️ Los estudiantes clasificaron materiales reciclables: 7 botellas, 5 latas, 3 periódicos. ¿Qué recolectaron en menor cantidad?",
            ur: "♻️ طلبا نے قابل ری سائیکل چیزیں چھانٹیں: 7 بوتلیں، 5 ڈبے، 3 اخبار۔ انہوں نے سب سے کم کیا جمع کیا؟",
          },
          choices: [
            { en: "Bottles", es: "Botellas", ur: "بوتلیں" },
            { en: "Cans", es: "Latas", ur: "ڈبے" },
            { en: "Newspapers", es: "Periódicos", ur: "اخبار" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.8A-3",
          type: "true-false",
          prompt: {
            en: "📝 Tally marks help us count things quickly. When we count 5 items, we make 4 straight marks and cross them with 1 diagonal mark.",
            es: "📝 Las marcas de conteo nos ayudan a contar cosas rápidamente. Cuando contamos 5 objetos, hacemos 4 marcas rectas y las cruzamos con 1 marca diagonal.",
            ur: "📝 گنتی کے نشان ہمیں جلدی گننے میں مدد کرتے ہیں۔ جب ہم 5 چیزیں گنتے ہیں تو 4 سیدھے نشان بناتے ہیں اور 1 ترچھے نشان سے انہیں کاٹتے ہیں۔",
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
          id: "qz-1.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 The school garden survey asked: what should we grow? Results: Tomatoes: 8 votes · Carrots: 12 votes · Herbs: 5 votes. What did most students want to grow?",
            es: "🌱 La encuesta del jardín escolar preguntó: ¿qué debemos cultivar? Resultados: Tomates: 8 votos · Zanahorias: 12 votos · Hierbas: 5 votos. ¿Qué quería cultivar la mayoría de los estudiantes?",
            ur: "🌱 اسکول گارڈن سروے نے پوچھا: ہمیں کیا اگانا چاہیے؟ نتائج: ٹماٹر: 8 ووٹ · گاجریں: 12 ووٹ · جڑی بوٹیاں: 5 ووٹ۔ زیادہ تر طلبا کیا اگانا چاہتے تھے؟",
          },
          choices: [
            { en: "Tomatoes", es: "Tomates", ur: "ٹماٹر" },
            { en: "Herbs", es: "Hierbas", ur: "جڑی بوٹیاں" },
            { en: "Carrots", es: "Zanahorias", ur: "گاجریں" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌿 Food drive data: Monday: 6 cans · Tuesday: 10 cans · Wednesday: 6 cans. How many more cans were collected on Tuesday than on Monday?",
            es: "🌿 Datos de la colecta de alimentos: Lunes: 6 latas · Martes: 10 latas · Miércoles: 6 latas. ¿Cuántas latas más se recolectaron el martes que el lunes?",
            ur: "🌿 فوڈ ڈرائیو ڈیٹا: پیر: 6 ڈبے · منگل: 10 ڈبے · بدھ: 6 ڈبے۔ پیر کے مقابلے منگل کو کتنے زیادہ ڈبے جمع ہوئے؟",
          },
          choices: [
            { en: "3", es: "3", ur: "3" },
            { en: "6", es: "6", ur: "6" },
            { en: "5", es: "5", ur: "5" },
            { en: "4", es: "4", ur: "4" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-1.8A-3",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A class sorted recycling into 3 groups: Paper: 9 items · Plastic: 14 items · Glass: 7 items. Which group had the least items?",
            es: "🌍 Una clase clasificó el reciclaje en 3 grupos: Papel: 9 artículos · Plástico: 14 artículos · Vidrio: 7 artículos. ¿Qué grupo tenía menos artículos?",
            ur: "🌍 ایک کلاس نے ری سائیکلنگ 3 گروپوں میں چھانٹی: کاغذ: 9 چیزیں · پلاسٹک: 14 چیزیں · شیشہ: 7 چیزیں۔ کس گروپ میں سب سے کم چیزیں تھیں؟",
          },
          choices: [
            { en: "Paper", es: "Papel", ur: "کاغذ" },
            { en: "Glass", es: "Vidrio", ur: "شیشہ" },
            { en: "Plastic", es: "Plástico", ur: "پلاسٹک" },
          ],
          correctIndex: 1,
        },
      ],
    },

    // ─── Unit 9: Financial Literacy ──────────────────────────────────────────
    {
      teks: "1.9",
      cambridge: "Stage 2 · 2Mm3",
      emoji: "💼",
      title: {
        en: "Needs, Wants & Saving",
        es: "Necesidades, Deseos y Ahorrar",
        ur: "ضروریات، خواہشات اور بچت",
      },
      learningObjective: {
        en: "I am learning about money and personal choices so that I can understand the difference between needs, wants, spending, and saving.",
        es: "Estoy aprendiendo sobre el dinero y las decisiones personales para poder entender la diferencia entre necesidades, deseos, gastar y ahorrar.",
        ur: "میں پیسے اور ذاتی فیصلوں کے بارے میں سیکھ رہا ہوں تاکہ ضروریات، خواہشات، خرچ کرنے اور بچت کے فرق کو سمجھ سکوں۔",
      },
      successCriteria: [
        { en: "I can explain that income is money earned.", es: "Puedo explicar que el ingreso es dinero que se gana.", ur: "میں وضاحت کر سکتا ہوں کہ آمدنی وہ پیسہ ہے جو کمایا جاتا ہے۔" },
        { en: "I can tell the difference between a want and a need.", es: "Puedo decir la diferencia entre un deseo y una necesidad.", ur: "میں خواہش اور ضرورت کا فرق بتا سکتا ہوں۔" },
        { en: "I can explain the difference between spending and saving, and what it means to give to others.", es: "Puedo explicar la diferencia entre gastar y ahorrar, y lo que significa dar a otros.", ur: "میں خرچ کرنے اور بچت کا فرق اور دوسروں کو دینے کا مطلب بتا سکتا ہوں۔" },
      ],
      vocabulary: [
        {
          id: "need",
          emoji: "🏠",
          word: { en: "need", es: "necesidad", ur: "ضرورت" },
          definition: {
            en: "something you must have to live — like food, shelter, and clothing",
            es: "algo que necesitas para vivir — como comida, refugio y ropa",
            ur: "وہ چیز جو زندگی کے لیے ضروری ہو — جیسے کھانا، گھر، اور کپڑے",
          },
        },
        {
          id: "want",
          emoji: "🎮",
          word: { en: "want", es: "deseo", ur: "خواہش" },
          definition: {
            en: "something you would like to have but do not need to live",
            es: "algo que desearías tener pero que no necesitas para vivir",
            ur: "وہ چیز جو تم چاہتے ہو لیکن زندگی کے لیے ضروری نہیں",
          },
        },
        {
          id: "income",
          emoji: "💵",
          word: { en: "income", es: "ingreso", ur: "آمدنی" },
          definition: {
            en: "money you receive for doing work",
            es: "dinero que recibes por hacer un trabajo",
            ur: "کام کرنے کے بدلے ملنے والے پیسے",
          },
        },
        {
          id: "spend",
          emoji: "🛒",
          word: { en: "spend", es: "gastar", ur: "خرچ کرنا" },
          definition: {
            en: "to use money to buy something",
            es: "usar dinero para comprar algo",
            ur: "کچھ خریدنے کے لیے پیسے لگانا",
          },
        },
        {
          id: "save",
          emoji: "🐖",
          word: { en: "save", es: "ahorrar", ur: "بچانا" },
          definition: {
            en: "to keep money to use later instead of spending it now",
            es: "guardar dinero para usarlo después en lugar de gastarlo ahora",
            ur: "پیسے رکھنا تاکہ بعد میں استعمال کریں بجائے ابھی خرچ کریں",
          },
        },
      ],
      lesson: {
        en: "💼 **Making smart choices with money!**\n\n**Needs vs. Wants:**\n• A **need** is something you must have: food 🍎, clothing 👕, shelter 🏠\n• A **want** is something extra that is nice to have: toys 🎮, candy 🍬, video games\n\n**Income:** When you do chores or help at home, you might earn an **allowance** — that is income!\n\n**Spend or Save?**\nIf a toy costs $5 and you only have $2, you need to **save** $3 more before you can buy it.\n\n🌿 In our community, families make choices every day about needs and wants. Saving up for something special teaches patience and planning. When you save, your money grows! 💰",
        es: "💼 **¡Tomando decisiones inteligentes con el dinero!**\n\n**Necesidades vs. Deseos:**\n• Una **necesidad** es algo que debes tener: comida 🍎, ropa 👕, refugio 🏠\n• Un **deseo** es algo extra que es agradable tener: juguetes 🎮, dulces 🍬\n\n**Ingresos:** Cuando haces quehaceres o ayudas en casa, puedes ganar una **mesada** — ¡eso es un ingreso!\n\n**¿Gastar o Ahorrar?**\nSi un juguete cuesta $5 y solo tienes $2, necesitas **ahorrar** $3 más antes de comprarlo.\n\n🌿 En nuestra comunidad, las familias toman decisiones cada día sobre necesidades y deseos. ¡Ahorrar para algo especial enseña paciencia y planificación! 💰",
        ur: "💼 **پیسوں کے ساتھ سمجھدار فیصلے!**\n\n**ضروریات بنام خواہشات:**\n• **ضرورت** وہ چیز ہے جو لازمی ہو: کھانا 🍎، کپڑے 👕، گھر 🏠\n• **خواہش** وہ اضافی چیز ہے جو اچھی لگے: کھلونے 🎮، مٹھائی 🍬\n\n**آمدنی:** جب تم گھر کے کام کرتے ہو تو جیب خرچ مل سکتا ہے — یہ آمدنی ہے!\n\n**خرچ یا بچت؟**\nاگر کھلونہ $5 کا ہے اور تمہارے پاس صرف $2 ہیں تو $3 مزید **بچانے** ہوں گے۔\n\n🌿 ہماری کمیونٹی میں گھرانے ہر روز ضروریات اور خواہشات کے بارے میں فیصلے کرتے ہیں۔ کسی خاص چیز کے لیے بچت کرنا صبر اور منصوبہ بندی سکھاتا ہے! 💰",
      },
      exercises: [
        {
          id: "ex-1.9-1",
          type: "multiple-choice",
          prompt: {
            en: "🏠 Which of these is a NEED?",
            es: "🏠 ¿Cuál de estas es una NECESIDAD?",
            ur: "🏠 ان میں سے کون سی ضرورت ہے؟",
          },
          choices: [
            { en: "A new video game", es: "Un videojuego nuevo", ur: "ایک نیا ویڈیو گیم" },
            { en: "Food to eat", es: "Comida para comer", ur: "کھانے کے لیے کھانا" },
            { en: "A toy car", es: "Un carro de juguete", ur: "ایک کھلونا گاڑی" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-1.9-2",
          type: "multiple-choice",
          prompt: {
            en: "💵 Lila does chores at home and earns $1 each week. She wants to buy a book that costs $4. How many weeks does she need to save?",
            es: "💵 Lila hace quehaceres en casa y gana $1 por semana. Quiere comprar un libro que cuesta $4. ¿Cuántas semanas necesita ahorrar?",
            ur: "💵 لیلا گھر کے کام کرتی ہے اور ہر ہفتے $1 کماتی ہے۔ وہ $4 کی کتاب خریدنا چاہتی ہے۔ اسے کتنے ہفتے بچانے ہوں گے؟",
          },
          choices: [
            { en: "2 weeks", es: "2 semanas", ur: "2 ہفتے" },
            { en: "5 weeks", es: "5 semanas", ur: "5 ہفتے" },
            { en: "4 weeks", es: "4 semanas", ur: "4 ہفتے" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-1.9-3",
          type: "true-false",
          prompt: {
            en: "🎮 A toy is a want, not a need. True or False?",
            es: "🎮 Un juguete es un deseo, no una necesidad. ¿Verdadero o falso?",
            ur: "🎮 کھلونہ ایک خواہش ہے، ضرورت نہیں۔ صحیح یا غلط؟",
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
          id: "qz-1.9-1",
          type: "multiple-choice",
          prompt: {
            en: "🐖 Saving money means ___.",
            es: "🐖 Ahorrar dinero significa ___.",
            ur: "🐖 پیسے بچانے کا مطلب ہے ___۔",
          },
          choices: [
            { en: "Spending it all at once", es: "Gastarlo todo de una vez", ur: "سب ایک بار خرچ کرنا" },
            { en: "Keeping it to use later", es: "Guardarlo para usarlo después", ur: "بعد میں استعمال کے لیے رکھنا" },
            { en: "Giving it all away", es: "Darlo todo", ur: "سب دے دینا" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-1.9-2",
          type: "multiple-choice",
          prompt: {
            en: "👕 Which of these is a WANT?",
            es: "👕 ¿Cuál de estas es un DESEO?",
            ur: "👕 ان میں سے کون سی خواہش ہے؟",
          },
          choices: [
            { en: "Clean water to drink", es: "Agua limpia para beber", ur: "پینے کا صاف پانی" },
            { en: "Clothes to stay warm", es: "Ropa para abrigarse", ur: "گرم رکھنے کے لیے کپڑے" },
            { en: "A new pair of sneakers (for fun)", es: "Un par de tenis nuevos (por gusto)", ur: "نئے جوتے (مزے کے لیے)" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-1.9-3",
          type: "true-false",
          prompt: {
            en: "💵 Income is money you receive for doing work. True or False?",
            es: "💵 Un ingreso es el dinero que recibes por hacer un trabajo. ¿Verdadero o falso?",
            ur: "💵 آمدنی وہ پیسے ہیں جو آپ کو کام کرنے کے بدلے ملتے ہیں۔ صحیح یا غلط؟",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
      wordProblems: [
        {
          id: "wp-1.9-1",
          emoji: "🐖💰",
          scene: "First grader saving up for a book at a Dallas school book fair",
          prompt: {
            en: "Marcus earns $2 a week helping at home. He wants to buy a book that costs $6. How many weeks must he save?",
            es: "Marcus gana $2 por semana ayudando en casa. Quiere comprar un libro que cuesta $6. ¿Cuántas semanas debe ahorrar?",
            ur: "مارکس گھر میں مدد کر کے ہر ہفتے $2 کماتا ہے۔ وہ $6 کی کتاب خریدنا چاہتا ہے۔ اسے کتنے ہفتے بچانے ہوں گے؟",
          },
          answer: 3,
          answerUnit: { en: "weeks", es: "semanas", ur: "ہفتے" },
        },
        {
          id: "wp-1.9-2",
          emoji: "🏪🌿",
          scene: "Family decides between needs and wants at a community store",
          prompt: {
            en: "A family has $10. They need to buy bread ($3) and milk ($2). After buying both, how much money is left to save?",
            es: "Una familia tiene $10. Necesita comprar pan ($3) y leche ($2). Después de comprar ambos, ¿cuánto dinero le queda para ahorrar?",
            ur: "ایک خاندان کے پاس $10 ہیں۔ انہیں روٹی ($3) اور دودھ ($2) خریدنا ہے۔ دونوں خریدنے کے بعد بچانے کے لیے کتنے پیسے بچتے ہیں؟",
          },
          answer: 5,
          answerUnit: { en: "dollars", es: "dólares", ur: "ڈالر" },
        },
      ],
    },

  ],
};

export default grade1;