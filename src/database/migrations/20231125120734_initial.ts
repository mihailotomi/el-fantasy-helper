import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    // Create Club table
    await knex.schema.createTable('club', (table) => {
      table.increments('id').primary();
      table.string('code', 10).notNullable();
      table.string('name', 50).notNullable();
      table.string('imageURL', 100);
    });
  
    // Create Player table
    await knex.schema.createTable('player', (table) => {
      table.increments('id').primary();
      table.string('code', 10).notNullable();
      table.string('firstName', 30).notNullable();
      table.string('lastName', 30).notNullable();
      table.smallint('position').notNullable();
      table.integer('clubId').unsigned().references('id').inTable('club');
      table.string('imageURL', 100);
    });
  
    // Create Game table
    await knex.schema.createTable('game', (table) => {
      table.increments('id').primary();
      table.smallint('code').notNullable();
      table.integer('localTeamId').unsigned().references('id').inTable('club');
      table.integer('roadTeamId').unsigned().references('id').inTable('club');
    });
  }
  
  export async function down(knex: Knex): Promise<void> {
    // Drop tables in reverse order to avoid foreign key constraints
    await knex.schema.dropTableIfExists('game');
    await knex.schema.dropTableIfExists('player');
    await knex.schema.dropTableIfExists('club');
  }
