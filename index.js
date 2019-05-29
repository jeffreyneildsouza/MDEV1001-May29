const sqlite = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

db.serialize(function(){
    db.run("CREATE TABLE Instructor(ID NUMBER, Name TEXT, Dept_name TEXT, Salary NUMBER)");
    db.run("INSERT INTO Instructor VALUES(10101, 'Srinivasan', 'Comp. Sci.', 65000)");
    db.run("INSERT INTO Instructor VALUES(12121, 'Wu', 'Finance', 90000)");
    db.run("INSERT INTO Instructor VALUES(15151, 'Mozart', 'Music', 90000)");
    db.run("INSERT INTO Instructor VALUES(22222, 'Einstien', 'Physics', 95000)");
    db.run("INSERT INTO Instructor VALUES(32343, 'El Said', 'History', 62000)");
    db.run("INSERT INTO Instructor VALUES(3456, 'Gold', 'Physics', 87000)");
    db.run("INSERT INTO Instructor VALUES(45565, 'Katz', 'Comp. Sci.', 75000)");
    db.run("INSERT INTO Instructor VALUES(58583, 'Califieri', 'History', 62000)");
    db.run("INSERT INTO Instructor VALUES(22222, 'Singh', 'Finance', 80000)");
    db.run("INSERT INTO Instructor VALUES(32343, 'Crick', 'Biology', 72000)");
    db.run("INSERT INTO Instructor VALUES(3456, 'Brandt', 'Comp. Sci.', 92000)");
    db.run("INSERT INTO Instructor VALUES(45565, 'Kim', 'Elec. Eng.', 80000)");



});