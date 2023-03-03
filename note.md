    main.ts                 entry file of the application which uses the core function NestFactory to create a Nest application instance.

    controller.ts           Controllers are responsible for handling incoming requests and returning responses to the client.
                            Controllers always belong to a module,

    controller.spec.ts      unit tests for the controller
    
    module.ts               


### Controller
    1. using a path prefix          eg: @Controller('cats')

    2. request decorators
            @Req()                      req
            @Res()                      res
            @Next()                     next
            @Session()                  req.session
            @Param(key?: string)        req.params/req.params[key]
            @Body(key?: string)         req.body/req.body[key]
            @Query(key?: string)        req.query/req.query[key]
            @Headers(name?: string)     req.headers/req.headers[name]
            @Ip()                       req.ip
            @HostParam()                req.hosts

    3. http method decorators
        @Get @Post @Put @Delete @Patch @Options @Head (@All defines an endpoint that handles all of them.)

    4. Route wildcards
        eg: @Get('ab*cd')       match: abcd ab_cd abecd

    5. Status Code
        eg: @HttpCode(204)

    6. set res header
        eg: @Header('Cache-Control', 'none')

    7. redirect
        eg: @Redirect('http://www.baidu.com', 301)

    8. route parameter
        eg: 
        @Get(':id')
        @Bind(Param('id'))
        findOne(id) {
            return `This action returns a #${id} cat`;
        }


