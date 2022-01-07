import { INVALID_MOVE } from 'boardgame.io/core';

export const Settler = {
    setup: () => ({ cells: Array(15 * 15).fill(null) }),
  
    moves: {
        clickCell: (G, ctx, id) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        },
        
        drawTile: (G, ctx) => {
            if (G.cells[id] !== null) {
                return INVALID_MOVE;
            }
            G.cells[id] = ctx.currentPlayer;
        }
    },

    turn: {
        minMoves: 1,
        maxMoves: 1,
    }
};
