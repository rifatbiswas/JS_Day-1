//============ Rest Parameter ================


/*num(1,2,3,4,5,6);

function num (...number){
    let sum=0;
    for(let i of number){
        sum =sum+i;
    }
    console.log(sum);
}*/


//===== We can use any other parameter with Rest Parameter  ================

num(1,2,3,4,5,6);

function num (a,b,...number){
    let sum=0;
    for(let i of number){
        sum =sum+i;
    }
    console.log(sum);
}