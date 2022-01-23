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

exports.up = function (knex) {
  return knex.raw(`
    UPDATE "user"
    SET "name"='${user.name}',"lastname"='${user.lastname}',"school"='${user.school}'
    WHERE id = '${user.id}'
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
