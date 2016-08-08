var Lab = require('lab')
var Code = require('code')
var randomEmoji = require('../')
var lab = exports.lab = Lab.script()

lab.experiment('Random', function () {
  lab.test('Returns some emoji without options', function (done) {
    var emoji = randomEmoji.random()
    Code.expect(Array.isArray(emoji)).to.equal(true)
    Code.expect(emoji.length).to.equal(3)
    Code.expect(typeof emoji[0].name).to.equal('string')
    done()
  })

  lab.test('Returns some emoji with options', function (done) {
    var emoji = randomEmoji.random({
      count: 5,
      host: '/images/'
    })
    Code.expect(emoji.length).to.equal(5)
    Code.expect(emoji[0].imageSrc.indexOf('/images/')).to.equal(0)
    done()
  })

  lab.test('Returns some emoji with host name with trailing slash', function (done) {
    var emoji = randomEmoji.random({
      count: 5,
      host: '/images'
    })
    Code.expect(emoji.length).to.equal(5)
    Code.expect(emoji[0].imageSrc.indexOf('/images/')).to.equal(0)
    done()
  })

  lab.test('Returns some emoji with height', function (done) {
    var emoji = randomEmoji.random({
      height: '100'
    })
    Code.expect(emoji[0].image.indexOf('height="100"')).to.not.equal(-1)
    done()
  })
})

lab.experiment('Haikus', function () {
  lab.test('Returns a haiku without options', function (done) {
    var emoji = randomEmoji.haiku()
    Code.expect(Array.isArray(emoji)).to.equal(true)
    Code.expect(emoji.length).to.equal(3)
    Code.expect(Array.isArray(emoji[0])).to.equal(true)
    Code.expect(Array.isArray(emoji[1])).to.equal(true)
    Code.expect(Array.isArray(emoji[2])).to.equal(true)
    done()
  })

  lab.test('Returns a haiku with options', function (done) {
    var emoji = randomEmoji.haiku({
      host: '/images/',
      height: 75
    })
    Code.expect(emoji[0][0].image.indexOf('height="75"')).to.not.equal(-1)
    Code.expect(emoji[0][0].imageSrc.indexOf('/images/')).to.equal(0)
    done()
  })
})
