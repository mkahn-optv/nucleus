/**
 * waterlock
 *
 * defines various options used by waterlock
 * for more informaiton checkout
 *
 * http://waterlock.ninja/documentation
 */
module.exports.waterlock = {

    // Base URL
    //
    // used by auth methods for callback URI's using oauth and for password
    // reset links.
    baseUrl: 'http://localhost:1337',

    alwaysValidate: true, // force account validation always

    // Auth Method(s)
    //
    // this can be a single string, an object, or an array of objects for your
    // chosen auth method(s) you will need to see the individual module's README
    // file for more information on the attributes necessary. This is an example
    // of the local authentication method with password reset tokens disabled.
    authMethod: [
        {
            name:             'waterlock-local-auth',
            passwordReset:    {
                tokens:   true,
                mail:     {
                    protocol:   'SMTP',
                    options:    {
                        service: 'SendGrid',
                        auth:    {
                            user: 'USER', // These are set in local.js in our fork of waterlock-local-auth
                            pass: 'PASS'  //
                        }
                    },
                    from:       'no-reply@domain.com',
                    subject:    'You forgot how to Overplay!',
                    forwardUrl: 'http://localhost:1337/auth/resetPwd'
                },
                template: {
                    file: '../views/email.jade',
                    vars: {}
                }
            },
            validateAccount:         {

                template: {
                    file: '../views/validateemail.jade',
                    vars: {}
                },
                redirectOnValidateUrl: '/validated'
                
            },
            createOnNotFound: false // MAK: otherwise it autocreates account
        }
    ],

    // JSON Web Tokens
    //
    // this provides waterlock with basic information to build your tokens,
    // these tokens are used for authentication, password reset,
    // and anything else you can imagine
    jsonWebTokens: {

        // CHANGE THIS SECRET
        secret:   'HiggsBoson',
        expiry:   {
            unit:   'days',
            length: '7'
        },
        audience: 'Nucleus',
        subject:  'Proton',

        // tracks jwt usage if set to true
        trackUsage: true,

        // if set to false will authenticate the
        // express session object and attach the
        // user to it during the hasJsonWebToken
        // middleware
        stateless: false,

        // set the name of the jwt token property
        // in the JSON response
        tokenProperty: 'token',

        // set the name of the expires property
        // in the JSON response
        expiresProperty: 'expires',

        // configure whether or not to include
        // the user in the respnse - this is useful if
        // JWT is the default response for succesfull login
        includeUserInJwtResponse: false
    },

    // Post Actions
    //
    // Lets waterlock know how to handle different login/logout
    // attempt outcomes.
    postActions: {

        // post login event
        login: {

            // This can be any one of the following
            //
            // url - 'http://example.com'
            // relativePath - '/blog/post'
            // obj - {controller: 'blog', action: 'post'}
            // string - 'custom json response string'
            // default - 'default'
            success: 'default',

            // This can be any one of the following
            //
            // url - 'http://example.com'
            // relativePath - '/blog/post'
            // obj - {controller: 'blog', action: 'post'}
            // string - 'custom json response string'
            // default - 'default'
            failure: 'default'
        },

        //post logout event
        logout:   {

            // This can be any one of the following
            //
            // url - 'http://example.com'
            // relativePath - '/blog/post'
            // obj - {controller: 'blog', action: 'post'}
            // string - 'custom json response string'
            // default - 'default'
            success: 'default',

            // This can be any one of the following
            //
            // url - 'http://example.com'
            // relativePath - '/blog/post'
            // obj - {controller: 'blog', action: 'post'}
            // string - 'custom json response string'
            // default - 'default'
            failure: 'default'
        },
        // post register event
        register: {
            // This can be any one of the following
            //
            // url - 'http://example.com'
            // relativePath - '/blog/post'
            // obj - {controller: 'blog', action: 'post'}
            // string - 'custom json response string'
            // default - 'default'
            success: 'default',
            // This can be any one of the following
            //
            // url - 'http://example.com'
            // relativePath - '/blog/post'
            // obj - {controller: 'blog', action: 'post'}
            // string - 'custom json response string'
            // default - 'default'
            failure: 'default'
        }
    }
};
