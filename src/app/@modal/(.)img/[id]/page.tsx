import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = +photoId;
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid ID");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
