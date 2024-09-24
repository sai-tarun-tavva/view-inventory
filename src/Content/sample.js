export const sample = {
  data: [
    {
      id: 1,
      name: "Chicken Piccata",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 0,
      stock: 225,
      remainStock: 225,
    },
    {
      id: 2,
      name: "Grilled Fish",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 0,
      stock: 135,
      remainStock: 135,
    },
    {
      id: 3,
      name: "Chicken Piccata",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 0,
      stock: 225,
      remainStock: 225,
    },
    {
      id: 4,
      name: "Grilled Fish",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 59,
      stock: 180,
      remainStock: 129,
    },
    {
      id: 5,
      name: "Chicken Piccata",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 0,
      stock: 225,
      remainStock: 225,
    },
    {
      id: 6,
      name: "Grilled Fish",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 0,
      stock: 135,
      remainStock: 135,
    },
    {
      id: 7,
      name: "Chicken Piccata",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 0,
      stock: 225,
      remainStock: 225,
    },
    {
      id: 8,
      name: "Grilled Fish",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 91,
      stock: 154,
      remainStock: 63,
    },
    {
      id: 9,
      name: "Chicken Piccata",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 42,
      stock: 139,
      remainStock: 97,
    },
    {
      id: 10,
      name: "Grilled Fish",
      icon: "https://www.shutterstock.com/shutterstock/photos/562817641/display_1500/stock-vector-cartoon-roasted-chicken-vector-clip-art-illustration-with-simple-gradients-all-in-a-single-layer-562817641.jpg",
      orderCount: 170,
      stock: 180,
      remainStock: 10,
    },
  ],
};

export function updateSampleData() {
  sample.data.forEach((item) => {
    if (item.orderCount >= item.stock) {
      item.orderCount = item.stock;
    } else {
      const randomOrderCount = Math.floor(Math.random() * 5); // Random order count between 0 and 4
      item.orderCount += randomOrderCount;
      item.remainStock = item.stock - item.orderCount;

      // Ensure remainStock does not go below 0
      if (item.remainStock < 0) {
        item.remainStock = 0;
      }
    }
  });
}
