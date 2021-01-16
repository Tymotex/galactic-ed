export const lesson1 = {
  lesson: "Click the Square",
  questions: [
    {
      shapes: [{ shape: "square", colour: 0 }],
      correctShape: "square",
      difficulty: 1,
      averageTime: 3,
    },
    {
      shapes: [
        { shape: "square", colour: 0 },
        { shape: "circle", colour: 200 },
      ],
      correctShape: "square",
      difficulty: 1,
      averageTime: 5,
    },
    {
      shapes: [
        { shape: "square", colour: 0 },
        { shape: "rectangle", colour: 45 },
        { shape: "rectangle", colour: 300 },
      ],
      correctShape: "square",
      difficulty: 2,
      averageTime: 6,
    },
  ],
};

export const lesson2 = {
  lesson: "Click the Circle",
  questions: [
    {
      shapes: [{ shape: "circle", colour: 200 }],
      correctShape: "circle",
      difficulty: 1,
      averageTime: 3,
    },
    {
      shapes: [
        { shape: "triangle", colour: 90 },
        { shape: "circle", colour: 200 },
      ],
      correctShape: "circle",
      difficulty: 1,
      averageTime: 5,
    },
    {
      shapes: [
        { shape: "circle", colour: 200 },
        { shape: "square", colour: 300 },
        { shape: "triangle", colour: 90 },
        { shape: "explosion", colour: 45 },
      ],
      correctShape: "circle",
      difficulty: 2,
      averageTime: 7,
    },
    {
      shapes: [
        { shape: "circle", colour: 200 },
        { shape: "oval", colour: 300 },
        { shape: "square", colour: 90 },
        { shape: "oval", colour: 45 },
      ],
      correctShape: "circle",
      difficulty: 3,
      averageTime: 7,
    },
  ],
};

export const lesson3 = {
    lesson: "Click the Triangle",
    questions: [
    {
      shapes: [{ shape: "triangle", colour: 300 }],
      correctShape: "triangle",
      difficulty: 1,
      averageTime: 2,
    },
    {
    shapes: [
      { shape: "circle", colour: 300 },
      { shape: "triangle", colour: 300 },
    ],
    correctShape: "triangle",
    difficulty: 2,
    averageTime: 5,
    },
    {
      shapes: [
        { shape: "circle", colour: 300 },
        { shape: "square", colour: 300 },
        { shape: "triangle", colour: 300 },
      ],
      correctShape: "triangle",
      difficulty: 2,
      averageTime: 7,
    },
    {
      shapes: [
        { shape: "circle", colour: 300 },
        { shape: "square", colour: 300 },
        { shape: "triangle", colour: 300 },
        { shape: "explosion", colour: 300 },
      ],
      correctShape: "triangle",
      difficulty: 3,
      averageTime: 10,
    }
};

export const topicAnalytics = [
    {
        label: "Numbers",
        data: [
            39, 40, 42, 45, 47, 41, 44, 40, 55, 58, 60, 55, 58, 61, 62, 57, 65, 68, 69, 75, 74, 72, 75, 77, 78, 79, 80, 75, 72, 82,
            85, 90, 91
        ],
        colour: "rgb(43, 189, 114)"
    },
    {
        label: "Colours",
        data: [
            41, 44, 40, 55, 58, 39, 40, 42, 45, 47, 61, 62, 60, 55, 58, 57, 65, 68, 69, 79, 77, 72, 79, 80, 81, 82, 85, 91, 92, 95
        ],
        colour: "rgb(149, 125, 189)"
    },
    {
        label: "Shapes",
        data: [15, 17, 19, 29, 18, 27, 20, 47, 34, 27, 35, 45, 32, 49, 50, 49, 63, 54, 41, 78, 74, 17, 59, 33, 74, 86, 84, 42, 39, 78],
        colour: "rgb(181, 230, 5)"
    },
    {
        label: "Actions",
        data: [16, 10, 18, 29, 30, 24, 25, 30, 34, 41, 41, 47, 31, 47, 18, 34, 36, 49, 53, 72, 66, 67, 56, 54, 68, 66, 39, 54, 81, 74],
        colour: "rgb(203, 8, 207)"
    },
    {
        label: "Emotions",
        data:  [8, 16, 19, 18, 18, 37, 34, 36, 32, 42, 27, 39, 33, 36, 21, 43, 22, 41, 56, 34, 41, 47, 61, 46, 56, 51, 66, 70, 65, 59],
        colour: "rgb(207, 30, 14)"
    }
]
