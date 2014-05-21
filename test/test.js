var Lab = require('lab');
var randomEmoji = require('../');


Lab.experiment('Random', function () {
    Lab.test('Returns some emoji without options', function (done) {
        var emoji = randomEmoji.random();
        Lab.expect(Array.isArray(emoji)).to.equal(true);
        Lab.expect(emoji.length).to.equal(3);
        Lab.expect(typeof emoji[0].name).to.equal('string');
        done();
    });

    Lab.test('Returns some emoji with options', function (done) {
        var emoji = randomEmoji.random({
            count: 5,
            host: '/images/'
        });
        Lab.expect(emoji.length).to.equal(5);
        Lab.expect(emoji[0].imageSrc.indexOf('/images/')).to.equal(0);
        done();
    });

    Lab.test('Returns some emoji with host name with trailing slash', function (done) {
        var emoji = randomEmoji.random({
            count: 5,
            host: '/images'
        });
        Lab.expect(emoji.length).to.equal(5);
        Lab.expect(emoji[0].imageSrc.indexOf('/images/')).to.equal(0);
        done();
    });

    Lab.test('Returns some emoji with height', function (done) {
        var emoji = randomEmoji.random({
            height: '100'
        });
        Lab.expect(emoji[0].image.indexOf('height="100"')).to.not.equal(-1);
        done();
    });
});


Lab.experiment('Haikus', function () {
    Lab.test('Returns a haiku without options', function (done) {
        var emoji = randomEmoji.haiku();
        Lab.expect(Array.isArray(emoji)).to.equal(true);
        Lab.expect(emoji.length).to.equal(3);
        Lab.expect(Array.isArray(emoji[0])).to.equal(true);
        Lab.expect(Array.isArray(emoji[1])).to.equal(true);
        Lab.expect(Array.isArray(emoji[2])).to.equal(true);
        done();
    });

    Lab.test('Returns a haiku with options', function (done) {
        var emoji = randomEmoji.haiku({
            host: '/images/',
            height: 75
        });
        Lab.expect(emoji[0][0].image.indexOf('height="75"')).to.not.equal(-1);
        Lab.expect(emoji[0][0].imageSrc.indexOf('/images/')).to.equal(0);
        done();
    });
});