import { Client } from 'boardgame.io/client';
import { Settler } from './Game';

class SettlerClient {
    constructor(rootElement) {
        this.client = Client({ game: Settler });
        this.client.start();
        this.rootElement = rootElement;
        this.createBoard();
        this.attachListeners();
    }

    createBoard() {
        const size = 15;
        const rows = [];
        for (let i = 0; i < size; i++) {
            const cells = [];
            for (let j = 0; j < size; j++) {
                const id = size * i + j;
                cells.push(`<td class="cell" data-id="${id}"></td>`);
            }
            rows.push(`<tr>${cells.join('')}</tr>`);
        }

        this.rootElement.innerHTML = `
            <table>${rows.join('')}</table>
            <p class="winner"></p>
        `;
    }

    attachListeners() {
        const handleCellClick = event => {
            const id = parseInt(event.target.dataset.id);
            this.client.moves.clickCell(id);
        };
        const cells = this.rootElement.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.onclick = handleCellClick;
        });
    }

    letters = [
        'A', 'A', 'E', 'E', 'R', 'T', 'U', 'I', 'O', 'H', 'L', 'M', 'N', 'C', 'F', 'D', 'S', 'S'
    ];
}

const app = new SettlerClient(document.getElementById('app'));