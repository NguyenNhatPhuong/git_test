const hcn = require('./rectangle')

function tinhtoan (cd, cr) {
    if (cd <= 0 || cr <= 0){
        console.log("Nhap lai cd, cr");
    }
    else if (cd < cr ){
        console.log("Cd phai lon hon cr");
    }
    else{
        console.log("Chu vi la: " + hcn.chuvi(cd, cr))
        console.log("Dien tich la: " + hcn.dientich(cd, cr))
    }
}
tinhtoan(8, 3)
tinhtoan(9, 6)
tinhtoan(0, 3)
tinhtoan(3, 5)
tinhtoan(7, -4)