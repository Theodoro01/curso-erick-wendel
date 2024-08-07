const http = require('http')
const DEFAULT_USER  = { username: "ErickWendel", password: "123" }

const routes = {
    '/contact:GET': (request, response) => {
        response.write('contact us page')
        return response.end()
    },

    '/login:POST': async (request, response) => {
        for await (const data of request){
            const user = JSON.parse(data)
            if (
                user.username !== DEFAULT_USER.username ||
                user.password !== DEFAULT_USER.password
            ) {
                response.write("Logging failed!");
                response.end();
                return;
            }
            response.write("Logging has succeeded!")
            return response.end()
        }
    },

    default: (request, response) => {
        response.write('Hello World!')
        return response.end()
    }
}

const handler = function (request, response) {
    const { url, method } = request
    const routeKey = `${url}:${method}`
    const chosen = routes[routeKey] || routes.default
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    return chosen(request, response)
}

const app = http.createServer(handler)
    .listen(3000, () => console.log('app runing at', 3000));

module.exports = app;