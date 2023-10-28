controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = 120
    mySprite.ay = 200
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.isHittingTile(CollisionDirection.Right) || mySprite.isHittingTile(CollisionDirection.Left))) {
        mySprite.vy = -120
        mySprite.startEffect(effects.spray, 500)
    }
})
let distance = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`player`, SpriteKind.Player)
mySprite.setPosition(40, 105)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setStayInScreen(false)
let baddie = sprites.create(assets.image`baddie`, SpriteKind.Enemy)
baddie.setPosition(0, 0)
let speed = 50
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.darkGroundSouth)) {
        mySprite.setImage(assets.image`holding on`)
        mySprite.ay = 0
    } else {
        mySprite.setImage(assets.image`player`)
        mySprite.ay = 200
    }
})
game.onUpdateInterval(100, function () {
    distance = Math.abs(mySprite.x - baddie.x)
    if (distance < 20) {
        speed = 50
    } else if (distance < 10) {
        speed = 10
    } else {
        speed = 100
    }
    baddie.follow(mySprite, speed)
})
