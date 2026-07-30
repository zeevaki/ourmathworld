// Verbatim source: Texas Essential Knowledge and Skills for Mathematics, §111.3, Grade 1.
// Used for the "TEKS" reference tab — defines and explains the official standard
// behind each unit, separate from our own instructional content.

export type TeksStrand = {
  code: string; // e.g. "1.2"
  title: string; // e.g. "Number and operations"
  overview: string; // the "The student applies..." sentence, verbatim from TEA
  plainExplanation: string; // our own plain-language framing, not official TEA text
  subStandards: Record<string, string>; // letter -> official text, e.g. { B: "use concrete..." }
};

const grade1TeksStandards: TeksStrand[] = [
  {
    code: "1.1",
    title: "Mathematical process standards",
    overview: "The student uses mathematical processes to acquire and demonstrate mathematical understanding.",
    plainExplanation:
      "These aren't a separate topic taught on their own day — they describe the habits (problem-solving, choosing tools, explaining reasoning) students practice inside every other standard below.",
    subStandards: {
      A: "apply mathematics to problems arising in everyday life, society, and the workplace",
      B: "use a problem-solving model that incorporates analyzing given information, formulating a plan or strategy, determining a solution, justifying the solution, and evaluating the problem-solving process and the reasonableness of the solution",
      C: "select tools, including real objects, manipulatives, paper and pencil, and technology as appropriate, and techniques, including mental math, estimation, and number sense as appropriate, to solve problems",
      D: "communicate mathematical ideas, reasoning, and their implications using multiple representations, including symbols, diagrams, graphs, and language as appropriate",
      E: "create and use representations to organize, record, and communicate mathematical ideas",
      F: "analyze mathematical relationships to connect and communicate mathematical ideas",
      G: "display, explain, and justify mathematical ideas and arguments using precise mathematical language in written or oral communication",
    },
  },
  {
    code: "1.2",
    title: "Number and operations",
    overview:
      "The student applies mathematical process standards to represent and compare whole numbers, the relative position and magnitude of whole numbers, and relationships within the numeration system related to place value.",
    plainExplanation:
      "How well a first grader understands what a number actually represents — building, comparing, and ordering numbers up to 120.",
    subStandards: {
      A: "recognize instantly the quantity of structured arrangements",
      B: "use concrete and pictorial models to compose and decompose numbers up to 120 in more than one way as so many hundreds, so many tens, and so many ones",
      C: "use objects, pictures, and expanded and standard forms to represent numbers up to 120",
      D: "generate a number that is greater than or less than a given whole number up to 120",
      E: "use place value to compare whole numbers up to 120 using comparative language",
      F: "order whole numbers up to 120 using place value and open number lines",
      G: "represent the comparison of two numbers to 100 using the symbols >, <, or =",
    },
  },
  {
    code: "1.3",
    title: "Number and operations",
    overview:
      "The student applies mathematical process standards to develop and use strategies for whole number addition and subtraction computations in order to solve problems.",
    plainExplanation:
      "The strategies students use to add and subtract, and to solve real word problems, within 20.",
    subStandards: {
      A: "use concrete and pictorial models to determine the sum of a multiple of 10 and a one-digit number in problems up to 99",
      B: "use objects and pictorial models to solve word problems involving joining, separating, and comparing sets within 20 and unknowns as any one of the terms in the problem such as 2 + 4 = [ ]; 3 + [ ] = 7; and 5 = [ ] - 3",
      C: "compose 10 with two or more addends with and without concrete objects",
      D: "apply basic fact strategies to add and subtract within 20, including making 10 and decomposing a number leading to a 10",
      E: "explain strategies used to solve addition and subtraction problems up to 20 using spoken words, objects, pictorial models, and number sentences",
      F: "generate and solve problem situations when given a number sentence involving addition or subtraction of numbers within 20",
    },
  },
  {
    code: "1.4",
    title: "Number and operations",
    overview:
      "The student applies mathematical process standards to identify coins, their values, and the relationships among them in order to recognize the need for monetary transactions.",
    plainExplanation:
      "Recognizing U.S. coins by value and using skip-counting to find the value of a group of them.",
    subStandards: {
      A: "identify U.S. coins, including pennies, nickels, dimes, and quarters, by value and describe the relationships among them",
      B: "write a number with the cent symbol to describe the value of a coin",
      C: "use relationships to count by twos, fives, and tens to determine the value of a collection of pennies, nickels, and/or dimes",
    },
  },
  {
    code: "1.5",
    title: "Algebraic reasoning",
    overview:
      "The student applies mathematical process standards to identify and apply number patterns within properties of numbers and operations in order to describe relationships.",
    plainExplanation:
      "Number patterns and the properties that make addition and subtraction work — counting sequences, 10 more/10 less, and using the equal sign and unknowns correctly.",
    subStandards: {
      A: "recite numbers forward and backward from any given number between 1 and 120",
      B: "skip count by twos, fives, and tens to determine the total number of objects up to 120 in a set",
      C: "use relationships to determine the number that is 10 more and 10 less than a given number up to 120",
      D: "represent word problems involving addition and subtraction of whole numbers up to 20 using concrete and pictorial models and number sentences",
      E: "understand that the equal sign represents a relationship where expressions on each side of the equal sign represent the same value(s)",
      F: "determine the unknown whole number in an addition or subtraction equation when the unknown may be any one of the three or four terms in the equation",
      G: "apply properties of operations to add and subtract two or three numbers",
    },
  },
  {
    code: "1.6",
    title: "Geometry and measurement",
    overview:
      "The student applies mathematical process standards to analyze attributes of two-dimensional shapes and three-dimensional solids to develop generalizations about their properties.",
    plainExplanation:
      "Identifying, describing, building, and dividing two- and three-dimensional shapes.",
    subStandards: {
      A: "classify and sort regular and irregular two-dimensional shapes based on attributes using informal geometric language",
      B: "distinguish between attributes that define a two-dimensional or three-dimensional figure and attributes that do not define the shape",
      C: "create two-dimensional figures, including circles, triangles, rectangles, and squares, as special rectangles, rhombuses, and hexagons",
      D: "identify two-dimensional shapes, including circles, triangles, rectangles, and squares, as special rectangles, rhombuses, and hexagons and describe their attributes using formal geometric language",
      E: "identify three-dimensional solids, including spheres, cones, cylinders, rectangular prisms (including cubes), and triangular prisms, and describe their attributes using formal geometric language",
      F: "compose two-dimensional shapes by joining two, three, or four figures to produce a target shape in more than one way if possible",
      G: "partition two-dimensional figures into two and four fair shares or equal parts and describe the parts using words",
      H: "identify examples and non-examples of halves and fourths",
    },
  },
  {
    code: "1.7",
    title: "Geometry and measurement",
    overview: "The student applies mathematical process standards to select and use units to describe length and time.",
    plainExplanation: "Measuring length with real units and telling time to the hour and half hour.",
    subStandards: {
      A: "use measuring tools to measure the length of objects to reinforce the continuous nature of linear measurement",
      B: "illustrate that the length of an object is the number of same-size units of length that, when laid end-to-end with no gaps or overlaps, reach from one end of the object to the other",
      C: "measure the same object/distance with units of two different lengths and describe how and why the measurements differ",
      D: "describe a length to the nearest whole unit using a number and a unit",
      E: "tell time to the hour and half hour using analog and digital clocks",
    },
  },
  {
    code: "1.8",
    title: "Data analysis",
    overview: "The student applies mathematical process standards to organize data to make it useful for interpreting information and solving problems.",
    plainExplanation: "Collecting information, turning it into a picture or bar graph, and answering questions from that graph.",
    subStandards: {
      A: "collect, sort, and organize data in up to three categories using models/representations such as tally marks or T-charts",
      B: "use data to create picture and bar-type graphs",
      C: "draw conclusions and generate and answer questions using information from picture and bar-type graphs",
    },
  },
  {
    code: "1.9",
    title: "Personal financial literacy",
    overview: "The student applies mathematical process standards to manage one's financial resources effectively for lifetime financial security.",
    plainExplanation: "The very first money concepts — income, wants vs. needs, spending vs. saving, and charitable giving.",
    subStandards: {
      A: "define money earned as income",
      B: "identify income as a means of obtaining goods and services, oftentimes making choices between wants and needs",
      C: "distinguish between spending and saving",
      D: "consider charitable giving",
    },
  },
];

export default grade1TeksStandards;
