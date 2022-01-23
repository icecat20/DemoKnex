/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 const user = {
    id: 1,
    name: "lanh",
    lastname: "mai",
    school: "eeee",
  };
  
exports.up = function(knex) {
    return knex.raw(`
    DELETE FROM "user"
    WHERE "id" = '${user.id}';
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

  
};
