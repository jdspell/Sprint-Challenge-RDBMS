
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
    tbl.increments();//creates auto-incrementing primary key called id by default

    tbl
        .string('name', 128)
        .notNullable();

    tbl
        .string('description', 256)
        .notNullable();

    tbl
        .boolean('completed')
        .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects');
};
