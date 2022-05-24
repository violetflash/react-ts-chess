import { Colors } from './Colors';
import { Figure } from './figures/Figure';
import { Board } from './Board';

interface CellProps {
    board: Board;
    x: number;
    y : number;
    color: Colors;
    figure: Figure | null;
}

export class Cell {
    readonly x: number;
    readonly y : number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean; // is this cell is free for next figure
    id: number; // for the React key prop

    constructor({ board, x, y, color, figure }: CellProps) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }
}