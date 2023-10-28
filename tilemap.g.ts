// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20001200020707070707070707070707070707070707070707070707070707070707070306080808080808080808080808080808080808080808080808080808080808050600000000000000000000000000000000000000000000000000000000000005060000000000000000000000000000000000000000000000000000000000000506000207070707070703000000000000000000000000000000000000000000050600090808080808080400000000000000020707070707070703000000000005060000000000000000000000000000000009080808080808080400000000000506000000000000000000000000000000000000000000000000000000000000050600000000000207030000000000000000000000000000000000000000000005060000000000060101070707070300000000000000000000000000000000000506000000000009080808080101010707070300000000000207070703000000050600000000000000000000090808080808040000000000060101010500000005060000000000000000000000000000000000000000000009080808040000000506000002070703000000000000000000000000000000000000000000000000050600000908080400000000000000000000000000000000000000000000000005060000000000000000000000000000000000000000000000000000000000000509080808080808080808080808080808080808080808080808080808080808040000000000000000000000000000000000000000000000000000000000000000`, img`
................................
22222222222222222222222222222222
2..............................2
2..............................2
2.22222222.....................2
2.22222222.......222222222.....2
2................222222222.....2
2..............................2
2.....222......................2
2.....22222222.................2
2.....222222222222.....22222...2
2..........2222222.....22222...2
2......................22222...2
2..2222........................2
2..2222........................2
2..............................2
22222222222222222222222222222222
................................
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
