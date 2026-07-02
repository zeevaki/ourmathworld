import { Grade } from "./types";

const grade1: Grade = {
  grade: 1,
  label: "Grade 1",
  emoji: "🌱",
  color: "#22C55E",
  units: [

    // ─── Unit 1: Adding & Subtracting within 20 ──────────────────────────────
    {
      teks: "1.3B",
      cambridge: "Stage 1 · 1Nc3",
      emoji: "🌿",
      title: {
        en: "Adding & Subtracting within 20",
        es: "Sumar y Restar hasta 20",
        ur: "20 تک جمع اور تفریق",
      },
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

    // ─── Unit 2: Making 10 ────────────────────────────────────────────────────
    {
      teks: "1.3C",
      cambridge: "Stage 1 · 1Nc4",
      emoji: "🌿",
      title: {
        en: "Making 10",
        es: "Formar el 10",
        ur: "10 بنانا",
      },
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

    // ─── Unit 3: Comparing Numbers >, <, = ───────────────────────────────────
    {
      teks: "1.2G",
      cambridge: "Stage 1 · 1Nn3",
      emoji: "⚖️",
      title: {
        en: "Comparing Numbers",
        es: "Comparar Números",
        ur: "نمبروں کا موازنہ",
      },
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

    // ─── Unit 4: Graphs & Data ────────────────────────────────────────────────
    {
      teks: "1.8A",
      cambridge: "Stage 1 · 1Dh1",
      emoji: "📊",
      title: {
        en: "Graphs & Data",
        es: "Gráficas y Datos",
        ur: "گراف اور ڈیٹا",
      },
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

  ],
};

export default grade1;
