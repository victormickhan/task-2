(function (root) { 
var EMPTY = root.maze.EMPTY; 
var WALL = root.maze.WALL; 
var PATH = root.maze.PATH; 
var CURRENT = root.maze.CURRENT; 

/** 
* Функция находит путь к выходу и возвращает найденный маршрут 
* 
* @param {number[][]} maze карта лабиринта представленная двумерной матрицей чисел 
* @param {number} x координата точки старта по оси X 
* @param {number} y координата точки старта по оси Y 
* @returns {[number, number][]} маршрут к выходу представленный списоком пар координат 
*/ 
function solution(maze, x, y) { 
// todo: построить правильный маршрут к выходу 
var coordinates = [[x, y]]; 
var exit=maze.length-1;
var side="";


LeGo(exit,side,coordinates);



function LeGo (exit,side,coordinates){


   Right_Bottom();

    function Right_Bottom() 
    { 
        if (y == exit)
        { 
           return alert('Finish!'); 
        } 
        else if (maze[y][x+1] != WALL)
        { 
           ourMove("Right"); 
           Top_Right(); 
        }
        else if (maze[y+1][x] != WALL) 
        { 
           ourMove("Bottom");
           Right_Bottom(); 
        }  
        else 
        { 
           Bottom_Left(); 
        } 
    }

    function Bottom_Left() 
    { 
        if (y == exit)
        { 
           return alert('Finish!'); 
        } 
        else if (maze[y+1][x] != WALL)
        { 
           ourMove("Bottom"); 
           Right_Bottom(); 
        }
        else if (maze[y][x-1] != WALL) 
        { 
           ourMove("Left");
           Bottom_Left(); 
        }  
        else 
        { 
           Left_Top(); 
        } 
    }

    function Left_Top() 
    { 
        if (y == exit)
        { 
           return alert('Finish!'); 
        } 
        else if (maze[y][x-1] != WALL)
        { 
           ourMove("Left"); 
           Bottom_Left(); 
        }
        else if (maze[y-1][x] != WALL) 
        { 
           ourMove("Top");
           Left_Top(); 
        }  
        else 
        { 
           Top_Right(); 
        } 
    }

    function Top_Right() 
    { 
        if (y == exit)
        { 
           return alert('Finish!'); 
        } 
        else if (maze[y-1][x] != WALL)
        { 
           ourMove("Top"); 
           Left_Top(); 
        }
        else if (maze[y][x+1] != WALL) 
        { 
           ourMove("Right");
           Top_Right(); 
        }  
        else 
        { 
           Right_Bottom(); 
        } 
    }


      function ourMove (side)
      {
 

         switch (side)
         {
           case "Left":
               x--;
               coordinates.push([x,y]);
            break;
            case "Right": 
               x++;
               coordinates.push([x,y]);
            break;
            case "Top":
               y--;
               coordinates.push([x,y]);
            break;
            case "Bottom":
               y++;
               coordinates.push([x,y]);
            break;
         }
      }

}

return coordinates; 
} 

root.maze.solution = solution; 
})(this);