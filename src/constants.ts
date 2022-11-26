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

export interface MobConfig {
  scale?: number
  position: {x: number; y: number}
  boundaryWidthScale?: number
  boundaryHeightScale?: number
  boundaryHeightPadding?: number
  boundaryMarginBottom?: number
}

export const MOB_CONFIG_LIST: MobConfig[] = [
  {
    position: {
      x: 929,
      y: 702,
    },
    scale: 1,
  },
  {
    scale: 1.5,
    position: {
      x: 437,
      y: 319,
    },
  },
  {
    position: {
      x: 1130,
      y: 781,
    },
    scale: 1,
  },
  {
    scale: 0.7,
    position: {
      x: 826,
      y: 898,
    },
  },
  {
    scale: 0.4,
    position: {
      x: 580,
      y: 844,
    },
  },
  {
    scale: 0.3,
    position: {
      x: 1218,
      y: 349,
    },
  },
  {
    scale: 0.3,
    position: {
      x: 1235,
      y: 185,
    },
  },
  {
    scale: 0.3,
    position: {
      x: 1290,
      y: 360,
    },
  },
  {
    scale: 0.5,
    position: {
      x: 1217,
      y: 460,
    },
  },
  {
    scale: 0.3,
    position: {
      x: 1487,
      y: 209,
    },
  },
  {
    scale: 0.3,
    position: {
      x: 1457,
      y: 203,
    },
  },
  {
    scale: 0.4,
    position: {
      x: 1154,
      y: 390,
    },
  },
  {
    scale: 0.5,
    position: {
      x: 1128,
      y: 332,
    },
  },
  {
    position: {
      x: 1437,
      y: 372,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1129,
      y: 248,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1173,
      y: 213,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1246,
      y: 260,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1209,
      y: 260,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1330,
      y: 171,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1291,
      y: 175,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1208,
      y: 121,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1267,
      y: 102,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1371,
      y: 99,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1424,
      y: 119,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1434,
      y: 258,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1333,
      y: 290,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1375,
      y: 222,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1485,
      y: 314,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1357,
      y: 443,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1504,
      y: 435,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1610,
      y: 181,
    },
    scale: 1,
  },
  {
    position: {
      x: 1559,
      y: 394,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1611,
      y: 414,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1863,
      y: 418,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1940,
      y: 410,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1983,
      y: 406,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2033,
      y: 391,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2080,
      y: 380,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2139,
      y: 369,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2321,
      y: 392,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2759,
      y: 368,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2672,
      y: 583,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2300,
      y: 457,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2350,
      y: 449,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2372,
      y: 501,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2326,
      y: 503,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2334,
      y: 539,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2289,
      y: 691,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2465,
      y: 501,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2585,
      y: 528,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2333,
      y: 608,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2565,
      y: 678,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2541,
      y: 712,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2598,
      y: 691,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2506,
      y: 735,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2344,
      y: 761,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2358,
      y: 726,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2315,
      y: 731,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2823,
      y: 247,
    },
    scale: 0.8,
  },
  {
    position: {
      x: 2812,
      y: 108,
    },
    scale: 1.3,
  },
  {
    position: {
      x: 2656,
      y: 180,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2531,
      y: 330,
    },
    scale: 1,
  },
  {
    position: {
      x: 2368,
      y: 855,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2566,
      y: 1004,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2833,
      y: 559,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2760,
      y: 733,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2482,
      y: 1234,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 2747,
      y: 621,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2399,
      y: 645,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2599,
      y: 767,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2504,
      y: 1003,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2790,
      y: 828,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2223,
      y: 851,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2287,
      y: 848,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2755,
      y: 1113,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2316,
      y: 981,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2250,
      y: 1022,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2354,
      y: 1117,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2222,
      y: 1154,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2652,
      y: 1063,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2745,
      y: 1262,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 2738,
      y: 902,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 2796,
      y: 1043,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2874,
      y: 949,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2892,
      y: 826,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2869,
      y: 726,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2900,
      y: 626,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2840,
      y: 660,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2706,
      y: 718,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2809,
      y: 677,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2786,
      y: 468,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2830,
      y: 485,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2870,
      y: 493,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2803,
      y: 411,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2852,
      y: 448,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2827,
      y: 364,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2795,
      y: 26,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 2661,
      y: 88,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2269,
      y: 260,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2205,
      y: 222,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2327,
      y: 202,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2083,
      y: 276,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2362,
      y: 291,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2514,
      y: 197,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2257,
      y: 171,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2419,
      y: 247,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2144,
      y: 230,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2655,
      y: 294,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2210,
      y: 155,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2386,
      y: 200,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2444,
      y: 198,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2594,
      y: 113,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2525,
      y: 128,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2467,
      y: 138,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2410,
      y: 135,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2357,
      y: 142,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2305,
      y: 145,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2157,
      y: 166,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2091,
      y: 153,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1954,
      y: 330,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 2028,
      y: 152,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2011,
      y: 242,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1685,
      y: 352,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1722,
      y: 380,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1846,
      y: 283,
    },
    scale: 1.1,
  },
  {
    position: {
      x: 1983,
      y: 185,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1949,
      y: 169,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1980,
      y: 107,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1757,
      y: 140,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1839,
      y: 71,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1910,
      y: 164,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1890,
      y: 89,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1972,
      y: 141,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1941,
      y: 132,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1945,
      y: 99,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1922,
      y: 84,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1964,
      y: 69,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1928,
      y: 52,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1902,
      y: 35,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1866,
      y: 25,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1838,
      y: 28,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1814,
      y: 39,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1792,
      y: 52,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1760,
      y: 55,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1719,
      y: 110,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1701,
      y: 153,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1713,
      y: 200,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1726,
      y: 286,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1825,
      y: 152,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1855,
      y: 147,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1769,
      y: 873,
    },
    scale: 1.3,
  },
  {
    position: {
      x: 1480,
      y: 1002,
    },
    scale: 1.1,
  },
  {
    position: {
      x: 1625,
      y: 1115,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1743,
      y: 1215,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 1871,
      y: 1205,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 1992,
      y: 1219,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2069,
      y: 1162,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2048,
      y: 985,
    },
    scale: 1.5,
  },
  {
    position: {
      x: 2071,
      y: 669,
    },
    scale: 1.9,
    boundaryHeightScale: 0.4,
    boundaryHeightPadding: 65,
    // boundaryMarginBottom: 5,
  },
  {
    position: {
      x: 1798,
      y: 565,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 1874,
      y: 576,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1711,
      y: 553,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1725,
      y: 682,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1795,
      y: 718,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1618,
      y: 786,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1629,
      y: 575,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1655,
      y: 718,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1563,
      y: 590,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1509,
      y: 637,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1529,
      y: 691,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1476,
      y: 686,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2171,
      y: 498,
    },
    scale: 1,
  },
  {
    position: {
      x: 795,
      y: 1238,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 774,
      y: 1353,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 740,
      y: 1294,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 734,
      y: 1422,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 612,
      y: 1474,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 630,
      y: 1376,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 475,
      y: 1447,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 452,
      y: 1327,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 523,
      y: 1241,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 327,
      y: 1256,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 408,
      y: 1169,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 339,
      y: 1091,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 391,
      y: 1060,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 780,
      y: 1559,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 890,
      y: 1500,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 946,
      y: 1839,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 912,
      y: 1746,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 974,
      y: 1665,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1036,
      y: 1585,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1345,
      y: 1095,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1785,
      y: 1757,
    },
    scale: 0.9,
  },
  {
    position: {
      x: 1575,
      y: 1794,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1593,
      y: 1757,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1605,
      y: 1711,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1620,
      y: 1675,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1635,
      y: 1644,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1782,
      y: 1629,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1860,
      y: 1655,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1696,
      y: 1648,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1657,
      y: 1611,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1685,
      y: 1602,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1728,
      y: 1574,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1770,
      y: 1572,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1816,
      y: 1572,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1861,
      y: 1587,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1896,
      y: 1639,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1916,
      y: 1694,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1903,
      y: 1757,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1951,
      y: 1757,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1900,
      y: 1833,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1945,
      y: 1808,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1939,
      y: 1859,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1896,
      y: 1920,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1926,
      y: 1904,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1873,
      y: 1935,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1827,
      y: 1936,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1772,
      y: 1951,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1726,
      y: 1948,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1667,
      y: 1922,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1693,
      y: 1938,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 1635,
      y: 1894,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1611,
      y: 1863,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 1744,
      y: 2407,
    },
    scale: 0.8,
  },
  {
    position: {
      x: 1691,
      y: 2168,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1782,
      y: 2141,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1867,
      y: 2301,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 1771,
      y: 2639,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1857,
      y: 2541,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1639,
      y: 2637,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 1497,
      y: 2186,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 1582,
      y: 2112,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 1505,
      y: 2317,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 839,
      y: 2457,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 580,
      y: 2000,
    },
    scale: 2.4,
  },
  {
    position: {
      x: 668,
      y: 2679,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 468,
      y: 2912,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 487,
      y: 2840,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 728,
      y: 2961,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 595,
      y: 3003,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 992,
      y: 3151,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 1572,
      y: 3036,
    },
    scale: 2.4,
  },
  {
    position: {
      x: 1927,
      y: 2819,
    },
    scale: 0.8,
  },
  {
    position: {
      x: 2121,
      y: 3020,
    },
    scale: 0.8,
  },
  {
    position: {
      x: 2268,
      y: 2486,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 2282,
      y: 2103,
    },
    scale: 2.2,
  },
  {
    position: {
      x: 2183,
      y: 2193,
    },
    scale: 1,
  },
  {
    position: {
      x: 2253,
      y: 1514,
    },
    scale: 1.3,
  },
  {
    position: {
      x: 2291,
      y: 1796,
    },
    scale: 0.7,
  },
  {
    position: {
      x: 2368,
      y: 1751,
    },
    scale: 0.2,
  },
  {
    position: {
      x: 2188,
      y: 1777,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2134,
      y: 1761,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2157,
      y: 1285,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2278,
      y: 1666,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2070,
      y: 1695,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 1995,
      y: 1576,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2139,
      y: 1547,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2384,
      y: 1409,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2370,
      y: 1495,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2415,
      y: 1493,
    },
    scale: 0.6,
  },
  {
    position: {
      x: 2183,
      y: 1663,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2292,
      y: 1338,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2396,
      y: 1631,
    },
    scale: 0.5,
  },
  {
    position: {
      x: 2130,
      y: 1359,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2075,
      y: 1539,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2006,
      y: 1507,
    },
    scale: 0.3,
  },
  {
    position: {
      x: 2027,
      y: 1411,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2071,
      y: 1342,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2443,
      y: 1355,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2503,
      y: 1495,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2244,
      y: 1282,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2358,
      y: 1288,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2461,
      y: 1571,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2458,
      y: 1443,
    },
    scale: 0.4,
  },
  {
    position: {
      x: 2034,
      y: 1636,
    },
    scale: 0.4,
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
