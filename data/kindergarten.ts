import { Grade } from "./types";

const kindergarten: Grade = {
  grade: 0,
  label: "Kindergarten",
  emoji: "🌻",
  color: "#F59E0B",
  units: [

    // ─── Unit 1: Counting to 10 ──────────────────────────────────────────────
    {
      teks: "K.2C",
      cambridge: "Stage 1 · 1Nc1",
      emoji: "🌱",
      title: {
        en: "Counting to 10",
        es: "Contar hasta 10",
        ur: "دس تک گننا",
      },
      vocabulary: [
        {
          id: "count",
          emoji: "🔢",
          word: { en: "count", es: "contar", ur: "گننا" },
          definition: {
            en: "say numbers in order to find out how many",
            es: "decir los números en orden para saber cuántos hay",
            ur: "کتنے ہیں یہ جاننے کے لیے نمبر ترتیب سے بولنا",
          },
        },
        {
          id: "number",
          emoji: "🔟",
          word: { en: "number", es: "número", ur: "نمبر" },
          definition: {
            en: "a word or symbol that tells how many",
            es: "una palabra o símbolo que dice cuántos hay",
            ur: "ایک لفظ یا نشان جو بتاتا ہے کتنے ہیں",
          },
        },
        {
          id: "how-many",
          emoji: "❓",
          word: { en: "how many", es: "cuántos", ur: "کتنے" },
          definition: {
            en: "the question we ask when we count",
            es: "la pregunta que hacemos cuando contamos",
            ur: "گنتی کرتے وقت جو سوال پوچھتے ہیں",
          },
        },
        {
          id: "zero",
          emoji: "0️⃣",
          word: { en: "zero", es: "cero", ur: "صفر" },
          definition: {
            en: "none — no objects at all",
            es: "ninguno — no hay nada",
            ur: "کچھ نہیں — بالکل کوئی چیز نہیں",
          },
        },
      ],
      lesson: {
        en: "🌱 **We count to help our community!** Our class is planting trees to make clean air for everyone. Before we plant, we need to **count** how many seeds we have.\n\nStart at 1 and say each number until you reach the last seed: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10! The last number you say tells you **how many** you have.\n\nIf there are no seeds left, the answer is **zero** — and we know we need to get more! Every tree we plant makes the air a little cleaner for our neighbors. 🌍 You are a planet helper!",
        es: "🌱 **¡Contamos para ayudar a nuestra comunidad!** Nuestra clase está plantando árboles para que todos tengan aire limpio. Antes de plantar, necesitamos **contar** cuántas semillas tenemos.\n\nEmpieza en el 1 y di cada número hasta llegar a la última semilla: ¡1, 2, 3, 4, 5, 6, 7, 8, 9, 10! El último número que dices te dice **cuántas** tienes.\n\nSi no quedan semillas, la respuesta es **cero** — ¡y sabemos que necesitamos conseguir más! Cada árbol que plantamos limpia un poco el aire para nuestros vecinos. 🌍 ¡Eres un guardián del planeta!",
        ur: "🌱 **ہم کمیونٹی کی مدد کے لیے گنتے ہیں!** ہماری کلاس درخت لگا رہی ہے تاکہ سب کو صاف ہوا ملے۔ لگانے سے پہلے ہمیں **گننا** ہے کہ ہمارے پاس کتنے بیج ہیں۔\n\n1 سے شروع کرو اور آخری بیج تک ہر نمبر بولو: 1، 2، 3، 4، 5، 6، 7، 8، 9، 10! آخری نمبر بتاتا ہے کہ **کتنے** ہیں۔\n\nاگر کوئی بیج نہیں بچا تو جواب **صفر** ہے — اور ہمیں پتہ چل جاتا ہے کہ مزید لانے ہیں! ہر درخت ہمارے پڑوسیوں کے لیے تھوڑی اور صاف ہوا بناتا ہے۔ 🌍 تم زمین کے محافظ ہو!",
      },
      exercises: [
        {
          id: "ex-K.2C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌿 You are helping sort cans for the food drive at school. You count: 1, 2, 3, 4, 5, 6, 7. How many cans did you count?",
            es: "🌿 Estás ayudando a ordenar latas para la colecta de alimentos en la escuela. Cuentas: 1, 2, 3, 4, 5, 6, 7. ¿Cuántas latas contaste?",
            ur: "🌿 تم اسکول میں فوڈ ڈرائیو کے لیے ڈبے چھانٹنے میں مدد کر رہے ہو۔ تم گنتے ہو: 1، 2، 3، 4، 5، 6، 7۔ تم نے کتنے ڈبے گنے؟",
          },
          choices: [
            { en: "6", es: "6", ur: "6" },
            { en: "8", es: "8", ur: "8" },
            { en: "7", es: "7", ur: "7" },
            { en: "5", es: "5", ur: "5" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-K.2C-2",
          type: "multiple-choice",
          prompt: {
            en: "🌳 The class planted some trees in the school garden. Count the trees: 🌳🌳🌳🌳🌳. How many trees?",
            es: "🌳 La clase plantó algunos árboles en el jardín de la escuela. Cuenta los árboles: 🌳🌳🌳🌳🌳. ¿Cuántos árboles?",
            ur: "🌳 کلاس نے اسکول کے باغ میں کچھ درخت لگائے۔ درخت گنو: 🌳🌳🌳🌳🌳۔ کتنے درخت ہیں؟",
          },
          choices: [
            { en: "4", es: "4", ur: "4" },
            { en: "6", es: "6", ur: "6" },
            { en: "3", es: "3", ur: "3" },
            { en: "5", es: "5", ur: "5" },
          ],
          correctIndex: 3,
        },
        {
          id: "ex-K.2C-3",
          type: "true-false",
          prompt: {
            en: "♻️ A student put 0 bottles in the recycling bin. Zero means there are no bottles at all.",
            es: "♻️ Un estudiante puso 0 botellas en el contenedor de reciclaje. Cero significa que no hay ninguna botella.",
            ur: "♻️ ایک طالب علم نے ری سائیکلنگ بن میں 0 بوتلیں ڈالیں۔ صفر کا مطلب ہے کہ کوئی بھی بوتل نہیں ہے۔",
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
          id: "qz-K.2C-1",
          type: "multiple-choice",
          prompt: {
            en: "🌻 You are counting sunflower seeds to plant. You count: 1, 2, 3, 4, 5, 6, 7, 8. What number comes next?",
            es: "🌻 Estás contando semillas de girasol para plantar. Cuentas: 1, 2, 3, 4, 5, 6, 7, 8. ¿Qué número sigue?",
            ur: "🌻 تم لگانے کے لیے سورج مکھی کے بیج گن رہے ہو۔ تم گنتے ہو: 1، 2، 3، 4، 5، 6، 7، 8۔ اگلا نمبر کیا آتا ہے؟",
          },
          choices: [
            { en: "7", es: "7", ur: "7" },
            { en: "10", es: "10", ur: "10" },
            { en: "9", es: "9", ur: "9" },
            { en: "11", es: "11", ur: "11" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-K.2C-2",
          type: "multiple-choice",
          prompt: {
            en: "🥗 Students brought vegetables for the school soup kitchen: 🥕🥕🥦🥕🥦🥕. How many vegetables are there in all?",
            es: "🥗 Los estudiantes trajeron verduras para el comedor de la escuela: 🥕🥕🥦🥕🥦🥕. ¿Cuántas verduras hay en total?",
            ur: "🥗 طلبا اسکول کے سوپ کچن کے لیے سبزیاں لائے: 🥕🥕🥦🥕🥦🥕۔ کل کتنی سبزیاں ہیں؟",
          },
          choices: [
            { en: "5", es: "5", ur: "5" },
            { en: "6", es: "6", ur: "6" },
            { en: "4", es: "4", ur: "4" },
            { en: "7", es: "7", ur: "7" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-K.2C-3",
          type: "multiple-choice",
          prompt: {
            en: "🌍 The class collected 10 books to donate to the library. Which number is ten?",
            es: "🌍 La clase juntó 10 libros para donar a la biblioteca. ¿Cuál número es diez?",
            ur: "🌍 کلاس نے لائبریری کو دینے کے لیے 10 کتابیں جمع کیں۔ کون سا نمبر دس ہے؟",
          },
          choices: [
            { en: "1", es: "1", ur: "1" },
            { en: "9", es: "9", ur: "9" },
            { en: "10", es: "10", ur: "10" },
            { en: "100", es: "100", ur: "100" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 2: More, Less, or Equal ────────────────────────────────────────
    {
      teks: "K.2H",
      cambridge: "Stage 1 · 1Nn2",
      emoji: "⚖️",
      title: {
        en: "More, Less, or Equal",
        es: "Más, Menos o Igual",
        ur: "زیادہ، کم یا برابر",
      },
      vocabulary: [
        {
          id: "more",
          emoji: "⬆️",
          word: { en: "more", es: "más", ur: "زیادہ" },
          definition: {
            en: "a bigger group — has extra",
            es: "un grupo más grande — tiene de más",
            ur: "بڑا گروپ — کچھ اضافی ہے",
          },
        },
        {
          id: "less",
          emoji: "⬇️",
          word: { en: "less", es: "menos", ur: "کم" },
          definition: {
            en: "a smaller group — does not have as many",
            es: "un grupo más pequeño — no tiene tantos",
            ur: "چھوٹا گروپ — اتنے نہیں ہیں",
          },
        },
        {
          id: "equal",
          emoji: "⚖️",
          word: { en: "equal", es: "igual", ur: "برابر" },
          definition: {
            en: "the same amount in each group — fair for everyone",
            es: "la misma cantidad en cada grupo — justo para todos",
            ur: "ہر گروپ میں ایک جتنی تعداد — سب کے لیے انصاف",
          },
        },
        {
          id: "fair",
          emoji: "🤝",
          word: { en: "fair", es: "justo", ur: "منصفانہ" },
          definition: {
            en: "everyone gets the same — nobody is left out",
            es: "todos reciben lo mismo — nadie queda fuera",
            ur: "سب کو ایک جیسا ملتا ہے — کوئی باہر نہیں رہتا",
          },
        },
      ],
      lesson: {
        en: "⚖️ **Fairness is math!** Imagine your class has 5 apples and 3 oranges to share. Which group has **more** — the apples or the oranges? The apples! Which group has **less**? The oranges!\n\nWhen two groups have exactly the same number, they are **equal** — and that is fair! When we share food, books, or supplies at school, we want everyone to get an equal share. No one should have too much while someone else has too little. That's what it means to be fair in our community! 🤝",
        es: "⚖️ **¡La justicia es matemáticas!** Imagina que tu clase tiene 5 manzanas y 3 naranjas para compartir. ¿Qué grupo tiene **más** — las manzanas o las naranjas? ¡Las manzanas! ¿Qué grupo tiene **menos**? ¡Las naranjas!\n\nCuando dos grupos tienen exactamente el mismo número, son **iguales** — ¡y eso es justo! Cuando compartimos comida, libros o útiles en la escuela, queremos que todos reciban una parte igual. Nadie debería tener demasiado mientras otro tiene muy poco. ¡Eso es ser justos en nuestra comunidad! 🤝",
        ur: "⚖️ **انصاف ریاضی ہے!** سوچو تمہاری کلاس کے پاس بانٹنے کے لیے 5 سیب اور 3 سنترے ہیں۔ کس گروپ میں **زیادہ** ہیں — سیب یا سنترے؟ سیب! کس گروپ میں **کم** ہیں؟ سنترے!\n\nجب دو گروپوں میں بالکل ایک جتنی تعداد ہو تو وہ **برابر** ہیں — اور یہ انصاف ہے! جب ہم اسکول میں کھانا، کتابیں یا سامان بانٹتے ہیں تو چاہتے ہیں کہ سب کو برابر حصہ ملے۔ کسی کو بہت زیادہ نہیں ملنا چاہیے جبکہ کسی کے پاس بہت کم ہو۔ یہی ہماری کمیونٹی میں انصاف کا مطلب ہے! 🤝",
      },
      exercises: [
        {
          id: "ex-K.2H-1",
          type: "multiple-choice",
          prompt: {
            en: "🌿 Table 1 has 4 cans of food. Table 2 has 6 cans. Which table has more?",
            es: "🌿 La mesa 1 tiene 4 latas de comida. La mesa 2 tiene 6 latas. ¿Qué mesa tiene más?",
            ur: "🌿 میز 1 پر کھانے کے 4 ڈبے ہیں۔ میز 2 پر 6 ڈبے ہیں۔ کس میز پر زیادہ ہیں؟",
          },
          choices: [
            { en: "Table 1", es: "Mesa 1", ur: "میز 1" },
            { en: "Table 2", es: "Mesa 2", ur: "میز 2" },
            { en: "They are equal", es: "Son iguales", ur: "وہ برابر ہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-K.2H-2",
          type: "multiple-choice",
          prompt: {
            en: "📚 There are 3 library books for Group A and 3 library books for Group B. Is this fair?",
            es: "📚 Hay 3 libros de biblioteca para el Grupo A y 3 libros para el Grupo B. ¿Es justo?",
            ur: "📚 گروپ A کے لیے 3 لائبریری کتابیں ہیں اور گروپ B کے لیے 3 لائبریری کتابیں ہیں۔ کیا یہ منصفانہ ہے؟",
          },
          choices: [
            { en: "Yes — they are equal! ✅", es: "¡Sí — son iguales! ✅", ur: "ہاں — وہ برابر ہیں! ✅" },
            { en: "No — Group A has more ❌", es: "No — el Grupo A tiene más ❌", ur: "نہیں — گروپ A میں زیادہ ہیں ❌" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-K.2H-3",
          type: "true-false",
          prompt: {
            en: "🌱 A school has 7 garden tools and 5 students who want to garden. 5 is less than 7.",
            es: "🌱 Una escuela tiene 7 herramientas de jardín y 5 estudiantes que quieren trabajar en el jardín. 5 es menos que 7.",
            ur: "🌱 ایک اسکول میں 7 باغبانی کے اوزار ہیں اور 5 طالب علم ہیں جو باغبانی کرنا چاہتے ہیں۔ 5، 7 سے کم ہے۔",
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
          id: "qz-K.2H-1",
          type: "multiple-choice",
          prompt: {
            en: "🍎 Ms. Rosa has 8 apples for the class and 10 students. Does every student get an apple?",
            es: "🍎 La maestra Rosa tiene 8 manzanas para la clase y hay 10 estudiantes. ¿Cada estudiante recibe una manzana?",
            ur: "🍎 ٹیچر روزا کے پاس کلاس کے لیے 8 سیب ہیں اور 10 طالب علم ہیں۔ کیا ہر طالب علم کو سیب ملے گا؟",
          },
          choices: [
            { en: "Yes — there are enough", es: "Sí — hay suficientes", ur: "ہاں — کافی ہیں" },
            { en: "No — there are less apples than students", es: "No — hay menos manzanas que estudiantes", ur: "نہیں — طالب علموں سے کم سیب ہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-K.2H-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Bin A has 6 bottles. Bin B has 9 bottles. Which bin has less?",
            es: "♻️ El contenedor A tiene 6 botellas. El contenedor B tiene 9 botellas. ¿Qué contenedor tiene menos?",
            ur: "♻️ بن A میں 6 بوتلیں ہیں۔ بن B میں 9 بوتلیں ہیں۔ کس بن میں کم ہیں؟",
          },
          choices: [
            { en: "Bin A", es: "Contenedor A", ur: "بن A" },
            { en: "Bin B", es: "Contenedor B", ur: "بن B" },
            { en: "They are equal", es: "Son iguales", ur: "وہ برابر ہیں" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-K.2H-3",
          type: "multiple-choice",
          prompt: {
            en: "🤝 Which word means both groups have the same amount — so it is fair?",
            es: "🤝 ¿Qué palabra significa que ambos grupos tienen la misma cantidad — y eso es justo?",
            ur: "🤝 کون سا لفظ مطلب رکھتا ہے کہ دونوں گروپوں کے پاس ایک جتنی تعداد ہے — تو یہ منصفانہ ہے؟",
          },
          choices: [
            { en: "More", es: "Más", ur: "زیادہ" },
            { en: "Less", es: "Menos", ur: "کم" },
            { en: "Equal", es: "Igual", ur: "برابر" },
            { en: "Zero", es: "Cero", ur: "صفر" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 3: Joining & Separating ────────────────────────────────────────
    {
      teks: "K.3A",
      cambridge: "Stage 1 · 1Nc2",
      emoji: "🌿",
      title: {
        en: "Joining & Separating",
        es: "Juntar y Separar",
        ur: "ملانا اور الگ کرنا",
      },
      vocabulary: [
        {
          id: "join",
          emoji: "➕",
          word: { en: "join", es: "juntar", ur: "ملانا" },
          definition: {
            en: "put groups together to make a bigger group",
            es: "unir grupos para hacer un grupo más grande",
            ur: "گروپوں کو ملانا تاکہ بڑا گروپ بنے",
          },
        },
        {
          id: "separate",
          emoji: "➖",
          word: { en: "separate", es: "separar", ur: "الگ کرنا" },
          definition: {
            en: "take some away from a group to make it smaller",
            es: "quitar algunos del grupo para hacerlo más pequeño",
            ur: "گروپ سے کچھ ہٹانا تاکہ وہ چھوٹا ہو جائے",
          },
        },
        {
          id: "in-all",
          emoji: "🔢",
          word: { en: "in all", es: "en total", ur: "کل ملا کر" },
          definition: {
            en: "the total — counting everything together",
            es: "el total — contar todo junto",
            ur: "کل تعداد — سب کو ملا کر گننا",
          },
        },
        {
          id: "left",
          emoji: "🫙",
          word: { en: "left", es: "quedan", ur: "بچے" },
          definition: {
            en: "what remains after some are taken away",
            es: "lo que queda después de quitar algunos",
            ur: "کچھ ہٹانے کے بعد جو باقی رہے",
          },
        },
      ],
      lesson: {
        en: "🌿 **Helping families with math!** Our school is collecting cans of food for families who need it. When we put two groups of cans together, we **join** them. When we give some cans away, we **separate** them.\n\n🧡 Mia has 3 cans. Omar brings 4 more. Now we **join**: 3 and 4 is 7 cans **in all**!\n\n💛 The food bank takes 5 cans. We had 7. We **separate**: 7 take away 5 — only 2 are **left**.\n\nEvery can you count helps a real family. You are a community helper! 🌟",
        es: "🌿 **¡Ayudamos a familias con las matemáticas!** Nuestra escuela junta latas de comida para familias que las necesitan. Cuando unimos dos grupos de latas, las **juntamos**. Cuando damos algunas latas, las **separamos**.\n\n🧡 Mia tiene 3 latas. Omar trae 4 más. **Juntamos**: 3 y 4 son 7 latas **en total**!\n\n💛 El banco de alimentos toma 5 latas. Teníamos 7. **Separamos**: 7 menos 5 — solo quedan 2 **latas**.\n\n¡Cada lata que cuentas ayuda a una familia real. Eres un ayudante de la comunidad! 🌟",
        ur: "🌿 **ریاضی سے خاندانوں کی مدد!** ہمارا اسکول ضرورتمند خاندانوں کے لیے کھانے کے ڈبے جمع کر رہا ہے۔ جب ہم ڈبوں کے دو گروپ ایک ساتھ رکھتے ہیں تو انہیں **ملاتے** ہیں۔ جب کچھ ڈبے دے دیتے ہیں تو انہیں **الگ** کرتے ہیں۔\n\n🧡 میا کے پاس 3 ڈبے ہیں۔ عمر 4 اور لاتا ہے۔ اب **ملاتے** ہیں: 3 اور 4 = **کل** 7 ڈبے!\n\n💛 فوڈ بینک 5 ڈبے لے جاتا ہے۔ ہمارے پاس 7 تھے۔ **الگ** کرتے ہیں: 7 میں سے 5 = صرف 2 **بچے**۔\n\nتم جو بھی ڈبہ گنتے ہو وہ ایک اصلی خاندان کی مدد کرتا ہے۔ تم کمیونٹی کے مددگار ہو! 🌟",
      },
      exercises: [
        {
          id: "ex-K.3A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Your class planted 2 trees in the morning and 3 trees in the afternoon to help clean the air. How many trees did you plant in all?",
            es: "🌱 Tu clase plantó 2 árboles en la mañana y 3 árboles en la tarde para ayudar a limpiar el aire. ¿Cuántos árboles plantaron en total?",
            ur: "🌱 تمہاری کلاس نے ہوا صاف کرنے میں مدد کے لیے صبح 2 درخت اور دوپہر میں 3 درخت لگائے۔ تم نے کل کتنے درخت لگائے؟",
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
          id: "ex-K.3A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌿 The food shelf had 8 cans. Students gave 3 cans to a family in need. How many cans are left on the shelf?",
            es: "🌿 La despensa tenía 8 latas. Los estudiantes dieron 3 latas a una familia que las necesitaba. ¿Cuántas latas quedan en la despensa?",
            ur: "🌿 فوڈ شیلف پر 8 ڈبے تھے۔ طلبا نے ضرورتمند خاندان کو 3 ڈبے دیے۔ شیلف پر کتنے ڈبے بچے؟",
          },
          choices: [
            { en: "6", es: "6", ur: "6" },
            { en: "4", es: "4", ur: "4" },
            { en: "5", es: "5", ur: "5" },
            { en: "3", es: "3", ur: "3" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-K.3A-3",
          type: "true-false",
          prompt: {
            en: "♻️ There are 4 bottles in the recycling bin. 2 more bottles are added. Now there are 6 bottles in all.",
            es: "♻️ Hay 4 botellas en el contenedor de reciclaje. Se agregan 2 botellas más. Ahora hay 6 botellas en total.",
            ur: "♻️ ری سائیکلنگ بن میں 4 بوتلیں ہیں۔ 2 مزید بوتلیں ڈالی گئیں۔ اب کل 6 بوتلیں ہیں۔",
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
          id: "qz-K.3A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌻 A garden has 6 sunflowers growing. 4 more seeds grow into flowers. How many sunflowers are there in all?",
            es: "🌻 En un jardín hay 6 girasoles creciendo. 4 semillas más se convierten en flores. ¿Cuántos girasoles hay en total?",
            ur: "🌻 ایک باغ میں 6 سورج مکھیاں اگ رہی ہیں۔ 4 اور بیج پھول بن جاتے ہیں۔ کل کتنی سورج مکھیاں ہیں؟",
          },
          choices: [
            { en: "9", es: "9", ur: "9" },
            { en: "11", es: "11", ur: "11" },
            { en: "10", es: "10", ur: "10" },
            { en: "8", es: "8", ur: "8" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-K.3A-2",
          type: "multiple-choice",
          prompt: {
            en: "🤝 The class had 9 blankets to donate. They gave away 4. How many blankets are left?",
            es: "🤝 La clase tenía 9 cobijas para donar. Regalaron 4. ¿Cuántas cobijas quedan?",
            ur: "🤝 کلاس کے پاس دینے کے لیے 9 کمبل تھے۔ انہوں نے 4 دے دیے۔ کتنے کمبل بچے؟",
          },
          choices: [
            { en: "4", es: "4", ur: "4" },
            { en: "6", es: "6", ur: "6" },
            { en: "3", es: "3", ur: "3" },
            { en: "5", es: "5", ur: "5" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-K.3A-3",
          type: "multiple-choice",
          prompt: {
            en: "📚 Group 1 has 3 books and Group 2 has 4 books to share at the library corner. How many books are there in all?",
            es: "📚 El Grupo 1 tiene 3 libros y el Grupo 2 tiene 4 libros para compartir en el rincón de la biblioteca. ¿Cuántos libros hay en total?",
            ur: "📚 گروپ 1 کے پاس 3 کتابیں ہیں اور گروپ 2 کے پاس لائبریری کارنر میں بانٹنے کے لیے 4 کتابیں ہیں۔ کل کتنی کتابیں ہیں؟",
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

    // ─── Unit 4: 2D Shapes in Our Community ──────────────────────────────────
    {
      teks: "K.6A",
      cambridge: "Stage 1 · 1Gs1",
      emoji: "🏡",
      title: {
        en: "Shapes Around Us",
        es: "Figuras a Nuestro Alrededor",
        ur: "ہمارے ارد گرد شکلیں",
      },
      vocabulary: [
        {
          id: "circle",
          emoji: "⭕",
          word: { en: "circle", es: "círculo", ur: "دائرہ" },
          definition: {
            en: "a perfectly round shape — like the sun or a wheel",
            es: "una figura completamente redonda — como el sol o una rueda",
            ur: "بالکل گول شکل — جیسے سورج یا پہیہ",
          },
        },
        {
          id: "square",
          emoji: "🟥",
          word: { en: "square", es: "cuadrado", ur: "مربع" },
          definition: {
            en: "a shape with 4 equal sides — like a garden patch",
            es: "una figura con 4 lados iguales — como un cuadro de jardín",
            ur: "وہ شکل جس کے 4 برابر اطراف ہوں — جیسے باغ کا ٹکڑا",
          },
        },
        {
          id: "triangle",
          emoji: "🔺",
          word: { en: "triangle", es: "triángulo", ur: "تکون" },
          definition: {
            en: "a shape with 3 sides — like a roof",
            es: "una figura con 3 lados — como un techo",
            ur: "وہ شکل جس کے 3 اطراف ہوں — جیسے چھت",
          },
        },
        {
          id: "rectangle",
          emoji: "🟦",
          word: { en: "rectangle", es: "rectángulo", ur: "مستطیل" },
          definition: {
            en: "a shape with 4 sides where two sides are longer — like a door or a garden bed",
            es: "una figura con 4 lados donde dos son más largos — como una puerta o un cuadro de jardín",
            ur: "وہ شکل جس کے 4 اطراف ہوں اور دو اطراف لمبے ہوں — جیسے دروازہ یا باغ کی کیاری",
          },
        },
        {
          id: "corner",
          emoji: "📐",
          word: { en: "corner", es: "esquina", ur: "کونا" },
          definition: {
            en: "the pointy place where two sides meet",
            es: "el lugar puntiagudo donde se juntan dos lados",
            ur: "نوکدار جگہ جہاں دو اطراف ملتے ہیں",
          },
        },
      ],
      lesson: {
        en: "🏡 **Shapes are everywhere in our community!** Look around — can you see a **circle** in a wheel that carries food to the food bank? A **rectangle** door on the community center where people get help? A **triangle** roof that collects rainwater for the garden? A **square** window letting light into a neighbor's home?\n\nShapes help us build homes, schools, and gardens that keep everyone safe and healthy. When you learn to name shapes, you are learning the language of builders and helpers! 🌍",
        es: "🏡 **¡Las figuras están en todas partes en nuestra comunidad!** Mira alrededor — ¿puedes ver un **círculo** en una rueda que lleva comida al banco de alimentos? ¿Una puerta **rectángulo** en el centro comunitario donde la gente recibe ayuda? ¿Un techo **triángulo** que recoge agua de lluvia para el jardín? ¿Una **cuadrado** ventana que deja entrar luz a la casa de un vecino?\n\n¡Las figuras nos ayudan a construir hogares, escuelas y jardines que mantienen a todos seguros y saludables. Cuando aprendes a nombrar figuras, ¡aprendes el idioma de los constructores y ayudantes! 🌍",
        ur: "🏡 **شکلیں ہماری کمیونٹی میں ہر جگہ ہیں!** ادھر ادھر دیکھو — کیا تم کسی پہیے میں **دائرہ** دیکھ سکتے ہو جو فوڈ بینک تک کھانا لے جاتا ہے؟ کمیونٹی سینٹر کا **مستطیل** دروازہ جہاں لوگوں کو مدد ملتی ہے؟ **تکون** چھت جو باغ کے لیے بارش کا پانی جمع کرتی ہے؟ **مربع** کھڑکی جو پڑوسی کے گھر میں روشنی آنے دیتی ہے؟\n\nشکلیں ہمیں ایسے گھر، اسکول اور باغ بنانے میں مدد کرتی ہیں جو سب کو محفوظ اور صحتمند رکھتے ہیں۔ جب تم شکلوں کے نام سیکھتے ہو تو تم بنانے والوں اور مددگاروں کی زبان سیکھ رہے ہو! 🌍",
      },
      exercises: [
        {
          id: "ex-K.6A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌞 The sun gives us clean energy! The sun looks like this: ⭕. What shape is the sun?",
            es: "🌞 ¡El sol nos da energía limpia! El sol tiene esta forma: ⭕. ¿Qué forma tiene el sol?",
            ur: "🌞 سورج ہمیں صاف توانائی دیتا ہے! سورج ایسا دکھتا ہے: ⭕۔ سورج کی کیا شکل ہے؟",
          },
          choices: [
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-K.6A-2",
          type: "multiple-choice",
          prompt: {
            en: "🏠 The roof of the community center collects rainwater for the garden. It has 3 sides and 3 corners. What shape is the roof?",
            es: "🏠 El techo del centro comunitario recoge agua de lluvia para el jardín. Tiene 3 lados y 3 esquinas. ¿Qué forma tiene el techo?",
            ur: "🏠 کمیونٹی سینٹر کی چھت باغ کے لیے بارش کا پانی جمع کرتی ہے۔ اس کے 3 اطراف اور 3 کونے ہیں۔ چھت کی کیا شکل ہے؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-K.6A-3",
          type: "true-false",
          prompt: {
            en: "🌱 A garden patch where students grow vegetables has 4 equal sides. It is shaped like a square.",
            es: "🌱 Un cuadro del jardín donde los estudiantes cultivan verduras tiene 4 lados iguales. Tiene forma de cuadrado.",
            ur: "🌱 باغ کا وہ حصہ جہاں طالب علم سبزیاں اگاتے ہیں اس کے 4 برابر اطراف ہیں۔ یہ مربع کی شکل کا ہے۔",
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
          id: "qz-K.6A-1",
          type: "multiple-choice",
          prompt: {
            en: "📦 Food boxes donated to families have 4 sides. Two sides are long and two sides are short. What shape is the side of the box?",
            es: "📦 Las cajas de comida donadas a las familias tienen 4 lados. Dos lados son largos y dos son cortos. ¿Qué forma tiene el lado de la caja?",
            ur: "📦 خاندانوں کو دیے گئے کھانے کے ڈبوں کے 4 اطراف ہیں۔ دو اطراف لمبے ہیں اور دو چھوٹے ہیں۔ ڈبے کی طرف کی کیا شکل ہے؟",
          },
          choices: [
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Square", es: "Cuadrado", ur: "مربع" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
          ],
          correctIndex: 3,
        },
        {
          id: "qz-K.6A-2",
          type: "multiple-choice",
          prompt: {
            en: "🚲 Bicycles help people travel without polluting the air. The wheels of a bicycle are shaped like a ___.",
            es: "🚲 Las bicicletas ayudan a la gente a viajar sin contaminar el aire. Las ruedas de una bicicleta tienen forma de ___.",
            ur: "🚲 سائیکلیں لوگوں کو ہوا آلودہ کیے بغیر سفر کرنے میں مدد کرتی ہیں۔ سائیکل کے پہیے ___ کی شکل کے ہیں۔",
          },
          choices: [
            { en: "Square", es: "Cuadrado", ur: "مربع" },
            { en: "Circle", es: "Círculo", ur: "دائرہ" },
            { en: "Triangle", es: "Triángulo", ur: "تکون" },
            { en: "Rectangle", es: "Rectángulo", ur: "مستطیل" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-K.6A-3",
          type: "multiple-choice",
          prompt: {
            en: "🏫 The classroom door helps everyone get in safely. It has 4 sides — 2 long and 2 short. How many corners does it have?",
            es: "🏫 La puerta del salón ayuda a todos a entrar con seguridad. Tiene 4 lados — 2 largos y 2 cortos. ¿Cuántas esquinas tiene?",
            ur: "🏫 کلاس کا دروازہ سب کو محفوظ طریقے سے اندر آنے میں مدد کرتا ہے۔ اس کے 4 اطراف ہیں — 2 لمبے اور 2 چھوٹے۔ اس کے کتنے کونے ہیں؟",
          },
          choices: [
            { en: "3", es: "3", ur: "3" },
            { en: "0", es: "0", ur: "0" },
            { en: "4", es: "4", ur: "4" },
            { en: "2", es: "2", ur: "2" },
          ],
          correctIndex: 2,
        },
      ],
    },

  ],
};

export default kindergarten;
