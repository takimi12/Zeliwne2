/** @type {import('next').NextConfig} */
module.exports = {
    // output: 'export',
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'localhost',
                port:'1337',
                pathname:'/uploads/**',
            },
        ],
    },
};
const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}