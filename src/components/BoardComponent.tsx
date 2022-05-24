import React, { FC } from 'react';
import { Board } from '../models/Board';
import { CellComponent } from './CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (data: Board) => void;
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {

    return (
        <div className="board">
            {board.cells.map((row, index) =>
                <React.Fragment key={index}>
                    {row.map((cell) =>
                        <CellComponent key={index}/>
                    )}
                </React.Fragment>
            )}
        </div>
    )
};