exports.up = knex => knex.schema.createTable("users", table => {
    table.increments("id");
    table.text("Name");
    table.text("Email");
    table.text("Password");
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable("users");
