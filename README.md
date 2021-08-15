# flatten-twitterv2

## Install

```
npm install flatten-twitterv2
```
`Important:` It uses optional chaining so Node version 14+ is required or you might be able to use on an older version with some finagling. 

## Use

```js
import { flatten } from 'flatten-twitterv2'

async function() {
  const response = await fetch('https://api.twitter.com/2/...', {...}));
  const json = await response.json();

  const flattened = flatten(json);
}
```


## Why?

Twitter's v2 API has an `includes` object when you add [expansions](https://developer.twitter.com/en/docs/twitter-api/expansions). This is a function to inline your expansions so that it's easier to work with the resulting data.

As an example, if you're searching for tweets with the `author_id` expansion this is what the response looks like:

**Before**
```json
{
  "data": [
    {
      "id": "21",
      "text": "just setting up my twttr",
      "author_id": "12"
    }
  ],
  "includes": {
    "users": [
      {
        "id": "123",
        "username": "jack",
        "created_at": "2006-03-21T20:50:14.000Z"
      }
    ]
  }
}
```

**After**
```json
{
  "data": [
    {
      "id": "21",
      "text": "just setting up my twttr",
      "author_id": "12",
      "author": {
        "id": "12",
        "username": "jack",
        "created_at": "2006-03-21T20:50:14.000Z",
      }
    }
  ]
}
```
