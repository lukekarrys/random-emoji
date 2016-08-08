var emojis = require('emoji-named-characters')
var shuffle = require('lodash.shuffle')
var emojiNames = Object.keys(emojis)

function imgSrc (host, name) {
  if (!host) {
    host = '/'
  } else {
    host = host.slice(-1) === '/' ? host : host + '/'
  }
  return host + encodeURIComponent(name) + '.png'
}

function emojiImage (host, name, height) {
  return '<img class="emoji" title="' + name + '" alt="' + name + '" src="' + imgSrc(host, name) + '"' + ' height="' + (height || 64) + '"' + ' />'
}

function mapEmoji (options) {
  return function (emoji) {
    return {
      character: emojis[emoji].character,
      name: emoji,
      image: emojiImage(options.host, emoji, options.height),
      imageSrc: imgSrc(options.host, emoji)
    }
  }
}

exports.random = function (options) {
  if (!options) {
    options = {}
  }
  return shuffle(emojiNames.slice(0)).slice(0, options.count || 3).map(mapEmoji(options))
}

function fetchSyllables (count, randomEmoji) {
  var result = []
  var current = 0
  var currentEmoji
  var emojiCount

  while (current < count) {
    currentEmoji = randomEmoji.pop()
    emojiCount = emojis[currentEmoji].syllables

    if (emojiCount === 0 || (current + emojiCount) > count) {
      continue
    }

    result.push(currentEmoji)
    current += emojiCount
  }

  return result
}

exports.haiku = function (options) {
  var asEmoji = mapEmoji(options || {})
  var randomEmoji = shuffle(emojiNames.slice(0))
  return [
    fetchSyllables(5, randomEmoji).map(asEmoji),
    fetchSyllables(7, randomEmoji).map(asEmoji),
    fetchSyllables(5, randomEmoji).map(asEmoji)
  ]
}
