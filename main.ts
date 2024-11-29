namespace SpriteKind {
    export const Intro = SpriteKind.create()
    export const Wings = SpriteKind.create()
    export const Tile = SpriteKind.create()
    export const Shadow = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const Extender = SpriteKind.create()
    export const heli = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (power2 == 0) {
        sprites.destroy(otherSprite, effects.warmRadial, 100)
        bananas += 1
        bananaText()
    } else {
        info.changeLifeBy(-1)
        info.changeScoreBy(-1)
        sprite.sayText("ow", 100, false)
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
        if (speed <= -150) {
            speed += 10
        } else {
            speed = -100
        }
        otherSprite.setVelocity(100, 100)
    }
})
function jumping () {
    animation.runImageAnimation(
    monke,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . . f e e e f . . . . . . . 
        f f f f f f f f . . . . . . . . 
        f d e e e f . . c c f . . . . . 
        f d f e e e f c d d d f . . . . 
        f c f e e e e f b b d f f f . . 
        . f f e e e e f e e e e f e f . 
        . . f f f e e e e e e e f e e f 
        . . f e e e e e e d d f f e e f 
        . . f f f e f e d d d f f d e f 
        . . f b d e f d d c d f b d e f 
        . . f d d f f d c d d d f d e f 
        . . f f f f f d c d e f f d f . 
        . . f b d f f d c d e f f f . . 
        . . f d d f f f c d d f b . . . 
        . . f f f . . . c c c . . . . . 
        `,img`
        . f f f f f f f . . . f f f . . 
        f d d c d d d f . . f c d d f . 
        f d d b d d c f f f f f f b f . 
        . f e f f e e f f f e e e f . . 
        . . f f e f e e f e e e e f . . 
        . . . . f e e e e e e e f f f . 
        . . f f f f f e e e e f . f e f 
        . f c c c d e e e f f . . f e f 
        c d d d d c d e e e f . . f e f 
        c d e e d d d d e e f c . f e f 
        c f f f d f f f e e b d c . f f 
        . b f f f b f f f f b d c . . . 
        . c d d d d d d e f f d f . . . 
        . . f d d d d e e e f f . . . . 
        . . . f e e e e e f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `,img`
        . . . . . c c c . . . . . . . . 
        . . . c c b f d f . . . . . . . 
        . . f d d f f e d f . . . f f . 
        . f d d d f f e d f . . f d d f 
        f e d d d f d d d f f f e d d f 
        f e d d d b f d c d e f f b c f 
        f e e d d f f d d e e e f d d f 
        f e e e d f f d e e e e e d d f 
        f e e f f f e e e e e e e c d f 
        . f f f f e e e f e e e c f f f 
        . f f b b f f f f e e e d f f . 
        . f d d d c . . . f e b d f . . 
        . . f c c . . . . . f f f . . . 
        . . . . . f f f f f f f f . . . 
        . . . . . f e e e e f . . . . . 
        . . . . . . f f f f . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . . f e e e f . . . . . . . 
        f f f f f f f f . . . . . . . . 
        f d e e e f . . c c f . . . . . 
        f d f e e e f c d d d f . . . . 
        f c f e e e e f b b d f f f . . 
        . f f e e e e f e e e e f e f . 
        . . f f f e e e e e e e f e e f 
        . . f e e e e e e d d f f e e f 
        . . f f f e f e d d d f f d e f 
        . . f b d e f d d c d f b d e f 
        . . f d d f f d c d d d f d e f 
        . . f f f f f d c d e f f d f . 
        . . f b d f f d c d e f f f . . 
        . . f d d f f f c d d f b . . . 
        . . f f f . . . c c c . . . . . 
        `,img`
        . . . . . . . . . . f f f f . . 
        . . . . . . . . . f c d d f . . 
        f f f f f f f f f f f f e f . . 
        f d b f d b f e f e e e e f . . 
        f d d f d d f e f e e e e f f . 
        . f f f f e e e e e e e f f e f 
        . f f f f f f e e e e f . f e f 
        . f d d d d e e e f f c . f e f 
        c c c c c d d e e e b d c . f f 
        c d d d d c d d e e b d c . . . 
        c d e e d d d d e e d d f . . . 
        . f f f d f f f e e f f . . . . 
        . b f f f b f f f f f . . . . . 
        . . f d d d d e e e f . . . . . 
        . . . f e e e e e f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `,img`
        . . . . . c c c . . . f f f . . 
        . . . b f d d c f f f d d f . . 
        . . f f f e d c d f f d b f . . 
        . f d f f e d c d f f f f f . . 
        f e d f d d d c d f f d d f . . 
        f e d b f d c d d f e d b f . . 
        f e d f f d d d e f e f f f . . 
        f e e f f d d e e e e e e f . . 
        f e e f e e e e e e e f f f . . 
        . f e f e e e e f e e e e f f . 
        . . f f f d b b f e e e e f c f 
        . . . . f d d d c f e e e f d f 
        . . . . . f c c . . f e e e d f 
        . . . . . . . . f f f f f f f f 
        . . . . . . . f e e e f . . . . 
        . . . . . . . f f f f . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f f f f f b f f f b . 
        . . . . f f e e f f f d f f f . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `],
    75,
    false
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.heli, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite, effects.fire, 100)
    info.changeScoreBy(10)
})
function carSprites () {
    if (Math.percentChance(25)) {
        animation.runImageAnimation(
        obstacles,
        [img`
            . . . . . . . e e e e e . . . . 
            . . . . . e e 2 2 2 2 2 e . . . 
            . . . . e e 2 2 2 2 2 2 2 e . . 
            . . . . e 9 4 2 2 2 2 2 4 b e . 
            . . e e 9 9 4 4 2 2 2 2 4 9 b e 
            . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
            e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
            e 2 2 2 9 9 e e e e e e e 9 9 e 
            e 2 2 2 9 b e b b b e b e b 9 e 
            e 2 e e e e b b b b e b b e b e 
            e e 3 3 e e 2 2 2 2 e 2 2 e e e 
            e 3 3 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e f f f e e e e f f f e e 
            . e e f b c c f e e f b c c f . 
            . . . . b b f . . . . b b f . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . e e 2 2 2 2 2 e . . . 
            . . . . e e 2 2 2 2 2 2 2 e . . 
            . . . . e 9 4 4 4 2 2 2 4 b e . 
            . . e e 9 9 4 4 4 4 2 2 4 9 b e 
            . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
            e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
            e 2 2 2 9 9 e e e e e e e 9 9 e 
            e 2 2 2 9 b e b b b e b e b 9 e 
            e 2 e e e e b b b b e b b e b e 
            e e 3 3 e e 2 2 2 2 e 2 2 e e e 
            e 3 3 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e f f f e e e e f f f e e 
            . e e f f f b f e e f f f b f . 
            . . . . c b b . . . . c b b . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . e e 2 2 2 2 2 e . . . 
            . . . . e e 2 2 2 2 2 2 2 e . . 
            . . . . e 9 4 2 2 2 4 4 4 b e . 
            . . e e 9 9 4 2 2 2 4 4 4 9 b e 
            . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
            e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
            e 2 2 2 9 9 e e e e e e e 9 9 e 
            e 2 2 2 9 b e b b b e b e b 9 e 
            e 2 e e e e b b b b e b b e b e 
            e e 3 3 e e 2 2 2 2 e 2 2 e e e 
            e 3 3 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e f f f e e e e f f f e e 
            . e e f c b b f e e f c b b f . 
            . . . . f f f . . . . f f f . . 
            `,img`
            . . . . . . . e e e e e . . . . 
            . . . . . e e 2 2 2 2 2 e . . . 
            . . . . e e 2 2 2 2 2 2 2 e . . 
            . . . . e 9 4 2 2 2 2 2 4 b e . 
            . . e e 9 9 4 2 2 2 2 2 4 9 b e 
            . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e 
            e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
            e 2 2 2 9 9 e e e e e e e 9 9 e 
            e 2 2 2 9 b e b b b e b e b 9 e 
            e 2 e e e e b b b b e b b e b e 
            e e 3 3 e e 2 2 2 2 e 2 2 e e e 
            e 3 3 e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            e e e e f f f e e e e f f f e e 
            . e e f b b c f e e f b b c f . 
            . . . . c f f . . . . c f f . . 
            `],
        100,
        true
        )
    } else if (Math.percentChance(25)) {
        animation.runImageAnimation(
        obstacles,
        [img`
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . 8 8 6 6 6 6 6 8 . . . 
            . . . . 8 8 6 6 6 6 6 6 6 8 . . 
            . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
            . . 8 8 9 9 7 7 6 6 6 6 7 9 b 8 
            . 8 6 6 9 9 7 7 7 6 6 6 7 9 9 8 
            8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
            8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
            8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
            8 6 8 8 8 8 b b b b 8 b b 8 b 8 
            8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
            8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f 8 8 
            . 8 8 f b c c f 8 8 f b c c f . 
            . . . . b b f . . . . b b f . . 
            `,img`
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . 8 8 6 6 6 6 6 8 . . . 
            . . . . 8 8 6 6 6 6 6 6 6 8 . . 
            . . . . 8 9 7 7 7 6 6 6 7 b 8 . 
            . . 8 8 9 9 7 7 7 7 6 6 7 9 b 8 
            . 8 6 6 9 9 7 7 7 7 7 6 7 9 9 8 
            8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
            8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
            8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
            8 6 8 8 8 8 b b b b 8 b b 8 b 8 
            8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
            8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f 8 8 
            . 8 8 f f f b f 8 8 f f f b f . 
            . . . . c b b . . . . c b b . . 
            `,img`
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . 8 8 6 6 6 6 6 8 . . . 
            . . . . 8 8 6 6 6 6 6 6 6 8 . . 
            . . . . 8 9 7 6 6 6 7 7 7 b 8 . 
            . . 8 8 9 9 7 6 6 6 7 7 7 9 b 8 
            . 8 6 6 9 9 7 7 6 6 6 7 7 9 9 8 
            8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
            8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
            8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
            8 6 8 8 8 8 b b b b 8 b b 8 b 8 
            8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
            8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f 8 8 
            . 8 8 f c b b f 8 8 f c b b f . 
            . . . . f f f . . . . f f f . . 
            `,img`
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . 8 8 6 6 6 6 6 8 . . . 
            . . . . 8 8 6 6 6 6 6 6 6 8 . . 
            . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
            . . 8 8 9 9 7 6 6 6 6 6 7 9 b 8 
            . 8 6 6 9 9 7 7 6 6 6 6 7 9 9 8 
            8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
            8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
            8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
            8 6 8 8 8 8 b b b b 8 b b 8 b 8 
            8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
            8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f 8 8 
            . 8 8 f b b c f 8 8 f b b c f . 
            . . . . c f f . . . . c f f . . 
            `],
        100,
        true
        )
    } else if (Math.percentChance(25)) {
        animation.runImageAnimation(
        obstacles,
        [img`
            . . . . . . . a a a a a . . . . 
            . . . . . a a 3 3 3 3 3 a . . . 
            . . . . a a 3 3 3 3 3 3 3 a . . 
            . . . . a 9 d 3 3 3 3 3 d b a . 
            . . a a 9 9 d d 3 3 3 3 d 9 b a 
            . a 3 3 9 9 d d d 3 3 3 d 9 9 a 
            a 3 3 3 9 9 3 d d d d d 3 9 9 a 
            a 3 3 3 9 9 a a a a a a a 9 9 a 
            a 3 3 3 9 b a b b b a b a b 9 a 
            a 3 a a a a b b b b a b b a b a 
            a a 3 3 a a 3 3 3 3 a 3 3 a a a 
            a 3 3 a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a f f f a a a a f f f a a 
            . a a f b c c f a a f b c c f . 
            . . . . b b f . . . . b b f . . 
            `,img`
            . . . . . . . a a a a a . . . . 
            . . . . . a a 3 3 3 3 3 a . . . 
            . . . . a a 3 3 3 3 3 3 3 a . . 
            . . . . a 9 d d d 3 3 3 d b a . 
            . . a a 9 9 d d d d 3 3 d 9 b a 
            . a 3 3 9 9 d d d d d 3 d 9 9 a 
            a 3 3 3 9 9 3 d d d d d 3 9 9 a 
            a 3 3 3 9 9 a a a a a a a 9 9 a 
            a 3 3 3 9 b a b b b a b a b 9 a 
            a 3 a a a a b b b b a b b a b a 
            a a 3 3 a a 3 3 3 3 a 3 3 a a a 
            a 3 3 a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a f f f a a a a f f f a a 
            . a a f f f b f a a f f f b f . 
            . . . . c b b . . . . c b b . . 
            `,img`
            . . . . . . . a a a a a . . . . 
            . . . . . a a 3 3 3 3 3 a . . . 
            . . . . a a 3 3 3 3 3 3 3 a . . 
            . . . . a 9 d 3 3 3 d d d b a . 
            . . a a 9 9 d 3 3 3 d d d 9 b a 
            . a 3 3 9 9 d d 3 3 3 d d 9 9 a 
            a 3 3 3 9 9 3 d d d d d 3 9 9 a 
            a 3 3 3 9 9 a a a a a a a 9 9 a 
            a 3 3 3 9 b a b b b a b a b 9 a 
            a 3 a a a a b b b b a b b a b a 
            a a 3 3 a a 3 3 3 3 a 3 3 a a a 
            a 3 3 a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a f f f a a a a f f f a a 
            . a a f c b b f a a f c b b f . 
            . . . . f f f . . . . f f f . . 
            `,img`
            . . . . . . . a a a a a . . . . 
            . . . . . a a 3 3 3 3 3 a . . . 
            . . . . a a 3 3 3 3 3 3 3 a . . 
            . . . . a 9 d 3 3 3 3 3 d b a . 
            . . a a 9 9 d 3 3 3 3 3 d 9 b a 
            . a 3 3 9 9 d d 3 3 3 3 d 9 9 a 
            a 3 3 3 9 9 3 d d d d d 3 9 9 a 
            a 3 3 3 9 9 a a a a a a a 9 9 a 
            a 3 3 3 9 b a b b b a b a b 9 a 
            a 3 a a a a b b b b a b b a b a 
            a a 3 3 a a 3 3 3 3 a 3 3 a a a 
            a 3 3 a a a a a a a a a a a a a 
            a a a a a a a a a a a a a a a a 
            a a a a f f f a a a a f f f a a 
            . a a f b b c f a a f b b c f . 
            . . . . c f f . . . . c f f . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        obstacles,
        [img`
            . . . . . . . c c c c c . . . . 
            . . . . . c c a a a a a c . . . 
            . . . . c c a a a a a a a c . . 
            . . . . c 9 b a a a a a b b c . 
            . . c c 9 9 b b a a a a b 9 b c 
            . c a a 9 9 b b b a a a b 9 9 c 
            c a a a 9 9 a b b b b b a 9 9 c 
            c a a a 9 9 c c c c c c c 9 9 c 
            c a a a 9 b c b b b c b c b 9 c 
            c a c c c c b b b b c b b c b c 
            c c a a c c a a a a c a a c c c 
            c a a c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c f f f c c c c f f f c c 
            . c c f b c c f c c f b c c f . 
            . . . . b b f . . . . b b f . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . c c a a a a a c . . . 
            . . . . c c a a a a a a a c . . 
            . . . . c 9 b b b a a a b b c . 
            . . c c 9 9 b b b b a a b 9 b c 
            . c a a 9 9 b b b b b a b 9 9 c 
            c a a a 9 9 a b b b b b a 9 9 c 
            c a a a 9 9 c c c c c c c 9 9 c 
            c a a a 9 b c b b b c b c b 9 c 
            c a c c c c b b b b c b b c b c 
            c c a a c c a a a a c a a c c c 
            c a a c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c f f f c c c c f f f c c 
            . c c f f f b f c c f f f b f . 
            . . . . c b b . . . . c b b . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . c c a a a a a c . . . 
            . . . . c c a a a a a a a c . . 
            . . . . c 9 b a a a b b b b c . 
            . . c c 9 9 b a a a b b b 9 b c 
            . c a a 9 9 b b a a a b b 9 9 c 
            c a a a 9 9 a b b b b b a 9 9 c 
            c a a a 9 9 c c c c c c c 9 9 c 
            c a a a 9 b c b b b c b c b 9 c 
            c a c c c c b b b b c b b c b c 
            c c a a c c a a a a c a a c c c 
            c a a c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c f f f c c c c f f f c c 
            . c c f c b b f c c f c b b f . 
            . . . . f f f . . . . f f f . . 
            `,img`
            . . . . . . . c c c c c . . . . 
            . . . . . c c a a a a a c . . . 
            . . . . c c a a a a a a a c . . 
            . . . . c 9 b a a a a a b b c . 
            . . c c 9 9 b a a a a a b 9 b c 
            . c a a 9 9 b b a a a a b 9 9 c 
            c a a a 9 9 a b b b b b a 9 9 c 
            c a a a 9 9 c c c c c c c 9 9 c 
            c a a a 9 b c b b b c b c b 9 c 
            c a c c c c b b b b c b b c b c 
            c c a a c c a a a a c a a c c c 
            c a a c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c f f f c c c c f f f c c 
            . c c f b b c f c c f b b c f . 
            . . . . c f f . . . . c f f . . 
            `],
        100,
        true
        )
    }
    obstacles.startEffect(effects.trail)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.Player).length > 0) {
        tiles.setWallAt(tiles.getTileLocation(1, 15), true)
        if (monke.isHittingTile(CollisionDirection.Bottom)) {
            monke.vy = -50
        }
    }
})
controller.combos.attachCombo("a+b", function () {
    if (gameStart == 0) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`in game`), music.PlaybackMode.LoopingInBackground)
        gameStart = 1
        bananas = 0
        titleScreen.setFlag(SpriteFlag.Ghost, true)
        animation.stopAnimation(animation.AnimationTypes.All, titleScreen)
        moveSet(titleScreen, -100)
        bananaText()
        info.setScore(0)
        info.setLife(3)
    } else if (gameStart == 2) {
        music.stopAllSounds()
        game.gameOver(true)
    }
})
function throwing () {
    animation.runImageAnimation(
    monke,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e f f e e e f . . 
        f f . f e e e e e f f f f f . . 
        f e . f e e f f e e f b d f . . 
        f e . f e e e f f e f d d f f . 
        f e f f e f b b e f f f f f f . 
        f f f f e b d d e e e f d d f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e e d d d d d f . . . 
        . . . f f f f f b f f f f b . . 
        . . f d d e d f f d e e f f c . 
        . f f f d e d d c d d d d c c . 
        f d b f d e d d d c c c c d c . 
        f d d f f e e d d d d d d c . . 
        f f f e f f e e d d d d c . . . 
        . . f e e e f e e f f f . . . . 
        . f f f e e e e e e e f . . . . 
        . f e f f f e e e e e e f . . . 
        . f e f f f f f e e e e f f . . 
        . f e f f f b b f e e f d b f . 
        . f f f f b d d f e e f d d f . 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . . f e e e e e f . . . . 
        . . . . f e d d d d d d f . . . 
        . . . f f f f b f f f f b f . . 
        . . f d e d f f d e e f f d c . 
        . . f f e d d c d d d d c d c . 
        f f f f e d d d c c c c d d c . 
        f d b f f e d d d d d d d c . . 
        f d d f f f e e d d d d c . . . 
        f f f e e e f e e f f f . . . . 
        . f f f e e e e e e e f . . . . 
        . f e f f f e e e e e e f . . . 
        . f e f f f f f e e e e f f . . 
        . f e f f f b b f e e f d b f . 
        . f f f f b d d f f f f d d f . 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d d d d d f . . 
        . . . f d f f f f f f b f f c . 
        . . . c d b e e d f f f e e d c 
        . . . c d b e e d d c d d f f c 
        . . . . f e e e f f f e f d d f 
        . . . . f f f f f e e e f d d f 
        . f f . f f e e e e e f f f f f 
        . f e . f f e e e f f e f f f . 
        . f e f f f b b f f e f d b f . 
        . f e f f b d d f e e f d d f . 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f f b f f . . 
        . . . f d d e e d f f f d d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . f c f e e d d d f f f f c 
        . . . . f e e e e f f f d b f . 
        . . . . f e e f f f e f d d f . 
        . f f . f f f e e e e f f f . . 
        . f e . f f e e e e f e e f . . 
        . f e f f f f f f f e e e f f . 
        . f e f f f b b f e e f d b f . 
        . f f f f b d d e e f f d d f . 
        . . f f f f f f f f f f f f f . 
        `],
    100,
    false
    )
}
function bananaText () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    textSprite = textsprite.create(":" + bananas, 1, 3)
    textSprite.setKind(SpriteKind.Text)
    textSprite.setPosition(40, 139)
    textSprite.setBorder(1, 3, 1)
    textSprite.setIcon(img`
        . . . . . . . . 
        . . 4 e . . . . 
        . . 5 4 . . . . 
        . 4 5 4 . . . . 
        . 4 5 4 . . . . 
        . 4 5 5 d 4 . . 
        . . 4 5 5 5 5 . 
        . . . . 4 4 . . 
        `)
}
function bananaThrow (num: number, num2: number) {
    banana = sprites.createProjectileFromSprite(assets.image`banana`, monke, num, num2)
    banana.ay = 100
    banana.lifespan = 3000
    banana.setFlag(SpriteFlag.GhostThroughWalls, true)
    if (power2 == 0) {
        banana.scale = 2
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Wings)
    randomSpawn(sprite)
    randomSpawn(otherSprite)
})
function moveSet (mySprite: Sprite, velocity: number) {
    mySprite.setVelocity(velocity + randint(-1, 1), 0)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    mySprite.lifespan = 3000
}
info.onCountdownEnd(function () {
    tiles.placeOnTile(monke, tiles.getTileLocation(1, 14))
    sprites.destroyAllSpritesOfKind(SpriteKind.Extender)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`in game`), music.PlaybackMode.LoopingInBackground)
    power2 = 100
    monke.setKind(SpriteKind.Player)
    monke.scale = 1
    shadow.scale = 1
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tile, function (sprite, otherSprite) {
    if (otherSprite.image == monke_list[tileNumber]) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
        otherSprite.lifespan = 120000
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(tileNumber + 3, 10))
        animation.runMovementAnimation(
        otherSprite,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
        otherSprite.setVelocity(1, 1)
        tileNumber += 1
        if (tileNumber == monke_list.length) {
            tileNumber = 0
            power2 = randint(0, 2)
            powerUp(sprite, power2)
            for (let value of sprites.allOfKind(SpriteKind.Tile)) {
                animation.stopAnimation(animation.AnimationTypes.All, value)
                value.vx = speed
                value.lifespan = 2000
            }
        }
    } else {
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
        tileNumber = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Tile, effects.disintegrate, 1000)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Intro, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.confetti, 100)
    otherSprite.sayText("Press A+B to start!", 100, false)
    effects.confetti.startScreenEffect(100)
    scene.cameraShake(2, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.Player).length > 0) {
        if (monke.isHittingTile(CollisionDirection.Bottom)) {
            monke.vy = -185
            jumping()
            shadow.scale = shadow.scale * 0.8
            music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
            pause(600)
            shadow.scale = shadow.scale * 1.25
            running()
        }
    }
})
function restartGame () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    titleScreen = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ..................................................................11111.............................
        .................................................................111111.............................
        ...11111.......111111............................................111111.............................
        ...111111......111111............................................111111.............................
        ...111111......111111............................................111111.............................
        ...1111111.....111111............................................111111.............................
        ...11111111....111111............................................11111..............................
        ...11111111...1111111............................................11111..............................
        ...111111111.11111111............................................11111..............................
        ...111111111.11111111............................................11111..............................
        ...111111111111111111............................................111111.................111111111...
        ...111111111111111111............................................111111................11111111111..
        ...111111111111111111............................................111111...............1111111111111.
        ...111111111111111111............................................111111..............111111111111111
        ...111111111111111111...................................1111111..111111..111111111...111111111111111
        ...111111111111111111.....1111111111111........11111...111111111..1111111111111111...1111111.1111111
        ...11111.111111111111....1111111111111111......11111..1111111111..1111111111111111..1111111...111111
        ...11111.111111.11111...111111111111111111.....11111.11111111111..1111111111111111..1111111...111111
        ...11111..11111.11111...1111111111111111111....11111111111111111..1111111111111111..111111.....11111
        ...11111........11111...1111111111111111111....11111111111111111..11111111111.......111111...1111111
        ...11111........11111...1111111111.111111111...11111111111111111..1111111111........1111111111111111
        ...11111........11111...111111......11111111...11111111111.11111..11111111111.......1111111111111111
        ...11111........11111...11111.........111111...1111111111..11111..111111111111......1111111111111111
        ...11111........11111...11111........1111111...111111111..111111..1111111111111.....1111111111111111
        ...11111........11111...111111......11111111...11111111...111111..11111111111111....1111111111111...
        ...11111........11111...111111111.1111111111...1111111....111111..111111111111111...1111111.........
        ...11111........11111...1111111111111111111....1111111....111111..11111.111111111...1111111.........
        ...11111........11111...111111111111111111.....111111.....111111..11111...1111111...111111111.......
        ...11111........11111....1111111111111111......111111.....11111...11111....111111...11111111111.....
        ................11111.....11111111111111.......111111.....11111...11111.....11111....11111111111....
        .............................111111111.........11111......11111.......................1111111111111.
        ......................................................................................1111111111111.
        ........................................................................................11111111111.
        ..........................................................................................111111111.
        ...........................................................................................11111111.
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.Intro)
    tiles.placeOnTile(titleScreen, tiles.getTileLocation(5, 12))
    animation.runMovementAnimation(
    titleScreen,
    animation.animationPresets(animation.bobbing),
    7500,
    true
    )
    titleScreen.setFlag(SpriteFlag.GhostThroughWalls, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Extender, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeCountdownBy(5)
    sprites.destroy(otherSprite, effects.confetti, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.getTileLocation(1, 15), false)
    pause(200)
    shadow.y = 252
})
function powerUp (mySprite: Sprite, num: number) {
    music.stopAllSounds()
    info.startCountdown(20)
    if (num == 0) {
        effects.clouds.startScreenEffect(5000)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccccccddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddcccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccddddddccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddccddccccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccccdddddddddcdddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddcdddddccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccdddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccc
            ccccccccccccccccddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccdddddddddddddddddddcccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddcccddccccccccccccccccccccccccccccccccccccc
            cccccccccccccdddd1ddddddddddddddddddccdddddccccccccccccccccccccccccccccccccccccccccccccccccccccdddd1ddddddddddddddddddccdddddccccccccccccccccccccccccccccccccccc
            ccccccccccccdddddd1ddddddddddddddddcccdddddcccccccccccccccccccccccccccccccccccccccccccccccccccdddddd1ddddddddddddddddcccdddddccccccccccccccccccccccccccccccccccc
            ccccccccccccdddddddddddddddddddddd1dddddddddccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddd1dddddddddcccccccccccccccccccccccccccccccccc
            ccccccccccccddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccc
            cccccccccccccdddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccc
            ccdddccccdddd1dddddddddddddddddddddddddddddccddcccccccccccccddddccccccccccccccccccccdddccccdddd1dddddddddddddddddddddddddddddccddcccccccccccccddddcccccccccccccc
            cdddddccdddddddddddddddddddddddddddddddddddcddddcccccccccccddddddccccccccccccccccccdddddccdddddddddddddddddddddddddddddddddddcddddcccccccccccddddddccccccccccccc
            cdddddcddddddddddddddddddddddddddddddddddddcddddcccccccccccddddddcdddccccccccccccccdddddcddddddddddddddddddddddddddddddddddddcddddcccccccccccddddddcdddccccccccc
            ccddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccdddddddddccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccdddddddddcccccccc
            cddddddddddddddddddddddddddddddddddddddddddddddcccccccccddddcdddddddddcccccccccccccddddddddddddddddddddddddddddddddddddddddddddddcccccccccddddcdddddddddcccccccc
            ddddddddddddddddddddddddddddddddddddddddddddddddcccccccddddddddddddddcccccccccc1ccdddddddddbbdddddddddddddddddddddddddddddddddddddcccccccddddddddddddddccccccccc
            dddddddddddddddddddddddddddddddddddddddddddddddddcdddccddddddddddddddddddccccccbbbdddddddddbbbdddddddddddddddddddddddddddddddddddddcdddccddddddddddddddddddccccc
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccc1bbbdddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccc
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccbbbbbbbddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccc
            dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddbbbbbbbbbdddddddddddddddddddddddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddd
            dddddddddddddddddddbbbdddddddddddddddddddb11bbbbbbdddddddddddddddddddddddddddb11bbbbdddddbbbbbbbddddddddddddddddddddbbdddddddddddddddddddbb1b1bbbbbddddddddddddd
            ddddddddddddddddddbbbbbddddddddddddddddddbbbbbbb1bdddddddddddddddddddddddddddbbbbbbbdddddbbbbbbbdddddddddddddddddddbbbbddddddddddddddddddbbbbbb11bbddddddddddddd
            dddddddddddddddddbbbbbbddddddddddddddddddbbbbbbbbbddddddddddbddddddddbbbbbdddb1bbbbbdddddbbbbbbbdddddddddddddddddbbbbbbddddddddddddddddddbbbbbbbbbbddddddddddddd
            dddddddddddddddddbbb1bddddddbddddddddddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddddddddddbbb1bddddddbbdddddddddddbbbb1bbbbbddddddddbbddd
            dddddddddddddddddbbbbbbdddddbddddddddddddbbbbbbb1bdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddddddddddbbbbbbdddddbbdddddddddddbbbbbbb1bbddddddddbbddd
            ddddddddbbbddddddbb11bdddddbbbdddddddddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbbddddddbbb1bdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddd
            bdbbddddbbbbbbbbbbb1bbbdddbbbbbddddddddddbbbbbbb1bddb11bbbdbbdddddddddbb1bbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbb1bddddbbbbddddddddddbbbbbb11bbdb11bbbbbbddd
            bbbbdddddb1bb1bbbbbbbbbdddbbbbbddddddddddbbbbbbbbbddbbbb1bdbbddddddddbbbbbbddbb1bbbbdddbbbbbbbbbbbbbddddbb1bbb1bbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbb1bbbbddd
            bb1bdddddbbb1111bbbbbbbdddbbbbbddddddddddbbbbbbbbbddbbbb1bbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbb1bddddbbbb1b11bbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbb1bbbbddd
            bbbbddddbbbbbbbbbbbbbbbbddbbbbbbddbbdbbdbbbbbbbbbbbdb11bbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdb11bbbbbbddd
            bb1bddddbbbbbbbbbbbbbbbbddbbbbbbddbbbbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbb1bddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbddd
            bbbbbdbb1b1bbbbbbbbbbbbbddbbbbbbbdbbbb11bbbbbbbbbbbbb11ffbbbbbbbdbbbddbb1bbddbbbbbbbdddbbbbbbbbbbbbbbbdbbb1bbbbbbbbbbbbbddbbbbbbbdddb11bbbbbbfbbbbbbb11fffbbbdbb
            bbbbbdbbbbbbbbbbbbbbbbbbbb1bbbbbbdbbbbbbbbbfffbbbbbbbbbfffbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbffbbbbbbbbbfffbbbdbb
            bbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbfffbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbffbbbbbbbbbfffbbbbbb
            bbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbfffffffbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdb1bbbbbbfffffffbbbbbfffffbbbbb
            bbbbbfffffffffbbbbbbbbbbbbbbbbbbbdbbbbbbbfffffffbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbdbbbbbbbbfffffffbbbbbfffffbbbbb
            bbbbbfffffffffbbbbbbbbbbbbbbbbbbbdbbbbbbbfffffffbbbbbbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbdbbbbbbbbfffffffbbbbbfffffbbbbb
            bbbbbfddffffffbbbbbbbbbbbbbbbbbbbdbbbbbbbfddffffbbbbbfffffffbb111bbbbbbbbbbbbbbbffbbbbdbbbbbbbbbbbbbbffdfdfffffbbbbbbbbbbbbbbbbbbdbbbbbbbbfffffffbbbbffffffff11b
            bbbbbfffffffdfbbbbbbbbbbbbbbbbbbbdbbbbbbbfffffffbbbbbfffffffbbb11bbbbbbbbbbbbbbffffbbbdbbbbbbbbbbbbbbffffffddffbbbbbbbbbbbbbbbbbbdbbbbbbbbfffffffbbbbffffffffbbb
            bbbbbfffffffffbbbbbbbbbbfbbbbbbbbfffffbbbfdfffffbbbbbfffffffbbbbbbbbbbb1bbbbbffffffbbbdbbbbbbbbbbbbbbffffffffffbbbbbbbbbbbbbbbbbbbffffbbbbfffdfffbbbbffffffffbbb
            bbbbbfffffffffbbbbbbbbbffbbbbbbbbfffffbbbfffffffbbbbbfffffffbb1bbbbbbbbbbbbbbfffdfbbbbbbffbbbbbbbbbbbffffdfffffbbbbbbbbffbbbbbbbbbffffbbbbfffdfffbbbbffffffffb1b
            bbbbbfffffffdfbbbbbbbbbffbbbbbbbbfffffbbbfffffffbbbbbfffffffbb111bbbbbbbbbbbbffffffbbbbbffbbbbbbbbbbbfffffffdffbbbbbbbbffbbbbbbbbffffffbbbfffffffbbbbffffffff11b
            bbbbbfffffffffbbffffffbffbbbbbbbbfffffbbbfffffffbbbbbfffffffbbbbbbbbbff1bbbbbfffdfbbbbbfffbbbbbbbbbbbffffffffffbfffffffffbbbbbbbbffffffbbbfffdfffbbbbffffffffbbb
            bbbbbfffffffdfbbfddfffbffbbbbbbbbbffdffbbfffffffbbbffffffffffbffbbbbfffffffffffffdfbbbbffffbbbbbbbbbbffffffddffbfddffffffbbbbbbbbfffffffbbfffffffbbfffffffffffff
            bbbbbfffffffffbbffffdfbffbbbbbbbbffffffbbffdffffbbbfffffffffffffbbbbffdfffdffffffffbbbbffffbbbbbbbbbbffffffffffbffffdffffbbbbbbbbfffffffbbffffdffbbfffffffffffff
            bbbbbfffffffffbbffffdffffbbbbbbbbffffffbbfffffffbbbfffffffffffdfbbbbffffdfddfffffffbbbbffffbbbbbbbbbbffffffffffbffffdffffbbbbbbbbfffffffbbfffffffbbfffffffffffff
            bffbfffffffffffbfddffffffbbbbbbbbffffffbbfffffffbbbfffffffffffffbbbbffffffffffffffffbbffffffbbbfbbfffffffffffffbfddffffffbbbbbbbbfffffffbbfffffffbbfffffffffffff
            fffffffffffffffbfffffffffbbfbbfbbffffffbbfffffffbbbfffffffffffdfbbbbffffffffffffffffbbffffffbbbffffffffffffffffbfffffffffbbbbbfbbfffffffbbfffffffbbfffffffffffff
            ffddfffffffffffffddddfffffffbfffbbffdffbbfffffffbbbfffffffffffffffbfffdfffffffffffffbbfffffffbbbfddffffffffffffffddfdffffbffbfffbfffffffbbfffffffbbfffffffffffff
            ffffffffffffffffffffffffffffbfffbffffffbbfffffffbbbfffffffffffffffbffffffffffffffffffffffffffbfffffffffffffffffffffffffffbffbfffffffffffbbffffdffbbfffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffffbffffffffffffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffbffffffffffffffffffffffffffbfdffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffdfffffffffffffffffffbfffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffff
            ffffffffffffffffffffffffffdddfffffffffffffffffffffbfffffffffffffffbffffffffffffffffffffffffffbfffffffffffffffffffffffffffddfdfdfffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffddfffffffffffffffffffffbfffffffffffffffbffffffffffffffffffffffffffbffffffffffffffffffffffffffffffdfdfffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffdffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffdffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfdfffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff6ffffffffffffffff6ffffffffffffffffffffff6ffffffffffffffff6ffffffffffffffffffffff6ffffffffffffffff6ffffffffffffffffffffff6ffffffffffffffff6fffff
            ffffff6fff66fffff66ffff6fff6ffff6f66fff6ffffff6fff66fffff66ffff6fff6ffff6f66fff6ffffff6fff66fffff66ffff6fff6ffff6f66fff6ffffff6fff66fffff66ffff6fff6ffff6f66fff6
            ff6fff66f66ff6fff66fff66fff66fff6ff66f66ff6fff66f66ff6fff66fff66fff66fff6ff66f66ff6fff66f66ff6fff66fff66fff66fff6ff66f66ff6fff66f66ff6fff66fff66fff66fff6ff66f66
            ff66ff66f66ff66fff66f66ffff66f6f66f6666fff66ff66f66ff66fff66f66ffff66f6f66f6666fff66ff66f66ff66fff66f66ffff66f6f66f6666fff66ff66f66ff66fff66f66ffff66f6f66f6666b
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            `)
        music.play(music.createSong(hex`0065000408020300001c00010a006400f4016400000400000000000000000000000000050000041a0000002000042024292c20003000049f2427ab3000400003a3a62901001c000f05001202c102c201000405002800000064002800031400060200043c0000000400011d04000800011b08000c00011d14001800011b18001c00015820002400011b2c003000015830003400019f38003c00011d3c004000011b06001c00010a006400f40164000004000000000000000000000000000000000236000000040001140e00100001141000140001141400180001141c002000011420002400019330003400019338003c0001933c004000010f`), music.PlaybackMode.UntilDone)
        music.play(music.createSong(assets.song`NLU`), music.PlaybackMode.LoopingInBackground)
        mySprite.sayText("bigMonke", 2000, true)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 13))
        mySprite.scale = 2
        shadow.scale = 2
    } else if (num == 1) {
        music.play(music.createSong(hex`0030000408020206001c00010a006400f4016400000400000000000000000000000000000000024900000004000320242708000c00039fa3a610001400032427ab1400180003a3a6aa18001c00032225291c002000049f2227ab200024000320242728002c00039fa3a630003400032427ab09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800ea00000001000200060200030001060400050002060a060007000106070008000100080009000200060a000b0001060c000d0002060a0e000f000106100011000200061200130001061400150002060a160017000106170018000100180019000200061a001b000200061c001d0002060a1e001f000106200021000200062200230001062400250002060a260027000106270028000100280029000200062a002b0001062c002d0002060a2e002f000106300031000200063200330001063400350002060a360037000106370038000100380039000200063a003b000200063c003d0002060a3e003f000106`), music.PlaybackMode.LoopingInBackground)
        mySprite.sayText("BANANza", 2000, true)
        effects.blizzard.startScreenEffect(15000)
        bananas += 20
        bananaText()
    } else if (num == 2) {
        music.play(music.createSong(hex`0028000408020301001c000f05001202c102c20100040500280000006400280003140006020004b40000000100012902000300012703000400012205000600011e0700080001290a000b0001270b000c0001220d000e00011e1000110001a51200130001a313001400011e15001600011b1700180001a51a001b0001a31b001c00011e2000210001a322002300012223002400011e25002600011b2700280001572e002f0001192f003000015730003100011632003300015734003500011936003700011b38003900011d3a003b00011e3c003d0001203e003f00012206001c00010a006400f401640000040000000000000000000000000000000002390000000400050f1b1e22251000140005142063272a20002400064b1b1e63272a30003400080a16191d2225292c3c004000080a169a1d22a6292c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800900000000100020006030004000106040005000300060a080009000200060c000d000300060a10001100020006130014000106140015000300060a180019000200061c001d000300060a20002100020006230024000106240025000300060a280029000200062c002d000300060a30003100020006330034000106340035000300060a380039000200063c003d000300060a`), music.PlaybackMode.LoopingInBackground)
        mySprite.sayText("Peel the love <3", 2000, true)
        effects.hearts.startScreenEffect(15000)
        scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333111133333333333333333333333333333333333333333333333333333333333333333333333333333311113333333333333333333333333333333333333333333333333333
            3333333333333333333331111113333333333333333333333333333333333333333333333333333333333333333333333333333111111333333333333333333333333333333333333333333333333333
            3333333333333333333331111113311333333333333333333333333333333333333333333333333333333333333333333333333111111331133333333333333333333333333333333333333333333333
            3333333333333333331111111113111113333333333333333333333333333333333333333333333333333333333333333333111111111311111333333333333333333333333333333333333333333333
            3333333333333333311111111111111113333333333333333333333333333333333333333333333333333333333333333331111111111111111333333333333333333333333333333333333333333333
            3333333333333333111111111111111111133333333333333333333333333333333333333333333333333333333333333311111111111111111113333333333333333333333333333333333333333333
            3333333333333333111111111111111111113333333333333333333333333333333333333333333333333333333333333311111111111111111111333333333333333333333333333333333333333333
            3333333333333333311111111111111111113331133333333333333333333333333333333333333333333333333333333331111111111111111111333113333333333333333333333333333333333333
            3333333333333111191111111111111111113311111333333333333333333333333333333333333333333333333333311119111111111111111111331111133333333333333333333333333333333333
            3333333333331111119111111111111111133311111333333333333333333333333333333333333333333333333333111111911111111111111113331111133333333333333333333333333333333333
            3333333333331111111111111111111111911111111133333333333333333333333333333333333333333333333333111111111111111111111191111111113333333333333333333333333333333333
            3333333333331111111111111111111111111111111133333333333333333333333333333333333333333333333333111111111111111111111111111111113333333333333333333333333333333333
            3333333333333111111111111111111111111111111133333333333333333333333333333333333333333333333333311111111111111111111111111111113333333333333333333333333333333333
            3311133331111911111111111111111111111111111331133333333333331111333333333333333333331113333111191111111111111111111111111111133113333333333333111133333333333333
            3111113311111111111111111111111111111111111311113333333333311111133333333333333333311111331111111111111111111111111111111111131111333333333331111113333333333333
            3111113111111111111111111111111111111111111311113333333333311111131113333333333333311111311111111111111111111111111111111111131111333333333331111113111333333333
            3311111111111111111111111111111111111111111111113333333333333111111111333333333333331111111111111111111111111111111111111111111111333333333333311111111133333333
            3111111111111111111111111111111111111111111111133333333311113111111111333333333333311111111111111111111111111111111111111111111113333333331111311111111133333333
            1111111111111111111111111111111111111111111111113333333111111111111113333333333133111111111331111111111111111111111111111111111111333333311111111111111333333333
            1111111111111111111111111111111111111111111111111311133111111111111111111333333333111111111333111111111111111111111111111111111111131113311111111111111111133333
            1111111111111111111111111111111111111111111111111111111111111111111111111133331333111111111333111111111111111111111111111111111111111111111111111111111111113333
            1111111111111111111111111111111111111111111111111111111111111111111111111133333333331111113333311111111111111111111111111111111111111111111111111111111111113333
            1111111111111111111111111111111111111111133333333311111111111111111111111111133333331111113333311111111111111111111111111111111111111111133333333331111111111111
            1111111111111111111111111111111111111111133333333311111111111111111111111111133333331111113333311111111111111111111111111111111111111111133333333331111111111111
            1111111111111111111333111111111111111111131133333311111111111111111111111111131133331111133333331111111111111111111133111111111111111111133131333331111111111111
            1111111111111111113333311111111111111111133333331311111111111111111111111111133333331111133333331111111111111111111333311111111111111111133333311331111111111111
            1111111111111111133333311111111111111111133333333311111111113111111113333311131333331111133333331111111111111111133333311111111111111111133333333331111111111111
            1111111111111111133313111111311111111111133333333311111111133111111113333311133333331111133333331111111111111111133313111111331111111111133331333331111111133111
            1111111111111111133333311111311111111111133333331311111111133111111113333311133333331111133333331111111111111111133333311111331111111111133333331331111111133111
            1111111133311111133113111113331111111111133333333311333333133111111113333311133333331111133333331111111113311111133313111113331111111111133333333331333333333111
            3133111133333333333133311133333111111111133333331311311333133111111111331331133333331113333333333133111133333333333331311113333111111111133333311331311333333111
            3333111113133133333333311133333111111111133333333311333313133111111113333331133133331113333333333333111133133313333333311113333111111111133333333331333313333111
            3313111113331111333333311133333111111111133333333311333313333111111113333331133333331113333333333313111133331311333333311113333111111111133333333331333313333111
            3333111133333333333333331133333311331331333333333331311333333111111113333331133333331113333333333333111133333333333333331133333311131133333333333331311333333111
            3313111133333333333333331133333311333333333333333331333333333113113113333331133333331113333333333313111133333333333333331133333311133333333333333331333333333111
            3333313313133333333333331133333331333311333333333333311bb333333313331133133113333333111333333333333333133313333333333333113333333111311333333b333333311bbb333133
            3333313333333333333333333313333331333333333bbb333333333bbb3333331333133333311333333311133333333333333313333333333333333333333333313333333333bb333333333bbb333133
            3333313333333333333333333333333331333333333bbb333333333bbb3333333333333333333333333311133333333333333313333333333333333333333333313333333333bb333333333bbb333333
            33333133333333333333333333333333313333333bbbbbbb333333bbbbb3333333333333333333333333331333333333333333133333333333333333333333333131333333bbbbbbb33333bbbbb33333
            33333bbbbbbbbb333333333333333333313333333bbbbbbb333333bbbbb333333333333333333333333333133333333333333bbbbbbbbbb333333333333333333133333333bbbbbbb33333bbbbb33333
            33333bbbbbbbbb333333333333333333313333333bbbbbbb333333bbbbb333333333333333333333333333133333333333333bbbbbbbbbb333333333333333333133333333bbbbbbb33333bbbbb33333
            33333bddbbbbbb333333333333333333313333333bddbbbb33333bbbbbbb33111333333333333333bb3333133333333333333bbdbdbbbbb333333333333333333133333333bbbbbbb3333bbbbbbbb113
            33333bbbbbbbdb333333333333333333313333333bbbbbbb33333bbbbbbb3331133333333333333bbbb333133333333333333bbbbbbddbb333333333333333333133333333bbbbbbb3333bbbbbbbb333
            33333bbbbbbbbb3333333333b33333333bbbbb333bdbbbbb33333bbbbbbb33333333333133333bbbbbb333133333333333333bbbbbbbbbb3333333333333333333bbbb3333bbbdbbb3333bbbbbbbb333
            33333bbbbbbbbb333333333bb33333333bbbbb333bbbbbbb33333bbbbbbb33133333333333333bbbdb333333bb33333333333bbbbdbbbbb33333333bb333333333bbbb3333bbbdbbb3333bbbbbbbb313
            33333bbbbbbbdb333333333bb33333333bbbbb333bbbbbbb33333bbbbbbb33111333333333333bbbbbb33333bb33333333333bbbbbbbdbb33333333bb33333333bbbbbb333bbbbbbb3333bbbbbbbb113
            33333bbbbbbbbb33bbbbbb3bb33333333bbbbb333bbbbbbb33333bbbbbbb333333333bb133333bbbdb33333bbb33333333333bbbbbbbbbb3bbbbbbbbb33333333bbbbbb333bbbdbbb3333bbbbbbbb333
            33333bbbbbbbdb33bddbbb3bb333333333bbdbb33bbbbbbb333bbbbbbbbbb3bb3333bbbbbbbbbbbbbdb3333bbbb3333333333bbbbbbddbb3bddbbbbbb33333333bbbbbbb33bbbbbbb33bbbbbbbbbbbbb
            33333bbbbbbbbb33bbbbdb3bb33333333bbbbbb33bbdbbbb333bbbbbbbbbbbbb3333bbdbbbdbbbbbbbb3333bbbb3333333333bbbbbbbbbb3bbbbdbbbb33333333bbbbbbb33bbbbdbb33bbbbbbbbbbbbb
            33333bbbbbbbbb33bbbbdbbbb33333333bbbbbb33bbbbbbb333bbbbbbbbbbbdb3333bbbbdbddbbbbbbb3333bbbb3333333333bbbbbbbbbb3bbbbdbbbb33333333bbbbbbb33bbbbbbb33bbbbbbbbbbbbb
            3bb3bbbbbbbbbbb3bddbbbbbb33333333bbbbbb33bbbbbbb333bbbbbbbbbbbbb3333bbbbbbbbbbbbbbbb33bbbbbb333b33bbbbbbbbbbbbb3bddbbbbbb33333333bbbbbbb33bbbbbbb33bbbbbbbbbbbbb
            bbbbbbbbbbbbbbb3bbbbbbbbb33b33b33bbbbbb33bbbbbbb333bbbbbbbbbbbdb3333bbbbbbbbbbbbbbbb33bbbbbb333bbbbbbbbbbbbbbbb3bbbbbbbbb33333b33bbbbbbb33bbbbbbb33bbbbbbbbbbbbb
            bbddbbbbbbbbbbbbbddddbbbbbbb3bbb33bbdbb33bbbbbbb333bbbbbbbbbbbbbbb3bbbdbbbbbbbbbbbbb33bbbbbbb333bddbbbbbbbbbbbbbbddbdbbbb3bb3bbb3bbbbbbb33bbbbbbb33bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbb3bbbbbb33bbbbbbb333bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbb3bb3bbbbbbbbbbb33bbbbdbb33bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb33bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbb3bbbbbbbbbbbbbbbb3bbbbb
            bbbbbb3bbb33bbbbb33bbbb3bbb3bbbb3b33bbb3bbbbbb3bbb33bbbbb33bbbb3bbb3bbbb3b33bbb3bbbbbb3bbb33bbbbb33bbbb3bbb3bbbb3b33bbb3bbbbbb3bbb33bbbbb33bbbb3bbb3bbbb3b33bbb3
            bb3bbb33b33bb3bbb33bbb33bbb33bbb3bb33b33bb3bbb33b33bb3bbb33bbb33bbb33bbb3bb33b33bb3bbb33b33bb3bbb33bbb33bbb33bbb3bb33b33bb3bbb33b33bb3bbb33bbb33bbb33bbb3bb33b33
            bb33bb33b33bb33bbb33b33bbbb33b3b33b3333bbb33bb33b33bb33bbb33b33bbbb33b3b33b3333bbb33bb33b33bb33bbb33b33bbbb33b3b33b3333bbb33bb33b33bb33bbb33b33bbbb33b3b33b3333b
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
            `)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    throwSpeed = [100, -70]
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    info.changeLifeBy(1)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . f f f f f . . 
        . . f f 3 3 3 f f f 3 3 3 f f . 
        . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
        . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
        . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
        . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
        . . f f 3 3 3 b b b 3 3 3 f f . 
        . . . f f 3 b b b b b 3 f f . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . f f f f f f . 
        . f f 3 3 3 3 f f f 3 3 3 3 f f 
        . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
        . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
        . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
        . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
        . f 3 3 3 3 b b b b b 3 3 3 3 f 
        . f f 3 3 b b b b b b b 3 3 f f 
        . . f f 3 b b b b b b b 3 f f . 
        . . . f f b b b b b b b f f . . 
        . . . . f f b b b b b f f . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . . . . f 3 3 3 f 3 3 3 f . . . 
        . . . . f 3 3 3 3 3 1 3 f . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 b b b 3 f . . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . b b b b c . . c b b b c . . 
        . b d 1 1 1 3 c c 3 d 1 1 3 c . 
        b d 1 1 1 1 d d 1 3 1 1 1 1 3 c 
        b 1 1 1 1 1 d 1 1 d d 1 1 1 1 b 
        c 3 1 1 d c c 1 1 c c 1 1 1 1 b 
        c 3 3 d 3 . . c c . . d 1 1 d b 
        b 1 1 1 3 . . . . . . 3 d d 3 c 
        b 1 1 1 d b . . . . c d d 3 3 c 
        c 3 1 1 1 1 c . . b 1 1 1 d b c 
        . c d d 1 1 1 c b 3 1 1 1 1 c . 
        . . c 1 1 1 d d 3 3 1 1 1 b . . 
        . . . b 1 3 d 1 1 d d 3 b . . . 
        . . . . b 3 1 1 1 1 d c . . . . 
        . . . . . c b 1 1 b c . . . . . 
        . . . . . . c b b c . . . . . . 
        `,img`
        . . . 3 3 . 3 3 . . . . . . . . 
        . . 3 3 1 3 1 3 3 . . . . . . . 
        . . 3 1 1 1 1 1 3 . . 3 . 3 . . 
        . . . 3 1 1 1 3 . . 3 1 3 1 3 . 
        . . . . 3 1 3 . . . 3 1 1 1 3 . 
        . . . . . 3 . . . . . 3 1 3 . . 
        . . . . . . . . . . . . 3 . . . 
        3 3 . 3 3 . . . . . . . . . . . 
        3 1 1 1 3 . . . . . 3 3 . 3 3 . 
        . 3 1 3 . . . . . . 3 1 3 1 3 . 
        . . 3 . . . . . . . 3 1 1 1 3 . 
        . . . . . 3 . 3 . . . 3 1 3 . . 
        . . . . . 1 1 1 . . . . 3 . . . 
        . . . . . 3 1 3 . . . . . . . . 
        . . . . . . 3 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.hearts, 100)
})
sprites.onOverlap(SpriteKind.Wings, SpriteKind.Wings, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    timer = 0
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    monke.vy += 50
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Tile, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Wings)
    randomSpawn(otherSprite)
    randomSpawn(sprite)
})
function running () {
    animation.runImageAnimation(
    monke,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f f f f f b f f f b . 
        . . . . f f f e f f f d f f f . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f f f f e d d d d d d c . 
        . . . c d f f f f f b f f f b . 
        f f . c d b e e f f f d f f f c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d f e e e e d d d f . . 
        . . . c d b f e e d d d d d c . 
        . . . c d b e f d d d d d d c . 
        . f f . c f e e f f b f f f b c 
        f e f . . f e e f f f d f f f c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f f f f f b f f f b . 
        . . . f d d e e f f f d f f f . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    true
    )
}
info.onLifeZero(function () {
    scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
        9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
        9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
        9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
        9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
        9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
        9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
        9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
        9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
        9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
        9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
        9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
        9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
        9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
        9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
        9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
        9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
        9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
        1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
        1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
        1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
        ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
        ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
        ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
        dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
        dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
        dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
        dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
        dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
        bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
        bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
        bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    info.stopCountdown()
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`Intro`), music.PlaybackMode.LoopingInBackground)
    gameStart = 2
    bananas = 1
    power2 = 100
    game.setGameOverScoringType(game.ScoringType.HighScore)
    monke.sayText("score:", 2000, true)
    sprites.destroyAllSpritesOfKind(SpriteKind.Extender)
    sprites.destroyAllSpritesOfKind(SpriteKind.Wings)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Tile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.heli)
    scoreText = convertToText(info.score())
    scoreList = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 1 . . 1 1 1 1 1 . 
        . 1 1 1 1 1 . . . . . 1 1 1 1 . 
        . 1 1 1 1 . . . . . . 1 1 1 1 . 
        . 1 1 1 . . . . . . . 1 1 1 1 . 
        . 1 1 1 . . . . . . . 1 1 1 . . 
        . 1 1 1 . . . . . . 1 1 1 1 . . 
        . 1 1 1 . . . . . 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 . . . . . 
        . 1 1 1 1 1 . 1 1 1 . . . . . . 
        . 1 1 1 1 . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 . . . . . . 
        . . . . . . . 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 . . 1 1 1 . 
        . . 1 1 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 . . 1 1 1 . . . . 
        . . 1 1 1 . . . . 1 1 1 . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 . . . 1 1 1 . . . 
        . . 1 1 1 . . . . 1 1 1 1 . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . 1 1 1 1 1 . 
        . . . . . . . . . . . 1 1 1 1 . 
        . . . . . . . . . . . 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . 1 1 1 1 . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . 1 1 1 . . . . . . 1 1 1 . . . 
        . 1 1 1 . . . . . . 1 1 1 . . . 
        . 1 1 1 . . . . . 1 1 1 1 . . . 
        . 1 1 1 . . . . . 1 1 1 1 . . . 
        . 1 1 1 1 . . . . 1 1 1 . . . . 
        . 1 1 1 1 . . . . 1 1 1 . . . . 
        . 1 1 1 1 1 . . . 1 1 1 . . . . 
        . . 1 1 1 1 1 . . 1 1 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . . . . . 1 1 1 . . . . 
        . . . . . . . . . 1 1 1 . . . . 
        . . . . . . . . . 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 . . . . . . . . . . . 
        . 1 1 1 1 . . . . . . . . . . . 
        . 1 1 1 1 . . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . 1 1 1 1 1 . . 
        . . . . . . . . 1 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 . . . . . . . . . 
        . . 1 1 1 1 . . . . . . . . . . 
        . . 1 1 1 1 . . . . . . . . . . 
        . . 1 1 1 1 1 1 1 1 1 . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 . . . . 1 1 1 1 . . . 
        . 1 1 1 1 1 . . . 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 . . . . 1 1 1 1 . . . 
        . . . . . . . . . 1 1 1 . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 1 . . . . 
        . . . . . . . 1 1 1 1 . . . . . 
        . . . . . . 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . . . 1 1 1 1 . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . 1 1 1 1 . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 . . . 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 . . . 1 1 1 1 . . . 
        . . 1 1 1 1 . . . 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . 1 1 1 1 . . . . . 1 1 1 . . 
        . . 1 1 1 1 1 . . . . 1 1 1 1 . 
        . . 1 1 1 1 1 1 1 . . 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . . . . 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . 1 1 1 1 . . 
        . 1 1 1 1 1 . . 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        `
    ]
    if (info.score() < 10) {
        scoreSprite = sprites.create(scoreList[info.score()], SpriteKind.Text)
        tiles.placeOnTile(scoreSprite, tiles.getTileLocation(5, 12))
        scoreSprite.scale = 3
        animation.runMovementAnimation(
        scoreSprite,
        animation.animationPresets(animation.bobbing),
        7500,
        true
        )
    } else if (info.score() < 100) {
        scoreSprite = sprites.create(scoreList[parseFloat(scoreText[1])], SpriteKind.Text)
        tiles.placeOnTile(scoreSprite, tiles.getTileLocation(7, 12))
        scoreSprite.scale = 3
        animation.runMovementAnimation(
        scoreSprite,
        animation.animationPresets(animation.bobbing),
        7500,
        true
        )
        scoreSprite2 = sprites.create(scoreList[parseFloat(scoreText[0])], SpriteKind.Text)
        tiles.placeOnTile(scoreSprite2, tiles.getTileLocation(4, 12))
        scoreSprite2.scale = 3
        animation.runMovementAnimation(
        scoreSprite2,
        animation.animationPresets(animation.bobbing),
        7500,
        true
        )
    } else if (info.score() < 1000) {
        scoreSprite = sprites.create(scoreList[parseFloat(scoreText[2])], SpriteKind.Text)
        tiles.placeOnTile(scoreSprite, tiles.getTileLocation(7, 12))
        scoreSprite.scale = 2
        animation.runMovementAnimation(
        scoreSprite,
        animation.animationPresets(animation.bobbing),
        7500,
        true
        )
        scoreSprite2 = sprites.create(scoreList[parseFloat(scoreText[1])], SpriteKind.Text)
        tiles.placeOnTile(scoreSprite2, tiles.getTileLocation(5, 12))
        scoreSprite2.scale = 2
        animation.runMovementAnimation(
        scoreSprite2,
        animation.animationPresets(animation.bobbing),
        7500,
        true
        )
        scoreSprite3 = sprites.create(scoreList[parseFloat(scoreText[0])], SpriteKind.Text)
        tiles.placeOnTile(scoreSprite3, tiles.getTileLocation(3, 12))
        scoreSprite3.scale = 2
        animation.runMovementAnimation(
        scoreSprite3,
        animation.animationPresets(animation.bobbing),
        7500,
        true
        )
    } else {
        game.showLongText("Idk how you did this but you got " + info.score() + ". You are a true gamer!", DialogLayout.Right)
        game.gameOver(true)
        music.stopAllSounds()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sprites.allOfKind(SpriteKind.Player).length > 0) {
        if (monke.isHittingTile(CollisionDirection.Bottom) && bananas > 0) {
            throwing()
            if (gameStart == 1) {
                bananas += -1
                bananaText()
            }
            music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            pause(500)
            bananaThrow(throwSpeed[0], throwSpeed[1])
            running()
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    throwSpeed = [25, -140]
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.heli, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    sprites.destroy(sprite)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `],
    50,
    false
    )
    info.changeScoreBy(10)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.fire, 100)
})
function randomSpawn (mySprite: Sprite) {
    if (Math.percentChance(33)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 14))
    } else if (Math.percentChance(66)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 15))
    } else {
        wings = sprites.create(img`
            . . . . . . . . . 9 9 1 1 9 9 . 
            . . . . . . . . 9 1 1 1 1 1 9 9 
            . . . . . . . 9 1 1 1 1 1 9 9 . 
            . . . . . . 9 1 1 1 1 9 9 9 9 9 
            . . . . . . 9 1 1 1 1 1 1 1 1 1 
            . . . . . 9 9 1 9 9 9 9 1 1 1 1 
            . . . . . 9 1 1 9 1 1 9 1 1 1 9 
            . . . . . . 9 1 1 1 1 9 1 1 9 9 
            . . . . . . 9 1 1 9 9 9 9 9 9 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Wings)
        moveSet(wings, speed + 2)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 13))
        tiles.placeOnTile(wings, tiles.getTileLocation(15, 13))
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    if (power2 == 2) {
        animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
        otherSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.setKind(SpriteKind.Heart)
    } else {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        50,
        false
        )
        otherSprite.setKind(SpriteKind.Wings)
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
        sprites.destroy(otherSprite, effects.fire, 100)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Text, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.confetti, 100)
    otherSprite.sayText("A+B to end!", 100, false)
    effects.confetti.startScreenEffect(100)
    scene.cameraShake(2, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    bananas += 1
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . b . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . b 5 5 5 b . . . . . 
        . . . . . b b 5 5 5 b b . . . . 
        . . b b b b 5 5 5 1 1 b b b b . 
        . . b 5 5 5 5 5 5 1 1 5 5 5 b . 
        . . b d d 5 5 5 5 5 5 5 d d b . 
        . . . b d d 5 5 5 5 5 d d b . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c b 5 5 5 5 5 5 5 b c . . 
        . . . c 5 5 d d b d d 5 5 c . . 
        . . . c 5 d d c c c d d 5 c . . 
        . . . c c c c . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . b b . . . . . . . 
        . . . . . . b d d b . . . . . . 
        . . . . . b d 5 5 d b . . . . . 
        . . . . b b 5 5 5 5 b b . . . . 
        . . . . b 5 5 5 5 5 5 b . . . . 
        b b b b b 5 5 5 5 1 1 d b b b b 
        b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
        b d d 5 5 5 5 5 5 1 1 1 5 d d b 
        . b d d 5 5 5 5 5 5 5 5 d d b . 
        . . b b 5 5 5 5 5 5 5 5 b b . . 
        . . c b 5 5 5 5 5 5 5 5 b c . . 
        . . c 5 5 5 5 d d 5 5 5 5 c . . 
        . . c 5 5 d b b b b d 5 5 c . . 
        . . c 5 d b c c c c b d 5 c . . 
        . . c c c c . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b 5 5 b . . . . . . 
        . . . b b b 5 5 1 1 b b b . . . 
        . . . b 5 5 5 5 1 1 5 5 b . . . 
        . . . . b d 5 5 5 5 d b . . . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . c 5 d d d d 5 c . . . . 
        . . . . c 5 d c c d 5 c . . . . 
        . . . . c c c . . c c c . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . b . . . . . . . 
        . . . . . . b d d c . . . . . . 
        . . . . . b 1 1 d d c . . . . . 
        . . . . b 1 1 1 d 1 1 b . . . . 
        . . . . c 1 1 1 d 1 1 1 c c . . 
        b b b c d 1 1 c c 1 1 d 1 1 b b 
        b d 1 1 d d b c c c b d 1 1 1 b 
        b 1 1 1 1 c c . . c d d 1 1 1 b 
        b 1 1 1 1 c c . . b 1 1 d d c . 
        . b 1 1 d d b c b b 1 1 b c c . 
        . . c b d d b 1 1 b b d b c . . 
        . . c 1 1 d d 1 1 1 d d d b . . 
        . b d 1 1 1 d 1 1 d 1 1 1 d b . 
        . b d 1 1 1 d b b d 1 1 1 1 b . 
        . . b 1 1 d c c b b d 1 1 d b . 
        . . b b b b . . . b b b b b b . 
        `,img`
        . . . . . b b . . . . . . . . . 
        . . . . b 5 b b . . . . . . . . 
        . . b b 5 5 5 b b b . . . . . . 
        . b 5 5 5 5 5 5 5 b . . b . . . 
        . . b b 5 5 5 b b . . b 5 b . . 
        . . b 5 5 b 5 5 b . b 5 5 5 b . 
        . . b 5 b b b 5 b . . b 5 b . . 
        . . b b . . b b b . . b b b . . 
        . b 5 b b . . . . . b 5 b . . . 
        b 5 5 5 b b . . . b b 5 b b . . 
        . b 5 b b 5 b . b 5 5 5 5 5 b . 
        . b b b 5 5 5 b b b 5 5 5 b b . 
        . . b 5 5 5 5 5 b b 5 b 5 b . . 
        . . . b 5 5 5 b . . b b b . . . 
        . . . b 5 b 5 b . . . . . . . . 
        . . . b b b b b . . . . . . . . 
        `],
    50,
    false
    )
    bananaText()
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.starField, 100)
})
let helicopter: Sprite = null
let clock: Sprite = null
let tileCollect: Sprite = null
let wings: Sprite = null
let scoreSprite3: Sprite = null
let scoreSprite2: Sprite = null
let scoreSprite: Sprite = null
let scoreList: Image[] = []
let scoreText = ""
let banana: Sprite = null
let textSprite: TextSprite = null
let titleScreen: Sprite = null
let obstacles: Sprite = null
let monke_list: Image[] = []
let power2 = 0
let bananas = 0
let tileNumber = 0
let throwSpeed: number[] = []
let monke: Sprite = null
let shadow: Sprite = null
let speed = 0
let timer = 0
let gameStart = 0
gameStart = 0
timer = 0
speed = -100
let cycles = 1
music.stopAllSounds()
music.setVolume(255)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
    9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
    9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
    9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
    9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
    9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
    9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
    9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
    9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
    9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
    9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
    9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
    9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
    9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
    9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
    9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
    9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
    9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
    1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
    1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
    1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
    111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
    11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
    11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
    11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
    11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
    d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
    dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
    dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
    ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
    ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
    ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
    ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
    bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
    bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
    bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
    111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
scroller.scrollBackgroundWithSpeed(speed + 80, 0, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(speed, 0, scroller.BackgroundLayer.Layer2)
music.play(music.createSong(assets.song`Intro`), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`blank`)
restartGame()
shadow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c c c c c c c c c . . . 
    . . c c c c c c c c c c c c . . 
    . c c c c c c c c c c c c c c . 
    . c c c c c c c c c c c c c c . 
    . c c c c c c c c c c c c c c . 
    . . c c c c c c c c c c c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Player)
shadow.setFlag(SpriteFlag.Ghost, true)
animation.runImageAnimation(
shadow,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . c c c c c c c c c . . . . 
    . . c c c c c c c c c c c . . . 
    . . c c c c c c c c c c c . . . 
    . . c c c c c c c c c c c . . . 
    . . . c c c c c c c c c . . . . 
    . . . . c c c c c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c c c c c c . . . . . . 
    . . c c c c c c c c c . . . . . 
    . c c c c c c c c c c c . . . . 
    . c c c c c c c c c c c . . . . 
    . c c c c c c c c c c c . . . . 
    . . c c c c c c c c c . . . . . 
    . . . c c c c c c c . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c c c c c c c c . . . . 
    . . c c c c c c c c c c c . . . 
    . c c c c c c c c c c c c c . . 
    . c c c c c c c c c c c c c . . 
    . c c c c c c c c c c c c c . . 
    . . c c c c c c c c c c c . . . 
    . . . c c c c c c c c c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . c c c c c c c . . . 
    . . . . . c c c c c c c c c . . 
    . . . . . c c c c c c c c c . . 
    . . . . . c c c c c c c c c . . 
    . . . . . . c c c c c c c . . . 
    . . . . . . . c c c c c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c . . . . . 
    . . . c c c c c c c c c . . . . 
    . . c c c c c c c c c c c . . . 
    . . c c c c c c c c c c c . . . 
    . . c c c c c c c c c c c . . . 
    . . . c c c c c c c c c . . . . 
    . . . . c c c c c c c . . . . . 
    `],
99,
true
)
monke = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(monke, tiles.getTileLocation(1, 14))
monke.ay = 500
scene.cameraFollowSprite(monke)
jumping()
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
running()
throwSpeed = [100, -70]
tileNumber = 0
bananas = 1
power2 = 100
monke_list = [
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 e e e e e e e e e e e e e e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 d 5 5 4 4 4 4 d 5 5 4 e 4 
    4 e 4 d 5 5 5 4 4 d 5 5 5 4 e 4 
    4 e 4 d 5 5 5 5 5 5 5 5 5 4 e 4 
    4 e 4 d 5 5 5 5 5 5 5 5 5 4 e 4 
    4 e 4 d 5 4 5 5 5 5 4 5 5 4 e 4 
    4 e 4 d 5 4 4 5 5 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e e e e e e e e e e e e e e 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 e e e e e e e e e e e e e e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 4 d d d d 5 5 5 5 4 4 e 4 
    4 e 4 5 5 5 5 5 5 5 5 5 5 4 e 4 
    4 e 4 5 5 5 4 4 4 4 5 5 5 4 e 4 
    4 e 4 5 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
    4 e 4 d 5 5 4 4 4 4 5 5 5 4 e 4 
    4 e 4 d 5 5 5 5 5 5 5 5 5 4 e 4 
    4 e 4 4 d 5 5 5 5 5 5 5 4 4 e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e e e e e e e e e e e e e e 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 e e e e e e e e e e e e e e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 5 d d d 4 4 4 4 d d 4 e 4 
    4 e 4 5 5 5 5 5 4 4 4 d 5 4 e 4 
    4 e 4 5 5 4 5 5 5 4 4 5 5 4 e 4 
    4 e 4 5 5 4 5 5 5 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 5 5 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 5 5 4 4 5 5 4 e 4 
    4 e 4 d 5 4 4 5 5 5 4 5 5 4 e 4 
    4 e 4 d 5 4 4 5 5 5 4 5 5 4 e 4 
    4 e 4 d 5 4 4 4 5 5 d 5 5 4 e 4 
    4 e 4 d 5 4 4 4 4 5 5 5 5 4 e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e e e e e e e e e e e e e e 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 e e e e e e e e e e e e e e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 d d d 4 4 4 4 5 d d 4 e 4 
    4 e 4 5 5 5 4 4 4 d 5 5 5 4 e 4 
    4 e 4 5 5 5 4 4 d 5 5 4 4 4 e 4 
    4 e 4 5 5 5 5 5 5 5 4 4 4 4 e 4 
    4 e 4 5 5 5 5 4 4 4 4 4 4 4 e 4 
    4 e 4 5 5 5 5 4 4 4 4 4 4 4 e 4 
    4 e 4 5 5 5 5 5 5 5 4 4 4 4 e 4 
    4 e 4 d 5 5 4 5 5 5 5 4 4 4 e 4 
    4 e 4 d 5 5 4 4 5 5 5 5 5 4 e 4 
    4 e 4 d 5 5 4 4 4 d 5 5 5 4 e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e e e e e e e e e e e e e e 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 e e e e e e e e e e e e e e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 5 5 5 5 5 d d d d d 4 e 4 
    4 e 4 5 5 5 5 5 5 5 5 5 5 4 e 4 
    4 e 4 5 5 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 5 5 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 5 5 5 5 5 d d d 4 4 4 e 4 
    4 e 4 5 5 5 5 5 5 5 5 4 4 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 d 5 4 4 4 4 4 4 4 4 4 e 4 
    4 e 4 d 5 5 5 5 5 5 5 5 d 4 e 4 
    4 e 4 d 5 5 5 5 5 5 5 5 5 4 e 4 
    4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
    4 e e e e e e e e e e e e e e 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `
]
game.onUpdate(function () {
    scroller.scrollBackgroundWithSpeed(speed + 80, 0, scroller.BackgroundLayer.Layer0)
    scroller.scrollBackgroundWithSpeed(speed, 0, scroller.BackgroundLayer.Layer2)
    if (monke.isHittingTile(CollisionDirection.Bottom)) {
        shadow.setPosition(monke.x, monke.y + 4)
    }
})
game.onUpdateInterval(210, function () {
    if (power2 == 1) {
        bananaThrow(throwSpeed[0], throwSpeed[1])
    }
})
/**
 * By Josh Garvida
 */
game.onUpdateInterval(1000, function () {
    if (gameStart == 1) {
        info.changeScoreBy(1)
        if (info.score() > 999) {
            game.splash("You are a Monke Master!!!")
            game.setGameOverEffect(true, effects.confetti)
            game.gameOver(true)
        }
        if (info.score() >= 50) {
            cycles = 2
        } else if (info.score() >= 100) {
            cycles = 4
        }
        if (speed > -220) {
            speed += -1
        }
        if (Math.percentChance(18) && info.countdown() <= 0) {
            tileCollect = sprites.create(img`
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                4 e e e e e e e e e e e e e e 4 
                4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
                4 e 4 d 5 5 4 4 4 4 d 5 5 4 e 4 
                4 e 4 d 5 5 5 4 4 d 5 5 5 4 e 4 
                4 e 4 d 5 5 5 5 5 5 5 5 5 4 e 4 
                4 e 4 d 5 5 5 5 5 5 5 5 5 4 e 4 
                4 e 4 d 5 4 5 5 5 5 4 5 5 4 e 4 
                4 e 4 d 5 4 4 5 5 4 4 5 5 4 e 4 
                4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
                4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
                4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
                4 e 4 d 5 4 4 4 4 4 4 5 5 4 e 4 
                4 e 4 4 4 4 4 4 4 4 4 4 4 4 e 4 
                4 e e e e e e e e e e e e e e 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                `, SpriteKind.Tile)
            tileCollect.setImage(monke_list[tileNumber])
            tileCollect.startEffect(effects.rings, 1000)
            moveSet(tileCollect, speed)
            randomSpawn(tileCollect)
        } else if (Math.percentChance(5) && info.countdown() > 0) {
            clock = sprites.create(img`
                . . . . . . f f f f . . . . . . 
                . . . . f f 1 1 1 1 f f . . . . 
                . . . f 1 1 1 1 f 1 1 1 f . . . 
                . . f 1 1 1 1 1 f 1 1 1 1 f . . 
                . f 1 1 1 1 1 1 f 1 1 1 1 1 f . 
                . f 1 1 1 1 1 1 f 1 1 1 1 1 f . 
                f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 f 
                f 1 1 f f f f f 2 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 2 1 1 1 1 1 f 
                . f 1 1 1 1 1 1 1 1 2 1 1 1 f . 
                . f 1 1 1 1 1 1 1 1 1 2 1 1 f . 
                . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 1 1 1 1 1 1 1 f . . . 
                . . . . f f 1 1 1 1 f f . . . . 
                . . . . . . f f f f . . . . . . 
                `, SpriteKind.Extender)
            moveSet(clock, speed)
            randomSpawn(clock)
        }
        for (let index = 0; index < cycles; index++) {
            if (Math.percentChance(30)) {
                obstacles = sprites.create(img`
                    . . . . . . . b b . . . . . . . 
                    . . . . . . b d d b . . . . . . 
                    . . . . . b d 5 5 d b . . . . . 
                    . . . . b b 5 5 5 5 b b . . . . 
                    . . . . b 5 5 5 5 5 5 b . . . . 
                    b b b b b 5 5 5 5 1 1 d b b b b 
                    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
                    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
                    . b d d 5 5 5 5 5 5 5 5 d d b . 
                    . . b b 5 5 5 5 5 5 5 5 b b . . 
                    . . c b 5 5 5 5 5 5 5 5 b c . . 
                    . . c 5 5 5 5 d d 5 5 5 5 c . . 
                    . . c 5 5 d b b b b d 5 5 c . . 
                    . . c 5 d b c c c c b d 5 c . . 
                    . . c c c c . . . . c c c c . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Food)
                obstacles.startEffect(effects.starField)
            } else {
                obstacles = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 6 6 6 6 6 6 6 6 . . 
                    . . . . . 6 c 6 6 6 6 6 6 9 6 . 
                    . . . . 6 c c 6 6 6 6 6 6 9 c 6 
                    . . d 6 9 c c 6 9 9 9 9 9 9 c c 
                    . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
                    . 6 6 6 9 b 8 8 b b b 8 b b 8 6 
                    . 6 6 6 6 6 8 b b b b 8 b b b 8 
                    . 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
                    . 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
                    . d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
                    . 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
                    . 8 8 8 8 f f f 8 8 8 8 f f f f 
                    . . . 8 f f f f f 8 8 f f f f f 
                    . . . . f f f f . . . . f f f . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Enemy)
                carSprites()
            }
            moveSet(obstacles, speed)
            randomSpawn(obstacles)
        }
        if (Math.percentChance(5)) {
            helicopter = sprites.create(img`
                ....ffffff.........ccc..
                ....ff22ccf.......cc4f..
                .....ffccccfff...cc44f..
                ....cc24442222cccc442f..
                ...c9b4422222222cc422f..
                ..c999b2222222222222fc..
                .c2b99111b222222222c22c.
                c222b111992222ccccccc22f
                f222222222222c222ccfffff
                .f2222222222442222f.....
                ..ff2222222cf442222f....
                ....ffffffffff442222c...
                .........f2cfffc2222c...
                .........fcc2ffffffff...
                ..........fc2ffff.......
                ...........fffff........
                `, SpriteKind.heli)
            tiles.placeOnTile(helicopter, tiles.getTileLocation(15, 10))
            moveSet(helicopter, speed)
            animation.runImageAnimation(
            helicopter,
            [img`
                ....ffffff.........ccc..
                ....ff22ccf.......cc4f..
                .....ffccccfff...cc44f..
                ....cc24442222cccc442f..
                ...c9b4422222222cc422f..
                ..c999b2222222222222fc..
                .c2b99111b222222222c22c.
                c222b111992222ccccccc22f
                f222222222222c222ccfffff
                .f2222222222442222f.....
                ..ff2222222cf442222f....
                ....ffffffffff442222c...
                .........f2cfffc2222c...
                .........fcc2ffffffff...
                ..........fc2ffff.......
                ...........fffff........
                `,img`
                ....ffffff.........ccc..
                ....ff22ccf.......cc4f..
                .....ffccccfff...cc44f..
                ....cc24442222cccc442f..
                ...c9b4422222222cc422f..
                ..c9999b222222222222fc..
                .c2b991119222222222c22c.
                c2222b11992222ccccccc22f
                f222222222222c222ccfffff
                .f2222222222444222f.....
                ..ff2222222cf444222f....
                ....ffffffffff444222c...
                .........f2cfffc2222c...
                .........fcc2ffffffff...
                ..........fc2ffff.......
                ...........fffff........
                `,img`
                ...ffffff..........ccc..
                ...ff22ccff.......c44f..
                ....fffccccfff...c442f..
                ....cc24442222ccc4422f..
                ...c99b222222222cc22fc..
                ..c999111b222222222222c.
                .c2bb11199222ccccccc222f
                c22222222222c222cccfffff
                f22222222222442222ccc...
                .f222222222224442222c...
                ..ff2222222cffc44222c...
                ....fffffffcffffcccc....
                .........f2c2ffff.......
                .........fcc2ffff.......
                ..........ffffff........
                ........................
                `,img`
                ...fffffff.........ccc..
                ...ff22ccff.......cc4f..
                ....fffccccfff...cc44f..
                ....cc24442222cccc442f..
                ...c9b4422222222cc422f..
                ..c999b2222222222222fc..
                .c2b99111b222222222c22c.
                c222b111992222ccccccc22f
                f222222222222c222ccfffff
                .f2222222222442222f.....
                ..ff2222222cf442222f....
                ....ffffffffff442222c...
                .........f2cfffc2222c...
                .........fcc2ffffffff...
                ..........fc2ffff.......
                ...........fffff........
                `,img`
                ....ffffff..............
                ....ff22ccf.........cf..
                .....ffccccfff.....c4f..
                ....cc22222222ccccc44f..
                ...c9b244422222ccc442f..
                ..c99944222222222242fc..
                .c2b9992222222222222fcc.
                c222b1111b22222222cc22cf
                f2222211992222ccccccc22f
                .f22222222222c222cffffff
                ..ff2222222c442222ff....
                ....fffffffff442222fc...
                .........f2cff442222c...
                .........fccfffc2222c...
                ..........fc2ffffffff...
                ...........c2fff........
                `,img`
                ....ffffff..............
                ....ff2cccf.........cf..
                .....ff2cccfff.....c4f..
                ....cc22222222ccccc44f..
                ...c9b244422222ccc442f..
                ..c99944222222222242fc..
                .c2b9912222222222222fcc.
                c222b1111b22222222cc22cf
                f2222221992222ccccccc22f
                .f22222222222c222cffffff
                ..ff2222222c442222ff....
                ....fffffffff442222fc...
                .........f2cff442222c...
                .........fccfffc2222c...
                ..........fc2ffffffff...
                ...........c2fff........
                `],
            500,
            true
            )
        }
    } else {
        timer += 1000
        if (game.runtime() >= 120000 && timer >= 120000 && gameStart != 2) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Intro)
            tiles.placeOnTile(monke, tiles.getTileLocation(4, 14))
            tiles.placeOnTile(shadow, tiles.getTileLocation(4, 14))
            game.showLongText("Monke is patiently waiting for your return :)", DialogLayout.Top)
            game.reset()
        }
    }
})
