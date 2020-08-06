export default function(context) {
    let agent = context.req.headers['user-agent']
    context.isMobile = /mobile/gi.test(agent)
}