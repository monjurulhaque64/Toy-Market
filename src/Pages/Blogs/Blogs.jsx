import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1 className=' mb-2 text-lg text-purple-400 font-bold' >1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p><span className='text-purple-400 font-bold mr-2'>Answer:</span> Access tokens are provided by the authorization server to client applications after user authentication. They serve as credentials for accessing protected resources on the server. These tokens have a limited validity period for security reasons. When they expire, client applications can use a refresh token to obtain a new access token without prompting the user to log in again. Refresh tokens help maintain continuous access to resources while minimizing the need for repeated user authentication.</p>
            </div>
            <div>
                <h1 className=' mb-2 text-lg text-purple-400 font-bold' >2. Compare SQL and NoSQL databases?</h1>
                <p><span className='text-purple-400 font-bold mr-2'>Answer:</span> SQL databases are like traditional spreadsheets, where data is organized into tables with a fixed structure. They use a language called SQL to interact with the data and have a predetermined layout. On the other hand, NoSQL databases are more flexible and can handle unstructured data like documents or JSON. They come in different types, such as document stores or key-value stores, and allow for horizontal scaling to handle large amounts of data. SQL databases are good for complex transactions involving multiple rows, while NoSQL databases excel at handling diverse and unstructured data.</p>
            </div>
            <div>
                <h1 className=' mb-2 text-lg text-purple-400 font-bold' >3. What is express js? What is Nest JS?</h1>
                <p><span className='text-purple-400 font-bold mr-2'>Answer:</span> NestJS is a framework for creating server-side applications using Node.js. It offers a structured and scalable approach, built on top of Express.js. With NestJS, developers can build efficient and reliable applications using TypeScript. Express, on the other hand, is a lightweight framework for creating web and mobile applications with Node.js. It provides a flexible and customizable environment for developers to build applications according to their preferences. Express is known for its simplicity and widespread usage among developers.</p>
            </div>
            <div>
                <h1 className=' mb-2 text-lg text-purple-400 font-bold' >4. What is MongoDB aggregate and how does it work?</h1>
                <p><span className='text-purple-400 font-bold mr-2'>Answer:</span> When you have complex data processing needs in MongoDB, you can use the aggregation pipeline. The pipeline consists of multiple stages that allow you to perform advanced operations and obtain aggregated results.
                <br />

                    To understand how it works, think of the pipeline as a series of instructions. Each stage represents a specific operation that MongoDB executes sequentially. This allows you to transform and manipulate data until you get the desired output.
                    <br />

                    Here's an example of how you can use the aggregate command with the pipeline to perform advanced data operations in MongoDB.</p>
            </div>
        </div>
    );
};

export default Blogs;