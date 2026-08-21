
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    // ゲームが終了したかを管理するフラグ
    export let isGameFinished = false;

    /**
    * 右に1マス進む
    */
    //% block="右に 1マス 進む"
    export function moveRightOne() {
        // すでにクリアまたはゲームオーバーなら何もしないで抜ける
        if (isGameFinished) return;
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(mySprite.tilemapLocation().column + 1, mySprite.tilemapLocation().row)))) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(mySprite.tilemapLocation().column + 1, mySprite.tilemapLocation().row))
            pause(300)
        }
    }

    /**
    * 左に1マス進む
    */
    //% block="左に 1マス 進む"
    export function moveLeftOne() {
        // すでにクリアまたはゲームオーバーなら何もしないで抜ける
        if (isGameFinished) return;
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(mySprite.tilemapLocation().column - 1, mySprite.tilemapLocation().row)))) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(mySprite.tilemapLocation().column - 1, mySprite.tilemapLocation().row))
            pause(300)
        }
    }

    /**
     * 上に1マス進む
     */
    //% block="上に 1マス 進む"
    export function moveUpOne() {
        // すでにクリアまたはゲームオーバーなら何もしないで抜ける
        if (isGameFinished) return;
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row - 1)))) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row - 1))
            pause(300)
        }
    }

    /**
     * 下に1マス進む
     */
    //% block="下に 1マス 進む"
    export function moveDownOne() {
        // すでにクリアまたはゲームオーバーなら何もしないで抜ける
        if (isGameFinished) return;
        if (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row + 1)))) {
            tiles.placeOnTile(mySprite, tiles.getTileLocation(mySprite.tilemapLocation().column, mySprite.tilemapLocation().row + 1))
            pause(300)
        }
    }

    /**
    * 回数を2回に固定した繰り返しブロック
    * "handlerStatement=1" は、Cの字ブロックにする場合に定義する
    * @param handler くり返す処理
    */
    //% block="2回 くりかえす"
    //% handlerStatement=1
    export function repeatTwoTimes(handler: () => void) {
        for (let i = 0; i < 2; i++) {
            handler();
        }
    }

    /**
    * 回数を3回に固定した繰り返しブロック
    * @param handler くり返す処理
    */
    //% block="3回 くりかえす"
    //% handlerStatement=1
    export function repeatThreeTimes(handler: () => void) {
        for (let i = 0; i < 3; i++) {
            
            handler();
        }
    }

    /**
    * 指定した回数だけくり返すブロック
    * @param times くり返す回数, eg: 3
    * @param handler くり返す処理
    */
    //% block="$times 回 くりかえす"
    //% times.defl=3
    //% handlerStatement=1
    export function repeatTimes(times: number, handler: () => void) {
        for (let i = 0; i < times; i++) {
            if (isGameFinished) break; // 終了していたらループを抜ける
            handler(); // 内側に配置されたブロックを実行
        }
    }

    //% block="コインをすべて集めたらクリア"
    export function checkGoal() {
        // コインをすべて集めたかどうかの判定
        if (coinNum <= 0) {
            isGameFinished = true;
            // エフェクトを出してからゲームクリア画面へ
            music.baDing.play();
            game.over(true);
        }
    }

}