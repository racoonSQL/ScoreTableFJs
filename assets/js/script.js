var testScore = { 
    name: "",
    math: 0,
    physical: 0,
    chemistry: 0
};

// hàm nhập giá trị vào bảng
function myTable() {

    // biến để xác định có lỗi hay không
    var coLoi = false;

    // khai báo biến giá trị nhận được từ ô input
    var ten = document.getElementById("ten").value;
    if (/\d/.test(ten) || ten.length == 0 || ten.replace(/\s/g, "").length == 0) {
        document.getElementById("ten_err").innerHTML = "Tên không hợp lệ!";
        document.getElementById("ten_err").style.color = "red";
        coLoi = true;
    } else {
        document.getElementById("ten_err").innerHTML = "";
    }
    var toan = document.getElementById("toan").value;
    if (isNaN(toan) || toan.replace(/\s/g, "").length == 0 || toan < 0 || toan > 10) {
        document.getElementById("toan_err").innerHTML = "Số không hợp lệ!";
        document.getElementById("toan_err").style.color = "red";
        coLoi = true;
    } else {
        document.getElementById("toan_err").innerHTML = "";
    }
    var ly = document.getElementById("ly").value;
    if (isNaN(ly) || ly.replace(/\s/g, "").length == 0 || ly < 0 || ly > 10) {
        document.getElementById("ly_err").innerHTML = "Số không hợp lệ!";
        document.getElementById("ly_err").style.color = "red";
        coLoi = true;
    } else {
        document.getElementById("ly_err").innerHTML = "";
    }
    var hoa = document.getElementById("hoa").value;
    if (isNaN(hoa) || hoa.replace(/\s/g, "").length == 0 || hoa < 0 || hoa > 10) {
        document.getElementById("hoa_err").innerHTML = "Số không hợp lệ!";
        document.getElementById("hoa_err").style.color = "red";
        coLoi = true;
    } else {
        document.getElementById("hoa_err").innerHTML = "";
    }

    // chuyển dữ liệu sang dạng số
    var toanF = parseFloat(toan);
    var lyF = parseFloat(ly);
    var hoaF = parseFloat(hoa);

    // làm tròn số thập phân về một số sau dấu phẩy
    var toanX = toanF.toFixed(1);
    var lyX = lyF.toFixed(1);
    var hoaX = hoaF.toFixed(1);

    // lưu giá trị vào đỐi tượng testScore
    testScore.name = ten;
    testScore.math = toanX;
    testScore.physical = lyX;
    testScore.chemistry = hoaX;

    // thực hiện thêm hàng vào bảng
    if (coLoi == false){

        // khai báo các biến thể hiện vị trí trong bảng để chèn giá trị input
        var table = document.getElementById("myTable");
        var row = table.insertRow(i);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
    
        // vòng lặp tăng số thứ tự trong bảng
        for (var i = 1, row; row = table.rows[i]; i++) {
            cell0.innerHTML = i;
            cell1.innerHTML = ten;
            cell2.innerHTML = testScore.math;
            cell3.innerHTML = testScore.physical;
            cell4.innerHTML = testScore.chemistry;
            cell5.innerHTML = "?";
        }

        // xoá giá trị ở ô input
        document.getElementById("ten").value = "";
        document.getElementById("toan").value = "";
        document.getElementById("ly").value = "";
        document.getElementById("hoa").value = "";
    }
}

// hàm tính điểm trung bình
function calAverage() {
    var table = document.getElementById("myTable");
    for (var i = 1; i <= table.rows.length; i++) {
        
    var x = document.getElementById("myTable").rows[i].cells;
    var toanC = document.getElementById("myTable").rows[i].cells[2].innerHTML;
    var lyC = document.getElementById("myTable").rows[i].cells[3].innerHTML;
    var hoaC = document.getElementById("myTable").rows[i].cells[4].innerHTML;

    var mathC = parseFloat(toanC);
    var physC = parseFloat(lyC);
    var chemC = parseFloat(hoaC);

    x[5].innerHTML = ((mathC+physC+chemC)/3).toFixed(1);
    }
}


// hàm xác định học sinh giỏi
function calSpecify() {
    var table = document.getElementById("myTable");
    for (var i = 1; i <= table.rows.length; i++) {
        var x = document.getElementById("myTable").rows[i].cells;
        var red = document.getElementById("myTable").rows;
        if (x[5].innerHTML >= 8) {
            red[i].style.color = "red";
        }
    }
}