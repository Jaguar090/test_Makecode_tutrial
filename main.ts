controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 3; index++) {
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row - 1)))) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row - 1))
            pause(100)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite)
    coinNum += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    custom.repeatTimes(3, function () {
        custom.moveDownOne()
    })
})
let coinNum = 0
let mySprite: Sprite = null
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`レベル1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
for (let 値 of tiles.getTilesByType(assets.tile`myTile`)) {
    tiles.placeOnTile(sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.Food), 値)
    tiles.setTileAt(値, assets.tile`transparency16`)
    coinNum += 1
}
forever(function () {
    custom.checkGoal()
})
