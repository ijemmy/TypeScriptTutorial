module Shapes {
    export module Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons; //Note that there is no require() calling

//Polygons is in the new reference, modifying it will not affect the original library

var sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'