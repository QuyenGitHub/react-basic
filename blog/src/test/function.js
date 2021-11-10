
//function kieu truyen thong
function truyenthong(){
    console.log("Kieu truyen thong")
  }
  
  // function kieu hien dai arrow function
  hiendai = () =>{
    console.log("Kieu hien dai")
  }

//   truyenthong()
//   hiendai()
// function tong a&b
tongab = (a, b)=>{
    console.log(a+b)
}
tongab(1,1)

goiten = (ten)=>{
    console.log(ten)
}
goiten("Ty NGAO")

hello =()=> "HELLO!" // return ve 1 chuoi "HELLO"
hello2 =()=> {return "HELLO all!"}
console.log(hello())
console.log(hello2())