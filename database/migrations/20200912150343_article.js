exports.up = function (knex) {
    return knex.schema.createTable("Articles", (tbl) => {
        tbl.increments("id").primary();
        tbl.string("title").notNullable();
        tbl.string("author").notNullable();
        tbl.string("date").notNullable();
        tbl.string("imageUrl").notNullable();
        tbl.string("imageAlt").notNullable();
        tbl.string("category").notNullable();
        tbl.string("tags").notNullable();
        tbl.string("snippet").notNullable();
        tbl.string("content").notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Articles")
};
