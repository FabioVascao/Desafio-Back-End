exports.up = knex => knex.schema.createTable("Movies_Tags", table => {
    table.increments("id");
    table.text("Name");
    table.integer("movies_note_id").references("id").inTable("movies_note");
    table.integer("user_id").references("id").inTable("users");
});

exports.down = knex => knex.schema.dropTable("users");
