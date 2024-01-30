// interface Props {
//   params: { slug: string };
// }

export default function PostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <main>
      <h1>You are here: /blog/{slug}</h1>
    </main>
  );
}
