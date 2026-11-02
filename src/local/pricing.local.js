const pricing = [
  {
    id: 1,
    title: "You paid what you get!",
    desc: "Dapatkan free-feature untuk harga minimum yang telah kami sesuaikan agar tetap terjangkau dan fungsional.",
  },
  {
    id: 2,
    title: "Maintenance support.",
    desc: "Menyediaan maintenance 'gratis' untuk menjaga program kamu tetap berjalan normal dalam masa maintenance.",
  },
  {
    id: 3,
    title: "Rich in Add-ons",
    desc: "Jelajahi berbagai add-ons kami sebelum menyelesaikan kesepakatan projek untuk memperkaya fitur dalam program kamu.",
  },
  {
    id: 4,
    title: "You decided what you want!",
    desc: "Rasakan kebebasan total dalam meracik program kamu. kamu hanya merealisasikan dan memberikan saran terbaik agar mendapatkan hasil yang maksimal.",
  },
];

export const pricingData = () => ({
  data: pricing,
  total: pricing.length,
});
