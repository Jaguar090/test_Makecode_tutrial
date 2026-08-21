# tutorial
# お宝集めアルゴリズム

## ステップ 1: プログラムを組み立てよう！ @showdialog
画面にあるブロックを「スタートしたとき」の中につなげて、  
主人公を動かしてすべてのお宝をゲットしよう！

* 新しいブロックは使えません。画面にあるブロックのならびかえだけでクリアを目指そう！

## ステップ 2: なぞをとこう！

バラバラに置いてある「1マス進む」ブロックを正しくならびかえてみよう。

```template
// 1. ゲームの初期化（マップ・キャラ・お宝の配置）
tiles.setTilemap(tilemap`level1`)
let hero = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f f e e e e e e f f . . . 
    . . f f f f 4 4 4 4 f f f f . . 
    . . f 4 4 f 4 4 4 4 f 4 4 f . . 
    . . f 4 4 e 4 4 4 4 e 4 4 f . . 
    . . f f f 4 4 4 4 4 4 f f f . . 
    . . . f 4 4 4 4 4 4 4 4 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f f F F F F F F f f . . . 
    . . . f f F F F F F F f f . . . 
    . . . f f F F F F F F f f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . f . . f . . . . . . 
`, SpriteKind.Player)
tiles.placeOnRandomTile(hero, sprites.castle.tilePath5)

// 2. お宝判定などの固定ロジック
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tilePath5)
    info.changeScoreBy(1)
})

// 3. 学習者に組み立てさせる「スタートしたとき」
// ここに必要な回数分のブロックだけを最初からワークスペースに置いておきます
customMove.moveRightOne()
customMove.moveRightOne()
customMove.moveUpOne()
customMove.moveUpOne()
```

```blocks
// ツールボックスを制限する設定
// ここに指定したブロックのみがツールボックスに表示されます。
// 空にしておくか、最低限のブロックのみを記述します。
customMove.moveRightOne()
```