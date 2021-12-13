function unique1(arr) {
    var formArr = arr.sort()
    var newArr=[formArr[0]]                                                    // 先将数组进行排序，再将其与相邻进行比较
    for (let i = 1; i < formArr.length; i++) {
        if (formArr[i]!==formArr[i-1]) {
            newArr.push(formArr[i])
        }
    }
    return newArr
}
function unique2(arr){
    return Array.from(new Set(arr))      //es6  Set实现数组去重
}

function unique3(arr){
    let obj={}
    let newArr=[]
    for (let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]){
            obj[arr[i]]=1
            newArr.push(arr[i])
        }}
       
        return newArr
    
}
console.log(unique3([2,3,2,3,4,5,2,1,5]));
console.log(unique1([2,3,2,3,4,5,2,1,5]));
console.log(unique2([2,3,2,3,4,5,2,1,5]));