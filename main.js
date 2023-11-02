const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let sohArray=[]
  let rated_capacity=120
  let healthy=0
  let exchange=0
  let failed=0

  //block of code to find the soh percentage from presentCpacity of a battery.
  presentCapacities.forEach((presentCapacity)=>{
    let sohPercentage=(100*presentCapacity)/rated_capacity
    sohArray.push(sohPercentage)
  })

  // block of code to classify the batteries based on above calculated SoH
  sohArray.forEach((value)=>{
    if(value > 80 && value <= 100)
      healthy+=1
    if(value > 63 && value <80)
      exchange+=1
    if(value < 63 )
      failed+=1
  })

  return { // returning the above calculated values as an object to the below called function
    healthy,
    exchange,
    failed
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
