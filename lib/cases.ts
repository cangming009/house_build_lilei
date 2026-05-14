export interface CaseItem {
  id: string;
  title: string;
  location: string;
  content: string;
  area: string;
  duration: string;
  description: string;
  image: string;
}

// 占位图使用 placehold.co，后期替换为真实图片只需修改 image 字段
export const cases: CaseItem[] = [
  {
    id: "case-1",
    title: "任丘农村二层自建房",
    location: "任丘市出岸镇",
    content: "主体施工 · 室内装修",
    area: "280㎡",
    duration: "6个月",
    description:
      "二层欧式风格农村自建房，包含主体框架施工、外墙保温、门窗安装及室内简装。客户对布局要求较高，经多次沟通确定了最终方案。",
    image: "https://placehold.co/600x400/e2e8f0/475569?text=二层自建房",
  },
  {
    id: "case-2",
    title: "旧房翻新改造",
    location: "任丘市石门桥镇",
    content: "旧房翻新 · 室内装修",
    area: "160㎡",
    duration: "3个月",
    description:
      "20年老房全面翻新，包括墙体改造、水电重铺、地面铺设、厨房卫生间整体改造。翻新后居住体验大幅提升。",
    image: "https://placehold.co/600x400/fed7aa/9a3412?text=旧房翻新",
  },
  {
    id: "case-3",
    title: "任丘农村一层平房",
    location: "任丘市梁召镇",
    content: "主体施工 · 地面硬化",
    area: "200㎡",
    duration: "4个月",
    description:
      "一层农村平房，含庭院地面硬化和院墙门楼施工。户型方正，采光良好，施工周期短，造价控制合理。",
    image: "https://placehold.co/600x400/bfdbfe/1e40af?text=一层平房",
  },
  {
    id: "case-4",
    title: "自建房室内装修",
    location: "任丘市辛中驿镇",
    content: "室内装修 · 院墙门楼",
    area: "240㎡",
    duration: "2.5个月",
    description:
      "新建自建房室内精装修，包含吊顶、墙面、地面、橱柜卫浴安装，以及院墙和大门施工。整体风格简约现代。",
    image: "https://placehold.co/600x400/bbf7d0/166534?text=室内装修",
  },
  {
    id: "case-5",
    title: "农村别墅主体施工",
    location: "任丘市长丰镇",
    content: "主体施工",
    area: "320㎡",
    duration: "5个月",
    description:
      "三层农村别墅主体框架施工，含地基处理、主体浇筑、楼板施工。采用标准施工工艺，质量可靠。",
    image: "https://placehold.co/600x400/fbcfe8/9d174d?text=别墅施工",
  },
  {
    id: "case-6",
    title: "沿街门面装修",
    location: "任丘市城区",
    content: "室内装修 · 地面硬化",
    area: "150㎡",
    duration: "2个月",
    description:
      "沿街门面房室内外装修，含门头招牌制作、室内吊顶墙面、地面硬化处理。工期紧凑，按时交付。",
    image: "https://placehold.co/600x400/cfcfe8/4c1d95?text=门面装修",
  },
];
