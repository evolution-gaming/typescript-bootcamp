# Hexagonal 2048

## Task description

Your task is to develop game [2048](https://play2048.co/) but on
[hexagonal field](http://hex2048.surge.sh/).

You should develop the game with support the radius of 2 cells. Additionally,
you could add radius 3 and 4.

### Rules

You have six directions and six key binding to these directions:

|            |       |
| ---------- | ----- |
| north      | W key |
| north-east | E key |
| north-west | Q key |
| south      | S key |
| south-east | D key |
| south-west | A key |

After pressing any of the listed keys, all your board should be shifted in the
same direction.

**Shifting rules**

| before shift → |   after |
| -------------: | ------: |
|            2 2 |       4 |
|          2 2 2 |     2 4 |
|        2 4 2 4 | 2 4 2 4 |
|        2 2 4 4 |     4 8 |

After each shift, you need to place new numbers in the field in a random
positions. For this purpose, we added a random-number-generator(RNG) server. You
can start it with the command `yarn rng-server`. This server expects you to send
him your numbers with
[cube coordinates](https://www.redblobgames.com/grids/hexagons/#coordinates-cube)
and the server will answer where you should place those new RNG numbers.
RNG-server is working on port 13337.

Examples:

```
// Initial game
curl -d '[]' \
     -X POST http://localhost:13337/2

// Server answer
[
  {"x":0,"y":1,"z":-1,"value":2},
  {"x":1,"y":0,"z":-1,"value":2},
  {"x":1,"y":-1,"z ":0,"value":2}
]


curl -d '[{"x": 0, "y": 0, "z": 0, "value": 2}]' \
     -x post http://localhost:13337/2

// Server answer
[{"x":1,"y":-1,"z":0,"value":2}]
```

The server expects you to send the radius in URL — `/2` for radius 2, `/3` for
radius 3, etc. For the initial game, you should send an empty array. Also, you
should have a status field with game status. The game can be either `playing` or
`game-over`. Status game-over should inform the player when no one move is
available.

If no one number moves after pressing the key, you shouldn't add a new number
from rng-server.

#### How we will be testing your solution

For testing your solution, we will be use [jest](https://jestjs.io/) and
[playwright](https://playwright.dev/). We added a couple of tests, and you
should test your solution with our tests. Use `yarn test` for the purpose.

Our tests will check the field, and your field should contain elements with
`data-x`, `data-y`, `data-z` and `data-value` attributes. You could check the
example layout [here](http://hex2048.surge.sh/). Also, you need to mark a status
message with a data-status attribute that will contain the game's status. Your
game should understand the following URLs:

- `/#test2` - where your application will start the game with radius 2
- `/#test3` - same with radius 3
- `/#test4` - same with radius 4

Your game should send POST messages to rng-server on address
localhost:13337/2(/3, /4). When you test your game with our tests, you should
turn off the rng-server because tests are launching test servers for test
purposes.

## Grading Notes

For extra credits, you should the following (one or more):

- Support radius 3 and even 3 and 4
- Using tests
- Clear solution

## Submission

Please publish the solution in a private [GitHub](https://github.com/)
repository and give user [@evo-home-task](https://github.com/evo-home-task)
access to the repository.
