export default async function(context) {
    let agent = await context.req.headers['user-agent']
    context.isMobile = /mobile/gi.test(agent)
}