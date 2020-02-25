module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/victorcrypto/300846f2e76646b69832f0f1eb569e66?v=49156be41cb94c5b847a0206d93dc38e"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/victorcrypto/330f7ee7bda347d08e4ed3da57bf1aa5?v=de56a915e66a4b5395cd5109e399c8d7"
            }
        }
    ],
}
