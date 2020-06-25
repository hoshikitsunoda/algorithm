type Color = 'Black' | 'White'

type BoardFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'

type BoardRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Game {
  private pieces = Game.makePieces()

  private static makePieces() {
    return [new King('White', 'E', 1)]
  }

  showPieces() {
    return this.pieces
  }
}

abstract class Piece {
  protected position: Position
  constructor(
    protected readonly color: Color,
    file: BoardFile,
    rank: BoardRank
  ) {
    this.position = new Position(file, rank)
    this.color
  }

  take() {
    console.log('take Piece')
  }

  moveTo(position: Position) {
    this.position = position
  }

  abstract canMoveTo(position: Position): boolean
}

class Position {
  constructor(private file: BoardFile, private rank: BoardRank) {}

  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    }
  }
}

class King extends Piece {
  constructor(protected color: Color, file: BoardFile, rank: BoardRank) {
    super(color, file, rank)
  }
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }

  take() {
    console.log('take King')
    super.take()
  }
}

const kingPin = new King('White', 'B', 1)
console.log(kingPin.take())

// class Queen extends Piece {}

// class Bishop extends Piece {}

// class Knight extends Piece {}

// class Rook extends Piece {}

// class Pawn extends Piece {}
