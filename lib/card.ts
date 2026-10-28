import type {WeddingConfig} from "./wedding";

// Nội dung mặc định của thiệp NHÀ GÁI. Sau khi kết nối Google Sheets có thể sửa trong trang quản lý.
export const defaultWedding: WeddingConfig = {
  side: "nha-gai",
  groom: "Việt Hưng",
  bride: "Khánh Thuỳ",
  groomFull: "Việt Hưng",
  brideFull: "Khánh Thuỳ",
  groomFather: "Trần Phúc Lợi",
  groomMother: "Trần Thị Huyền Chân",
  brideFather: "Bùi Quang Tuyến",
  brideMother: "Nguyễn Thị Lan Anh",
  ceremonyTitle: "Lễ Vu Quy",
  date: "2026-11-14",
  ceremonyTime: "07:00",
  lunarDate: "06 tháng 10 năm Bính Ngọ",
  ceremonyVenue: "Tư gia nhà gái",
  ceremonyHall: "",
  ceremonyAddress: "Số 22 Thượng Đình, Phường Khương Đình, Thành phố Hà Nội",
  receptionTitle: "Tiệc Cưới",
  receptionDate: "2026-11-24",
  receptionTime: "17:00",
  receptionLunar: "16 tháng 10 năm Bính Ngọ",
  receptionVenue: "Trung tâm tiệc cưới và hội nghị MIPEC Palace",
  receptionHall: "Tầng 4 · Sảnh SALON",
  receptionAddress: "Số 229 Tây Sơn, Phường Kim Liên, Thành phố Hà Nội",
  city: "Hà Nội",
  intro: "Hai gia đình chúng tôi vui mừng trân trọng báo tin Lễ Vu Quy của con chúng tôi. Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình và là lời chúc phúc quý giá nhất dành cho đôi trẻ.",
};

// Logo riêng của thiệp (ảnh trong public/images). null = dùng chữ lồng tự động từ tên cô dâu chú rể.
export const cardLogo: {mark:string;full:string}|null = null;
