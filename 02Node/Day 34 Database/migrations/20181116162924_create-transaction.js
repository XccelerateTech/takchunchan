exports.up = function(knex, Promise) {
    return knex.schema.createTable('transaction', (table)=>{
        table.increments();
        table.integer('creditCardNumber').unsigned();
        table.foreign('creditCardNumber').references('creditCard.cardNumber');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('users.id');
        table.decimal('amount')
        table.timestamps(true,true);
    })
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('transaction')
};
