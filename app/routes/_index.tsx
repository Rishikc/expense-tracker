import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="h-screen w-full bg-slate-600">
      <h1 className="text-5xl font-bold text-blue-400">
        Hello world!
      </h1>
    </div>
  );
}
