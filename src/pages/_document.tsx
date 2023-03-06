import Document, { Html, Head, Main, NextScript } from "next/document"


export default class Mydocument extends Document {
    render(){
        return(
           <Html>
           
            <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display==Indie+Flowe=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"></link>
            </Head>

            <body>
                <Main />
                <NextScript/>
            </body>
            
           </Html>
        )
    }
}