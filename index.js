'use strict';

const flatten = (response) => {
  const data = Array.isArray(response.data) ? response.data : [response.data];
  const users = response.includes?.users;
  const media = response.includes?.media;
  const polls = response.includes?.polls;
  const places = response.includes?.places;
  const tweets = response.includes?.tweets;

  const match = (array, key, value) => array.find(i => i[key] === value) || {};

  const expand = (payload) => ({
    ...payload,
    ...(payload.author_id && users && {author: match(users, 'id', payload.author_id)}),
    ...(payload.attachments?.media_keys && media && {attachments: {...payload.attachments, media: payload.attachments.media_keys.map(k => match(media, 'media_key', k))}}),
    ...(payload.attachments?.poll_ids && polls && {attachments: {...payload.attachments, polls: payload.attachments.poll_ids.map(k => match(polls, 'id', k))}}),
    ...(payload.geo?.place_id && places && {geo: {...payload.geo, ...match(places, 'id', payload.geo.place_id)}}),
    ...(payload.in_reply_to_user_id && users && {replied_to_user: match(users, 'id', payload.in_reply_to_user_id)}),
    ...(payload.entities?.mentions && users && {entities: {...payload.entities, mentions: payload.entities.mentions.map(m => ({...m, ...match(users, 'username', m.username)}))}})
  });

  return data.map(d => ({
    ...expand(d),
    ...(d.pinned_tweet_id && tweets && {pinned_tweet: expand(match(tweets, 'id', d.pinned_tweet_id))}),
    ...(d.referenced_tweets && tweets && {referenced_tweets: d.referenced_tweets.map(r => ({...r, ...expand(match(tweets, 'id', r.id))}))})
  }));
};

export { flatten };
