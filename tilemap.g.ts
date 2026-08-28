// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`560009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f00000000000000000000000000000000000000000000000000000000000000000f000000000000000000000f00000000000000000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f000000000000000000000000000000000000000000000000000000000000000000000000000000000f000000000406070000000b0c00000f00000000000f00000000000000000000000000000000040607000000000000000000000000000004060700000000000000000000000000000000000000000f00000000000000000000000002030900000000000000000000000000000000000000000f0000000f00000000040203090000000b0d0c00000b0d0c00000005010907000000000f000000000000000000000000000000000e00000f00000406070000050108000000000000000b0c000000000407000004070000000000000000000405010108000000000000000000000000000005010109070000000000000000000000000000000000000e000000000000000203090000050108000000000000000000000000040209000002090700000000000000040201010108000000000000000000000000000005010101090700000000000f00000000000000000000000000000406070000050108000005010800000000000000000000000402010800000501090700000000000405010101010800000000000000000000000000000501010101090700000000000000000606060606060606060606020309060605010806060501080606060606060606060606050101080a0a050101090606060606020101010101080a0a0a0a0a0a0a0a0a0a0a0a0a0a050101010101080606060606060606`, img`
......................................................................................
......................................................................................
......................................................................................
.....................222...22.........................222..............222............
.....................222.............................2222...222..222...2222...........
................222..222.......22....22..22.........22222..............22222..........
........2.......222..222............222..222.......222222..............222222.........
...........222..222..222...........2222..2222.....2222222..............2222222........
222222222222222222222222222222222222222..2222222222222222..............222222222222222
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles1,sprites.builtin.forestTiles9,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.dungeon.hazardLava1,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.builtin.forestTiles22,sprites.builtin.forestTiles25,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile1":return tile1;
            case "marcador":
            case "tile2":return tile2;
            case "myTile":
            case "tile3":return tile3;
            case "myTile0":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
