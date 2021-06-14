# Life

**Deadline: 20.06.2021 23:59 Minsk**

You have a life to create! Conway's life on typescript :)
Study the rules of life on [wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The basics are in these lines:

> The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

> 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
> 1. Any live cell with two or three live neighbours lives on to the next generation.
> 1. Any live cell with more than three live neighbours dies, as if by overpopulation.
> 1. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


> These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
> 1. Any live cell with two or three live neighbours survives.
> 1. Any dead cell with three live neighbours becomes a live cell.
> 1. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

Requirements:
* You must use canvas to draw,
* You can make a field with a fixed size or try to make an infinite field without borders,
* There must be random shapes on the field when you start the game,
* It must be possible to pause and draw squares on the field,
* The game must be written using react and typescript,
* Use of redux or mobx at your choice.

## Task submission

Create a `13-life` folder inside the `homeworks` folder in your
`evo-ts-bootcamp` repository on [GitHub](https://github.com/).

Create a new branch from your main branch, implement the task and create a
Pull Request to your repository. Change accordingly the `README` file to describe
your application and add the coverage report there.

Please share the link of your Pull Request in appropriate Slack channel:
[ts-bootcamp-common-2021](https://evolutiongaming.slack.com/archives/C01TBBGC18U)
in the thread with the homework announcement when it is ready for review.
