import bunImg from "./images/bun.png";
import comhenImg from "./images/comhen.png";
import banhbeoImg from "./images/banhbeo.png";
import banhnamImg from "./images/banhnam.png";
import banhlocImg from "./images/banhloc.png";
import cheImg from "./images/che.png";

export const menuItems = [
  {
    id: 1,
    name: "Bún bò Huế Đặc Biệt",
    price: 45000,
    description: "Bún sợi to chuẩn Huế, nước dùng sa tế sả thơm lừng hầm xương ống, giò heo mềm ngậy và chả cua quết tay đậm đà.",
    isSpicy: true,
    image: bunImg,
    badge: "Bán chạy nhất",
  },
  {
    id: 2,
    name: "Cơm hến Hoa Đông",
    price: 28000,
    description: "Cơm nguội trộn hến xào đậm vị, tóp mỡ giòn tan béo ngậy, ớt hiểm cay nồng, ăn kèm hoa chuối và chén nước hến ngọt thanh.",
    isSpicy: true,
    image: comhenImg,
    badge: "Đặc sản",
  },
  {
    id: 3,
    name: "Bánh bèo chén Cung Đình",
    price: 32000,
    description: "Khay 6 chén bánh bèo mềm mướt như lụa, rắc tôm chấy đỏ au, da heo chiên giòn rụm và mỡ hành bóng bẩy chan nước mắm ngọt.",
    isSpicy: false,
    image: banhbeoImg,
    badge: "Món truyền thống",
  },
  {
    id: 4,
    name: "Bánh nậm lá dong",
    price: 25000,
    description: "Bánh nậm bột gạo mềm mịn cán mỏng trên lá dong xanh mướt, nhân tôm thịt băm nhuyễn xào thơm quyến rũ.",
    isSpicy: false,
    image: banhnamImg,
    badge: "Thanh tao",
  },
  {
    id: 5,
    name: "Bánh bột lọc trần tôm thịt",
    price: 35000,
    description: "Vỏ bánh dai giòn trong suốt lộ rõ con tôm sông rim màu cánh gián và thịt ba chỉ béo ngậy, chấm nước mắm ớt chỉ thiên cay nồng.",
    isSpicy: true,
    image: banhlocImg,
    badge: "Đậm vị",
  },
  {
    id: 6,
    name: "Chè hạt sen long nhãn",
    price: 22000,
    description: "Món tráng miệng thanh mát cung đình, hạt sen hồ Tịnh Tâm bùi bở bọc trong cùi nhãn ngọt giòn, nấu cùng đường phèn hoa cúc thanh tao.",
    isSpicy: false,
    image: cheImg,
    badge: "Tráng miệng",
  },
];
