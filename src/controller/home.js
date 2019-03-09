const HomeService = require('../service/home');

module.exports = {
    index: async(ctx, next) => {
        await ctx.render("home/index", {title: "iKcamp欢迎您"})
    },
    home: async(ctx, next) => {
        console.log(ctx.params);
        ctx.response.body = `home page`;
    },
    homeParams: async(ctx, next) => {
        console.log(ctx.params);
        ctx.response.body = `<h1>home page /:id/:name </h1>`;
    },
    login: async(ctx, next) => {
        await ctx.render('home/login', {
            btnName:'Submit1'
        })
    },
    register: async (ctx, next) => {
        let params = ctx.request.body
        let name = params.name
        let password = params.pwd
        let res = await HomeService.register(name,password)
        if(res.status == "-1"){
          await ctx.render("home/login", res.data)
        }else{
          ctx.state.title = "个人中心"
          await ctx.render("home/success", res.data)
        }
      
    }
}


