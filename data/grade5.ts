import { Grade } from "./types";

const grade5: Grade = {
  grade: 5,
  label: "Grade 5",
  emoji: "☀️",
  color: "#047857",
  units: [

    // ─── Unit 1: Multiplying Decimals ─────────────────────────────────────────
    {
      teks: "5.3E",
      cambridge: "Stage 5 · 5Nc3",
      emoji: "💵",
      title: {
        en: "Multiplying Decimals",
        es: "Multiplicar Decimales",
        ur: "اعشاریوں کی ضرب",
      },
      vocabulary: [
        {
          id: "decimal-product",
          emoji: "✖️",
          word: { en: "decimal product", es: "producto decimal", ur: "اعشاری حاصل ضرب" },
          definition: {
            en: "the answer when you multiply numbers that include decimals",
            es: "la respuesta cuando multiplicas números que incluyen decimales",
            ur: "اعشاریوں والے نمبروں کو ضرب کرنے کا جواب",
          },
        },
        {
          id: "place-value",
          emoji: "🔢",
          word: { en: "place value", es: "valor posicional", ur: "مقامی قدر" },
          definition: {
            en: "the value of a digit based on where it sits in a number — tenths, hundredths, etc.",
            es: "el valor de un dígito según su posición en un número — décimas, centésimas, etc.",
            ur: "کسی ہندسے کی قدر اس کی نمبر میں جگہ کے حساب سے — دسویں، سویں، وغیرہ",
          },
        },
        {
          id: "round",
          emoji: "🎯",
          word: { en: "round", es: "redondear", ur: "گول کرنا" },
          definition: {
            en: "replace a number with a close, simpler number — useful for estimating",
            es: "reemplazar un número con uno cercano y más simple — útil para estimar",
            ur: "نمبر کو قریبی، سادہ نمبر سے بدلنا — تخمینے کے لیے مفید",
          },
        },
        {
          id: "reasonable",
          emoji: "✅",
          word: { en: "reasonable", es: "razonable", ur: "معقول" },
          definition: {
            en: "an answer that makes sense — use estimation to check",
            es: "una respuesta que tiene sentido — usa la estimación para verificar",
            ur: "وہ جواب جو سمجھ میں آئے — جانچ کے لیے تخمینہ استعمال کرو",
          },
        },
      ],
      lesson: {
        en: "💵 **Multiplying decimals helps us budget for change!**\n\nWhen we multiply decimals, we use the same steps as whole number multiplication — then we place the decimal point.\n\n**Steps:**\n1. Multiply as if both numbers are whole numbers\n2. Count the total decimal places in both factors\n3. Place the decimal point that many places from the right in the product\n\n🧡 Example: Each solar panel saves $12.75 per month on electricity bills. How much does 6 panels save?\n12.75 × 6:\n- Multiply: 1275 × 6 = 7650\n- 12.75 has 2 decimal places → $76.50\n\n🌍 That's **$76.50 saved every month** — money that can go to food, healthcare, or education!\n\nEstimate to check: 13 × 6 = 78 → $76.50 is close to $78 ✅ Reasonable!",
        es: "💵 **¡Multiplicar decimales nos ayuda a presupuestar para el cambio!**\n\nCuando multiplicamos decimales, usamos los mismos pasos que con números enteros — luego colocamos el punto decimal.\n\n**Pasos:**\n1. Multiplica como si ambos números fueran enteros\n2. Cuenta los lugares decimales totales en ambos factores\n3. Coloca el punto decimal esa cantidad de lugares desde la derecha en el producto\n\n🧡 Ejemplo: Cada panel solar ahorra $12.75 al mes en electricidad. ¿Cuánto ahorran 6 paneles?\n12.75 × 6:\n- Multiplica: 1275 × 6 = 7650\n- 12.75 tiene 2 lugares decimales → $76.50\n\n🌍 ¡Eso es **$76.50 ahorrados cada mes** — dinero que puede ir a comida, salud o educación!\n\nEstima para verificar: 13 × 6 = 78 → $76.50 está cerca de $78 ✅ ¡Razonable!",
        ur: "💵 **اعشاریوں کی ضرب تبدیلی کے لیے بجٹ بنانے میں مدد کرتی ہے!**\n\nجب ہم اعشاریے ضرب کرتے ہیں تو پوری اعداد والے قدم استعمال کرتے ہیں — پھر اعشاری نقطہ رکھتے ہیں۔\n\n**قدم:**\n1. دونوں نمبروں کو پوری اعداد سمجھ کر ضرب کرو\n2. دونوں عاملوں میں اعشاری جگہوں کی کل تعداد گنو\n3. حاصل ضرب میں دائیں سے اتنی جگہ پر اعشاری نقطہ رکھو\n\n🧡 مثال: ہر سولر پینل بجلی کے بل میں ماہانہ $12.75 بچاتا ہے۔ 6 پینل کتنا بچاتے ہیں؟\n12.75 × 6:\n- ضرب کرو: 1275 × 6 = 7650\n- 12.75 میں 2 اعشاری جگہیں ہیں → $76.50\n\n🌍 یہ **ہر ماہ $76.50 کی بچت** ہے — جو پیسے کھانے، صحت یا تعلیم پر جا سکتے ہیں!\n\nجانچ کے لیے تخمینہ: 13 × 6 = 78 → $76.50 قریب ہے $78 کے ✅ معقول!",
      },
      exercises: [
        {
          id: "ex-5.3E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Seeds for the community garden cost $3.45 per packet. A class buys 8 packets. What is the total cost?",
            es: "🌱 Las semillas para el jardín comunitario cuestan $3.45 por sobre. Una clase compra 8 sobres. ¿Cuál es el costo total?",
            ur: "🌱 کمیونٹی گارڈن کے لیے بیجوں کی قیمت $3.45 فی پیکٹ ہے۔ ایک کلاس 8 پیکٹ خریدتی ہے۔ کل قیمت کیا ہے؟",
          },
          choices: [
            { en: "$27.50", es: "$27.50", ur: "$27.50" },
            { en: "$27.60", es: "$27.60", ur: "$27.60" },
            { en: "$28.60", es: "$28.60", ur: "$28.60" },
            { en: "$26.60", es: "$26.60", ur: "$26.60" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-5.3E-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ A recycling program earns $0.05 per bottle returned. Students returned 240 bottles. How much did they earn?",
            es: "♻️ Un programa de reciclaje gana $0.05 por botella devuelta. Los estudiantes devolvieron 240 botellas. ¿Cuánto ganaron?",
            ur: "♻️ ایک ری سائیکلنگ پروگرام واپس کی گئی فی بوتل $0.05 کماتا ہے۔ طلبا نے 240 بوتلیں واپس کیں۔ انہوں نے کتنا کمایا؟",
          },
          choices: [
            { en: "$12.00", es: "$12.00", ur: "$12.00" },
            { en: "$1.20", es: "$1.20", ur: "$1.20" },
            { en: "$120.00", es: "$120.00", ur: "$120.00" },
            { en: "$24.00", es: "$24.00", ur: "$24.00" },
          ],
          correctIndex: 0,
        },
        {
          id: "ex-5.3E-3",
          type: "true-false",
          prompt: {
            en: "☀️ A family's electricity bill drops by $8.50 per month after installing solar panels. Over 12 months, the total savings is 8.50 × 12 = $102.00.",
            es: "☀️ La factura de electricidad de una familia baja $8.50 por mes tras instalar paneles solares. En 12 meses, el ahorro total es 8.50 × 12 = $102.00.",
            ur: "☀️ سولر پینل لگانے کے بعد ایک خاندان کا بجلی کا بل ماہانہ $8.50 کم ہوتا ہے۔ 12 مہینوں میں کل بچت 8.50 × 12 = $102.00 ہے۔",
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
          id: "qz-5.3E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A school fundraiser sells reusable water bottles for $4.75 each to reduce plastic waste. They sell 24 bottles. How much money is raised?",
            es: "🌍 Una recaudación escolar vende botellas de agua reutilizables a $4.75 cada una para reducir los residuos de plástico. Venden 24 botellas. ¿Cuánto dinero se recauda?",
            ur: "🌍 ایک اسکول فنڈ ریزر پلاسٹک کا فضلہ کم کرنے کے لیے دوبارہ قابل استعمال پانی کی بوتلیں $4.75 فی بوتل بیچتا ہے۔ وہ 24 بوتلیں بیچتے ہیں۔ کتنے پیسے جمع ہوتے ہیں؟",
          },
          choices: [
            { en: "$113.00", es: "$113.00", ur: "$113.00" },
            { en: "$114.00", es: "$114.00", ur: "$114.00" },
            { en: "$112.00", es: "$112.00", ur: "$112.00" },
            { en: "$104.50", es: "$104.50", ur: "$104.50" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-5.3E-2",
          type: "multiple-choice",
          prompt: {
            en: "🌿 A food bank buys rice at $1.35 per pound. They purchase 56 pounds for community families. What is the total cost?",
            es: "🌿 Un banco de alimentos compra arroz a $1.35 la libra. Compran 56 libras para las familias de la comunidad. ¿Cuál es el costo total?",
            ur: "🌿 ایک فوڈ بینک $1.35 فی پاؤنڈ چاول خریدتا ہے۔ وہ کمیونٹی خاندانوں کے لیے 56 پاؤنڈ خریدتے ہیں۔ کل قیمت کیا ہے؟",
          },
          choices: [
            { en: "$75.60", es: "$75.60", ur: "$75.60" },
            { en: "$76.60", es: "$76.60", ur: "$76.60" },
            { en: "$74.60", es: "$74.60", ur: "$74.60" },
            { en: "$75.06", es: "$75.06", ur: "$75.06" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-5.3E-3",
          type: "multiple-choice",
          prompt: {
            en: "📚 A grant gives each of 15 classrooms $22.50 to buy books about climate and justice. What is the total grant amount?",
            es: "📚 Una beca da $22.50 a cada uno de los 15 salones para comprar libros sobre clima y justicia. ¿Cuál es el monto total de la beca?",
            ur: "📚 ایک گرانٹ موسم اور انصاف کے بارے میں کتابیں خریدنے کے لیے 15 کلاسوں میں سے ہر ایک کو $22.50 دیتی ہے۔ گرانٹ کی کل رقم کیا ہے؟",
          },
          choices: [
            { en: "$327.50", es: "$327.50", ur: "$327.50" },
            { en: "$337.50", es: "$337.50", ur: "$337.50" },
            { en: "$337.00", es: "$337.00", ur: "$337.00" },
            { en: "$327.00", es: "$327.00", ur: "$327.00" },
          ],
          correctIndex: 1,
        },
      ],
    },

    // ─── Unit 2: Volume ───────────────────────────────────────────────────────
    {
      teks: "5.6A",
      cambridge: "Stage 5 · 5Ml1",
      emoji: "📦",
      title: {
        en: "Volume",
        es: "Volumen",
        ur: "حجم",
      },
      vocabulary: [
        {
          id: "volume",
          emoji: "📦",
          word: { en: "volume", es: "volumen", ur: "حجم" },
          definition: {
            en: "the amount of space inside a 3D shape — measured in cubic units",
            es: "la cantidad de espacio dentro de una figura 3D — medida en unidades cúbicas",
            ur: "تین جہتی شکل کے اندر کی جگہ کی مقدار — مکعب اکائیوں میں ناپی جاتی ہے",
          },
        },
        {
          id: "cubic-unit",
          emoji: "🔲",
          word: { en: "cubic unit", es: "unidad cúbica", ur: "مکعب اکائی" },
          definition: {
            en: "a cube with sides of 1 unit — used to measure volume (like cm³ or ft³)",
            es: "un cubo con lados de 1 unidad — se usa para medir el volumen (como cm³ o pie³)",
            ur: "1 اکائی کے اطراف والا مکعب — حجم ناپنے کے لیے (جیسے cm³ یا فٹ³)",
          },
        },
        {
          id: "length-width-height",
          emoji: "📐",
          word: { en: "length × width × height", es: "largo × ancho × alto", ur: "لمبائی × چوڑائی × اونچائی" },
          definition: {
            en: "the formula for volume of a rectangular prism — V = l × w × h",
            es: "la fórmula del volumen de un prisma rectangular — V = l × a × h",
            ur: "مستطیل سطح مرتفع کے حجم کا فارمولہ — V = l × w × h",
          },
        },
        {
          id: "rectangular-prism",
          emoji: "📦",
          word: { en: "rectangular prism", es: "prisma rectangular", ur: "مستطیل سطح مرتفع" },
          definition: {
            en: "a 3D box shape with 6 rectangular faces — like a cereal box or a food crate",
            es: "una figura 3D en forma de caja con 6 caras rectangulares — como una caja de cereal o un cajón",
            ur: "6 مستطیل چہروں والی تین جہتی ڈبے کی شکل — جیسے اناج کا ڈبہ یا کریٹ",
          },
        },
      ],
      lesson: {
        en: "📦 **Volume helps us pack more food for more families!**\n\nVolume tells us how much fits **inside** a 3D shape. We use it to plan food boxes, water containers, and storage spaces.\n\n**Formula: V = length × width × height**\n\n🧡 Example: A food bank box is 2 ft long, 1.5 ft wide, and 1 ft tall.\nV = 2 × 1.5 × 1 = **3 cubic feet**\n\nThey need to fill a van that is 8 ft × 5 ft × 4 ft:\nV = 8 × 5 × 4 = **160 cubic feet** of space\n\nHow many boxes fit? 160 ÷ 3 ≈ 53 boxes — **53 families can get food!**\n\n🌍 Volume also matters for clean water:\nA water tank that is 4 m × 3 m × 2 m holds\n4 × 3 × 2 = **24 cubic meters** of water\n\nMath helps us make sure communities have enough food and clean water. That is real-world justice! ⚖️",
        es: "📦 **¡El volumen nos ayuda a empacar más comida para más familias!**\n\nEl volumen nos dice cuánto cabe **dentro** de una figura 3D. Lo usamos para planear cajas de comida, contenedores de agua y espacios de almacenamiento.\n\n**Fórmula: V = largo × ancho × alto**\n\n🧡 Ejemplo: Una caja de banco de alimentos mide 2 pies de largo, 1.5 pies de ancho y 1 pie de alto.\nV = 2 × 1.5 × 1 = **3 pies cúbicos**\n\nNecesitan llenar una van de 8 pie × 5 pie × 4 pie:\nV = 8 × 5 × 4 = **160 pies cúbicos** de espacio\n\n¿Cuántas cajas caben? 160 ÷ 3 ≈ 53 cajas — **¡53 familias pueden recibir comida!**\n\n🌍 El volumen también importa para el agua limpia:\nUn tanque de agua de 4 m × 3 m × 2 m contiene\n4 × 3 × 2 = **24 metros cúbicos** de agua\n\n¡Las matemáticas nos ayudan a asegurarnos de que las comunidades tengan suficiente comida y agua limpia. ¡Eso es justicia en el mundo real! ⚖️",
        ur: "📦 **حجم ہمیں زیادہ خاندانوں کے لیے زیادہ کھانا پیک کرنے میں مدد کرتا ہے!**\n\nحجم بتاتا ہے کہ تین جہتی شکل کے **اندر** کتنا سما سکتا ہے۔ ہم اسے کھانے کے بکسوں، پانی کے برتنوں اور ذخیرہ کی جگہوں کی منصوبہ بندی کے لیے استعمال کرتے ہیں۔\n\n**فارمولہ: V = لمبائی × چوڑائی × اونچائی**\n\n🧡 مثال: ایک فوڈ بینک کا بکسہ 2 فٹ لمبا، 1.5 فٹ چوڑا اور 1 فٹ اونچا ہے۔\nV = 2 × 1.5 × 1 = **3 مکعب فٹ**\n\nانہیں 8 فٹ × 5 فٹ × 4 فٹ کی وین بھرنی ہے:\nV = 8 × 5 × 4 = **160 مکعب فٹ** جگہ\n\nکتنے بکسے آتے ہیں؟ 160 ÷ 3 ≈ 53 بکسے — **53 خاندانوں کو کھانا مل سکتا ہے!**\n\n🌍 حجم صاف پانی کے لیے بھی اہم ہے:\n4 م × 3 م × 2 م کا پانی کا ٹینک\n4 × 3 × 2 = **24 مکعب میٹر** پانی رکھتا ہے\n\nریاضی ہمیں یقینی بنانے میں مدد کرتی ہے کہ کمیونٹیز کے پاس کافی کھانا اور صاف پانی ہو۔ یہ اصلی دنیا کا انصاف ہے! ⚖️",
      },
      exercises: [
        {
          id: "ex-5.6A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌿 A food donation box is 3 feet long, 2 feet wide, and 2 feet tall. What is the volume of the box?",
            es: "🌿 Una caja de donaciones de comida mide 3 pies de largo, 2 pies de ancho y 2 pies de alto. ¿Cuál es el volumen de la caja?",
            ur: "🌿 کھانے کا عطیہ بکسہ 3 فٹ لمبا، 2 فٹ چوڑا اور 2 فٹ اونچا ہے۔ بکسے کا حجم کیا ہے؟",
          },
          choices: [
            { en: "10 cubic feet", es: "10 pies cúbicos", ur: "10 مکعب فٹ" },
            { en: "7 cubic feet", es: "7 pies cúbicos", ur: "7 مکعب فٹ" },
            { en: "12 cubic feet", es: "12 pies cúbicos", ur: "12 مکعب فٹ" },
            { en: "14 cubic feet", es: "14 pies cúbicos", ur: "14 مکعب فٹ" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-5.6A-2",
          type: "multiple-choice",
          prompt: {
            en: "💧 A rainwater collection tank for the school garden is 5 m long, 3 m wide, and 2 m tall. How many cubic meters of water can it hold?",
            es: "💧 Un tanque de recolección de agua de lluvia para el jardín escolar mide 5 m de largo, 3 m de ancho y 2 m de alto. ¿Cuántos metros cúbicos de agua puede contener?",
            ur: "💧 اسکول گارڈن کے لیے بارش کا پانی جمع کرنے کا ٹینک 5 میٹر لمبا، 3 میٹر چوڑا اور 2 میٹر اونچا ہے۔ یہ کتنے مکعب میٹر پانی رکھ سکتا ہے؟",
          },
          choices: [
            { en: "25 cubic meters", es: "25 metros cúbicos", ur: "25 مکعب میٹر" },
            { en: "16 cubic meters", es: "16 metros cúbicos", ur: "16 مکعب میٹر" },
            { en: "30 cubic meters", es: "30 metros cúbicos", ur: "30 مکعب میٹر" },
            { en: "10 cubic meters", es: "10 metros cúbicos", ur: "10 مکعب میٹر" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-5.6A-3",
          type: "true-false",
          prompt: {
            en: "📦 A storage room for school supplies is 6 m long, 4 m wide, and 3 m high. Its volume is 6 × 4 × 3 = 72 cubic meters.",
            es: "📦 Un cuarto de almacenamiento de útiles escolares mide 6 m de largo, 4 m de ancho y 3 m de alto. Su volumen es 6 × 4 × 3 = 72 metros cúbicos.",
            ur: "📦 اسکول کے سامان کا ذخیرہ کمرہ 6 میٹر لمبا، 4 میٹر چوڑا اور 3 میٹر اونچا ہے۔ اس کا حجم 6 × 4 × 3 = 72 مکعب میٹر ہے۔",
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
          id: "qz-5.6A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A community center builds a storage room for emergency supplies. It is 9 m long, 5 m wide, and 4 m tall. What is the volume?",
            es: "🌍 Un centro comunitario construye un cuarto de almacenamiento para suministros de emergencia. Mide 9 m de largo, 5 m de ancho y 4 m de alto. ¿Cuál es el volumen?",
            ur: "🌍 ایک کمیونٹی سینٹر ہنگامی سامان کے لیے ذخیرہ کمرہ بناتا ہے۔ یہ 9 میٹر لمبا، 5 میٹر چوڑا اور 4 میٹر اونچا ہے۔ حجم کیا ہے؟",
          },
          choices: [
            { en: "160 cubic meters", es: "160 metros cúbicos", ur: "160 مکعب میٹر" },
            { en: "180 cubic meters", es: "180 metros cúbicos", ur: "180 مکعب میٹر" },
            { en: "200 cubic meters", es: "200 metros cúbicos", ur: "200 مکعب میٹر" },
            { en: "144 cubic meters", es: "144 metros cúbicos", ur: "144 مکعب میٹر" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-5.6A-2",
          type: "multiple-choice",
          prompt: {
            en: "📦 Two bins are used to sort recycling. Bin A: 4 ft × 3 ft × 2 ft. Bin B: 3 ft × 3 ft × 3 ft. Which bin has the greater volume?",
            es: "📦 Se usan dos contenedores para clasificar el reciclaje. Contenedor A: 4 pie × 3 pie × 2 pie. Contenedor B: 3 pie × 3 pie × 3 pie. ¿Cuál tiene mayor volumen?",
            ur: "📦 ری سائیکلنگ چھانٹنے کے لیے دو بن استعمال ہوتے ہیں۔ بن A: 4 فٹ × 3 فٹ × 2 فٹ۔ بن B: 3 فٹ × 3 فٹ × 3 فٹ۔ کس کا حجم زیادہ ہے؟",
          },
          choices: [
            { en: "Bin A — 24 cubic feet", es: "Contenedor A — 24 pies cúbicos", ur: "بن A — 24 مکعب فٹ" },
            { en: "Bin B — 27 cubic feet", es: "Contenedor B — 27 pies cúbicos", ur: "بن B — 27 مکعب فٹ" },
            { en: "They are equal", es: "Son iguales", ur: "وہ برابر ہیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-5.6A-3",
          type: "multiple-choice",
          prompt: {
            en: "💧 A school wants to store water in two tanks during a drought. Tank 1: 6 m × 4 m × 3 m. Tank 2: 5 m × 5 m × 3 m. What is the combined volume of both tanks?",
            es: "💧 Una escuela quiere almacenar agua en dos tanques durante una sequía. Tanque 1: 6 m × 4 m × 3 m. Tanque 2: 5 m × 5 m × 3 m. ¿Cuál es el volumen combinado de ambos tanques?",
            ur: "💧 ایک اسکول خشک سالی کے دوران دو ٹینکوں میں پانی ذخیرہ کرنا چاہتا ہے۔ ٹینک 1: 6 م × 4 م × 3 م۔ ٹینک 2: 5 م × 5 م × 3 م۔ دونوں ٹینکوں کا مشترک حجم کیا ہے؟",
          },
          choices: [
            { en: "147 cubic meters", es: "147 metros cúbicos", ur: "147 مکعب میٹر" },
            { en: "72 cubic meters", es: "72 metros cúbicos", ur: "72 مکعب میٹر" },
            { en: "147 square meters", es: "147 metros cuadrados", ur: "147 مربع میٹر" },
            { en: "72 square meters", es: "72 metros cuadrados", ur: "72 مربع میٹر" },
          ],
          correctIndex: 0,
        },
      ],
    },

    // ─── Unit 3: Numerical Expressions & Order of Operations ─────────────────
    {
      teks: "5.4E",
      cambridge: "Stage 5 · 5Nc4",
      emoji: "🔢",
      title: {
        en: "Order of Operations",
        es: "Orden de las Operaciones",
        ur: "کاروائیوں کی ترتیب",
      },
      vocabulary: [
        {
          id: "expression",
          emoji: "📝",
          word: { en: "expression", es: "expresión", ur: "اظہار" },
          definition: {
            en: "a math phrase with numbers and operations — like 3 × (4 + 2)",
            es: "una frase matemática con números y operaciones — como 3 × (4 + 2)",
            ur: "نمبروں اور عملوں کا ریاضی فقرہ — جیسے 3 × (4 + 2)",
          },
        },
        {
          id: "parentheses",
          emoji: "()",
          word: { en: "parentheses", es: "paréntesis", ur: "قوسین" },
          definition: {
            en: "grouping symbols () — always solve what is inside first",
            es: "símbolos de agrupación () — siempre resuelve lo que está adentro primero",
            ur: "گروپ بندی کے نشان () — ہمیشہ پہلے اندر کا حل کرو",
          },
        },
        {
          id: "order-of-ops",
          emoji: "📋",
          word: { en: "order of operations", es: "orden de las operaciones", ur: "کاروائیوں کی ترتیب" },
          definition: {
            en: "the rules for which math operation to do first: Parentheses → Multiply/Divide → Add/Subtract",
            es: "las reglas de qué operación matemática hacer primero: Paréntesis → Multiplicar/Dividir → Sumar/Restar",
            ur: "کون سی ریاضی کاروائی پہلے کرنی ہے اس کے اصول: قوسین → ضرب/تقسیم → جمع/تفریق",
          },
        },
        {
          id: "evaluate",
          emoji: "✅",
          word: { en: "evaluate", es: "evaluar", ur: "حل کرنا" },
          definition: {
            en: "find the value of an expression by solving step by step",
            es: "encontrar el valor de una expresión resolviéndola paso a paso",
            ur: "قدم بقدم حل کر کے اظہار کی قدر نکالنا",
          },
        },
      ],
      lesson: {
        en: "🔢 **Order of operations — math with rules for fairness!**\n\nWhen an expression has multiple operations, we follow rules so everyone gets the **same answer**.\n\n**The rules (left to right at each step):**\n1. **P** — Parentheses first ()\n2. **M/D** — Multiply and Divide\n3. **A/S** — Add and Subtract\n\n🧡 Example: A class collects cans for 3 days. Each day 2 students each bring 5 cans, plus the teacher adds 4 more.\nExpression: 3 × (2 × 5 + 4)\n- Inside parentheses first: 2 × 5 = 10, then 10 + 4 = 14\n- Then multiply: 3 × 14 = **42 cans!**\n\n🌍 Without the rules, different people would get different answers — and that's not fair. Order of operations makes math **consistent and just** for everyone. ⚖️",
        es: "🔢 **Orden de las operaciones — ¡matemáticas con reglas de justicia!**\n\nCuando una expresión tiene múltiples operaciones, seguimos reglas para que todos obtengan la **misma respuesta**.\n\n**Las reglas (de izquierda a derecha en cada paso):**\n1. **P** — Primero los paréntesis ()\n2. **M/D** — Multiplicar y Dividir\n3. **S/R** — Sumar y Restar\n\n🧡 Ejemplo: Una clase recolecta latas durante 3 días. Cada día 2 estudiantes traen 5 latas cada uno, y la maestra agrega 4 más.\nExpresión: 3 × (2 × 5 + 4)\n- Primero dentro del paréntesis: 2 × 5 = 10, luego 10 + 4 = 14\n- Luego multiplica: 3 × 14 = **¡42 latas!**\n\n🌍 Sin las reglas, diferentes personas obtendrían diferentes respuestas — y eso no es justo. El orden de las operaciones hace que las matemáticas sean **consistentes y justas** para todos. ⚖️",
        ur: "🔢 **کاروائیوں کی ترتیب — انصاف کے اصولوں والی ریاضی!**\n\nجب کسی اظہار میں کئی کاروائیاں ہوں تو ہم اصول اپناتے ہیں تاکہ سب کو **ایک جیسا جواب** ملے۔\n\n**اصول (ہر قدم میں بائیں سے دائیں):**\n1. **قوسین** پہلے ()\n2. **ضرب اور تقسیم**\n3. **جمع اور تفریق**\n\n🧡 مثال: ایک کلاس 3 دن ڈبے جمع کرتی ہے۔ ہر دن 2 طالب علم 5-5 ڈبے لاتے ہیں اور ٹیچر 4 مزید شامل کرتے ہیں۔\nاظہار: 3 × (2 × 5 + 4)\n- پہلے قوسین کے اندر: 2 × 5 = 10، پھر 10 + 4 = 14\n- پھر ضرب: 3 × 14 = **42 ڈبے!**\n\n🌍 اصولوں کے بغیر مختلف لوگوں کو مختلف جواب ملتے — اور یہ انصاف نہیں۔ کاروائیوں کی ترتیب ریاضی کو سب کے لیے **یکساں اور منصفانہ** بناتی ہے۔ ⚖️",
      },
      exercises: [
        {
          id: "ex-5.4E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌱 Evaluate: (8 + 4) × 3\nHint: A garden has 3 rows. Each row has 8 vegetable plants and 4 flower plants to attract bees.",
            es: "🌱 Evalúa: (8 + 4) × 3\nPista: Un jardín tiene 3 filas. Cada fila tiene 8 plantas de verduras y 4 de flores para atraer abejas.",
            ur: "🌱 حل کرو: (8 + 4) × 3\nاشارہ: ایک باغ میں 3 قطاریں ہیں۔ ہر قطار میں 8 سبزیوں کے پودے اور 4 پھولوں کے پودے ہیں جو شہد کی مکھیاں کھینچتے ہیں۔",
          },
          choices: [
            { en: "28", es: "28", ur: "28" },
            { en: "36", es: "36", ur: "36" },
            { en: "32", es: "32", ur: "32" },
            { en: "20", es: "20", ur: "20" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-5.4E-2",
          type: "multiple-choice",
          prompt: {
            en: "♻️ Evaluate: 50 − 4 × 6\nHint: 50 bottles were collected. 4 bags were filled with 6 bottles each. How many are left loose?",
            es: "♻️ Evalúa: 50 − 4 × 6\nPista: Se recogieron 50 botellas. Se llenaron 4 bolsas con 6 botellas cada una. ¿Cuántas quedan sueltas?",
            ur: "♻️ حل کرو: 50 − 4 × 6\nاشارہ: 50 بوتلیں جمع ہوئیں۔ 4 تھیلے 6-6 بوتلوں سے بھرے گئے۔ کتنی ڈھیلی رہیں؟",
          },
          choices: [
            { en: "276", es: "276", ur: "276" },
            { en: "20", es: "20", ur: "20" },
            { en: "26", es: "26", ur: "26" },
            { en: "44", es: "44", ur: "44" },
          ],
          correctIndex: 2,
        },
        {
          id: "ex-5.4E-3",
          type: "true-false",
          prompt: {
            en: "🌿 In the expression 3 + 5 × 2, you must multiply first: 5 × 2 = 10, then add 3. The answer is 13, not 16.",
            es: "🌿 En la expresión 3 + 5 × 2, debes multiplicar primero: 5 × 2 = 10, luego sumar 3. La respuesta es 13, no 16.",
            ur: "🌿 اظہار 3 + 5 × 2 میں، پہلے ضرب کرنی ہے: 5 × 2 = 10، پھر 3 جمع کرو۔ جواب 13 ہے، 16 نہیں۔",
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
          id: "qz-5.4E-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 Evaluate: (12 − 4) × (3 + 2)\nHint: This expression represents 5 teams each planting a number of trees.",
            es: "🌍 Evalúa: (12 − 4) × (3 + 2)\nPista: Esta expresión representa 5 equipos plantando cierta cantidad de árboles.",
            ur: "🌍 حل کرو: (12 − 4) × (3 + 2)\nاشارہ: یہ اظہار 5 ٹیموں کی نمائندگی کرتا ہے جو ایک تعداد میں درخت لگا رہی ہیں۔",
          },
          choices: [
            { en: "30", es: "30", ur: "30" },
            { en: "46", es: "46", ur: "46" },
            { en: "40", es: "40", ur: "40" },
            { en: "34", es: "34", ur: "34" },
          ],
          correctIndex: 2,
        },
        {
          id: "qz-5.4E-2",
          type: "multiple-choice",
          prompt: {
            en: "💰 A bake sale raised money: 6 × $5 + 3 × $8. What was the total amount raised for the food bank?",
            es: "💰 Una venta de pasteles recaudó dinero: 6 × $5 + 3 × $8. ¿Cuál fue el total recaudado para el banco de alimentos?",
            ur: "💰 ایک بیک سیل نے پیسے جمع کیے: 6 × $5 + 3 × $8۔ فوڈ بینک کے لیے کل کتنا جمع ہوا؟",
          },
          choices: [
            { en: "$54", es: "$54", ur: "$54" },
            { en: "$72", es: "$72", ur: "$72" },
            { en: "$48", es: "$48", ur: "$48" },
            { en: "$54", es: "$54", ur: "$54" },
          ],
          correctIndex: 0,
        },
        {
          id: "qz-5.4E-3",
          type: "multiple-choice",
          prompt: {
            en: "🤝 Which expression shows: 4 groups of volunteers, each group plants 3 trees in the morning and 5 trees in the afternoon?",
            es: "🤝 ¿Qué expresión muestra: 4 grupos de voluntarios, cada grupo planta 3 árboles en la mañana y 5 en la tarde?",
            ur: "🤝 کون سا اظہار ظاہر کرتا ہے: رضاکاروں کے 4 گروپ، ہر گروپ صبح 3 درخت اور دوپہر میں 5 درخت لگاتا ہے؟",
          },
          choices: [
            { en: "4 + 3 × 5", es: "4 + 3 × 5", ur: "4 + 3 × 5" },
            { en: "4 × 3 + 5", es: "4 × 3 + 5", ur: "4 × 3 + 5" },
            { en: "4 × (3 + 5)", es: "4 × (3 + 5)", ur: "4 × (3 + 5)" },
            { en: "(4 + 3) × 5", es: "(4 + 3) × 5", ur: "(4 + 3) × 5" },
          ],
          correctIndex: 2,
        },
      ],
    },

    // ─── Unit 4: Graphing on a Coordinate Plane ──────────────────────────────
    {
      teks: "5.8A",
      cambridge: "Stage 5 · 5Dh1",
      emoji: "🗺️",
      title: {
        en: "Coordinate Plane",
        es: "Plano de Coordenadas",
        ur: "متناسق میدان",
      },
      vocabulary: [
        {
          id: "coordinate-plane",
          emoji: "🗺️",
          word: { en: "coordinate plane", es: "plano de coordenadas", ur: "متناسق میدان" },
          definition: {
            en: "a grid made by two number lines crossing at right angles — used to locate points",
            es: "una cuadrícula formada por dos rectas numéricas que se cruzan en ángulo recto — usada para ubicar puntos",
            ur: "دو نمبر لائنوں سے بنی جالی جو سیدھے زاویے پر کاٹتی ہیں — نقاط تلاش کرنے کے لیے",
          },
        },
        {
          id: "x-axis",
          emoji: "↔️",
          word: { en: "x-axis", es: "eje x", ur: "x محور" },
          definition: {
            en: "the horizontal number line — goes left and right",
            es: "la recta numérica horizontal — va de izquierda a derecha",
            ur: "افقی نمبر لائن — بائیں اور دائیں جاتی ہے",
          },
        },
        {
          id: "y-axis",
          emoji: "↕️",
          word: { en: "y-axis", es: "eje y", ur: "y محور" },
          definition: {
            en: "the vertical number line — goes up and down",
            es: "la recta numérica vertical — va hacia arriba y hacia abajo",
            ur: "عمودی نمبر لائن — اوپر اور نیچے جاتی ہے",
          },
        },
        {
          id: "ordered-pair",
          emoji: "📍",
          word: { en: "ordered pair", es: "par ordenado", ur: "ترتیب شدہ جوڑا" },
          definition: {
            en: "two numbers (x, y) that locate a point — x tells how far right, y tells how far up",
            es: "dos números (x, y) que ubican un punto — x dice cuánto a la derecha, y dice cuánto arriba",
            ur: "دو نمبر (x, y) جو ایک نقطہ ڈھونڈتے ہیں — x بتاتا ہے کتنا دائیں، y بتاتا ہے کتنا اوپر",
          },
        },
        {
          id: "origin",
          emoji: "⭕",
          word: { en: "origin", es: "origen", ur: "اصل" },
          definition: {
            en: "the point (0, 0) where the x-axis and y-axis meet",
            es: "el punto (0, 0) donde se encuentran el eje x y el eje y",
            ur: "نقطہ (0, 0) جہاں x محور اور y محور ملتے ہیں",
          },
        },
      ],
      lesson: {
        en: "🗺️ **Coordinate planes help us map our community!**\n\nA coordinate plane is like a map grid. Every location has an address — an **ordered pair (x, y)**.\n\n**How to plot a point:**\n1. Start at the **origin** (0, 0)\n2. Move right along the x-axis by the x value\n3. Move up along the y-axis by the y value\n4. Mark the point!\n\n🧡 Example: A community map shows:\n- Food bank at (3, 5) → go right 3, up 5\n- Community garden at (7, 2) → go right 7, up 2\n- School at (1, 4) → go right 1, up 4\n\n🌍 City planners use coordinate planes to decide where to put new parks, recycling centers, and community gardens so they are **equal distance** from all neighborhoods — that's spatial justice!\n\nMath helps make cities fairer for everyone. 🌱",
        es: "🗺️ **¡Los planos de coordenadas nos ayudan a trazar un mapa de nuestra comunidad!**\n\nUn plano de coordenadas es como la cuadrícula de un mapa. Cada ubicación tiene una dirección — un **par ordenado (x, y)**.\n\n**Cómo graficar un punto:**\n1. Empieza en el **origen** (0, 0)\n2. Muévete a la derecha por el eje x según el valor de x\n3. Sube por el eje y según el valor de y\n4. ¡Marca el punto!\n\n🧡 Ejemplo: Un mapa comunitario muestra:\n- Banco de alimentos en (3, 5) → ve a la derecha 3, sube 5\n- Jardín comunitario en (7, 2) → ve a la derecha 7, sube 2\n- Escuela en (1, 4) → ve a la derecha 1, sube 4\n\n🌍 Los planificadores urbanos usan planos de coordenadas para decidir dónde poner nuevos parques, centros de reciclaje y jardines comunitarios para que estén a una **distancia igual** de todos los barrios — ¡eso es justicia espacial!\n\nLas matemáticas ayudan a hacer las ciudades más justas para todos. 🌱",
        ur: "🗺️ **متناسق میدان کمیونٹی کا نقشہ بنانے میں مدد کرتا ہے!**\n\nمتناسق میدان نقشے کی جالی کی طرح ہے۔ ہر جگہ کا ایک پتہ ہوتا ہے — ایک **ترتیب شدہ جوڑا (x, y)**۔\n\n**نقطہ کیسے ڈالیں:**\n1. **اصل** (0, 0) سے شروع کرو\n2. x کی قدر کے مطابق x محور پر دائیں چلو\n3. y کی قدر کے مطابق y محور پر اوپر چلو\n4. نقطہ لگاؤ!\n\n🧡 مثال: کمیونٹی کا نقشہ دکھاتا ہے:\n- فوڈ بینک (3, 5) پر → 3 دائیں، 5 اوپر\n- کمیونٹی گارڈن (7, 2) پر → 7 دائیں، 2 اوپر\n- اسکول (1, 4) پر → 1 دائیں، 4 اوپر\n\n🌍 شہر کے منصوبہ ساز متناسق میدان استعمال کرتے ہیں تاکہ فیصلہ کریں کہ نئے پارک، ری سائیکلنگ سینٹر اور کمیونٹی گارڈن کہاں بنائیں تاکہ وہ تمام محلوں سے **برابر فاصلے** پر ہوں — یہ مکانی انصاف ہے!\n\nریاضی شہروں کو سب کے لیے زیادہ منصفانہ بنانے میں مدد کرتی ہے۔ 🌱",
      },
      exercises: [
        {
          id: "ex-5.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "🗺️ On a community map, the recycling center is at point (4, 6). To get there from the origin (0,0), you move right ___ and up ___.",
            es: "🗺️ En un mapa comunitario, el centro de reciclaje está en el punto (4, 6). Para llegar desde el origen (0,0), te mueves ___ a la derecha y ___ hacia arriba.",
            ur: "🗺️ ایک کمیونٹی نقشے پر ری سائیکلنگ سینٹر نقطے (4, 6) پر ہے۔ اصل (0,0) سے وہاں پہنچنے کے لیے ___ دائیں اور ___ اوپر جاتے ہیں۔",
          },
          choices: [
            { en: "Right 6, Up 4", es: "Derecha 6, Arriba 4", ur: "6 دائیں، 4 اوپر" },
            { en: "Right 4, Up 6", es: "Derecha 4, Arriba 6", ur: "4 دائیں، 6 اوپر" },
            { en: "Right 4, Down 6", es: "Derecha 4, Abajo 6", ur: "4 دائیں، 6 نیچے" },
            { en: "Left 4, Up 6", es: "Izquierda 4, Arriba 6", ur: "4 بائیں، 6 اوپر" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-5.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A student plots two community gardens on a map: Garden A at (2, 8) and Garden B at (2, 3). What do both gardens have in common?",
            es: "🌱 Un estudiante traza dos jardines comunitarios en un mapa: Jardín A en (2, 8) y Jardín B en (2, 3). ¿Qué tienen en común ambos jardines?",
            ur: "🌱 ایک طالب علم نقشے پر دو کمیونٹی گارڈن ڈالتا ہے: گارڈن A، (2, 8) پر اور گارڈن B، (2, 3) پر۔ دونوں گارڈن میں کیا مشترک ہے؟",
          },
          choices: [
            { en: "Same y-coordinate", es: "Mismo valor de y", ur: "ایک جیسا y قدر" },
            { en: "Same x-coordinate", es: "Mismo valor de x", ur: "ایک جیسا x قدر" },
            { en: "Same location", es: "Misma ubicación", ur: "ایک جیسی جگہ" },
            { en: "Same distance from origin", es: "Misma distancia del origen", ur: "اصل سے ایک جیسا فاصلہ" },
          ],
          correctIndex: 1,
        },
        {
          id: "ex-5.8A-3",
          type: "true-false",
          prompt: {
            en: "📍 The ordered pair (0, 0) is called the origin — it is where the x-axis and y-axis intersect on a coordinate plane.",
            es: "📍 El par ordenado (0, 0) se llama el origen — es donde el eje x y el eje y se intersectan en un plano de coordenadas.",
            ur: "📍 ترتیب شدہ جوڑا (0, 0) اصل کہلاتا ہے — یہ وہ جگہ ہے جہاں متناسق میدان پر x محور اور y محور آپس میں کاٹتے ہیں۔",
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
          id: "qz-5.8A-1",
          type: "multiple-choice",
          prompt: {
            en: "🌍 A city planner places a new park at (5, 9) on a coordinate map. Which describes the location correctly?",
            es: "🌍 Un planificador urbano coloca un nuevo parque en (5, 9) en un mapa de coordenadas. ¿Cuál describe correctamente la ubicación?",
            ur: "🌍 ایک شہری منصوبہ ساز متناسق نقشے پر ایک نئے پارک کو (5, 9) پر رکھتا ہے۔ جگہ کو کون سا صحیح بیان کرتا ہے؟",
          },
          choices: [
            { en: "9 units right and 5 units up", es: "9 unidades a la derecha y 5 hacia arriba", ur: "9 اکائی دائیں اور 5 اوپر" },
            { en: "5 units right and 9 units up", es: "5 unidades a la derecha y 9 hacia arriba", ur: "5 اکائی دائیں اور 9 اوپر" },
            { en: "5 units up and 9 units right", es: "5 unidades arriba y 9 a la derecha", ur: "5 اکائی اوپر اور 9 دائیں" },
            { en: "9 units up and 5 units left", es: "9 unidades arriba y 5 a la izquierda", ur: "9 اکائی اوپر اور 5 بائیں" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-5.8A-2",
          type: "multiple-choice",
          prompt: {
            en: "🏫 Four community services are plotted: Food Bank (2,7), Garden (8,7), Library (2,3), Clinic (8,3). Which two services share the same x-coordinate?",
            es: "🏫 Se trazan cuatro servicios comunitarios: Banco de Alimentos (2,7), Jardín (8,7), Biblioteca (2,3), Clínica (8,3). ¿Cuáles dos servicios comparten el mismo valor de x?",
            ur: "🏫 چار کمیونٹی خدمات ڈالی گئی ہیں: فوڈ بینک (2,7)، گارڈن (8,7)، لائبریری (2,3)، کلینک (8,3)۔ کون سی دو خدمات ایک جیسا x قدر شیئر کرتی ہیں؟",
          },
          choices: [
            { en: "Food Bank and Garden", es: "Banco de Alimentos y Jardín", ur: "فوڈ بینک اور گارڈن" },
            { en: "Food Bank and Library", es: "Banco de Alimentos y Biblioteca", ur: "فوڈ بینک اور لائبریری" },
            { en: "Garden and Clinic", es: "Jardín y Clínica", ur: "گارڈن اور کلینک" },
            { en: "Library and Clinic", es: "Biblioteca y Clínica", ur: "لائبریری اور کلینک" },
          ],
          correctIndex: 1,
        },
        {
          id: "qz-5.8A-3",
          type: "multiple-choice",
          prompt: {
            en: "🌱 A student walks from the school at (1, 2) to the community garden at (7, 2). How many units did they move along the x-axis?",
            es: "🌱 Un estudiante camina desde la escuela en (1, 2) hasta el jardín comunitario en (7, 2). ¿Cuántas unidades se movió a lo largo del eje x?",
            ur: "🌱 ایک طالب علم اسکول (1, 2) سے کمیونٹی گارڈن (7, 2) تک چلتا ہے۔ وہ x محور پر کتنی اکائیاں چلا؟",
          },
          choices: [
            { en: "2 units", es: "2 unidades", ur: "2 اکائیاں" },
            { en: "8 units", es: "8 unidades", ur: "8 اکائیاں" },
            { en: "7 units", es: "7 unidades", ur: "7 اکائیاں" },
            { en: "6 units", es: "6 unidades", ur: "6 اکائیاں" },
          ],
          correctIndex: 3,
        },
      ],
    },

  ],
};

export default grade5;
