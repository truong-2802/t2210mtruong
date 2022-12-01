// code js
var x = 10;//ic datatyle :  kiểu dữ liệu động
var t = true;
// let y = 20;
x = "hello"; // denam
console.log(x); // print

var y = 20;

var z = y+10;//30
var k = x+y;// hello20 -->strcat()
var u = y+x;//20hello
var c = y+"world ";//20 world
var p = "hello"+ "world";//helloworld
var a = "20"+10;//2010
console.log(k);
console.log(a);
console.log(t);
var b = 5+ 10+15+"a";//30a
console.log(b);`1D`
if(y>10){

}else if(y>15){

}else{

}
for( var j=0;j<10; j++){
    console.log("j="+j);
}
console.log("xin chao cac ban "+20+", chuc buoi sang tot lanh ");
// gia tri cua y =20
console.log("gia tri cua y ="+y+", gia tri dep");
console.log(`gia tri cua y=${y}, gia tri dep`);

// khai bao 1 ham
function tinhtong(a,b){
    //return a+b;
    console.log(a+b);
}
var kq = tinhtong(4,5);


var arr=[];
//các phần tử ko cần kiểu dữ liệu giống nhau
// không bj trói buộc về kích thước số lượng
arr[0]=15;
arr[1]="abc";
arr[2]=true;
arr.push(17);
arr.push("xyz");
for(var i=0; i<arr.length; i++){
    // arr.length : tự đếm số lượng , không cần nhập số cụ thể
    console.log(arr[i]);
}
//alert("Alert"); (hiện cảnh báo trên web)



//var rs= confirm(" Bạn chắc chắn muốn nộp bài không ?")//return boolean
//if(rs ==true){
 //   console.log(" Người dung đã đồng ý");
//}else{
//    console.log( " hủy bỏ chiến dịch")
//}
// hàm xác nhận



//var s= prompt("Vui lòng nhập họ tên ");//return string
//console.log(s);
// nếu nhâp -> string
// nếu không nhâp + ok -> string rỗng
// nếu nhấn cancel -> null





//setTimeout(function (){
 //   alert("hello");
//},10000);
// độ trễ của công vc cần làm



//var i=0;
//setInterval(function (){
//    console.log("i="+i);
//    i++;
//},3000);
// thời gian hiển thị


//10:00
//9:59......
var span_min=document.getElementById("minutes")
var span_sec=document.getElementById("seconds")



var min =10;
var sec=0;
var timer = setInterval(function (){
    var m=min<10?"0"+min :min;
    var s= sec<10?"0"+sec :sec ;// toán tử 3 ngôi
    // giải thích : trc dấu ? là đk nếu đúng lấy +sec ,nếu sai lấy  sec
    //console.log(m+":"+s );// khi không in ra hinh thù sử dụng
    span_min.innerText=m;
    span_sec.innerText=s;
   // làm thế nào để giảm thời gian
    sec--;
    if(sec<0){
        sec =59;
        min--;
    }
    if(min<0){
        // dừng tại đây \
        clearInterval(timer);
    }
},1000)





