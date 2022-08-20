// Code your solution in this file!

const hq=42;
let dist;
let small;
const feet=264;
let distBlocks;
let start;


function distanceFromHqInBlocks(someValue) {

    if (someValue<=42){
        return small =(hq-someValue);
    }
    else {
    return dist = (someValue-hq);
    }
  }

  
  function distanceFromHqInFeet(someValue) {
     distanceFromHqInBlocks();{};
    distBlocks = distanceFromHqInBlocks(someValue);
            return (distBlocks*feet);

    //  distBlocks = distanceFromHqInBlocks(dist);
    //         return (distBlocks*feet);
    
    
            
        // if (distanceFromHqInBlocks()>=42){
        //     return (feet*264);
        // }
        // else {

        //     return (small*264);
        // }
  }

  function distanceTravelledInFeet(start,destination){
           if (start>destination){
            return ((start-destination)*feet);
           }
           else {
           return ((destination-start)*feet);
           }

           
}

function calculatesFarePrice(start,destination){
           if( distanceTravelledInFeet(start,destination)<=400){
            return (0);
           }
           else if (distanceTravelledInFeet(start,destination)<=2000 ){
           var bill=(distanceTravelledInFeet(start,destination)-400)*0.02;
           
           return(bill);
        }
           else if (distanceTravelledInFeet(start,destination)>=2500){
            return ("cannot travel that far");
           }
           else {
            return(25);
           }
}