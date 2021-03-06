function categoryLookup (id) {
  const category = {
    1: 'Just for Fun',
    2: 'Commercial',
    3: 'Community'
  }
  return category[id]
}

function regionLookup (id) {
  const regions = {
    4: 'Northland',
    2: 'Northland - Kaikohe',
    1: 'Northland - Kaitaia',
    3: 'Northland - Kawakawa',
    120: 'Northland - Kerikeri',
    173: 'Northland - Mangawhai',
    6: 'Northland - Maungaturoto',
    121: 'Northland - Paihia',
    5: 'Northland - Whangarei',
    160: 'Auckland - Albany',
    13: 'Auckland - Auckland City',
    161: 'Auckland - Botany Downs',
    162: 'Auckland - Clevedon',
    18: 'Auckland - Franklin',
    8: 'Auckland - Great Barrier Island',
    9: 'Auckland - Helensville',
    163: 'Auckland - Henderson',
    10: 'Auckland - Hibiscus Coast',
    164: 'Auckland - Kumeu',
    165: 'Auckland - Mangere',
    15: 'Auckland - Manukau',
    166: 'Auckland - New Lynn',
    12: 'Auckland - North Shore',
    167: 'Auckland - Onehunga',
    17: 'Auckland - Papakura',
    168: 'Auckland - Pukekohe',
    169: 'Auckland - Remuera',
    14: 'Auckland - Waiheke Island',
    11: 'Auckland - Waitakere',
    170: 'Auckland - Waiuku',
    7: 'Auckland - Warkworth',
    142: 'Auckland - Wellsford',
    130: 'Waikato - Cambridge',
    19: 'Waikato - Coromandel',
    25: 'Waikato - Hamilton',
    23: 'Waikato - Huntly',
    26: 'Waikato - Matamata',
    24: 'Waikato - Morrinsville',
    172: 'Waikato - Ngaruawahia',
    176: 'Waikato - Ngatea',
    28: 'Waikato - Otorohanga',
    21: 'Waikato - Paeroa',
    140: 'Waikato - Raglan',
    31: 'Waikato - Taumarunui',
    38: 'Waikato - Taupo',
    27: 'Waikato - Te Awamutu',
    30: 'Waikato - Te Kuiti',
    20: 'Waikato - Thames',
    29: 'Waikato - Tokoroa/Putaruru',
    39: 'Waikato - Turangi',
    22: 'Waikato - Waihi',
    125: 'Waikato - Whangamata',
    155: 'Waikato - Whitianga',
    32: 'Bay of Plenty - Katikati',
    174: 'Bay of Plenty - Kawerau',
    139: 'Bay of Plenty - Mt. Maunganui',
    36: 'Bay of Plenty - Opotiki',
    171: 'Bay of Plenty - Papamoa',
    37: 'Bay of Plenty - Rotorua',
    33: 'Bay of Plenty - Tauranga',
    34: 'Bay of Plenty - Te Puke',
    141: 'Bay of Plenty - Waihi Beach',
    35: 'Bay of Plenty - Whakatane',
    40: 'Gisborne - Gisborne',
    41: 'Gisborne - Ruatoria',
    44: "Hawke's Bay - Hastings",
    43: "Hawke's Bay - Napier",
    132: "Hawke's Bay - Waipukurau",
    42: "Hawke's Bay - Wairoa",
    50: 'Taranaki - Hawera',
    46: 'Taranaki - Mokau',
    47: 'Taranaki - New Plymouth',
    48: 'Taranaki - Opunake',
    49: 'Taranaki - Stratford',
    51: 'Whanganui - Ohakune',
    54: 'Whanganui - Taihape',
    52: 'Whanganui - Waiouru',
    53: 'Whanganui - Whanganui',
    56: 'Manawatu - Bulls',
    45: 'Manawatu - Dannevirke',
    138: 'Manawatu - Feilding',
    58: 'Manawatu - Levin',
    129: 'Manawatu - Manawatu',
    55: 'Manawatu - Marton',
    59: 'Manawatu - Pahiatua',
    57: 'Manawatu - Palmerston North',
    128: 'Manawatu - Woodville',
    131: 'Wairarapa - Carterton',
    61: 'Wairarapa - Featherston',
    126: 'Wairarapa - Greytown',
    62: 'Wairarapa - Martinborough',
    60: 'Wairarapa - Masterton',
    63: 'Wellington - Kapiti',
    65: 'Wellington - Lower Hutt City',
    64: 'Wellington - Porirua',
    66: 'Wellington - Upper Hutt City',
    67: 'Wellington - Wellington City',
    70: 'Nelson Bays - Golden Bay',
    71: 'Nelson Bays - Motueka',
    73: 'Nelson Bays - Murchison',
    72: 'Nelson Bays - Nelson',
    75: 'Marlborough - Blenheim',
    76: 'Marlborough - Marlborough Sounds',
    74: 'Marlborough - Picton',
    78: 'West Coast - Greymouth',
    79: 'West Coast - Hokitika',
    77: 'West Coast - Westport',
    87: 'Canterbury - Akaroa',
    83: 'Canterbury - Amberley',
    88: 'Canterbury - Ashburton',
    178: 'Canterbury - Belfast',
    81: 'Canterbury - Cheviot',
    86: 'Canterbury - Christchurch City',
    85: 'Canterbury - Darfield',
    90: 'Canterbury - Fairlie',
    179: 'Canterbury - Ferrymead',
    89: 'Canterbury - Geraldine',
    180: 'Canterbury - Halswell',
    82: 'Canterbury - Hanmer Springs',
    143: 'Canterbury - Kaiapoi',
    80: 'Canterbury - Kaikoura',
    181: 'Canterbury - Lyttelton',
    91: 'Canterbury - Mt Cook',
    84: 'Canterbury - Rangiora',
    177: 'Canterbury - Rolleston',
    182: 'Canterbury - Selwyn',
    95: 'Timaru - Oamaru - Kurow',
    96: 'Timaru - Oamaru - Oamaru',
    93: 'Timaru - Oamaru - Timaru',
    92: 'Timaru - Oamaru - Twizel',
    94: 'Timaru - Oamaru - Waimate',
    100: 'Otago - Alexandra',
    106: 'Otago - Balclutha',
    98: 'Otago - Cromwell',
    104: 'Otago - Dunedin',
    105: 'Otago - Lawrence',
    107: 'Otago - Milton',
    102: 'Otago - Palmerston',
    99: 'Otago - Queenstown',
    101: 'Otago - Ranfurly',
    103: 'Otago - Roxburgh',
    175: 'Otago - Tapanui',
    97: 'Otago - Wanaka',
    127: 'Southland - Bluff',
    115: 'Southland - Edendale',
    111: 'Southland - Gore',
    113: 'Southland - Invercargill',
    110: 'Southland - Lumsden',
    109: 'Southland - Otautau',
    114: 'Southland - Riverton',
    117: 'Southland - Stewart Island',
    108: 'Southland - Te Anau',
    116: 'Southland - Tokanui',
    112: 'Southland - Winton',
    118: 'Chatham Islands'
  }
  return regions[id]
}

function skillLookup (skill) {
  const skills = [
    { value: 1, label: 'Social Media' },
    { value: 2, label: 'Blockchain' },
    { value: 3, label: 'Web Development' },
    { value: 4, label: 'Machine Learning' },
    { value: 5, label: 'Copywriting' },
    { value: 6, label: 'Digital Communication' },
    { value: 7, label: 'Basic' },
    { value: 8, label: 'Database Management' },
    { value: 9, label: 'Data Analysis' },
    { value: 10, label: 'Data Mining' },
    { value: 11, label: 'Search Engine Optimization (SEO)' },
    { value: 12, label: 'Marketing Automation & EMS' },
    { value: 13, label: 'Finance' },
    { value: 14, label: 'Budgeting and Accounts' },
    { value: 15, label: 'UI and UX Design' },
    { value: 16, label: 'Visual Design' },
    { value: 17, label: 'Storytelling' },
    { value: 18, label: 'iOS Development' },
    { value: 19, label: 'Android Development' },
    { value: 20, label: 'Neural Networks' }
  ]

  const a = skills.map((obj) => {
    if (obj.value === skill) {
      return obj.label
    }
  })
  return a
}

function seekingLookup (id) {
  const seeking = {
    1: 'commerical partners',
    2: 'skilled people.',
    3: 'pro-bono or voluntary contributions.',
    4: 'like-minded people to brainstorm.'
  }

  return seeking[id]
}

function startedLookup (id) {
  const seeking = {
    1: 'Brand spanking new idea',
    2: 'Project already in motion'
  }

  return seeking[id]
}

module.exports = {
  regionLookup,
  categoryLookup,
  skillLookup,
  seekingLookup,
  startedLookup
}
