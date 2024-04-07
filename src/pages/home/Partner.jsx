const PARTNER_LIST = [
  "https://dataloop.ai/wp-content/uploads/2024/02/odysight-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/pixellot-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/tranis-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/semalytix-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/shaip-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/Tech_Mahindra_New_Logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/cloud-factory-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/vimeo-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/cogito-logo.svg",
  "https://dataloop.ai/wp-content/uploads/2024/02/syngenta-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/4216-NDWfYZ7qim_x4mNqtHD78nPTmNo1bUOkaa-x3-52ijM-1.png",
  // "https://dataloop.ai/wp-content/uploads/2024/02/Frame-32224.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/seetree-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/uveye-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/asensus-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/brunswick-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/ddd-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/fyusion-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/orpak-logo.svg",
  // "https://dataloop.ai/wp-content/uploads/2024/02/noimos-logo.svg",
];
const Partner = () => {
  return (
    <section className="flex w-screen animation">
      {PARTNER_LIST.map((item, index) => (
        <img src={item} key={index} alt={index} className="w-[300px] h-14"/>
      ))}
    </section>
  );
};

export default Partner;
