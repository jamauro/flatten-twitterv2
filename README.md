# Install

```
npm install flatten-twitterv2
```
`Important` It uses optional chaining so Node version 14+ is required or you might be able to use babel on an older version.

# Use

```js
import { flatten } from 'flatten-twitterv2'

async function() {
  const response = await fetch('https://api.twitter.com/2/...', {...}));
  const json = await response.json();

  const flattened = flatten(json);
}
```


# Why?

Twitter's v2 API has an `includes` object when you add expansions. This is a function to inline your expansions so that it's easier to work with the resulting data.
