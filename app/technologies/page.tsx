"use client";
import React from 'react';

const technologies = [
  { 
    name: "Next.js", 
    description: "A powerful React framework for server-side rendering and static site generation.",
    image: "/images/nextjs-logo.png", 
    exampleCode: `import { useRouter } from 'next/router';`,
  },
  { 
    name: "TypeScript", 
    description: "Provides static typing for improved code quality and development efficiency.",
    image: "/images/typescript-logo.png",
    exampleCode: `const greeting: string = "Hello, TypeScript!";`,
  },
  { 
    name: "Tailwind CSS", 
    description: "A utility-first CSS framework for rapid UI development.",
    image: "/images/tailwindcss-logo.png",
    exampleCode: `<div className="bg-gray-100 p-4">Tailwind CSS example</div>`,
  },
  { 
    name: "Storybook UI", 
    description: "Developing and testing components in isolation.",
    image: "/images/storybook-logo.png",
    exampleCode: `import { storiesOf } from '@storybook/react';`,
  },
  { 
    name: "NextAuth.js", 
    description: "Handles authentication for seamless login and session management.",
    image: "/images/nextauth-logo.png",
    exampleCode: `import { signIn } from 'next-auth/client';`,
  },
  { 
    name: "Prisma ORM", 
    description: "Manages database connections with PostgreSQL for structured data.",
    image: "/images/prisma-logo.png",
    exampleCode: `const user = await prisma.user.findMany();`,
  },
  { 
    name: "GraphQL", 
    description: "Efficient querying language for APIs.",
    image: "/images/graphql-logo.png",
    exampleCode: `query { users { id, name } }`,
  },
  { 
    name: "PostgreSQL", 
    description: "Scalable relational database used to store data for the application.",
    image: "/images/postgresql-logo.png",
    exampleCode: `CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100));`,
  },
  { 
    name: "Jest", 
    description: "Testing framework for unit tests, ensuring code quality and preventing regressions.",
    image: "/images/jest-logo.png",
    exampleCode: `test('adds 1 + 2 to equal 3', () => { expect(1 + 2).toBe(3); });`,
  },
  { 
    name: "Cypress", 
    description: "End-to-end testing framework for the UI.",
    image: "/images/cypress-logo.png",
    exampleCode: `cy.visit('/'); cy.get('.btn').click();`,
  },
  { 
    name: "Swagger", 
    description: "API documentation interface.",
    image: "/images/swagger-logo.png",
    exampleCode: `swagger-ui-express library setup example`,
  },
  { 
    name: "ESLint & Prettier", 
    description: "Code linting and formatting.",
    image: "/images/eslint-prettier-logo.png",
    exampleCode: `const config = require('eslint-config');`,
  },
  { 
    name: "LLM Integration", 
    description: "Chatbot and advanced language model integration.",
    image: "/images/llm-logo.png",
    exampleCode: `const response = await llm.query("Hello");`,
  }
];

const TechnologiesPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Technologies used in this Site</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img src={tech.image} alt={`${tech.name} logo`} className="w-16 h-16 mb-4"/>
            <h3 className="text-xl font-semibold">{tech.name}</h3>
            <p className="text-center mb-2">{tech.description}</p>
            <div className="bg-gray-100 rounded p-2 text-sm overflow-x-auto w-full text-left mt-2">
              <pre>{tech.exampleCode}</pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesPage;
