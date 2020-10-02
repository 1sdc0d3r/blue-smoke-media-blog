exports.up = function (knex) {
    return knex.schema.createTable("Articles", (tbl) => {
        tbl.increments("id").primary();
        tbl.string("title").notNullable();
        tbl.string("author").notNullable();
        tbl.string("date")
        tbl.string("imageUrl").notNullable();
        tbl.string("imageAlt").notNullable();
        tbl.string("category").notNullable();
        tbl.string("tags", 65535).notNullable();
        tbl.string("snippet", 65535).notNullable();
        tbl.string("content", 65535).notNullable();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Articles")
};
