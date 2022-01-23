const user = {
    name : 'loi',
    lastname: 'mai',
    school : 'dtu'
}
exports.up = function(knex) {

  return knex.raw(`
    INSERT INTO user (name,lastname,school)
    VALUES (${user.name},${user.lastname},${user.school})`);
  
};


exports.down = function(knex) {
  
};
