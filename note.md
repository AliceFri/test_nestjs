    main.ts                 entry file of the application which uses the core function NestFactory to create a Nest application instance.

    controller.ts           Controllers are responsible for handling incoming requests and returning responses to the client.
                            Controllers always belong to a module,

    controller.spec.ts      unit tests for the controller

    services.ts                

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


### Providers
    Providers are a fundamental concept in Nest.

    Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on.

    a provider is that it can be injected as a dependency

    When the application is bootstrapped, every dependency must be resolved, and therefore every provider has to be instantiated. 

    @Injectable, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere

    @Optional()  can make a provider optional   

    @Inject()       Property-based injection 

#### Providers.Services
    @Injectable 


### Modules
    providers       the providers  that may be shared at least across this module

    controllers     the set of controllers defined in this module which have to be instantiated

    imports         the list of imported modules that export the providers which are required in this module

    exports         export the subset of pproviders of this module

    In Nest, modules are singletons by default, and thus you can share the same instance of any provider between multiple modules effortlessly.

    When you want to provide a set of providers which should be available everywhere out-of-the-box (e.g., helpers, database connections, etc.), make the module global with the @Global() decorator.


### Middleware

    Middleware is a function which is called before the route handler

    You implement custom Nest middleware in either a function, or in a class with an @Injectable() decorator. 

    apply in module:

    eg:
        configure(consumer: MiddlewareConsumer) {consumer.apply(LoggerMiddleware).forRoutes('cats');}
        configure(consumer: MiddlewareConsumer) {consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.GET });}
        configure(consumer: MiddlewareConsumer) {consumer.apply(LoggerMiddleware).forRoutes(CatsController);}
        consumer.apply(LoggerMiddleware).exclude({ path: 'cats', method: RequestMethod.GET },
            { path: 'cats', method: RequestMethod.POST },'cats/(.*)',).forRoutes(CatsController);

    function middleware

    export function logger(req: Request, res: Response, next: NextFunction) {
        console.log(`Request...`);
        next();
    };

--------


### Exception
    
    Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application.
