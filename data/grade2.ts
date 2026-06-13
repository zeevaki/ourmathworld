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
      emoji: "➕",
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
        en: "When we **add**, we put groups together. 3 + 4 = 7 means 3 things and 4 more things makes 7 things altogether! When we **subtract**, we take away. 7 - 3 = 4 means we start with 7 and take away 3, so 4 are left.",
        es: "Cuando **sumamos**, juntamos grupos. ¡3 + 4 = 7 significa que 3 cosas y 4 cosas más nos dan 7 cosas en total! Cuando **restamos**, quitamos. 7 - 3 = 4 significa que empezamos con 7 y quitamos 3, entonces quedan 4.",
        ur: "جب ہم **جمع** کرتے ہیں، تو گروپ ملاتے ہیں۔ 3 + 4 = 7 کا مطلب ہے کہ 3 چیزیں اور 4 مزید چیزیں ملا کر 7 چیزیں بنتی ہیں! جب ہم **تفریق** کرتے ہیں، تو ہٹاتے ہیں۔ 7 - 3 = 4 کا مطلب ہے 7 سے 3 ہٹائے تو 4 بچتے ہیں۔",
      },
      exercises: [
        {
          id: "ex-2.4A-1",
          type: "multiple-choice",
          prompt: {
            en: "What is 6 + 5?",
            es: "¿Cuánto es 6 + 5?",
            ur: "6 + 5 کتنا ہے؟",
          },
          choices: [
            { en: "10", es: "10", ur: "10" },
            { en: "11", es: "11", ur: "11" },
            { en: "12", es: "12", ur: "12" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-2.4A-2",
          type: "multiple-choice",
          prompt: {
            en: "What is 13 - 7?",
            es: "¿Cuánto es 13 - 7?",
            ur: "13 - 7 کتنا ہے؟",
          },
          choices: [
            { en: "5", es: "5", ur: "5" },
            { en: "7", es: "7", ur: "7" },
            { en: "6", es: "6", ur: "6" },
            { en: "8", es: "8", ur: "8" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-2.4A-3",
          type: "true-false",
          prompt: {
            en: "The sum of 8 + 8 is 16.",
            es: "La suma de 8 + 8 es 16.",
            ur: "8 + 8 کا حاصل جمع 16 ہے۔",
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
            en: "Which word means the answer when you add two numbers?",
            es: "¿Qué palabra significa la respuesta cuando sumas dos números?",
            ur: "کون سا لفظ جمع کے جواب کو کہتے ہیں؟",
          },
          choices: [
            { en: "difference", es: "diferencia", ur: "فرق" },
            { en: "sum", es: "suma", ur: "حاصل جمع" },
            { en: "subtract", es: "restar", ur: "تفریق" },
            { en: "equals", es: "igual", ur: "برابر" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-2.4A-2",
          type: "multiple-choice",
          prompt: {
            en: "What is 9 + 7?",
            es: "¿Cuánto es 9 + 7?",
            ur: "9 + 7 کتنا ہے؟",
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
            en: "What is 14 - 6?",
            es: "¿Cuánto es 14 - 6?",
            ur: "14 - 6 کتنا ہے؟",
          },
          choices: [
            { en: "9", es: "9", ur: "9" },
            { en: "7", es: "7", ur: "7" },
            { en: "8", es: "8", ur: "8" },
            { en: "6", es: "6", ur: "6" },
          ],
          correctIndex: 2,
        },
      ],
    },
    {
      teks: "2.7A",
      cambridge: "Stage 2 · 2Nn5",
      emoji: "🔢",
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
      ],
      lesson: {
        en: "Even numbers end in 0, 2, 4, 6, or 8. You can always split them into two equal groups with nothing left over. Odd numbers end in 1, 3, 5, 7, or 9. When you try to make pairs, one is always left alone!",
        es: "Los números pares terminan en 0, 2, 4, 6 u 8. Siempre puedes dividirlos en dos grupos iguales sin que sobre nada. Los números impares terminan en 1, 3, 5, 7 o 9. ¡Cuando intentas hacer pares, siempre queda uno solo!",
        ur: "جفت نمبر 0، 2، 4، 6، یا 8 پر ختم ہوتے ہیں۔ انہیں ہمیشہ دو برابر حصوں میں بانٹا جا سکتا ہے۔ طاق نمبر 1، 3، 5، 7، یا 9 پر ختم ہوتے ہیں۔ جوڑے بناتے وقت ہمیشہ ایک اکیلا بچتا ہے!",
      },
      exercises: [
        {
          id: "ex-2.7A-1",
          type: "multiple-choice",
          prompt: {
            en: "Is 14 even or odd?",
            es: "¿14 es par o impar?",
            ur: "14 جفت ہے یا طاق؟",
          },
          choices: [
            { en: "Even", es: "Par", ur: "جفت" },
            { en: "Odd", es: "Impar", ur: "طاق" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-2.7A-2",
          type: "multiple-choice",
          prompt: {
            en: "Is 27 even or odd?",
            es: "¿27 es par o impar?",
            ur: "27 جفت ہے یا طاق؟",
          },
          choices: [
            { en: "Even", es: "Par", ur: "جفت" },
            { en: "Odd", es: "Impar", ur: "طاق" },
          ],
          correctIndex: 1,
        },
      ],
      quiz: [
        {
          id: "qz-2.7A-1",
          type: "multiple-choice",
          prompt: {
            en: "Which number is even?",
            es: "¿Cuál número es par?",
            ur: "کون سا نمبر جفت ہے؟",
          },
          choices: [
            { en: "13", es: "13", ur: "13" },
            { en: "17", es: "17", ur: "17" },
            { en: "20", es: "20", ur: "20" },
            { en: "9", es: "9", ur: "9" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.7A-2",
          type: "true-false",
          prompt: {
            en: "All numbers ending in 5 are even.",
            es: "Todos los números que terminan en 5 son pares.",
            ur: "5 پر ختم ہونے والے تمام نمبر جفت ہیں۔",
          },
          choices: [
            { en: "True ✅", es: "Verdadero ✅", ur: "صحیح ✅" },
            { en: "False ❌", es: "Falso ❌", ur: "غلط ❌" },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      teks: "2.8A",
      cambridge: "Stage 2 · 2Gs1",
      emoji: "🔷",
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
            en: "a round shape with no corners",
            es: "una figura redonda sin esquinas",
            ur: "گول شکل جس کے کوئی کونے نہ ہوں",
          },
        },
        {
          id: "square",
          emoji: "🟥",
          word: { en: "square", es: "cuadrado", ur: "مربع" },
          definition: {
            en: "a shape with 4 equal sides and 4 corners",
            es: "una figura con 4 lados iguales y 4 esquinas",
            ur: "وہ شکل جس کے 4 برابر اطراف اور 4 کونے ہوں",
          },
        },
        {
          id: "triangle",
          emoji: "🔺",
          word: { en: "triangle", es: "triángulo", ur: "تکون" },
          definition: {
            en: "a shape with 3 sides and 3 corners",
            es: "una figura con 3 lados y 3 esquinas",
            ur: "وہ شکل جس کے 3 اطراف اور 3 کونے ہوں",
          },
        },
        {
          id: "rectangle",
          emoji: "🟦",
          word: { en: "rectangle", es: "rectángulo", ur: "مستطیل" },
          definition: {
            en: "a shape with 4 sides and 4 corners — opposite sides are equal",
            es: "una figura con 4 lados y 4 esquinas — los lados opuestos son iguales",
            ur: "وہ شکل جس کے 4 اطراف اور 4 کونے ہوں — آمنے سامنے والے اطراف برابر ہوں",
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
        en: "Shapes are all around us! A **circle** is perfectly round — a pizza looks like a circle. A **triangle** has 3 sides — like a slice of pizza! A **square** has 4 equal sides — like a cracker. A **rectangle** has 4 sides too, but two sides are longer — like a door.",
        es: "¡Las figuras están por todas partes! Un **círculo** es perfectamente redondo — una pizza parece un círculo. Un **triángulo** tiene 3 lados — ¡como una rebanada de pizza! Un **cuadrado** tiene 4 lados iguales — como una galleta. Un **rectángulo** también tiene 4 lados, pero dos son más largos — como una puerta.",
        ur: "شکلیں ہمارے چاروں طرف ہیں! **دائرہ** بالکل گول ہوتا ہے — پیزا دائرے جیسا لگتا ہے۔ **تکون** کے 3 اطراف ہوتے ہیں — جیسے پیزا کا ٹکڑا! **مربع** کے 4 برابر اطراف ہوتے ہیں — جیسے بسکٹ۔ **مستطیل** کے بھی 4 اطراف ہوتے ہیں لیکن دو زیادہ لمبے ہوتے ہیں — جیسے دروازہ۔",
      },
      exercises: [
        {
          id: "ex-2.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "How many sides does a triangle have?",
            es: "¿Cuántos lados tiene un triángulo?",
            ur: "تکون کے کتنے اطراف ہوتے ہیں؟",
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
          id: "ex-2.8A-2",
          type: "true-false",
          prompt: {
            en: "A circle has 0 sides.",
            es: "Un círculo tiene 0 lados.",
            ur: "دائرے کے 0 اطراف ہوتے ہیں۔",
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
            en: "Which shape has 4 equal sides?",
            es: "¿Qué figura tiene 4 lados iguales?",
            ur: "کون سی شکل کے 4 برابر اطراف ہوتے ہیں؟",
          },
          choices: [
            { en: "circle", es: "círculo", ur: "دائرہ" },
            { en: "triangle", es: "triángulo", ur: "تکون" },
            { en: "square", es: "cuadrado", ur: "مربع" },
            { en: "rectangle", es: "rectángulo", ur: "مستطیل" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-2.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "A rectangle has how many sides?",
            es: "¿Cuántos lados tiene un rectángulo?",
            ur: "مستطیل کے کتنے اطراف ہوتے ہیں؟",
          },
          choices: [
            { en: "3", es: "3", ur: "3" },
            { en: "4", es: "4", ur: "4" },
            { en: "5", es: "5", ur: "5" },
            { en: "6", es: "6", ur: "6" },
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
};

export default grade2;
