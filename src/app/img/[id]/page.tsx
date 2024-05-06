import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = +photoId;
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  return <FullPageImageView id={idAsNumber} />;
}