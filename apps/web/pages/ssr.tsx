import { Button } from "ui";

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
      <h1>Hello from pages-dir (SSR)</h1>
      <pre>{date}</pre>
      <Button />
    </div>
  );
}
