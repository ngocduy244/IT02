var giohang = new Array();

function themvaogiohang(x){
    var boxsp = x.parentElement.parentElement.parentElement.parentElement.children;
    var hinh = boxsp[0].children[0].src
    var tensp = boxsp[1].children[0].innerHTML
    var gia = boxsp[1].children[1].innerHTML
    var soLuong = boxsp[1].children[4].value

    var sp = new Array(hinh, gia, tensp, soLuong)

    giohang.push(sp)

    //console.log(giohang)
    showcountsp();

    //lưu giỏ hàng vào secsionStorage
    sessionStorage.setItem("giohang", JSON.stringify(giohang));

    var x = document.getElementById("btn-pay")
    x.classList.add("open");
}

function showcountsp(){
   document.getElementById("countsp").innerHTML = giohang.length;
}


function showmycart(){
    var ttgh = "";
    var tong = 0;

    for(let i = 0; i < giohang.length; i++){
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh += '<tr>'+
            '<td><img src="'+ giohang[i][0] +' " alt=""></td>'+
            '<td>'+ giohang[i][2] +'</td>'+
            '<td>'+ giohang[i][1] +'</td>'+
            '<td>'+ giohang[i][3] +'</td>'+
            '<td><a onclick="xoasp(this)"><i class="fa fa-trash" aria-hidden="true"></i></a></td>'+
            '<td><div>'+ tt +'.000 VND</div></td>'+
        '</tr>';
    }

    ttgh += '<tr>'+
         '<th colspan="5">Tổng đơn hàng</th>'+
        '<th><div>'+ tong +'.000 VND</div></th>'+
    '</tr>';

    document.getElementById("mycart").innerHTML = ttgh;

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
    // console.log(giohang);
    showmycart();
    showcountsp();
    sessionStorage.setItem("giohang", JSON.stringify(giohang));

}

function xoatatca(x){
   giohang = []
   showcountsp();
   showmycart();
   sessionStorage.setItem("giohang", JSON.stringify(giohang));

}

function showcart(){
    var  x = document.getElementById("showcart");
    if(x.style.display == "block")
        x.style.display = "none";
    else
        x.style.display = "block";
    showmycart();   
}

function showgiohang_trangthanhtoan(){
    
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh); 

    var ttgh = "";
    var tong = 0;

    for(let i = 0; i < giohang.length; i++){
        var tt = parseInt(giohang[i][1]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh += '<tr>'+
            '<td><img src="'+ giohang[i][0] +' " alt=""></td>'+
            '<td class="name">'+ giohang[i][2] +'</td>'+
            '<td>'+ giohang[i][1] +'</td>'+
            '<td>'+ giohang[i][3] +'</td>'+
            '<td><div>'+ tt +'.000 VND</div></td>'+
            '<td><a href="javascript:void(0);"><i class="fa fa-trash" aria-hidden="true"></i></a></td>'+
        '</tr>';
    }

    ttgh += '<tr>'+
         '<th colspan="2">Tổng đơn hàng</th>'+
        '<th colspan="4"><div>'+ tong +'.000 VND</div></th>'+
    '</tr>';

    document.getElementById("mycart").innerHTML = ttgh;
}

showgiohang_trangthanhtoan();