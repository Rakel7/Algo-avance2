// Converts from degrees to radians.
function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

console.log(getDistanceFromLatLonInKm(45.188529,5.724524,45.564601,5.917781))

// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city) {
  console.log("distanceFromGrenoble - implement me !");
  // console.table("LAAA", city);
  // let latG = 45.188529;
  // let longG = 5.724524;
  let calculationDistance = getDistanceFromLatLonInKm(45.188529, 5.724524, city.latitude , city.longitude);

  console.log("Distance:", calculationDistance );

return calculationDistance; 

}

console.table(distanceFromGrenoble(calculationDistance));

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i,j) {
  let tmp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = tmp;
  
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)

  console.log("swap - implement me !");
}

// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j) {

    if (csvData[i].dist < csvData[j].dist){
      // mettre à jour l'index de l'élément minimum
      return true;
    }

  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)
  console.log("isLess - implement me !");
}

// -----------------------------------


// for(let i = 0; i < `$calculationDistance`.length; i++){
//   //stocker l'index de l'élément minimum
//   let min = i;
//   for(let j = i+1; j < `$calculationDistance`.length; j++){
//       swap(i, j);
//   }
  
// }

function insertsort() {

for (i = 1; i<csvData.length ; i++){
    j=i;
    k=j-1;
    while(k >= 0 && isLess(j, k)){
      swap(k, j);
      j--;
      k--;
    }
}


  console.log("insertsort - implement me !");
}

// -----------------------------------

function selectionsort() {
  console.log("selectionsort - implement me !");
}

// -----------------------------------

function bubblesort() {

  for (i = 0; i<csvData.length ; i++){
    for (j = i+1; j<csvData.length ; j++){
      if(isLess(j, i)){
        swap(i,j)
      }
        
      
    }
  }


  console.log("bubblesort - implement me !");
}

// -----------------------------------

function shellsort() {
  console.log("shellsort - implement me !");
}

// -----------------------------------

function mergesort(start=0, length=N) {
  console.log("mergesort - implement me !");
}

// -----------------------------------

function heapsort() {
  console.log("heapsort - implement me !");
}

// -----------------------------------

function quicksort() {
  console.log("quicksort - implement me !");
  if(first<last) {
    const pivot = partition(first, last, selectPivot(first, last));
    quicksort(first, pivot-1);
    quicksort(pivot+1, last);
  }
}

// -----------------------------------

function sort(algo)
{
  console.time(algo)
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
  console.timeEnd(algo);
  console.log("Comparaison : ", countOp("compare"));
  console.log("Permutation : ", countOp("swap"));
}

function countOp(opName) {
  return displayBuffer.reduce(
    (count, op) => (op[0]===opName? count+1 : count),
    0
  );
}
