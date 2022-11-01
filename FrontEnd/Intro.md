
Structure of Web Application : 

    1) Client 

        a) HTML
        b) CSS
        c) JavaScript

        Frameworks : 

            1) JQuery
            2) ReactJs
            3) Angular

    2) Server Side : 

            a) Middleware :

                1) Java -> Spring Boot
                2) Node.Js -> Express
                3) Python -> Django

            b) Database : 

                RDBMS : 

                    1) MySQL
                    2) Oracle
                    3) SQL Server
                    4) DB2

                NoSQL :

                    1) MonogoDB
                    2) DynamoDB
                    3) Cassandra
                    4) HBase


URL(Uniform Resource Locator) :

    Uniquely identify particular resource on the internet.

    Structure : 

        Protocol : // Host : Port / Path

        Protocol : 

            http / https

        Host : 

            Name of the server we want to connect to

            ex : Youtube
        
        Port : 

            TCP/IP 

            80.

        Path : 

            "/" -> Webroot

        ex : https://www.youtube.com/results?search=chiranjeevi_movies

    
Protocols : 

    HTTP(Hyper Text Transfer Protocol) : 

        Set of rules for transfering the files. 
            ex : Text, Graphics, Images, Sound, Video, other multimedia files.

    HTTPS(Hyper Text Transfer Protocol over secured socket layer) :

        Vinay -> $^TR^

HTTP Request Types : 

    1) Get method :

        Get some Static Content: 

            1) Parameters  : name-value pairs

                ex :
                     username : "Vinay",
                     password : 123
                    
            2) Small amount of data

            3) Sensitive information through -> the data will be visible in the URL itself :

                    ex : https://www.youtube.com/sign_in?username="Vinay"&password=123

    2) Post method : 

        Send parameters that need to be processed to the server.
        
            1) Parameters are passed as part of message body.

                ex: {
                     username : "Vinay",
                     password : 123
                    }

            2) Huge amount of data( used when large number of field values to be passed ).

            3) Mostly use post for data transaction.

    3) Update, Put

        
HTTP Responses :


    Status Codes : 

        1) 1XX -> Informational Reponses
        2) 2XX -> Success ex : 200
        3) 3XX -> Redirection
        4) 4XX -> Client Errors ex : 403, 404
        5) 5XX -> Server Errors ex : 500


MIME(Multipupose Internet Mail Extensions) :

    1) Text : 

        a) text/plain
        b) text/html
        c) text/css
        d) text/javascript 

    2) Image :
     
        a) image/png
        b) image/jpg
        c) image/gif

    3) application : 

        a) application/json
        b) application/sql
        c) application/javascript 


