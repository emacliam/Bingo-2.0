export default (context) => {
    let agent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
    context.isMobile = /mobile/i.test(agent)
}