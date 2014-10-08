random-emoji
=================

[![NPM](https://nodei.co/npm/random-emoji.png)](https://nodei.co/npm/random-emoji/)
[![Build Status](https://travis-ci.org/lukekarrys/random-emoji.png?branch=master)](https://travis-ci.org/lukekarrys/random-emoji)


Get random emoji!


## Install

`npm install random-emoji`

## Usage

### Basic

```js
var randomEmoji = require('random-emoji');

// Array of five random emoji
randomEmoji.random({count: 5});

// Array of lines for an emoji haiku
randomEmoji.haiku({
    host: '/images'
});

// Each array is made up of emoji objects
[{
    "character": "🐳",
    "name": "whale",
    "image": "<img class=\"emoji\" title=\"whale\" alt=\"whale\" src=\"/images/whale.png\" height=\"64\" />",
    "imageSrc": "/images/whale.png"
},
{
    "character": "🍮",
    "name": "custard",
    "image": "<img class=\"emoji\" title=\"custard\" alt=\"custard\" src=\"/images/custard.png\" height=\"64\" />",
    "imageSrc": "/images/custard.png"
}]
```

## Options

```js
{
    // The number of emojis to return (only for `random`)
    count: 3,
    // The height of each image in the returned image tag (defaults to '64')
    height: 64,
    // The host will be prepened to the src in the image tag (defaults to '/')
    host: '/'
}
```

## Methods

- `random()`: Random emojis!
- `haiku()`: Returns a three item array made up enough emojis in each so the names contain 5, 7, 5 syllables


## Credits

Credit to [nlf](https://github.com/nlf) for [all the haiku code](https://github.com/lukekarrys/emoji-fortune/commit/6de54504f8c505bc66f8ec0df2dfef74b0da248c).


## License

MIT