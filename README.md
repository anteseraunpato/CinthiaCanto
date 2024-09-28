This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


//CÓDIGO DE EXPERIENCIA

<div className="flex flex-col gap-12 justify-center pb-8">
                
                {/*Titulo Experiencia*/}
                <h1 className="font-bold text-2xl">EXPERIENCIA</h1>
                {/*Lista Experiencia*/}
                <div className="">
                    {/*Item Lista Experiencia 1*/}
                    <div className=" flex justify-between h-48 ">
                        {/*Item Experiencia Izquierda*/}
                        <div className="w-1/3">
                        {/*Título del trabajo*/}
                        <div className="bg-purple-200 p-3 font-semibold rounded-b-lg rounded-s-lg">Dirección de psicología</div>
                        {/*Descripción del trabajo*/}
                        <div className="p-3 text-sm italic">Ser directora de psicología duh</div>
                        {/*Fecha del trabajo*/}
                        <div className="p-3 text-purple-600 text-sm font-semibold">2022 - Presente</div>
                        {/*Empresa del trabajo*/}
                        <div className="p-1 bg-purple-200 rounded text-sm font-semibold w-fit">Instituto de psicología</div>
                        </div>
                        {/*Centro*/}
                        <div className="flex justify-center w-1/6">
                          {/*Línea*/}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/*Círculo de TL*/}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-500 bg-white -left-2"></div>
                        </div>
                        </div>
                        {/*Derecha*/}
                        <div className="w-1/3"></div>
                    </div>

                    {/*Item Lista Experiencia 2*/}
                    <div className=" flex justify-between h-48 ">
                        {/*Item Experiencia Izquierda*/}
                        <div className="w-1/3">
                        
                        </div>
                        {/*Centro*/}
                        <div className="flex justify-center w-1/6">
                          {/*Línea*/}
                        <div className="w-1 h-full bg-gray-600 rounded relative">
                          {/*Círculo de TL*/}
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-purple-500 bg-white -left-2"></div>
                        </div>
                        </div>
                        {/*Derecha*/}
                        <div className="w-1/3">
                        {/*Título del trabajo*/}
                        <div className="bg-purple-200 p-3 font-semibold rounded-b-lg rounded-s-lg">Dirección de psicología</div>
                        {/*Descripción del trabajo*/}
                        <div className="p-3 text-sm italic">Ser directora de psicología duh</div>
                        {/*Fecha del trabajo*/}
                        <div className="p-3 text-purple-600 text-sm font-semibold">2022 - Presente</div>
                        {/*Empresa del trabajo*/}
                        <div className="p-1 bg-purple-200 rounded text-sm font-semibold w-fit">Instituto de psicología</div>
                        </div>
                    </div>

                </div>
            </div>