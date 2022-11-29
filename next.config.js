module.exports = {
    async rewrites () {
        return [

            {
                destination:'/product/:path*',
                source: '/avocado/:path*'
            }            
        ]
    }
}