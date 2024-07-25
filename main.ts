namespace SpriteKind {
    export const Decoration = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim right`,
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
let myEnemy: Sprite = null
let myDecor: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.startCountdown(15)
scene.setBackgroundImage(assets.image`ocean1`)
music.play(music.stringPlayable("C5 G G B E C5 F C ", 120), music.PlaybackMode.UntilDone)
for (let index = 0; index < 10; index++) {
    myDecor = sprites.create(assets.image`decoration`, SpriteKind.Decoration)
    myDecor.setPosition(randint(0, 10), 96)
}
animation.runImageAnimation(
mySprite,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(2100, function () {
    myEnemy = sprites.create(assets.image`food`, SpriteKind.Food)
    myEnemy.setPosition(scene.screenWidth(), randint(5, 115))
    myEnemy.vx = -75
})
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
    myEnemy.setPosition(0, 0)
})
