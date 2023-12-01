import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
}

export default function Logo({ logo }: Props) {
  return (
    <>
      {logo?.image && (
        <div class="flex flex-col gap-3">
          <span class="font-medium text-lg">Sobre nós</span>
          <div class="">
            {logo?.description}
          </div>
        </div>
      )}
    </>
  );
}
