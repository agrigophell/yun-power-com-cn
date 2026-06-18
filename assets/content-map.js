// assets/content-map.js

const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["开云", "能源", "首页推荐"],
      url: "https://www.yun-power.com.cn",
    },
    {
      id: "products",
      title: "产品中心",
      tags: ["开云", "产品", "解决方案"],
      url: "https://www.yun-power.com.cn/products",
    },
    {
      id: "about",
      title: "关于我们",
      tags: ["开云", "公司简介", "团队"],
      url: "https://www.yun-power.com.cn/about",
    },
    {
      id: "news",
      title: "新闻动态",
      tags: ["开云", "行业资讯", "公司新闻"],
      url: "https://www.yun-power.com.cn/news",
    },
    {
      id: "contact",
      title: "联系我们",
      tags: ["开云", "联系方式", "支持"],
      url: "https://www.yun-power.com.cn/contact",
    },
  ],
  exampleKeyword: "开云",
  searchFilter: function (query) {
    const q = query.toLowerCase();
    return this.sections.filter((section) => {
      return (
        section.title.toLowerCase().includes(q) ||
        section.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  },
};

function renderSearchResults(query) {
  const results = contentMap.searchFilter(query);
  if (results.length === 0) {
    console.log("未找到匹配的内容分区。");
    return;
  }
  console.log(`搜索 "${query}" 结果：`);
  results.forEach((section) => {
    console.log(`- ${section.title} (${section.id}) -> ${section.url}`);
  });
}

// 示例：搜索关键词 "开云"
renderSearchResults("开云");

// 示例：搜索关键词 "产品"
renderSearchResults("产品");