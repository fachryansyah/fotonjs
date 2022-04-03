export function up(knex) {
    return knex.schema.createTable("sample", (table) => {
        table.increments("id").unsigned().primary();
        table.string("name", 120).notNullable();
        table.timestamps(true, true);
    });
}

export function down(knex) {
    return knex.schema.dropTable("sample");
}
