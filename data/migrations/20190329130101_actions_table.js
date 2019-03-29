
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
        tbl.increments();//creates auto-incrementing primary key called id by default

        tbl
            .string('description', 256)
            .notNullable();
        
        tbl
            .string('notes', 128)
            .notNullable();
    
        tbl
            .boolean('completed')
            .notNullable();
        
        //foreign key from projects
        tbl
            .integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
};
