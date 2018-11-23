exports.up = function(knex, Promise) {
    return knex.schema.createTable('creditCard', (table)=>{
        table.increments();
        table.integer('cardNumber').unique();
        table.string('bankName');
        table.boolean('active');
        table.decimal('balance');
        table.integer('holderId').unique().unsigned();
        table.foreign('holderId').references('users.id');
        table.timestamps(true,true);
    })
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('creditCard')
};
