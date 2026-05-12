//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
const error = document.getElementById("error");
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
let img1,img2,img3;
let promise1=new Promise((resolve,reject)=>
	{try{
		console.log(images[0].url);
		resolve(images[0].url);
	}
	 catch(e){
		 reject(e);
	 }
	
	})
let promise2=new Promise((resolve,reject)=>
	{try{
		console.log(images[1].url);
		resolve(images[1].url);
	}
	 catch(e){
		 reject(e);
	 }
	
	})
let promise3=new Promise((resolve,reject)=>
	{try{
		
		console.log(images[2].url);
		resolve(images[2].url);
	}
	 catch(e){
		 reject(e);
	 }
	
	})

Promise.all([promise1,promise2,promise3]).then((res)=>{
	output.innerHTML=`<img src="res[0]">
	<img src="res[1]">
	<img src="res[2]">
	`;})
	.catch((err)=>{
		error.innerHTML=`${err}`;
	})
	
	}}


