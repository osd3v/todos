---color table
create table if not exists color(colorcod integer primary key autoincrement,colorhex text not null,colornom text null);
---palette table
create table if not exists palette(palettecod integer primary key autoincrement,nombre text not null, organizacion text null,fechacreacion datetime not null,descripcion text null);
---colorpalettetable
create table if not exists colorpalette(codigo integer primary key autoincrement,
colorcod integer not null,
palettecod integer not null,
foreign key(colorcod) references color(colorcod),
foreign key(palettecod) references color(palettecod));
