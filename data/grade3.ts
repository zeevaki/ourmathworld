import { Grade } from "./types";

const grade3: Grade = {
  grade: 3,
  label: "Grade 3",
  emoji: "🌊",
  color: "#0EA5E9",
  units: [

    // ─── Unit 1: Multiplication ───────────────────────────────────────────────
    {
      teks: "3.4F",
      cambridge: "Stage 3 · 3Nc3",
      emoji: "🌱",
      title: {
        en: "Multiplication",
        es: "Multiplicación",
        ur: "ضرب",
      },
      vocabulary: [
        {
          id: "multiply",
          emoji: "✖️",
          word: { en: "multiply", es: "multiplicar", ur: "ضرب کرنا" },
          definition: {
            en: "add equal groups together — a faster way to add the same number over and over",
            es: "sumar grupos iguales — una forma más rápida de sumar el mismo número varias veces",
            ur: "برابر گروپ جمع کرنا — ایک ہی نمبر بار بار جمع کرنے کا تیز طریقہ",
          },
        },
        {
          id: "factor",
          emoji: "🔢",
          word: { en: "factor", es: "factor", ur: "ضرب کا عامل" },
          definition: {
            en: "a number you multiply — in 4 × 3, both 4 and 3 are factors",
            es: "un número que multiplicas — en 4 × 3, tanto 4 como 3 son factores",
            ur: "وہ نمبر جسے ضرب کریں — 4 × 3 میں، 4 اور 3 دونوں عامل ہیں",
          },
        },
        {
          id: "product",
          emoji: "🏆",
          word: { en: "product", es: "producto", ur: "حاصل ضرب" },
          definition: {
            en: "the answer when you multiply two numbers — 4 × 3 = 12, so 12 is the product",
            es: "la respuesta cuando multiplicas dos números — 4 × 3 = 12, entonces 12 es el producto",
            ur: "دو نمبر ضرب کرنے کا جواب — 4 × 3 = 12، تو 12 حاصل ضرب ہے",
          },
        },
        {
          id: "array",
          emoji: "🔲",
          word: { en: "array", es: "arreglo", ur: "صف" },
          definition: {
            en: "objects arranged in equal rows and columns — like a grid of plants in a garden",
            es: "objetos en filas y columnas iguales — como una cuadrícula de plantas en un jardín",
            ur: "برابر قطاروں اور کالموں میں رکھی چیزیں — جیسے باغ میں پودوں کی جالی",
          },
        },
        {
          id: "equal-groups",
          emoji: "👐",
          word: { en: "equal groups", es: "grupos iguales", ur: "برابر گروپ" },
          definition: {
            en: "groups that each have the same number of objects",
            es: "grupos que tienen la misma cantidad de objetos",
            ur: "گروپ جن میں ہر ایک میں چیزوں کی تعداد برابر ہو",
          },
        },
      ],
      lesson: {
        en: "🌱 **Multiplication helps us plan for our community!**\n\nWhen we pack food boxes for families, we put the **same number** of cans in every box. Instead of adding over and over, we **multiply**!\n\n🧡 Example: We pack 6 boxes. Each box gets 8 cans of food.\n6 × 8 = **48 cans** — that's enough to feed 6 families!\n\nThink of it as an **array** — 6 rows of boxes with 8 cans each:\n🥫🥫🥫🥫🥫🥫🥫🥫\n🥫🥫🥫🥫🥫🥫🥫🥫\n🥫🥫🥫🥫🥫🥫🥫🥫\n🥫🥫🥫🥫🥫🥫🥫🥫\n🥫🥫🥫🥫🥫🥫🥫🥫\n🥫🥫🥫🥫🥫🥫🥫🥫\n\nCount them — 6 × 8 = 48! Multiplication saves time so you can help more people faster. 🌍",
        es: "🌱 **¡La multiplicación nos ayuda a planear para nuestra comunidad!**\n\nCuando empacamos cajas de comida para familias, ponemos el **mismo número** de latas en cada caja. ¡En lugar de sumar una y otra vez, **multiplicamos**!\n\n🧡 Ejemplo: Empacamos 6 cajas. Cada caja recibe 8 latas de comida.\n6 × 8 = **48 latas** — ¡suficiente para alimentar a 6 familias!\n\nPiénsalo como un **arreglo** — 6 filas de cajas con 8 latas cada una.\n\n¡Cuéntalas — 6 × 8 = 48! La multiplicación ahorra tiempo para que puedas ayudar a más personas más rápido. 🌍",
        ur: "🌱 **ضرب ہمیں کمیونٹی کے لیے منصوبہ بنانے میں مدد کرتی ہے!**\n\nجب ہم خاندانوں کے لیے کھانے کے بکسے بھرتے ہیں تو ہر بکسے میں **ایک جتنے** ڈبے رکھتے ہیں۔ بار بار جمع کرنے کی بجائے **ضرب** کرتے ہیں!\n\n🧡 مثال: ہم 6 بکسے بھرتے ہیں۔ ہر بکسے میں 8 ڈبے۔\n6 × 8 = **48 ڈبے** — 6 خاندانوں کے لیے کافی!\n\nاسے **صف** کی طرح سوچو — 8 ڈبوں والی 6 قطاریں۔\n\nگنو — 6 × 8 = 48! ضرب وقت بچاتی ہے تاکہ تم زیادہ لوگوں کی تیزی سے مدد کر سکو۔ 🌍",
      },
      exercises: [
        {
          id: "ex-3.4F-1",
          type: "multiple-choice",
          prompt: {
            en: "🌳 Students planted trees in the school yard in equal rows. There are 5 rows with 7 trees in each row. How many trees were planted in all?",
            es: "🌳 Los estudiantes plantaron árboles en el patio de la escuela en filas iguales. Hay 5 filas con 7 árboles en cada fila. ¿Cuántos árboles se plantaron en total?",
            ur: "🌳 طلبا نے اسکول کے صحن میں برابر قطاروں میں درخت لگائے۔ 5 قطاریں ہیں اور ہر قطار میں 7 درخت ہیں۔ کل کتنے درخت لگائے گئے؟",
          },
          choices: [
            { en: "30", es: "30", ur: "30" },
            { en: "35", es: "35", ur: "35" },
            { en: "28", es: "28", ur: "28" },
            { en: "40", es: "40", ur: "40" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-3.4F-2",
          type: "multiple-choice",
          prompt: {
            en: "🥫 Volunteers packed food bags for a community drive. They made 9 bags and put 6 cans in each bag. What is the total number of cans?",
            es: "🥫 Los voluntarios empacaron bolsas de comida para una colecta comunitaria. Hicieron 9 bolsas y pusieron 6 latas en cada bolsa. ¿Cuál es el número total de latas?",
            ur: "🥫 رضاکاروں نے کمیونٹی مہم کے لیے کھانے کے تھیلے بھرے۔ انہوں نے 9 تھیلے بنائے اور ہر تھیلے میں 6 ڈبے رکھے۔ ڈبوں کی کل تعداد کیا ہے؟",
          },
          choices: [
            { en: "54", es: "54", ur: "54" },
            { en: "45", es: "45", ur: "45" },
            { en: "63", es: "63", ur: "63" },
            { en: "48", es: "48", ur: "48" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-3.4F-3",
          type: "true-false",
          prompt: {
            en: "♻️ A recycling team fills 7 bins. Each bin holds 8 bottles. The total number of bottles is 7 × 8 = 56.",
            es: "♻️ Un equipo de reciclaje llena 7 contenedores. Cada contenedor tiene 8 botellas. El número total de botellas es 7 × 8 = 56.",
            ur: "♻️ ری سائیکلنگ ٹیم 7 بن بھرتی ہے۔ ہر بن میں 8 بوتلیں ہیں۔ بوتلوں کی کل تعداد 7 × 8 = 56 ہے۔",
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
          id: "qz-3.4F-1",
          type: "multiple-choice",
          prompt: {
            en: "☀️ A school installs solar panels on the roof. There are 4 rows of panels with 9 panels in each row. How many solar panels are there in all?",
            es: "☀️ Una escuela instala paneles solares en el techo. Hay 4 filas de paneles con 9 paneles en cada fila. ¿Cuántos paneles solares hay en total?",
            ur: "☀️ ایک اسکول چھت پر سولر پینل لگاتا ہے۔ 4 قطاریں ہیں اور ہر قطار میں 9 پینل ہیں۔ کل کتنے سولر پینل ہیں؟",
          },
          choices: [
            { en: "32", es: "32", ur: "32" },
            { en: "45", es: "45", ur: "45" },
            { en: "36", es: "36", ur: "36" },
            { en: "27", es: "27", ur: "27" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-3.4F-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A community garden has 8 plots. Each plot grows 6 types of vegetables for the food bank. How many types of vegetables are grown in all?",
            es: "🌱 Un jardín comunitario tiene 8 parcelas. Cada parcela cultiva 6 tipos de verduras para el banco de alimentos. ¿Cuántos tipos de verduras se cultivan en total?",
            ur: "🌱 ایک کمیونٹی گارڈن میں 8 پلاٹ ہیں۔ ہر پلاٹ میں فوڈ بینک کے لیے 6 قسم کی سبزیاں اگتی ہیں۔ کل کتنی قسم کی سبزیاں اگائی جاتی ہیں؟",
          },
          choices: [
            { en: "42", es: "42", ur: "42" },
            { en: "56", es: "56", ur: "56" },
            { en: "54", es: "54", ur: "54" },
            { en: "48", es: "48", ur: "48" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-3.4F-3",
          type: "multiple-choice",
          prompt: {
            en: "📚 The school library ordered books for 10 classrooms. Each classroom gets 7 new books. What is the product of 10 × 7?",
            es: "📚 La biblioteca escolar pidió libros para 10 salones. Cada salón recibe 7 libros nuevos. ¿Cuál es el producto de 10 × 7?",
            ur: "📚 اسکول کی لائبریری نے 10 کلاسوں کے لیے کتابیں منگوائیں۔ ہر کلاس کو 7 نئی کتابیں ملتی ہیں۔ 10 × 7 کا حاصل ضرب کیا ہے؟",
          },
          choices: [
            { en: "63", es: "63", ur: "63" },
            { en: "70", es: "70", ur: "70" },
            { en: "77", es: "77", ur: "77" },
            { en: "60", es: "60", ur: "60" },
          ],
          correctIndex: 1,
        },
      ],
    },

    // ─── Unit 2: Division ─────────────────────────────────────────────────────
    {
      teks: "3.4K",
      cambridge: "Stage 3 · 3Nc4",
      emoji: "♻️",
      title: {
        en: "Division",
        es: "División",
        ur: "تقسیم",
      },
      vocabulary: [
        {
          id: "divide",
          emoji: "➗",
          word: { en: "divide", es: "dividir", ur: "تقسیم کرنا" },
          definition: {
            en: "split a number into equal groups",
            es: "separar un número en grupos iguales",
            ur: "نمبر کو برابر گروپوں میں بانٹنا",
          },
        },
        {
          id: "dividend",
          emoji: "🔢",
          word: { en: "dividend", es: "dividendo", ur: "مقسوم" },
          definition: {
            en: "the number being divided — the total you start with",
            es: "el número que se divide — el total con el que empiezas",
            ur: "وہ نمبر جسے تقسیم کیا جائے — جس کل سے شروع کرتے ہیں",
          },
        },
        {
          id: "divisor",
          emoji: "➗",
          word: { en: "divisor", es: "divisor", ur: "مقسوم علیہ" },
          definition: {
            en: "the number you divide by — how many equal groups you want",
            es: "el número entre el que divides — cuántos grupos iguales quieres",
            ur: "وہ نمبر جس سے تقسیم کریں — کتنے برابر گروپ چاہیے",
          },
        },
        {
          id: "quotient",
          emoji: "🏆",
          word: { en: "quotient", es: "cociente", ur: "حاصل تقسیم" },
          definition: {
            en: "the answer when you divide — how many in each group",
            es: "la respuesta cuando divides — cuántos hay en cada grupo",
            ur: "تقسیم کا جواب — ہر گروپ میں کتنے",
          },
        },
        {
          id: "fair-share",
          emoji: "⚖️",
          word: { en: "fair share", es: "parte justa", ur: "منصفانہ حصہ" },
          definition: {
            en: "each group gets exactly the same amount — nobody gets more or less",
            es: "cada grupo recibe exactamente la misma cantidad — nadie recibe más ni menos",
            ur: "ہر گروپ کو بالکل ایک جتنا ملتا ہے — کسی کو زیادہ یا کم نہیں",
          },
        },
      ],
      lesson: {
        en: "♻️ **Division makes sharing fair!**\n\nWhen we have supplies to share with our community, division makes sure every family or classroom gets an equal amount.\n\n🧡 Example: The food bank has 48 cans to share equally among 6 families.\n48 ÷ 6 = **8 cans per family** — that's a fair share!\n\n💡 Division and multiplication are partners:\nIf 6 × 8 = 48, then 48 ÷ 6 = 8\n\nKnowing your multiplication facts makes division easy. And when we share equally, we make sure **nobody is left out** — that's math in action for social justice! ⚖️",
        es: "♻️ **¡La división hace que compartir sea justo!**\n\nCuando tenemos suministros para compartir con nuestra comunidad, la división asegura que cada familia o salón reciba la misma cantidad.\n\n🧡 Ejemplo: El banco de alimentos tiene 48 latas para repartir igualmente entre 6 familias.\n48 ÷ 6 = **8 latas por familia** — ¡eso es una parte justa!\n\n💡 La división y la multiplicación son compañeras:\nSi 6 × 8 = 48, entonces 48 ÷ 6 = 8\n\nConocer tus tablas de multiplicar hace que la división sea fácil. ¡Y cuando compartimos igualmente, nos aseguramos de que **nadie quede fuera** — eso es la justicia social en acción! ⚖️",
        ur: "♻️ **تقسیم بانٹنے کو منصفانہ بناتی ہے!**\n\nجب ہمارے پاس کمیونٹی کے ساتھ بانٹنے کے لیے سامان ہو تو تقسیم یقینی بناتی ہے کہ ہر خاندان یا کلاس کو برابر حصہ ملے۔\n\n🧡 مثال: فوڈ بینک کے پاس 6 خاندانوں میں برابر بانٹنے کے لیے 48 ڈبے ہیں۔\n48 ÷ 6 = **فی خاندان 8 ڈبے** — یہ منصفانہ حصہ ہے!\n\n💡 تقسیم اور ضرب ساتھی ہیں:\nاگر 6 × 8 = 48 ہے تو 48 ÷ 6 = 8\n\nضرب کے جدول یاد ہوں تو تقسیم آسان ہو جاتی ہے۔ اور جب ہم برابر بانٹتے ہیں تو یقینی بناتے ہیں کہ **کوئی باہر نہ رہے** — یہ سماجی انصاف میں ریاضی کا عمل ہے! ⚖️",
      },
      exercises: [
        {
          id: "ex-3.4K-1",
          type: "multiple-choice",
          prompt: {
            en: "📚 The school received 63 new books to share equally among 7 classrooms. How many books does each classroom get?",
            es: "📚 La escuela recibió 63 libros nuevos para repartir igualmente entre 7 salones. ¿Cuántos libros recibe cada salón?",
            ur: "📚 اسکول کو 7 کلاسوں میں برابر بانٹنے کے لیے 63 نئی کتابیں ملیں۔ ہر کلاس کو کتنی کتابیں ملتی ہیں؟",
          },
          choices: [
            { en: "7", es: "7", ur: "7" },
            { en: "8", es: "8", ur: "8" },
            { en: "9", es: "9", ur: "9" },
            { en: "6", es: "6", ur: "6" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-3.4K-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A community garden has 40 seed packets to share equally among 5 planting teams. How many packets does each team get?",
            es: "🌱 Un jardín comunitario tiene 40 sobres de semillas para repartir igualmente entre 5 equipos de siembra. ¿Cuántos sobres recibe cada equipo?",
            ur: "🌱 ایک کمیونٹی گارڈن کے پاس 5 بوائی ٹیموں میں برابر بانٹنے کے لیے 40 بیجوں کے پیکٹ ہیں۔ ہر ٹیم کو کتنے پیکٹ ملتے ہیں؟",
          },
          choices: [
            { en: "6", es: "6", ur: "6" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
            { en: "8", es: "8", ur: "8" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-3.4K-3",
          type: "true-false",
          prompt: {
            en: "🤝 If 4 × 9 = 36, then 36 ÷ 4 = 9. You can use multiplication facts to solve division problems.",
            es: "🤝 Si 4 × 9 = 36, entonces 36 ÷ 4 = 9. Puedes usar las tablas de multiplicar para resolver problemas de división.",
            ur: "🤝 اگر 4 × 9 = 36 ہے تو 36 ÷ 4 = 9۔ تم ضرب کے جدول سے تقسیم کے مسائل حل کر سکتے ہو۔",
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
          id: "qz-3.4K-1",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Students collected 72 bottles for recycling. They put them into bags of 8 bottles each. How many bags did they fill?",
            es: "♻️ Los estudiantes juntaron 72 botellas para reciclar. Las pusieron en bolsas de 8 botellas cada una. ¿Cuántas bolsas llenaron?",
            ur: "♻️ طلبا نے ری سائیکلنگ کے لیے 72 بوتلیں جمع کیں۔ انہوں نے 8-8 بوتلوں کے تھیلوں میں ڈالیں۔ انہوں نے کتنے تھیلے بھرے؟",
          },
          choices: [
            { en: "8", es: "8", ur: "8" },
            { en: "7", es: "7", ur: "7" },
            { en: "10", es: "10", ur: "10" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-3.4K-2",
          type: "multiple-choice",
          prompt: {
            en: "🥫 A food bank has 56 cans of soup to pack equally into boxes. Each box holds 7 cans. How many boxes can they fill?",
            es: "🥫 Un banco de alimentos tiene 56 latas de sopa para empacar igualmente en cajas. Cada caja tiene 7 latas. ¿Cuántas cajas pueden llenar?",
            ur: "🥫 ایک فوڈ بینک کے پاس 56 سوپ کے ڈبے برابر بکسوں میں پیک کرنے کے لیے ہیں۔ ہر بکسے میں 7 ڈبے آتے ہیں۔ وہ کتنے بکسے بھر سکتے ہیں؟",
          },
          choices: [
            { en: "6", es: "6", ur: "6" },
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
            { en: "8", es: "8", ur: "8" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-3.4K-3",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A class raised $45 for a climate action fund. They want to donate equal amounts to 9 different community projects. How much does each project get?",
            es: "🌍 Una clase recaudó $45 para un fondo de acción climática. Quieren donar cantidades iguales a 9 proyectos comunitarios diferentes. ¿Cuánto recibe cada proyecto?",
            ur: "🌍 ایک کلاس نے موسمیاتی ایکشن فنڈ کے لیے $45 اکٹھے کیے۔ وہ 9 مختلف کمیونٹی پروجیکٹس کو برابر رقم دینا چاہتے ہیں۔ ہر پروجیکٹ کو کتنا ملتا ہے؟",
          },
          choices: [
            { en: "$4", es: "$4", ur: "$4" },
            { en: "$6", es: "$6", ur: "$6" },
            { en: "$5", es: "$5", ur: "$5" },
            { en: "$7", es: "$7", ur: "$7" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 3: Fractions ────────────────────────────────────────────────────
    {
      teks: "3.3A",
      cambridge: "Stage 3 · 3Nf1",
      emoji: "🍕",
      title: {
        en: "Fractions",
        es: "Fracciones",
        ur: "کسر",
      },
      vocabulary: [
        {
          id: "fraction",
          emoji: "½",
          word: { en: "fraction", es: "fracción", ur: "کسر" },
          definition: {
            en: "a number that represents part of a whole — like ½ or ¾",
            es: "un número que representa una parte de un todo — como ½ o ¾",
            ur: "وہ نمبر جو کسی پوری چیز کا حصہ ظاہر کرے — جیسے ½ یا ¾",
          },
        },
        {
          id: "numerator",
          emoji: "⬆️",
          word: { en: "numerator", es: "numerador", ur: "شمارہ" },
          definition: {
            en: "the top number — how many parts you have",
            es: "el número de arriba — cuántas partes tienes",
            ur: "اوپر کا نمبر — تمہارے پاس کتنے حصے ہیں",
          },
        },
        {
          id: "denominator",
          emoji: "⬇️",
          word: { en: "denominator", es: "denominador", ur: "مخرج" },
          definition: {
            en: "the bottom number — how many equal parts the whole is divided into",
            es: "el número de abajo — en cuántas partes iguales está dividido el todo",
            ur: "نیچے کا نمبر — پوری چیز کتنے برابر حصوں میں بٹی ہے",
          },
        },
        {
          id: "whole",
          emoji: "⭕",
          word: { en: "whole", es: "entero", ur: "پوری چیز" },
          definition: {
            en: "the complete amount before it is divided into parts",
            es: "la cantidad completa antes de dividirla en partes",
            ur: "حصوں میں بانٹنے سے پہلے کی مکمل مقدار",
          },
        },
        {
          id: "equivalent",
          emoji: "🟰",
          word: { en: "equivalent fractions", es: "fracciones equivalentes", ur: "مساوی کسریں" },
          definition: {
            en: "different fractions that name the same amount — like ½ and 2/4",
            es: "fracciones diferentes que representan la misma cantidad — como ½ y 2/4",
            ur: "مختلف کسریں جو ایک ہی مقدار بتائیں — جیسے ½ اور 2/4",
          },
        },
      ],
      lesson: {
        en: "🍕 **Fractions help us share fairly!**\n\nA fraction shows part of a whole. When we share food, land, or supplies equally, we use fractions.\n\nIn the fraction **3/4**:\n- The **denominator (4)** = the whole is cut into 4 equal parts\n- The **numerator (3)** = we have 3 of those parts\n\n🧡 Example: A community garden is split into 6 equal plots. 4 families are already growing vegetables. What fraction of the garden is being used?\n→ **4/6** of the garden is being used — and 2/6 is still available for more families!\n\n🌍 Fractions also help us compare:\n- **1/2 > 1/4** (half of something is more than a quarter)\n- When the numerator is the same, the bigger denominator means a **smaller** piece\n\nFair sharing uses fractions every day! ⚖️",
        es: "🍕 **¡Las fracciones nos ayudan a compartir de forma justa!**\n\nUna fracción muestra una parte de un todo. Cuando compartimos comida, tierra o suministros igualmente, usamos fracciones.\n\nEn la fracción **3/4**:\n- El **denominador (4)** = el todo está dividido en 4 partes iguales\n- El **numerador (3)** = tenemos 3 de esas partes\n\n🧡 Ejemplo: Un jardín comunitario está dividido en 6 parcelas iguales. 4 familias ya están cultivando verduras. ¿Qué fracción del jardín está siendo usada?\n→ Se está usando **4/6** del jardín — ¡y 2/6 todavía está disponible para más familias!\n\n🌍 Las fracciones también nos ayudan a comparar:\n- **1/2 > 1/4** (la mitad de algo es más que un cuarto)\n- Cuando el numerador es el mismo, el denominador mayor significa un pedazo **más pequeño**\n\n¡El reparto justo usa fracciones todos los días! ⚖️",
        ur: "🍕 **کسریں منصفانہ بانٹنے میں مدد کرتی ہیں!**\n\nکسر کسی پوری چیز کا حصہ دکھاتی ہے۔ جب ہم کھانا، زمین یا سامان برابر بانٹتے ہیں تو کسریں استعمال کرتے ہیں۔\n\nکسر **3/4** میں:\n- **مخرج (4)** = پوری چیز 4 برابر حصوں میں بٹی ہے\n- **شمارہ (3)** = ہمارے پاس ان میں سے 3 حصے ہیں\n\n🧡 مثال: ایک کمیونٹی گارڈن 6 برابر پلاٹوں میں بٹا ہے۔ 4 خاندان پہلے سے سبزیاں اگا رہے ہیں۔ باغ کا کون سا حصہ استعمال ہو رہا ہے؟\n→ باغ کا **4/6** استعمال ہو رہا ہے — اور 2/6 مزید خاندانوں کے لیے ابھی بھی دستیاب ہے!\n\n🌍 کسریں موازنے میں بھی مدد کرتی ہیں:\n- **1/2 > 1/4** (کسی چیز کا آدھا، چوتھائی سے زیادہ ہے)\n- جب شمارہ ایک جیسا ہو تو بڑا مخرج **چھوٹے** ٹکڑے کا مطلب ہے\n\nمنصفانہ بانٹنا ہر روز کسریں استعمال کرتا ہے! ⚖️",
      },
      exercises: [
        {
          id: "ex-3.3A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A school garden is divided into 8 equal sections. Students are growing vegetables in 3 of the sections. What fraction of the garden has vegetables?",
            es: "🌱 Un jardín escolar está dividido en 8 secciones iguales. Los estudiantes están cultivando verduras en 3 de las secciones. ¿Qué fracción del jardín tiene verduras?",
            ur: "🌱 ایک اسکول گارڈن 8 برابر حصوں میں بٹا ہے۔ طلبا 3 حصوں میں سبزیاں اگا رہے ہیں۔ باغ کے کس حصے میں سبزیاں ہیں؟",
          },
          choices: [
            { en: "8/3", es: "8/3", ur: "8/3" },
            { en: "5/8", es: "5/8", ur: "5/8" },
            { en: "3/5", es: "3/5", ur: "3/5" },
            { en: "3/8", es: "3/8", ur: "3/8" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-3.3A-2",
          type: "multiple-choice",
          prompt: {
            en: "🍞 A loaf of bread is cut into 6 equal slices for a community meal. A family takes 2 slices. Which fraction is greater — the part taken or the part remaining?",
            es: "🍞 Una hogaza de pan se corta en 6 rebanadas iguales para una comida comunitaria. Una familia toma 2 rebanadas. ¿Qué fracción es mayor — la parte tomada o la parte que queda?",
            ur: "🍞 کمیونٹی کھانے کے لیے روٹی کو 6 برابر ٹکڑوں میں کاٹا گیا۔ ایک خاندان 2 ٹکڑے لیتا ہے۔ کون سا حصہ بڑا ہے — لیا گیا حصہ یا باقی حصہ؟",
          },
          choices: [
            { en: "2/6 — part taken", es: "2/6 — la parte tomada", ur: "2/6 — لیا گیا حصہ" },
            { en: "4/6 — part remaining", es: "4/6 — la parte que queda", ur: "4/6 — باقی حصہ" },
            { en: "They are equal", es: "Son iguales", ur: "وہ برابر ہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-3.3A-3",
          type: "true-false",
          prompt: {
            en: "⚖️ 1/2 and 2/4 are equivalent fractions — they represent the same amount, just described differently.",
            es: "⚖️ 1/2 y 2/4 son fracciones equivalentes — representan la misma cantidad, solo descritas de manera diferente.",
            ur: "⚖️ 1/2 اور 2/4 مساوی کسریں ہیں — وہ ایک ہی مقدار ظاہر کرتی ہیں، بس الگ طریقے سے بیان کی گئی ہیں۔",
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
          id: "qz-3.3A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A class is running a recycling drive for 4 weeks. After 1 week, what fraction of the drive is complete?",
            es: "🌍 Una clase organiza una campaña de reciclaje durante 4 semanas. Después de 1 semana, ¿qué fracción de la campaña está completa?",
            ur: "🌍 ایک کلاس 4 ہفتوں کی ری سائیکلنگ مہم چلا رہی ہے۔ 1 ہفتے کے بعد مہم کا کون سا حصہ مکمل ہو گیا؟",
          },
          choices: [
            { en: "1/3", es: "1/3", ur: "1/3" },
            { en: "1/2", es: "1/2", ur: "1/2" },
            { en: "1/4", es: "1/4", ur: "1/4" },
            { en: "4/1", es: "4/1", ur: "4/1" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-3.3A-2",
          type: "multiple-choice",
          prompt: {
            en: "🥫 A food box has 8 slots. 5 slots are filled with vegetables and the rest are empty. Which fraction shows the filled slots?",
            es: "🥫 Una caja de comida tiene 8 espacios. 5 espacios están llenos con verduras y el resto están vacíos. ¿Qué fracción muestra los espacios llenos?",
            ur: "🥫 کھانے کے بکسے میں 8 جگہیں ہیں۔ 5 جگہوں میں سبزیاں بھری ہیں اور باقی خالی ہیں۔ کون سی کسر بھری جگہیں ظاہر کرتی ہے؟",
          },
          choices: [
            { en: "3/8", es: "3/8", ur: "3/8" },
            { en: "5/3", es: "5/3", ur: "5/3" },
            { en: "8/5", es: "8/5", ur: "8/5" },
            { en: "5/8", es: "5/8", ur: "5/8" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-3.3A-3",
          type: "multiple-choice",
          prompt: {
            en: "⚖️ Two students each get a fair share of the garden. One has 1/2 of the garden and the other has 2/4. Who has more garden space?",
            es: "⚖️ Dos estudiantes reciben una parte justa del jardín. Uno tiene 1/2 del jardín y el otro tiene 2/4. ¿Quién tiene más espacio en el jardín?",
            ur: "⚖️ دو طالب علموں کو باغ کا منصفانہ حصہ ملتا ہے۔ ایک کے پاس باغ کا 1/2 ہے اور دوسرے کے پاس 2/4۔ کس کے پاس زیادہ جگہ ہے؟",
          },
          choices: [
            { en: "The student with 1/2", es: "El estudiante con 1/2", ur: "1/2 والا طالب علم" },
            { en: "The student with 2/4", es: "El estudiante con 2/4", ur: "2/4 والا طالب علم" },
            { en: "They have the same — 1/2 = 2/4", es: "Tienen lo mismo — 1/2 = 2/4", ur: "دونوں برابر ہیں — 1/2 = 2/4" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 4: Area of Rectangles ───────────────────────────────────────────
    {
      teks: "3.6C",
      cambridge: "Stage 3 · 3Ml1",
      emoji: "🏗️",
      title: {
        en: "Area of Rectangles",
        es: "Área de Rectángulos",
        ur: "مستطیل کا رقبہ",
      },
      vocabulary: [
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
          id: "square-unit",
          emoji: "🔲",
          word: { en: "square unit", es: "unidad cuadrada", ur: "مربع اکائی" },
          definition: {
            en: "a square with sides of 1 unit — used to measure area",
            es: "un cuadrado con lados de 1 unidad — se usa para medir el área",
            ur: "1 اکائی کے اطراف والا مربع — رقبہ ناپنے کے لیے استعمال ہوتا ہے",
          },
        },
        {
          id: "length",
          emoji: "↔️",
          word: { en: "length", es: "longitud", ur: "لمبائی" },
          definition: {
            en: "how long a shape is from one end to the other",
            es: "qué tan largo es una figura de un extremo al otro",
            ur: "شکل ایک سرے سے دوسرے سرے تک کتنی لمبی ہے",
          },
        },
        {
          id: "width",
          emoji: "↕️",
          word: { en: "width", es: "ancho", ur: "چوڑائی" },
          definition: {
            en: "how wide a shape is from side to side",
            es: "qué tan ancha es una figura de lado a lado",
            ur: "شکل ایک طرف سے دوسری طرف کتنی چوڑی ہے",
          },
        },
        {
          id: "formula",
          emoji: "🔢",
          word: { en: "formula", es: "fórmula", ur: "فارمولہ" },
          definition: {
            en: "a math rule — Area of a rectangle = length × width",
            es: "una regla matemática — Área de un rectángulo = longitud × ancho",
            ur: "ریاضی کا اصول — مستطیل کا رقبہ = لمبائی × چوڑائی",
          },
        },
      ],
      lesson: {
        en: "🏗️ **Area helps us build better communities!**\n\nWhen people plan gardens, solar panel rooftops, or classroom spaces, they need to know the **area** — how much surface is available.\n\nTo find the area of a rectangle:\n**Area = length × width**\n\n🧡 Example: A community garden plot is 6 meters long and 4 meters wide.\nArea = 6 × 4 = **24 square meters**\n\nThat means 24 square meters of space to grow food for the neighborhood!\n\n☀️ Another example: A solar panel is 3 feet long and 5 feet wide.\nArea = 3 × 5 = **15 square feet** of clean energy!\n\nThe bigger the area, the more food we can grow — or the more clean energy we can make. Area is math that takes care of our planet! 🌍",
        es: "🏗️ **¡El área nos ayuda a construir mejores comunidades!**\n\nCuando las personas planean jardines, techos con paneles solares o espacios de salones, necesitan saber el **área** — cuánta superficie hay disponible.\n\nPara encontrar el área de un rectángulo:\n**Área = longitud × ancho**\n\n🧡 Ejemplo: Una parcela del jardín comunitario mide 6 metros de largo y 4 metros de ancho.\nÁrea = 6 × 4 = **24 metros cuadrados**\n\n¡Eso significa 24 metros cuadrados de espacio para cultivar comida para el vecindario!\n\n☀️ Otro ejemplo: Un panel solar mide 3 pies de largo y 5 pies de ancho.\nÁrea = 3 × 5 = **15 pies cuadrados** de energía limpia!\n\n¡Cuanto mayor sea el área, más comida podemos cultivar — o más energía limpia podemos generar. ¡El área es matemáticas que cuidan nuestro planeta! 🌍",
        ur: "🏗️ **رقبہ ہمیں بہتر کمیونٹیز بنانے میں مدد کرتا ہے!**\n\nجب لوگ باغات، سولر پینل کی چھتیں یا کلاس کی جگہیں بناتے ہیں تو انہیں **رقبہ** جاننا ہوتا ہے — کتنی سطح دستیاب ہے۔\n\nمستطیل کا رقبہ نکالنے کے لیے:\n**رقبہ = لمبائی × چوڑائی**\n\n🧡 مثال: ایک کمیونٹی گارڈن پلاٹ 6 میٹر لمبا اور 4 میٹر چوڑا ہے۔\nرقبہ = 6 × 4 = **24 مربع میٹر**\n\nیعنی محلے کے لیے کھانا اگانے کی 24 مربع میٹر جگہ!\n\n☀️ ایک اور مثال: ایک سولر پینل 3 فٹ لمبا اور 5 فٹ چوڑا ہے۔\nرقبہ = 3 × 5 = **15 مربع فٹ** صاف توانائی!\n\nجتنا بڑا رقبہ، اتنا زیادہ کھانا اگا سکتے ہیں — یا اتنی زیادہ صاف توانائی بنا سکتے ہیں۔ رقبہ وہ ریاضی ہے جو ہمارے سیارے کی دیکھ بھال کرتی ہے! 🌍",
      },
      exercises: [
        {
          id: "ex-3.6C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A rectangular garden bed for growing vegetables is 7 meters long and 3 meters wide. What is the area of the garden bed?",
            es: "🌱 Un huerto rectangular para cultivar verduras mide 7 metros de largo y 3 metros de ancho. ¿Cuál es el área del huerto?",
            ur: "🌱 سبزیاں اگانے کے لیے ایک مستطیل باغیچہ 7 میٹر لمبا اور 3 میٹر چوڑا ہے۔ باغیچے کا رقبہ کیا ہے؟",
          },
          choices: [
            { en: "18 square meters", es: "18 metros cuadrados", ur: "18 مربع میٹر" },
            { en: "24 square meters", es: "24 metros cuadrados", ur: "24 مربع میٹر" },
            { en: "21 square meters", es: "21 metros cuadrados", ur: "21 مربع میٹر" },
            { en: "10 square meters", es: "10 metros cuadrados", ur: "10 مربع میٹر" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-3.6C-2",
          type: "multiple-choice",
          prompt: {
            en: "☀️ A solar panel on the school roof is 9 feet long and 4 feet wide. What is its area?",
            es: "☀️ Un panel solar en el techo de la escuela mide 9 pies de largo y 4 pies de ancho. ¿Cuál es su área?",
            ur: "☀️ اسکول کی چھت پر ایک سولر پینل 9 فٹ لمبا اور 4 فٹ چوڑا ہے۔ اس کا رقبہ کیا ہے؟",
          },
          choices: [
            { en: "32 square feet", es: "32 pies cuadrados", ur: "32 مربع فٹ" },
            { en: "36 square feet", es: "36 pies cuadrados", ur: "36 مربع فٹ" },
            { en: "13 square feet", es: "13 pies cuadrados", ur: "13 مربع فٹ" },
            { en: "45 square feet", es: "45 pies cuadrados", ur: "45 مربع فٹ" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-3.6C-3",
          type: "true-false",
          prompt: {
            en: "🏫 A classroom bulletin board is 8 feet long and 3 feet wide. The area of the board is 8 × 3 = 24 square feet.",
            es: "🏫 El tablero de anuncios de un salón mide 8 pies de largo y 3 pies de ancho. El área del tablero es 8 × 3 = 24 pies cuadrados.",
            ur: "🏫 ایک کلاس کا بلیٹن بورڈ 8 فٹ لمبا اور 3 فٹ چوڑا ہے۔ بورڈ کا رقبہ 8 × 3 = 24 مربع فٹ ہے۔",
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
          id: "qz-3.6C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A community center wants to build a rectangular mural about climate change. The wall is 10 feet long and 6 feet tall. What is the area of the mural?",
            es: "🌍 Un centro comunitario quiere pintar un mural rectangular sobre el cambio climático. La pared mide 10 pies de largo y 6 pies de alto. ¿Cuál es el área del mural?",
            ur: "🌍 ایک کمیونٹی سینٹر موسمیاتی تبدیلی کے بارے میں مستطیل دیواری تصویر بنانا چاہتا ہے۔ دیوار 10 فٹ لمبی اور 6 فٹ اونچی ہے۔ دیواری تصویر کا رقبہ کیا ہے؟",
          },
          choices: [
            { en: "16 square feet", es: "16 pies cuadrados", ur: "16 مربع فٹ" },
            { en: "56 square feet", es: "56 pies cuadrados", ur: "56 مربع فٹ" },
            { en: "60 square feet", es: "60 pies cuadrados", ur: "60 مربع فٹ" },
            { en: "64 square feet", es: "64 pies cuadrados", ur: "64 مربع فٹ" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-3.6C-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Two garden plots are available. Plot A is 5 m × 8 m. Plot B is 6 m × 6 m. Which plot has the larger area?",
            es: "🌱 Hay dos parcelas de jardín disponibles. La parcela A mide 5 m × 8 m. La parcela B mide 6 m × 6 m. ¿Qué parcela tiene mayor área?",
            ur: "🌱 دو گارڈن پلاٹ دستیاب ہیں۔ پلاٹ A 5 م × 8 م ہے۔ پلاٹ B 6 م × 6 م ہے۔ کس پلاٹ کا رقبہ زیادہ ہے؟",
          },
          choices: [
            { en: "Plot A — 40 square meters", es: "Parcela A — 40 metros cuadrados", ur: "پلاٹ A — 40 مربع میٹر" },
            { en: "Plot B — 36 square meters", es: "Parcela B — 36 metros cuadrados", ur: "پلاٹ B — 36 مربع میٹر" },
            { en: "They are the same size", es: "Son del mismo tamaño", ur: "وہ ایک ہی جتنے ہیں" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-3.6C-3",
          type: "multiple-choice",
          prompt: {
            en: "♻️ A recycling station has a rectangular floor space that is 8 meters long. Its area is 56 square meters. What is its width?",
            es: "♻️ Una estación de reciclaje tiene un espacio rectangular en el suelo que mide 8 metros de largo. Su área es de 56 metros cuadrados. ¿Cuál es su ancho?",
            ur: "♻️ ایک ری سائیکلنگ اسٹیشن کی مستطیل فرشی جگہ 8 میٹر لمبی ہے۔ اس کا رقبہ 56 مربع میٹر ہے۔ اس کی چوڑائی کیا ہے؟",
          },
          choices: [
            { en: "6 meters", es: "6 metros", ur: "6 میٹر" },
            { en: "9 meters", es: "9 metros", ur: "9 میٹر" },
            { en: "8 meters", es: "8 metros", ur: "8 میٹر" },
            { en: "7 meters", es: "7 metros", ur: "7 میٹر" },
          ],
          correctIndex: 3,
        },
      ],
    },

  ],
};

export default grade3;
