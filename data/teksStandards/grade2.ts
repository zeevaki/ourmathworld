// Verbatim source: Texas Essential Knowledge and Skills for Mathematics, §111.4, Grade 2.
// Cross-checked against the lead4ward Grade 2 Math Snapshot (v. 3.31.21).
// Used for the "TEKS" reference tab — defines and explains the official standard
// behind each unit, separate from our own instructional content.

import { TeksStrand } from "./grade1";

const grade2TeksStandards: TeksStrand[] = [
  {
    code: "2.1",
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
    code: "2.2",
    title: "Number and operations",
    overview:
      "The student applies mathematical process standards to understand how to represent and compare whole numbers, the relative position and magnitude of whole numbers, and relationships within the numeration system related to place value.",
    plainExplanation:
      "How well a second grader understands what a number represents — building, comparing, and locating numbers up to 1,200.",
    subStandards: {
      A: "use concrete and pictorial models to compose and decompose numbers up to 1,200 in more than one way as a sum of so many thousands, hundreds, tens, and ones",
      B: "use standard, word, and expanded forms to represent numbers up to 1,200",
      C: "generate a number that is greater than or less than a given whole number up to 1,200",
      D: "use place value to compare and order whole numbers up to 1,200 using comparative language, numbers, and symbols (>, <, or =)",
      E: "locate the position of a given whole number on an open number line",
      F: "name the whole number that corresponds to a specific point on a number line",
    },
  },
  {
    code: "2.3",
    title: "Number and operations — Fractions",
    overview:
      "The student applies mathematical process standards to recognize and represent fractional units and communicates how they are used to name parts of a whole.",
    plainExplanation: "A second grader's first real introduction to fractions — naming and counting equal parts of a whole.",
    subStandards: {
      A: "partition objects into equal parts and name the parts, including halves, fourths, and eighths, using words",
      B: "explain that the more fractional parts used to make a whole, the smaller the part; and the fewer the fractional parts, the larger the part",
      C: "use concrete models to count fractional parts beyond one whole using words and recognize how many parts it takes to equal one whole",
      D: "identify examples and non-examples of halves, fourths, and eighths",
    },
  },
  {
    code: "2.4",
    title: "Number and operations — Whole Number Operations",
    overview:
      "The student applies mathematical process standards to develop and use strategies and methods for whole number computations in order to solve addition and subtraction problems with efficiency and accuracy.",
    plainExplanation:
      "The core addition and subtraction skills of second grade — fluency with facts within 20, multi-digit strategies, word problems, and equations.",
    subStandards: {
      A: "recall basic facts to add and subtract within 20 with automaticity",
      B: "add up to four two-digit numbers and subtract two-digit numbers using mental strategies and algorithms based on knowledge of place value and properties of operations",
      C: "solve one-step and multi-step word problems involving addition and subtraction within 1,000 using a variety of strategies based on place value, including algorithms",
      D: "generate and solve problem situations for a given mathematical number sentence involving addition and subtraction of whole numbers within 1,000",
    },
  },
  {
    code: "2.5",
    title: "Number and operations",
    overview: "The student applies mathematical process standards to determine the value of coins in order to solve monetary transactions.",
    plainExplanation: "Finding the total value of a mixed group of coins, up to one dollar.",
    subStandards: {
      A: "determine the value of a collection of coins up to one dollar",
      B: "use the cent symbol, dollar sign, and the decimal point to name the value of a collection of coins",
    },
  },
  {
    code: "2.6",
    title: "Number and operations",
    overview:
      "The student applies mathematical process standards to connect repeated addition and subtraction to multiplication and division situations that involve equal groupings and shares.",
    plainExplanation: "The very first bridge toward multiplication and division, through equal groups and equal sharing.",
    subStandards: {
      A: "model, create, and describe contextual multiplication situations in which equivalent sets of concrete objects are joined",
      B: "model, create, and describe contextual division situations in which a set of concrete objects is separated into equivalent sets",
    },
  },
  {
    code: "2.7",
    title: "Algebraic reasoning",
    overview:
      "The student applies mathematical process standards to identify and apply number patterns within properties of numbers and operations in order to describe relationships.",
    plainExplanation: "Number patterns and relationships — even/odd, 10 or 100 more/less, and solving for an unknown in a word problem.",
    subStandards: {
      A: "determine whether a number up to 40 is even or odd using pairings of objects to represent the number",
      B: "use an understanding of place value to determine the number that is 10 or 100 more or less than a given number up to 1,200",
      C: "represent and solve addition and subtraction word problems where unknowns may be any one of the terms in the problem",
    },
  },
  {
    code: "2.8",
    title: "Geometry and measurement",
    overview:
      "The student applies mathematical process standards to analyze attributes of two-dimensional shapes and three-dimensional solids to develop generalizations about their properties.",
    plainExplanation: "Identifying, classifying, building, and taking apart two- and three-dimensional shapes.",
    subStandards: {
      A: "create two-dimensional shapes based on given attributes",
      B: "classify and sort three-dimensional solids, including spheres, cones, cylinders, rectangular prisms (including cubes as special rectangular prisms), and triangular prisms, based on attributes using formal geometric language",
      C: "classify and sort polygons with 12 or fewer sides according to attributes, including identifying the number of sides and number of vertices",
      D: "compose two-dimensional shapes and three-dimensional solids with given properties or attributes",
      E: "decompose two-dimensional shapes such as cutting out a square from a rectangle, dividing a shape in half, or partitioning a rectangle into identical triangles and identify the resulting geometric parts",
    },
  },
  {
    code: "2.9",
    title: "Geometry and measurement",
    overview: "The student applies mathematical process standards to select and use units to describe length, area, and time.",
    plainExplanation: "Measuring length with real tools, understanding area as covering a shape with square units, and telling time to the minute.",
    subStandards: {
      A: "find the length of objects using concrete models for standard units of length",
      B: "describe the inverse relationship between the size of the unit and the number of units needed to equal the length of an object",
      C: "represent whole numbers as distances from any given location on a number line",
      D: "determine the length of an object to the nearest marked unit using rulers, yardsticks, meter sticks, or measuring tapes",
      E: "determine a solution to a problem involving length, including estimating lengths",
      F: "use concrete models of square units to find the area of a rectangle by covering it with no gaps or overlaps, counting to find the total number of square units, and describing the measurement using a number and the unit",
      G: "read and write time to the nearest one-minute increment using analog and digital clocks and distinguish between a.m. and p.m.",
    },
  },
  {
    code: "2.10",
    title: "Data analysis",
    overview: "The student applies mathematical process standards to organize data to make it useful for interpreting information and solving problems.",
    plainExplanation: "Building picture and bar graphs, then reading, questioning, and predicting from them.",
    subStandards: {
      A: "explain that the length of a bar in a bar graph or the number of pictures in a pictograph represents the number of data points for a given category",
      B: "organize a collection of data with up to four categories using pictographs and bar graphs with intervals of one or more",
      C: "write and solve one-step word problems involving addition or subtraction using data represented within pictographs and bar graphs with intervals of one",
      D: "draw conclusions and make predictions from information in a graph",
    },
  },
  {
    code: "2.11",
    title: "Personal financial literacy",
    overview: "The student applies mathematical process standards to manage one's financial resources effectively for lifetime financial security.",
    plainExplanation: "The next step up from Grade 1's money basics — saving over time, deposits/withdrawals, and a first look at borrowing, lending, and producers vs. consumers.",
    subStandards: {
      A: "calculate how money saved can accumulate into a larger amount over time",
      B: "explain that saving is an alternative to spending",
      C: "distinguish between a deposit and a withdrawal",
      D: "identify examples of borrowing and distinguish between responsible and irresponsible borrowing",
      E: "identify examples of lending and use concepts of benefits and costs to evaluate lending decisions",
      F: "differentiate between producers and consumers and calculate the cost to produce a simple item",
    },
  },
];

export default grade2TeksStandards;
