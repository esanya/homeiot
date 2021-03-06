'use strict;'

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('temphum.sqlite');
var insertstmt = db.prepare("INSERT INTO temphum (recordedate, tempvalue, humvalue, sensorid) VALUES (?,?,?,?)");
var selectallsstmt = db.prepare("SELECT * FROM temphum order by recordedate");
var selectsnsrstmt = db.prepare("SELECT * FROM temphum WHERE sensorid = ? order by recordedate");

module.exports = function() {
  return {
    /*
     * Save the temphum inside the "db".
     */
    save(temphum) {
      insertstmt.run(parseInt(new Date().getTime()/1000), temphum.tempvalue, temphum.humvalue, temphum.sensorid);
      return 1;
    },
    /*
     * Retrieve a temphum with a given id or return all the temphums if the id is undefined.
     */
    find(id, complcallback) {
      if(id) {
        return selectsnsrstmt.all(id, (err, resultset) => {
	  if(err){
	    console.log('error : ' + err);
	  }else{
//	    console.log('result: ' + JSON.stringify(resultset));
	    complcallback(resultset);
	  }
	});
      }else {
        return selectallsstmt.all((err, resultset) => {
	  if(err){
	    console.log('error : ' + err);
	  }else{
//	    console.log('result: ' + JSON.stringify(resultset));
	    complcallback(resultset);
	  }
	});
      }
    },
    /*
     * Delete a temphum with the given id.
     */
    remove(id) {
      var found = 0;
      this.temphumList = this.temphumList.filter(element => {
        if(element.id === id) {
          found = 1;
        }else {
          return element.id !== id;
        }
      });
      return found;            
    },
    /*
                * Update a temphum with the given id
    */
    update(id, temphum) {
      var temphumIndex = this.temphumList.findIndex(element => {
        return element.id === id;
      });
      if(temphumIndex !== -1) {
        this.temphumList[temphumIndex].title = temphum.title;
        this.temphumList[temphumIndex].year = temphum.year;
        return 1;
      }else {
        return 0;
      }
    }        
  }
};  
// 
//db.serialize(function() {
//  db.run("CREATE TABLE lorem (info TEXT)");
// 
//  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//  for (var i = 0; i < 10; i++) {
//	        stmt.run("Ipsum " + i);
//	    }
//  stmt.finalize();
// 
//  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//        console.log(row.id + ": " + row.info);
//  });
//});
// 
//db.close();
