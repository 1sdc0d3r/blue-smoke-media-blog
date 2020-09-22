exports.up = function (knex) {
    return knex.schema.createTable("Comments", (tbl) => {
        tbl.increments("id").primary();
        // todo references
        tbl.string("article_id").notNullable();
        tbl.timestamp("created_at").defaultTo(knex.fn.now());
        tbl.string("name").notNullable();
        tbl.string("email").notNullable();
        tbl.string("comment").notNullable();
        tbl.boolean("verified").defaultTo(false);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Comments")
};
