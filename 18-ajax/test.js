
// var url = "http://localhost:9081/todo/1"
// var axios = require('axios');
// axios.put(url,{
//    work:'aaaaaa',
//    id :2
// }).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)});
var arr = [[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<arr.length;i++)
for(let j=0;j<arr.length;j++)
{
   if(j===arr.length-i-1)
      console.log(arr[i][j]);
}
