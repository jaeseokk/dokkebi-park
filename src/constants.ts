import {range} from '@src/utils'

export const APP_WIDTH = 1024
export const APP_HEIGHT = 576

export const COLLISION_SYMBOL = 46657

export const TILE_SIZE = 32

export const TILE_MAP_ROW_SIZE = 96

export const PLAYER_SIZE = {
  width: 16,
  height: 20,
}

export const OFFSET = {
  x: 860,
  y: 400,
}

export const VIDEOS = [
  'https://youtu.be/hIe7SBGCIg4',
  'https://youtu.be/SWHpajFlr9s',
  'https://youtu.be/yoWMu_TxfEE',
  'https://youtu.be/80gyOuzswHg',
  'https://youtu.be/9uYy9o3JKSU',
  'https://youtu.be/l1z9Fc3aR20',
  'https://youtu.be/hP81o1-7-go',
  'https://youtu.be/Ny-csc3tGwY',
  'https://youtu.be/P17_urwCukQ',
  'https://youtu.be/vqiENXphx1I',
]

export interface MobConfig {
  id: string
  scale?: number
  position: {x: number; y: number}
  boundaryWidthScale?: number
  boundaryHeightScale?: number
  boundaryHeightPadding?: number
  boundaryMarginBottom?: number
}

export const MOB_CONFIG_LIST: MobConfig[] = [
  {
    id: 'AD1',
    position: {
      x: 929,
      y: 702,
    },
    scale: 1,
  },
  {
    id: 'AD2',
    scale: 1.5,
    position: {
      x: 437,
      y: 319,
    },
  },
  {
    id: 'AD3',
    position: {
      x: 1130,
      y: 781,
    },
    scale: 1,
  },
  {
    id: 'AD4',
    scale: 0.7,
    position: {
      x: 826,
      y: 898,
    },
  },
  {
    id: 'AD5',
    scale: 0.4,
    position: {
      x: 580,
      y: 844,
    },
  },
  {
    id: 'BD1',
    scale: 0.3,
    position: {
      x: 1218,
      y: 349,
    },
  },
  {
    id: 'BD2',
    scale: 0.3,
    position: {
      x: 1235,
      y: 185,
    },
  },
  {
    id: 'BD3',
    scale: 0.3,
    position: {
      x: 1290,
      y: 360,
    },
  },
  {
    id: 'BD4',
    scale: 0.5,
    position: {
      x: 1217,
      y: 460,
    },
  },
  {
    id: 'BD5',
    scale: 0.3,
    position: {
      x: 1487,
      y: 209,
    },
  },
  {
    id: 'BD6',
    scale: 0.3,
    position: {
      x: 1457,
      y: 203,
    },
  },
  {
    id: 'BD7',
    scale: 0.4,
    position: {
      x: 1154,
      y: 390,
    },
  },
  {
    id: 'BD8',
    scale: 0.5,
    position: {
      x: 1128,
      y: 332,
    },
  },
  {
    id: 'BD9',
    position: {
      x: 1437,
      y: 372,
    },
    scale: 0.5,
  },
  {
    id: 'BD10',
    position: {
      x: 1129,
      y: 248,
    },
    scale: 0.3,
  },
  {
    id: 'BD11',
    position: {
      x: 1173,
      y: 213,
    },
    scale: 0.3,
  },
  {
    id: 'BD12',
    position: {
      x: 1246,
      y: 260,
    },
    scale: 0.3,
  },
  {
    id: 'BD13',
    position: {
      x: 1209,
      y: 260,
    },
    scale: 0.3,
  },
  {
    id: 'BD14',
    position: {
      x: 1330,
      y: 171,
    },
    scale: 0.3,
  },
  {
    id: 'BD15',
    position: {
      x: 1291,
      y: 175,
    },
    scale: 0.3,
  },
  {
    id: 'BD16',
    position: {
      x: 1208,
      y: 121,
    },
    scale: 0.3,
  },
  {
    id: 'BD17',
    position: {
      x: 1267,
      y: 102,
    },
    scale: 0.3,
  },
  {
    id: 'BD18',
    position: {
      x: 1371,
      y: 99,
    },
    scale: 0.4,
  },
  {
    id: 'BD19',
    position: {
      x: 1424,
      y: 119,
    },
    scale: 0.4,
  },
  {
    id: 'BD20',
    position: {
      x: 1434,
      y: 258,
    },
    scale: 0.3,
  },
  {
    id: 'BD21',
    position: {
      x: 1333,
      y: 290,
    },
    scale: 0.4,
  },
  {
    id: 'BD22',
    position: {
      x: 1375,
      y: 222,
    },
    scale: 0.3,
  },
  {
    id: 'BD23',
    position: {
      x: 1485,
      y: 314,
    },
    scale: 0.4,
  },
  {
    id: 'BD24',
    position: {
      x: 1357,
      y: 443,
    },
    scale: 0.6,
  },
  {
    id: 'CD1',
    position: {
      x: 1504,
      y: 435,
    },
    scale: 0.4,
  },
  {
    id: 'CD2',
    position: {
      x: 1610,
      y: 181,
    },
    scale: 1,
  },
  {
    id: 'CD3',
    position: {
      x: 1559,
      y: 394,
    },
    scale: 0.4,
  },
  {
    id: 'CD4',
    position: {
      x: 1611,
      y: 414,
    },
    scale: 0.4,
  },
  {
    id: 'CD5',
    position: {
      x: 1863,
      y: 418,
    },
    scale: 0.4,
  },
  {
    id: 'CD6',
    position: {
      x: 1940,
      y: 410,
    },
    scale: 0.3,
  },
  {
    id: 'CD7',
    position: {
      x: 1983,
      y: 406,
    },
    scale: 0.3,
  },
  {
    id: 'CD8',
    position: {
      x: 2033,
      y: 391,
    },
    scale: 0.3,
  },
  {
    id: 'CD9',
    position: {
      x: 2080,
      y: 380,
    },
    scale: 0.3,
  },
  {
    id: 'CD10',
    position: {
      x: 2139,
      y: 369,
    },
    scale: 0.3,
  },
  {
    id: 'CD11',
    position: {
      x: 2321,
      y: 392,
    },
    scale: 0.3,
  },
  {
    id: 'CD12',
    position: {
      x: 2759,
      y: 368,
    },
    scale: 0.3,
  },
  {
    id: 'CD13',
    position: {
      x: 2672,
      y: 583,
    },
    scale: 0.3,
  },
  {
    id: 'CD14',
    position: {
      x: 2300,
      y: 457,
    },
    scale: 0.3,
  },
  {
    id: 'CD15',
    position: {
      x: 2350,
      y: 449,
    },
    scale: 0.3,
  },
  {
    id: 'CD16',
    position: {
      x: 2372,
      y: 501,
    },
    scale: 0.3,
  },
  {
    id: 'CD17',
    position: {
      x: 2326,
      y: 503,
    },
    scale: 0.3,
  },
  {
    id: 'CD18',
    position: {
      x: 2334,
      y: 539,
    },
    scale: 0.3,
  },
  {
    id: 'CD19',
    position: {
      x: 2289,
      y: 691,
    },
    scale: 0.3,
  },
  {
    id: 'CD20',
    position: {
      x: 2465,
      y: 501,
    },
    scale: 0.5,
  },
  {
    id: 'CD21',
    position: {
      x: 2585,
      y: 528,
    },
    scale: 0.5,
  },
  {
    id: 'CD22',
    position: {
      x: 2333,
      y: 608,
    },
    scale: 0.5,
  },
  {
    id: 'CD23',
    position: {
      x: 2565,
      y: 678,
    },
    scale: 0.3,
  },
  {
    id: 'CD24',
    position: {
      x: 2541,
      y: 712,
    },
    scale: 0.3,
  },
  {
    id: 'CD25',
    position: {
      x: 2598,
      y: 691,
    },
    scale: 0.3,
  },
  {
    id: 'CD26',
    position: {
      x: 2506,
      y: 735,
    },
    scale: 0.3,
  },
  {
    id: 'CD27',
    position: {
      x: 2344,
      y: 761,
    },
    scale: 0.3,
  },
  {
    id: 'CD28',
    position: {
      x: 2358,
      y: 726,
    },
    scale: 0.3,
  },
  {
    id: 'CD29',
    position: {
      x: 2315,
      y: 731,
    },
    scale: 0.3,
  },
  {
    id: 'CD30',
    position: {
      x: 2823,
      y: 247,
    },
    scale: 0.8,
  },
  {
    id: 'CD31',
    position: {
      x: 2812,
      y: 108,
    },
    scale: 1.3,
  },
  {
    id: 'CD32',
    position: {
      x: 2656,
      y: 180,
    },
    scale: 0.6,
  },
  {
    id: 'CT1',
    position: {
      x: 2531,
      y: 330,
    },
    scale: 1,
  },
  {
    id: 'CD33',
    position: {
      x: 2368,
      y: 855,
    },
    scale: 0.6,
  },
  {
    id: 'CD34',
    position: {
      x: 2566,
      y: 1004,
    },
    scale: 0.5,
  },
  {
    id: 'CD35',
    position: {
      x: 2833,
      y: 559,
    },
    scale: 0.5,
  },
  {
    id: 'CD36',
    position: {
      x: 2760,
      y: 733,
    },
    scale: 0.5,
  },
  {
    id: 'CD37',
    position: {
      x: 2482,
      y: 1234,
    },
    scale: 0.7,
  },
  {
    id: 'CD38',
    position: {
      x: 2747,
      y: 621,
    },
    scale: 0.5,
  },
  {
    id: 'CD39',
    position: {
      x: 2399,
      y: 645,
    },
    scale: 0.6,
  },
  {
    id: 'CD40',
    position: {
      x: 2599,
      y: 767,
    },
    scale: 0.6,
  },
  {
    id: 'CD41',
    position: {
      x: 2504,
      y: 1003,
    },
    scale: 0.6,
  },
  {
    id: 'CD42',
    position: {
      x: 2790,
      y: 828,
    },
    scale: 0.5,
  },
  {
    id: 'CD43',
    position: {
      x: 2223,
      y: 851,
    },
    scale: 0.6,
  },
  {
    id: 'CD44',
    position: {
      x: 2287,
      y: 848,
    },
    scale: 0.6,
  },
  {
    id: 'CD45',
    position: {
      x: 2755,
      y: 1113,
    },
    scale: 0.6,
  },
  {
    id: 'CD46',
    position: {
      x: 2316,
      y: 981,
    },
    scale: 0.6,
  },
  {
    id: 'CD47',
    position: {
      x: 2250,
      y: 1022,
    },
    scale: 0.6,
  },
  {
    id: 'CD48',
    position: {
      x: 2354,
      y: 1117,
    },
    scale: 0.6,
  },
  {
    id: 'CD49',
    position: {
      x: 2222,
      y: 1154,
    },
    scale: 0.6,
  },
  {
    id: 'CD50',
    position: {
      x: 2652,
      y: 1063,
    },
    scale: 0.5,
  },
  {
    id: 'CD51',
    position: {
      x: 2745,
      y: 1262,
    },
    scale: 0.7,
  },
  {
    id: 'CD52',
    position: {
      x: 2738,
      y: 902,
    },
    scale: 0.7,
  },
  {
    id: 'CD53',
    position: {
      x: 2796,
      y: 1043,
    },
    scale: 0.5,
  },
  {
    id: 'CD54',
    position: {
      x: 2874,
      y: 949,
    },
    scale: 0.4,
  },
  {
    id: 'CD55',
    position: {
      x: 2892,
      y: 826,
    },
    scale: 0.5,
  },
  {
    id: 'CD56',
    position: {
      x: 2869,
      y: 726,
    },
    scale: 0.5,
  },
  {
    id: 'CD57',
    position: {
      x: 2900,
      y: 626,
    },
    scale: 0.3,
  },
  {
    id: 'CD58',
    position: {
      x: 2840,
      y: 660,
    },
    scale: 0.3,
  },
  {
    id: 'CD59',
    position: {
      x: 2706,
      y: 718,
    },
    scale: 0.3,
  },
  {
    id: 'CD60',
    position: {
      x: 2809,
      y: 677,
    },
    scale: 0.3,
  },
  {
    id: 'CD61',
    position: {
      x: 2786,
      y: 468,
    },
    scale: 0.3,
  },
  {
    id: 'CD62',
    position: {
      x: 2830,
      y: 485,
    },
    scale: 0.3,
  },
  {
    id: 'CD63',
    position: {
      x: 2870,
      y: 493,
    },
    scale: 0.3,
  },
  {
    id: 'CD64',
    position: {
      x: 2803,
      y: 411,
    },
    scale: 0.3,
  },
  {
    id: 'CD65',
    position: {
      x: 2852,
      y: 448,
    },
    scale: 0.3,
  },
  {
    id: 'CD66',
    position: {
      x: 2827,
      y: 364,
    },
    scale: 0.3,
  },
  {
    id: 'CD67',
    position: {
      x: 2795,
      y: 26,
    },
    scale: 0.2,
  },
  {
    id: 'CD68',
    position: {
      x: 2661,
      y: 88,
    },
    scale: 0.4,
  },
  {
    id: 'CD69',
    position: {
      x: 2269,
      y: 260,
    },
    scale: 0.3,
  },
  {
    id: 'CD70',
    position: {
      x: 2205,
      y: 222,
    },
    scale: 0.3,
  },
  {
    id: 'CD71',
    position: {
      x: 2327,
      y: 202,
    },
    scale: 0.3,
  },
  {
    id: 'CD72',
    position: {
      x: 2083,
      y: 276,
    },
    scale: 0.3,
  },
  {
    id: 'CD73',
    position: {
      x: 2362,
      y: 291,
    },
    scale: 0.3,
  },
  {
    id: 'CD74',
    position: {
      x: 2514,
      y: 197,
    },
    scale: 0.3,
  },
  {
    id: 'CD75',
    position: {
      x: 2257,
      y: 171,
    },
    scale: 0.4,
  },
  {
    id: 'CD76',
    position: {
      x: 2419,
      y: 247,
    },
    scale: 0.3,
  },
  {
    id: 'CD77',
    position: {
      x: 2144,
      y: 230,
    },
    scale: 0.3,
  },
  {
    id: 'CD78',
    position: {
      x: 2655,
      y: 294,
    },
    scale: 0.4,
  },
  {
    id: 'CD79',
    position: {
      x: 2210,
      y: 155,
    },
    scale: 0.3,
  },
  {
    id: 'CD80',
    position: {
      x: 2386,
      y: 200,
    },
    scale: 0.4,
  },
  {
    id: 'CD81',
    position: {
      x: 2444,
      y: 198,
    },
    scale: 0.4,
  },
  {
    id: 'CD82',
    position: {
      x: 2594,
      y: 113,
    },
    scale: 0.4,
  },
  {
    id: 'CD83',
    position: {
      x: 2525,
      y: 128,
    },
    scale: 0.4,
  },
  {
    id: 'CD84',
    position: {
      x: 2467,
      y: 138,
    },
    scale: 0.3,
  },
  {
    id: 'CD85',
    position: {
      x: 2410,
      y: 135,
    },
    scale: 0.3,
  },
  {
    id: 'CD86',
    position: {
      x: 2357,
      y: 142,
    },
    scale: 0.3,
  },
  {
    id: 'CD87',
    position: {
      x: 2305,
      y: 145,
    },
    scale: 0.3,
  },
  {
    id: 'CD88',
    position: {
      x: 2157,
      y: 166,
    },
    scale: 0.3,
  },
  {
    id: 'CD89',
    position: {
      x: 2091,
      y: 153,
    },
    scale: 0.4,
  },
  {
    id: 'CD90',
    position: {
      x: 1954,
      y: 330,
    },
    scale: 0.2,
  },
  {
    id: 'CD91',
    position: {
      x: 2028,
      y: 152,
    },
    scale: 0.5,
  },
  {
    id: 'CD92',
    position: {
      x: 2011,
      y: 242,
    },
    scale: 0.3,
  },
  {
    id: 'CD93',
    position: {
      x: 1685,
      y: 352,
    },
    scale: 0.5,
  },
  {
    id: 'CD94',
    position: {
      x: 1722,
      y: 380,
    },
    scale: 0.5,
  },
  {
    id: 'CD95',
    position: {
      x: 1846,
      y: 283,
    },
    scale: 1.1,
  },
  {
    id: 'DD1',
    position: {
      x: 1983,
      y: 185,
    },
    scale: 0.2,
  },
  {
    id: 'DD2',
    position: {
      x: 1949,
      y: 169,
    },
    scale: 0.2,
  },
  {
    id: 'DD3',
    position: {
      x: 1980,
      y: 107,
    },
    scale: 0.2,
  },
  {
    id: 'DD4',
    position: {
      x: 1757,
      y: 140,
    },
    scale: 0.3,
  },
  {
    id: 'DD5',
    position: {
      x: 1839,
      y: 71,
    },
    scale: 0.2,
  },
  {
    id: 'DD6',
    position: {
      x: 1910,
      y: 164,
    },
    scale: 0.3,
  },
  {
    id: 'DD7',
    position: {
      x: 1890,
      y: 89,
    },
    scale: 0.3,
  },
  {
    id: 'DD8',
    position: {
      x: 1972,
      y: 141,
    },
    scale: 0.2,
  },
  {
    id: 'DD9',
    position: {
      x: 1941,
      y: 132,
    },
    scale: 0.2,
  },
  {
    id: 'DD10',
    position: {
      x: 1945,
      y: 99,
    },
    scale: 0.2,
  },
  {
    id: 'DD11',
    position: {
      x: 1922,
      y: 84,
    },
    scale: 0.2,
  },
  {
    id: 'DD12',
    position: {
      x: 1964,
      y: 69,
    },
    scale: 0.2,
  },
  {
    id: 'DD13',
    position: {
      x: 1928,
      y: 52,
    },
    scale: 0.2,
  },
  {
    id: 'DD14',
    position: {
      x: 1902,
      y: 35,
    },
    scale: 0.2,
  },
  {
    id: 'DD15',
    position: {
      x: 1866,
      y: 25,
    },
    scale: 0.2,
  },
  {
    id: 'DD16',
    position: {
      x: 1838,
      y: 28,
    },
    scale: 0.2,
  },
  {
    id: 'DD17',
    position: {
      x: 1814,
      y: 39,
    },
    scale: 0.2,
  },
  {
    id: 'DD18',
    position: {
      x: 1792,
      y: 52,
    },
    scale: 0.2,
  },
  {
    id: 'DD19',
    position: {
      x: 1760,
      y: 55,
    },
    scale: 0.3,
  },
  {
    id: 'DD20',
    position: {
      x: 1719,
      y: 110,
    },
    scale: 0.3,
  },
  {
    id: 'DD21',
    position: {
      x: 1701,
      y: 153,
    },
    scale: 0.3,
  },
  {
    id: 'DD22',
    position: {
      x: 1713,
      y: 200,
    },
    scale: 0.3,
  },
  {
    id: 'DD23',
    position: {
      x: 1726,
      y: 286,
    },
    scale: 0.3,
  },
  {
    id: 'DD24',
    position: {
      x: 1825,
      y: 152,
    },
    scale: 0.4,
  },
  {
    id: 'DD25',
    position: {
      x: 1855,
      y: 147,
    },
    scale: 0.4,
  },
  {
    id: 'ED1',
    position: {
      x: 1769,
      y: 873,
    },
    scale: 1.3,
  },
  {
    id: 'ED2',
    position: {
      x: 1480,
      y: 1002,
    },
    scale: 1.1,
  },
  {
    id: 'ED3',
    position: {
      x: 1625,
      y: 1115,
    },
    scale: 0.5,
  },
  {
    id: 'ED4',
    position: {
      x: 1743,
      y: 1215,
    },
    scale: 0.7,
  },
  {
    id: 'ED5',
    position: {
      x: 1871,
      y: 1205,
    },
    scale: 0.7,
  },
  {
    id: 'ED6',
    position: {
      x: 1992,
      y: 1219,
    },
    scale: 0.5,
  },
  {
    id: 'ED7',
    position: {
      x: 2069,
      y: 1162,
    },
    scale: 0.5,
  },
  {
    id: 'ED8',
    position: {
      x: 2048,
      y: 985,
    },
    scale: 1.5,
  },
  {
    id: 'ED9',
    position: {
      x: 2071,
      y: 669,
    },
    scale: 1.9,
    boundaryHeightScale: 0.4,
    boundaryHeightPadding: 65,
  },
  {
    id: 'ED10',
    position: {
      x: 1798,
      y: 565,
    },
    scale: 0.7,
  },
  {
    id: 'ED11',
    position: {
      x: 1874,
      y: 576,
    },
    scale: 0.6,
  },
  {
    id: 'ED12',
    position: {
      x: 1711,
      y: 553,
    },
    scale: 0.6,
  },
  {
    id: 'ED13',
    position: {
      x: 1725,
      y: 682,
    },
    scale: 0.5,
  },
  {
    id: 'ED14',
    position: {
      x: 1795,
      y: 718,
    },
    scale: 0.3,
  },
  {
    id: 'ED15',
    position: {
      x: 1618,
      y: 786,
    },
    scale: 0.3,
  },
  {
    id: 'ED16',
    position: {
      x: 1629,
      y: 575,
    },
    scale: 0.5,
  },
  {
    id: 'ED17',
    position: {
      x: 1655,
      y: 718,
    },
    scale: 0.3,
  },
  {
    id: 'ED18',
    position: {
      x: 1563,
      y: 590,
    },
    scale: 0.5,
  },
  {
    id: 'ED19',
    position: {
      x: 1509,
      y: 637,
    },
    scale: 0.3,
  },
  {
    id: 'ED20',
    position: {
      x: 1529,
      y: 691,
    },
    scale: 0.3,
  },
  {
    id: 'ED21',
    position: {
      x: 1476,
      y: 686,
    },
    scale: 0.3,
  },
  {
    id: 'ED22',
    position: {
      x: 2171,
      y: 498,
    },
    scale: 1,
  },
  {
    id: 'FD1',
    position: {
      x: 795,
      y: 1238,
    },
    scale: 0.5,
  },
  {
    id: 'FD2',
    position: {
      x: 774,
      y: 1353,
    },
    scale: 0.4,
  },
  {
    id: 'FD3',
    position: {
      x: 740,
      y: 1294,
    },
    scale: 0.4,
  },
  {
    id: 'FD4',
    position: {
      x: 734,
      y: 1422,
    },
    scale: 0.4,
  },
  {
    id: 'FD5',
    position: {
      x: 612,
      y: 1474,
    },
    scale: 0.4,
  },
  {
    id: 'FD6',
    position: {
      x: 630,
      y: 1376,
    },
    scale: 0.5,
  },
  {
    id: 'FD7',
    position: {
      x: 475,
      y: 1447,
    },
    scale: 0.4,
  },
  {
    id: 'FD8',
    position: {
      x: 452,
      y: 1327,
    },
    scale: 0.4,
  },
  {
    id: 'FD9',
    position: {
      x: 523,
      y: 1241,
    },
    scale: 0.4,
  },
  {
    id: 'FD10',
    position: {
      x: 327,
      y: 1256,
    },
    scale: 0.4,
  },
  {
    id: 'FD11',
    position: {
      x: 408,
      y: 1169,
    },
    scale: 0.4,
  },
  {
    id: 'FD12',
    position: {
      x: 339,
      y: 1091,
    },
    scale: 0.5,
  },
  {
    id: 'FD13',
    position: {
      x: 391,
      y: 1060,
    },
    scale: 0.5,
  },
  {
    id: 'FD14',
    position: {
      x: 780,
      y: 1559,
    },
    scale: 0.7,
  },
  {
    id: 'FD15',
    position: {
      x: 890,
      y: 1500,
    },
    scale: 0.5,
  },
  {
    id: 'FD16',
    position: {
      x: 946,
      y: 1839,
    },
    scale: 0.5,
  },
  {
    id: 'FD17',
    position: {
      x: 912,
      y: 1746,
    },
    scale: 0.5,
  },
  {
    id: 'FD18',
    position: {
      x: 974,
      y: 1665,
    },
    scale: 0.5,
  },
  {
    id: 'FD19',
    position: {
      x: 1036,
      y: 1585,
    },
    scale: 0.5,
  },
  {
    id: 'FD20',
    position: {
      x: 1345,
      y: 1095,
    },
    scale: 0.3,
  },
  {
    id: 'GD1',
    position: {
      x: 1785,
      y: 1757,
    },
    scale: 0.9,
  },
  {
    id: 'GD2',
    position: {
      x: 1575,
      y: 1794,
    },
    scale: 0.3,
  },
  {
    id: 'GD3',
    position: {
      x: 1593,
      y: 1757,
    },
    scale: 0.3,
  },
  {
    id: 'GD4',
    position: {
      x: 1605,
      y: 1711,
    },
    scale: 0.2,
  },
  {
    id: 'GD5',
    position: {
      x: 1620,
      y: 1675,
    },
    scale: 0.2,
  },
  {
    id: 'GD6',
    position: {
      x: 1635,
      y: 1644,
    },
    scale: 0.2,
  },
  {
    id: 'GD7',
    position: {
      x: 1782,
      y: 1629,
    },
    scale: 0.4,
  },
  {
    id: 'GD8',
    position: {
      x: 1860,
      y: 1655,
    },
    scale: 0.4,
  },
  {
    id: 'GD9',
    position: {
      x: 1696,
      y: 1648,
    },
    scale: 0.2,
  },
  {
    id: 'GD10',
    position: {
      x: 1657,
      y: 1611,
    },
    scale: 0.3,
  },
  {
    id: 'GD11',
    position: {
      x: 1685,
      y: 1602,
    },
    scale: 0.3,
  },
  {
    id: 'GD12',
    position: {
      x: 1728,
      y: 1574,
    },
    scale: 0.3,
  },
  {
    id: 'GD13',
    position: {
      x: 1770,
      y: 1572,
    },
    scale: 0.3,
  },
  {
    id: 'GD14',
    position: {
      x: 1816,
      y: 1572,
    },
    scale: 0.3,
  },
  {
    id: 'GD15',
    position: {
      x: 1861,
      y: 1587,
    },
    scale: 0.3,
  },
  {
    id: 'GD16',
    position: {
      x: 1896,
      y: 1639,
    },
    scale: 0.3,
  },
  {
    id: 'GD17',
    position: {
      x: 1916,
      y: 1694,
    },
    scale: 0.3,
  },
  {
    id: 'GD18',
    position: {
      x: 1903,
      y: 1757,
    },
    scale: 0.3,
  },
  {
    id: 'GD19',
    position: {
      x: 1951,
      y: 1757,
    },
    scale: 0.3,
  },
  {
    id: 'GD20',
    position: {
      x: 1900,
      y: 1833,
    },
    scale: 0.3,
  },
  {
    id: 'GD21',
    position: {
      x: 1945,
      y: 1808,
    },
    scale: 0.3,
  },
  {
    id: 'GD22',
    position: {
      x: 1939,
      y: 1859,
    },
    scale: 0.2,
  },
  {
    id: 'GD23',
    position: {
      x: 1896,
      y: 1920,
    },
    scale: 0.3,
  },
  {
    id: 'GD24',
    position: {
      x: 1926,
      y: 1904,
    },
    scale: 0.3,
  },
  {
    id: 'GD25',
    position: {
      x: 1873,
      y: 1935,
    },
    scale: 0.3,
  },
  {
    id: 'GD26',
    position: {
      x: 1827,
      y: 1936,
    },
    scale: 0.3,
  },
  {
    id: 'GD27',
    position: {
      x: 1772,
      y: 1951,
    },
    scale: 0.3,
  },
  {
    id: 'GD28',
    position: {
      x: 1726,
      y: 1948,
    },
    scale: 0.3,
  },
  {
    id: 'GD29',
    position: {
      x: 1667,
      y: 1922,
    },
    scale: 0.3,
  },
  {
    id: 'GD30',
    position: {
      x: 1693,
      y: 1938,
    },
    scale: 0.3,
  },
  {
    id: 'GD31',
    position: {
      x: 1635,
      y: 1894,
    },
    scale: 0.2,
  },
  {
    id: 'GD32',
    position: {
      x: 1611,
      y: 1863,
    },
    scale: 0.2,
  },
  {
    id: 'GD33',
    position: {
      x: 0,
      y: 0,
    },
    scale: 1,
  },
  {
    id: 'HD1',
    position: {
      x: 1744,
      y: 2407,
    },
    scale: 0.8,
  },
  {
    id: 'HD2',
    position: {
      x: 1691,
      y: 2168,
    },
    scale: 0.6,
  },
  {
    id: 'HD3',
    position: {
      x: 1782,
      y: 2141,
    },
    scale: 0.6,
  },
  {
    id: 'HD4',
    position: {
      x: 1867,
      y: 2301,
    },
    scale: 0.7,
  },
  {
    id: 'HD5',
    position: {
      x: 1771,
      y: 2639,
    },
    scale: 0.6,
  },
  {
    id: 'HD6',
    position: {
      x: 1857,
      y: 2541,
    },
    scale: 0.6,
  },
  {
    id: 'HD7',
    position: {
      x: 1639,
      y: 2637,
    },
    scale: 0.6,
  },
  {
    id: 'HD8',
    position: {
      x: 1497,
      y: 2186,
    },
    scale: 0.4,
  },
  {
    id: 'HD9',
    position: {
      x: 1582,
      y: 2112,
    },
    scale: 0.7,
  },
  {
    id: 'HD10',
    position: {
      x: 1505,
      y: 2317,
    },
    scale: 0.7,
  },
  {
    id: 'ID1',
    position: {
      x: 839,
      y: 2457,
    },
    scale: 0.5,
  },
  {
    id: 'ID2',
    position: {
      x: 580,
      y: 2000,
    },
    scale: 2.4,
  },
  {
    id: 'ID3',
    position: {
      x: 668,
      y: 2679,
    },
    scale: 0.4,
  },
  {
    id: 'ID4',
    position: {
      x: 468,
      y: 2912,
    },
    scale: 0.5,
  },
  {
    id: 'ID5',
    position: {
      x: 487,
      y: 2840,
    },
    scale: 0.5,
  },
  {
    id: 'ID6',
    position: {
      x: 728,
      y: 2961,
    },
    scale: 0.7,
  },
  {
    id: 'ID7',
    position: {
      x: 595,
      y: 3003,
    },
    scale: 0.7,
  },
  {
    id: 'ID8',
    position: {
      x: 992,
      y: 3151,
    },
    scale: 0.7,
  },
  {
    id: 'ID9',
    position: {
      x: 1572,
      y: 3036,
    },
    scale: 2.4,
  },
  {
    id: 'ID10',
    position: {
      x: 1927,
      y: 2819,
    },
    scale: 0.8,
  },
  {
    id: 'ID11',
    position: {
      x: 2121,
      y: 3020,
    },
    scale: 0.8,
  },
  {
    id: 'JD1',
    position: {
      x: 2268,
      y: 2486,
    },
    scale: 0.7,
  },
  {
    id: 'JD2',
    position: {
      x: 2282,
      y: 2103,
    },
    scale: 2.2,
  },
  {
    id: 'JD3',
    position: {
      x: 2183,
      y: 2193,
    },
    scale: 1,
  },
  {
    id: 'KD1',
    position: {
      x: 2253,
      y: 1514,
    },
    scale: 1.3,
  },
  {
    id: 'KD2',
    position: {
      x: 2291,
      y: 1796,
    },
    scale: 0.7,
  },
  {
    id: 'KD3',
    position: {
      x: 2368,
      y: 1751,
    },
    scale: 0.2,
  },
  {
    id: 'KD4',
    position: {
      x: 2188,
      y: 1777,
    },
    scale: 0.3,
  },
  {
    id: 'KD5',
    position: {
      x: 2134,
      y: 1761,
    },
    scale: 0.3,
  },
  {
    id: 'KD6',
    position: {
      x: 2157,
      y: 1285,
    },
    scale: 0.4,
  },
  {
    id: 'KD7',
    position: {
      x: 2278,
      y: 1666,
    },
    scale: 0.4,
  },
  {
    id: 'KD8',
    position: {
      x: 2070,
      y: 1695,
    },
    scale: 0.5,
  },
  {
    id: 'KD9',
    position: {
      x: 1995,
      y: 1576,
    },
    scale: 0.4,
  },
  {
    id: 'KD10',
    position: {
      x: 2139,
      y: 1547,
    },
    scale: 0.4,
  },
  {
    id: 'KD11',
    position: {
      x: 2384,
      y: 1409,
    },
    scale: 0.4,
  },
  {
    id: 'KD12',
    position: {
      x: 2370,
      y: 1495,
    },
    scale: 0.6,
  },
  {
    id: 'KD13',
    position: {
      x: 2415,
      y: 1493,
    },
    scale: 0.6,
  },
  {
    id: 'KD14',
    position: {
      x: 2183,
      y: 1663,
    },
    scale: 0.4,
  },
  {
    id: 'KD15',
    position: {
      x: 2292,
      y: 1338,
    },
    scale: 0.4,
  },
  {
    id: 'KD16',
    position: {
      x: 2396,
      y: 1631,
    },
    scale: 0.5,
  },
  {
    id: 'KD17',
    position: {
      x: 2130,
      y: 1359,
    },
    scale: 0.4,
  },
  {
    id: 'KD18',
    position: {
      x: 2075,
      y: 1539,
    },
    scale: 0.3,
  },
  {
    id: 'KD19',
    position: {
      x: 2006,
      y: 1507,
    },
    scale: 0.3,
  },
  {
    id: 'KD20',
    position: {
      x: 2027,
      y: 1411,
    },
    scale: 0.4,
  },
  {
    id: 'KD21',
    position: {
      x: 2071,
      y: 1342,
    },
    scale: 0.4,
  },
  {
    id: 'KD22',
    position: {
      x: 2443,
      y: 1355,
    },
    scale: 0.4,
  },
  {
    id: 'KD23',
    position: {
      x: 2503,
      y: 1495,
    },
    scale: 0.4,
  },
  {
    id: 'KD24',
    position: {
      x: 2244,
      y: 1282,
    },
    scale: 0.4,
  },
  {
    id: 'KD25',
    position: {
      x: 2358,
      y: 1288,
    },
    scale: 0.4,
  },
  {
    id: 'KD26',
    position: {
      x: 2461,
      y: 1571,
    },
    scale: 0.4,
  },
  {
    id: 'KD27',
    position: {
      x: 2458,
      y: 1443,
    },
    scale: 0.4,
  },
  {
    id: 'KD28',
    position: {
      x: 2034,
      y: 1636,
    },
    scale: 0.4,
  },
  {
    id: 'KD29',
    position: {
      x: 2121,
      y: 1457,
    },
    scale: 0.5,
  },
  {
    id: 'KD30',
    position: {
      x: 2202,
      y: 1364,
    },
    scale: 0.5,
  },
  {
    id: 'KD31',
    position: {
      x: 2501,
      y: 1371,
    },
    scale: 0.6,
  },
  {
    id: 'KD32',
    position: {
      x: 2343,
      y: 1668,
    },
    scale: 0.4,
  },
  {
    id: 'KD33',
    position: {
      x: 2391,
      y: 1819,
    },
    scale: 0.6,
  },
  {
    id: 'KD34',
    position: {
      x: 2528,
      y: 1711,
    },
    scale: 0.6,
  },
  {
    id: 'KD35',
    position: {
      x: 2460,
      y: 1772,
    },
    scale: 0.6,
  },
  {
    id: 'KD36',
    position: {
      x: 2561,
      y: 1602,
    },
    scale: 0.6,
  },
  {
    id: 'KD37',
    position: {
      x: 2579,
      y: 1484,
    },
    scale: 0.6,
  },
  {
    id: 'KD38',
    position: {
      x: 2708,
      y: 1529,
    },
    scale: 0.3,
  },
  {
    id: 'KD39',
    position: {
      x: 2678,
      y: 1457,
    },
    scale: 0.3,
  },
  {
    id: 'KD40',
    position: {
      x: 2734,
      y: 1476,
    },
    scale: 0.3,
  },
  {
    id: 'KD41',
    position: {
      x: 2663,
      y: 1392,
    },
    scale: 0.3,
  },
  {
    id: 'KD42',
    position: {
      x: 2724,
      y: 1419,
    },
    scale: 0.3,
  },
  {
    id: 'LD1',
    position: {
      x: 2765,
      y: 1548,
    },
    scale: 0.4,
  },
  {
    id: 'LD2',
    position: {
      x: 2735,
      y: 1685,
    },
    scale: 0.4,
  },
  {
    id: 'LD3',
    position: {
      x: 2819,
      y: 1600,
    },
    scale: 0.4,
  },
  {
    id: 'LD4',
    position: {
      x: 2891,
      y: 1608,
    },
    scale: 0.4,
  },
  {
    id: 'LD5',
    position: {
      x: 2824,
      y: 1674,
    },
    scale: 0.4,
  },
  {
    id: 'LD6',
    position: {
      x: 2883,
      y: 1705,
    },
    scale: 0.4,
  },
  {
    id: 'LD7',
    position: {
      x: 2839,
      y: 1753,
    },
    scale: 0.3,
  },
  {
    id: 'LD8',
    position: {
      x: 2924,
      y: 1749,
    },
    scale: 0.4,
  },
  {
    id: 'LD9',
    position: {
      x: 2803,
      y: 1803,
    },
    scale: 0.3,
  },
  {
    id: 'LD10',
    position: {
      x: 2804,
      y: 1859,
    },
    scale: 0.4,
  },
  {
    id: 'LD11',
    position: {
      x: 2884,
      y: 1821,
    },
    scale: 0.4,
  },
  {
    id: 'LD12',
    position: {
      x: 2921,
      y: 1888,
    },
    scale: 0.4,
  },
  {
    id: 'LD13',
    position: {
      x: 2859,
      y: 1934,
    },
    scale: 0.4,
  },
  {
    id: 'LD14',
    position: {
      x: 2940,
      y: 1978,
    },
    scale: 0.4,
  },
  {
    id: 'LD15',
    position: {
      x: 2812,
      y: 2005,
    },
    scale: 0.4,
  },
  {
    id: 'LD16',
    position: {
      x: 2869,
      y: 2150,
    },
    scale: 0.4,
  },
  {
    id: 'LD17',
    position: {
      x: 2879,
      y: 2070,
    },
    scale: 0.4,
  },
  {
    id: 'LD18',
    position: {
      x: 2804,
      y: 2119,
    },
    scale: 0.4,
  },
  {
    id: 'LD19',
    position: {
      x: 2808,
      y: 2206,
    },
    scale: 0.4,
  },
  {
    id: 'LD20',
    position: {
      x: 2723,
      y: 2190,
    },
    scale: 1,
  },
  {
    id: 'LD21',
    position: {
      x: 2700,
      y: 2373,
    },
    scale: 0.4,
  },
  {
    id: 'LD22',
    position: {
      x: 2799,
      y: 2449,
    },
    scale: 0.7,
  },
  {
    id: 'LD23',
    position: {
      x: 2397,
      y: 2602,
    },
    scale: 0.7,
  },
  {
    id: 'MD1',
    position: {
      x: 1913,
      y: 3339,
    },
    scale: 1.2,
  },
  {
    id: 'MD2',
    position: {
      x: 1870,
      y: 3477,
    },
    scale: 0.2,
  },
  {
    id: 'MD3',
    position: {
      x: 2006,
      y: 3470,
    },
    scale: 0.3,
  },
  {
    id: 'MD4',
    position: {
      x: 1936,
      y: 3495,
    },
    scale: 0.3,
  },
  {
    id: 'MD5',
    position: {
      x: 1783,
      y: 3307,
    },
    scale: 0.3,
  },
  {
    id: 'MD6',
    position: {
      x: 1933,
      y: 3193,
    },
    scale: 0.3,
  },
  {
    id: 'MD7',
    position: {
      x: 2042,
      y: 3317,
    },
    scale: 0.3,
  },
  {
    id: 'MD8',
    position: {
      x: 1809,
      y: 3257,
    },
    scale: 0.3,
  },
  {
    id: 'MD9',
    position: {
      x: 2022,
      y: 3390,
    },
    scale: 0.3,
  },
  {
    id: 'MD10',
    position: {
      x: 1898,
      y: 3198,
    },
    scale: 0.3,
  },
  {
    id: 'MD11',
    position: {
      x: 1866,
      y: 3208,
    },
    scale: 0.3,
  },
  {
    id: 'MD12',
    position: {
      x: 2025,
      y: 3270,
    },
    scale: 0.3,
  },
  {
    id: 'MD13',
    position: {
      x: 2054,
      y: 3367,
    },
    scale: 0.3,
  },
  {
    id: 'MD14',
    position: {
      x: 2025,
      y: 3430,
    },
    scale: 0.3,
  },
  {
    id: 'MD15',
    position: {
      x: 1966,
      y: 3485,
    },
    scale: 0.3,
  },
  {
    id: 'MD16',
    position: {
      x: 1896,
      y: 3505,
    },
    scale: 0.3,
  },
  {
    id: 'MD17',
    position: {
      x: 1811,
      y: 3502,
    },
    scale: 0.3,
  },
  {
    id: 'MD18',
    position: {
      x: 1761,
      y: 3461,
    },
    scale: 0.3,
  },
  {
    id: 'MD19',
    position: {
      x: 1786,
      y: 3493,
    },
    scale: 0.3,
  },
  {
    id: 'MD20',
    position: {
      x: 1806,
      y: 3455,
    },
    scale: 0.3,
  },
  {
    id: 'MD21',
    position: {
      x: 1802,
      y: 3406,
    },
    scale: 0.3,
  },
  {
    id: 'MD22',
    position: {
      x: 1864,
      y: 3523,
    },
    scale: 0.3,
  },
  {
    id: 'MD23',
    position: {
      x: 1838,
      y: 3504,
    },
    scale: 0.3,
  },
  {
    id: 'MD24',
    position: {
      x: 1736,
      y: 3427,
    },
    scale: 0.3,
  },
  {
    id: 'MD25',
    position: {
      x: 1782,
      y: 3363,
    },
    scale: 0.3,
  },
  {
    id: 'MD26',
    position: {
      x: 1768,
      y: 3404,
    },
    scale: 0.3,
  },
  {
    id: 'MD27',
    position: {
      x: 1772,
      y: 3428,
    },
    scale: 0.3,
  },
  {
    id: 'MD28',
    position: {
      x: 1731,
      y: 3387,
    },
    scale: 0.3,
  },
  {
    id: 'MD29',
    position: {
      x: 1723,
      y: 3354,
    },
    scale: 0.3,
  },
  {
    id: 'MD30',
    position: {
      x: 1752,
      y: 3360,
    },
    scale: 0.3,
  },
  {
    id: 'MD31',
    position: {
      x: 1737,
      y: 3311,
    },
    scale: 0.3,
  },
  {
    id: 'MD32',
    position: {
      x: 1746,
      y: 3275,
    },
    scale: 0.3,
  },
  {
    id: 'MD33',
    position: {
      x: 1768,
      y: 3238,
    },
    scale: 0.3,
  },
  {
    id: 'MD34',
    position: {
      x: 1789,
      y: 3212,
    },
    scale: 0.3,
  },
  {
    id: 'MD35',
    position: {
      x: 1824,
      y: 3190,
    },
    scale: 0.3,
  },
  {
    id: 'MD36',
    position: {
      x: 1858,
      y: 3168,
    },
    scale: 0.3,
  },
  {
    id: 'MD37',
    position: {
      x: 1893,
      y: 3162,
    },
    scale: 0.3,
  },
  {
    id: 'MD38',
    position: {
      x: 1923,
      y: 3154,
    },
    scale: 0.3,
  },
  {
    id: 'MD39',
    position: {
      x: 1952,
      y: 3163,
    },
    scale: 0.3,
  },
  {
    id: 'MD40',
    position: {
      x: 1979,
      y: 3182,
    },
    scale: 0.3,
  },
  {
    id: 'MD41',
    position: {
      x: 2007,
      y: 3195,
    },
    scale: 0.3,
  },
  {
    id: 'MD42',
    position: {
      x: 2037,
      y: 3231,
    },
    scale: 0.3,
  },
  {
    id: 'MD43',
    position: {
      x: 2060,
      y: 3255,
    },
    scale: 0.3,
  },
  {
    id: 'MD44',
    position: {
      x: 2077,
      y: 3281,
    },
    scale: 0.3,
  },
  {
    id: 'MD45',
    position: {
      x: 2081,
      y: 3325,
    },
    scale: 0.3,
  },
  {
    id: 'MD46',
    position: {
      x: 2087,
      y: 3358,
    },
    scale: 0.3,
  },
  {
    id: 'MD47',
    position: {
      x: 2081,
      y: 3391,
    },
    scale: 0.3,
  },
  {
    id: 'MD48',
    position: {
      x: 2065,
      y: 3418,
    },
    scale: 0.3,
  },
  {
    id: 'MD49',
    position: {
      x: 2052,
      y: 3452,
    },
    scale: 0.3,
  },
  {
    id: 'MD50',
    position: {
      x: 2035,
      y: 3475,
    },
    scale: 0.3,
  },
  {
    id: 'MD51',
    position: {
      x: 2015,
      y: 3501,
    },
    scale: 0.3,
  },
  {
    id: 'MD52',
    position: {
      x: 1993,
      y: 3510,
    },
    scale: 0.3,
  },
  {
    id: 'MD53',
    position: {
      x: 1958,
      y: 3526,
    },
    scale: 0.3,
  },
  {
    id: 'MD54',
    position: {
      x: 1913,
      y: 3531,
    },
    scale: 0.3,
  },
  {
    id: 'ND1',
    position: {
      x: 1243,
      y: 3359,
    },
    scale: 1.3,
  },
  {
    id: 'ND2',
    position: {
      x: 1062,
      y: 3299,
    },
    scale: 0.3,
  },
  {
    id: 'ND3',
    position: {
      x: 1427,
      y: 3410,
    },
    scale: 0.3,
  },
  {
    id: 'ND4',
    position: {
      x: 1437,
      y: 3289,
    },
    scale: 0.3,
  },
  {
    id: 'ND5',
    position: {
      x: 1356,
      y: 3196,
    },
    scale: 0.3,
  },
  {
    id: 'ND6',
    position: {
      x: 1386,
      y: 3220,
    },
    scale: 0.3,
  },
  {
    id: 'ND7',
    position: {
      x: 1327,
      y: 3181,
    },
    scale: 0.3,
  },
  {
    id: 'ND8',
    position: {
      x: 1220,
      y: 3547,
    },
    scale: 0.3,
  },
  {
    id: 'ND9',
    position: {
      x: 1441,
      y: 3352,
    },
    scale: 0.3,
  },
  {
    id: 'ND10',
    position: {
      x: 1166,
      y: 3256,
    },
    scale: 0.3,
  },
  {
    id: 'ND11',
    position: {
      x: 1142,
      y: 3455,
    },
    scale: 0.3,
  },
  {
    id: 'ND12',
    position: {
      x: 1186,
      y: 3536,
    },
    scale: 0.3,
  },
  {
    id: 'ND13',
    position: {
      x: 1207,
      y: 3494,
    },
    scale: 0.3,
  },
  {
    id: 'ND14',
    position: {
      x: 1150,
      y: 3516,
    },
    scale: 0.3,
  },
  {
    id: 'ND15',
    position: {
      x: 1115,
      y: 3493,
    },
    scale: 0.3,
  },
  {
    id: 'ND16',
    position: {
      x: 1088,
      y: 3465,
    },
    scale: 0.3,
  },
  {
    id: 'ND17',
    position: {
      x: 1069,
      y: 3436,
    },
    scale: 0.3,
  },
  {
    id: 'ND18',
    position: {
      x: 1139,
      y: 3408,
    },
    scale: 0.3,
  },
  {
    id: 'ND19',
    position: {
      x: 1102,
      y: 3406,
    },
    scale: 0.3,
  },
  {
    id: 'ND20',
    position: {
      x: 1106,
      y: 3359,
    },
    scale: 0.3,
  },
  {
    id: 'ND21',
    position: {
      x: 1057,
      y: 3390,
    },
    scale: 0.3,
  },
  {
    id: 'ND22',
    position: {
      x: 1070,
      y: 3350,
    },
    scale: 0.3,
  },
  {
    id: 'ND23',
    position: {
      x: 1102,
      y: 3321,
    },
    scale: 0.3,
  },
  {
    id: 'ND24',
    position: {
      x: 1141,
      y: 3329,
    },
    scale: 0.3,
  },
  {
    id: 'ND25',
    position: {
      x: 1089,
      y: 3273,
    },
    scale: 0.3,
  },
  {
    id: 'ND26',
    position: {
      x: 1128,
      y: 3278,
    },
    scale: 0.3,
  },
  {
    id: 'ND27',
    position: {
      x: 1107,
      y: 3221,
    },
    scale: 0.3,
  },
  {
    id: 'ND28',
    position: {
      x: 1143,
      y: 3191,
    },
    scale: 0.3,
  },
  {
    id: 'ND29',
    position: {
      x: 1179,
      y: 3182,
    },
    scale: 0.3,
  },
  {
    id: 'ND30',
    position: {
      x: 1217,
      y: 3177,
    },
    scale: 0.3,
  },
  {
    id: 'ND31',
    position: {
      x: 1246,
      y: 3172,
    },
    scale: 0.3,
  },
  {
    id: 'ND32',
    position: {
      x: 1283,
      y: 3172,
    },
    scale: 0.3,
  },
  {
    id: 'ND33',
    position: {
      x: 1395,
      y: 3260,
    },
    scale: 0.3,
  },
  {
    id: 'ND34',
    position: {
      x: 1360,
      y: 3245,
    },
    scale: 0.3,
  },
  {
    id: 'ND35',
    position: {
      x: 1330,
      y: 3242,
    },
    scale: 0.3,
  },
  {
    id: 'ND36',
    position: {
      x: 1301,
      y: 3227,
    },
    scale: 0.3,
  },
  {
    id: 'ND37',
    position: {
      x: 1341,
      y: 3271,
    },
    scale: 0.3,
  },
  {
    id: 'ND38',
    position: {
      x: 1377,
      y: 3292,
    },
    scale: 0.3,
  },
  {
    id: 'ND39',
    position: {
      x: 1407,
      y: 3297,
    },
    scale: 0.3,
  },
  {
    id: 'ND40',
    position: {
      x: 1418,
      y: 3337,
    },
    scale: 0.3,
  },
  {
    id: 'ND41',
    position: {
      x: 1380,
      y: 3340,
    },
    scale: 0.3,
  },
  {
    id: 'ND42',
    position: {
      x: 1400,
      y: 3377,
    },
    scale: 0.3,
  },
  {
    id: 'ND43',
    position: {
      x: 1381,
      y: 3430,
    },
    scale: 0.3,
  },
  {
    id: 'ND44',
    position: {
      x: 1345,
      y: 3439,
    },
    scale: 0.3,
  },
  {
    id: 'ND45',
    position: {
      x: 1414,
      y: 3444,
    },
    scale: 0.3,
  },
  {
    id: 'ND46',
    position: {
      x: 1390,
      y: 3473,
    },
    scale: 0.3,
  },
  {
    id: 'ND47',
    position: {
      x: 1359,
      y: 3486,
    },
    scale: 0.3,
  },
  {
    id: 'ND48',
    position: {
      x: 1346,
      y: 3527,
    },
    scale: 0.3,
  },
  {
    id: 'ND49',
    position: {
      x: 1308,
      y: 3508,
    },
    scale: 0.3,
  },
  {
    id: 'ND50',
    position: {
      x: 1286,
      y: 3541,
    },
    scale: 0.3,
  },
  {
    id: 'ND51',
    position: {
      x: 1258,
      y: 3549,
    },
    scale: 0.3,
  },
  {
    id: 'OD1',
    position: {
      x: 1559,
      y: 3488,
    },
    scale: 2,
  },
  {
    id: 'OD2',
    position: {
      x: 393,
      y: 3578,
    },
    scale: 0.6,
  },
  {
    id: 'OD3',
    position: {
      x: 451,
      y: 3356,
    },
    scale: 0.6,
  },
  {
    id: 'OD4',
    position: {
      x: 701,
      y: 3550,
    },
    scale: 0.7,
  },
  {
    id: 'OD5',
    position: {
      x: 683,
      y: 3245,
    },
    scale: 0.9,
  },
  {
    id: 'OD6',
    position: {
      x: 1012,
      y: 3549,
    },
    scale: 0.8,
  },
  {
    id: 'OD7',
    position: {
      x: 937,
      y: 3595,
    },
    scale: 0.6,
  },
  {
    id: 'OD8',
    position: {
      x: 880,
      y: 3441,
    },
    scale: 0.5,
  },
  {
    id: 'OD9',
    position: {
      x: 967,
      y: 3745,
    },
    scale: 0.9,
  },
  {
    id: 'OD10',
    position: {
      x: 850,
      y: 3767,
    },
    scale: 0.6,
  },
  {
    id: 'OD11',
    position: {
      x: 760,
      y: 3985,
    },
    scale: 3.5,
  },
  {
    id: 'OD12',
    position: {
      x: 586,
      y: 3792,
    },
    scale: 0.5,
  },
  {
    id: 'OD13',
    position: {
      x: 755,
      y: 4190,
    },
    scale: 0.5,
  },
  {
    id: 'PD1',
    position: {
      x: 1643,
      y: 4124,
    },
    scale: 1.7,
  },
  {
    id: 'PD1',
    position: {
      x: 1481,
      y: 4379,
    },
    scale: 1.7,
  },
  {
    id: 'PD1',
    position: {
      x: 1845,
      y: 4391,
    },
    scale: 1.7,
  },
  {
    id: 'PD2',
    position: {
      x: 1480,
      y: 3904,
    },
    scale: 0.6,
  },
  {
    id: 'PD3',
    position: {
      x: 1726,
      y: 3904,
    },
    scale: 0.6,
  },
  {
    id: 'PD4',
    position: {
      x: 1400,
      y: 3967,
    },
    scale: 0.3,
  },
  {
    id: 'PD4',
    position: {
      x: 1382,
      y: 4022,
    },
    scale: 0.3,
  },
  {
    id: 'PD5',
    position: {
      x: 1349,
      y: 3972,
    },
    scale: 0.3,
  },
  {
    id: 'PD5',
    position: {
      x: 1336,
      y: 4018,
    },
    scale: 0.3,
  },
  {
    id: 'PD6',
    position: {
      x: 1293,
      y: 4042,
    },
    scale: 0.3,
  },
  {
    id: 'PD6',
    position: {
      x: 1289,
      y: 4102,
    },
    scale: 0.3,
  },
  {
    id: 'PD6',
    position: {
      x: 1341,
      y: 4073,
    },
    scale: 0.3,
  },
  {
    id: 'PD7',
    position: {
      x: 1469,
      y: 4060,
    },
    scale: 0.3,
  },
  {
    id: 'PD7',
    position: {
      x: 1459,
      y: 4114,
    },
    scale: 0.3,
  },
  {
    id: 'PD8',
    position: {
      x: 1385,
      y: 4168,
    },
    scale: 0.3,
  },
  {
    id: 'PD8',
    position: {
      x: 1446,
      y: 4171,
    },
    scale: 0.3,
  },
  {
    id: 'PD8',
    position: {
      x: 1425,
      y: 4220,
    },
    scale: 0.3,
  },
  {
    id: 'PD9',
    position: {
      x: 1251,
      y: 4253,
    },
    scale: 0.3,
  },
  {
    id: 'PD10',
    position: {
      x: 1204,
      y: 4275,
    },
    scale: 0.3,
  },
  {
    id: 'PD11',
    position: {
      x: 1185,
      y: 4449,
    },
    scale: 0.3,
  },
  {
    id: 'PD11',
    position: {
      x: 1210,
      y: 4497,
    },
    scale: 0.3,
  },
  {
    id: 'PD12',
    position: {
      x: 1329,
      y: 4495,
    },
    scale: 0.3,
  },
  {
    id: 'PD12',
    position: {
      x: 1342,
      y: 4543,
    },
    scale: 0.3,
  },
  {
    id: 'PD13',
    position: {
      x: 1333,
      y: 4638,
    },
    scale: 0.3,
  },
  {
    id: 'PD13',
    position: {
      x: 1383,
      y: 4658,
    },
    scale: 0.3,
  },
  {
    id: 'PD14',
    position: {
      x: 1485,
      y: 4694,
    },
    scale: 0.3,
  },
  {
    id: 'PD15',
    position: {
      x: 1492,
      y: 4580,
    },
    scale: 0.2,
  },
  {
    id: 'PD15',
    position: {
      x: 1515,
      y: 4567,
    },
    scale: 0.2,
  },
  {
    id: 'PD15',
    position: {
      x: 1484,
      y: 4544,
    },
    scale: 0.3,
  },
  {
    id: 'PD16',
    position: {
      x: 1693,
      y: 4351,
    },
    scale: 0.2,
  },
  {
    id: 'PD16',
    position: {
      x: 1656,
      y: 4384,
    },
    scale: 0.2,
  },
  {
    id: 'PD17',
    position: {
      x: 1604,
      y: 4702,
    },
    scale: 0.3,
  },
  {
    id: 'PD17',
    position: {
      x: 1648,
      y: 4735,
    },
    scale: 0.3,
  },
  {
    id: 'PD17',
    position: {
      x: 1644,
      y: 4675,
    },
    scale: 0.3,
  },
  {
    id: 'PD18',
    position: {
      x: 1752,
      y: 4632,
    },
    scale: 0.3,
  },
  {
    id: 'PD18',
    position: {
      x: 1715,
      y: 4611,
    },
    scale: 0.2,
  },
  {
    id: 'PD18',
    position: {
      x: 1773,
      y: 4588,
    },
    scale: 0.2,
  },
  {
    id: 'PD18',
    position: {
      x: 1723,
      y: 4571,
    },
    scale: 0.3,
  },
  {
    id: 'PD18',
    position: {
      x: 1810,
      y: 4556,
    },
    scale: 0.3,
  },
  {
    id: 'PD19',
    position: {
      x: 1856,
      y: 4695,
    },
    scale: 0.3,
  },
  {
    id: 'PD19',
    position: {
      x: 1899,
      y: 4671,
    },
    scale: 0.2,
  },
  {
    id: 'PD19',
    position: {
      x: 1926,
      y: 4625,
    },
    scale: 0.3,
  },
  {
    id: 'PD19',
    position: {
      x: 1875,
      y: 4598,
    },
    scale: 0.3,
  },
  {
    id: 'PD19',
    position: {
      x: 1906,
      y: 4563,
    },
    scale: 0.4,
  },
  {
    id: 'PD19',
    position: {
      x: 1868,
      y: 4643,
    },
    scale: 0.3,
  },
  {
    id: 'PD20',
    position: {
      x: 2045,
      y: 4520,
    },
    scale: 0.3,
  },
  {
    id: 'PD21',
    position: {
      x: 1945,
      y: 4392,
    },
    scale: 0.3,
  },
  {
    id: 'PD21',
    position: {
      x: 1958,
      y: 4354,
    },
    scale: 0.3,
  },
  {
    id: 'PD22',
    position: {
      x: 1873,
      y: 4247,
    },
    scale: 0.3,
  },
  {
    id: 'PD22',
    position: {
      x: 1842,
      y: 4215,
    },
    scale: 0.3,
  },
  {
    id: 'PD22',
    position: {
      x: 1893,
      y: 4210,
    },
    scale: 0.3,
  },
  {
    id: 'PD23',
    position: {
      x: 1578,
      y: 3972,
    },
    scale: 0.3,
  },
  {
    id: 'PD23',
    position: {
      x: 1613,
      y: 3966,
    },
    scale: 0.3,
  },
  {
    id: 'PD24',
    position: {
      x: 1824,
      y: 4118,
    },
    scale: 0.3,
  },
  {
    id: 'PD24',
    position: {
      x: 1795,
      y: 4070,
    },
    scale: 0.3,
  },
  {
    id: 'PD25',
    position: {
      x: 1886,
      y: 4019,
    },
    scale: 0.3,
  },
  {
    id: 'PD25',
    position: {
      x: 1920,
      y: 4067,
    },
    scale: 0.3,
  },
  {
    id: 'PD26',
    position: {
      x: 1967,
      y: 4123,
    },
    scale: 0.4,
  },
  {
    id: 'PD27',
    position: {
      x: 1940,
      y: 4010,
    },
    scale: 0.3,
  },
  {
    id: 'PD28',
    position: {
      x: 2005,
      y: 4024,
    },
    scale: 0.4,
  },
  {
    id: 'PD28',
    position: {
      x: 2029,
      y: 4085,
    },
    scale: 0.4,
  },
  {
    id: 'PD29',
    position: {
      x: 2007,
      y: 4195,
    },
    scale: 0.3,
  },
  {
    id: 'PD29',
    position: {
      x: 2048,
      y: 4162,
    },
    scale: 0.3,
  },
  {
    id: 'PD30',
    position: {
      x: 2047,
      y: 4249,
    },
    scale: 0.3,
  },
  {
    id: 'PD31',
    position: {
      x: 2092,
      y: 4382,
    },
    scale: 0.3,
  },
  {
    id: 'PD31',
    position: {
      x: 2055,
      y: 4337,
    },
    scale: 0.3,
  },
  {
    id: 'PD31',
    position: {
      x: 2040,
      y: 4396,
    },
    scale: 0.3,
  },
  {
    id: 'PD32',
    position: {
      x: 1916,
      y: 3959,
    },
    scale: 0.3,
  },
  {
    id: 'PD32',
    position: {
      x: 1856,
      y: 3970,
    },
    scale: 0.3,
  },
  {
    id: 'PD32',
    position: {
      x: 1811,
      y: 3916,
    },
    scale: 0.3,
  },
  {
    id: 'PD33',
    position: {
      x: 2161,
      y: 4224,
    },
    scale: 0.6,
  },
  {
    id: 'PD34',
    position: {
      x: 2158,
      y: 4309,
    },
    scale: 0.4,
  },
  {
    id: 'PD35',
    position: {
      x: 2177,
      y: 4394,
    },
    scale: 0.5,
  },
  {
    id: 'PD36',
    position: {
      x: 2146,
      y: 4518,
    },
    scale: 0.5,
  },
  {
    id: 'QD1',
    position: {
      x: 2175,
      y: 4752,
    },
    scale: 0.6,
  },
  {
    id: 'QD2',
    position: {
      x: 1873,
      y: 4825,
    },
    scale: 0.9,
  },
  {
    id: 'RD1',
    position: {
      x: 2457,
      y: 2683,
    },
    scale: 0.6,
  },
  {
    id: 'RD2',
    position: {
      x: 2457,
      y: 2857,
    },
    scale: 0.6,
  },
  {
    id: 'RD3',
    position: {
      x: 2527,
      y: 2869,
    },
    scale: 0.4,
  },
  {
    id: 'RD4',
    position: {
      x: 2573,
      y: 2864,
    },
    scale: 0.4,
  },
  {
    id: 'RD5',
    position: {
      x: 2618,
      y: 2878,
    },
    scale: 0.4,
  },
  {
    id: 'RD6',
    position: {
      x: 2669,
      y: 2668,
    },
    scale: 0.5,
  },
  {
    id: 'RD7',
    position: {
      x: 2625,
      y: 2707,
    },
    scale: 0.4,
  },
  {
    id: 'RD8',
    position: {
      x: 2571,
      y: 2683,
    },
    scale: 0.5,
  },
  {
    id: 'RD9',
    position: {
      x: 2696,
      y: 2632,
    },
    scale: 0.5,
  },
  {
    id: 'RD10',
    position: {
      x: 2390,
      y: 2933,
    },
    scale: 0.6,
  },
  {
    id: 'RD11',
    position: {
      x: 2354,
      y: 2975,
    },
    scale: 0.6,
  },
  {
    id: 'RD12',
    position: {
      x: 2344,
      y: 3049,
    },
    scale: 0.3,
  },
  {
    id: 'RD13',
    position: {
      x: 2306,
      y: 3065,
    },
    scale: 0.3,
  },
  {
    id: 'RD14',
    position: {
      x: 2353,
      y: 3102,
    },
    scale: 0.3,
  },
  {
    id: 'RD15',
    position: {
      x: 2823,
      y: 2638,
    },
    scale: 0.6,
  },
  {
    id: 'RD16',
    position: {
      x: 2847,
      y: 2716,
    },
    scale: 0.3,
  },
  {
    id: 'RD17',
    position: {
      x: 2830,
      y: 2801,
    },
    scale: 0.5,
  },
  {
    id: 'RD18',
    position: {
      x: 2873,
      y: 2885,
    },
    scale: 0.5,
  },
  {
    id: 'RD19',
    position: {
      x: 2828,
      y: 2919,
    },
    scale: 0.5,
  },
  {
    id: 'RD20',
    position: {
      x: 2884,
      y: 2948,
    },
    scale: 0.5,
  },
  {
    id: 'RD21',
    position: {
      x: 2855,
      y: 3002,
    },
    scale: 0.5,
  },
  {
    id: 'RD22',
    position: {
      x: 2894,
      y: 3092,
    },
    scale: 0.5,
  },
  {
    id: 'RD23',
    position: {
      x: 2890,
      y: 3218,
    },
    scale: 0.4,
  },
  {
    id: 'RD24',
    position: {
      x: 2887,
      y: 3272,
    },
    scale: 0.4,
  },
  {
    id: 'RD25',
    position: {
      x: 2897,
      y: 3317,
    },
    scale: 0.4,
  },
  {
    id: 'RD26',
    position: {
      x: 2850,
      y: 3353,
    },
    scale: 0.4,
  },
  {
    id: 'RD27',
    position: {
      x: 2878,
      y: 3395,
    },
    scale: 0.4,
  },
  {
    id: 'RD28',
    position: {
      x: 2824,
      y: 3422,
    },
    scale: 0.4,
  },
  {
    id: 'RD29',
    position: {
      x: 2875,
      y: 3469,
    },
    scale: 0.4,
  },
  {
    id: 'RD30',
    position: {
      x: 2842,
      y: 3539,
    },
    scale: 0.4,
  },
  {
    id: 'RD31',
    position: {
      x: 2841,
      y: 3607,
    },
    scale: 0.4,
  },
  {
    id: 'RD32',
    position: {
      x: 2860,
      y: 3653,
    },
    scale: 0.3,
  },
  {
    id: 'RD33',
    position: {
      x: 2854,
      y: 3689,
    },
    scale: 0.3,
  },
  {
    id: 'RD34',
    position: {
      x: 2857,
      y: 3738,
    },
    scale: 0.3,
  },
  {
    id: 'RD35',
    position: {
      x: 2855,
      y: 3781,
    },
    scale: 0.3,
  },
  {
    id: 'RD36',
    position: {
      x: 2855,
      y: 3822,
    },
    scale: 0.3,
  },
  {
    id: 'RD37',
    position: {
      x: 2854,
      y: 3877,
    },
    scale: 0.3,
  },
  {
    id: 'RD38',
    position: {
      x: 2850,
      y: 3917,
    },
    scale: 0.3,
  },
  {
    id: 'RD39',
    position: {
      x: 2843,
      y: 3960,
    },
    scale: 0.3,
  },
  {
    id: 'RD40',
    position: {
      x: 2829,
      y: 4013,
    },
    scale: 0.4,
  },
  {
    id: 'RD41',
    position: {
      x: 2830,
      y: 4046,
    },
    scale: 0.4,
  },
  {
    id: 'RD42',
    position: {
      x: 2835,
      y: 4080,
    },
    scale: 0.4,
  },
  {
    id: 'RD43',
    position: {
      x: 2794,
      y: 4116,
    },
    scale: 0.3,
  },
  {
    id: 'RD44',
    position: {
      x: 2822,
      y: 4150,
    },
    scale: 0.3,
  },
  {
    id: 'RD45',
    position: {
      x: 2777,
      y: 4185,
    },
    scale: 0.3,
  },
  {
    id: 'RD46',
    position: {
      x: 2789,
      y: 4225,
    },
    scale: 0.3,
  },
  {
    id: 'RD47',
    position: {
      x: 2751,
      y: 4250,
    },
    scale: 0.3,
  },
  {
    id: 'RD48',
    position: {
      x: 2709,
      y: 4309,
    },
    scale: 0.5,
  },
  {
    id: 'RD49',
    position: {
      x: 2658,
      y: 4352,
    },
    scale: 0.4,
  },
  {
    id: 'RD50',
    position: {
      x: 2601,
      y: 4406,
    },
    scale: 0.4,
  },
  {
    id: 'RD51',
    position: {
      x: 2555,
      y: 4433,
    },
    scale: 0.4,
  },
  {
    id: 'RD52',
    position: {
      x: 2518,
      y: 4465,
    },
    scale: 0.3,
  },
  {
    id: 'RD53',
    position: {
      x: 2484,
      y: 4511,
    },
    scale: 0.3,
  },
  {
    id: 'RD54',
    position: {
      x: 2436,
      y: 4584,
    },
    scale: 0.5,
  },
  {
    id: 'RD55',
    position: {
      x: 2414,
      y: 4658,
    },
    scale: 0.4,
  },
  {
    id: 'RD56',
    position: {
      x: 2412,
      y: 4709,
    },
    scale: 0.4,
  },
  {
    id: 'RD57',
    position: {
      x: 2349,
      y: 4712,
    },
    scale: 0.4,
  },
  {
    id: 'RD58',
    position: {
      x: 2348,
      y: 4782,
    },
    scale: 0.4,
  },
  {
    id: 'RD59',
    position: {
      x: 2305,
      y: 4799,
    },
    scale: 0.4,
  },
  {
    id: 'RD60',
    position: {
      x: 2320,
      y: 4854,
    },
    scale: 0.4,
  },
  {
    id: 'RD61',
    position: {
      x: 2259,
      y: 4852,
    },
    scale: 0.4,
  },
  {
    id: 'RD62',
    position: {
      x: 2259,
      y: 4913,
    },
    scale: 0.4,
  },
  {
    id: 'RD63',
    position: {
      x: 2205,
      y: 4941,
    },
    scale: 0.4,
  },
  {
    id: 'RD64',
    position: {
      x: 2179,
      y: 4988,
    },
    scale: 0.4,
  },
  {
    id: 'RD65',
    position: {
      x: 2128,
      y: 5007,
    },
    scale: 0.4,
  },
  {
    id: 'RD66',
    position: {
      x: 2064,
      y: 5009,
    },
    scale: 0.4,
  },
  {
    id: 'RD67',
    position: {
      x: 1993,
      y: 5032,
    },
    scale: 0.4,
  },
  {
    id: 'RD68',
    position: {
      x: 1940,
      y: 5061,
    },
    scale: 0.4,
  },
  {
    id: 'RD69',
    position: {
      x: 1871,
      y: 5073,
    },
    scale: 0.4,
  },
  {
    id: 'RD70',
    position: {
      x: 1808,
      y: 5071,
    },
    scale: 0.4,
  },
  {
    id: 'RD71',
    position: {
      x: 1757,
      y: 5066,
    },
    scale: 0.4,
  },
  {
    id: 'RD72',
    position: {
      x: 1705,
      y: 5078,
    },
    scale: 0.4,
  },
  {
    id: 'RD73',
    position: {
      x: 1651,
      y: 5057,
    },
    scale: 0.4,
  },
  {
    id: 'RD74',
    position: {
      x: 1604,
      y: 5058,
    },
    scale: 0.4,
  },
  {
    id: 'RD75',
    position: {
      x: 1534,
      y: 5053,
    },
    scale: 0.4,
  },
  {
    id: 'RD76',
    position: {
      x: 1478,
      y: 5033,
    },
    scale: 0.4,
  },
  {
    id: 'RD77',
    position: {
      x: 1426,
      y: 5033,
    },
    scale: 0.4,
  },
  {
    id: 'RD78',
    position: {
      x: 1369,
      y: 5012,
    },
    scale: 0.4,
  },
  {
    id: 'RD79',
    position: {
      x: 1314,
      y: 4985,
    },
    scale: 0.4,
  },
  {
    id: 'RD80',
    position: {
      x: 1282,
      y: 4965,
    },
    scale: 0.4,
  },
  {
    id: 'RD81',
    position: {
      x: 1246,
      y: 4935,
    },
    scale: 0.4,
  },
  {
    id: 'RD82',
    position: {
      x: 1216,
      y: 4882,
    },
    scale: 0.4,
  },
  {
    id: 'RD83',
    position: {
      x: 1174,
      y: 4860,
    },
    scale: 0.4,
  },
  {
    id: 'RD84',
    position: {
      x: 1149,
      y: 4803,
    },
    scale: 0.4,
  },
  {
    id: 'RD85',
    position: {
      x: 1139,
      y: 4756,
    },
    scale: 0.4,
  },
  {
    id: 'RD86',
    position: {
      x: 1095,
      y: 4724,
    },
    scale: 0.4,
  },
  {
    id: 'RD87',
    position: {
      x: 1094,
      y: 4665,
    },
    scale: 0.4,
  },
  {
    id: 'RD88',
    position: {
      x: 1086,
      y: 4615,
    },
    scale: 0.4,
  },
  {
    id: 'RD89',
    position: {
      x: 1050,
      y: 4586,
    },
    scale: 0.4,
  },
  {
    id: 'RD90',
    position: {
      x: 1027,
      y: 4525,
    },
    scale: 0.4,
  },
  {
    id: 'RD91',
    position: {
      x: 998,
      y: 4462,
    },
    scale: 0.4,
  },
  {
    id: 'RD92',
    position: {
      x: 955,
      y: 4420,
    },
    scale: 0.4,
  },
  {
    id: 'RD93',
    position: {
      x: 922,
      y: 4374,
    },
    scale: 0.4,
  },
  {
    id: 'RD94',
    position: {
      x: 873,
      y: 4341,
    },
    scale: 0.4,
  },
  {
    id: 'RD95',
    position: {
      x: 825,
      y: 4300,
    },
    scale: 0.4,
  },
  {
    id: 'RD96',
    position: {
      x: 769,
      y: 4309,
    },
    scale: 0.4,
  },
  {
    id: 'RD97',
    position: {
      x: 703,
      y: 4321,
    },
    scale: 0.4,
  },
  {
    id: 'RD98',
    position: {
      x: 637,
      y: 4323,
    },
    scale: 0.4,
  },
  {
    id: 'RD99',
    position: {
      x: 572,
      y: 4335,
    },
    scale: 0.4,
  },
  {
    id: 'SD1',
    position: {
      x: 2551,
      y: 3062,
    },
    scale: 0.4,
  },
  {
    id: 'SD2',
    position: {
      x: 2532,
      y: 3111,
    },
    scale: 0.2,
  },
  {
    id: 'SD3',
    position: {
      x: 2542,
      y: 3012,
    },
    scale: 0.3,
  },
  {
    id: 'SD4',
    position: {
      x: 2440,
      y: 3005,
    },
    scale: 0.3,
  },
  {
    id: 'SD5',
    position: {
      x: 2422,
      y: 3062,
    },
    scale: 0.3,
  },
  {
    id: 'SD6',
    position: {
      x: 2490,
      y: 3048,
    },
    scale: 0.3,
  },
  {
    id: 'SD7',
    position: {
      x: 2491,
      y: 3138,
    },
    scale: 0.3,
  },
  {
    id: 'SD8',
    position: {
      x: 2581,
      y: 3137,
    },
    scale: 0.3,
  },
  {
    id: 'SD9',
    position: {
      x: 2606,
      y: 3099,
    },
    scale: 0.3,
  },
  {
    id: 'SD10',
    position: {
      x: 2612,
      y: 3031,
    },
    scale: 0.3,
  },
  {
    id: 'SD11',
    position: {
      x: 2555,
      y: 2942,
    },
    scale: 0.3,
  },
  {
    id: 'SD12',
    position: {
      x: 2489,
      y: 2965,
    },
    scale: 0.3,
  },
  {
    id: 'SD13',
    position: {
      x: 2425,
      y: 3129,
    },
    scale: 0.3,
  },
  {
    id: 'SD14',
    position: {
      x: 2453,
      y: 3178,
    },
    scale: 0.3,
  },
  {
    id: 'SD15',
    position: {
      x: 2535,
      y: 3205,
    },
    scale: 0.3,
  },
  {
    id: 'SD16',
    position: {
      x: 2607,
      y: 3176,
    },
    scale: 0.3,
  },
  {
    id: 'SD17',
    position: {
      x: 2665,
      y: 3089,
    },
    scale: 0.3,
  },
  {
    id: 'SD18',
    position: {
      x: 2672,
      y: 3024,
    },
    scale: 0.3,
  },
  {
    id: 'SD19',
    position: {
      x: 2620,
      y: 2956,
    },
    scale: 0.3,
  },
  {
    id: 'SD20',
    position: {
      x: 2681,
      y: 3220,
    },
    scale: 0.8,
  },
  {
    id: 'TD1',
    position: {
      x: 2482,
      y: 3664,
    },
    scale: 1.6,
  },
  {
    id: 'TD2',
    position: {
      x: 2334,
      y: 3968,
    },
    scale: 0.7,
  },
  {
    id: 'TD3',
    position: {
      x: 2667,
      y: 3768,
    },
    scale: 0.7,
  },
  {
    id: 'TD4',
    position: {
      x: 2588,
      y: 3873,
    },
    scale: 0.7,
  },
  {
    id: 'TD5',
    position: {
      x: 2479,
      y: 3902,
    },
    scale: 0.7,
  },
  {
    id: 'TD6',
    position: {
      x: 2322,
      y: 3838,
    },
    scale: 0.7,
  },
  {
    id: 'TD7',
    position: {
      x: 2283,
      y: 3709,
    },
    scale: 0.7,
  },
  {
    id: 'TD8',
    position: {
      x: 2318,
      y: 3545,
    },
    scale: 0.7,
  },
  {
    id: 'TD9',
    position: {
      x: 2441,
      y: 3466,
    },
    scale: 0.7,
  },
  {
    id: 'TD10',
    position: {
      x: 2622,
      y: 3481,
    },
    scale: 0.7,
  },
  {
    id: 'TD11',
    position: {
      x: 2668,
      y: 3621,
    },
    scale: 0.7,
  },
  {
    id: 'UD1',
    position: {
      x: 2502,
      y: 4248,
    },
    scale: 0.4,
  },
  {
    id: 'UD2',
    position: {
      x: 2472,
      y: 4183,
    },
    scale: 0.4,
  },
  {
    id: 'UD3',
    position: {
      x: 2508,
      y: 4116,
    },
    scale: 0.4,
  },
  {
    id: 'UD4',
    position: {
      x: 2559,
      y: 4154,
    },
    scale: 0.4,
  },
  {
    id: 'UD5',
    position: {
      x: 2594,
      y: 4213,
    },
    scale: 0.4,
  },
  {
    id: 'UD6',
    position: {
      x: 2568,
      y: 4291,
    },
    scale: 0.4,
  },
  {
    id: 'UD7',
    position: {
      x: 2524,
      y: 4332,
    },
    scale: 0.4,
  },
  {
    id: 'UD8',
    position: {
      x: 2462,
      y: 4359,
    },
    scale: 0.4,
  },
  {
    id: 'UD9',
    position: {
      x: 2409,
      y: 4311,
    },
    scale: 0.5,
  },
  {
    id: 'UD10',
    position: {
      x: 2357,
      y: 4236,
    },
    scale: 0.5,
  },
  {
    id: 'UD11',
    position: {
      x: 2428,
      y: 4231,
    },
    scale: 0.5,
  },
  {
    id: 'UD12',
    position: {
      x: 2357,
      y: 4160,
    },
    scale: 0.5,
  },
  {
    id: 'UD13',
    position: {
      x: 2417,
      y: 4124,
    },
    scale: 0.5,
  },
]

export interface BoundaryException {
  position: {x: number; y: number}
  width: number
  height: number
}

export const BOUNDARY_EXCEPTION_CONFIG_LIST: BoundaryException[] = [
  {
    position: {
      x: 2071,
      y: 720,
    },
    width: 40,
    height: 110,
  },
]

export const MOBS_SPRITESHEET_URLS = range(0, 26).map((index) => `/mob-sprites-${index}.png`)
