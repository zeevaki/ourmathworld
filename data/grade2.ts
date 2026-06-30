import { Grade } from "./types";

const grade2: Grade = {
  grade: 2,
  label: "Grade 2",
  emoji: "✌️",
  color: "#7C3AED",
  units: [
    {
      teks: "2.4A",
      cambridge: "Stage 2 · 2Nc1",
      emoji: "🥫",
      title: {
        en: "Adding & Subtracting",
        es: "Sumar y Restar",
        ur: "جمع اور تفریق",
      },
      vocabulary: [
        {
          id: "add",
          emoji: "➕",
          word: { en: "add", es: "sumar", ur: "جمع کرنا" },
          definition: {
            en: "put numbers together to get a bigger number",
            es: "juntar números para obtener un número más grande",
            ur: "نمبروں کو ملانا تاکہ بڑا نمبر بنے",
          },
        },
        {
          id: "subtract",
          emoji: "➖",
          word: { en: "subtract", es: "restar", ur: "تفریق کرنا" },
          definition: {
            en: "take away a number to get a smaller number",
            es: "quitar un número para obtener uno más pequeño",
            ur: "نمبر ہٹانا تاکہ چھوٹا نمبر بنے",
          },
        },
        {
          id: "sum",
          emoji: "🔢",
          word: { en: "sum", es: "la suma", ur: "حاصل جمع" },
          definition: {
            en: "the answer when you add numbers",
            es: "la respuesta cuando sumas números",
            ur: "جمع کرنے کے بعد جو جواب آتا ہے",
          },
        },
        {
          id: "difference",
          emoji: "🔢",
          word: { en: "difference", es: "la diferencia", ur: "فرق" },
          definition: {
            en: "the answer when you subtract numbers",
            es: "la respuesta cuando restas números",
            ur: "تفریق کرنے کے بعد جو جواب آتا ہے",
          },
        },
        {
          id: "equals",
          emoji: "🟰",
          word: { en: "equals", es: "igual a", ur: "برابر ہے" },
          definition: {
            en: "has the same value as",
            es: "tiene el mismo valor que",
            ur: "جس کی قیمت ایک جیسی ہو",
          },
        },
      ],
      lesson: {
        en: "🥫 **Math can help our community!** Our school is running a food drive to help families who need food. When we **add**, we count how much we collected together. When we **subtract**, we find out how much more we still need.\n\nExample: Our class brought 6 cans on Monday and 5 cans on Tuesday. 6 + 5 = **11 cans total!** The food bank needs 20 cans. 20 - 11 = **9 more cans to go!** You are helping real families with your math! 💪",
        es: "🥫 **¡Las matemáticas pueden ayudar a nuestra comunidad!** Nuestra escuela tiene una colecta de alimentos para ayudar a familias que necesitan comida. Cuando **sumamos**, contamos todo lo que recolectamos juntos. Cuando **restamos**, averiguamos cuánto más necesitamos.\n\nEjemplo: Nuestra clase trajo 6 latas el lunes y 5 el martes. 6 + 5 = **¡11 latas en total!** El banco de alimentos necesita 20 latas. 20 - 11 = **¡9 latas más!** ¡Estás ayudando a familias reales con tus matemáticas! 💪",
        ur: "🥫 **ریاضی ہماری کمیونٹی کی مدد کر سکتی ہے!** ہمارا اسکول کھانے کی مہم چلا رہا ہے تاکہ ضرورتمند خاندانوں کی مدد ہو سکے۔ جب ہم **جمع** کرتے ہیں تو ہم دیکھتے ہیں کہ مل کر کتنا جمع کیا۔ جب **تفریق** کرتے ہیں تو پتہ چلتا ہے کہ ابھی کتنا اور چاہیے۔\n\nمثال: ہماری کلاس نے پیر کو 6 ڈبے اور منگل کو 5 ڈبے لائے۔ 6 + 5 = **کل 11 ڈبے!** فوڈ بینک کو 20 ڈبے چاہیے۔ 20 - 11 = **9 مزید ڈبے چاہیے!** تم اپنی ریاضی سے اصلی خاندانوں کی مدد کر رہے ہو! 💪",
      },
      exercises: [
        {
          id: "ex-2.4A-1",
          type: "multiple-choice",
          prompt: {
            en: "🥫 Your class collected 7 cans of food on Monday and 6 cans on Friday for the food drive. How many cans did you collect in all?",
            es: "🥫 Tu clase recolectó 7 latas el lunes y 6 latas el viernes para la colecta. ¿Cuántas latas recolectaron en total?",
            ur: "🥫 تمہاری کلاس نے فوڈ ڈرائیو کے لیے پیر کو 7 ڈبے اور جمعہ کو 6 ڈبے جمع کیے۔ کل کتنے ڈبے جمع ہوئے؟",
          },
          choices: [
            { en: "12", es: "12", ur: "12" },
            { en: "13", es: "13", ur: "13" },
            { en: "14", es: "14", ur: "14" },
            { en: "11", es: "11", ur: "11" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.4A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Students planted 15 trees in the school garden to help clean the air. A storm knocked down 6 trees. How many trees are still standing?",
            es: "🌱 Los estudiantes plantaron 15 árboles en el jardín escolar para limpiar el aire. Una tormenta derribó 6 árboles. ¿Cuántos árboles siguen en pie?",
            ur: "🌱 طلبا نے ہوا صاف کرنے کے لیے اسکول کے باغ میں 15 درخت لگائے۔ طوفان نے 6 درخت گرا دیے۔ ابھی کتنے درخت کھڑے ہیں؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "10", es: "10", ur: "10" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4A-3",
          type: "true-false",
          prompt: {
            en: "♻️ Our class recycled 8 bottles in the morning and 8 more in the afternoon. The sum is 16 bottles kept out of the trash!",
            es: "♻️ Nuestra clase recicló 8 botellas por la mañana y 8 más por la tarde. ¡La suma es 16 botellas que no fueron a la basura!",
            ur: "♻️ ہماری کلاس نے صبح 8 بوتلیں اور دوپہر میں 8 مزید بوتلیں ری سائیکل کیں۔ حاصل جمع 16 بوتلیں ہیں جو کوڑے میں نہیں گئیں!",
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
          id: "qz-2.4A-1",
          type: "multiple-choice",
          prompt: {
            en: "🥫 The food bank had 20 bags of rice. They gave 13 bags to families in need. How many bags are left?",
            es: "🥫 El banco de alimentos tenía 20 bolsas de arroz. Repartieron 13 bolsas a familias que las necesitaban. ¿Cuántas bolsas quedan?",
            ur: "🥫 فوڈ بینک کے پاس چاول کے 20 تھیلے تھے۔ انہوں نے ضرورتمند خاندانوں کو 13 تھیلے دیے۔ کتنے تھیلے بچے؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "6", es: "6", ur: "6" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-2.4A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌳 Grade 1 planted 9 trees and Grade 2 planted 7 trees for Earth Day. How many trees did both grades plant together?",
            es: "🌳 El primer grado plantó 9 árboles y el segundo grado plantó 7 árboles por el Día de la Tierra. ¿Cuántos árboles plantaron los dos grados juntos?",
            ur: "🌳 پہلی جماعت نے یوم ارض پر 9 درخت لگائے اور دوسری جماعت نے 7 درخت لگائے۔ دونوں جماعتوں نے مل کر کتنے درخت لگائے؟",
          },
          choices: [
            { en: "15", es: "15", ur: "15" },
            { en: "17", es: "17", ur: "17" },
            { en: "16", es: "16", ur: "16" },
            { en: "14", es: "14", ur: "14" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.4A-3",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Our school collected 18 cans for recycling. We already sorted 9 of them. How many cans still need to be sorted?",
            es: "♻️ Nuestra escuela juntó 18 latas para reciclar. Ya separamos 9. ¿Cuántas latas faltan por separar?",
            ur: "♻️ ہمارے اسکول نے ری سائیکلنگ کے لیے 18 ڈبے جمع کیے۔ ہم نے پہلے ہی 9 چھانٹ لیے۔ ابھی کتنے ڈبے چھانٹنے باقی ہیں؟",
          },
          choices: [
            { en: "10", es: "10", ur: "10" },
            { en: "8", es: "8", ur: "8" },
            { en: "7", es: "7", ur: "7" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 3,
        },
      ],
    },

    {
      teks: "2.7A",
      cambridge: "Stage 2 · 2Nn5",
      emoji: "🧦",
      title: {
        en: "Even & Odd Numbers",
        es: "Números Pares e Impares",
        ur: "جفت اور طاق نمبر",
      },
      vocabulary: [
        {
          id: "even",
          emoji: "2️⃣",
          word: { en: "even", es: "par", ur: "جفت" },
          definition: {
            en: "a number you can split into two equal groups — like 4, 6, 8",
            es: "un número que puedes dividir en dos grupos iguales — como 4, 6, 8",
            ur: "وہ نمبر جسے دو برابر حصوں میں بانٹ سکتے ہیں — جیسے 4، 6، 8",
          },
        },
        {
          id: "odd",
          emoji: "1️⃣",
          word: { en: "odd", es: "impar", ur: "طاق" },
          definition: {
            en: "a number that has one left over when split into pairs — like 3, 5, 7",
            es: "un número que tiene uno sobrante al dividirlo en pares — como 3, 5, 7",
            ur: "وہ نمبر جو جوڑوں میں بانٹنے پر ایک بچ جائے — جیسے 3، 5، 7",
          },
        },
        {
          id: "pairs",
          emoji: "👫",
          word: { en: "pairs", es: "pares", ur: "جوڑے" },
          definition: {
            en: "groups of two",
            es: "grupos de dos",
            ur: "دو دو کے گروپ",
          },
        },
        {
          id: "equal",
          emoji: "⚖️",
          word: { en: "equal", es: "igual", ur: "برابر" },
          definition: {
            en: "the same amount in each group — fair for everyone",
            es: "la misma cantidad en cada grupo — justo para todos",
            ur: "ہر گروپ میں ایک جیسی تعداد — سب کے لیے انصاف",
          },
        },
      ],
      lesson: {
        en: "🧦 **Fairness starts with math!** Imagine your class collected 14 warm blankets to donate. Can every family get an equal share? If the number is **even**, we can split things into two fair groups — nobody is left out! If the number is **odd**, one group gets more — that's not fair.\n\nEven numbers end in 0, 2, 4, 6, or 8. Odd numbers end in 1, 3, 5, 7, or 9. When we share things equally in our community, we use even numbers to make sure everyone is treated fairly! ⚖️",
        es: "🧦 **¡La justicia empieza con las matemáticas!** Imagina que tu clase juntó 14 cobijas para donar. ¿Puede cada familia recibir la misma cantidad? Si el número es **par**, podemos dividir las cosas en dos grupos justos — ¡nadie queda fuera! Si el número es **impar**, un grupo recibe más — eso no es justo.\n\nLos números pares terminan en 0, 2, 4, 6 u 8. Los impares terminan en 1, 3, 5, 7 o 9. ¡Cuando compartimos cosas en nuestra comunidad, usamos números pares para que todos sean tratados justamente! ⚖️",
        ur: "🧦 **انصاف ریاضی سے شروع ہوتا ہے!** سوچو تمہاری کلاس نے دینے کے لیے 14 گرم کمبل جمع کیے۔ کیا ہر خاندان کو برابر حصہ مل سکتا ہے؟ اگر نمبر **جفت** ہو تو ہم چیزیں دو برابر حصوں میں بانٹ سکتے ہیں — کوئی باہر نہیں رہتا! اگر نمبر **طاق** ہو تو ایک گروپ کو زیادہ ملتا ہے — یہ انصاف نہیں۔\n\nجفت نمبر 0، 2، 4، 6، یا 8 پر ختم ہوتے ہیں۔ طاق نمبر 1، 3، 5، 7، یا 9 پر ختم ہوتے ہیں۔ جب ہم کمیونٹی میں چیزیں بانٹتے ہیں تو جفت نمبر استعمال کرتے ہیں تاکہ سب کے ساتھ انصاف ہو! ⚖️",
      },
      exercises: [
        {
          id: "ex-2.7A-1",
          type: "multiple-choice",
          prompt: {
            en: "🧣 Your class collected 14 scarves to give to children in need. Is 14 even or odd? Can every child get a fair share if we split into 2 equal groups?",
            es: "🧣 Tu clase juntó 14 bufandas para dar a niños que las necesitan. ¿14 es par o impar? ¿Puede cada niño recibir una parte justa si los dividimos en 2 grupos iguales?",
            ur: "🧣 تمہاری کلاس نے ضرورتمند بچوں کو دینے کے لیے 14 اسکارف جمع کیے۔ کیا 14 جفت ہے یا طاق؟ کیا 2 برابر گروپ بنا کر ہر بچے کو برابر حصہ مل سکتا ہے؟",
          },
          choices: [
            { en: "Even — yes, it's fair! ✅", es: "Par — ¡sí, es justo! ✅", ur: "جفت — ہاں، انصاف ہے! ✅" },
            { en: "Odd — no, not fair ❌", es: "Impar — no, no es justo ❌", ur: "طاق — نہیں، انصاف نہیں ❌" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-2.7A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 The garden club has 27 seed packets to hand out equally to two classrooms. Is 27 even or odd?",
            es: "🌱 El club de jardinería tiene 27 sobres de semillas para repartir por igual entre dos salones. ¿27 es par o impar?",
            ur: "🌱 گارڈن کلب کے پاس دو کلاسوں میں برابر بانٹنے کے لیے 27 بیجوں کے پیکٹ ہیں۔ کیا 27 جفت ہے یا طاق؟",
          },
          choices: [
            { en: "Even", es: "Par", ur: "جفت" },
            { en: "Odd — one classroom gets more", es: "Impar — un salón recibe más", ur: "طاق — ایک کلاس کو زیادہ ملے گا" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "qz-2.7A-1",
          type: "multiple-choice",
          prompt: {
            en: "🥤 The school collected 20 water bottles for a hot-day giveaway. Which word best describes 20?",
            es: "🥤 La escuela juntó 20 botellas de agua para repartirlas en un día de calor. ¿Qué palabra describe mejor al 20?",
            ur: "🥤 اسکول نے گرم دن پر تقسیم کرنے کے لیے 20 پانی کی بوتلیں جمع کیں۔ 20 کو بہترین طریقے سے کون سا لفظ بیان کرتا ہے؟",
          },
          choices: [
            { en: "Odd", es: "Impar", ur: "طاق" },
            { en: "Even", es: "Par", ur: "جفت" },
            { en: "Sum", es: "Suma", ur: "حاصل جمع" },
            { en: "Difference", es: "Diferencia", ur: "فرق" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-2.7A-2",
          type: "true-false",
          prompt: {
            en: "♻️ Our class put 15 items in the recycling bin today. Because 15 is odd, we cannot split them into two perfectly equal groups.",
            es: "♻️ Nuestra clase puso hoy 15 artículos en el contenedor de reciclaje. Como 15 es impar, no podemos dividirlos en dos grupos perfectamente iguales.",
            ur: "♻️ ہماری کلاس نے آج ری سائیکلنگ بن میں 15 چیزیں ڈالیں۔ چونکہ 15 طاق ہے، ہم انہیں دو بالکل برابر گروپوں میں نہیں بانٹ سکتے۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 0,
        },
      ],
    },

    {
      teks: "2.8A",
      cambridge: "Stage 2 · 2Gs1",
      emoji: "☀️",
      title: {
        en: "2D Shapes",
        es: "Figuras 2D",
        ur: "دو جہتی شکلیں",
      },
      vocabulary: [
        {
          id: "circle",
          emoji: "⭕",
          word: { en: "circle", es: "círculo", ur: "دائرہ" },
          definition: {
            en: "a round shape with no corners — like the sun or a wheel",
            es: "una figura redonda sin esquinas — como el sol o una rueda",
            ur: "گول شکل جس کے کوئی کونے نہ ہوں — جیسے سورج یا پہیہ",
          },
        },
        {
          id: "square",
          emoji: "🟥",
          word: { en: "square", es: "cuadrado", ur: "مربع" },
          definition: {
            en: "a shape with 4 equal sides — like a garden plot",
            es: "una figura con 4 lados iguales — como un cuadro de jardín",
            ur: "وہ شکل جس کے 4 برابر اطراف ہوں — جیسے باغ کا ایک حصہ",
          },
        },
        {
          id: "triangle",
          emoji: "🔺",
          word: { en: "triangle", es: "triángulo", ur: "تکون" },
          definition: {
            en: "a shape with 3 sides — like a roof that catches rainwater",
            es: "una figura con 3 lados — como un techo que recoge agua de lluvia",
            ur: "وہ شکل جس کے 3 اطراف ہوں — جیسے وہ چھت جو بارش کا پانی جمع کرتی ہے",
          },
        },
        {
          id: "rectangle",
          emoji: "🟦",
          word: { en: "rectangle", es: "rectángulo", ur: "مستطیل" },
          definition: {
            en: "a shape with 4 sides where opposite sides are equal — like a solar panel",
            es: "una figura con 4 lados donde los lados opuestos son iguales — como un panel solar",
            ur: "وہ شکل جس کے 4 اطراف ہوں اور آمنے سامنے والے اطراف برابر ہوں — جیسے سولر پینل",
          },
        },
        {
          id: "sides",
          emoji: "📐",
          word: { en: "sides", es: "lados", ur: "اطراف" },
          definition: {
            en: "the straight lines that make up a shape",
            es: "las líneas rectas que forman una figura",
            ur: "سیدھی لکیریں جو شکل بناتی ہیں",
          },
        },
      ],
      lesson: {
        en: "☀️ **Shapes help save our planet!** Did you know that solar panels — the machines that make electricity from sunlight — are shaped like **rectangles**? Community gardens use **squares** to grow food for neighbors. Rooftops shaped like **triangles** collect rainwater so we don't waste it. Even wind turbines spin in a **circle**!\n\nShapes are everywhere in the tools people use to take care of our Earth. When you learn shapes, you are learning the building blocks of a better world! 🌍",
        es: "☀️ **¡Las figuras ayudan a salvar nuestro planeta!** ¿Sabías que los paneles solares — las máquinas que producen electricidad con la luz del sol — tienen forma de **rectángulo**? Los jardines comunitarios usan **cuadrados** para cultivar comida para los vecinos. Los techos con forma de **triángulo** recogen agua de lluvia para no desperdiciarla. ¡Hasta las turbinas de viento giran en **círculo**!\n\nLas figuras están en todas partes en las herramientas que usamos para cuidar nuestra Tierra. ¡Cuando aprendes figuras, estás aprendiendo los bloques para construir un mundo mejor! 🌍",
        ur: "☀️ **شکلیں ہماری زمین بچانے میں مدد کرتی ہیں!** کیا تم جانتے ہو کہ سولر پینل — وہ مشینیں جو سورج کی روشنی سے بجلی بناتی ہیں — **مستطیل** شکل کے ہوتے ہیں؟ کمیونٹی گارڈن پڑوسیوں کے لیے کھانا اگانے کے لیے **مربع** استعمال کرتے ہیں۔ **تکون** شکل کی چھتیں بارش کا پانی جمع کرتی ہیں تاکہ ہم اسے ضائع نہ کریں۔ حتیٰ کہ ونڈ ٹربائن بھی **دائرے** میں گھومتی ہے!\n\nہمارے سیارے کی دیکھ بھال کے اوزاروں میں شکلیں ہر جگہ ہیں۔ جب تم شکلیں سیکھتے ہو، تم ایک بہتر دنیا کی بنیاد سیکھ رہے ہو! 🌍",
      },
      exercises: [
        {
          id: "ex-2.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "☀️ A solar panel on the school roof makes clean energy. Solar panels have 4 sides and the opposite sides are equal. What shape is a solar panel?",
            es: "☀️ Un panel solar en el techo de la escuela produce energía limpia. Los paneles solares tienen 4 lados y los lados opuestos son iguales. ¿Qué forma tiene un panel solar?",
            ur: "☀️ اسکول کی چھت پر ایک سولر پینل صاف توانائی بناتا ہے۔ سولر پینل کے 4 اطراف ہوتے ہیں اور آمنے سامنے والے اطراف برابر ہوتے ہیں۔ سولر پینل کی شکل کیا ہے؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.8A-2",
          type: "true-false",
          prompt: {
            en: "🌱 The community garden plots are shaped like squares — 4 equal sides. A circle has 0 sides.",
            es: "🌱 Los cuadros del jardín comunitario tienen forma de cuadrado — 4 lados iguales. Un círculo tiene 0 lados.",
            ur: "🌱 کمیونٹی گارڈن کے حصے مربع شکل کے ہیں — 4 برابر اطراف۔ دائرے کے 0 اطراف ہوتے ہیں۔",
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
          id: "qz-2.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌬️ Wind turbines spin to make clean electricity. The spinning part makes a circle shape. How many sides does a circle have?",
            es: "🌬️ Las turbinas de viento giran para producir electricidad limpia. La parte que gira hace una figura circular. ¿Cuántos lados tiene un círculo?",
            ur: "🌬️ ونڈ ٹربائن صاف بجلی بنانے کے لیے گھومتی ہے۔ گھومنے والا حصہ دائرہ بناتا ہے۔ دائرے کے کتنے اطراف ہوتے ہیں؟",
          },
          choices: [
            { en: "1", es: "1", ur: "1" },
            { en: "3", es: "3", ur: "3" },
            { en: "4", es: "4", ur: "4" },
            { en: "0", es: "0", ur: "0" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-2.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌧️ A rooftop shaped like a triangle collects rainwater for the garden. How many sides does a triangle have?",
            es: "🌧️ Un techo con forma de triángulo recoge agua de lluvia para el jardín. ¿Cuántos lados tiene un triángulo?",
            ur: "🌧️ تکون شکل کی چھت باغ کے لیے بارش کا پانی جمع کرتی ہے۔ تکون کے کتنے اطراف ہوتے ہیں؟",
          },
          choices: [
            { en: "2", es: "2", ur: "2" },
            { en: "3", es: "3", ur: "3" },
            { en: "4", es: "4", ur: "4" },
            { en: "5", es: "5", ur: "5" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-2.8A-3",
          type: "multiple-choice",
          prompt: {
            en: "🥫 Which shape has 4 equal sides — like a fair garden plot where every student gets the same space?",
            es: "🥫 ¿Qué figura tiene 4 lados iguales — como un cuadro de jardín justo donde cada estudiante tiene el mismo espacio?",
            ur: "🥫 کون سی شکل کے 4 برابر اطراف ہیں — جیسے منصفانہ باغ کا ٹکڑا جہاں ہر طالب علم کو برابر جگہ ملے؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
          ],
          correctIndex: 3,
        },
      ],
      story: {
        title: {
          en: "Leo's Flying Machine",
          es: "La Máquina Voladora de Leo",
          ur: "لیو کی اڑن مشین",
        },
        pages: [
          {
            emoji: "📓",
            text: {
              en: "Young Leo sat in his workshop in Florence, sketching in his notebook. \"Today,\" he said, \"I will build a flying machine!\"",
              es: "El joven Leo estaba sentado en su taller en Florencia, dibujando en su cuaderno. \"Hoy,\" dijo, \"¡voy a construir una máquina voladora!\"",
              ur: "نوجوان لیو فلورنس میں اپنی ورکشاپ میں بیٹھا اپنی کاپی میں خاکہ بنا رہا تھا۔ \"آج،\" اس نے کہا، \"میں ایک اڑن مشین بناؤں گا!\"",
            },
          },
          {
            emoji: "🔺",
            text: {
              en: "First, Leo needed wings — wide and strong, with 3 straight sides that could cut through the wind. \"A triangle!\" he said, and sketched two big ones.",
              es: "Primero, Leo necesitaba alas — anchas y fuertes, con 3 lados rectos que pudieran cortar el viento. \"¡Un triángulo!\" dijo, y dibujó dos grandes.",
              ur: "پہلے، لیو کو پر چاہیے تھے — چوڑے اور مضبوط، 3 سیدھے اطراف کے ساتھ جو ہوا کو کاٹ سکیں۔ \"تکون!\" اس نے کہا، اور دو بڑی تکونیں بنائیں۔",
            },
          },
          {
            emoji: "🟦",
            text: {
              en: "Next, the machine needed a body to hold everything together — 4 sides, with opposite sides equal, so it would stay balanced. \"A rectangle!\" said Leo.",
              es: "Después, la máquina necesitaba un cuerpo para sostener todo junto — 4 lados, con los lados opuestos iguales, para que se mantuviera equilibrada. \"¡Un rectángulo!\" dijo Leo.",
              ur: "پھر، مشین کو سب کچھ جوڑے رکھنے کے لیے ایک باڈی چاہیے تھی — 4 اطراف، جس کے آمنے سامنے والے اطراف برابر ہوں، تاکہ توازن رہے۔ \"مستطیل!\" لیو نے کہا۔",
            },
          },
          {
            emoji: "⭕",
            text: {
              en: "Leo tried to roll the machine out of the workshop, but it would not move. \"I need wheels — round, with no corners, so they can spin.\" He drew 2 circles.",
              es: "Leo trató de rodar la máquina fuera del taller, pero no se movía. \"Necesito ruedas — redondas, sin esquinas, para que puedan girar.\" Dibujó 2 círculos.",
              ur: "لیو نے مشین کو ورکشاپ سے باہر نکالنے کی کوشش کی، مگر وہ حرکت نہ کر سکی۔ \"مجھے پہیے چاہئیں — گول، بغیر کونوں کے، تاکہ وہ گھوم سکیں۔\" اس نے 2 دائرے بنائے۔",
            },
          },
          {
            emoji: "🟥",
            text: {
              en: "Last, Leo wanted a small flag on top, fair and even on every side. \"4 equal sides... a square!\" He painted it bright red.",
              es: "Por último, Leo quería una pequeña bandera arriba, justa e igual en cada lado. \"4 lados iguales... ¡un cuadrado!\" La pintó de rojo brillante.",
              ur: "آخر میں، لیو چاہتا تھا کہ اوپر ایک چھوٹا جھنڈا ہو، جو ہر طرف سے برابر اور منصفانہ ہو۔ \"4 برابر اطراف... مربع!\" اس نے اسے چمکدار سرخ رنگ دیا۔",
            },
          },
          {
            emoji: "🔧",
            text: {
              en: "Leo put the pieces together: triangle wings, a rectangle body, circle wheels, and a square flag. Every shape had its own job to do.",
              es: "Leo unió las piezas: alas triangulares, un cuerpo rectangular, ruedas circulares y una bandera cuadrada. Cada figura tenía su propio trabajo.",
              ur: "لیو نے سب حصے جوڑے: تکون پر، مستطیل باڈی، دائرے کے پہیے، اور مربع جھنڈا۔ ہر شکل کا اپنا کام تھا۔",
            },
          },
          {
            emoji: "🪽",
            text: {
              en: "He rolled the machine up to the rooftop on its circle wheels, and the wind caught the triangle wings. The flying machine lifted into the sky!",
              es: "Subió la máquina al techo sobre sus ruedas circulares, y el viento atrapó las alas triangulares. ¡La máquina voladora se elevó hacia el cielo!",
              ur: "اس نے مشین کو گول پہیوں پر چھت تک لے گیا، اور ہوا نے تکون پروں کو پکڑ لیا۔ اڑن مشین آسمان کی طرف اڑ گئی!",
            },
          },
          {
            emoji: "✨",
            text: {
              en: "\"Every shape has a job!\" Leo laughed, watching it soar. \"Round things roll, triangles cut the wind, and equal sides keep things fair and strong.\"",
              es: "\"¡Cada figura tiene un trabajo!\" rio Leo, mirándola volar. \"Las cosas redondas ruedan, los triángulos cortan el viento, y los lados iguales mantienen las cosas justas y fuertes.\"",
              ur: "\"ہر شکل کا ایک کام ہوتا ہے!\" لیو نے ہنستے ہوئے کہا، اسے اڑتا دیکھ کر۔ \"گول چیزیں لڑھکتی ہیں، تکونیں ہوا کاٹتی ہیں، اور برابر اطراف چیزوں کو منصفانہ اور مضبوط رکھتے ہیں۔\"",
            },
          },
        ],
      },
    },
  ],
};

export default grade2;
