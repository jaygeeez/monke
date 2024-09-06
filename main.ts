namespace SpriteKind {
    export const Intro = SpriteKind.create()
    export const Wings = SpriteKind.create()
    export const Tile = SpriteKind.create()
}
/**
 * Powerups
 * 
 * - Big Monke
 * 
 * - Banana Split
 * 
 * - Peeling the love
 * 
 * - Jungle Beats
 */
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.getTileLocation(1, 15), true)
    if (monke.isHittingTile(CollisionDirection.Bottom)) {
        monke.vy = -50
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Tile, function (sprite, otherSprite) {
    randomSpawn(otherSprite)
    randomSpawn(sprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monke.isHittingTile(CollisionDirection.Bottom)) {
        throwing()
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        pause(500)
        banana = sprites.createProjectileFromSprite(assets.image`banana`, monke, throwSpeed[0], throwSpeed[1])
        banana.ay = 100
        banana.lifespan = 3000
        running()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monke.isHittingTile(CollisionDirection.Bottom)) {
        monke.vy = -185
        jumping()
        music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
        pause(700)
        running()
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    throwSpeed = [25, -140]
})
controller.combos.attachCombo("a+b", function () {
    if (gameStart == 0) {
        music.stopAllSounds()
        music.play(music.createSong(assets.song`in game`), music.PlaybackMode.LoopingInBackground)
        gameStart = 1
        titleScreen.setFlag(SpriteFlag.Ghost, true)
        animation.stopAnimation(animation.AnimationTypes.All, titleScreen)
        moveSet(titleScreen, -100)
        info.setScore(0)
        info.setLife(3)
    }
})
function moveSet (mySprite: Sprite, velocity: number) {
    mySprite.setVelocity(velocity, 0)
    mySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    if (mySprite.kind() != SpriteKind.Tile) {
        mySprite.lifespan = 5000
    } else {
        mySprite.lifespan = 10000000000
    }
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Tile, function (sprite, otherSprite) {
    randomSpawn(otherSprite)
    randomSpawn(sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    throwSpeed = [100, -70]
})
function restartGame () {
    gameStart = 0
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
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    monke.vy += 50
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setWallAt(tiles.getTileLocation(1, 15), false)
})
info.onLifeZero(function () {
    music.stopAllSounds()
    game.setGameOverScoringType(game.ScoringType.HighScore)
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Intro, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.confetti, 100)
    otherSprite.sayText("Press A+B to start!", 100, false)
    effects.confetti.startScreenEffect(100)
    scene.cameraShake(2, 100)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    speed += -1
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
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite, effects.starField, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tile, function (sprite, otherSprite) {
    if (otherSprite.image == monke_list[tileNumber]) {
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(tileNumber + 3, 10))
        animation.runMovementAnimation(
        otherSprite,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
        otherSprite.setVelocity(0, 0)
        tileNumber += 1
        if (tileNumber == monke_list.length) {
            tileNumber = 0
            sprite.sayText("beeg monke", 5000, false)
            for (let value of sprites.allOfKind(SpriteKind.Tile)) {
                animation.stopAnimation(animation.AnimationTypes.All, value)
                value.vx = speed
                value.lifespan = 2000
            }
        }
    } else {
        tileNumber = 0
        sprites.destroyAllSpritesOfKind(SpriteKind.Tile, effects.disintegrate, 1000)
    }
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
        moveSet(wings, speed + 3)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 13))
        tiles.placeOnTile(wings, tiles.getTileLocation(15, 13))
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.spray, 100)
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
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.sayText("ow", 100, false)
    scene.cameraShake(4, 500)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    speed += 5
    otherSprite.setVelocity(100, 100)
})
let tileCollect: Sprite = null
let obstacles: Sprite = null
let wings: Sprite = null
let titleScreen: Sprite = null
let gameStart = 0
let banana: Sprite = null
let monke_list: Image[] = []
let throwSpeed: number[] = []
let tileNumber = 0
let monke: Sprite = null
let speed = 0
speed = -100
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
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
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
scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(speed, 0, scroller.BackgroundLayer.Layer1)
music.play(music.createSong(assets.song`Intro`), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`blank`)
restartGame()
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
tiles.placeOnTile(monke, tiles.getTileLocation(1, 11))
monke.ay = 500
scene.cameraFollowSprite(monke)
jumping()
music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
running()
tileNumber = 0
throwSpeed = [100, -70]
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
game.onUpdateInterval(Math.abs(speed * 10), function () {
    if (gameStart >= 1) {
        for (let index = 0; index < gameStart; index++) {
            if (Math.percentChance(50)) {
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
                if (Math.percentChance(33)) {
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
                } else if (Math.percentChance(33)) {
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
                } else {
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
                }
                obstacles.startEffect(effects.trail)
            }
            moveSet(obstacles, speed)
            randomSpawn(obstacles)
        }
        if (Math.percentChance(10)) {
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
        }
    }
})
