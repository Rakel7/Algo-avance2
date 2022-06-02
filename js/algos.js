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

  // console.log("swap - implement me !");
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
  // console.log("isLess - implement me !");
}

// -----------------------------------

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

  for(i =0; i<csvData.length; i++){
    min=csvData[i];
    iMin = i;
    for(j = i+1; j<csvData.length; j++){
      if( isLess(j, iMin)){
        min=csvData[j];
        iMin = j;
      }
    }
    swap(iMin,i);
  }


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
  const gaps = [66,31,14,5,1];

  for(let g = 0; g < gaps.length; g++){
    const gap = gaps[g];
    for (var i = gap; i < csvData.length; i++) {
			for (var j = i; j >= gap && isLess(j,j-gap); j -= gap) {
				swap(j, j-gap);
			}
		}
	}
  // return csvData;
  console.log(csvData);

  console.log("shellsort - implement me !");
}

/**
 * 
 * shellsort version 2
 * const gaps = [701, 301, 132, 57, 23, 10, 4, 1]; //iniatilise le tableau gaps
    function shellsort() {
      for (let g = 0; g < gaps.length; g++){
        let gap = gaps[g];
        for (let i = gap; i < csvData.length; i++){
          for (let j = i, k= j-gap; k >= 0 && isLess(j, k) ; j -= gap, k-= gap){
            swap(j, k);
          }
        }
      }
 * 
 */

// -----------------------------------

function mergesort(start=0, length=N) {
  if(length > 1){

    let middle= Math.floor(length/2);
    mergesort(start, middle);
    mergesort(start+middle,length-middle);
    merge(start,start+middle, length);

  }
}

function merge(first, second, length){
  let first_part_empty = first === second;
  let second_part_empty= second-first === length;

  if(first_part_empty || second_part_empty ){
    return;
  }

  if(isLess(first , second)){
    merge(first+1, second, length-1);
  }else{
    for(i=second; i >= first+1 ; i--){
      swap(i, i-1);
    }
    merge(first+1, second+1, length-1);
  }

}

// -----------------------------------

function createHeap(){
  for (let i = Math.floor(N/2); i >= 0; i--){
    cram(N,i);
  }
}

function cram(end, index){
  let left = 2 * index + 1;
  let right = 2 * index + 2;
  let max = index;

  if (right < end && isLess(max,right)){
    max = right;
  }

  if (left < end && isLess(max, left)){
    max = left;
  }

  if (index !== max){
    swap(max, index);
    cram(end,max);
  }
}
function heapsort() {
  createHeap()
  for (let i = N - 1; i >= 0; i--){
    swap(0,i);
    cram(i,0);
  }
}


/**
 * 
 * Function quicksort
 *
 */

function partition(first, last, pivot){
  swap(pivot, last)
  j = first;

  for(i = first; i < last; i++ ){
    if(isLess(i, last)){
      swap(i, j)
      j = j+1;
    }
  }
  swap(last, j)
  return j;
  
}

function quicksort(first=0, last=csvData.length-1) {
  if(first<last){
   let pivot = last;
    pivot = partition( first, last, pivot);
    quicksort( first, pivot-1);
    quicksort( pivot+1, last);
  }

  console.log("quicksort - implement me !");
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
