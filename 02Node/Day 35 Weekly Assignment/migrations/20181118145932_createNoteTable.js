
exports.up = function(knex, Promise) {
    return knex.schema.createTable('note',(table)=>{
        table.increments();
        table.string("content");
        table.integer('user_id').unsigned();
        table.foreign('user').references('user.id');
        table.timestamps(true,true);

    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('note');
};
