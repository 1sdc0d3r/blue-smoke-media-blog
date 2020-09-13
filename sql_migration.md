--
-- File generated with SQLiteStudio v3.2.1 on Sun Sep 13 14:27:35 2020
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: Articles
CREATE TABLE Articles (
id INTEGER NOT NULL
PRIMARY KEY AUTOINCREMENT,
title VARCHAR (255) NOT NULL,
author VARCHAR (255) NOT NULL,
date VARCHAR (255) NOT NULL,
imageUrl VARCHAR (255) NOT NULL,
imageAlt VARCHAR (255) NOT NULL,
category VARCHAR (255) NOT NULL,
snippet VARCHAR (255) NOT NULL,
content VARCHAR (255) NOT NULL
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
1,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
2,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
3,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
6,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
7,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
8,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
9,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

INSERT INTO Articles (
id,
title,
author,
date,
imageUrl,
imageAlt,
category,
snippet,
content
)
VALUES (
10,
'NEW Title',
'Author',
'12/12/20',
'https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg',
'img alt',
'Category',
'Your custom website design must represent you well while appealing effectively to your customers...',
'Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits...'
);

-- Table: knex_migrations
CREATE TABLE knex_migrations (
id INTEGER NOT NULL
PRIMARY KEY AUTOINCREMENT,
name VARCHAR (255),
batch INTEGER,
migration_time DATETIME
);

INSERT INTO knex_migrations (
id,
name,
batch,
migration_time
)
VALUES (
1,
'20200912150343_article.js',
1,
1599944901695
);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
