import img1 from "../../assets/images/asus.png";
import img2 from "../../assets/images/hp.png";

const ProductImages = () => {
  return (
    <div>
      {/* <img width={100} src={img1} alt="" />
      <img width={100} src={img2} alt="" /> */}
      <img width={100} src="../../../public/images/asus.png" alt="" />
      <img width={100} src="../../../public/images/hp.png" alt="" />
    </div>
  );
};

export default ProductImages;
