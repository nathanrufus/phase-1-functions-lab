// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(42-blocks);
    
  }
  function distanceFromHqInFeet(block) {
   
    return Math.abs(distanceFromHqInBlocks(block))*264;
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start-destination)*264;
 
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start,destination)
	if (distance < 400) {
		return 0;
	}
	else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * .02;
	}
	else if (distance > 2000 && distance < 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
  }
