// tạo mảng 2 chiều lưu giá trị giỏ hàng
var giohang = new Array();

function themvaogiohang(x){
    var boxsp = x.parentElement.parentElement.parentElement.parentElement.children;
    var hinh = boxsp[0].children[0].src
    var tensp = boxsp[1].children[0].innerHTML
    var gia = boxsp[1].children[1].innerHTML
    var soLuong = parseInt(boxsp[1].children[4].value);

    
    var sp = new Array(hinh, gia, tensp, soLuong)

    var kt  =  0;
    //Kiểm tra trong giỏ hàng
    for(let i = 0; i  <  giohang.length; i++){
        if(giohang[i][2] == tensp  )
        {
            kt = 1;
            soLuong += giohang[i][3];
            giohang[i][3] = soLuong;
            break;
        }
    }
   if(kt == 0)
        giohang.push(sp) ;  // Gán giá trị mảng sp vào giohang

    // Gọi hàm  showcountsp để cập nhật số lượng sp hiện tại
    showcountsp();

    //lưu giỏ hàng vào secsionStorage
    sessionStorage.setItem("giohang", JSON.stringify(giohang));

    // khi hàm themvaogiohang được kích hoạt thì thêm class = "open" vào btn-pay
    var x = document.getElementById("btn-pay")
    x.classList.add("open");
}

// cập nhật số lượng giỏ hàng bằng độ dài mảng giỏ hàng
function showcountsp(){
   document.getElementById("countsp").innerHTML = giohang.length;
}

// hàm show giỏ hàng mini
function showmycart(){
    var ttgh = "";
    var tong = 0;

    for(let i = 0; i < giohang.length; i++){
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);

        //chuyển tt thành chuỗi
        var thanhTien = tt.toString();
        var x, y, z;

        if(thanhTien.length == 4){
            x = thanhTien.slice(0,1);
            y = thanhTien.slice(1,4);
            z = `${x}.${y}.000 VND`;
        }
        else if(thanhTien.length == 3){
            x = thanhTien.slice(0);
            z = `${x}.000 VND`;
        }
           
        tong += tt;

        ttgh += '<tr>'+
            '<td><img src="'+ giohang[i][0] +' " alt=""></td>'+
            '<td>'+ giohang[i][2] +'</td>'+
            '<td>'+ giohang[i][1] +'</td>'+
            '<td>'+ giohang[i][3] +'</td>'+
            '<td><a onclick="xoasp(this)"><i class="fa fa-trash" aria-hidden="true"></i></a></td>'+
            '<td><div>'+ z +'</div></td>'+
        '</tr>';
    }

    var sum = tong.toString();
    var a, b, c;

    if(sum.length == 5){
        a = sum.slice(0,2);
        b = sum.slice(2,5);
        c = `${a}.${b}.000 VND`;
    }
    else if(sum.length == 4){
        a = sum.slice(0,1);
        b = sum.slice(1,4);
        c = `${a}.${b}.000 VND`;
    }
    else if(sum.length == 3){
        a = sum.slice(0);
        c = `${a}.000 VND`;
    }
    
    if(c == undefined)
        c = '0 VND';
        
    ttgh += '<tr>'+
         '<th colspan="5">Tổng đơn hàng</th>'+
        '<th><div>'+ c +'</div></th>'+
    '</tr>';

    // gán nội dung của thẻ có id = "mycart" bằng ttgh
    document.getElementById("mycart").innerHTML = ttgh;

}

// Khi click vào thẻ có id = "showcart" thì sẽ thay đổi thuộc tính display và gọi hàm showmycart()
function showcart(){
    var  x = document.getElementById("showcart");
    if(x.style.display == "block")
        x.style.display = "none";
    else
        x.style.display = "block";
    showmycart();   
}


function xoasp(x){
    // xoa tr
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[1].innerHTML;
    tr.remove();

    // xoa sản phẩm trong mảng
    for(let i = 0; i < giohang.length; i++)
        if(giohang[i][2] == tensp){
            giohang.splice(i,1);
        }
   
    // cập nhật lại giỏ hàng sau khi xóa 1 sp
    showmycart();

    // cập nhật lại số lượng sp sau khi xóa 1 sp
    showcountsp();

    // lưu lại giohang vào sessionStorage
    sessionStorage.setItem("giohang", JSON.stringify(giohang));

}

function xoatatca(x){ 
   giohang = []

   // cập nhật lại giỏ hàng sau khi xóa tất cả sp
   showcountsp();

   // cập nhật lại số lượng sp sau khi xóa tất cả sp
   showmycart();

    // lưu lại giohang vào sessionStorage
   sessionStorage.setItem("giohang", JSON.stringify(giohang));
}


function xoaProduct(y){
    // xoa tr
   
    var tr = y.parentElement.parentElement;
    var tensp = tr.children[1].innerHTML;
    tr.remove();

   

    // xoa sản phẩm trong mảng
    for(let i = 0; i < giohangHoa.length; i++)
        if(giohangHoa[i][2] == tensp){
            giohangHoa.splice(i,1);
        }

    //cập nhật lai trang thanh toán
    showgiohang_trangthanhtoan()
}

var gh = sessionStorage.getItem("giohang");
var giohangHoa = JSON.parse(gh); 


function showgiohang_trangthanhtoan(){
    var ttgh = "";
    var tong = 0;
    var tongSL = 0;

    var x, y, z

    for(let i = 0; i < giohangHoa.length; i++){
        var tt = parseInt(giohangHoa[i][1]) * parseInt(giohangHoa[i][3]);
        var SL = parseInt(giohangHoa[i][3]);
        tongSL += SL;

        var thanhTien = tt.toString();
        
        if(thanhTien.length == 4){
            x = thanhTien.slice(0,1);
            y = thanhTien.slice(1,4);
            z = `${x}.${y}.000 VND`;
        }
        else if(thanhTien.length == 3){
            x = thanhTien.slice(0);
            z = `${x}.000 VND`;
        }

           
        tong += tt;

        var sum = tong.toString();
        var a, b, c
        
        if(sum.length == 5){
            a = sum.slice(0,2);
            b = sum.slice(2,5);
            c = `${a}.${b}.000 VND`;
        }
        else if(sum.length == 4){
            a = sum.slice(0,1);
            b = sum.slice(1,4);
            c = `${a}.${b}.000 VND`;
        }
        else if(sum.length == 3){
            a = sum.slice(0);
            c = `${a}.000 VND`;
        }

      

        ttgh += '<tr>'+
            '<td><img src="'+ giohangHoa[i][0] +' " alt=""></td>'+
            '<td class="name">'+ giohangHoa[i][2] +'</td>'+
            '<td>'+ giohangHoa[i][1] +'</td>'+
            '<td>'+ giohangHoa[i][3] +'</td>'+
            '<td><div>'+ z +'</div></td>'+
            '<td><a onclick="xoaProduct(this)"><i class="fa fa-trash" aria-hidden="true"></i></a></td>'+
        '</tr>';
    }

    if(c == undefined)
        c = '0 VND';

    ttgh += '<tr>'+
         '<th colspan="2">Tổng đơn hàng</th>'+
        '<th colspan="4"><div>'+ c +'</div></th>'+
    '</tr>';

    var tongTien = document.getElementById("tongTien");
    var amount = document.getElementById("amount");
    var thanhToan = document.getElementById("thanhToan");

    amount.innerHTML = tongSL;

    tongTien.innerHTML = c;
    thanhToan.innerHTML = c;
    
    document.getElementById("mycart").innerHTML = ttgh;
}

showgiohang_trangthanhtoan();