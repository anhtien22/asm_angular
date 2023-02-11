var db=require('./database'); 
// exports.list = function( callback) { 
//     let sql = `SELECT id,tenSach,moTa, urlHinh, gia FROM sach order by id desc`;
//     db.query(sql, function(err, d) { callback(d); }  );
// }
// exports.list = function( callback) { 
//     let sql = `SELECT id,tenSach,moTa, urlHinh, capNhat, gia FROM sach order by capNhat desc`;
//     db.query(sql, function(err, d) { callback(d); }  );
// }
// exports.list = function( callback) { 
//     let sql = `SELECT id,tenSach, moTa, urlHinh, capNhat, gia, soLanXem FROM sach order by soLanXem desc`;
//     db.query(sql, function(err, d) { callback(d); }  );
// }
// exports.list = function( callback) { 
//     let sql = `SELECT id,tenSach,moTa, urlHinh, capNhat, gia, soLanXem, noiBat FROM sach where noiBat=1 limit 0,5`;
//     db.query(sql, function(err, d) { callback(d); }  );
// }
exports.create = function(data, callback ) { //hàm chèn user mới vào table 
    let sql = 'INSERT INTO sach SET ?';
    db.query(sql, data, function(err, d) { callback(d) }  );    
} 
exports.update = function(id, data, callback) { 
    let sql = 'UPDATE sach SET ? WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    let sql = 'SELECT * FROM sach WHERE id = ?'
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
} 