const arr = [1,21,35,45,"Mithun",124,"Sanki VIkash"];
for (let i=0; i<arr.length; i++){
    if(typeof arr[i] ==="string"){
        console.log("Found first string: "+arr[i]);
        break;
    }
}