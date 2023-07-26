import "../app/globals.scss";

export const FlexBasis1 = {
  Component: () => {
    return (
      <div class="flex flex-row">
        <div class="bg-gray-200 p-2 m-2 basis-1/4">01</div>
        <div class="bg-gray-200 p-2 m-2 basis-1/2">02</div>
        <div class="bg-gray-200 p-2 m-2 basis-1/4">03</div>
      </div>
    );
  },
  code: `<div class="flex flex-row">
	<div class="bg-gray-200 p-2 m-2 basis-1/4">01</div>
	<div class="bg-gray-200 p-2 m-2 basis-1/2">02</div>
	<div class="bg-gray-200 p-2 m-2 basis-1/4">03</div>
</div>`,
};
