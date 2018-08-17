
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table)=>{
    table.increments(); // id
    table.string('name');
    table.string('description');
    table.integer('mana');
    table.integer('health');
    table.integer('attack');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
