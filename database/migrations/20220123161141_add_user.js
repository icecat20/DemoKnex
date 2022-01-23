const user = {
    id : 1,
    name : 'loi',
    lastname: 'mai',
    school : 'dtu'
}
exports.up = function(knex) {

  return knex.raw(`
    INSERT INTO "user" ("id","name","lastname","school")
    VALUES (${user.id},'${user.name}','${user.lastname}','${user.school}')`);
  
};


exports.down = function(knex) {
  
};
