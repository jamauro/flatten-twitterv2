import { flatten } from 'flatten-twitterv2';

// this is an example response from the Twitter v2 API. It's long, so scroll to the bottom... :)
const response = {
  "data": [
    {
      "author_id": "12",
      "id": "1426892980749848579",
      "public_metrics": {
        "retweet_count": 53,
        "reply_count": 74,
        "like_count": 319,
        "quote_count": 13
      },
      "text": "#wtfhappenedin1971",
      "entities": {
        "hashtags": [
          {
            "start": 0,
            "end": 18,
            "tag": "wtfhappenedin1971"
          }
        ]
      },
      "conversation_id": "1426892980749848579",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "und",
      "created_at": "2021-08-15T13:06:11.000Z"
    },
    {
      "attachments": {
        "media_keys": [
          "7_1171884565499142144"
        ]
      },
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 14,
            "username": "Just2Bueno",
            "id": "33426811"
          }
        ],
        "annotations": [
          {
            "start": 28,
            "end": 33,
            "probability": 0.9613,
            "type": "Person",
            "normalized_text": "Nipsey"
          },
          {
            "start": 46,
            "end": 52,
            "probability": 0.4233,
            "type": "Organization",
            "normalized_text": "Bitcoin"
          }
        ],
        "urls": [
          {
            "start": 84,
            "end": 107,
            "url": "https://t.co/YJmgMsmUGs",
            "expanded_url": "https://twitter.com/Coinsnobiety/status/1171884744474333193/video/1",
            "display_url": "pic.twitter.com/YJmgMsmUGs"
          }
        ]
      },
      "id": "1426890384660172806",
      "public_metrics": {
        "retweet_count": 378,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @Just2Bueno: Leave it to Nipsey to explain Bitcoin in a way you can understand\n\n https://t.co/YJmgMsmUGs",
      "conversation_id": "1426890384660172806",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1261705947069767680"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-15T12:55:52.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 11,
            "end": 24,
            "username": "NipseyHussle",
            "id": "19486963"
          }
        ],
        "urls": [
          {
            "start": 51,
            "end": 74,
            "url": "https://t.co/bwt32jVLRE",
            "expanded_url": "https://tidal.com/playlist/a4536970-8385-4faa-8e57-2a536e5f12a2",
            "display_url": "tidal.com/playlist/a4536…"
          }
        ]
      },
      "id": "1426881255711330309",
      "public_metrics": {
        "retweet_count": 123,
        "reply_count": 183,
        "like_count": 703,
        "quote_count": 10
      },
      "text": "Curated by @NipseyHussle: The Marathon Continues\n\n https://t.co/bwt32jVLRE",
      "conversation_id": "1426881255711330309",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-15T12:19:36.000Z"
    },
    {
      "author_id": "12",
      "id": "1426723570755985412",
      "entities": {
        "annotations": [
          {
            "start": 34,
            "end": 36,
            "probability": 0.8103,
            "type": "Product",
            "normalized_text": "iOS"
          }
        ]
      },
      "public_metrics": {
        "retweet_count": 336,
        "reply_count": 564,
        "like_count": 4626,
        "quote_count": 37
      },
      "text": "has anyone made a blockclock-like iOS widget?",
      "conversation_id": "1426723570755985412",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "10026364281",
            "name": "Apple"
          }
        },
        {
          "domain": {
            "id": "48",
            "name": "Product",
            "description": "Products created by Brands.  Examples: Ford Explorer, Apple iPhone."
          },
          "entity": {
            "id": "10044903039",
            "name": "Apple - iOS"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-15T01:53:01.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 10,
            "username": "LaserHodl",
            "id": "1274491960019939328"
          }
        ]
      },
      "id": "1426721627283329024",
      "public_metrics": {
        "retweet_count": 16,
        "reply_count": 28,
        "like_count": 377,
        "quote_count": 1
      },
      "text": "@LaserHodl OG",
      "in_reply_to_user_id": "1274491960019939328",
      "conversation_id": "1426719532471697409",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426719532471697409"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "und",
      "created_at": "2021-08-15T01:45:17.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "howardlindzon",
            "id": "7517052"
          },
          {
            "start": 15,
            "end": 26,
            "username": "seyitaylor",
            "id": "18094952"
          },
          {
            "start": 27,
            "end": 37,
            "username": "davewiner",
            "id": "3839"
          }
        ]
      },
      "id": "1426703331448217600",
      "public_metrics": {
        "retweet_count": 12,
        "reply_count": 16,
        "like_count": 189,
        "quote_count": 7
      },
      "text": "@howardlindzon @seyitaylor @davewiner Quality over quantity",
      "in_reply_to_user_id": "7517052",
      "conversation_id": "1426627771644715008",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426702801317421058"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "it",
      "created_at": "2021-08-15T00:32:35.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "howardlindzon",
            "id": "7517052"
          },
          {
            "start": 15,
            "end": 26,
            "username": "seyitaylor",
            "id": "18094952"
          },
          {
            "start": 27,
            "end": 37,
            "username": "davewiner",
            "id": "3839"
          }
        ],
        "annotations": [
          {
            "start": 53,
            "end": 58,
            "probability": 0.8324,
            "type": "Person",
            "normalized_text": "Howard"
          }
        ]
      },
      "id": "1426702616315273218",
      "public_metrics": {
        "retweet_count": 6,
        "reply_count": 9,
        "like_count": 156,
        "quote_count": 2
      },
      "text": "@howardlindzon @seyitaylor @davewiner You need a hug Howard?",
      "in_reply_to_user_id": "7517052",
      "conversation_id": "1426627771644715008",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426697276429279235"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-15T00:29:45.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "seyitaylor",
            "id": "18094952"
          },
          {
            "start": 12,
            "end": 22,
            "username": "davewiner",
            "id": "3839"
          },
          {
            "start": 23,
            "end": 37,
            "username": "howardlindzon",
            "id": "7517052"
          }
        ]
      },
      "id": "1426694400558698504",
      "public_metrics": {
        "retweet_count": 4,
        "reply_count": 7,
        "like_count": 102,
        "quote_count": 1
      },
      "text": "@seyitaylor @davewiner @howardlindzon True. But we are fixing.",
      "in_reply_to_user_id": "18094952",
      "conversation_id": "1426627771644715008",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426694207360671747"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-14T23:57:06.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "ireaderinokun",
            "id": "2714960622"
          },
          {
            "start": 15,
            "end": 25,
            "username": "SenWarren",
            "id": "970207298"
          }
        ]
      },
      "id": "1426534154343174145",
      "public_metrics": {
        "retweet_count": 9,
        "reply_count": 21,
        "like_count": 254,
        "quote_count": 4
      },
      "text": "@ireaderinokun @SenWarren Thank you!",
      "in_reply_to_user_id": "2714960622",
      "conversation_id": "1426521682538344451",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "10045102759",
            "name": "Elizabeth Warren",
            "description": "US Senator Elizabeth Warren (MA)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "10045102759",
            "name": "Elizabeth Warren",
            "description": "US Senator Elizabeth Warren (MA)"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426526596631089155"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-14T13:20:20.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 17,
            "username": "ireaderinokun",
            "id": "2714960622"
          },
          {
            "start": 19,
            "end": 24,
            "username": "jack",
            "id": "12"
          },
          {
            "start": 25,
            "end": 35,
            "username": "SenWarren",
            "id": "970207298"
          }
        ],
        "annotations": [
          {
            "start": 40,
            "end": 43,
            "probability": 0.9292,
            "type": "Person",
            "normalized_text": "Jack"
          }
        ]
      },
      "id": "1426531677334085632",
      "public_metrics": {
        "retweet_count": 322,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @ireaderinokun: @jack @SenWarren Hey Jack! Just to clarify, the stat the article is quoting is from a study of max 4k Nigerians who say…",
      "conversation_id": "1426531677334085632",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "10045102759",
            "name": "Elizabeth Warren",
            "description": "US Senator Elizabeth Warren (MA)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "10045102759",
            "name": "Elizabeth Warren",
            "description": "US Senator Elizabeth Warren (MA)"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1426526596631089155"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-14T13:10:30.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 9,
            "username": "ODELL",
            "id": "47966112"
          }
        ],
        "annotations": [
          {
            "start": 106,
            "end": 109,
            "probability": 0.9908,
            "type": "Person",
            "normalized_text": "Cruz"
          }
        ]
      },
      "id": "1426526014126108673",
      "public_metrics": {
        "retweet_count": 335,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @ODELL: “The Cuban people are tired,” he said. “They want a better life.”\n\n“The system isn’t working,” Cruz said, “so people are turning…",
      "conversation_id": "1426526014126108673",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1426525366420705284"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-14T12:47:59.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 101,
            "end": 111,
            "username": "SenWarren",
            "id": "970207298"
          }
        ],
        "urls": [
          {
            "start": 113,
            "end": 136,
            "url": "https://t.co/Dl11yxRKyQ",
            "expanded_url": "https://medium.com/@samanthamessing/why-progressives-should-love-bitcoin-an-open-letter-to-senator-elizabeth-warren-176ab5cc9229",
            "display_url": "medium.com/@samanthamessi…"
          }
        ]
      },
      "id": "1426521682538344451",
      "public_metrics": {
        "retweet_count": 4415,
        "reply_count": 1118,
        "like_count": 19082,
        "quote_count": 775
      },
      "text": "Wow: “32 percent of Nigerians own Bitcoin, the highest percentage in the world.” 🇳🇬 \n\nOpen letter to @SenWarren:\nhttps://t.co/Dl11yxRKyQ",
      "conversation_id": "1426521682538344451",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "10045102759",
            "name": "Elizabeth Warren",
            "description": "US Senator Elizabeth Warren (MA)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "10045102759",
            "name": "Elizabeth Warren",
            "description": "US Senator Elizabeth Warren (MA)"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-14T12:30:47.000Z"
    },
    {
      "author_id": "12",
      "id": "1426349690879102980",
      "public_metrics": {
        "retweet_count": 4485,
        "reply_count": 2154,
        "like_count": 16604,
        "quote_count": 2938
      },
      "text": "https://t.co/LOWVNVrBex",
      "conversation_id": "1426349690879102980",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "und",
      "entities": {
        "urls": [
          {
            "start": 0,
            "end": 23,
            "url": "https://t.co/LOWVNVrBex",
            "expanded_url": "https://cdn.mises.org/Anatomy%20of%20the%20State_3.pdf",
            "display_url": "cdn.mises.org/Anatomy%20of%2…"
          }
        ]
      },
      "created_at": "2021-08-14T01:07:21.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 11,
            "username": "adam3us",
            "id": "213236426"
          }
        ]
      },
      "id": "1426334393400954884",
      "public_metrics": {
        "retweet_count": 215,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @adam3us: it's a pretty phenomenal story. mind boggling really, that an anonymous protocol developer will at some point become the riche…",
      "conversation_id": "1426334393400954884",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "65",
            "name": "Interests and Hobbies Vertical",
            "description": "Top level interests and hobbies groupings, like Food or Travel"
          },
          "entity": {
            "id": "848920371311001600",
            "name": "Technology",
            "description": "Technology and computing"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "848921413196984320",
            "name": "Computer programming",
            "description": "Computer programming"
          }
        },
        {
          "domain": {
            "id": "65",
            "name": "Interests and Hobbies Vertical",
            "description": "Top level interests and hobbies groupings, like Food or Travel"
          },
          "entity": {
            "id": "848920371311001600",
            "name": "Technology",
            "description": "Technology and computing"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "848921413196984320",
            "name": "Computer programming",
            "description": "Computer programming"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "849075430715936768",
            "name": "Open source",
            "description": "Open source"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1426331758031773697"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-14T00:06:34.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "APompliano",
            "id": "339061487"
          }
        ]
      },
      "id": "1426327234093195269",
      "public_metrics": {
        "retweet_count": 112,
        "reply_count": 92,
        "like_count": 2231,
        "quote_count": 19
      },
      "text": "@APompliano Pretty much",
      "in_reply_to_user_id": "339061487",
      "conversation_id": "1426322663618879499",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426322663618879499"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T23:38:07.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 11,
            "username": "Snowden",
            "id": "2916305152"
          }
        ],
        "annotations": [
          {
            "start": 17,
            "end": 23,
            "probability": 0.5255,
            "type": "Organization",
            "normalized_text": "Taliban"
          },
          {
            "start": 34,
            "end": 44,
            "probability": 0.8546,
            "type": "Place",
            "normalized_text": "Afghanistan"
          }
        ]
      },
      "id": "1426320221133025282",
      "public_metrics": {
        "retweet_count": 5513,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @Snowden: The Taliban retaking Afghanistan in a matter of weeks as September 11th nears is a tragic symbol of the last decades.\n\nOur gov…",
      "conversation_id": "1426320221133025282",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1070724848081559554",
            "name": "Edward Snowden",
            "description": "American whistleblower and former National Security Agency contractor"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1423654286492266500",
            "name": "Edward Snowden"
          }
        },
        {
          "domain": {
            "id": "56",
            "name": "Actor",
            "description": "An actor or actress in the world, like Kate Winslet or Leonardo DiCaprio"
          },
          "entity": {
            "id": "1070724848081559554",
            "name": "Edward Snowden",
            "description": "American whistleblower and former National Security Agency contractor"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1426274233169195008"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T23:10:15.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "clarkmoody",
            "id": "14149992"
          },
          {
            "start": 12,
            "end": 20,
            "username": "jokoono",
            "id": "1036697739600580608"
          }
        ]
      },
      "id": "1426317349062418441",
      "public_metrics": {
        "retweet_count": 5,
        "reply_count": 33,
        "like_count": 159,
        "quote_count": 2
      },
      "text": "@clarkmoody @jokoono Same",
      "in_reply_to_user_id": "14149992",
      "conversation_id": "1426148703019151360",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426317234058661892"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T22:58:50.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 12,
            "username": "samkazemian",
            "id": "3265756934"
          }
        ],
        "annotations": [
          {
            "start": 44,
            "end": 46,
            "probability": 0.9663,
            "type": "Person",
            "normalized_text": "Sam"
          }
        ]
      },
      "id": "1426293267306536969",
      "public_metrics": {
        "retweet_count": 5,
        "reply_count": 23,
        "like_count": 166,
        "quote_count": 5
      },
      "text": "@samkazemian You’re sitting on it too long, Sam",
      "in_reply_to_user_id": "3265756934",
      "conversation_id": "1426283430652829699",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426289954523521026"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-13T21:23:08.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 9,
            "username": "elonmusk",
            "id": "44196397"
          }
        ]
      },
      "id": "1426292988892885002",
      "public_metrics": {
        "retweet_count": 234,
        "reply_count": 248,
        "like_count": 4459,
        "quote_count": 13
      },
      "text": "@elonmusk ❤️‍🔥",
      "in_reply_to_user_id": "44196397",
      "conversation_id": "1426283430652829699",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "808713037230157824",
            "name": "Elon Musk",
            "description": "Elon Musk"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "857878777191211008",
            "name": "Leadership",
            "description": "Leadership"
          }
        },
        {
          "domain": {
            "id": "30",
            "name": "Entities [Entity Service]",
            "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
          },
          "entity": {
            "id": "857879456773357569",
            "name": "Technology",
            "description": "Technology"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426287602089529344"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "und",
      "created_at": "2021-08-13T21:22:02.000Z"
    },
    {
      "author_id": "12",
      "id": "1426283430652829699",
      "public_metrics": {
        "retweet_count": 736,
        "reply_count": 348,
        "like_count": 8331,
        "quote_count": 45
      },
      "text": "Agree! A nym will have the greatest impact. https://t.co/mhk8577BfT",
      "conversation_id": "1426283430652829699",
      "context_annotations": [
        {
          "domain": {
            "id": "3",
            "name": "TV Shows",
            "description": "Television shows from around the world"
          },
          "entity": {
            "id": "10001466882",
            "name": "MLB Baseball",
            "description": "All the latest action from Major League Baseball."
          }
        },
        {
          "domain": {
            "id": "3",
            "name": "TV Shows",
            "description": "Television shows from around the world"
          },
          "entity": {
            "id": "10029304618",
            "name": "MLB Baseball"
          }
        },
        {
          "domain": {
            "id": "6",
            "name": "Sports Event"
          },
          "entity": {
            "id": "1356030950426038273",
            "name": "Dodgers at Mets"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "11",
            "name": "Sport",
            "description": "Types of sports, like soccer and basketball"
          },
          "entity": {
            "id": "769193663230468096",
            "name": "Baseball"
          }
        },
        {
          "domain": {
            "id": "12",
            "name": "Sports Team",
            "description": "A sports team organization, like Arsenal and the Boston Celtics"
          },
          "entity": {
            "id": "769193634889474048",
            "name": "New York Mets"
          }
        },
        {
          "domain": {
            "id": "26",
            "name": "Sports League",
            "description": ""
          },
          "entity": {
            "id": "769193602169704448",
            "name": "MLB"
          }
        },
        {
          "domain": {
            "id": "65",
            "name": "Interests and Hobbies Vertical",
            "description": "Top level interests and hobbies groupings, like Food or Travel"
          },
          "entity": {
            "id": "848920371311001600",
            "name": "Technology",
            "description": "Technology and computing"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "848921413196984320",
            "name": "Computer programming",
            "description": "Computer programming"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "849075430715936768",
            "name": "Open source",
            "description": "Open source"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1426147753214681091"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "entities": {
        "urls": [
          {
            "start": 44,
            "end": 67,
            "url": "https://t.co/mhk8577BfT",
            "expanded_url": "https://twitter.com/rohunvora/status/1426147753214681091",
            "display_url": "twitter.com/rohunvora/stat…"
          }
        ]
      },
      "created_at": "2021-08-13T20:44:03.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 13,
            "username": "LegalDaVinci",
            "id": "391523049"
          }
        ]
      },
      "id": "1426224296586842113",
      "public_metrics": {
        "retweet_count": 4,
        "reply_count": 34,
        "like_count": 42,
        "quote_count": 2
      },
      "text": "@LegalDaVinci Not easy enough yet",
      "in_reply_to_user_id": "391523049",
      "conversation_id": "1426223669718700041",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1426223975944712202"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T16:49:04.000Z"
    },
    {
      "author_id": "12",
      "id": "1426223669718700041",
      "public_metrics": {
        "retweet_count": 94,
        "reply_count": 233,
        "like_count": 874,
        "quote_count": 9
      },
      "text": "🙏 https://t.co/j1N6dInxI0",
      "conversation_id": "1426223669718700041",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974597310615553",
            "name": "Entertainment"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974597222535168",
            "name": "Online Services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "10043701887",
            "name": "Tidal"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1426223313114697729"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "und",
      "entities": {
        "urls": [
          {
            "start": 2,
            "end": 25,
            "url": "https://t.co/j1N6dInxI0",
            "expanded_url": "https://twitter.com/wale/status/1426223313114697729",
            "display_url": "twitter.com/wale/status/14…"
          }
        ]
      },
      "created_at": "2021-08-13T16:46:35.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 9,
            "username": "garrytan",
            "id": "11768582"
          },
          {
            "start": 10,
            "end": 20,
            "username": "thetrocro",
            "id": "3010775305"
          }
        ]
      },
      "id": "1426002869585592330",
      "public_metrics": {
        "retweet_count": 8,
        "reply_count": 18,
        "like_count": 171,
        "quote_count": 4
      },
      "text": "@garrytan @thetrocro $mystery to the moon",
      "in_reply_to_user_id": "11768582",
      "conversation_id": "1425922173797953539",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425948724652429315"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T02:09:12.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 7,
            "username": "Suhail",
            "id": "793023"
          },
          {
            "start": 8,
            "end": 17,
            "username": "garrytan",
            "id": "11768582"
          }
        ],
        "annotations": [
          {
            "start": 18,
            "end": 21,
            "probability": 0.4503,
            "type": "Person",
            "normalized_text": "Elon"
          },
          {
            "start": 27,
            "end": 33,
            "probability": 0.8561,
            "type": "Person",
            "normalized_text": "Satoshi"
          },
          {
            "start": 56,
            "end": 62,
            "probability": 0.7297,
            "type": "Product",
            "normalized_text": "Windows"
          }
        ]
      },
      "id": "1426001843998576645",
      "public_metrics": {
        "retweet_count": 14,
        "reply_count": 33,
        "like_count": 405,
        "quote_count": 3
      },
      "text": "@Suhail @garrytan Elon and Satoshi were both super into Windows?!",
      "in_reply_to_user_id": "793023",
      "conversation_id": "1425922173797953539",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425930121492402177"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T02:05:08.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 13,
            "username": "timothy_skim",
            "id": "792930527388971008"
          },
          {
            "start": 14,
            "end": 23,
            "username": "garrytan",
            "id": "11768582"
          }
        ]
      },
      "id": "1426000451074408450",
      "public_metrics": {
        "retweet_count": 617,
        "reply_count": 271,
        "like_count": 5491,
        "quote_count": 139
      },
      "text": "@timothy_skim @garrytan Def not in it for the money (I intend to give all mine away). I’m in it to help fix the money.",
      "in_reply_to_user_id": "792930527388971008",
      "conversation_id": "1425922173797953539",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425937464829513733"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T01:59:36.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 12,
            "username": "samkazemian",
            "id": "3265756934"
          },
          {
            "start": 13,
            "end": 26,
            "username": "IOHK_Charles",
            "id": "1376161898"
          },
          {
            "start": 27,
            "end": 38,
            "username": "APompliano",
            "id": "339061487"
          }
        ]
      },
      "id": "1425997832201424911",
      "public_metrics": {
        "retweet_count": 9,
        "reply_count": 36,
        "like_count": 305,
        "quote_count": 3
      },
      "text": "@samkazemian @IOHK_Charles @APompliano Not trolling",
      "in_reply_to_user_id": "3265756934",
      "conversation_id": "1425959950740860930",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425995949910855680"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T01:49:11.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 13,
            "username": "tharogueone1",
            "id": "1355155067289169925"
          },
          {
            "start": 14,
            "end": 30,
            "username": "BrainHarrington",
            "id": "67109577"
          },
          {
            "start": 31,
            "end": 42,
            "username": "FranBoll11",
            "id": "1390127497400967168"
          },
          {
            "start": 43,
            "end": 52,
            "username": "cory_eth",
            "id": "436399168"
          },
          {
            "start": 53,
            "end": 63,
            "username": "santisiri",
            "id": "9321342"
          }
        ]
      },
      "id": "1425992871723905026",
      "public_metrics": {
        "retweet_count": 4,
        "reply_count": 6,
        "like_count": 133,
        "quote_count": 0
      },
      "text": "@tharogueone1 @BrainHarrington @FranBoll11 @cory_eth @santisiri I always have to",
      "in_reply_to_user_id": "1355155067289169925",
      "conversation_id": "1425902576327815171",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425974217028276229"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T01:29:28.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 10,
            "username": "Thekkiidd",
            "id": "906355190726459393"
          },
          {
            "start": 11,
            "end": 22,
            "username": "dogeofcoin",
            "id": "1379848045274218506"
          },
          {
            "start": 23,
            "end": 32,
            "username": "cory_eth",
            "id": "436399168"
          },
          {
            "start": 33,
            "end": 43,
            "username": "santisiri",
            "id": "9321342"
          }
        ]
      },
      "id": "1425992534619299845",
      "public_metrics": {
        "retweet_count": 14,
        "reply_count": 13,
        "like_count": 134,
        "quote_count": 2
      },
      "text": "@Thekkiidd @dogeofcoin @cory_eth @santisiri Not focused on lightning for NFT. Lightning to enable a currency for the internet.",
      "in_reply_to_user_id": "906355190726459393",
      "conversation_id": "1425902576327815171",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "67",
            "name": "Interests and Hobbies",
            "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
          },
          "entity": {
            "id": "847894353708068864",
            "name": "Investing",
            "description": "Investing"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425973613765697537"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T01:28:08.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 15,
            "username": "CryptoSeaOtter",
            "id": "1397376165203959813"
          },
          {
            "start": 16,
            "end": 32,
            "username": "satoshiattorney",
            "id": "1367487877580541955"
          },
          {
            "start": 33,
            "end": 44,
            "username": "seyitaylor",
            "id": "18094952"
          }
        ],
        "annotations": [
          {
            "start": 72,
            "end": 75,
            "probability": 0.3401,
            "type": "Person",
            "normalized_text": "NFTs"
          }
        ]
      },
      "id": "1425992128602288129",
      "public_metrics": {
        "retweet_count": 5,
        "reply_count": 4,
        "like_count": 53,
        "quote_count": 2
      },
      "text": "@CryptoSeaOtter @satoshiattorney @seyitaylor I agree with the spirit of NFTs. And I never said anything about Bitcoin and NFTs",
      "in_reply_to_user_id": "1397376165203959813",
      "conversation_id": "1425890866623823876",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "67",
            "name": "Interests and Hobbies",
            "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
          },
          "entity": {
            "id": "847894353708068864",
            "name": "Investing",
            "description": "Investing"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425979562198929408"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T01:26:31.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 10,
            "username": "paulmillr",
            "id": "66682794"
          },
          {
            "start": 11,
            "end": 25,
            "username": "Chelsea_FC369",
            "id": "2533004783"
          },
          {
            "start": 26,
            "end": 40,
            "username": "MiguelCervera",
            "id": "28474651"
          },
          {
            "start": 41,
            "end": 55,
            "username": "iamDCinvestor",
            "id": "956670268596015105"
          },
          {
            "start": 56,
            "end": 63,
            "username": "mdudas",
            "id": "7184612"
          }
        ]
      },
      "id": "1425991659859451910",
      "public_metrics": {
        "retweet_count": 3,
        "reply_count": 8,
        "like_count": 109,
        "quote_count": 2
      },
      "text": "@paulmillr @Chelsea_FC369 @MiguelCervera @iamDCinvestor @mdudas True bluesky has taken a long time. We decided to do research before hiring lead, all is public. Lead announcement next week. This is going to take time, as we said. \n\nThe icons you mention were bought. It’s an ad product.",
      "in_reply_to_user_id": "66682794",
      "conversation_id": "1425909681667596296",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425981896853495817"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T01:24:40.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "Chelsea_FC369",
            "id": "2533004783"
          },
          {
            "start": 15,
            "end": 29,
            "username": "MiguelCervera",
            "id": "28474651"
          },
          {
            "start": 30,
            "end": 44,
            "username": "iamDCinvestor",
            "id": "956670268596015105"
          },
          {
            "start": 45,
            "end": 52,
            "username": "mdudas",
            "id": "7184612"
          }
        ]
      },
      "id": "1425975707105116170",
      "public_metrics": {
        "retweet_count": 9,
        "reply_count": 8,
        "like_count": 190,
        "quote_count": 5
      },
      "text": "@Chelsea_FC369 @MiguelCervera @iamDCinvestor @mdudas Nah. Working to decentralize both.",
      "in_reply_to_user_id": "2533004783",
      "conversation_id": "1425909681667596296",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425971026626850817"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T00:21:16.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 10,
            "end": 25,
            "username": "AllisonReichel",
            "id": "1049084568828043264"
          },
          {
            "start": 26,
            "end": 37,
            "username": "APompliano",
            "id": "339061487"
          }
        ]
      },
      "id": "1425975471259455492",
      "public_metrics": {
        "retweet_count": 1,
        "reply_count": 6,
        "like_count": 83,
        "quote_count": 1
      },
      "text": "@Viaware1 @AllisonReichel @APompliano What OS version?",
      "in_reply_to_user_id": "1396197233448599554",
      "conversation_id": "1425959950740860930",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425972262616895493"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T00:20:20.000Z"
    },
    {
      "attachments": {
        "media_keys": [
          "3_1425970749769232389"
        ]
      },
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 15,
            "username": "AllisonReichel",
            "id": "1049084568828043264"
          },
          {
            "start": 16,
            "end": 27,
            "username": "APompliano",
            "id": "339061487"
          }
        ],
        "urls": [
          {
            "start": 34,
            "end": 57,
            "url": "https://t.co/yBeaU0Dd3l",
            "expanded_url": "https://twitter.com/jack/status/1425970753212665862/photo/1",
            "display_url": "pic.twitter.com/yBeaU0Dd3l"
          }
        ]
      },
      "id": "1425970753212665862",
      "public_metrics": {
        "retweet_count": 26,
        "reply_count": 60,
        "like_count": 1291,
        "quote_count": 7
      },
      "text": "@AllisonReichel @APompliano False https://t.co/yBeaU0Dd3l",
      "in_reply_to_user_id": "1049084568828043264",
      "conversation_id": "1425959950740860930",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425967193729159168"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-13T00:01:35.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "MiguelCervera",
            "id": "28474651"
          },
          {
            "start": 15,
            "end": 29,
            "username": "iamDCinvestor",
            "id": "956670268596015105"
          },
          {
            "start": 30,
            "end": 37,
            "username": "mdudas",
            "id": "7184612"
          }
        ]
      },
      "id": "1425969744256065543",
      "public_metrics": {
        "retweet_count": 10,
        "reply_count": 15,
        "like_count": 165,
        "quote_count": 3
      },
      "text": "@MiguelCervera @iamDCinvestor @mdudas As have you on Bitcoin ;) decentralization isn’t an end goal tho, it’s just one method of fixing the money.",
      "in_reply_to_user_id": "28474651",
      "conversation_id": "1425909681667596296",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425967313837125632"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:57:34.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 16,
            "username": "satoshiattorney",
            "id": "1367487877580541955"
          },
          {
            "start": 17,
            "end": 28,
            "username": "seyitaylor",
            "id": "18094952"
          }
        ]
      },
      "id": "1425967906806976514",
      "public_metrics": {
        "retweet_count": 2,
        "reply_count": 3,
        "like_count": 71,
        "quote_count": 1
      },
      "text": "@satoshiattorney @seyitaylor Not fighting your project. Was agreeing it wasn’t a good idea.",
      "in_reply_to_user_id": "1367487877580541955",
      "conversation_id": "1425890866623823876",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425905615688273924"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:50:16.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 3,
            "username": "pt",
            "id": "9571702"
          },
          {
            "start": 4,
            "end": 15,
            "username": "seyitaylor",
            "id": "18094952"
          }
        ]
      },
      "id": "1425967199186038791",
      "public_metrics": {
        "retweet_count": 14,
        "reply_count": 19,
        "like_count": 262,
        "quote_count": 7
      },
      "text": "@pt @seyitaylor I don’t believe any one company should “own” the NFT space.",
      "in_reply_to_user_id": "9571702",
      "conversation_id": "1425890866623823876",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "67",
            "name": "Interests and Hobbies",
            "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
          },
          "entity": {
            "id": "847894353708068864",
            "name": "Investing",
            "description": "Investing"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425905266558603268"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:47:28.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "dogeofcoin",
            "id": "1379848045274218506"
          },
          {
            "start": 12,
            "end": 21,
            "username": "cory_eth",
            "id": "436399168"
          },
          {
            "start": 22,
            "end": 32,
            "username": "santisiri",
            "id": "9321342"
          }
        ]
      },
      "id": "1425966846709223424",
      "public_metrics": {
        "retweet_count": 3,
        "reply_count": 8,
        "like_count": 53,
        "quote_count": 0
      },
      "text": "@dogeofcoin @cory_eth @santisiri It has value to lots of people. Just not what I’m focused on.",
      "in_reply_to_user_id": "1379848045274218506",
      "conversation_id": "1425902576327815171",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425938877089525763"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:46:04.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "FranBoll11",
            "id": "1390127497400967168"
          },
          {
            "start": 12,
            "end": 21,
            "username": "cory_eth",
            "id": "436399168"
          },
          {
            "start": 22,
            "end": 32,
            "username": "santisiri",
            "id": "9321342"
          }
        ]
      },
      "id": "1425966622771191811",
      "public_metrics": {
        "retweet_count": 69,
        "reply_count": 52,
        "like_count": 597,
        "quote_count": 12
      },
      "text": "@FranBoll11 @cory_eth @santisiri Focus on one thing isn’t hate of the others. I’ve made my concerns known about others in comparison to Bitcoin. Key ones are founding principles, security, and centralization.",
      "in_reply_to_user_id": "1390127497400967168",
      "conversation_id": "1425902576327815171",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425928701586382853"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:45:10.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "MiguelCervera",
            "id": "28474651"
          },
          {
            "start": 15,
            "end": 29,
            "username": "iamDCinvestor",
            "id": "956670268596015105"
          },
          {
            "start": 30,
            "end": 37,
            "username": "mdudas",
            "id": "7184612"
          }
        ]
      },
      "id": "1425965990538584065",
      "public_metrics": {
        "retweet_count": 4,
        "reply_count": 16,
        "like_count": 228,
        "quote_count": 1
      },
      "text": "@MiguelCervera @iamDCinvestor @mdudas A stretch to say I’m fixed on it",
      "in_reply_to_user_id": "28474651",
      "conversation_id": "1425909681667596296",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425964611208028164"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:42:39.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "iamDCinvestor",
            "id": "956670268596015105"
          },
          {
            "start": 15,
            "end": 22,
            "username": "mdudas",
            "id": "7184612"
          }
        ]
      },
      "id": "1425963920272068613",
      "public_metrics": {
        "retweet_count": 128,
        "reply_count": 70,
        "like_count": 1166,
        "quote_count": 24
      },
      "text": "@iamDCinvestor @mdudas Focusing on the principles and structure behind any currency is what matters. Hence, for me, Bitcoin.",
      "in_reply_to_user_id": "956670268596015105",
      "conversation_id": "1425909681667596296",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425918443698655234"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T23:34:26.000Z"
    },
    {
      "author_id": "12",
      "id": "1425947869568282624",
      "public_metrics": {
        "retweet_count": 209,
        "reply_count": 456,
        "like_count": 2031,
        "quote_count": 39
      },
      "text": "⚡️ https://t.co/8jujGNdAig",
      "conversation_id": "1425947869568282624",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPad",
      "lang": "und",
      "entities": {
        "urls": [
          {
            "start": 3,
            "end": 26,
            "url": "https://t.co/8jujGNdAig",
            "expanded_url": "https://youtu.be/nWOLCJjDc1s",
            "display_url": "youtu.be/nWOLCJjDc1s"
          }
        ]
      },
      "created_at": "2021-08-12T22:30:39.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 9,
            "username": "cory_eth",
            "id": "436399168"
          },
          {
            "start": 10,
            "end": 20,
            "username": "santisiri",
            "id": "9321342"
          }
        ]
      },
      "id": "1425926717663809539",
      "public_metrics": {
        "retweet_count": 108,
        "reply_count": 138,
        "like_count": 1288,
        "quote_count": 37
      },
      "text": "@cory_eth @santisiri Disrupting “Big Tech” is exactly what’s needed and what I want.\n\nNo one technology alone will do that though.",
      "in_reply_to_user_id": "436399168",
      "conversation_id": "1425902576327815171",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425902576327815171"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-12T21:06:36.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 15,
            "username": "openculture",
            "id": "19826509"
          }
        ],
        "annotations": [
          {
            "start": 17,
            "end": 26,
            "probability": 0.9969,
            "type": "Person",
            "normalized_text": "Carl Sagan"
          },
          {
            "start": 52,
            "end": 58,
            "probability": 0.9368,
            "type": "Place",
            "normalized_text": "America"
          }
        ]
      },
      "id": "1425920029158166529",
      "public_metrics": {
        "retweet_count": 236,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @openculture: Carl Sagan Predicts the Decline of America\n\nUnable to Know \"What’s True,\" We Will Slide, \"Without Noticing, Back into Supe…",
      "conversation_id": "1425920029158166529",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "65",
            "name": "Interests and Hobbies Vertical",
            "description": "Top level interests and hobbies groupings, like Food or Travel"
          },
          "entity": {
            "id": "854692455005921281",
            "name": "Science",
            "description": "Science"
          }
        },
        {
          "domain": {
            "id": "30",
            "name": "Entities [Entity Service]",
            "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
          },
          "entity": {
            "id": "847899195566510080",
            "name": "Physics",
            "description": "Physics"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1425919324099776514"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T20:40:01.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "iamDCinvestor",
            "id": "956670268596015105"
          },
          {
            "start": 15,
            "end": 22,
            "username": "mdudas",
            "id": "7184612"
          }
        ]
      },
      "id": "1425916582329528325",
      "public_metrics": {
        "retweet_count": 417,
        "reply_count": 504,
        "like_count": 4867,
        "quote_count": 146
      },
      "text": "@iamDCinvestor @mdudas I’m focused on a native currency for the internet. That is all.",
      "in_reply_to_user_id": "956670268596015105",
      "conversation_id": "1425909681667596296",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425909681667596296"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T20:26:20.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "seyitaylor",
            "id": "18094952"
          }
        ],
        "annotations": [
          {
            "start": 38,
            "end": 44,
            "probability": 0.6303,
            "type": "Product",
            "normalized_text": "Twitter"
          }
        ]
      },
      "id": "1425893910728036359",
      "public_metrics": {
        "retweet_count": 996,
        "reply_count": 742,
        "like_count": 7537,
        "quote_count": 398
      },
      "text": "@seyitaylor Agreed.\n\nEvery account on Twitter being able to link to a Lightning wallet however…",
      "in_reply_to_user_id": "18094952",
      "conversation_id": "1425890866623823876",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596752842752",
            "name": "Services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "10045225402",
            "name": "Twitter"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425890866623823876"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-12T18:56:14.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 6,
            "username": "lizzo",
            "id": "323417384"
          },
          {
            "start": 7,
            "end": 17,
            "username": "iamcardib",
            "id": "866953267"
          }
        ]
      },
      "id": "1425875791850745872",
      "public_metrics": {
        "retweet_count": 59,
        "reply_count": 53,
        "like_count": 713,
        "quote_count": 14
      },
      "text": "@lizzo @iamcardib All thanks to the team",
      "in_reply_to_user_id": "323417384",
      "conversation_id": "1425856310348640261",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1117789006916243456",
            "name": "Lizzo",
            "description": "American rapper"
          }
        },
        {
          "domain": {
            "id": "54",
            "name": "Musician",
            "description": "A musician in the world, like Adele or Bob Dylan"
          },
          "entity": {
            "id": "1117789006916243456",
            "name": "Lizzo",
            "description": "American rapper"
          }
        },
        {
          "domain": {
            "id": "55",
            "name": "Music Genre",
            "description": "A category for a musical style, like Pop, Rock, or Rap"
          },
          "entity": {
            "id": "810937888334487552",
            "name": "Rap",
            "description": "Hip-Hop/Rap"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "875059424255135744",
            "name": "Cardi B",
            "description": "Cardi B"
          }
        },
        {
          "domain": {
            "id": "54",
            "name": "Musician",
            "description": "A musician in the world, like Adele or Bob Dylan"
          },
          "entity": {
            "id": "875059424255135744",
            "name": "Cardi B",
            "description": "Cardi B"
          }
        },
        {
          "domain": {
            "id": "55",
            "name": "Music Genre",
            "description": "A category for a musical style, like Pop, Rock, or Rap"
          },
          "entity": {
            "id": "810937888334487552",
            "name": "Rap",
            "description": "Hip-Hop/Rap"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425856310348640261"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T17:44:14.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 14,
            "username": "udiWertheimer",
            "id": "14527699"
          },
          {
            "start": 15,
            "end": 21,
            "username": "0xTed",
            "id": "1286497692416380928"
          }
        ]
      },
      "id": "1425630267843268609",
      "public_metrics": {
        "retweet_count": 13,
        "reply_count": 30,
        "like_count": 470,
        "quote_count": 9
      },
      "text": "@udiWertheimer @0xTed Damn new font",
      "in_reply_to_user_id": "14527699",
      "conversation_id": "1425614719323459586",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425629607592669189"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T01:28:37.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 6,
            "username": "0xTed",
            "id": "1286497692416380928"
          },
          {
            "start": 7,
            "end": 21,
            "username": "udiWertheimer",
            "id": "14527699"
          }
        ]
      },
      "id": "1425629448834109443",
      "public_metrics": {
        "retweet_count": 130,
        "reply_count": 88,
        "like_count": 1612,
        "quote_count": 39
      },
      "text": "@0xTed @udiWertheimer There are no coincidences",
      "in_reply_to_user_id": "1286497692416380928",
      "conversation_id": "1425614719323459586",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425615337257570306"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T01:25:22.000Z"
    },
    {
      "attachments": {
        "media_keys": [
          "3_1425614089326370821"
        ]
      },
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 7,
            "end": 20,
            "username": "getvicarious",
            "id": "948493988897554433"
          }
        ],
        "urls": [
          {
            "start": 264,
            "end": 287,
            "url": "https://t.co/ZfSg9pGeds",
            "expanded_url": "https://twitter.com/jack/status/1425614093243846657/photo/1",
            "display_url": "pic.twitter.com/ZfSg9pGeds"
          }
        ]
      },
      "id": "1425614093243846657",
      "public_metrics": {
        "retweet_count": 627,
        "reply_count": 940,
        "like_count": 5006,
        "quote_count": 630
      },
      "text": "I used @getvicarious to create and sync a list of all accounts I’m following, set that list to be reverse chron, named it “Latest” and pinned it, and now I can quickly swipe between ranked (algorithm) and all tweets as they happen\n\n(inspired by an idea from team) https://t.co/ZfSg9pGeds",
      "conversation_id": "1425614093243846657",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T00:24:21.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "teamikon12",
            "id": "1361477782807568385"
          },
          {
            "start": 12,
            "end": 22,
            "username": "zackvoell",
            "id": "2373682811"
          }
        ]
      },
      "id": "1425611177095204867",
      "public_metrics": {
        "retweet_count": 6,
        "reply_count": 20,
        "like_count": 283,
        "quote_count": 6
      },
      "text": "@teamikon12 @zackvoell Might be your shift key",
      "in_reply_to_user_id": "1361477782807568385",
      "conversation_id": "1425561767007203328",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425567013485760515"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T00:12:45.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 6,
            "username": "C40LF",
            "id": "1212964879172132866"
          },
          {
            "start": 7,
            "end": 20,
            "username": "sodadecounty",
            "id": "24376083"
          },
          {
            "start": 21,
            "end": 28,
            "username": "DocDre",
            "id": "14118112"
          }
        ]
      },
      "id": "1425610297465786369",
      "public_metrics": {
        "retweet_count": 5,
        "reply_count": 20,
        "like_count": 91,
        "quote_count": 2
      },
      "text": "@C40LF @sodadecounty @DocDre Sorry",
      "in_reply_to_user_id": "1212964879172132866",
      "conversation_id": "1425604732018696193",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425610212040454144"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T00:09:16.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 13,
            "username": "sodadecounty",
            "id": "24376083"
          },
          {
            "start": 14,
            "end": 21,
            "username": "DocDre",
            "id": "14118112"
          }
        ]
      },
      "id": "1425610015155572737",
      "public_metrics": {
        "retweet_count": 92,
        "reply_count": 123,
        "like_count": 1355,
        "quote_count": 22
      },
      "text": "@sodadecounty @DocDre We started wack",
      "in_reply_to_user_id": "24376083",
      "conversation_id": "1425604732018696193",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425604732018696193"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-12T00:08:08.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 16,
            "username": "PeterChawaga",
            "id": "448253354"
          }
        ],
        "annotations": [
          {
            "start": 105,
            "end": 111,
            "probability": 0.4364,
            "type": "Organization",
            "normalized_text": "Bitcoin"
          }
        ]
      },
      "id": "1425607896113496069",
      "public_metrics": {
        "retweet_count": 124,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @PeterChawaga: Of all the insight surfaced in this report, I was most struck by how widespread use of Bitcoin already seems to be in Cub…",
      "conversation_id": "1425607896113496069",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1425605581667241984"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-11T23:59:43.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 10,
            "username": "zackvoell",
            "id": "2373682811"
          }
        ]
      },
      "id": "1425563489121230849",
      "public_metrics": {
        "retweet_count": 350,
        "reply_count": 273,
        "like_count": 5030,
        "quote_count": 85
      },
      "text": "@zackvoell Bitcoin fixes this",
      "in_reply_to_user_id": "2373682811",
      "conversation_id": "1425561767007203328",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425561767007203328"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-11T21:03:16.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 16,
            "username": "StewYorkCity",
            "id": "2589586742"
          }
        ],
        "urls": [
          {
            "start": 47,
            "end": 70,
            "url": "https://t.co/dgrxvJaKfk",
            "expanded_url": "https://twitter.com/i/spaces/1OwGWVYyzWRKQ",
            "display_url": "twitter.com/i/spaces/1OwGW…"
          }
        ]
      },
      "id": "1425504341243449348",
      "public_metrics": {
        "retweet_count": 41,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @StewYorkCity: The energy is crazy! TAP IN! https://t.co/dgrxvJaKfk",
      "conversation_id": "1425504341243449348",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1425504233617608704"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-11T17:08:14.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 8,
            "username": "kim_yle",
            "id": "575119136"
          },
          {
            "start": 9,
            "end": 23,
            "username": "TwitterSpaces",
            "id": "1065249714214457345"
          },
          {
            "start": 24,
            "end": 33,
            "username": "linukxxx",
            "id": "915989833369169925"
          }
        ]
      },
      "id": "1425466730873331714",
      "public_metrics": {
        "retweet_count": 8,
        "reply_count": 13,
        "like_count": 87,
        "quote_count": 5
      },
      "text": "@kim_yle @TwitterSpaces @linukxxx ❤️",
      "in_reply_to_user_id": "575119136",
      "conversation_id": "1425454868639125511",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425454868639125511"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "und",
      "created_at": "2021-08-11T14:38:47.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 15,
            "username": "sethforprivacy",
            "id": "291490266"
          },
          {
            "start": 16,
            "end": 26,
            "username": "optoutpod",
            "id": "1393276157831925773"
          }
        ]
      },
      "id": "1425445801732546568",
      "public_metrics": {
        "retweet_count": 4,
        "reply_count": 10,
        "like_count": 89,
        "quote_count": 2
      },
      "text": "@sethforprivacy @optoutpod Eventually!",
      "in_reply_to_user_id": "291490266",
      "conversation_id": "1425432797351661573",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425439957389352960"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-11T13:15:37.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 19,
            "username": "LynAldenContact",
            "id": "823766058909761536"
          }
        ],
        "urls": [
          {
            "start": 90,
            "end": 113,
            "url": "https://t.co/0m0RGXQ7E8",
            "expanded_url": "https://www.swanbitcoin.com/bitcoins-energy-usage-is-not-a-problem-heres-why-by-lyn-alden/",
            "display_url": "swanbitcoin.com/bitcoins-energ…"
          }
        ]
      },
      "id": "1425439030724923401",
      "public_metrics": {
        "retweet_count": 725,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @LynAldenContact: I wrote an article about bitcoin's scaling pattern and energy usage:\nhttps://t.co/0m0RGXQ7E8",
      "conversation_id": "1425439030724923401",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424811086520492036"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-11T12:48:42.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 15,
            "username": "sethforprivacy",
            "id": "291490266"
          }
        ]
      },
      "id": "1425436742887383051",
      "public_metrics": {
        "retweet_count": 36,
        "reply_count": 46,
        "like_count": 789,
        "quote_count": 16
      },
      "text": "@sethforprivacy I’m supportive of your work, and here to learn.",
      "in_reply_to_user_id": "291490266",
      "conversation_id": "1425432797351661573",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425432797351661573"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-11T12:39:37.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 9,
            "username": "Niklauzi",
            "id": "2647949986"
          },
          {
            "start": 10,
            "end": 21,
            "username": "jeetsidhu_",
            "id": "1305977989"
          },
          {
            "start": 22,
            "end": 33,
            "username": "MuunWallet",
            "id": "965963081640742913"
          }
        ]
      },
      "id": "1425253336677298176",
      "public_metrics": {
        "retweet_count": 2,
        "reply_count": 6,
        "like_count": 44,
        "quote_count": 1
      },
      "text": "@Niklauzi @jeetsidhu_ @MuunWallet No",
      "in_reply_to_user_id": "2647949986",
      "conversation_id": "1425237422951051272",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425246013367988229"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "und",
      "created_at": "2021-08-11T00:30:50.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 10,
            "username": "x52872395",
            "id": "1388515267291009027"
          },
          {
            "start": 11,
            "end": 22,
            "username": "jeetsidhu_",
            "id": "1305977989"
          },
          {
            "start": 23,
            "end": 34,
            "username": "MuunWallet",
            "id": "965963081640742913"
          }
        ]
      },
      "id": "1425253253076422661",
      "public_metrics": {
        "retweet_count": 7,
        "reply_count": 7,
        "like_count": 157,
        "quote_count": 1
      },
      "text": "@x52872395 @jeetsidhu_ @MuunWallet Their security model is very well thought out and intuitive",
      "in_reply_to_user_id": "1388515267291009027",
      "conversation_id": "1425237422951051272",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425250331500236800"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-11T00:30:30.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 12,
            "username": "sikakanotna",
            "id": "130274569"
          },
          {
            "start": 13,
            "end": 24,
            "username": "jeetsidhu_",
            "id": "1305977989"
          },
          {
            "start": 25,
            "end": 36,
            "username": "MuunWallet",
            "id": "965963081640742913"
          },
          {
            "start": 37,
            "end": 45,
            "username": "CashApp",
            "id": "1445650784"
          }
        ]
      },
      "id": "1425253125229776898",
      "public_metrics": {
        "retweet_count": 4,
        "reply_count": 3,
        "like_count": 52,
        "quote_count": 1
      },
      "text": "@sikakanotna @jeetsidhu_ @MuunWallet @CashApp Step by step",
      "in_reply_to_user_id": "130274569",
      "conversation_id": "1425237422951051272",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1260258664293601280",
            "name": "Cash App"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425246937666699264"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-11T00:29:59.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 12,
            "username": "jchervinsky",
            "id": "47003920"
          },
          {
            "start": 13,
            "end": 28,
            "username": "CitizenBitcoin",
            "id": "950509070682791936"
          },
          {
            "start": 29,
            "end": 43,
            "username": "julie_stitzel",
            "id": "1969564897"
          },
          {
            "start": 44,
            "end": 52,
            "username": "CashApp",
            "id": "1445650784"
          }
        ],
        "annotations": [
          {
            "start": 53,
            "end": 57,
            "probability": 0.9897,
            "type": "Person",
            "normalized_text": "Julie"
          }
        ]
      },
      "id": "1425251187528437761",
      "public_metrics": {
        "retweet_count": 5,
        "reply_count": 2,
        "like_count": 70,
        "quote_count": 0
      },
      "text": "@jchervinsky @CitizenBitcoin @julie_stitzel @CashApp Julie is great",
      "in_reply_to_user_id": "47003920",
      "conversation_id": "1425085458883698689",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1260258664293601280",
            "name": "Cash App"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425105996045864960"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-11T00:22:17.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 11,
            "username": "jeetsidhu_",
            "id": "1305977989"
          },
          {
            "start": 12,
            "end": 23,
            "username": "MuunWallet",
            "id": "965963081640742913"
          }
        ]
      },
      "id": "1425241521809416197",
      "public_metrics": {
        "retweet_count": 29,
        "reply_count": 22,
        "like_count": 513,
        "quote_count": 4
      },
      "text": "@jeetsidhu_ @MuunWallet Peace of mind and effortless lightning transactions",
      "in_reply_to_user_id": "1305977989",
      "conversation_id": "1425237422951051272",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1425237422951051272"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-10T23:43:53.000Z"
    },
    {
      "author_id": "12",
      "id": "1425191267097616392",
      "public_metrics": {
        "retweet_count": 167,
        "reply_count": 403,
        "like_count": 1641,
        "quote_count": 19
      },
      "text": "This is great https://t.co/XOoyTiddhR",
      "conversation_id": "1425191267097616392",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "10026364281",
            "name": "Apple"
          }
        },
        {
          "domain": {
            "id": "48",
            "name": "Product",
            "description": "Products created by Brands.  Examples: Ford Explorer, Apple iPhone."
          },
          "entity": {
            "id": "10044903039",
            "name": "Apple - iOS"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1425187688370552842"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "entities": {
        "urls": [
          {
            "start": 14,
            "end": 37,
            "url": "https://t.co/XOoyTiddhR",
            "expanded_url": "https://twitter.com/TwitterSpaces/status/1425187688370552842",
            "display_url": "twitter.com/TwitterSpaces/…"
          }
        ]
      },
      "created_at": "2021-08-10T20:24:11.000Z"
    },
    {
      "author_id": "12",
      "id": "1425135155933597697",
      "public_metrics": {
        "retweet_count": 1047,
        "reply_count": 1174,
        "like_count": 9476,
        "quote_count": 441
      },
      "text": "day 0",
      "conversation_id": "1425135155933597697",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "und",
      "created_at": "2021-08-10T16:41:13.000Z"
    },
    {
      "author_id": "12",
      "id": "1425095397190639621",
      "public_metrics": {
        "retweet_count": 1155,
        "reply_count": 263,
        "like_count": 4869,
        "quote_count": 292
      },
      "text": "https://t.co/bMUdd0VUyG",
      "conversation_id": "1425095397190639621",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "und",
      "entities": {
        "urls": [
          {
            "start": 0,
            "end": 23,
            "url": "https://t.co/bMUdd0VUyG",
            "expanded_url": "https://www.harpersbazaar.com/culture/features/a37039502/beyonce-evolution-interview-2021/",
            "display_url": "harpersbazaar.com/culture/featur…"
          }
        ]
      },
      "created_at": "2021-08-10T14:03:14.000Z"
    },
    {
      "author_id": "12",
      "id": "1424892165952581636",
      "public_metrics": {
        "retweet_count": 465,
        "reply_count": 276,
        "like_count": 3863,
        "quote_count": 21
      },
      "text": "Facts https://t.co/8lTfZPBAYj",
      "conversation_id": "1424892165952581636",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1424890848618057738"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "entities": {
        "urls": [
          {
            "start": 6,
            "end": 29,
            "url": "https://t.co/8lTfZPBAYj",
            "expanded_url": "https://twitter.com/SenLummis/status/1424890848618057738",
            "display_url": "twitter.com/SenLummis/stat…"
          }
        ]
      },
      "created_at": "2021-08-10T00:35:40.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 15,
            "username": "jillrgunter",
            "id": "169312819"
          }
        ]
      },
      "id": "1424884963195883528",
      "public_metrics": {
        "retweet_count": 120,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @jillrgunter: The fact that anyone can just see this is wild",
      "conversation_id": "1424884963195883528",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1405571471955533827",
            "name": "USD Coin"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424882431937572864"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-10T00:07:02.000Z"
    },
    {
      "author_id": "12",
      "id": "1424854924194729984",
      "public_metrics": {
        "retweet_count": 5637,
        "reply_count": 3623,
        "like_count": 31601,
        "quote_count": 2617
      },
      "text": "#Bitcoin will unite a deeply divided country.\n\n(and eventually: world)",
      "entities": {
        "hashtags": [
          {
            "start": 0,
            "end": 8,
            "tag": "Bitcoin"
          }
        ]
      },
      "conversation_id": "1424854924194729984",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-09T22:07:41.000Z"
    },
    {
      "author_id": "12",
      "id": "1424851113061273603",
      "public_metrics": {
        "retweet_count": 425,
        "reply_count": 207,
        "like_count": 3260,
        "quote_count": 21
      },
      "text": "This https://t.co/AFsVAeablT",
      "conversation_id": "1424851113061273603",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1424850832323866639"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "entities": {
        "urls": [
          {
            "start": 5,
            "end": 28,
            "url": "https://t.co/AFsVAeablT",
            "expanded_url": "https://twitter.com/TheBlueMatt/status/1424850832323866639",
            "display_url": "twitter.com/TheBlueMatt/st…"
          }
        ]
      },
      "created_at": "2021-08-09T21:52:32.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 15,
            "username": "RepTomEmmer",
            "id": "2914515430"
          },
          {
            "start": 70,
            "end": 84,
            "username": "RepDarrenSoto",
            "id": "818713465653051392"
          },
          {
            "start": 86,
            "end": 95,
            "username": "RepDavid",
            "id": "229197216"
          },
          {
            "start": 101,
            "end": 115,
            "username": "RepBillFoster",
            "id": "1080509366"
          }
        ]
      },
      "id": "1424848151127617551",
      "public_metrics": {
        "retweet_count": 2009,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @RepTomEmmer: I, along with bipartisan Blockchain Caucus co-chairs @RepDarrenSoto, @RepDavid, and @RepBillFoster sent a letter to every…",
      "conversation_id": "1424848151127617551",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "940654224966221824",
            "name": "David Schweikert",
            "description": "US Representative David Schweikert (AZ-6)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "966044257751478273",
            "name": "Darren Soto",
            "description": "US Representative Darren Soto (FL-09)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "980880568647761920",
            "name": "Bill Foster",
            "description": "US Representative Bill Foster (IL-11)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "981250593304883200",
            "name": "Tom Emmer",
            "description": "US Representative Tom Emmer (MN-06)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "940654224966221824",
            "name": "David Schweikert",
            "description": "US Representative David Schweikert (AZ-6)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "966044257751478273",
            "name": "Darren Soto",
            "description": "US Representative Darren Soto (FL-09)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "980880568647761920",
            "name": "Bill Foster",
            "description": "US Representative Bill Foster (IL-11)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "981250593304883200",
            "name": "Tom Emmer",
            "description": "US Representative Tom Emmer (MN-06)"
          }
        },
        {
          "domain": {
            "id": "30",
            "name": "Entities [Entity Service]",
            "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
          },
          "entity": {
            "id": "857879456773357569",
            "name": "Technology",
            "description": "Technology"
          }
        },
        {
          "domain": {
            "id": "30",
            "name": "Entities [Entity Service]",
            "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
          },
          "entity": {
            "id": "1001503516555337728",
            "name": "Blockchain",
            "description": "Blockchain"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424845416697323522"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-09T21:40:46.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 15,
            "username": "jchervinsky",
            "id": "47003920"
          }
        ],
        "annotations": [
          {
            "start": 65,
            "end": 72,
            "probability": 0.7949,
            "type": "Organization",
            "normalized_text": "Congress"
          }
        ]
      },
      "id": "1424844906233802755",
      "public_metrics": {
        "retweet_count": 348,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @jchervinsky: We need to have a longer conversation about why Congress is delegating its legislative power to unnamed, unelected officia…",
      "conversation_id": "1424844906233802755",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424781994739830785"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-09T21:27:52.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 13,
            "username": "pourteaux",
            "id": "894339217412816896"
          },
          {
            "start": 16,
            "end": 26,
            "username": "SenShelby",
            "id": "21111098"
          }
        ]
      },
      "id": "1424841714833952770",
      "public_metrics": {
        "retweet_count": 307,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @pourteaux: .@SenShelby choosing bombs over bitcoin proves why we need bitcoin to win",
      "conversation_id": "1424841714833952770",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "892805810287398913",
            "name": "Richard Shelby",
            "description": "US Senator Richard Shelby (AL)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "892805810287398913",
            "name": "Richard Shelby",
            "description": "US Senator Richard Shelby (AL)"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424839772820975634"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-09T21:15:11.000Z"
    },
    {
      "author_id": "12",
      "id": "1424836399426150402",
      "public_metrics": {
        "retweet_count": 998,
        "reply_count": 211,
        "like_count": 6949,
        "quote_count": 27
      },
      "text": "💯 https://t.co/4wcgah2F4X",
      "conversation_id": "1424836399426150402",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1424835947313696776"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "und",
      "entities": {
        "urls": [
          {
            "start": 2,
            "end": 25,
            "url": "https://t.co/4wcgah2F4X",
            "expanded_url": "https://twitter.com/Wealth_Theory/status/1424835947313696776",
            "display_url": "twitter.com/Wealth_Theory/…"
          }
        ]
      },
      "created_at": "2021-08-09T20:54:04.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 19,
            "username": "BitcoinMagazine",
            "id": "361289499"
          }
        ]
      },
      "id": "1424834311438622725",
      "public_metrics": {
        "retweet_count": 568,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @BitcoinMagazine: They killed the amendment for more military spending.\n\nPathetic.",
      "conversation_id": "1424834311438622725",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424833678467796996"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-09T20:45:46.000Z"
    },
    {
      "author_id": "12",
      "id": "1424834022975361029",
      "public_metrics": {
        "retweet_count": 456,
        "reply_count": 366,
        "like_count": 4028,
        "quote_count": 26
      },
      "text": "Broke https://t.co/mxl1pixEWA",
      "conversation_id": "1424834022975361029",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "892805810287398913",
            "name": "Richard Shelby",
            "description": "US Senator Richard Shelby (AL)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "892805810287398913",
            "name": "Richard Shelby",
            "description": "US Senator Richard Shelby (AL)"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "quoted",
          "id": "1424830138995417096"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "entities": {
        "urls": [
          {
            "start": 6,
            "end": 29,
            "url": "https://t.co/mxl1pixEWA",
            "expanded_url": "https://twitter.com/jchervinsky/status/1424830138995417096",
            "display_url": "twitter.com/jchervinsky/st…"
          }
        ]
      },
      "created_at": "2021-08-09T20:44:37.000Z"
    },
    {
      "author_id": "12",
      "id": "1424833524746555392",
      "public_metrics": {
        "retweet_count": 311,
        "reply_count": 205,
        "like_count": 3459,
        "quote_count": 21
      },
      "text": "Second attempt to save falls again to desire for more military spending",
      "in_reply_to_user_id": "12",
      "conversation_id": "1424831787633680386",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1424831787633680386"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-09T20:42:39.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 14,
            "username": "elidourado",
            "id": "851361"
          }
        ],
        "annotations": [
          {
            "start": 29,
            "end": 34,
            "probability": 0.6385,
            "type": "Organization",
            "normalized_text": "Senate"
          },
          {
            "start": 77,
            "end": 82,
            "probability": 0.9626,
            "type": "Person",
            "normalized_text": "Shelby"
          },
          {
            "start": 88,
            "end": 94,
            "probability": 0.9861,
            "type": "Person",
            "normalized_text": "Sanders"
          }
        ]
      },
      "id": "1424832150155694082",
      "public_metrics": {
        "retweet_count": 60,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @elidourado: SNAFU on the Senate floor right now on the crypto amendment. Shelby and Sanders fighting it out over defense spending and k…",
      "conversation_id": "1424832150155694082",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "892805810287398913",
            "name": "Richard Shelby",
            "description": "US Senator Richard Shelby (AL)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "892805810287398913",
            "name": "Richard Shelby",
            "description": "US Senator Richard Shelby (AL)"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424830459675041792"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-09T20:37:11.000Z"
    },
    {
      "author_id": "12",
      "id": "1424831787633680386",
      "public_metrics": {
        "retweet_count": 1959,
        "reply_count": 877,
        "like_count": 13758,
        "quote_count": 295
      },
      "text": "Amendment killed to get more military spending.\n\nWow.",
      "conversation_id": "1424831787633680386",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-09T20:35:44.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 127,
            "end": 141,
            "username": "senrobportman",
            "id": "18915145"
          },
          {
            "start": 142,
            "end": 152,
            "username": "SenToomey",
            "id": "221162525"
          },
          {
            "start": 178,
            "end": 187,
            "username": "RonWyden",
            "id": "250188760"
          },
          {
            "start": 188,
            "end": 198,
            "username": "SenLummis",
            "id": "22831059"
          },
          {
            "start": 199,
            "end": 210,
            "username": "MarkWarner",
            "id": "7429102"
          },
          {
            "start": 211,
            "end": 225,
            "username": "SenatorSinema",
            "id": "1080844782"
          }
        ],
        "hashtags": [
          {
            "start": 68,
            "end": 76,
            "tag": "Bitcoin"
          }
        ]
      },
      "id": "1424789485406068739",
      "public_metrics": {
        "retweet_count": 1532,
        "reply_count": 422,
        "like_count": 9855,
        "quote_count": 79
      },
      "text": "Critical we protect Lightning⚡️ and other scalability solutions for #Bitcoin. Routers or node operators aren’t brokers. Thanks @senrobportman @SenToomey for clarifying this, and @RonWyden @SenLummis @MarkWarner @SenatorSinema for improving language to get to a better place.",
      "conversation_id": "1424789485406068739",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "888176247993376768",
            "name": "Mark Warner",
            "description": "US Senator Mark Warner (VA)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "888187933454352384",
            "name": "Ron Wyden",
            "description": "Senator Ron Wyden (OR)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "890727317185609728",
            "name": "Rob Portman",
            "description": "US Senator Rob Portman (OH)"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "892818947371712512",
            "name": "Pat Toomey",
            "description": "Senator Pat Toomey (PA)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "888176247993376768",
            "name": "Mark Warner",
            "description": "US Senator Mark Warner (VA)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "888187933454352384",
            "name": "Ron Wyden",
            "description": "Senator Ron Wyden (OR)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "890727317185609728",
            "name": "Rob Portman",
            "description": "US Senator Rob Portman (OH)"
          }
        },
        {
          "domain": {
            "id": "35",
            "name": "Politician",
            "description": "Politicians in the world, like Joe Biden"
          },
          "entity": {
            "id": "892818947371712512",
            "name": "Pat Toomey",
            "description": "Senator Pat Toomey (PA)"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-09T17:47:39.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 13,
            "username": "AnselLindner",
            "id": "1475038004"
          }
        ]
      },
      "id": "1424726942906036231",
      "public_metrics": {
        "retweet_count": 33,
        "reply_count": 45,
        "like_count": 439,
        "quote_count": 6
      },
      "text": "@AnselLindner Zoom out",
      "in_reply_to_user_id": "1475038004",
      "conversation_id": "1424720690134102016",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1424720690134102016"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-09T13:39:07.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 14,
            "username": "milessuter",
            "id": "180212381"
          }
        ],
        "annotations": [
          {
            "start": 72,
            "end": 73,
            "probability": 0.9111,
            "type": "Place",
            "normalized_text": "DC"
          }
        ]
      },
      "id": "1424513825748000773",
      "public_metrics": {
        "retweet_count": 134,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @milessuter: It’s *so* crazy that this is how legislation is made in DC.\n\nThese are incredibly complex, technical and impactful issues.…",
      "conversation_id": "1424513825748000773",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424512462565433348"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-08T23:32:16.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 17,
            "username": "abesutherland",
            "id": "49795410"
          }
        ]
      },
      "id": "1424501928071999492",
      "public_metrics": {
        "retweet_count": 93,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @abesutherland: I just published: The proposal to regulate digital asset transactions like in-person physical currency receipts should b…",
      "conversation_id": "1424501928071999492",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424485939582312448"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-08T22:45:00.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 14,
            "username": "milessuter",
            "id": "180212381"
          }
        ]
      },
      "id": "1424439124518490116",
      "public_metrics": {
        "retweet_count": 86,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @milessuter: A better solution for governments trying to (impossibly) mandate DEXs to submit 1099’s on users to ensure tax inflows, woul…",
      "conversation_id": "1424439124518490116",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424437870111072261"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-08T18:35:26.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 13,
            "username": "moneyball",
            "id": "8152232"
          }
        ],
        "annotations": [
          {
            "start": 63,
            "end": 65,
            "probability": 0.9126,
            "type": "Organization",
            "normalized_text": "IRS"
          }
        ]
      },
      "id": "1424437920803479553",
      "public_metrics": {
        "retweet_count": 52,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @moneyball: This would be infinitely more effective for the IRS to collect taxes and the government to legitimately score revenue for th…",
      "conversation_id": "1424437920803479553",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424437772492832772"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-08T18:30:39.000Z"
    },
    {
      "author_id": "12",
      "id": "1424437052821680128",
      "public_metrics": {
        "retweet_count": 94,
        "reply_count": 143,
        "like_count": 751,
        "quote_count": 22
      },
      "text": "https://t.co/QwLlOj0aqK",
      "conversation_id": "1424437052821680128",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "source": "Twitter for iPad",
      "lang": "und",
      "entities": {
        "urls": [
          {
            "start": 0,
            "end": 23,
            "url": "https://t.co/QwLlOj0aqK",
            "expanded_url": "https://tidal.com/playlist/968b204c-21e3-4d59-9103-ad89fbdede3c",
            "display_url": "tidal.com/playlist/968b2…"
          }
        ]
      },
      "created_at": "2021-08-08T18:27:12.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 12,
            "username": "samarsingla",
            "id": "16949938"
          },
          {
            "start": 13,
            "end": 24,
            "username": "APompliano",
            "id": "339061487"
          }
        ],
        "annotations": [
          {
            "start": 30,
            "end": 36,
            "probability": 0.5061,
            "type": "Organization",
            "normalized_text": "Bitcoin"
          }
        ]
      },
      "id": "1424411286725701646",
      "public_metrics": {
        "retweet_count": 252,
        "reply_count": 115,
        "like_count": 3296,
        "quote_count": 33
      },
      "text": "@samarsingla @APompliano Nah. Bitcoin doesn’t need presidents.",
      "in_reply_to_user_id": "16949938",
      "conversation_id": "1424405370328469510",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974596148793345",
            "name": "Business & finance"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974596794716162",
            "name": "Financial services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "1007360414114435072",
            "name": "Bitcoin cryptocurrency",
            "description": "Bitcoin Cryptocurrency"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "847888632711061504",
            "name": "Personal finance",
            "description": "Personal finance"
          }
        },
        {
          "domain": {
            "id": "66",
            "name": "Interests and Hobbies Category",
            "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
          },
          "entity": {
            "id": "913142676819648512",
            "name": "Cryptocurrencies",
            "description": "Cryptocurrency"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1424406278961463297"
        }
      ],
      "source": "Twitter for iPad",
      "lang": "en",
      "created_at": "2021-08-08T16:44:49.000Z"
    },
    {
      "attachments": {
        "media_keys": [
          "13_1424369094594285576"
        ]
      },
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 3,
            "end": 9,
            "username": "TIDAL",
            "id": "2679055230"
          }
        ],
        "annotations": [
          {
            "start": 17,
            "end": 26,
            "probability": 0.556,
            "type": "Other",
            "normalized_text": "The Throne"
          }
        ],
        "urls": [
          {
            "start": 45,
            "end": 68,
            "url": "https://t.co/BPR5f1yrf8",
            "expanded_url": "https://twitter.com/TIDAL/status/1424369733118398467/video/1",
            "display_url": "pic.twitter.com/BPR5f1yrf8"
          }
        ]
      },
      "id": "1424370103601270785",
      "public_metrics": {
        "retweet_count": 900,
        "reply_count": 0,
        "like_count": 0,
        "quote_count": 0
      },
      "text": "RT @TIDAL: Watch The Throne: 10 years later. https://t.co/BPR5f1yrf8",
      "conversation_id": "1424370103601270785",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "45",
            "name": "Brand Vertical",
            "description": "Top level entities that describe a Brands industry"
          },
          "entity": {
            "id": "781974597310615553",
            "name": "Entertainment"
          }
        },
        {
          "domain": {
            "id": "46",
            "name": "Brand Category",
            "description": "Categories within Brand Verticals that narrow down the scope of Brands"
          },
          "entity": {
            "id": "781974597222535168",
            "name": "Online Services"
          }
        },
        {
          "domain": {
            "id": "47",
            "name": "Brand",
            "description": "Brands and Companies"
          },
          "entity": {
            "id": "10043701887",
            "name": "Tidal"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "retweeted",
          "id": "1424369733118398467"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-08T14:01:10.000Z"
    },
    {
      "author_id": "12",
      "entities": {
        "mentions": [
          {
            "start": 0,
            "end": 8,
            "username": "aaakkmm",
            "id": "21129700"
          },
          {
            "start": 9,
            "end": 24,
            "username": "TeamKanyeDaily",
            "id": "189470083"
          },
          {
            "start": 25,
            "end": 35,
            "username": "kanyewest",
            "id": "169686021"
          }
        ]
      },
      "id": "1424369951926784002",
      "public_metrics": {
        "retweet_count": 2,
        "reply_count": 7,
        "like_count": 84,
        "quote_count": 1
      },
      "text": "@aaakkmm @TeamKanyeDaily @kanyewest Yes and it was amazing",
      "in_reply_to_user_id": "21129700",
      "conversation_id": "1424220904331038722",
      "context_annotations": [
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "806561823407239169",
            "name": "Kanye West",
            "description": "Kanye West"
          }
        },
        {
          "domain": {
            "id": "10",
            "name": "Person",
            "description": "Named people in the world like Nelson Mandela"
          },
          "entity": {
            "id": "1037336866519842816",
            "name": "Jack Dorsey",
            "description": "Jack Dorsey"
          }
        },
        {
          "domain": {
            "id": "54",
            "name": "Musician",
            "description": "A musician in the world, like Adele or Bob Dylan"
          },
          "entity": {
            "id": "806561823407239169",
            "name": "Kanye West",
            "description": "Kanye West"
          }
        },
        {
          "domain": {
            "id": "55",
            "name": "Music Genre",
            "description": "A category for a musical style, like Pop, Rock, or Rap"
          },
          "entity": {
            "id": "810937888334487552",
            "name": "Rap",
            "description": "Hip-Hop/Rap"
          }
        }
      ],
      "possibly_sensitive": false,
      "reply_settings": "everyone",
      "referenced_tweets": [
        {
          "type": "replied_to",
          "id": "1424369661668478982"
        }
      ],
      "source": "Twitter for iPhone",
      "lang": "en",
      "created_at": "2021-08-08T14:00:34.000Z"
    }
  ],
  "includes": {
    "users": [
      {
        "username": "jack",
        "protected": false,
        "pinned_tweet_id": "1247616214769086465",
        "id": "12",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 0,
                "end": 8,
                "tag": "bitcoin"
              }
            ]
          }
        },
        "created_at": "2006-03-21T20:50:14.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 5666694,
          "following_count": 4422,
          "tweet_count": 27815,
          "listed_count": 29952
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_normal.jpg",
        "description": "#bitcoin",
        "verified": true,
        "name": "jack⚡️"
      },
      {
        "username": "Just2Bueno",
        "protected": false,
        "id": "33426811",
        "created_at": "2009-04-20T04:39:57.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 281,
          "following_count": 385,
          "tweet_count": 18077,
          "listed_count": 4
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1381691444923097089/5M-kLIjT_normal.jpg",
        "description": "Peace, Love, and Positivity!",
        "location": "Miami, FL",
        "verified": false,
        "name": "Jeremy Bueno"
      },
      {
        "username": "NipseyHussle",
        "protected": false,
        "pinned_tweet_id": "1115372002087505920",
        "id": "19486963",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/ml3LpEyrIH",
                "expanded_url": "https://stpls.la/nipseyhussle",
                "display_url": "stpls.la/nipseyhussle"
              }
            ]
          }
        },
        "created_at": "2009-01-25T12:48:20.000Z",
        "url": "https://t.co/ml3LpEyrIH",
        "public_metrics": {
          "followers_count": 917678,
          "following_count": 2831,
          "tweet_count": 21350,
          "listed_count": 2463
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/972660080045887488/gsb1E9ao_normal.jpg",
        "description": "All Bookings: booking@themarathonagency.com / Media & Press: press@themarathonagency.com 👻: HussleThaGreat1",
        "location": "ON THE MARATHON",
        "verified": true,
        "name": "THA GREAT"
      },
      {
        "username": "LaserHodl",
        "protected": false,
        "pinned_tweet_id": "1425491384505708545",
        "id": "1274491960019939328",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 19,
                "end": 33,
                "tag": "MonetaryReset"
              },
              {
                "start": 73,
                "end": 81,
                "tag": "Bitcoin"
              }
            ]
          }
        },
        "created_at": "2020-06-20T23:59:51.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 5549,
          "following_count": 1002,
          "tweet_count": 7404,
          "listed_count": 58
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1422304787471626262/xBC3I4dn_normal.jpg",
        "description": "One nym navigating #MonetaryReset through 2030. Fighting time-theft with #Bitcoin. Honest Capitalism. Individual Responsibility. Saving Isn't Violence.",
        "verified": false,
        "name": "LaserHodl 🛰✨"
      },
      {
        "username": "howardlindzon",
        "protected": false,
        "pinned_tweet_id": "1295418279096279040",
        "id": "7517052",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/HtyhEimio2",
                "expanded_url": "https://howardlindzon.com/subscribe/",
                "display_url": "howardlindzon.com/subscribe/"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 3,
                "end": 18,
                "username": "socialleverage"
              },
              {
                "start": 51,
                "end": 62,
                "username": "stocktwits"
              },
              {
                "start": 105,
                "end": 118,
                "username": "robinhoodapp"
              },
              {
                "start": 119,
                "end": 129,
                "username": "onrallyrd"
              },
              {
                "start": 130,
                "end": 137,
                "username": "koyfin"
              },
              {
                "start": 138,
                "end": 144,
                "username": "etoro"
              },
              {
                "start": 145,
                "end": 154,
                "username": "alpacahq"
              }
            ],
            "cashtags": [
              {
                "start": 24,
                "end": 29,
                "tag": "SLAC"
              }
            ]
          }
        },
        "created_at": "2007-07-16T21:30:12.000Z",
        "url": "https://t.co/HtyhEimio2",
        "public_metrics": {
          "followers_count": 272700,
          "following_count": 957,
          "tweet_count": 44956,
          "listed_count": 5082
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1192716969079910401/6fEo7tKa_normal.jpg",
        "description": "GP @socialleverage, CEO $SLAC the SPAC, co-founder @stocktwits founded Wallstrip (acquired by CBS), seed @robinhoodapp @onrallyrd @koyfin @etoro @alpacahq",
        "location": "Phoenix, AZ",
        "verified": true,
        "name": "From The Desk Of Howie"
      },
      {
        "username": "seyitaylor",
        "protected": false,
        "pinned_tweet_id": "1356330526416760832",
        "id": "18094952",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/P5kcaoibFT",
                "expanded_url": "http://mmm.page/seyitaylor",
                "display_url": "mmm.page/seyitaylor"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 20,
                "end": 43,
                "url": "https://t.co/UHFdzkODpb",
                "expanded_url": "http://nocodepros.co",
                "display_url": "nocodepros.co"
              }
            ]
          }
        },
        "created_at": "2008-12-13T06:29:13.000Z",
        "url": "https://t.co/P5kcaoibFT",
        "public_metrics": {
          "followers_count": 45765,
          "following_count": 2733,
          "tweet_count": 20218,
          "listed_count": 601
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1425498453325537285/DJ3vshWR_normal.jpg",
        "description": "internet explorer | https://t.co/UHFdzkODpb | no-code, crypto, startups, culture, and everything in between",
        "location": "the internet",
        "verified": true,
        "name": "st."
      },
      {
        "username": "davewiner",
        "protected": false,
        "pinned_tweet_id": "1188137703495344129",
        "id": "3839",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/ztgzDGiyOj",
                "expanded_url": "http://scripting.com/",
                "display_url": "scripting.com"
              }
            ]
          }
        },
        "created_at": "2006-08-05T23:04:08.000Z",
        "url": "https://t.co/ztgzDGiyOj",
        "public_metrics": {
          "followers_count": 66692,
          "following_count": 3904,
          "tweet_count": 194954,
          "listed_count": 5266
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1398806004528263168/2SXipvrt_normal.jpg",
        "description": "I create new media types for fun. Developer of outliners, blogging tools, RSS aggregators, podcasting.",
        "location": "Woodstock, NY",
        "verified": true,
        "name": "Dave Winer"
      },
      {
        "username": "ireaderinokun",
        "protected": false,
        "pinned_tweet_id": "1392569284992409604",
        "id": "2714960622",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/B4BSRgzsuL",
                "expanded_url": "https://ireaderinokun.com",
                "display_url": "ireaderinokun.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 25,
                "end": 34,
                "username": "buycoins"
              },
              {
                "start": 45,
                "end": 56,
                "username": "botsofcode"
              },
              {
                "start": 58,
                "end": 74,
                "username": "googledevexpert"
              },
              {
                "start": 76,
                "end": 89,
                "username": "frontstackio"
              },
              {
                "start": 91,
                "end": 103,
                "username": "feminist_co"
              }
            ]
          }
        },
        "created_at": "2014-08-07T17:19:28.000Z",
        "url": "https://t.co/B4BSRgzsuL",
        "public_metrics": {
          "followers_count": 47460,
          "following_count": 538,
          "tweet_count": 11240,
          "listed_count": 702
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1265218936003596289/Q1Gzeheb_normal.jpg",
        "description": "Frontend Dev, UI Design, @buycoins (YC S18), @botsofcode, @googledevexpert, @frontstackio, @feminist_co",
        "location": "Lagos | London",
        "verified": true,
        "name": "Ire Aderinokun"
      },
      {
        "username": "SenWarren",
        "protected": false,
        "pinned_tweet_id": "1425970543682072580",
        "id": "970207298",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 20,
                "url": "http://t.co/wsbNrrUt",
                "expanded_url": "http://warren.senate.gov",
                "display_url": "warren.senate.gov"
              }
            ]
          }
        },
        "created_at": "2012-11-25T15:14:27.000Z",
        "url": "http://t.co/wsbNrrUt",
        "public_metrics": {
          "followers_count": 6942876,
          "following_count": 515,
          "tweet_count": 8544,
          "listed_count": 19560
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/722044174799777792/bXaodRhx_normal.jpg",
        "description": "U.S. Senator, Massachusetts. She/her/hers. Official Senate account.",
        "verified": true,
        "name": "Elizabeth Warren"
      },
      {
        "username": "ODELL",
        "protected": false,
        "pinned_tweet_id": "1425231206262525952",
        "id": "47966112",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/uuHyj80guW",
                "expanded_url": "https://citadeldispatch.com",
                "display_url": "citadeldispatch.com"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 32,
                "end": 55,
                "url": "https://t.co/GGMjYLArBy",
                "expanded_url": "http://mattodell.com",
                "display_url": "mattodell.com"
              },
              {
                "start": 60,
                "end": 83,
                "url": "https://t.co/8GrjWaqlDi",
                "expanded_url": "http://bitcoindevlist.com",
                "display_url": "bitcoindevlist.com"
              },
              {
                "start": 86,
                "end": 109,
                "url": "https://t.co/95dwDZh8JR",
                "expanded_url": "http://opensats.org",
                "display_url": "opensats.org"
              },
              {
                "start": 113,
                "end": 136,
                "url": "https://t.co/QBnzyTpBT8",
                "expanded_url": "http://bitcointv.com",
                "display_url": "bitcointv.com"
              }
            ],
            "mentions": [
              {
                "start": 140,
                "end": 147,
                "username": "tftc21"
              },
              {
                "start": 150,
                "end": 166,
                "username": "citadeldispatch"
              }
            ]
          }
        },
        "created_at": "2009-06-17T13:52:16.000Z",
        "url": "https://t.co/uuHyj80guW",
        "public_metrics": {
          "followers_count": 116152,
          "following_count": 1019,
          "tweet_count": 27362,
          "listed_count": 1986
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1421584695746338819/Z_7ZfAeP_normal.jpg",
        "description": "bitcoin and privacy advocate ▫️ https://t.co/GGMjYLArBy  ▫️ https://t.co/8GrjWaqlDi - https://t.co/95dwDZh8JR ▫️ https://t.co/QBnzyTpBT8 ▫️ @tftc21 | @citadeldispatch▫️ stay humble. stack sats.",
        "location": "DMS ASKING FOR MONEY ARE SCAMS",
        "verified": false,
        "name": "ODELL"
      },
      {
        "username": "adam3us",
        "protected": false,
        "pinned_tweet_id": "1155092367646572544",
        "id": "213236426",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/6X3NGNHMQQ",
                "expanded_url": "http://www.cypherspace.org/adam/",
                "display_url": "cypherspace.org/adam/"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 98,
                "end": 121,
                "url": "https://t.co/L69Em1yrDX",
                "expanded_url": "http://adam3.us",
                "display_url": "adam3.us"
              },
              {
                "start": 137,
                "end": 160,
                "url": "https://t.co/oZ3YfQylms",
                "expanded_url": "http://blockstream.com",
                "display_url": "blockstream.com"
              }
            ]
          }
        },
        "created_at": "2010-11-08T11:04:10.000Z",
        "url": "https://t.co/6X3NGNHMQQ",
        "public_metrics": {
          "followers_count": 348026,
          "following_count": 849,
          "tweet_count": 31849,
          "listed_count": 5470
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1364645619705511936/IGTT_tnL_normal.jpg",
        "description": "cypherpunk, cryptographer, privacy/ecash, inventor hashcash (used in Bitcoin mining) PhD Comp Sci https://t.co/L69Em1yrDX Co-Founder/CEO https://t.co/oZ3YfQylms",
        "location": "Malta 🇲🇹",
        "verified": false,
        "name": "Adam Back"
      },
      {
        "username": "APompliano",
        "protected": false,
        "pinned_tweet_id": "797846518288044032",
        "id": "339061487",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/DMdea5V5hf",
                "expanded_url": "http://www.youtube.com/c/AnthonyPompliano",
                "display_url": "youtube.com/c/AnthonyPompl…"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 143,
                "end": 166,
                "url": "https://t.co/tpCu2xhIBx",
                "expanded_url": "http://pompletter.com",
                "display_url": "pompletter.com"
              }
            ]
          }
        },
        "created_at": "2011-07-20T14:43:36.000Z",
        "url": "https://t.co/DMdea5V5hf",
        "public_metrics": {
          "followers_count": 1082027,
          "following_count": 6005,
          "tweet_count": 57901,
          "listed_count": 10762
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1362803074121760768/IxlsR42x_normal.jpg",
        "description": "Building Pomp Investments. Have invested $200M+ in early stage companies, including multiple unicorns. Write a daily letter to 180k investors: https://t.co/tpCu2xhIBx",
        "location": "Global",
        "verified": true,
        "name": "Pomp 🌪"
      },
      {
        "username": "Snowden",
        "protected": false,
        "pinned_tweet_id": "1423403943506456580",
        "id": "2916305152",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/kPBEESUmlH",
                "expanded_url": "https://edwardsnowden.substack.com",
                "display_url": "edwardsnowden.substack.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 75,
                "end": 90,
                "username": "FreedomofPress"
              }
            ]
          }
        },
        "created_at": "2014-12-11T21:24:28.000Z",
        "url": "https://t.co/kPBEESUmlH",
        "public_metrics": {
          "followers_count": 4803494,
          "following_count": 1,
          "tweet_count": 5943,
          "listed_count": 22131
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/648888480974508032/66_cUYfj_normal.jpg",
        "description": "I used to work for the government. Now I work for the public. President at @FreedomofPress.",
        "verified": true,
        "name": "Edward Snowden"
      },
      {
        "username": "clarkmoody",
        "protected": false,
        "pinned_tweet_id": "1387918380875800579",
        "id": "14149992",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/gFQsCF1Qfa",
                "expanded_url": "https://bitcoin.clarkmoody.com",
                "display_url": "bitcoin.clarkmoody.com"
              }
            ]
          }
        },
        "created_at": "2008-03-14T22:57:11.000Z",
        "url": "https://t.co/gFQsCF1Qfa",
        "public_metrics": {
          "followers_count": 13241,
          "following_count": 510,
          "tweet_count": 2549,
          "listed_count": 328
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/458799693217034241/A8JLn2OB_normal.jpeg",
        "description": "I love Jesus. I pay in Bitcoin.",
        "location": "The Blockchain",
        "verified": false,
        "name": "Clark Moody"
      },
      {
        "username": "jokoono",
        "protected": false,
        "pinned_tweet_id": "1250438182304284673",
        "id": "1036697739600580608",
        "entities": {
          "description": {
            "mentions": [
              {
                "start": 44,
                "end": 53,
                "username": "BTC21_de"
              },
              {
                "start": 65,
                "end": 79,
                "username": "ShiftCryptoHQ"
              }
            ]
          }
        },
        "created_at": "2018-09-03T19:29:36.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 1094,
          "following_count": 584,
          "tweet_count": 3086,
          "listed_count": 19
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1390402219619540993/SnStvEwR_normal.png",
        "description": "Stacking Sats 🟠\nRouting Payments ⚡️\nFounder @BTC21_de 🖊️\nWorking @ShiftCryptoHQ 🔑",
        "location": "Germany",
        "verified": false,
        "name": "Joko ⚡️"
      },
      {
        "username": "samkazemian",
        "protected": false,
        "id": "3265756934",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/OR4iHQOyeD",
                "expanded_url": "https://everipedia.org/samkazemian12",
                "display_url": "everipedia.org/samkazemian12"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 8,
                "end": 20,
                "username": "FraxFinance"
              },
              {
                "start": 44,
                "end": 55,
                "username": "Everipedia"
              }
            ],
            "cashtags": [
              {
                "start": 21,
                "end": 26,
                "tag": "FRAX"
              },
              {
                "start": 27,
                "end": 31,
                "tag": "FXS"
              },
              {
                "start": 56,
                "end": 59,
                "tag": "IQ"
              },
              {
                "start": 68,
                "end": 73,
                "tag": "DOGE"
              }
            ]
          }
        },
        "created_at": "2015-07-02T05:33:42.000Z",
        "url": "https://t.co/OR4iHQOyeD",
        "public_metrics": {
          "followers_count": 7923,
          "following_count": 1148,
          "tweet_count": 2437,
          "listed_count": 167
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1172697784341843968/M6tbtEKZ_normal.jpg",
        "description": "Founder @FraxFinance $FRAX $FXS 💸 Cofounder @Everipedia $IQ 🧠 Early $DOGE miner ‘14",
        "location": "samkazemian.eth",
        "verified": true,
        "name": "Sam Kazemian (¤, veFXS)"
      },
      {
        "username": "elonmusk",
        "protected": false,
        "pinned_tweet_id": "1423830326665650179",
        "id": "44196397",
        "created_at": "2009-06-02T20:12:29.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 59174152,
          "following_count": 107,
          "tweet_count": 15196,
          "listed_count": 76147
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1423663740344406029/l_-QOIHY_normal.jpg",
        "description": "",
        "verified": true,
        "name": "Elon Musk"
      },
      {
        "username": "rohunvora",
        "protected": false,
        "pinned_tweet_id": "1359544355292213250",
        "id": "971021095485636608",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/SdRFUp0IMR",
                "expanded_url": "http://mainstreet.com/rohun",
                "display_url": "mainstreet.com/rohun"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 32,
                "end": 55,
                "url": "https://t.co/sMHUZVaXQ2",
                "expanded_url": "http://bitcoinorshit.com",
                "display_url": "bitcoinorshit.com"
              },
              {
                "start": 58,
                "end": 81,
                "url": "https://t.co/sHTrL6xhQr",
                "expanded_url": "http://bitcoinisdead.lol",
                "display_url": "bitcoinisdead.lol"
              }
            ],
            "hashtags": [
              {
                "start": 124,
                "end": 132,
                "tag": "bitcoin"
              }
            ],
            "mentions": [
              {
                "start": 7,
                "end": 18,
                "username": "MainStreet"
              },
              {
                "start": 84,
                "end": 96,
                "username": "ycombinator"
              }
            ]
          }
        },
        "created_at": "2018-03-06T13:54:04.000Z",
        "url": "https://t.co/SdRFUp0IMR",
        "public_metrics": {
          "followers_count": 6671,
          "following_count": 2022,
          "tweet_count": 1817,
          "listed_count": 82
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1391557933184421890/LbIcOcLE_normal.jpg",
        "description": "growth @MainStreet / creator of https://t.co/sMHUZVaXQ2 & https://t.co/sHTrL6xhQr / @ycombinator w20 / former ceo @ duffl / #bitcoin",
        "location": "Los angeles",
        "verified": false,
        "name": "Rohun vora"
      },
      {
        "username": "LegalDaVinci",
        "protected": false,
        "pinned_tweet_id": "1295870271736471560",
        "id": "391523049",
        "created_at": "2011-10-15T17:55:31.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 384,
          "following_count": 2388,
          "tweet_count": 3788,
          "listed_count": 3
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1401728772651589635/D8ljmMky_normal.jpg",
        "description": "ski lift operator, volcano explorer, ESG investor (only bitcoin)",
        "location": "Boulder, CO",
        "verified": false,
        "name": "José Cantsaytho"
      },
      {
        "username": "Wale",
        "protected": false,
        "pinned_tweet_id": "1405898888607789056",
        "id": "17929027",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/yxeMlG9lw1",
                "expanded_url": "https://wale.lnk.to/angles",
                "display_url": "wale.lnk.to/angles"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 27,
                "end": 50,
                "url": "https://t.co/yxeMlG9lw1",
                "expanded_url": "https://wale.lnk.to/angles",
                "display_url": "wale.lnk.to/angles"
              }
            ]
          }
        },
        "created_at": "2008-12-06T21:15:10.000Z",
        "url": "https://t.co/yxeMlG9lw1",
        "public_metrics": {
          "followers_count": 6343024,
          "following_count": 2678,
          "tweet_count": 23284,
          "listed_count": 10856
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1425968592852373504/qRG4U-7y_normal.jpg",
        "description": "anti hero . super genius . https://t.co/yxeMlG9lw1",
        "verified": true,
        "name": "Wale"
      },
      {
        "username": "garrytan",
        "protected": false,
        "pinned_tweet_id": "1382487318074859521",
        "id": "11768582",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/sRez8X1OuA",
                "expanded_url": "https://youtube.com/garrytan?sub_confirmation=1",
                "display_url": "youtube.com/garrytan?sub_c…"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 8,
                "end": 20,
                "username": "Initialized"
              }
            ]
          }
        },
        "created_at": "2008-01-02T19:47:19.000Z",
        "url": "https://t.co/sRez8X1OuA",
        "public_metrics": {
          "followers_count": 187665,
          "following_count": 4278,
          "tweet_count": 28027,
          "listed_count": 4124
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1407133819224788994/151ixcDw_normal.jpg",
        "description": "Founder @Initialized—PM/designer/eng turned Forbes Midas List Top 100 VC in startups worth over $100B, always before product market fit—YouTube creator",
        "location": "San Francisco, CA",
        "verified": true,
        "name": "Garry Tan 陈嘉兴 🌐"
      },
      {
        "username": "thetrocro",
        "protected": false,
        "pinned_tweet_id": "1420473787921752064",
        "id": "3010775305",
        "created_at": "2015-02-06T02:40:59.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 208,
          "following_count": 418,
          "tweet_count": 1513,
          "listed_count": 3
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1426398575492091904/dMt13D-l_normal.jpg",
        "description": "Philosopher. Environmentalist. Bitcoiner.",
        "location": "Portland, OR",
        "verified": false,
        "name": "Troy Cross"
      },
      {
        "username": "Suhail",
        "protected": false,
        "pinned_tweet_id": "1382351985584721926",
        "id": "793023",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/0vtq2wUMJZ",
                "expanded_url": "https://mightyapp.com",
                "display_url": "mightyapp.com"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 9,
                "end": 32,
                "url": "https://t.co/RMtpcTL44c",
                "expanded_url": "http://mightyapp.com",
                "display_url": "mightyapp.com"
              },
              {
                "start": 42,
                "end": 65,
                "url": "https://t.co/5a4IwLO0UV",
                "expanded_url": "http://bit.ly/3gI4BWj",
                "display_url": "bit.ly/3gI4BWj"
              }
            ]
          }
        },
        "created_at": "2007-02-24T22:17:47.000Z",
        "url": "https://t.co/0vtq2wUMJZ",
        "public_metrics": {
          "followers_count": 107243,
          "following_count": 387,
          "tweet_count": 8367,
          "listed_count": 1734
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1318978836432736256/FMl47YxJ_normal.jpg",
        "description": "Founder: https://t.co/RMtpcTL44c, hiring: https://t.co/5a4IwLO0UV\nPizzatarian, programmer, & music maker",
        "location": "Remote",
        "verified": true,
        "name": "Suhail"
      },
      {
        "username": "timothy_skim",
        "protected": false,
        "pinned_tweet_id": "1392948169105756166",
        "id": "792930527388971008",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/ptaL8tkc1t",
                "expanded_url": "https://instagram.com/timothyskim",
                "display_url": "instagram.com/timothyskim"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 135,
                "end": 143,
                "tag": "bitcoin"
              }
            ]
          }
        },
        "created_at": "2016-10-31T03:25:44.000Z",
        "url": "https://t.co/ptaL8tkc1t",
        "public_metrics": {
          "followers_count": 26732,
          "following_count": 297,
          "tweet_count": 2953,
          "listed_count": 109
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1406146728168882180/gccvfpBi_normal.jpg",
        "description": "$500 ➡️ $1.75MM | 📚Best Selling Author | 🎥 Featured on Business Insider & CNBC | Jesus saves ✝️ | I’m the worst of Christians | 🇺🇸🇰🇷🇭🇺 #bitcoin",
        "location": "Los Angeles, CA",
        "verified": true,
        "name": "Timothy S. Kim"
      },
      {
        "username": "IOHK_Charles",
        "protected": false,
        "pinned_tweet_id": "1290058248347770880",
        "id": "1376161898",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/wq0AcJY3M8",
                "expanded_url": "http://iohk.io",
                "display_url": "iohk.io"
              }
            ]
          }
        },
        "created_at": "2013-04-24T04:28:32.000Z",
        "url": "https://t.co/wq0AcJY3M8",
        "public_metrics": {
          "followers_count": 582862,
          "following_count": 967,
          "tweet_count": 16618,
          "listed_count": 4019
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1403788115693780993/FB-jYqck_normal.jpg",
        "description": "8830 AC64 17F2 5164 195C 05DE 21E3 E377 13E1 5586 | CEO of IOG and King of the Rats",
        "location": "Boulder, Colorado",
        "verified": true,
        "name": "Charles Hoskinson"
      },
      {
        "username": "tharogueone1",
        "protected": false,
        "id": "1355155067289169925",
        "created_at": "2021-01-29T14:05:42.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 10,
          "following_count": 114,
          "tweet_count": 174,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1383047657610940416/8kDPXwO1_normal.jpg",
        "description": "attitude and mindset are a self fulfilling prophecy!",
        "location": "Crown Point, IN",
        "verified": false,
        "name": "tharogueone"
      },
      {
        "username": "BrainHarrington",
        "protected": false,
        "pinned_tweet_id": "1426200579970240518",
        "id": "67109577",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/gCBwqF8dNZ",
                "expanded_url": "https://apps.apple.com/us/app/choice-stack-sats-in-your-ira/id1563472237",
                "display_url": "apps.apple.com/us/app/choice-…"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 65,
                "end": 73,
                "tag": "Bitcoin"
              }
            ],
            "mentions": [
              {
                "start": 31,
                "end": 42,
                "username": "choicebyKT"
              },
              {
                "start": 56,
                "end": 63,
                "username": "ocbtcn"
              }
            ]
          }
        },
        "created_at": "2009-08-19T20:21:01.000Z",
        "url": "https://t.co/gCBwqF8dNZ",
        "public_metrics": {
          "followers_count": 13096,
          "following_count": 3876,
          "tweet_count": 58404,
          "listed_count": 207
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1387759492364787714/HK-o4tuO_normal.jpg",
        "description": "Husband/Dad. Product Marketing @choicebyKT. Help out at @ocbtcn. #Bitcoin",
        "location": "Anaheim, CA",
        "verified": false,
        "name": "Brian Harrington"
      },
      {
        "username": "FranBoll11",
        "protected": false,
        "id": "1390127497400967168",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 0,
                "end": 9,
                "tag": "Ethereum"
              }
            ]
          }
        },
        "created_at": "2021-05-06T02:13:36.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 48,
          "following_count": 342,
          "tweet_count": 1804,
          "listed_count": 2
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1390129290994491397/pa3j_DuK_normal.jpg",
        "description": "#Ethereum & Institutional alternatives. Individual sovereignty.",
        "verified": false,
        "name": "Francis 🦇🔊"
      },
      {
        "username": "cory_eth",
        "protected": false,
        "id": "436399168",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/zgeLAbI7HB",
                "expanded_url": "http://oncyber.io/cory_eth",
                "display_url": "oncyber.io/cory_eth"
              }
            ]
          }
        },
        "created_at": "2011-12-14T04:21:46.000Z",
        "url": "https://t.co/zgeLAbI7HB",
        "public_metrics": {
          "followers_count": 865,
          "following_count": 502,
          "tweet_count": 2574,
          "listed_count": 17
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1423749424870658049/uZ6B8Oqo_normal.jpg",
        "description": "code+art+math | Mathematician | Principal Engineer ➡️ Shadowy Super Coder",
        "location": "🌐",
        "verified": false,
        "name": "cory.eth 🦇🔊"
      },
      {
        "username": "santisiri",
        "protected": false,
        "pinned_tweet_id": "1405665489876045826",
        "id": "9321342",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/DyoLUCedLi",
                "expanded_url": "http://democracy.earth",
                "display_url": "democracy.earth"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 84,
                "end": 107,
                "url": "https://t.co/7pVSRLh8va",
                "expanded_url": "http://github.com/santisiri",
                "display_url": "github.com/santisiri"
              }
            ],
            "hashtags": [
              {
                "start": 110,
                "end": 118,
                "tag": "bitcoin"
              }
            ],
            "mentions": [
              {
                "start": 6,
                "end": 22,
                "username": "proofofhumanity"
              },
              {
                "start": 36,
                "end": 51,
                "username": "democracyearth"
              },
              {
                "start": 62,
                "end": 75,
                "username": "educationdao"
              }
            ],
            "cashtags": [
              {
                "start": 132,
                "end": 136,
                "tag": "ubi"
              }
            ]
          }
        },
        "created_at": "2007-10-09T03:11:41.000Z",
        "url": "https://t.co/DyoLUCedLi",
        "public_metrics": {
          "followers_count": 82506,
          "following_count": 6581,
          "tweet_count": 112081,
          "listed_count": 1644
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1363049919616081920/ZReEKRLh_normal.jpg",
        "description": "human @proofofhumanity — hacktivist @democracyearth — teacher @educationdao — coder https://t.co/7pVSRLh8va — #bitcoin since 2011 — $ubi 💧 since 2021.",
        "location": "ethereum",
        "verified": true,
        "name": "santi.eth 💧🇪🇹"
      },
      {
        "username": "Thekkiidd",
        "protected": false,
        "id": "906355190726459393",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 0,
                "end": 4,
                "tag": "ETH"
              }
            ]
          }
        },
        "created_at": "2017-09-09T03:14:51.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 21,
          "following_count": 101,
          "tweet_count": 595,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1412586730054553602/GdKVGYmS_normal.jpg",
        "description": "#ETH",
        "verified": false,
        "name": "ThΞ Kid"
      },
      {
        "username": "dogeofcoin",
        "protected": false,
        "id": "1379848045274218506",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/Mnc3WW7cyG",
                "expanded_url": "https://en.wikipedia.org/wiki/Doge",
                "display_url": "en.wikipedia.org/wiki/Doge"
              }
            ]
          }
        },
        "created_at": "2021-04-07T17:26:31.000Z",
        "url": "https://t.co/Mnc3WW7cyG",
        "public_metrics": {
          "followers_count": 23,
          "following_count": 386,
          "tweet_count": 312,
          "listed_count": 1
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1407678589420642304/ZfODK1Nd_normal.jpg",
        "description": "much defi",
        "verified": false,
        "name": "Doge of Coin"
      },
      {
        "username": "CryptoSeaOtter",
        "protected": false,
        "id": "1397376165203959813",
        "created_at": "2021-05-26T02:17:06.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 21,
          "following_count": 155,
          "tweet_count": 231,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1397376991263789060/cZeIgeMj_normal.jpg",
        "description": "I eat beras. ETH/BTC pair only.",
        "location": "Ocean",
        "verified": false,
        "name": "Crypto Otter"
      },
      {
        "username": "satoshiattorney",
        "protected": false,
        "id": "1367487877580541955",
        "created_at": "2021-03-04T14:51:43.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 37,
          "following_count": 242,
          "tweet_count": 187,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1426701158249164800/6b593hN1_normal.jpg",
        "description": "",
        "verified": false,
        "name": "sats.esq"
      },
      {
        "username": "paulmillr",
        "protected": false,
        "id": "66682794",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/sWd7rgyzTW",
                "expanded_url": "https://paulmillr.com",
                "display_url": "paulmillr.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 128,
                "end": 135,
                "username": "brunch"
              }
            ]
          }
        },
        "created_at": "2009-08-18T13:41:15.000Z",
        "url": "https://t.co/sWd7rgyzTW",
        "public_metrics": {
          "followers_count": 2881,
          "following_count": 80,
          "tweet_count": 2393,
          "listed_count": 122
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1375562063834140673/ELcpv5EF_normal.jpg",
        "description": "I make projects which help developers to build awesome things.\n\nNoble (fastest JS cryptographic libs), Chokidar (35M DLs/week), @brunch\n\nMarkets, infosec.",
        "location": "Europe 🦇🔊",
        "verified": false,
        "name": "Paul Miller (bls12.eth)"
      },
      {
        "username": "Chelsea_FC369",
        "protected": false,
        "pinned_tweet_id": "1425978969158037511",
        "id": "2533004783",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 19,
                "end": 31,
                "tag": "HumanRights"
              },
              {
                "start": 41,
                "end": 51,
                "tag": "ChelseaFC"
              }
            ]
          }
        },
        "created_at": "2014-05-06T14:21:27.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 105,
          "following_count": 2368,
          "tweet_count": 10706,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1421902879221293069/6VVBETqq_normal.jpg",
        "description": "Strength & Honour. #HumanRights ✌️notWar #ChelseaFC",
        "location": "England, United Kingdom",
        "verified": false,
        "name": "Prince Paris of Troy the 2nd"
      },
      {
        "username": "MiguelCervera",
        "protected": false,
        "id": "28474651",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 45,
                "end": 56,
                "tag": "PlantBased"
              },
              {
                "start": 63,
                "end": 77,
                "tag": "ClimateChange"
              },
              {
                "start": 83,
                "end": 100,
                "tag": "BlackLivesMatter"
              },
              {
                "start": 105,
                "end": 114,
                "tag": "Ethereum"
              },
              {
                "start": 119,
                "end": 128,
                "tag": "Bankless"
              }
            ],
            "mentions": [
              {
                "start": 32,
                "end": 40,
                "username": "Twitter"
              }
            ]
          }
        },
        "created_at": "2009-04-03T01:51:33.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 1277,
          "following_count": 1029,
          "tweet_count": 13612,
          "listed_count": 41
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1422902229212667908/A6lJcj3E_normal.jpg",
        "description": "👨‍💻 Shadowy super-coder | 🐦 SWE @Twitter | 🥬 #PlantBased | 🌎⧖😷 #ClimateChange | ✊🏽 #BlackLivesMatter | Ξ #Ethereum | 🏴 #Bankless | Opinions are my own.",
        "location": "Pale Blue Dot 🌎, 🌌",
        "verified": false,
        "name": "Miguel Cervera 🦇🔊"
      },
      {
        "username": "iamDCinvestor",
        "protected": false,
        "pinned_tweet_id": "1426296025380278275",
        "id": "956670268596015105",
        "entities": {
          "description": {
            "urls": [
              {
                "start": 104,
                "end": 127,
                "url": "https://t.co/m4zwV9mRYA",
                "expanded_url": "http://dcinvestor.substack.com",
                "display_url": "dcinvestor.substack.com"
              },
              {
                "start": 130,
                "end": 153,
                "url": "https://t.co/Aq5wHkGfEK",
                "expanded_url": "http://gallery.so/dcinvestor",
                "display_url": "gallery.so/dcinvestor"
              }
            ],
            "hashtags": [
              {
                "start": 42,
                "end": 51,
                "tag": "ethereum"
              },
              {
                "start": 53,
                "end": 58,
                "tag": "defi"
              },
              {
                "start": 61,
                "end": 65,
                "tag": "nft"
              }
            ]
          }
        },
        "created_at": "2018-01-25T23:29:00.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 74970,
          "following_count": 513,
          "tweet_count": 28199,
          "listed_count": 1561
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1381803073413210117/AY7Nr1ba_normal.png",
        "description": "punk #294. investor & project advisor. 🦇🔊\n#ethereum, #defi & #nft art. i don't give financial advice.\n✍ https://t.co/m4zwV9mRYA\n🖼 https://t.co/Aq5wHkGfEK",
        "verified": false,
        "name": "DCinvΞstor"
      },
      {
        "username": "mdudas",
        "protected": false,
        "id": "7184612",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/mXbp4SG0m9",
                "expanded_url": "https://xn--vi8h9bt0h.y.at",
                "display_url": "🍷🍕🗽.y.at"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 9,
                "end": 21,
                "username": "PaxosGlobal"
              },
              {
                "start": 35,
                "end": 50,
                "username": "6thmanventures"
              },
              {
                "start": 62,
                "end": 73,
                "username": "TheBlock__"
              }
            ]
          }
        },
        "created_at": "2007-07-01T11:21:56.000Z",
        "url": "https://t.co/mXbp4SG0m9",
        "public_metrics": {
          "followers_count": 62329,
          "following_count": 751,
          "tweet_count": 50,
          "listed_count": 1765
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1426368413371351042/HnZNlqnn_normal.jpg",
        "description": "building @PaxosGlobal // investing @6thmanventures // founder @TheBlock__",
        "location": "New York, NY",
        "verified": false,
        "name": "Mike Dudas"
      },
      {
        "username": "AllisonReichel",
        "protected": false,
        "pinned_tweet_id": "1402646898738176003",
        "id": "1049084568828043264",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/TMSlK5dtLB",
                "expanded_url": "https://blockworks.co/inflated-expectations-newsletter/",
                "display_url": "blockworks.co/inflated-expec…"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 16,
                "end": 20,
                "username": "GMU"
              },
              {
                "start": 110,
                "end": 122,
                "username": "Blockworks_"
              },
              {
                "start": 133,
                "end": 146,
                "username": "InflatedExpt"
              }
            ]
          }
        },
        "created_at": "2018-10-07T23:50:27.000Z",
        "url": "https://t.co/TMSlK5dtLB",
        "public_metrics": {
          "followers_count": 81971,
          "following_count": 479,
          "tweet_count": 10630,
          "listed_count": 551
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1389367912935301122/7p-qwSg2_normal.jpg",
        "description": "3rd yr Econ PhD @GMU | Sometimes a consultant; often an economist; always a Girl Online | Economic Strategist @Blockworks_ | Host of @InflatedExpt",
        "location": "Washington, DC",
        "verified": false,
        "name": "Allison Reichel"
      },
      {
        "username": "pumpseeker",
        "protected": false,
        "pinned_tweet_id": "1401719724917018625",
        "id": "1396197233448599554",
        "entities": {
          "description": {
            "mentions": [
              {
                "start": 129,
                "end": 138,
                "username": "elonmusk"
              }
            ],
            "cashtags": [
              {
                "start": 113,
                "end": 118,
                "tag": "DOGE"
              }
            ]
          }
        },
        "created_at": "2021-05-22T20:12:24.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 807,
          "following_count": 358,
          "tweet_count": 4297,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1416608640799322122/UvJtx7di_normal.jpg",
        "description": "Crypto enthusiast, trader at day, hodler at night. I love pizza, weed & gaming. One day I will change the world! $DOGE knight of @elonmusk 's army",
        "location": "#dogecoin TO THE MOON!",
        "verified": false,
        "name": "Vik🐕"
      },
      {
        "username": "pt",
        "protected": false,
        "pinned_tweet_id": "1418254530613968900",
        "id": "9571702",
        "created_at": "2007-10-21T01:50:51.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 20800,
          "following_count": 1869,
          "tweet_count": 32305,
          "listed_count": 686
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1111450494134710272/z04ukiat_normal.jpg",
        "description": "internet enthusiast. calmer than you are, dude.",
        "location": "🇺🇸",
        "verified": false,
        "name": "parker"
      },
      {
        "username": "openculture",
        "protected": false,
        "id": "19826509",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 22,
                "url": "http://t.co/HVA1Vpy2Ba",
                "expanded_url": "http://www.openculture.com",
                "display_url": "openculture.com"
              }
            ]
          }
        },
        "created_at": "2009-01-31T19:01:34.000Z",
        "url": "http://t.co/HVA1Vpy2Ba",
        "public_metrics": {
          "followers_count": 446187,
          "following_count": 1019,
          "tweet_count": 85414,
          "listed_count": 12467
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/851645340830715904/jrs1gcNM_normal.jpg",
        "description": "We make the web a more intelligent place. A Thought-Provoking Blog. Free Courses. Free Audio Books & eBooks. And more.",
        "location": "Planet Claire",
        "verified": false,
        "name": "Open Culture"
      },
      {
        "username": "lizzo",
        "protected": false,
        "pinned_tweet_id": "1426060938839396353",
        "id": "323417384",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/I0SXD97qN3",
                "expanded_url": "https://lizzo.lnk.to/Rumors",
                "display_url": "lizzo.lnk.to/Rumors"
              }
            ]
          }
        },
        "created_at": "2011-06-24T19:59:38.000Z",
        "url": "https://t.co/I0SXD97qN3",
        "public_metrics": {
          "followers_count": 1621184,
          "following_count": 262,
          "tweet_count": 19501,
          "listed_count": 1598
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1422227243498020865/sMYfk77e_normal.jpg",
        "description": "America’s Next Bop Star 🍑",
        "location": "Rumors 8/13",
        "verified": true,
        "name": "ALL THE RUMORS ARE TRUE"
      },
      {
        "username": "iamcardib",
        "protected": false,
        "pinned_tweet_id": "1426032262303391746",
        "id": "866953267",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/q1DBaZqsnS",
                "expanded_url": "https://lizzo.lnk.to/rumors",
                "display_url": "lizzo.lnk.to/rumors"
              }
            ]
          }
        },
        "created_at": "2012-10-07T20:53:16.000Z",
        "url": "https://t.co/q1DBaZqsnS",
        "public_metrics": {
          "followers_count": 18704526,
          "following_count": 219,
          "tweet_count": 29317,
          "listed_count": 4703
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1425606316911906820/4vnyN8rS_normal.jpg",
        "description": "DIAMOND PUSSHY",
        "location": "Mars, NYC",
        "verified": true,
        "name": "iamcardib"
      },
      {
        "username": "udiWertheimer",
        "protected": false,
        "pinned_tweet_id": "1423066509740584965",
        "id": "14527699",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/q8tpkzWj3U",
                "expanded_url": "http://HaveFunStayingPoor.com",
                "display_url": "HaveFunStayingPoor.com"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 0,
                "end": 8,
                "tag": "bitcoin"
              }
            ]
          }
        },
        "created_at": "2008-04-25T15:21:10.000Z",
        "url": "https://t.co/q8tpkzWj3U",
        "public_metrics": {
          "followers_count": 88054,
          "following_count": 2742,
          "tweet_count": 69842,
          "listed_count": 1167
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1425637149127454720/FlFUazu2_normal.jpg",
        "description": "#bitcoin is digital real estate",
        "location": "Digital real estate",
        "verified": false,
        "name": "udiverse"
      },
      {
        "username": "0xTed",
        "protected": false,
        "id": "1286497692416380928",
        "created_at": "2020-07-24T03:05:37.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 188,
          "following_count": 797,
          "tweet_count": 2123,
          "listed_count": 5
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1424559857416421377/TiuQEeHw_normal.png",
        "description": "Even a broken clock is right twice a day. Crypto, trades, memes.",
        "verified": false,
        "name": "Ted"
      },
      {
        "username": "getvicarious",
        "protected": false,
        "id": "948493988897554433",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/rgXRuZduuT",
                "expanded_url": "https://vicariously.io",
                "display_url": "vicariously.io"
              }
            ]
          }
        },
        "created_at": "2018-01-03T09:59:23.000Z",
        "url": "https://t.co/rgXRuZduuT",
        "public_metrics": {
          "followers_count": 3683,
          "following_count": 1,
          "tweet_count": 380,
          "listed_count": 38
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1286172018447024130/lSB2ZIbJ_normal.jpg",
        "description": "Follow for list suggestions and product updates. Join to create your own lists and start getting more out of Twitter.",
        "verified": false,
        "name": "Vicariously"
      },
      {
        "username": "teamikon12",
        "protected": false,
        "pinned_tweet_id": "1370949359144108033",
        "id": "1361477782807568385",
        "created_at": "2021-02-16T00:49:57.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 430,
          "following_count": 540,
          "tweet_count": 6511,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1361478813398355968/ZzMinvWO_normal.jpg",
        "description": "🆔️konics follow me!  i follow back! \n\n ⚌⚍⚌⚏  ㅤ ⚠️ SO BUSY ⚠️ I'M STILL SUPPORTING OT7 ON MY OWN TIME !  I'LL BE BACK ! 🔥",
        "location": "fan acc obviously",
        "verified": false,
        "name": "iKON | Goals stan ⚡👾"
      },
      {
        "username": "zackvoell",
        "protected": false,
        "pinned_tweet_id": "1150912643961692160",
        "id": "2373682811",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/AQjaVc3snh",
                "expanded_url": "http://xn--5g8h5sr6j.y.at/",
                "display_url": "🦍👉🌙.y.at"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 2,
                "end": 13,
                "username": "miningmemo"
              },
              {
                "start": 25,
                "end": 40,
                "username": "compass_mining"
              }
            ]
          }
        },
        "created_at": "2014-03-01T18:53:16.000Z",
        "url": "https://t.co/AQjaVc3snh",
        "public_metrics": {
          "followers_count": 41531,
          "following_count": 1131,
          "tweet_count": 27485,
          "listed_count": 697
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1394703619904184325/L7pfzASC_normal.jpg",
        "description": "📝 @miningmemo • director @compass_mining • was: blockstream, messari, coindesk • high frequency tweeter • en es",
        "location": "Austin, TX",
        "verified": false,
        "name": "Zack Voell"
      },
      {
        "username": "C40LF",
        "protected": false,
        "pinned_tweet_id": "1377673255528595456",
        "id": "1212964879172132866",
        "created_at": "2020-01-03T05:12:24.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 163,
          "following_count": 183,
          "tweet_count": 2026,
          "listed_count": 3
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1418043268051443717/RoRz1-pP_normal.jpg",
        "description": "some 15 year old on twitter who loves police stuff and transportation stuff",
        "location": "Bronx, NY",
        "verified": false,
        "name": "Nathaniel"
      },
      {
        "username": "sodadecounty",
        "protected": true,
        "pinned_tweet_id": "1419372461762781184",
        "id": "24376083",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/iUQ7I1WxHa",
                "expanded_url": "http://instagram.com/dadecountyillogik",
                "display_url": "instagram.com/dadecountyillo…"
              }
            ]
          }
        },
        "created_at": "2009-03-14T14:39:00.000Z",
        "url": "https://t.co/iUQ7I1WxHa",
        "public_metrics": {
          "followers_count": 4603,
          "following_count": 895,
          "tweet_count": 165280,
          "listed_count": 47
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1426775853896192000/4ygaF1qD_normal.jpg",
        "description": "You either a warrior or a worrier",
        "location": "Miami, Fl",
        "verified": false,
        "name": "ill logik"
      },
      {
        "username": "DocDre",
        "protected": false,
        "pinned_tweet_id": "1233928735646257152",
        "id": "14118112",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/prDmfVb69U",
                "expanded_url": "https://andrebrock.academia.edu",
                "display_url": "andrebrock.academia.edu"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 50,
                "end": 73,
                "url": "https://t.co/24rae5GPrJ",
                "expanded_url": "http://goo.gl/Wc98bf",
                "display_url": "goo.gl/Wc98bf"
              },
              {
                "start": 91,
                "end": 114,
                "url": "https://t.co/ImiL7H30kg",
                "expanded_url": "http://goo.gl/0njUPf",
                "display_url": "goo.gl/0njUPf"
              },
              {
                "start": 130,
                "end": 153,
                "url": "https://t.co/qZpYaHDoMh",
                "expanded_url": "https://bit.ly/2EQZbHL",
                "display_url": "bit.ly/2EQZbHL"
              }
            ]
          }
        },
        "created_at": "2008-03-10T22:23:28.000Z",
        "url": "https://t.co/prDmfVb69U",
        "public_metrics": {
          "followers_count": 14547,
          "following_count": 5341,
          "tweet_count": 153769,
          "listed_count": 234
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1306316492494049280/Hrtn5SLh_normal.jpg",
        "description": "Ignore my late night posts. I study BlackTwitter: https://t.co/24rae5GPrJ digital methods: https://t.co/ImiL7H30kg & Afrofutures: https://t.co/qZpYaHDoMh",
        "location": "Atlanta, GA",
        "verified": true,
        "name": "thot leedurr"
      },
      {
        "username": "PeterChawaga",
        "protected": false,
        "pinned_tweet_id": "1423297223241179139",
        "id": "448253354",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/pcueUmaTkT",
                "expanded_url": "https://bitcoinmagazine.com/authors/peter-chawaga",
                "display_url": "bitcoinmagazine.com/authors/peter-…"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 8,
                "end": 24,
                "username": "BitcoinMagazine"
              }
            ]
          }
        },
        "created_at": "2011-12-27T20:00:54.000Z",
        "url": "https://t.co/pcueUmaTkT",
        "public_metrics": {
          "followers_count": 1366,
          "following_count": 183,
          "tweet_count": 1219,
          "listed_count": 35
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1184147840416862208/eGh03qML_normal.jpg",
        "description": "Editor, @BitcoinMagazine. CEO, Chawaga Corp. Enterprises.",
        "location": "Kentucky",
        "verified": false,
        "name": "Peter Chawaga"
      },
      {
        "username": "StewYorkCity",
        "protected": false,
        "pinned_tweet_id": "1395411641513152520",
        "id": "2589586742",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/JaMMfaxkbJ",
                "expanded_url": "http://linktr.ee/StewCornelius",
                "display_url": "linktr.ee/StewCornelius"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 113,
                "end": 130,
                "tag": "BlackLivesMatter"
              }
            ],
            "mentions": [
              {
                "start": 26,
                "end": 34,
                "username": "Twitter"
              },
              {
                "start": 46,
                "end": 51,
                "username": "Hulu"
              },
              {
                "start": 56,
                "end": 63,
                "username": "Turner"
              },
              {
                "start": 66,
                "end": 76,
                "username": "Morehouse"
              },
              {
                "start": 79,
                "end": 95,
                "username": "Parsons_Fashion"
              },
              {
                "start": 133,
                "end": 143,
                "username": "ChelseaFC"
              }
            ]
          }
        },
        "created_at": "2014-06-26T13:24:14.000Z",
        "url": "https://t.co/JaMMfaxkbJ",
        "public_metrics": {
          "followers_count": 5085,
          "following_count": 3718,
          "tweet_count": 14312,
          "listed_count": 60
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1349767928225345537/1CBLGSJP_normal.jpg",
        "description": "Sr. Manager, Ent Partners @Twitter | Formerly @Hulu and @Turner | @Morehouse | @Parsons_Fashion | Blackstar 🇬🇭 | #BlackLivesMatter | @ChelseaFC Forever.",
        "location": "BedStuy",
        "verified": false,
        "name": "stewart cornelius"
      },
      {
        "username": "kim_yle",
        "protected": false,
        "id": "575119136",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/3XAeKJyAs8",
                "expanded_url": "http://kimberlyyle.com",
                "display_url": "kimberlyyle.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 54,
                "end": 68,
                "username": "TwitterSpaces"
              }
            ]
          }
        },
        "created_at": "2012-05-09T06:52:42.000Z",
        "url": "https://t.co/3XAeKJyAs8",
        "public_metrics": {
          "followers_count": 314,
          "following_count": 296,
          "tweet_count": 65,
          "listed_count": 10
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1425150661281320964/ZjZ7nEam_normal.jpg",
        "description": "An overly enthusiastic notetaker. Designer working on @TwitterSpaces",
        "location": "Oakland, CA",
        "verified": false,
        "name": "Kim"
      },
      {
        "username": "TwitterSpaces",
        "protected": false,
        "pinned_tweet_id": "1389270063807598594",
        "id": "1065249714214457345",
        "created_at": "2018-11-21T14:24:58.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 321785,
          "following_count": 21,
          "tweet_count": 303,
          "listed_count": 826
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1324087619408465920/awfzDTWF_normal.jpg",
        "description": "Twitter Spaces is where live audio conversations happen.",
        "location": "planet earth",
        "verified": true,
        "name": "Spaces"
      },
      {
        "username": "linukxxx",
        "protected": false,
        "id": "915989833369169925",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/ApSbphqA4X",
                "expanded_url": "https://www.linuk.co.uk",
                "display_url": "linuk.co.uk"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 35,
                "end": 45,
                "username": "TwitterUK"
              }
            ]
          }
        },
        "created_at": "2017-10-05T17:19:29.000Z",
        "url": "https://t.co/ApSbphqA4X",
        "public_metrics": {
          "followers_count": 296,
          "following_count": 866,
          "tweet_count": 387,
          "listed_count": 7
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1320467151732547593/kT5CrJO6_normal.jpg",
        "description": "Android Dev | Software Engineer at @TwitterUK",
        "location": "London, England",
        "verified": false,
        "name": "linuk"
      },
      {
        "username": "sethforprivacy",
        "protected": false,
        "pinned_tweet_id": "1413548467721543680",
        "id": "291490266",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/EAzcEa0szS",
                "expanded_url": "https://sethforprivacy.com",
                "display_url": "sethforprivacy.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 113,
                "end": 123,
                "username": "optoutpod"
              }
            ]
          }
        },
        "created_at": "2011-05-02T03:18:20.000Z",
        "url": "https://t.co/EAzcEa0szS",
        "public_metrics": {
          "followers_count": 5344,
          "following_count": 646,
          "tweet_count": 7270,
          "listed_count": 92
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1353846945291370496/E8JJq2d0_normal.jpg",
        "description": "Privacy is a human right. Monero is the digital cash we need to prevent an Orwellian financial future. \n\nHost of @optoutpod, a privacy-focused podcast.",
        "location": "United States",
        "verified": false,
        "name": "Seth For Privacy"
      },
      {
        "username": "optoutpod",
        "protected": false,
        "pinned_tweet_id": "1424799143420211205",
        "id": "1393276157831925773",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/pwkDJV4f5v",
                "expanded_url": "https://www.optoutpod.com/",
                "display_url": "optoutpod.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 145,
                "end": 160,
                "username": "sethforprivacy"
              }
            ]
          }
        },
        "created_at": "2021-05-14T18:45:31.000Z",
        "url": "https://t.co/pwkDJV4f5v",
        "public_metrics": {
          "followers_count": 1326,
          "following_count": 40,
          "tweet_count": 204,
          "listed_count": 26
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1403070707320430599/uK2eSM-s_normal.jpg",
        "description": "Focused on helping you opt out of surveillance capitalism and learn more about how you can take back your privacy + data-sovereignty.\n\nHosted by @sethforprivacy",
        "verified": false,
        "name": "Opt Out Podcast"
      },
      {
        "username": "LynAldenContact",
        "protected": false,
        "pinned_tweet_id": "1416907266406617088",
        "id": "823766058909761536",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/0HTJ9b37aL",
                "expanded_url": "https://www.lynalden.com",
                "display_url": "lynalden.com"
              }
            ]
          }
        },
        "created_at": "2017-01-24T05:35:08.000Z",
        "url": "https://t.co/0HTJ9b37aL",
        "public_metrics": {
          "followers_count": 246425,
          "following_count": 180,
          "tweet_count": 8008,
          "listed_count": 4403
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1366094142405812234/LCWXc4QQ_normal.jpg",
        "description": "Founder of Lyn Alden Investment Strategy. Fundamental investing with a global macro overlay. Finance/Engineering blended background.",
        "verified": true,
        "name": "Lyn Alden"
      },
      {
        "username": "Niklauzi",
        "protected": false,
        "pinned_tweet_id": "1425702404834709508",
        "id": "2647949986",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/cQOms7i3nI",
                "expanded_url": "https://wa.me/message/5IUNLOKD5DG4G1",
                "display_url": "wa.me/message/5IUNLO…"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 88,
                "end": 93,
                "tag": "Defi"
              }
            ],
            "mentions": [
              {
                "start": 55,
                "end": 67,
                "username": "Fcbarcelona"
              }
            ]
          }
        },
        "created_at": "2014-06-27T20:52:05.000Z",
        "url": "https://t.co/cQOms7i3nI",
        "public_metrics": {
          "followers_count": 1078,
          "following_count": 1540,
          "tweet_count": 13159,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1379753135640576002/22BZSgTC_normal.jpg",
        "description": "||Content Creator|| Digital Marketer||  FrontEndDev || @Fcbarcelona|| Baby-Pharmacist|| #Defi ||",
        "location": "ASGARD",
        "verified": false,
        "name": "Niklaus"
      },
      {
        "username": "jeetsidhu_",
        "protected": false,
        "pinned_tweet_id": "1091864299440619521",
        "id": "1305977989",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 38,
                "end": 46,
                "tag": "bitcoin"
              }
            ]
          }
        },
        "created_at": "2013-03-26T23:50:39.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 12811,
          "following_count": 7015,
          "tweet_count": 26812,
          "listed_count": 207
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1397004280700280835/gO5s1fqg_normal.jpg",
        "description": "overcoming high levels of uncertainty|#bitcoin |small groups| reducing information asymmetry| 🔥personal views, not financial advice🔥",
        "location": "t.me/thebitcoinfiles",
        "verified": false,
        "name": "jeet ਪ੍ਰਭਜੀਤ🦎🌋🐊"
      },
      {
        "username": "MuunWallet",
        "protected": false,
        "pinned_tweet_id": "1348680520796876800",
        "id": "965963081640742913",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/SwlhUeJ1Db",
                "expanded_url": "http://muun.com",
                "display_url": "muun.com"
              }
            ]
          }
        },
        "created_at": "2018-02-20T14:55:20.000Z",
        "url": "https://t.co/SwlhUeJ1Db",
        "public_metrics": {
          "followers_count": 14198,
          "following_count": 95,
          "tweet_count": 1016,
          "listed_count": 189
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1347562888177864706/rMI-v6Tn_normal.png",
        "description": "Self-custodial wallet for bitcoin and lightning. 📲 Available on iOS and Android.\n\nIf you need help, please write to us at support@muun.com.",
        "verified": false,
        "name": "Muun"
      },
      {
        "username": "x52872395",
        "protected": false,
        "id": "1388515267291009027",
        "created_at": "2021-05-01T15:27:00.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 8,
          "following_count": 327,
          "tweet_count": 187,
          "listed_count": 0
        },
        "profile_image_url": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
        "description": "",
        "verified": false,
        "name": "x"
      },
      {
        "username": "sikakanotna",
        "protected": false,
        "id": "130274569",
        "created_at": "2010-04-06T21:05:02.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 31,
          "following_count": 187,
          "tweet_count": 84,
          "listed_count": 3
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1108852640753111040/OYxampHx_normal.jpg",
        "description": "Rutgers New Brunswick '16, Rutgers Law '20. Attorney interested in securities, Bitcoin, technology, Apple, Tesla, and the future.",
        "location": "Philadelphia, PA",
        "verified": false,
        "name": "Joseph Antonakakis"
      },
      {
        "username": "CashApp",
        "protected": false,
        "id": "1445650784",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/hWBkqMo740",
                "expanded_url": "http://cash.app/download",
                "display_url": "cash.app/download"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 55,
                "end": 78,
                "url": "https://t.co/V250hQQ6O0",
                "expanded_url": "http://cash.app/stocks",
                "display_url": "cash.app/stocks"
              },
              {
                "start": 91,
                "end": 114,
                "url": "https://t.co/NVTiZ36ao2",
                "expanded_url": "http://bit.ly/2U0MpM5",
                "display_url": "bit.ly/2U0MpM5"
              }
            ]
          }
        },
        "created_at": "2013-05-21T06:50:57.000Z",
        "url": "https://t.co/hWBkqMo740",
        "public_metrics": {
          "followers_count": 1253510,
          "following_count": 2,
          "tweet_count": 3290,
          "listed_count": 1297
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/971494919901712384/xIU67qs9_normal.png",
        "description": "Send, save, & invest in stocks or bitcoin. Learn more: https://t.co/V250hQQ6O0 Disclosure: https://t.co/NVTiZ36ao2",
        "verified": true,
        "name": "Cash App"
      },
      {
        "username": "jchervinsky",
        "protected": false,
        "id": "47003920",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/4zx8sSpLTI",
                "expanded_url": "http://jchervinsky.substack.com",
                "display_url": "jchervinsky.substack.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 26,
                "end": 42,
                "username": "compoundfinance"
              },
              {
                "start": 62,
                "end": 74,
                "username": "variantfund"
              },
              {
                "start": 87,
                "end": 102,
                "username": "blockchainassn"
              }
            ]
          }
        },
        "created_at": "2009-06-14T01:21:58.000Z",
        "url": "https://t.co/4zx8sSpLTI",
        "public_metrics": {
          "followers_count": 71918,
          "following_count": 500,
          "tweet_count": 7861,
          "listed_count": 1278
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1366079625529556995/1z_v1sHr_normal.jpg",
        "description": "Lawyer, but not yours. GC @compoundfinance. Strategic advisor @variantfund. DeFi chair @blockchainassn. Tweets aren't legal or financial advice. 🇺🇸",
        "location": "Washington, DC",
        "verified": false,
        "name": "Jake Chervinsky"
      },
      {
        "username": "CitizenBitcoin",
        "protected": false,
        "pinned_tweet_id": "1388212680708685824",
        "id": "950509070682791936",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/BI4kqOcDgj",
                "expanded_url": "http://swanbitcoin.com/brady",
                "display_url": "swanbitcoin.com/brady"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 54,
                "end": 77,
                "url": "https://t.co/KKyN9J4Foj",
                "expanded_url": "http://youtube.com/swansignal",
                "display_url": "youtube.com/swansignal"
              },
              {
                "start": 80,
                "end": 103,
                "url": "https://t.co/9ncDovZNdN",
                "expanded_url": "http://swansignalpodcast.com",
                "display_url": "swansignalpodcast.com"
              },
              {
                "start": 122,
                "end": 145,
                "url": "https://t.co/y83zyEA0GT",
                "expanded_url": "http://citizenbitcoin.world",
                "display_url": "citizenbitcoin.world"
              }
            ],
            "hashtags": [
              {
                "start": 0,
                "end": 8,
                "tag": "Bitcoin"
              }
            ],
            "mentions": [
              {
                "start": 27,
                "end": 39,
                "username": "SwanBitcoin"
              }
            ]
          }
        },
        "created_at": "2018-01-08T23:26:36.000Z",
        "url": "https://t.co/BI4kqOcDgj",
        "public_metrics": {
          "followers_count": 32966,
          "following_count": 1296,
          "tweet_count": 19923,
          "listed_count": 513
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1406263682565353472/1niXd_TX_normal.jpg",
        "description": "#Bitcoin Head of Education @SwanBitcoin 🔆 Swan Signal https://t.co/KKyN9J4Foj + https://t.co/9ncDovZNdN 🔆 Citizen Bitcoin https://t.co/y83zyEA0GT 🔆 Own Your Future",
        "location": "The Timechain",
        "verified": false,
        "name": "BRADY"
      },
      {
        "username": "julie_stitzel",
        "protected": false,
        "pinned_tweet_id": "1424844173384028170",
        "id": "1969564897",
        "entities": {
          "description": {
            "mentions": [
              {
                "start": 5,
                "end": 13,
                "username": "CashApp"
              },
              {
                "start": 24,
                "end": 38,
                "username": "USChamberCCMC"
              },
              {
                "start": 40,
                "end": 54,
                "username": "USChamberTech"
              },
              {
                "start": 56,
                "end": 61,
                "username": "Etsy"
              },
              {
                "start": 66,
                "end": 76,
                "username": "pewtrusts"
              }
            ]
          }
        },
        "created_at": "2013-10-18T20:32:36.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 1254,
          "following_count": 538,
          "tweet_count": 1417,
          "listed_count": 21
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/710561253907894273/1y105nFT_normal.jpg",
        "description": "Team @CashApp, formerly @USChamberCCMC, @USChamberTech, @Etsy and @pewtrusts, Thoughts are my own.",
        "location": "Washington, DC",
        "verified": false,
        "name": "Julie Stitzel"
      },
      {
        "username": "SenLummis",
        "protected": false,
        "id": "22831059",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/vVSh2PTWTH",
                "expanded_url": "http://www.lummis.senate.gov",
                "display_url": "lummis.senate.gov"
              }
            ]
          }
        },
        "created_at": "2009-03-04T20:44:59.000Z",
        "url": "https://t.co/vVSh2PTWTH",
        "public_metrics": {
          "followers_count": 61327,
          "following_count": 757,
          "tweet_count": 2338,
          "listed_count": 1243
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1347538782451625984/4YbXM-09_normal.jpg",
        "description": "U.S. Senator from Wyoming/Space Junk Lady\n\nLummis rhymes with hummus",
        "location": "Wyoming and Washington D.C.",
        "verified": true,
        "name": "Senator Cynthia Lummis"
      },
      {
        "username": "jillrgunter",
        "protected": false,
        "id": "169312819",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/KxaeR43CeV",
                "expanded_url": "https://www.jillrcarlson.com/",
                "display_url": "jillrcarlson.com"
              }
            ]
          }
        },
        "created_at": "2010-07-22T01:41:30.000Z",
        "url": "https://t.co/KxaeR43CeV",
        "public_metrics": {
          "followers_count": 59166,
          "following_count": 1705,
          "tweet_count": 16296,
          "listed_count": 1456
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1359779543771353088/FLfIsD4W_normal.jpg",
        "description": "the past like the future is indefinite & exists only as a spectrum of possibilities",
        "location": "San Francisco, CA",
        "verified": false,
        "name": "Jill Gunter"
      },
      {
        "username": "TheBlueMatt",
        "protected": false,
        "pinned_tweet_id": "1402749458287312898",
        "id": "256755545",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/TnvzfHXEmz",
                "expanded_url": "https://bluematt.bitcoin.ninja",
                "display_url": "bluematt.bitcoin.ninja"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 89,
                "end": 98,
                "username": "sqcrypto"
              },
              {
                "start": 123,
                "end": 132,
                "username": "as397444"
              },
              {
                "start": 151,
                "end": 157,
                "username": "soona"
              }
            ]
          }
        },
        "created_at": "2011-02-24T00:54:36.000Z",
        "url": "https://t.co/TnvzfHXEmz",
        "public_metrics": {
          "followers_count": 57165,
          "following_count": 197,
          "tweet_count": 8284,
          "listed_count": 1352
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/697361498587451394/_rX0-O0W_normal.png",
        "description": "10th known contributor to Bitcoin Core. Full-Time Open-Source Bitcoin+Lightning Projects @sqcrypto. Networking and musings @as397444. Mostly reposting @soona.",
        "location": "NY/SF, usually",
        "verified": false,
        "name": "Matt Corallo"
      },
      {
        "username": "RepTomEmmer",
        "protected": false,
        "pinned_tweet_id": "1397666182417768448",
        "id": "2914515430",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 22,
                "url": "http://t.co/jU8TYBqqHL",
                "expanded_url": "http://Emmer.house.gov",
                "display_url": "Emmer.house.gov"
              }
            ]
          }
        },
        "created_at": "2014-12-10T21:44:52.000Z",
        "url": "http://t.co/jU8TYBqqHL",
        "public_metrics": {
          "followers_count": 23639,
          "following_count": 1094,
          "tweet_count": 6238,
          "listed_count": 754
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1334632307618144256/xXMyFn6A_normal.jpg",
        "description": "Husband, father, hockey fan, and Congressman for Minnesota's 6th District.",
        "location": "Otsego, MN | Washington, D.C.",
        "verified": true,
        "name": "Tom Emmer"
      },
      {
        "username": "RepDarrenSoto",
        "protected": false,
        "pinned_tweet_id": "1422997193934376961",
        "id": "818713465653051392",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/3Iswy0Rzuf",
                "expanded_url": "https://soto.house.gov",
                "display_url": "soto.house.gov"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 21,
                "end": 25,
                "tag": "FL9"
              }
            ],
            "mentions": [
              {
                "start": 91,
                "end": 102,
                "username": "FFCongress"
              },
              {
                "start": 114,
                "end": 129,
                "username": "EnergyCommerce"
              },
              {
                "start": 131,
                "end": 138,
                "username": "NRDems"
              },
              {
                "start": 141,
                "end": 156,
                "username": "HispanicCaucus"
              }
            ]
          }
        },
        "created_at": "2017-01-10T06:57:55.000Z",
        "url": "https://t.co/3Iswy0Rzuf",
        "public_metrics": {
          "followers_count": 21503,
          "following_count": 6832,
          "tweet_count": 6600,
          "listed_count": 690
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1268566855909851136/pMeXN2R2_normal.jpg",
        "description": "Proudly representing #FL9: Osceola County & parts of Orange & Polk Counties. 🇺🇸🇵🇷 Chair of @FFCongress. Member of @EnergyCommerce, @NRDems & @HispanicCaucus",
        "location": "Kissimmee, Florida",
        "verified": true,
        "name": "Rep. Darren Soto"
      },
      {
        "username": "RepDavid",
        "protected": false,
        "id": "229197216",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/M5KzTeoC3Z",
                "expanded_url": "http://schweikert.house.gov/",
                "display_url": "schweikert.house.gov"
              }
            ]
          }
        },
        "created_at": "2010-12-21T19:48:02.000Z",
        "url": "https://t.co/M5KzTeoC3Z",
        "public_metrics": {
          "followers_count": 31073,
          "following_count": 1947,
          "tweet_count": 5707,
          "listed_count": 1234
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1423372039923044359/YKhSm3bk_normal.jpg",
        "description": "Avid hiker and coffee enthusiast who is proud to represent Arizona's 6th Congressional District in the U.S. House of Representatives.",
        "location": "Arizona",
        "verified": true,
        "name": "Rep. David Schweikert"
      },
      {
        "username": "RepBillFoster",
        "protected": false,
        "pinned_tweet_id": "1410609023854862340",
        "id": "1080509366",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/MUUnxZciRU",
                "expanded_url": "http://foster.house.gov",
                "display_url": "foster.house.gov"
              }
            ]
          }
        },
        "created_at": "2013-01-11T18:17:11.000Z",
        "url": "https://t.co/MUUnxZciRU",
        "public_metrics": {
          "followers_count": 48034,
          "following_count": 1828,
          "tweet_count": 6049,
          "listed_count": 994
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1403381378226479110/_6l3na22_normal.jpg",
        "description": "Congressman Bill Foster is a scientist and businessman representing the 11th Congressional District of Illinois",
        "location": "Naperville, IL",
        "verified": true,
        "name": "Congressman Bill Foster"
      },
      {
        "username": "pourteaux",
        "protected": false,
        "pinned_tweet_id": "1424839772820975634",
        "id": "894339217412816896",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/7P38jIf4OA",
                "expanded_url": "http://yeet.hns.to",
                "display_url": "yeet.hns.to"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 119,
                "end": 142,
                "url": "https://t.co/liLCupIlY4",
                "expanded_url": "http://pourteaux.substack.com",
                "display_url": "pourteaux.substack.com"
              }
            ],
            "mentions": [
              {
                "start": 0,
                "end": 6,
                "username": "mtgox"
              },
              {
                "start": 20,
                "end": 33,
                "username": "huatventures"
              },
              {
                "start": 38,
                "end": 44,
                "username": "uiowa"
              },
              {
                "start": 45,
                "end": 53,
                "username": "harvard"
              },
              {
                "start": 58,
                "end": 67,
                "username": "seoulena"
              },
              {
                "start": 105,
                "end": 110,
                "username": "P4HR"
              }
            ]
          }
        },
        "created_at": "2017-08-06T23:27:40.000Z",
        "url": "https://t.co/7P38jIf4OA",
        "public_metrics": {
          "followers_count": 4962,
          "following_count": 1069,
          "tweet_count": 15851,
          "listed_count": 87
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1424111080293425152/3YAA58QV_normal.jpg",
        "description": "@mtgox creditor. gp @huatventures. ex @uiowa @harvard. 오빠 @seoulena. p2p & btc for human rights. MD, MPH @P4HR. words: https://t.co/liLCupIlY4",
        "location": "🇺🇸🇸🇬🇬🇧",
        "verified": false,
        "name": "pourteaux OP_CTV"
      },
      {
        "username": "SenShelby",
        "protected": false,
        "pinned_tweet_id": "1405531958084476943",
        "id": "21111098",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/1iULT8X6Vz",
                "expanded_url": "http://www.shelby.senate.gov",
                "display_url": "shelby.senate.gov"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 67,
                "end": 90,
                "url": "https://t.co/YqOy54UpSf",
                "expanded_url": "https://www.facebook.com/RichardShelby",
                "display_url": "facebook.com/RichardShelby"
              }
            ]
          }
        },
        "created_at": "2009-02-17T17:53:43.000Z",
        "url": "https://t.co/1iULT8X6Vz",
        "public_metrics": {
          "followers_count": 94562,
          "following_count": 538,
          "tweet_count": 2990,
          "listed_count": 2294
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/621070518834212864/ikIQKvUq_normal.jpg",
        "description": "The official Twitter page for U.S. Senator Richard Shelby (R-Ala.) https://t.co/YqOy54UpSf",
        "location": "Tuscaloosa, Alabama",
        "verified": true,
        "name": "Richard Shelby"
      },
      {
        "username": "Wealth_Theory",
        "protected": false,
        "id": "1090068803562684419",
        "entities": {
          "description": {
            "hashtags": [
              {
                "start": 76,
                "end": 84,
                "tag": "bitcoin"
              }
            ]
          }
        },
        "created_at": "2019-01-29T02:07:10.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 199445,
          "following_count": 258,
          "tweet_count": 15988,
          "listed_count": 2275
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1393044641772150786/MBzvgHOA_normal.jpg",
        "description": "Insights on building wealth from a self-made millennial. Discussing stocks, #bitcoin, gold, real estate, and other markets.",
        "verified": false,
        "name": "Wealth Theory ™"
      },
      {
        "username": "BitcoinMagazine",
        "protected": false,
        "id": "361289499",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/tBgCU6XE5A",
                "expanded_url": "https://bitcoinmagazine.com",
                "display_url": "bitcoinmagazine.com"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 36,
                "end": 59,
                "url": "https://t.co/MopdxaIITE",
                "expanded_url": "http://bitcoinmagazine.com/subscribe",
                "display_url": "bitcoinmagazine.com/subscribe"
              },
              {
                "start": 86,
                "end": 109,
                "url": "https://t.co/yyaMwgovcY",
                "expanded_url": "http://b.tc/conference",
                "display_url": "b.tc/conference"
              },
              {
                "start": 112,
                "end": 135,
                "url": "https://t.co/E1rETsd0Oa",
                "expanded_url": "http://t.me/officialbitcoinmagazine",
                "display_url": "t.me/officialbitcoi…"
              },
              {
                "start": 138,
                "end": 161,
                "url": "https://t.co/vNgbV32HpO",
                "expanded_url": "http://twitch.tv/bitcoin",
                "display_url": "twitch.tv/bitcoin"
              }
            ]
          }
        },
        "created_at": "2011-08-24T15:14:54.000Z",
        "url": "https://t.co/tBgCU6XE5A",
        "public_metrics": {
          "followers_count": 1240124,
          "following_count": 516,
          "tweet_count": 16082,
          "listed_count": 9621
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1396292016443691016/CAQfaieB_normal.jpg",
        "description": "the most trusted voice in bitcoin - https://t.co/MopdxaIITE | the bitcoin conference: https://t.co/yyaMwgovcY | https://t.co/E1rETsd0Oa | https://t.co/vNgbV32HpO",
        "location": "Nashville, TN",
        "verified": true,
        "name": "Bitcoin Magazine"
      },
      {
        "username": "elidourado",
        "protected": false,
        "pinned_tweet_id": "1344645176896200712",
        "id": "851361",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/vLXxvzC6ds",
                "expanded_url": "https://elidourado.com/",
                "display_url": "elidourado.com"
              }
            ]
          },
          "description": {
            "mentions": [
              {
                "start": 19,
                "end": 26,
                "username": "cgousu"
              }
            ]
          }
        },
        "created_at": "2007-03-09T22:40:22.000Z",
        "url": "https://t.co/vLXxvzC6ds",
        "public_metrics": {
          "followers_count": 26943,
          "following_count": 248,
          "tweet_count": 36299,
          "listed_count": 727
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1175881866915848192/3z9Rv_Xc_normal.jpg",
        "description": "Tech and growth at @cgousu. All I want is for GDP per capita to be $200k by 2050. I believe in hard tech, megaprojects, fast planes, neomedievalism, and karma.",
        "location": "Washington, DC",
        "verified": true,
        "name": "Eli Dourado"
      },
      {
        "username": "senrobportman",
        "protected": false,
        "id": "18915145",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/IR7Ky4qOaO",
                "expanded_url": "http://portman.senate.gov",
                "display_url": "portman.senate.gov"
              }
            ]
          }
        },
        "created_at": "2009-01-12T20:56:42.000Z",
        "url": "https://t.co/IR7Ky4qOaO",
        "public_metrics": {
          "followers_count": 165024,
          "following_count": 5040,
          "tweet_count": 20903,
          "listed_count": 3203
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1037435418743107590/9hbhXXal_normal.jpg",
        "description": "United States Senator from the Buckeye State.",
        "location": "Ohio",
        "verified": true,
        "name": "Rob Portman"
      },
      {
        "username": "SenToomey",
        "protected": false,
        "id": "221162525",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 22,
                "url": "http://t.co/7dKjJ0xolY",
                "expanded_url": "http://toomey.senate.gov",
                "display_url": "toomey.senate.gov"
              }
            ]
          }
        },
        "created_at": "2010-11-29T22:32:09.000Z",
        "url": "http://t.co/7dKjJ0xolY",
        "public_metrics": {
          "followers_count": 177675,
          "following_count": 1030,
          "tweet_count": 5425,
          "listed_count": 3032
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/574930402214727683/gDu5VqMP_normal.jpeg",
        "description": "Official Twitter account for Pat Toomey. Husband. Father. U.S. Senator for Pennsylvania.",
        "verified": true,
        "name": "Senator Pat Toomey"
      },
      {
        "username": "RonWyden",
        "protected": false,
        "id": "250188760",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/PeDrcGUTgW",
                "expanded_url": "http://wyden.senate.gov",
                "display_url": "wyden.senate.gov"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 108,
                "end": 131,
                "url": "https://t.co/a6CyBjudYH",
                "expanded_url": "http://Instagram.com/RonWyden",
                "display_url": "Instagram.com/RonWyden"
              }
            ],
            "mentions": [
              {
                "start": 26,
                "end": 40,
                "username": "SenateFinance"
              },
              {
                "start": 58,
                "end": 69,
                "username": "WydenPress"
              }
            ]
          }
        },
        "created_at": "2011-02-10T16:08:15.000Z",
        "url": "https://t.co/PeDrcGUTgW",
        "public_metrics": {
          "followers_count": 523833,
          "following_count": 619,
          "tweet_count": 11650,
          "listed_count": 4247
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/847448688448294912/zobeO8dK_normal.jpg",
        "description": "U.S. Senator from Oregon. @SenateFinance Chairman. Follow @WydenPress for updates from my staff. Instagram: https://t.co/a6CyBjudYH",
        "location": "Oregon",
        "verified": true,
        "name": "Ron Wyden"
      },
      {
        "username": "MarkWarner",
        "protected": false,
        "id": "7429102",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/sIM9jRW0rP",
                "expanded_url": "http://warner.senate.gov",
                "display_url": "warner.senate.gov"
              }
            ]
          }
        },
        "created_at": "2007-07-12T14:03:33.000Z",
        "url": "https://t.co/sIM9jRW0rP",
        "public_metrics": {
          "followers_count": 491479,
          "following_count": 23468,
          "tweet_count": 11469,
          "listed_count": 4878
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1396933851453218819/Cdea8Hw5_normal.jpg",
        "description": "U.S. Senator from Virginia. \nChairman, Senate Intel Committee.",
        "location": "Virginia",
        "verified": true,
        "name": "Mark Warner"
      },
      {
        "username": "SenatorSinema",
        "protected": false,
        "id": "1080844782",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/WrlaMe6YPs",
                "expanded_url": "http://sinema.senate.gov",
                "display_url": "sinema.senate.gov"
              }
            ]
          }
        },
        "created_at": "2013-01-11T20:31:03.000Z",
        "url": "https://t.co/WrlaMe6YPs",
        "public_metrics": {
          "followers_count": 149173,
          "following_count": 731,
          "tweet_count": 15021,
          "listed_count": 2041
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1034130772406353921/X0F2Al0E_normal.jpg",
        "description": "Official Twitter feed of U.S. Senator Kyrsten Sinema, serving Arizona.",
        "verified": true,
        "name": "Kyrsten Sinema"
      },
      {
        "username": "AnselLindner",
        "protected": false,
        "pinned_tweet_id": "1312005125968404481",
        "id": "1475038004",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/XEm33hzhcy",
                "expanded_url": "https://bitcoinandmarkets.com",
                "display_url": "bitcoinandmarkets.com"
              }
            ]
          },
          "description": {
            "urls": [
              {
                "start": 66,
                "end": 89,
                "url": "https://t.co/050uvIDO9Q",
                "expanded_url": "http://btcm.co",
                "display_url": "btcm.co"
              }
            ],
            "mentions": [
              {
                "start": 8,
                "end": 17,
                "username": "btcmrkts"
              }
            ]
          }
        },
        "created_at": "2013-06-01T15:50:11.000Z",
        "url": "https://t.co/XEm33hzhcy",
        "public_metrics": {
          "followers_count": 19405,
          "following_count": 358,
          "tweet_count": 33404,
          "listed_count": 761
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/815670919460859904/N7_JQzOU_normal.jpg",
        "description": "Host of @btcmrkts, Editor-and-Chief at Bitcoin & Markets Research https://t.co/050uvIDO9Q.",
        "location": "twitter",
        "verified": false,
        "name": "Ansel Lindner"
      },
      {
        "username": "milessuter",
        "protected": false,
        "pinned_tweet_id": "1389958108986941440",
        "id": "180212381",
        "created_at": "2010-08-19T02:32:36.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 17691,
          "following_count": 3961,
          "tweet_count": 18464,
          "listed_count": 404
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1376560125654224904/7iZAyCEb_normal.jpg",
        "description": "I care deeply about human freedom",
        "verified": false,
        "name": "Miles Suter"
      },
      {
        "username": "abesutherland",
        "protected": false,
        "id": "49795410",
        "entities": {
          "description": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/Z3XPyQjgSf",
                "expanded_url": "http://StakingTax.com",
                "display_url": "StakingTax.com"
              }
            ]
          }
        },
        "created_at": "2009-06-22T22:45:59.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 255,
          "following_count": 2153,
          "tweet_count": 8,
          "listed_count": 5
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1191195830293807106/StE80ROK_normal.jpg",
        "description": "https://t.co/Z3XPyQjgSf -- Taxation of cryptocurrency block rewards: a primer.",
        "location": "ÜT: 34.087697,-118.269592",
        "verified": false,
        "name": "Abraham Sutherland"
      },
      {
        "username": "moneyball",
        "protected": false,
        "pinned_tweet_id": "1359604571824222208",
        "id": "8152232",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/Z71LBtDyZA",
                "expanded_url": "https://www.linkedin.com/in/stevenjlee",
                "display_url": "linkedin.com/in/stevenjlee"
              }
            ]
          },
          "description": {
            "hashtags": [
              {
                "start": 24,
                "end": 32,
                "tag": "bitcoin"
              }
            ],
            "mentions": [
              {
                "start": 33,
                "end": 42,
                "username": "sqcrypto"
              }
            ]
          }
        },
        "created_at": "2007-08-13T04:53:03.000Z",
        "url": "https://t.co/Z71LBtDyZA",
        "public_metrics": {
          "followers_count": 20607,
          "following_count": 871,
          "tweet_count": 3782,
          "listed_count": 545
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1253865378083557376/6RFue-26_normal.jpg",
        "description": "A PM working to improve #bitcoin @sqcrypto. Angel Investor. Previously Product Director at Google.",
        "location": "SF",
        "verified": false,
        "name": "Steve Lee"
      },
      {
        "username": "samarsingla",
        "protected": false,
        "id": "16949938",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/iDOk07Y4kO",
                "expanded_url": "http://samarsingla.com",
                "display_url": "samarsingla.com"
              }
            ]
          }
        },
        "created_at": "2008-10-24T14:28:47.000Z",
        "url": "https://t.co/iDOk07Y4kO",
        "public_metrics": {
          "followers_count": 3364,
          "following_count": 1124,
          "tweet_count": 2638,
          "listed_count": 0
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/828330857010065408/D7_s2Wjk_normal.jpg",
        "description": "building the commerce 2.0 platform",
        "location": "Chandigarh, India",
        "verified": false,
        "name": "Samar Singla"
      },
      {
        "username": "TIDAL",
        "protected": false,
        "pinned_tweet_id": "1425816260890275840",
        "id": "2679055230",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/urRAHmw95A",
                "expanded_url": "http://TIDAL.com",
                "display_url": "TIDAL.com"
              }
            ]
          }
        },
        "created_at": "2014-07-25T08:37:11.000Z",
        "url": "https://t.co/urRAHmw95A",
        "public_metrics": {
          "followers_count": 347087,
          "following_count": 971,
          "tweet_count": 51242,
          "listed_count": 1492
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1414754054547378180/6vEXsf71_normal.jpg",
        "description": "It’s about the music.",
        "verified": true,
        "name": "TIDAL"
      },
      {
        "username": "aaakkmm",
        "protected": false,
        "pinned_tweet_id": "1418727671094259716",
        "id": "21129700",
        "created_at": "2009-02-17T20:59:36.000Z",
        "url": "",
        "public_metrics": {
          "followers_count": 11906,
          "following_count": 597,
          "tweet_count": 33076,
          "listed_count": 283
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/712729311581708288/6yXQg6tV_normal.jpg",
        "description": "ライター music + film journalist",
        "location": "new york",
        "verified": false,
        "name": "akemi nakamura"
      },
      {
        "username": "TeamKanyeDaily",
        "protected": false,
        "pinned_tweet_id": "1418403574351028224",
        "id": "189470083",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/3hHdeRpyM1",
                "expanded_url": "http://teamkanyedaily.com",
                "display_url": "teamkanyedaily.com"
              }
            ]
          }
        },
        "created_at": "2010-09-11T10:25:35.000Z",
        "url": "https://t.co/3hHdeRpyM1",
        "public_metrics": {
          "followers_count": 263812,
          "following_count": 497,
          "tweet_count": 29911,
          "listed_count": 437
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1270324039643471873/Kce83JT4_normal.jpg",
        "description": "Updates on all things Kanye West. teamkanyedaily@gmail.com",
        "verified": false,
        "name": "TeamKanyeDaily"
      },
      {
        "username": "kanyewest",
        "protected": false,
        "pinned_tweet_id": "1283507551586459648",
        "id": "169686021",
        "entities": {
          "url": {
            "urls": [
              {
                "start": 0,
                "end": 23,
                "url": "https://t.co/R6cANtszQ0",
                "expanded_url": "http://KANYEWEST.COM",
                "display_url": "KANYEWEST.COM"
              }
            ]
          }
        },
        "created_at": "2010-07-22T23:00:05.000Z",
        "url": "https://t.co/R6cANtszQ0",
        "public_metrics": {
          "followers_count": 30537823,
          "following_count": 210,
          "tweet_count": 1912,
          "listed_count": 43463
        },
        "profile_image_url": "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_normal.jpg",
        "description": "",
        "verified": true,
        "name": "ye"
      }
    ],
    "media": [
      {
        "preview_image_url": "https://pbs.twimg.com/ext_tw_video_thumb/1171884565499142144/pu/img/MTgDRt7nkBk9cJiZ.jpg",
        "media_key": "7_1171884565499142144",
        "public_metrics": {
          "view_count": 620384
        },
        "height": 720,
        "duration_ms": 133042,
        "width": 1280,
        "type": "video"
      },
      {
        "media_key": "3_1425970749769232389",
        "height": 274,
        "url": "https://pbs.twimg.com/media/E8oQ14AXsAU70-m.jpg",
        "width": 184,
        "type": "photo"
      },
      {
        "media_key": "3_1425614089326370821",
        "height": 960,
        "url": "https://pbs.twimg.com/media/E8jMdgUXIAUwbF4.jpg",
        "width": 1284,
        "type": "photo"
      },
      {
        "preview_image_url": "https://pbs.twimg.com/media/E8Rgg1FXMAgi29i.jpg",
        "media_key": "13_1424369094594285576",
        "public_metrics": {
          "view_count": 103953
        },
        "height": 360,
        "duration_ms": 23760,
        "width": 640,
        "type": "video"
      }
    ],
    "tweets": [
      {
        "attachments": {
          "media_keys": [
            "7_1171884565499142144"
          ]
        },
        "author_id": "33426811",
        "id": "1261705947069767680",
        "entities": {
          "annotations": [
            {
              "start": 12,
              "end": 17,
              "probability": 0.9461,
              "type": "Person",
              "normalized_text": "Nipsey"
            },
            {
              "start": 30,
              "end": 36,
              "probability": 0.4059,
              "type": "Organization",
              "normalized_text": "Bitcoin"
            }
          ],
          "urls": [
            {
              "start": 68,
              "end": 91,
              "url": "https://t.co/YJmgMsmUGs",
              "expanded_url": "https://twitter.com/Coinsnobiety/status/1171884744474333193/video/1",
              "display_url": "pic.twitter.com/YJmgMsmUGs"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 378,
          "reply_count": 14,
          "like_count": 1040,
          "quote_count": 31
        },
        "text": "Leave it to Nipsey to explain Bitcoin in a way you can understand\n\n https://t.co/YJmgMsmUGs",
        "conversation_id": "1261705947069767680",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2020-05-16T17:11:53.000Z"
      },
      {
        "author_id": "1274491960019939328",
        "id": "1426719532471697409",
        "public_metrics": {
          "retweet_count": 44,
          "reply_count": 14,
          "like_count": 501,
          "quote_count": 2
        },
        "text": "Timechain, not blockchain.",
        "conversation_id": "1426719532471697409",
        "context_annotations": [
          {
            "domain": {
              "id": "30",
              "name": "Entities [Entity Service]",
              "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
            },
            "entity": {
              "id": "857879456773357569",
              "name": "Technology",
              "description": "Technology"
            }
          },
          {
            "domain": {
              "id": "30",
              "name": "Entities [Entity Service]",
              "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
            },
            "entity": {
              "id": "1001503516555337728",
              "name": "Blockchain",
              "description": "Blockchain"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for Android",
        "lang": "ht",
        "created_at": "2021-08-15T01:36:58.000Z"
      },
      {
        "author_id": "7517052",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "seyitaylor",
              "id": "18094952"
            },
            {
              "start": 18,
              "end": 28,
              "username": "davewiner",
              "id": "3839"
            }
          ]
        },
        "id": "1426702801317421058",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 2,
          "like_count": 40,
          "quote_count": 0
        },
        "text": "@jack @seyitaylor @davewiner I get hugged plenty...dont switch the subject",
        "in_reply_to_user_id": "12",
        "conversation_id": "1426627771644715008",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426702616315273218"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-15T00:30:29.000Z"
      },
      {
        "author_id": "7517052",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "seyitaylor",
              "id": "18094952"
            },
            {
              "start": 18,
              "end": 28,
              "username": "davewiner",
              "id": "3839"
            }
          ],
          "annotations": [
            {
              "start": 47,
              "end": 53,
              "probability": 0.5121,
              "type": "Product",
              "normalized_text": "twitter"
            }
          ]
        },
        "id": "1426697276429279235",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 2,
          "like_count": 31,
          "quote_count": 0
        },
        "text": "@jack @seyitaylor @davewiner That could be the twitter Tag line - 'True but we are fixing' ....woukd be good for $10 bil to the markt cap",
        "in_reply_to_user_id": "12",
        "conversation_id": "1426627771644715008",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426694400558698504"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-15T00:08:32.000Z"
      },
      {
        "author_id": "18094952",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 10,
              "username": "davewiner",
              "id": "3839"
            },
            {
              "start": 11,
              "end": 25,
              "username": "howardlindzon",
              "id": "7517052"
            }
          ]
        },
        "id": "1426694207360671747",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 1,
          "like_count": 13,
          "quote_count": 0
        },
        "text": "@davewiner @howardlindzon they effectively killed the api.",
        "in_reply_to_user_id": "3839",
        "conversation_id": "1426627771644715008",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426688614570811394"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-14T23:56:20.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "3_1426524316527697924"
          ]
        },
        "author_id": "2714960622",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 16,
              "username": "SenWarren",
              "id": "970207298"
            }
          ],
          "annotations": [
            {
              "start": 21,
              "end": 24,
              "probability": 0.9136,
              "type": "Person",
              "normalized_text": "Jack"
            }
          ],
          "urls": [
            {
              "start": 145,
              "end": 168,
              "url": "https://t.co/u4HdNrTsv6",
              "expanded_url": "https://www.statista.com/chart/18345/crypto-currency-adoption/",
              "display_url": "statista.com/chart/18345/cr…"
            },
            {
              "start": 207,
              "end": 230,
              "url": "https://t.co/5kKdE6ylcc",
              "expanded_url": "https://datareportal.com/reports/digital-2021-nigeria#:~:text=The%20number%20of%20internet%20users,at%2050.0%25%20in%20January%202021",
              "display_url": "datareportal.com/reports/digita…"
            },
            {
              "start": 287,
              "end": 310,
              "url": "https://t.co/RmMfMRunrq",
              "expanded_url": "https://twitter.com/ireaderinokun/status/1426526596631089155/photo/1",
              "display_url": "pic.twitter.com/RmMfMRunrq"
            }
          ]
        },
        "id": "1426526596631089155",
        "public_metrics": {
          "retweet_count": 322,
          "reply_count": 88,
          "like_count": 1384,
          "quote_count": 45
        },
        "text": "@jack @SenWarren Hey Jack! Just to clarify, the stat the article is quoting is from a study of max 4k Nigerians who say they've used/own crypto (https://t.co/u4HdNrTsv6). \n\nInternet pen. is only around 50% (https://t.co/5kKdE6ylcc) so it's unlikely that 32% of all Nigerians own Bitcoin https://t.co/RmMfMRunrq",
        "in_reply_to_user_id": "12",
        "conversation_id": "1426521682538344451",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "10045102759",
              "name": "Elizabeth Warren",
              "description": "US Senator Elizabeth Warren (MA)"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "10045102759",
              "name": "Elizabeth Warren",
              "description": "US Senator Elizabeth Warren (MA)"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426521682538344451"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-14T12:50:18.000Z"
      },
      {
        "author_id": "47966112",
        "id": "1426525366420705284",
        "entities": {
          "annotations": [
            {
              "start": 95,
              "end": 98,
              "probability": 0.9839,
              "type": "Person",
              "normalized_text": "Cruz"
            }
          ],
          "urls": [
            {
              "start": 153,
              "end": 176,
              "url": "https://t.co/jcGSiMbmhZ",
              "expanded_url": "https://bitcoinmagazine.com/culture/cubas-bitcoin-revolution",
              "display_url": "bitcoinmagazine.com/culture/cubas-…",
              "images": [
                {
                  "url": "https://pbs.twimg.com/news_img/1425583885564395520/1GWcClxz?format=jpg&name=orig",
                  "width": 1200,
                  "height": 675
                },
                {
                  "url": "https://pbs.twimg.com/news_img/1425583885564395520/1GWcClxz?format=jpg&name=150x150",
                  "width": 150,
                  "height": 150
                }
              ],
              "status": 200,
              "title": "Inside Cuba’s Bitcoin Revolution",
              "description": "As political demonstrations show the world that Cubans are tired of dictatorship, Bitcoin is providing an option to peacefully protest and opt out of a broken system.",
              "unwound_url": "https://bitcoinmagazine.com/culture/cubas-bitcoin-revolution"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 335,
          "reply_count": 89,
          "like_count": 1794,
          "quote_count": 25
        },
        "text": "“The Cuban people are tired,” he said. “They want a better life.”\n\n“The system isn’t working,” Cruz said, “so people are turning to Bitcoin to escape.”\n\nhttps://t.co/jcGSiMbmhZ",
        "conversation_id": "1426525366420705284",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-14T12:45:25.000Z"
      },
      {
        "author_id": "213236426",
        "id": "1426331758031773697",
        "public_metrics": {
          "retweet_count": 215,
          "reply_count": 160,
          "like_count": 1646,
          "quote_count": 14
        },
        "text": "it's a pretty phenomenal story. mind boggling really, that an anonymous protocol developer will at some point become the richest person. you could not have made this up pre-bitcoin, people would have found it incredulous. https://t.co/malkxxZAyQ",
        "conversation_id": "1426331758031773697",
        "context_annotations": [
          {
            "domain": {
              "id": "65",
              "name": "Interests and Hobbies Vertical",
              "description": "Top level interests and hobbies groupings, like Food or Travel"
            },
            "entity": {
              "id": "848920371311001600",
              "name": "Technology",
              "description": "Technology and computing"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "848921413196984320",
              "name": "Computer programming",
              "description": "Computer programming"
            }
          },
          {
            "domain": {
              "id": "65",
              "name": "Interests and Hobbies Vertical",
              "description": "Top level interests and hobbies groupings, like Food or Travel"
            },
            "entity": {
              "id": "848920371311001600",
              "name": "Technology",
              "description": "Technology and computing"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "848921413196984320",
              "name": "Computer programming",
              "description": "Computer programming"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "849075430715936768",
              "name": "Open source",
              "description": "Open source"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1426147753214681091"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 222,
              "end": 245,
              "url": "https://t.co/malkxxZAyQ",
              "expanded_url": "https://twitter.com/rohunvora/status/1426147753214681091",
              "display_url": "twitter.com/rohunvora/stat…"
            }
          ]
        },
        "created_at": "2021-08-13T23:56:05.000Z"
      },
      {
        "author_id": "339061487",
        "id": "1426322663618879499",
        "entities": {
          "annotations": [
            {
              "start": 46,
              "end": 52,
              "probability": 0.6071,
              "type": "Organization",
              "normalized_text": "Twitter"
            },
            {
              "start": 81,
              "end": 88,
              "probability": 0.7007,
              "type": "Organization",
              "normalized_text": "Blue Sky"
            }
          ],
          "urls": [
            {
              "start": 202,
              "end": 225,
              "url": "https://t.co/z2OONHWbdA",
              "expanded_url": "https://youtu.be/XO3yMUKOEhE",
              "display_url": "youtu.be/XO3yMUKOEhE"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 159,
          "reply_count": 64,
          "like_count": 1756,
          "quote_count": 23
        },
        "text": "We talked about the potential opportunity for Twitter to disrupt themselves with Blue Sky and Bitcoin today.\n\nFascinating options to consider, but appears to be only major tech company considering it.\n\nhttps://t.co/z2OONHWbdA",
        "conversation_id": "1426322663618879499",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-13T23:19:57.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "3_1426267001123753985"
          ]
        },
        "author_id": "2916305152",
        "id": "1426274233169195008",
        "entities": {
          "annotations": [
            {
              "start": 4,
              "end": 10,
              "probability": 0.5058,
              "type": "Organization",
              "normalized_text": "Taliban"
            },
            {
              "start": 21,
              "end": 31,
              "probability": 0.8823,
              "type": "Place",
              "normalized_text": "Afghanistan"
            }
          ],
          "urls": [
            {
              "start": 281,
              "end": 304,
              "url": "https://t.co/TPmXpl7Kdw",
              "expanded_url": "https://twitter.com/Snowden/status/1426274233169195008/photo/1",
              "display_url": "pic.twitter.com/TPmXpl7Kdw"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 5513,
          "reply_count": 766,
          "like_count": 22434,
          "quote_count": 379
        },
        "text": "The Taliban retaking Afghanistan in a matter of weeks as September 11th nears is a tragic symbol of the last decades.\n\nOur governments abandoned law to wage fruitless wars, sacrificed our most sacred rights—and trampled the memory of those they claimed to avenge. Was it worth it? https://t.co/TPmXpl7Kdw",
        "conversation_id": "1426274233169195008",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1070724848081559554",
              "name": "Edward Snowden",
              "description": "American whistleblower and former National Security Agency contractor"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1423654286492266500",
              "name": "Edward Snowden"
            }
          },
          {
            "domain": {
              "id": "56",
              "name": "Actor",
              "description": "An actor or actress in the world, like Kate Winslet or Leonardo DiCaprio"
            },
            "entity": {
              "id": "1070724848081559554",
              "name": "Edward Snowden",
              "description": "American whistleblower and former National Security Agency contractor"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T20:07:30.000Z"
      },
      {
        "author_id": "14149992",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 8,
              "username": "jokoono",
              "id": "1036697739600580608"
            }
          ]
        },
        "id": "1426317234058661892",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 5,
          "like_count": 61,
          "quote_count": 0
        },
        "text": "@jokoono Never went laser eyes...",
        "in_reply_to_user_id": "1036697739600580608",
        "conversation_id": "1426148703019151360",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426148703019151360"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T22:58:22.000Z"
      },
      {
        "author_id": "3265756934",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            }
          ],
          "annotations": [
            {
              "start": 55,
              "end": 61,
              "probability": 0.4123,
              "type": "Person",
              "normalized_text": "Satoshi"
            }
          ],
          "cashtags": [
            {
              "start": 93,
              "end": 97,
              "tag": "BTC"
            }
          ]
        },
        "id": "1426289954523521026",
        "public_metrics": {
          "retweet_count": 2,
          "reply_count": 14,
          "like_count": 32,
          "quote_count": 1
        },
        "text": "@jack Is there ever going to be any proof that whoever Satoshi is even has access to the 1m+ $BTC? Or is the “trust but verify” ethos of maxis not relevant if it helps further the immaculate conception folklore?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1426283430652829699",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426283430652829699"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-13T21:09:59.000Z"
      },
      {
        "author_id": "44196397",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            }
          ]
        },
        "id": "1426287602089529344",
        "public_metrics": {
          "retweet_count": 537,
          "reply_count": 908,
          "like_count": 9967,
          "quote_count": 72
        },
        "text": "@jack Twitter DM laughing emoji is nightmare",
        "in_reply_to_user_id": "12",
        "conversation_id": "1426283430652829699",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "808713037230157824",
              "name": "Elon Musk",
              "description": "Elon Musk"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "857878777191211008",
              "name": "Leadership",
              "description": "Leadership"
            }
          },
          {
            "domain": {
              "id": "30",
              "name": "Entities [Entity Service]",
              "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
            },
            "entity": {
              "id": "857879456773357569",
              "name": "Technology",
              "description": "Technology"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426283430652829699"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-13T21:00:38.000Z"
      },
      {
        "author_id": "971021095485636608",
        "id": "1426147753214681091",
        "entities": {
          "annotations": [
            {
              "start": 210,
              "end": 216,
              "probability": 0.692,
              "type": "Person",
              "normalized_text": "Satoshi"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 2305,
          "reply_count": 316,
          "like_count": 11451,
          "quote_count": 225
        },
        "text": "The richest person in the world will one day be the nameless, egoless founder of an open source project.\n\nImagine the kind of example this will set on future generations. \n\nI'll retweet this little thread when Satoshi reaches this milestone (1/6) 👇",
        "conversation_id": "1426147753214681091",
        "context_annotations": [
          {
            "domain": {
              "id": "65",
              "name": "Interests and Hobbies Vertical",
              "description": "Top level interests and hobbies groupings, like Food or Travel"
            },
            "entity": {
              "id": "848920371311001600",
              "name": "Technology",
              "description": "Technology and computing"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "848921413196984320",
              "name": "Computer programming",
              "description": "Computer programming"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "849075430715936768",
              "name": "Open source",
              "description": "Open source"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T11:44:55.000Z"
      },
      {
        "author_id": "391523049",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            }
          ]
        },
        "id": "1426223975944712202",
        "public_metrics": {
          "retweet_count": 2,
          "reply_count": 10,
          "like_count": 11,
          "quote_count": 0
        },
        "text": "@jack is it easy for creators to upload their own music to tidal and receive money (sats) for plays?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1426223669718700041",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974597310615553",
              "name": "Entertainment"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974597222535168",
              "name": "Online Services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10043701887",
              "name": "Tidal"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1426223669718700041"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T16:47:48.000Z"
      },
      {
        "author_id": "17929027",
        "entities": {
          "mentions": [
            {
              "start": 30,
              "end": 36,
              "username": "TIDAL",
              "id": "2679055230"
            }
          ],
          "urls": [
            {
              "start": 75,
              "end": 98,
              "url": "https://t.co/wLD2iUosvB",
              "expanded_url": "https://tidal.com/playlist/83507bb9-ed64-4f66-a908-73e2d283b06d",
              "display_url": "tidal.com/playlist/83507…"
            }
          ]
        },
        "id": "1426223313114697729",
        "public_metrics": {
          "retweet_count": 95,
          "reply_count": 43,
          "like_count": 412,
          "quote_count": 20
        },
        "text": "I made a no limit playlist on @TIDAL . Some deep cuts some mainstream .  \n\nhttps://t.co/wLD2iUosvB",
        "conversation_id": "1426223313114697729",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "808378799821713408",
              "name": "Wale",
              "description": "Wale"
            }
          },
          {
            "domain": {
              "id": "54",
              "name": "Musician",
              "description": "A musician in the world, like Adele or Bob Dylan"
            },
            "entity": {
              "id": "808378799821713408",
              "name": "Wale",
              "description": "Wale"
            }
          },
          {
            "domain": {
              "id": "55",
              "name": "Music Genre",
              "description": "A category for a musical style, like Pop, Rock, or Rap"
            },
            "entity": {
              "id": "810937888334487552",
              "name": "Rap",
              "description": "Hip-Hop/Rap"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974597310615553",
              "name": "Entertainment"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974597222535168",
              "name": "Online Services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10043701887",
              "name": "Tidal"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-13T16:45:10.000Z"
      },
      {
        "author_id": "11768582",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 10,
              "username": "thetrocro",
              "id": "3010775305"
            }
          ]
        },
        "id": "1425948724652429315",
        "public_metrics": {
          "retweet_count": 6,
          "reply_count": 3,
          "like_count": 64,
          "quote_count": 0
        },
        "text": "@thetrocro That's fair, we are all mysteries to each other\n\nFurther, people are mysteries to themselves as well.",
        "in_reply_to_user_id": "3010775305",
        "conversation_id": "1425922173797953539",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425947814517886977"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T22:34:03.000Z"
      },
      {
        "author_id": "793023",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 9,
              "username": "garrytan",
              "id": "11768582"
            }
          ],
          "annotations": [
            {
              "start": 32,
              "end": 35,
              "probability": 0.5462,
              "type": "Organization",
              "normalized_text": "Elon"
            },
            {
              "start": 52,
              "end": 68,
              "probability": 0.8854,
              "type": "Product",
              "normalized_text": "Microsoft Windows"
            },
            {
              "start": 77,
              "end": 82,
              "probability": 0.6878,
              "type": "Product",
              "normalized_text": "PayPal"
            }
          ]
        },
        "id": "1425930121492402177",
        "public_metrics": {
          "retweet_count": 4,
          "reply_count": 16,
          "like_count": 173,
          "quote_count": 2
        },
        "text": "@garrytan It reminds me of when Elon was super into Microsoft Windows during PayPal.",
        "in_reply_to_user_id": "11768582",
        "conversation_id": "1425922173797953539",
        "context_annotations": [
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596752842752",
              "name": "Services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10027232467",
              "name": "Microsoft"
            }
          },
          {
            "domain": {
              "id": "48",
              "name": "Product",
              "description": "Products created by Brands.  Examples: Ford Explorer, Apple iPhone."
            },
            "entity": {
              "id": "10027604610",
              "name": "Microsoft Windows"
            }
          },
          {
            "domain": {
              "id": "65",
              "name": "Interests and Hobbies Vertical",
              "description": "Top level interests and hobbies groupings, like Food or Travel"
            },
            "entity": {
              "id": "848920371311001600",
              "name": "Technology",
              "description": "Technology and computing"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596752842752",
              "name": "Services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10027232467",
              "name": "Microsoft"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10041046258",
              "name": "PayPal"
            }
          },
          {
            "domain": {
              "id": "65",
              "name": "Interests and Hobbies Vertical",
              "description": "Top level interests and hobbies groupings, like Food or Travel"
            },
            "entity": {
              "id": "848920371311001600",
              "name": "Technology",
              "description": "Technology and computing"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425922173797953539"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T21:20:08.000Z"
      },
      {
        "author_id": "792930527388971008",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 9,
              "username": "garrytan",
              "id": "11768582"
            },
            {
              "start": 197,
              "end": 202,
              "username": "jack",
              "id": "12"
            }
          ]
        },
        "id": "1425937464829513733",
        "public_metrics": {
          "retweet_count": 4,
          "reply_count": 5,
          "like_count": 369,
          "quote_count": 1
        },
        "text": "@garrytan Sound money is that critical. Especially for the globally underprivileged. Normally, I would think money was the reason, but he’s donated 1/3 of his square stock, which is pretty insane. @jack is still relatively young so he didn’t have to donate so aggressively in his prime.",
        "in_reply_to_user_id": "11768582",
        "conversation_id": "1425922173797953539",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425922173797953539"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T21:49:18.000Z"
      },
      {
        "author_id": "3265756934",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 13,
              "username": "IOHK_Charles",
              "id": "1376161898"
            },
            {
              "start": 14,
              "end": 25,
              "username": "APompliano",
              "id": "339061487"
            }
          ],
          "annotations": [
            {
              "start": 204,
              "end": 207,
              "probability": 0.9599,
              "type": "Person",
              "normalized_text": "Jack"
            },
            {
              "start": 211,
              "end": 217,
              "probability": 0.7236,
              "type": "Product",
              "normalized_text": "Twitter"
            }
          ]
        },
        "id": "1425995949910855680",
        "public_metrics": {
          "retweet_count": 2,
          "reply_count": 11,
          "like_count": 132,
          "quote_count": 1
        },
        "text": "@IOHK_Charles @APompliano I think the right answer is different but comparable assets. Both are arguably the scarcest digital assets/1st of their kind. \n\nI just liked your cheeky response because I think Jack's Twitter trolling today deserves some heat back :p",
        "in_reply_to_user_id": "1376161898",
        "conversation_id": "1425959950740860930",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425994971052609543"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T01:41:42.000Z"
      },
      {
        "author_id": "1355155067289169925",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 22,
              "username": "BrainHarrington",
              "id": "67109577"
            },
            {
              "start": 23,
              "end": 34,
              "username": "FranBoll11",
              "id": "1390127497400967168"
            },
            {
              "start": 35,
              "end": 44,
              "username": "cory_eth",
              "id": "436399168"
            },
            {
              "start": 45,
              "end": 55,
              "username": "santisiri",
              "id": "9321342"
            }
          ]
        },
        "id": "1425974217028276229",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 27,
          "quote_count": 0
        },
        "text": "@jack @BrainHarrington @FranBoll11 @cory_eth @santisiri Thanks for explaining yourself even though u dont have too👍",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425902576327815171",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425966622771191811"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-13T00:15:21.000Z"
      },
      {
        "author_id": "906355190726459393",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "dogeofcoin",
              "id": "1379848045274218506"
            },
            {
              "start": 18,
              "end": 27,
              "username": "cory_eth",
              "id": "436399168"
            },
            {
              "start": 28,
              "end": 38,
              "username": "santisiri",
              "id": "9321342"
            }
          ],
          "annotations": [
            {
              "start": 62,
              "end": 79,
              "probability": 0.1878,
              "type": "Product",
              "normalized_text": "Lightning for NFTs"
            },
            {
              "start": 86,
              "end": 93,
              "probability": 0.3907,
              "type": "Organization",
              "normalized_text": "Ethereum"
            }
          ]
        },
        "id": "1425973613765697537",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 2,
          "like_count": 5,
          "quote_count": 0
        },
        "text": "@jack @dogeofcoin @cory_eth @santisiri Why would you focus on Lightning for NFTs when Ethereum is the platform that is mature and everyone is using for NFTs?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425902576327815171",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "67",
              "name": "Interests and Hobbies",
              "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
            },
            "entity": {
              "id": "847894353708068864",
              "name": "Investing",
              "description": "Investing"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425966846709223424"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T00:12:57.000Z"
      },
      {
        "author_id": "1397376165203959813",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 22,
              "username": "satoshiattorney",
              "id": "1367487877580541955"
            },
            {
              "start": 23,
              "end": 34,
              "username": "seyitaylor",
              "id": "18094952"
            },
            {
              "start": 49,
              "end": 54,
              "username": "jack",
              "id": "12"
            }
          ],
          "annotations": [
            {
              "start": 128,
              "end": 131,
              "probability": 0.4928,
              "type": "Person",
              "normalized_text": "NFTs"
            }
          ]
        },
        "id": "1425979562198929408",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 9,
          "quote_count": 0
        },
        "text": "@jack @satoshiattorney @seyitaylor Much respect, @jack but I don't think you're right on this subject. Bitcoin has a place, but NFTs isn't it.",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425890866623823876",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "67",
              "name": "Interests and Hobbies",
              "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
            },
            "entity": {
              "id": "847894353708068864",
              "name": "Investing",
              "description": "Investing"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425967906806976514"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T00:36:35.000Z"
      },
      {
        "author_id": "66682794",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 20,
              "username": "Chelsea_FC369",
              "id": "2533004783"
            },
            {
              "start": 21,
              "end": 35,
              "username": "MiguelCervera",
              "id": "28474651"
            },
            {
              "start": 36,
              "end": 50,
              "username": "iamDCinvestor",
              "id": "956670268596015105"
            },
            {
              "start": 51,
              "end": 58,
              "username": "mdudas",
              "id": "7184612"
            }
          ],
          "hashtags": [
            {
              "start": 272,
              "end": 290,
              "tag": "BinanceSmartChain"
            },
            {
              "start": 323,
              "end": 332,
              "tag": "Ethereum"
            }
          ]
        },
        "id": "1425981896853495817",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 2,
          "like_count": 3,
          "quote_count": 1
        },
        "text": "@jack @Chelsea_FC369 @MiguelCervera @iamDCinvestor @mdudas Bluesky has been announced 1.5 years ago. No product, no roadmap, nothing. Doesn't seem like \"working\". Just diverts attention.\n\nAlso if you're such a fan of decentralization, why did you add icons (=support) for #BinanceSmartChain, which is a centralized fork of #Ethereum?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425909681667596296",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425975707105116170"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T00:45:52.000Z"
      },
      {
        "author_id": "2533004783",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 20,
              "username": "MiguelCervera",
              "id": "28474651"
            },
            {
              "start": 21,
              "end": 35,
              "username": "iamDCinvestor",
              "id": "956670268596015105"
            },
            {
              "start": 36,
              "end": 43,
              "username": "mdudas",
              "id": "7184612"
            }
          ]
        },
        "id": "1425971026626850817",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 14,
          "quote_count": 0
        },
        "text": "@jack @MiguelCervera @iamDCinvestor @mdudas You sound like someone who is worried their centralised companies are in trouble 👀",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425909681667596296",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425969744256065543"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-13T00:02:40.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "3_1425972208833384450"
          ]
        },
        "author_id": "1396197233448599554",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 21,
              "username": "AllisonReichel",
              "id": "1049084568828043264"
            },
            {
              "start": 22,
              "end": 33,
              "username": "APompliano",
              "id": "339061487"
            }
          ],
          "annotations": [
            {
              "start": 34,
              "end": 37,
              "probability": 0.8837,
              "type": "Person",
              "normalized_text": "Jack"
            },
            {
              "start": 78,
              "end": 79,
              "probability": 0.4762,
              "type": "Product",
              "normalized_text": "PC"
            }
          ],
          "urls": [
            {
              "start": 81,
              "end": 104,
              "url": "https://t.co/zzi6yJcpzG",
              "expanded_url": "https://twitter.com/Viaware1/status/1425972262616895493/photo/1",
              "display_url": "pic.twitter.com/zzi6yJcpzG"
            }
          ]
        },
        "id": "1425972262616895493",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 30,
          "quote_count": 0
        },
        "text": "@jack @AllisonReichel @APompliano Jack, pls fix this font. It's unreadable on PC https://t.co/zzi6yJcpzG",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425959950740860930",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425970753212665862"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-13T00:07:35.000Z"
      },
      {
        "author_id": "1049084568828043264",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 11,
              "username": "APompliano",
              "id": "339061487"
            }
          ]
        },
        "id": "1425967193729159168",
        "public_metrics": {
          "retweet_count": 10,
          "reply_count": 32,
          "like_count": 589,
          "quote_count": 0
        },
        "text": "@APompliano Ice is not hot.",
        "in_reply_to_user_id": "339061487",
        "conversation_id": "1425959950740860930",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425959950740860930"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T23:47:26.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "16_1425967305922551809"
          ]
        },
        "author_id": "28474651",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 20,
              "username": "iamDCinvestor",
              "id": "956670268596015105"
            },
            {
              "start": 21,
              "end": 28,
              "username": "mdudas",
              "id": "7184612"
            }
          ],
          "urls": [
            {
              "start": 308,
              "end": 331,
              "url": "https://t.co/pm0HcrsWGO",
              "expanded_url": "https://twitter.com/MiguelCervera/status/1425967313837125632/photo/1",
              "display_url": "pic.twitter.com/pm0HcrsWGO"
            }
          ]
        },
        "id": "1425967313837125632",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 5,
          "like_count": 20,
          "quote_count": 0
        },
        "text": "@jack @iamDCinvestor @mdudas Maybe \"fixed\" is the wrong word, but the point is that for being focused on Bitcoin you've thrown shade to Ethereum more than once, and more than just \"by accident\".\n\nAs an Ethereum believer, I also think that Bitcoin plays an important role in decentralization, growth mindset. https://t.co/pm0HcrsWGO",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425909681667596296",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425965990538584065"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T23:47:55.000Z"
      },
      {
        "author_id": "1367487877580541955",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "seyitaylor",
              "id": "18094952"
            }
          ]
        },
        "id": "1425905615688273924",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 21,
          "quote_count": 0
        },
        "text": "@jack @seyitaylor I miss the days where we were fighting congress instead of other projects",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425890866623823876",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425893910728036359"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T19:42:45.000Z"
      },
      {
        "author_id": "9571702",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "seyitaylor",
              "id": "18094952"
            }
          ],
          "annotations": [
            {
              "start": 34,
              "end": 40,
              "probability": 0.5799,
              "type": "Organization",
              "normalized_text": "Twitter"
            },
            {
              "start": 88,
              "end": 94,
              "probability": 0.5134,
              "type": "Organization",
              "normalized_text": "Twitter"
            },
            {
              "start": 148,
              "end": 151,
              "probability": 0.4765,
              "type": "Organization",
              "normalized_text": "NFTs"
            }
          ]
        },
        "id": "1425905266558603268",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 3,
          "like_count": 26,
          "quote_count": 0
        },
        "text": "@jack @seyitaylor I’m unclear why Twitter is the place people want to move Bitcoin, but Twitter could own the NFT space with first-class support if NFTs bought from endorsed projects on in its NFT commerce app.",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425890866623823876",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "67",
              "name": "Interests and Hobbies",
              "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
            },
            "entity": {
              "id": "847894353708068864",
              "name": "Investing",
              "description": "Investing"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425893910728036359"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T19:41:22.000Z"
      },
      {
        "author_id": "1379848045274218506",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 15,
              "username": "cory_eth",
              "id": "436399168"
            },
            {
              "start": 16,
              "end": 26,
              "username": "santisiri",
              "id": "9321342"
            }
          ],
          "annotations": [
            {
              "start": 58,
              "end": 65,
              "probability": 0.4148,
              "type": "Organization",
              "normalized_text": "Ethereum"
            }
          ]
        },
        "id": "1425938877089525763",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 3,
          "quote_count": 0
        },
        "text": "@jack @cory_eth @santisiri what would you convince you of Ethereum having any kind of value?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425902576327815171",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425926717663809539"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T21:54:55.000Z"
      },
      {
        "author_id": "1390127497400967168",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 15,
              "username": "cory_eth",
              "id": "436399168"
            },
            {
              "start": 16,
              "end": 26,
              "username": "santisiri",
              "id": "9321342"
            }
          ],
          "annotations": [
            {
              "start": 60,
              "end": 63,
              "probability": 0.7606,
              "type": "Person",
              "normalized_text": "Jack"
            }
          ]
        },
        "id": "1425928701586382853",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 4,
          "like_count": 30,
          "quote_count": 0
        },
        "text": "@jack @cory_eth @santisiri I’m on board with this sentiment Jack. Why the ETH hate then if there’s room for more than one piece to the puzzle?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425902576327815171",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425926717663809539"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T21:14:29.000Z"
      },
      {
        "author_id": "28474651",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 20,
              "username": "iamDCinvestor",
              "id": "956670268596015105"
            },
            {
              "start": 21,
              "end": 28,
              "username": "mdudas",
              "id": "7184612"
            }
          ],
          "annotations": [
            {
              "start": 65,
              "end": 72,
              "probability": 0.3778,
              "type": "Product",
              "normalized_text": "Ethereum"
            }
          ]
        },
        "id": "1425964611208028164",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 10,
          "like_count": 32,
          "quote_count": 1
        },
        "text": "@jack @iamDCinvestor @mdudas Why are you so fixed in shitting on Ethereum, then?\n\nBitcoin is cool, focus on that, no need to throw shade to other projects.",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425909681667596296",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425963920272068613"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T23:37:11.000Z"
      },
      {
        "author_id": "956670268596015105",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 13,
              "username": "mdudas",
              "id": "7184612"
            }
          ]
        },
        "id": "1425918443698655234",
        "public_metrics": {
          "retweet_count": 7,
          "reply_count": 45,
          "like_count": 436,
          "quote_count": 6
        },
        "text": "@jack @mdudas there will be multiple currencies and assets relevant in Web3, and there already are\n\nfocusing on single native currency is inherently limiting imo",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425909681667596296",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425916582329528325"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T20:33:43.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "3_1425901930660851714"
          ]
        },
        "author_id": "436399168",
        "id": "1425902576327815171",
        "entities": {
          "annotations": [
            {
              "start": 0,
              "end": 7,
              "probability": 0.6137,
              "type": "Organization",
              "normalized_text": "Big Tech"
            }
          ],
          "hashtags": [
            {
              "start": 22,
              "end": 31,
              "tag": "Ethereum"
            }
          ],
          "urls": [
            {
              "start": 62,
              "end": 85,
              "url": "https://t.co/SnvD4srtoK",
              "expanded_url": "https://twitter.com/cory_eth/status/1425902576327815171/photo/1",
              "display_url": "pic.twitter.com/SnvD4srtoK"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 116,
          "reply_count": 93,
          "like_count": 924,
          "quote_count": 31
        },
        "text": "Big Tech is scared of #Ethereum.\n\nEthereum disrupts Big Tech. https://t.co/SnvD4srtoK",
        "conversation_id": "1425902576327815171",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T19:30:40.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "3_1425918996956680195"
          ]
        },
        "author_id": "19826509",
        "id": "1425919324099776514",
        "entities": {
          "annotations": [
            {
              "start": 0,
              "end": 9,
              "probability": 0.9954,
              "type": "Person",
              "normalized_text": "Carl Sagan"
            },
            {
              "start": 35,
              "end": 41,
              "probability": 0.8936,
              "type": "Place",
              "normalized_text": "America"
            }
          ],
          "urls": [
            {
              "start": 155,
              "end": 178,
              "url": "https://t.co/EoN2UIYDh5",
              "expanded_url": "https://www.openculture.com/2017/01/carl-sagan-predicts-the-decline-of-america.html",
              "display_url": "openculture.com/2017/01/carl-s…"
            },
            {
              "start": 179,
              "end": 202,
              "url": "https://t.co/cmBFNZ2CFw",
              "expanded_url": "https://twitter.com/openculture/status/1425919324099776514/photo/1",
              "display_url": "pic.twitter.com/cmBFNZ2CFw"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 236,
          "reply_count": 78,
          "like_count": 858,
          "quote_count": 23
        },
        "text": "Carl Sagan Predicts the Decline of America\n\nUnable to Know \"What’s True,\" We Will Slide, \"Without Noticing, Back into Superstition &amp; Darkness\" (1995)\n https://t.co/EoN2UIYDh5 https://t.co/cmBFNZ2CFw",
        "conversation_id": "1425919324099776514",
        "context_annotations": [
          {
            "domain": {
              "id": "65",
              "name": "Interests and Hobbies Vertical",
              "description": "Top level interests and hobbies groupings, like Food or Travel"
            },
            "entity": {
              "id": "854692455005921281",
              "name": "Science",
              "description": "Science"
            }
          },
          {
            "domain": {
              "id": "30",
              "name": "Entities [Entity Service]",
              "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
            },
            "entity": {
              "id": "847899195566510080",
              "name": "Physics",
              "description": "Physics"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "TweetDeck",
        "lang": "en",
        "created_at": "2021-08-12T20:37:13.000Z"
      },
      {
        "author_id": "956670268596015105",
        "entities": {
          "mentions": [
            {
              "start": 4,
              "end": 9,
              "username": "jack",
              "id": "12"
            }
          ],
          "annotations": [
            {
              "start": 44,
              "end": 51,
              "probability": 0.5402,
              "type": "Organization",
              "normalized_text": "Ethereum"
            }
          ]
        },
        "id": "1425909681667596296",
        "public_metrics": {
          "retweet_count": 264,
          "reply_count": 276,
          "like_count": 2907,
          "quote_count": 46
        },
        "text": "imo @jack “maximally” doubling down against Ethereum will become one of the biggest miscalculations in web history\n\nthere is a huge opp for social networks and other websites ready to embrace Ethereum Web3, not lightning wallets linked to your account which no one cares about",
        "conversation_id": "1425909681667596296",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T19:58:54.000Z"
      },
      {
        "author_id": "18094952",
        "id": "1425890866623823876",
        "public_metrics": {
          "retweet_count": 70,
          "reply_count": 58,
          "like_count": 999,
          "quote_count": 6
        },
        "text": "this is one thing that feels like would benefit the eth ecosystem way more than it benefits twitter https://t.co/IOOAidVFis",
        "conversation_id": "1425890866623823876",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007361429752594432",
              "name": "Ethereum cryptocurrency",
              "description": "Ethereum Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "67",
              "name": "Interests and Hobbies",
              "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
            },
            "entity": {
              "id": "847894353708068864",
              "name": "Investing",
              "description": "Investing"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1425878898655432705"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 100,
              "end": 123,
              "url": "https://t.co/IOOAidVFis",
              "expanded_url": "https://twitter.com/jacobybrandon/status/1425878898655432705",
              "display_url": "twitter.com/jacobybrandon/…"
            }
          ]
        },
        "created_at": "2021-08-12T18:44:09.000Z"
      },
      {
        "author_id": "323417384",
        "entities": {
          "mentions": [
            {
              "start": 46,
              "end": 56,
              "username": "iamcardib",
              "id": "866953267"
            },
            {
              "start": 102,
              "end": 107,
              "username": "jack",
              "id": "12"
            }
          ],
          "annotations": [
            {
              "start": 20,
              "end": 26,
              "probability": 0.6144,
              "type": "Product",
              "normalized_text": "Twitter"
            }
          ],
          "hashtags": [
            {
              "start": 65,
              "end": 72,
              "tag": "rumors"
            }
          ]
        },
        "id": "1425856310348640261",
        "public_metrics": {
          "retweet_count": 380,
          "reply_count": 93,
          "like_count": 4872,
          "quote_count": 23
        },
        "text": "Waymentttt this lil Twitter emoji of me &amp; @iamcardib is cute #rumors 👈🏾 y’all think of everything @jack",
        "conversation_id": "1425856310348640261",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1117789006916243456",
              "name": "Lizzo",
              "description": "American rapper"
            }
          },
          {
            "domain": {
              "id": "54",
              "name": "Musician",
              "description": "A musician in the world, like Adele or Bob Dylan"
            },
            "entity": {
              "id": "1117789006916243456",
              "name": "Lizzo",
              "description": "American rapper"
            }
          },
          {
            "domain": {
              "id": "55",
              "name": "Music Genre",
              "description": "A category for a musical style, like Pop, Rock, or Rap"
            },
            "entity": {
              "id": "810937888334487552",
              "name": "Rap",
              "description": "Hip-Hop/Rap"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "875059424255135744",
              "name": "Cardi B",
              "description": "Cardi B"
            }
          },
          {
            "domain": {
              "id": "54",
              "name": "Musician",
              "description": "A musician in the world, like Adele or Bob Dylan"
            },
            "entity": {
              "id": "875059424255135744",
              "name": "Cardi B",
              "description": "Cardi B"
            }
          },
          {
            "domain": {
              "id": "55",
              "name": "Music Genre",
              "description": "A category for a musical style, like Pop, Rock, or Rap"
            },
            "entity": {
              "id": "810937888334487552",
              "name": "Rap",
              "description": "Hip-Hop/Rap"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-12T16:26:50.000Z"
      },
      {
        "author_id": "14527699",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 12,
              "username": "0xTed",
              "id": "1286497692416380928"
            }
          ]
        },
        "id": "1425629607592669189",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 12,
          "like_count": 188,
          "quote_count": 0
        },
        "text": "@jack @0xTed *there is no such thing as a coincidence",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425614719323459586",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425629448834109443"
          }
        ],
        "source": "Twitter for iPad",
        "lang": "en",
        "created_at": "2021-08-12T01:26:00.000Z"
      },
      {
        "author_id": "1286497692416380928",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 14,
              "username": "udiWertheimer",
              "id": "14527699"
            }
          ]
        },
        "id": "1425615337257570306",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 2,
          "like_count": 89,
          "quote_count": 0
        },
        "text": "@udiWertheimer Total coincidence I'm sure lmao",
        "in_reply_to_user_id": "14527699",
        "conversation_id": "1425614719323459586",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425614719323459586"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T00:29:17.000Z"
      },
      {
        "author_id": "1361477782807568385",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 16,
              "username": "zackvoell",
              "id": "2373682811"
            }
          ]
        },
        "id": "1425567013485760515",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 12,
          "quote_count": 0
        },
        "text": "@jack @zackvoell the font looks wOnKy jack",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425561767007203328",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425563489121230849"
          }
        ],
        "source": "Twitter for Android",
        "lang": "en",
        "created_at": "2021-08-11T21:17:16.000Z"
      },
      {
        "author_id": "1212964879172132866",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 19,
              "username": "sodadecounty",
              "id": "24376083"
            },
            {
              "start": 20,
              "end": 27,
              "username": "DocDre",
              "id": "14118112"
            }
          ]
        },
        "id": "1425610212040454144",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 15,
          "quote_count": 1
        },
        "text": "@jack @sodadecounty @DocDre i was going to ask why this popped up in my timeline but i forgot i was following you",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425604732018696193",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425610015155572737"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-12T00:08:55.000Z"
      },
      {
        "author_id": "448253354",
        "id": "1425605581667241984",
        "entities": {
          "annotations": [
            {
              "start": 118,
              "end": 121,
              "probability": 0.991,
              "type": "Place",
              "normalized_text": "Cuba"
            }
          ],
          "urls": [
            {
              "start": 276,
              "end": 299,
              "url": "https://t.co/h1rwkEDkJy",
              "expanded_url": "https://twitter.com/gladstein/status/1425584732935364608",
              "display_url": "twitter.com/gladstein/stat…"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 124,
          "reply_count": 43,
          "like_count": 623,
          "quote_count": 7
        },
        "text": "Of all the insight surfaced in this report, I was most struck by how widespread use of Bitcoin already seems to be in Cuba.\n\n\"300,000 Cubans have used bitcoin or cryptocurrency at least once, and that maybe 100,000 use it on a regular basis,\" one Cuban interviewee estimated. https://t.co/h1rwkEDkJy",
        "conversation_id": "1425605581667241984",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1425584732935364608"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-11T23:50:31.000Z"
      },
      {
        "author_id": "2373682811",
        "id": "1425561767007203328",
        "public_metrics": {
          "retweet_count": 32,
          "reply_count": 45,
          "like_count": 769,
          "quote_count": 8
        },
        "text": "Please change the twitter UI back",
        "conversation_id": "1425561767007203328",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-11T20:56:25.000Z"
      },
      {
        "author_id": "2589586742",
        "id": "1425504233617608704",
        "public_metrics": {
          "retweet_count": 41,
          "reply_count": 30,
          "like_count": 229,
          "quote_count": 0
        },
        "text": "The energy is crazy! TAP IN! https://t.co/dgrxvJaKfk",
        "conversation_id": "1425504233617608704",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 29,
              "end": 52,
              "url": "https://t.co/dgrxvJaKfk",
              "expanded_url": "https://twitter.com/i/spaces/1OwGWVYyzWRKQ",
              "display_url": "twitter.com/i/spaces/1OwGW…"
            }
          ]
        },
        "created_at": "2021-08-11T17:07:48.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "7_1425454817040900101"
          ]
        },
        "author_id": "575119136",
        "entities": {
          "mentions": [
            {
              "start": 137,
              "end": 146,
              "username": "linukxxx",
              "id": "915989833369169925"
            }
          ],
          "annotations": [
            {
              "start": 193,
              "end": 199,
              "probability": 0.6195,
              "type": "Product",
              "normalized_text": "Twitter"
            }
          ],
          "urls": [
            {
              "start": 208,
              "end": 231,
              "url": "https://t.co/qpUNcQ0ZBs",
              "expanded_url": "https://twitter.com/kim_yle/status/1425454868639125511/video/1",
              "display_url": "pic.twitter.com/qpUNcQ0ZBs"
            }
          ]
        },
        "id": "1425454868639125511",
        "public_metrics": {
          "retweet_count": 75,
          "reply_count": 31,
          "like_count": 248,
          "quote_count": 27
        },
        "text": "👋 We're working on making it easier to share and discover Spaces you are interested in. Here's a prototype built by one of our engineers @linukxxx, of a way for hosts to tag their Spaces with Twitter Topics. https://t.co/qpUNcQ0ZBs",
        "conversation_id": "1425454868639125511",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for  iPhone",
        "lang": "en",
        "created_at": "2021-08-11T13:51:39.000Z"
      },
      {
        "author_id": "291490266",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 89,
              "end": 99,
              "username": "optoutpod",
              "id": "1393276157831925773"
            }
          ]
        },
        "id": "1425439957389352960",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 2,
          "like_count": 73,
          "quote_count": 0
        },
        "text": "@jack If you would be game (I'm sure you get a million requests) I'd love to have you on @optoutpod to talk about your own views around privacy and the tools you choose to use.\n\nI'm sure that's a slim chance, but would be great to let others hear your personal takes there!",
        "in_reply_to_user_id": "291490266",
        "conversation_id": "1425432797351661573",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425438272466075654"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-11T12:52:23.000Z"
      },
      {
        "author_id": "823766058909761536",
        "id": "1424811086520492036",
        "public_metrics": {
          "retweet_count": 725,
          "reply_count": 181,
          "like_count": 3209,
          "quote_count": 71
        },
        "text": "I wrote an article about bitcoin's scaling pattern and energy usage:\nhttps://t.co/0m0RGXQ7E8",
        "conversation_id": "1424811086520492036",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 69,
              "end": 92,
              "url": "https://t.co/0m0RGXQ7E8",
              "expanded_url": "https://www.swanbitcoin.com/bitcoins-energy-usage-is-not-a-problem-heres-why-by-lyn-alden/",
              "display_url": "swanbitcoin.com/bitcoins-energ…"
            }
          ]
        },
        "created_at": "2021-08-09T19:13:29.000Z"
      },
      {
        "author_id": "291490266",
        "id": "1425432797351661573",
        "public_metrics": {
          "retweet_count": 18,
          "reply_count": 20,
          "like_count": 414,
          "quote_count": 3
        },
        "text": "👀\n\nNot sure if this is exciting or terrifying to be this much in the spotlight when I'm so publicly advocating *against* corporate surveillance 😅 https://t.co/jnjMGtQLfw",
        "conversation_id": "1425432797351661573",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1425382743467339781"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 146,
              "end": 169,
              "url": "https://t.co/jnjMGtQLfw",
              "expanded_url": "https://twitter.com/BigTechAlert/status/1425382743467339781",
              "display_url": "twitter.com/BigTechAlert/s…"
            }
          ]
        },
        "created_at": "2021-08-11T12:23:56.000Z"
      },
      {
        "author_id": "2647949986",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "jeetsidhu_",
              "id": "1305977989"
            },
            {
              "start": 18,
              "end": 29,
              "username": "MuunWallet",
              "id": "965963081640742913"
            }
          ]
        },
        "id": "1425246013367988229",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 3,
          "like_count": 4,
          "quote_count": 0
        },
        "text": "@jack @jeetsidhu_ @MuunWallet Will it display my NFTs ?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425237422951051272",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "67",
              "name": "Interests and Hobbies",
              "description": "Interests, opinions, and behaviors of individuals, groups, or cultures; like Speciality Cooking or Theme Parks"
            },
            "entity": {
              "id": "847894353708068864",
              "name": "Investing",
              "description": "Investing"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425241521809416197"
          }
        ],
        "source": "Twitter for Android",
        "lang": "en",
        "created_at": "2021-08-11T00:01:44.000Z"
      },
      {
        "author_id": "1388515267291009027",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "jeetsidhu_",
              "id": "1305977989"
            },
            {
              "start": 18,
              "end": 29,
              "username": "MuunWallet",
              "id": "965963081640742913"
            },
            {
              "start": 30,
              "end": 35,
              "username": "jack",
              "id": "12"
            }
          ]
        },
        "id": "1425250331500236800",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 2,
          "like_count": 4,
          "quote_count": 0
        },
        "text": "@jack @jeetsidhu_ @MuunWallet @jack I’m curious why you say peace of mind… Im relatively new to crypto and trying to decide on a wallet to use and it feels impossible for me to know if a wallet is actually secure or not. They all *appear* secure, but how can I know? Why Muun?",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425237422951051272",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425241521809416197"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-11T00:18:53.000Z"
      },
      {
        "author_id": "130274569",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 17,
              "username": "jeetsidhu_",
              "id": "1305977989"
            },
            {
              "start": 18,
              "end": 29,
              "username": "MuunWallet",
              "id": "965963081640742913"
            },
            {
              "start": 106,
              "end": 114,
              "username": "CashApp",
              "id": "1445650784"
            }
          ]
        },
        "id": "1425246937666699264",
        "public_metrics": {
          "retweet_count": 0,
          "reply_count": 1,
          "like_count": 8,
          "quote_count": 0
        },
        "text": "@jack @jeetsidhu_ @MuunWallet This is cool. Any plans to bring lightning transactions and self custody to @CashApp? P2P Bitcoin transactions are already effortless, but lightning and self custody would be great.",
        "in_reply_to_user_id": "12",
        "conversation_id": "1425237422951051272",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1260258664293601280",
              "name": "Cash App"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425241521809416197"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-11T00:05:24.000Z"
      },
      {
        "author_id": "47003920",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 15,
              "username": "CitizenBitcoin",
              "id": "950509070682791936"
            },
            {
              "start": 36,
              "end": 50,
              "username": "julie_stitzel",
              "id": "1969564897"
            },
            {
              "start": 54,
              "end": 62,
              "username": "CashApp",
              "id": "1445650784"
            },
            {
              "start": 148,
              "end": 153,
              "username": "jack",
              "id": "12"
            }
          ]
        },
        "id": "1425105996045864960",
        "public_metrics": {
          "retweet_count": 4,
          "reply_count": 3,
          "like_count": 74,
          "quote_count": 0
        },
        "text": "@CitizenBitcoin We're lucky to have @julie_stitzel at @CashApp. She's not exactly a \"Bitcoin-only lobbyist\" but she's great &amp; we all know where @jack stands on this.",
        "in_reply_to_user_id": "950509070682791936",
        "conversation_id": "1425085458883698689",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1260258664293601280",
              "name": "Cash App"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1425092637187510272"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-10T14:45:21.000Z"
      },
      {
        "author_id": "1305977989",
        "entities": {
          "mentions": [
            {
              "start": 20,
              "end": 31,
              "username": "MuunWallet",
              "id": "965963081640742913"
            }
          ]
        },
        "id": "1425237422951051272",
        "public_metrics": {
          "retweet_count": 6,
          "reply_count": 24,
          "like_count": 117,
          "quote_count": 0
        },
        "text": "What’s the main job @MuunWallet does for you?",
        "conversation_id": "1425237422951051272",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-10T23:27:35.000Z"
      },
      {
        "author_id": "1065249714214457345",
        "id": "1425187688370552842",
        "entities": {
          "annotations": [
            {
              "start": 34,
              "end": 36,
              "probability": 0.702,
              "type": "Product",
              "normalized_text": "iOS"
            }
          ],
          "urls": [
            {
              "start": 89,
              "end": 112,
              "url": "https://t.co/pShfK3RYfG",
              "expanded_url": "https://twitter.com/Mr_DannySingh/status/1418293516057329671",
              "display_url": "twitter.com/Mr_DannySingh/…"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 333,
          "reply_count": 149,
          "like_count": 1002,
          "quote_count": 242
        },
        "text": "hey..quick update: now 50% of our iOS folks will be able to speak like 👽, 🤖,🐝&amp; more! https://t.co/pShfK3RYfG",
        "conversation_id": "1425187688370552842",
        "context_annotations": [
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596752842752",
              "name": "Services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10045225402",
              "name": "Twitter"
            }
          },
          {
            "domain": {
              "id": "48",
              "name": "Product",
              "description": "Products created by Brands.  Examples: Ford Explorer, Apple iPhone."
            },
            "entity": {
              "id": "1359561140301307911",
              "name": "Twitter Spaces"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10026364281",
              "name": "Apple"
            }
          },
          {
            "domain": {
              "id": "48",
              "name": "Product",
              "description": "Products created by Brands.  Examples: Ford Explorer, Apple iPhone."
            },
            "entity": {
              "id": "10044903039",
              "name": "Apple - iOS"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1418293516057329671"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-10T20:09:58.000Z"
      },
      {
        "author_id": "22831059",
        "id": "1424890848618057738",
        "entities": {
          "annotations": [
            {
              "start": 63,
              "end": 72,
              "probability": 0.9613,
              "type": "Place",
              "normalized_text": "Washington"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 1590,
          "reply_count": 341,
          "like_count": 12082,
          "quote_count": 111
        },
        "text": "There are some important lessons from this about the antics in Washington. First: This is what happens when bills are drafted behind closed doors without input from experts and stakeholders.",
        "conversation_id": "1424890848618057738",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1070735157185769472",
              "name": "Cynthia Lummis",
              "description": "American politician"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "1070735157185769472",
              "name": "Cynthia Lummis",
              "description": "American politician"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-10T00:30:26.000Z"
      },
      {
        "author_id": "169312819",
        "id": "1424882431937572864",
        "public_metrics": {
          "retweet_count": 120,
          "reply_count": 45,
          "like_count": 1038,
          "quote_count": 9
        },
        "text": "The fact that anyone can just see this is wild https://t.co/WTADL5qoDE",
        "conversation_id": "1424882431937572864",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1405571471955533827",
              "name": "USD Coin"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1424710513905262592"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 47,
              "end": 70,
              "url": "https://t.co/WTADL5qoDE",
              "expanded_url": "https://twitter.com/whale_alert/status/1424710513905262592",
              "display_url": "twitter.com/whale_alert/st…"
            }
          ]
        },
        "created_at": "2021-08-09T23:56:59.000Z"
      },
      {
        "author_id": "256755545",
        "id": "1424850832323866639",
        "entities": {
          "annotations": [
            {
              "start": 29,
              "end": 35,
              "probability": 0.5625,
              "type": "Organization",
              "normalized_text": "Bitcoin"
            },
            {
              "start": 81,
              "end": 82,
              "probability": 0.9628,
              "type": "Place",
              "normalized_text": "US"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 313,
          "reply_count": 168,
          "like_count": 2417,
          "quote_count": 46
        },
        "text": "Just so we're all clear - if Bitcoin mining ends up regulated as a broker in the US (pushing it overseas), the transition of Bitcoin mining to clean and otherwise-unused energy will be delayed, pushing us back a decade in the reduction of carbon emissions from Bitcoin mining.",
        "conversation_id": "1424850832323866639",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-09T21:51:25.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "3_1424845385428766725",
            "3_1424845395465809923"
          ]
        },
        "author_id": "2914515430",
        "entities": {
          "mentions": [
            {
              "start": 53,
              "end": 67,
              "username": "RepDarrenSoto",
              "id": "818713465653051392"
            },
            {
              "start": 69,
              "end": 78,
              "username": "RepDavid",
              "id": "229197216"
            },
            {
              "start": 84,
              "end": 98,
              "username": "RepBillFoster",
              "id": "1080509366"
            }
          ],
          "annotations": [
            {
              "start": 184,
              "end": 189,
              "probability": 0.7881,
              "type": "Organization",
              "normalized_text": "Senate"
            }
          ],
          "urls": [
            {
              "start": 250,
              "end": 273,
              "url": "https://t.co/MzsEmBbosr",
              "expanded_url": "https://twitter.com/RepTomEmmer/status/1424845416697323522/photo/1",
              "display_url": "pic.twitter.com/MzsEmBbosr"
            },
            {
              "start": 250,
              "end": 273,
              "url": "https://t.co/MzsEmBbosr",
              "expanded_url": "https://twitter.com/RepTomEmmer/status/1424845416697323522/photo/1",
              "display_url": "pic.twitter.com/MzsEmBbosr"
            }
          ]
        },
        "id": "1424845416697323522",
        "public_metrics": {
          "retweet_count": 2009,
          "reply_count": 432,
          "like_count": 7156,
          "quote_count": 239
        },
        "text": "I, along with bipartisan Blockchain Caucus co-chairs @RepDarrenSoto, @RepDavid, and @RepBillFoster sent a letter to every single Representative in the House raising concerns about the Senate infrastructure bill being paid for by our crypto industry. https://t.co/MzsEmBbosr",
        "conversation_id": "1424845416697323522",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "940654224966221824",
              "name": "David Schweikert",
              "description": "US Representative David Schweikert (AZ-6)"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "966044257751478273",
              "name": "Darren Soto",
              "description": "US Representative Darren Soto (FL-09)"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "980880568647761920",
              "name": "Bill Foster",
              "description": "US Representative Bill Foster (IL-11)"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "981250593304883200",
              "name": "Tom Emmer",
              "description": "US Representative Tom Emmer (MN-06)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "940654224966221824",
              "name": "David Schweikert",
              "description": "US Representative David Schweikert (AZ-6)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "966044257751478273",
              "name": "Darren Soto",
              "description": "US Representative Darren Soto (FL-09)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "980880568647761920",
              "name": "Bill Foster",
              "description": "US Representative Bill Foster (IL-11)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "981250593304883200",
              "name": "Tom Emmer",
              "description": "US Representative Tom Emmer (MN-06)"
            }
          },
          {
            "domain": {
              "id": "30",
              "name": "Entities [Entity Service]",
              "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
            },
            "entity": {
              "id": "857879456773357569",
              "name": "Technology",
              "description": "Technology"
            }
          },
          {
            "domain": {
              "id": "30",
              "name": "Entities [Entity Service]",
              "description": "Entity Service top level domain, every item that is in Entity Service should be in this domain"
            },
            "entity": {
              "id": "1001503516555337728",
              "name": "Blockchain",
              "description": "Blockchain"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-09T21:29:54.000Z"
      },
      {
        "author_id": "47003920",
        "id": "1424781994739830785",
        "entities": {
          "annotations": [
            {
              "start": 48,
              "end": 55,
              "probability": 0.8037,
              "type": "Organization",
              "normalized_text": "Congress"
            },
            {
              "start": 132,
              "end": 150,
              "probability": 0.7373,
              "type": "Organization",
              "normalized_text": "Treasury Department"
            }
          ],
          "urls": [
            {
              "start": 211,
              "end": 234,
              "url": "https://t.co/z94Gu6h61O",
              "expanded_url": "https://twitter.com/JStein_WaPo/status/1424775800373616648",
              "display_url": "twitter.com/JStein_WaPo/st…"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 348,
          "reply_count": 99,
          "like_count": 1976,
          "quote_count": 25
        },
        "text": "We need to have a longer conversation about why Congress is delegating its legislative power to unnamed, unelected officials in the Treasury Department, but that can wait until after the vote on this amendment. https://t.co/z94Gu6h61O",
        "conversation_id": "1424781994739830785",
        "context_annotations": [
          {
            "domain": {
              "id": "88",
              "name": "Political Body",
              "description": "A section of a government, like The Supreme Court"
            },
            "entity": {
              "id": "954108520944648192",
              "name": "US Department of the Treasury",
              "description": "US Department of the Treasury"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1424775800373616648"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-09T17:17:53.000Z"
      },
      {
        "author_id": "894339217412816896",
        "entities": {
          "mentions": [
            {
              "start": 1,
              "end": 11,
              "username": "SenShelby",
              "id": "21111098"
            }
          ]
        },
        "id": "1424839772820975634",
        "public_metrics": {
          "retweet_count": 307,
          "reply_count": 62,
          "like_count": 1905,
          "quote_count": 13
        },
        "text": ".@SenShelby choosing bombs over bitcoin proves why we need bitcoin to win",
        "conversation_id": "1424839772820975634",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "892805810287398913",
              "name": "Richard Shelby",
              "description": "US Senator Richard Shelby (AL)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "892805810287398913",
              "name": "Richard Shelby",
              "description": "US Senator Richard Shelby (AL)"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-09T21:07:28.000Z"
      },
      {
        "author_id": "1090068803562684419",
        "id": "1424835947313696776",
        "entities": {
          "annotations": [
            {
              "start": 33,
              "end": 34,
              "probability": 0.7923,
              "type": "Place",
              "normalized_text": "US"
            }
          ],
          "hashtags": [
            {
              "start": 126,
              "end": 134,
              "tag": "Bitcoin"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 2415,
          "reply_count": 259,
          "like_count": 12306,
          "quote_count": 148
        },
        "text": "I’d personally like to thank the US government for so poetically demonstrating the problems we are trying to fix by attacking #Bitcoin in a $3,500,000,000,000.00 infrastructure bill.\n\nWe’ve been trying to describe the problem for quite some time, but could never do it this well.",
        "conversation_id": "1424835947313696776",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-09T20:52:16.000Z"
      },
      {
        "author_id": "361289499",
        "id": "1424833678467796996",
        "public_metrics": {
          "retweet_count": 568,
          "reply_count": 212,
          "like_count": 3988,
          "quote_count": 53
        },
        "text": "They killed the amendment for more military spending.\n\nPathetic.",
        "conversation_id": "1424833678467796996",
        "context_annotations": [
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-09T20:43:15.000Z"
      },
      {
        "author_id": "47003920",
        "id": "1424830138995417096",
        "entities": {
          "annotations": [
            {
              "start": 8,
              "end": 21,
              "probability": 0.7963,
              "type": "Person",
              "normalized_text": "Richard Shelby"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 1213,
          "reply_count": 761,
          "like_count": 5801,
          "quote_count": 541
        },
        "text": "Senator Richard Shelby (R-AL) has objected to the compromise amendment.\n\nHe didn't get his own amendment for $50b in defense spending, so he's against all others. Unless he changes his mind, that's it. The compromise amendment is dead.\n\nFYI, he's retiring at the end of this term.",
        "conversation_id": "1424830138995417096",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "892805810287398913",
              "name": "Richard Shelby",
              "description": "US Senator Richard Shelby (AL)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "892805810287398913",
              "name": "Richard Shelby",
              "description": "US Senator Richard Shelby (AL)"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-09T20:29:11.000Z"
      },
      {
        "author_id": "12",
        "id": "1424831787633680386",
        "public_metrics": {
          "retweet_count": 1959,
          "reply_count": 877,
          "like_count": 13758,
          "quote_count": 295
        },
        "text": "Amendment killed to get more military spending.\n\nWow.",
        "conversation_id": "1424831787633680386",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-09T20:35:44.000Z"
      },
      {
        "author_id": "851361",
        "id": "1424830459675041792",
        "entities": {
          "annotations": [
            {
              "start": 13,
              "end": 18,
              "probability": 0.6457,
              "type": "Organization",
              "normalized_text": "Senate"
            },
            {
              "start": 61,
              "end": 66,
              "probability": 0.8581,
              "type": "Person",
              "normalized_text": "Shelby"
            },
            {
              "start": 72,
              "end": 78,
              "probability": 0.9833,
              "type": "Person",
              "normalized_text": "Sanders"
            }
          ],
          "urls": [
            {
              "start": 173,
              "end": 196,
              "url": "https://t.co/upfchRxmUD",
              "expanded_url": "https://www.senate.gov/legislative/floor_activity_pail.htm",
              "display_url": "senate.gov/legislative/fl…"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 60,
          "reply_count": 16,
          "like_count": 260,
          "quote_count": 5
        },
        "text": "SNAFU on the Senate floor right now on the crypto amendment. Shelby and Sanders fighting it out over defense spending and killing the crypto amendment as collateral damage. https://t.co/upfchRxmUD",
        "conversation_id": "1424830459675041792",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "892805810287398913",
              "name": "Richard Shelby",
              "description": "US Senator Richard Shelby (AL)"
            }
          },
          {
            "domain": {
              "id": "35",
              "name": "Politician",
              "description": "Politicians in the world, like Joe Biden"
            },
            "entity": {
              "id": "892805810287398913",
              "name": "Richard Shelby",
              "description": "US Senator Richard Shelby (AL)"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Tweetbot for Mac",
        "lang": "en",
        "created_at": "2021-08-09T20:30:28.000Z"
      },
      {
        "author_id": "1475038004",
        "id": "1424720690134102016",
        "entities": {
          "annotations": [
            {
              "start": 5,
              "end": 7,
              "probability": 0.5127,
              "type": "Organization",
              "normalized_text": "CEO"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 11,
          "reply_count": 10,
          "like_count": 166,
          "quote_count": 0
        },
        "text": "If a CEO puts out a call to action on this infrastructure bill and doesn't use the term \"bitcoin\" once. They're part of the problem.",
        "conversation_id": "1424720690134102016",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974596148793345",
              "name": "Business & finance"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596794716162",
              "name": "Financial services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "1007360414114435072",
              "name": "Bitcoin cryptocurrency",
              "description": "Bitcoin Cryptocurrency"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for Android",
        "lang": "en",
        "created_at": "2021-08-09T13:14:17.000Z"
      },
      {
        "author_id": "180212381",
        "id": "1424512462565433348",
        "entities": {
          "annotations": [
            {
              "start": 56,
              "end": 57,
              "probability": 0.9305,
              "type": "Place",
              "normalized_text": "DC"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 134,
          "reply_count": 61,
          "like_count": 859,
          "quote_count": 13
        },
        "text": "It’s *so* crazy that this is how legislation is made in DC.\n\nThese are incredibly complex, technical and impactful issues.\n\nThey deserve thorough contemplation, debate &amp; public discussion in order to ensure the policy put in place optimizes future American prosperity &amp; innovation",
        "in_reply_to_user_id": "180212381",
        "conversation_id": "1424512453681942528",
        "context_annotations": [
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974596752842752",
              "name": "Services"
            }
          },
          {
            "domain": {
              "id": "48",
              "name": "Product",
              "description": "Products created by Brands.  Examples: Ford Explorer, Apple iPhone."
            },
            "entity": {
              "id": "1412579054855671809",
              "name": "Google Innovation"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1424512461005221891"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-08T23:26:51.000Z"
      },
      {
        "author_id": "49795410",
        "id": "1424485939582312448",
        "public_metrics": {
          "retweet_count": 93,
          "reply_count": 19,
          "like_count": 362,
          "quote_count": 7
        },
        "text": "I just published: The proposal to regulate digital asset transactions like in-person physical currency receipts should be struck from the infrastructure bill https://t.co/bzh8q74yCj",
        "conversation_id": "1424485939582312448",
        "context_annotations": [
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "847888632711061504",
              "name": "Personal finance",
              "description": "Personal finance"
            }
          },
          {
            "domain": {
              "id": "66",
              "name": "Interests and Hobbies Category",
              "description": "A grouping of interests and hobbies entities, like Novelty Food or Destinations"
            },
            "entity": {
              "id": "913142676819648512",
              "name": "Cryptocurrencies",
              "description": "Cryptocurrency"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Web App",
        "lang": "en",
        "entities": {
          "urls": [
            {
              "start": 158,
              "end": 181,
              "url": "https://t.co/bzh8q74yCj",
              "expanded_url": "https://link.medium.com/qhLwYjQ3yib",
              "display_url": "link.medium.com/qhLwYjQ3yib"
            }
          ]
        },
        "created_at": "2021-08-08T21:41:28.000Z"
      },
      {
        "author_id": "180212381",
        "id": "1424437870111072261",
        "public_metrics": {
          "retweet_count": 86,
          "reply_count": 40,
          "like_count": 489,
          "quote_count": 5
        },
        "text": "A better solution for governments trying to (impossibly) mandate DEXs to submit 1099’s on users to ensure tax inflows, would be to instead just become participants, hold governance tokens and collect the fees generated as a new revenue stream.",
        "conversation_id": "1424437870111072261",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-08T18:30:27.000Z"
      },
      {
        "author_id": "8152232",
        "id": "1424437772492832772",
        "entities": {
          "annotations": [
            {
              "start": 48,
              "end": 50,
              "probability": 0.908,
              "type": "Organization",
              "normalized_text": "IRS"
            },
            {
              "start": 206,
              "end": 210,
              "probability": 0.364,
              "type": "Organization",
              "normalized_text": "1099s"
            }
          ],
          "urls": [
            {
              "start": 274,
              "end": 297,
              "url": "https://t.co/KOvwUvHRqq",
              "expanded_url": "https://twitter.com/brockm/status/1424435976491855874",
              "display_url": "twitter.com/brockm/status/…"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 52,
          "reply_count": 28,
          "like_count": 298,
          "quote_count": 4
        },
        "text": "This would be infinitely more effective for the IRS to collect taxes and the government to legitimately score revenue for the infrastructure bill. As it stands, no one running a node can comply with filing 1099s, so there would be no additional tax revenue due to this law. https://t.co/KOvwUvHRqq",
        "conversation_id": "1424437772492832772",
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "quoted",
            "id": "1424435976491855874"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-08T18:30:04.000Z"
      },
      {
        "author_id": "16949938",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 11,
              "username": "APompliano",
              "id": "339061487"
            },
            {
              "start": 12,
              "end": 17,
              "username": "jack",
              "id": "12"
            }
          ]
        },
        "id": "1424406278961463297",
        "public_metrics": {
          "retweet_count": 1,
          "reply_count": 5,
          "like_count": 64,
          "quote_count": 2
        },
        "text": "@APompliano @jack seems to be moving towards that slowly and steadily 🤞",
        "in_reply_to_user_id": "339061487",
        "conversation_id": "1424405370328469510",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1424405370328469510"
          }
        ],
        "source": "Twitter for iPhone",
        "lang": "en",
        "created_at": "2021-08-08T16:24:55.000Z"
      },
      {
        "attachments": {
          "media_keys": [
            "13_1424369094594285576"
          ]
        },
        "author_id": "2679055230",
        "id": "1424369733118398467",
        "entities": {
          "annotations": [
            {
              "start": 6,
              "end": 15,
              "probability": 0.6079,
              "type": "Other",
              "normalized_text": "The Throne"
            }
          ],
          "urls": [
            {
              "start": 34,
              "end": 57,
              "url": "https://t.co/BPR5f1yrf8",
              "expanded_url": "https://twitter.com/TIDAL/status/1424369733118398467/video/1",
              "display_url": "pic.twitter.com/BPR5f1yrf8"
            }
          ]
        },
        "public_metrics": {
          "retweet_count": 900,
          "reply_count": 54,
          "like_count": 3930,
          "quote_count": 73
        },
        "text": "Watch The Throne: 10 years later. https://t.co/BPR5f1yrf8",
        "conversation_id": "1424369733118398467",
        "context_annotations": [
          {
            "domain": {
              "id": "45",
              "name": "Brand Vertical",
              "description": "Top level entities that describe a Brands industry"
            },
            "entity": {
              "id": "781974597310615553",
              "name": "Entertainment"
            }
          },
          {
            "domain": {
              "id": "46",
              "name": "Brand Category",
              "description": "Categories within Brand Verticals that narrow down the scope of Brands"
            },
            "entity": {
              "id": "781974597222535168",
              "name": "Online Services"
            }
          },
          {
            "domain": {
              "id": "47",
              "name": "Brand",
              "description": "Brands and Companies"
            },
            "entity": {
              "id": "10043701887",
              "name": "Tidal"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "source": "Twitter Media Studio",
        "lang": "en",
        "created_at": "2021-08-08T13:59:42.000Z"
      },
      {
        "author_id": "21129700",
        "entities": {
          "mentions": [
            {
              "start": 0,
              "end": 5,
              "username": "jack",
              "id": "12"
            },
            {
              "start": 6,
              "end": 21,
              "username": "TeamKanyeDaily",
              "id": "189470083"
            },
            {
              "start": 22,
              "end": 32,
              "username": "kanyewest",
              "id": "169686021"
            }
          ],
          "annotations": [
            {
              "start": 50,
              "end": 54,
              "probability": 0.7298,
              "type": "Person",
              "normalized_text": "pablo"
            }
          ]
        },
        "id": "1424369661668478982",
        "public_metrics": {
          "retweet_count": 2,
          "reply_count": 1,
          "like_count": 20,
          "quote_count": 0
        },
        "text": "@jack @TeamKanyeDaily @kanyewest he did that with pablo. he kept changing after digital release.",
        "in_reply_to_user_id": "12",
        "conversation_id": "1424220904331038722",
        "context_annotations": [
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "806561823407239169",
              "name": "Kanye West",
              "description": "Kanye West"
            }
          },
          {
            "domain": {
              "id": "10",
              "name": "Person",
              "description": "Named people in the world like Nelson Mandela"
            },
            "entity": {
              "id": "1037336866519842816",
              "name": "Jack Dorsey",
              "description": "Jack Dorsey"
            }
          },
          {
            "domain": {
              "id": "54",
              "name": "Musician",
              "description": "A musician in the world, like Adele or Bob Dylan"
            },
            "entity": {
              "id": "806561823407239169",
              "name": "Kanye West",
              "description": "Kanye West"
            }
          },
          {
            "domain": {
              "id": "55",
              "name": "Music Genre",
              "description": "A category for a musical style, like Pop, Rock, or Rap"
            },
            "entity": {
              "id": "810937888334487552",
              "name": "Rap",
              "description": "Hip-Hop/Rap"
            }
          }
        ],
        "possibly_sensitive": false,
        "reply_settings": "everyone",
        "referenced_tweets": [
          {
            "type": "replied_to",
            "id": "1424220904331038722"
          }
        ],
        "source": "Twitter Web App",
        "lang": "en",
        "created_at": "2021-08-08T13:59:25.000Z"
      }
    ]
  },
  "errors": [
    {
      "value": "1425604732018696193",
      "detail": "Could not find tweet with referenced_tweets.id: [1425604732018696193].",
      "title": "Not Found Error",
      "resource_type": "tweet",
      "parameter": "referenced_tweets.id",
      "resource_id": "1425604732018696193",
      "type": "https://api.twitter.com/2/problems/resource-not-found"
    }
  ],
  "meta": {
    "newest_id": "1426892980749848579",
    "oldest_id": "1424369951926784002",
    "result_count": 90
  }
}

// once you have the response, you can call flatten on it
console.log('tweets', flatten(response));
