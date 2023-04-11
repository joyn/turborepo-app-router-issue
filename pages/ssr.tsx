import { Button } from "ui";
import { version } from "react";

console.log({ version });

export const getServerSideProps = async () => {
  return {
    props: {
      date: new Date().toString(),
    },
  };
};

export default function Web({ date }: { date: string }) {
  return (
    <div>
      <h1>Hello from pages-dir (SSR). React: {version}</h1>
      <pre>{date}</pre>
      <Button />
    </div>
  );
}
