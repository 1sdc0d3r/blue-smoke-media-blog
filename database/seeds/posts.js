exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('Articles').insert([{
        id: 1,
        title: "Title1",
        author: "Author1",
        date: "12/12/20",
        imageUrl: "https://blue-smoke-media.s3-us-west-1.amazonaws.com/eagle.jpg",
        imageAlt: "img alt",
        category: "category1",
        tags: ["tag1", "tag4", "tag5"],
        snippet: "Your custom website design must represent you well while appealing effectively to your customers...",
        content: "Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits..."
      }, {
        id: 2,
        title: "Title2",
        author: "Author1",
        date: "12/12/20",
        imageUrl: "https://blue-smoke-media.s3-us-west-1.amazonaws.com/computer-money.jpg",
        imageAlt: "img alt",
        category: "category2",
        tags: ["tag1", "tag2", "tag3"],
        snippet: "Your custom website design must represent you well while appealing effectively to your customers.",
        content: "Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits..."
      }, {
        id: 3,
        title: "Title3",
        author: "Author2",
        date: "12/12/20",
        imageUrl: "https://blue-smoke-media.s3-us-west-1.amazonaws.com/digital-marketing-tiles.jpg",
        imageAlt: "img alt",
        category: " category3",
        tags: ["tag2", "tag3", "tag5"],
        snippet: "Your custom website design must represent you well while appealing effectively to your customers.",
        content: "Your custom website design must represent you well while appealing effectively to your customers.Your website will be designed to rank well in search engines increasing your exposure and attracting interested potential customers to your website, giving you these benefits..."
      }]);
    });
};
