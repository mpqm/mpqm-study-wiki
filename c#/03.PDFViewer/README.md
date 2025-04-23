Install-Package Microsoft.ReportViewer.Common
Install-Package System.Data.SQLite
Install-Package Microsoft.ReportViewer.WinForms

CREATE TABLE TB_DUMMY1 (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    info1 TEXT,
    info2 INTEGER
);

CREATE TABLE TB_DUMMY2 (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    info1 TEXT,
    info2 INTEGER
);

INSERT INTO TB_DUMMY1 (info1, info2) VALUES
('Alice', 1),
('Bob', 2),
('Charlie', 3),
('Diana', 4),
('Elice', 5),
('Forden', 6);

INSERT INTO TB_DUMMY2 (info1, info2) VALUES
('AAAAA', 11),
('BBBBB', 22),
('CCCCC', 33),
('DDDDD', 44),
('EEEEE', 55),
('FFFFF', 66);