//promise
function httpGetAsync(theUrl,resolve)
{
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.onreadystatechange = () => {
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
      {
         resolve(xmlHttp);
      }
   };
   xmlHttp.open("GET", theUrl, true);
   xmlHttp.send(null);
}
const currentPromise = new Promise((resolve,reject)=>{
   httpGetAsync('https://picsum.photos/200/300',resolve);
});

const promise2 = new Promise((resolve,reject)=>{
   httpGetAsync('https://picsum.photos/200/300',resolve);
});

const promise3 = new Promise((resolve,reject)=>{
   httpGetAsync('https://picsum.photos/200/300',resolve);
});


const execute = async ()=>{

   try {
      const response1 = await currentPromise;
      document.getElementById('img_1').setAttribute('src',response1.responseURL);
   
      const response2 = await promise2;
      document.getElementById('img_2').setAttribute('src',response2.responseURL);
   
      const response3 = await promise3;
      document.getElementById('img_3').setAttribute('src',response3.responseURL);
      
   } catch (error) {
      console.log(error);
   }
  

}
execute();


//promise
// currentPromise.then((data)=>{
//    console.log(data);
//    document.getElementById('img_1').setAttribute('src',data.responseURL);
   
//    return promise2;
// }).then(data => {
//    document.getElementById('img_2').setAttribute('src',data.responseURL);

//    return promise3
// }).then(data =>{
//    document.getElementById('img_3').setAttribute('src',data.responseURL);

// })
// .catch(err =>{
//    console.log(err);
// })







//callback

// function test()
// {
//    setTimeout(()=> console.log(3),0);
//    console.log(2);
//    console.log(1);
// }
// function httpGetAsync(theUrl,callback)
// {
//    var xmlHttp = new XMLHttpRequest();
//    xmlHttp.onreadystatechange = () => {
//       if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       {
//          callback(xmlHttp);
//       }
//    };
//    xmlHttp.open("GET", theUrl, true);
//    xmlHttp.send(null);
// }
// httpGetAsync('https://picsum.photos/200/300',(data)=>{
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src',data.responseURL);
    
//     httpGetAsync('https://picsum.photos/200/300',(data)=>{
//       console.log(data);
//       document.getElementById('img_2').setAttribute('src',data.responseURL);

//       httpGetAsync('https://picsum.photos/200/300',(data)=>{
//          console.log(data);
//          document.getElementById('img_3').setAttribute('src',data.responseURL);
//      });
//   });
// });
// test();