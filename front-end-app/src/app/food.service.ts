// import { newArray } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

interface foodEntry {

  name: string,
  type: string

};

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { 

  }

  

  foodList: foodEntry[] = [{ name: 'pear', type: 'fruit' },
  { name: 'pineapple', type: 'berry' },
  { name: 'strawberry', type: 'fruit' },
  { name: 'banana', type: 'herb' },
  { name: 'pumpkin', type: 'fruit' },
  { name: 'coconut', type: 'seed' }
];

  //ngStyleExampleVar: string = 'black'; //test code
  
  getFoodList(){

    return this.foodList;
    //Replacing with a varible return!
    // return [{ name: 'apple', type: 'fruit' },
    //       { name: 'pineapple', type: 'berry' },
    //       { name: 'strawberry', type: 'fruit' },
    //       { name: 'banana', type: 'herb' },
    //       { name: 'pumpkin', type: 'fruit' },
    //       { name: 'coconut', type: 'seed' }
    //     ]

  }


}

