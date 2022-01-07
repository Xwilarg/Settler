export const Tile = {
    constructor(letter, score) {
        this.letter = letter;
        this.score = score;
    }
}

export const French = [
    Array(15).fill(new Tile('E', 1)),
    Array(9).fill(new Tile('A', 1)),
    Array(8).fill(new Tile('I', 1)),
    Array(6).fill(new Tile('N', 1)),
    Array(6).fill(new Tile('O', 1)),
    Array(6).fill(new Tile('R', 1)),
    Array(6).fill(new Tile('S', 1)),
    Array(6).fill(new Tile('T', 1)),
    Array(6).fill(new Tile('U', 1)),
    Array(5).fill(new Tile('L', 1)),
    Array(3).fill(new Tile('D', 2)),
    Array(2).fill(new Tile('G', 2)),
    Array(3).fill(new Tile('M', 2)),
    Array(2).fill(new Tile('B', 3)),
    Array(2).fill(new Tile('C', 3)),
    Array(2).fill(new Tile('P', 3)),
    Array(2).fill(new Tile('F', 4)),
    Array(2).fill(new Tile('H', 4)),
    Array(2).fill(new Tile('V', 4)),
    Array(2).fill(new Tile('J', 8)),
    Array(2).fill(new Tile('Q', 8)),
    Array(1).fill(new Tile('K', 10)),
    Array(1).fill(new Tile('W', 10)),
    Array(1).fill(new Tile('X', 10)),
    Array(1).fill(new Tile('Y', 10)),
    Array(1).fill(new Tile('Z', 10))
].flat();