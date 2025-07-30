import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Tax Deductions for Small Businesses",
      category: "Tax Planning",
      date: "March 15, 2024",
      image: "/images/woman-5.png",
      excerpt:
        "Learn about the essential tax deductions that can help your small business save money and stay compliant with tax regulations.",
      readTime: "5 min read",
    },
    {
      title: "The Future of Digital Accounting",
      category: "Technology",
      date: "March 12, 2024",
      image: "/images/woman-3.png",
      excerpt:
        "Explore how AI and automation are transforming the accounting industry and what it means for businesses.",
      readTime: "4 min read",
    },
    {
      title: "Financial Planning for Startups",
      category: "Business Advisory",
      date: "March 10, 2024",
      image: "/images/woman-5.png",
      excerpt:
        "Essential financial planning strategies and tips for startup companies to ensure sustainable growth.",
      readTime: "6 min read",
    },
    {
      title: "Navigating International Tax Regulations",
      category: "International Tax",
      date: "March 8, 2024",
      image: "/images/woman-3.png",
      excerpt:
        "A comprehensive guide to understanding and complying with international tax laws for global businesses.",
      readTime: "7 min read",
    },
    {
      title: "Effective Bookkeeping Practices",
      category: "Bookkeeping",
      date: "March 5, 2024",
      image: "/images/woman-5.png",
      excerpt:
        "Best practices and tips for maintaining accurate and efficient bookkeeping records for your business.",
      readTime: "5 min read",
    },
    {
      title: "Preparing for Tax Season",
      category: "Tax Planning",
      date: "March 1, 2024",
      image: "/images/woman-3.png",
      excerpt:
        "Essential steps and checklist to help you prepare for the upcoming tax season with confidence.",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center relative mb-16">
        <h2 className="text-[120px] leading-[140px] font-extrabold tracking-wider text-shadow-[0_5px_7px_#0000002b] text-white">
          Our Blog
        </h2>
        <h6 className="text-[65px] font-semibold absolute -bottom-3 text-green-700">
          Latest Insights
        </h6>
      </div>

      {/* Featured Post */}
      {/* <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[800px]">
            <img
              src="/images/woman-5.png"
              alt="Featured Post"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-green-600 font-semibold mb-4">
              Featured Post
            </span>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              2024 Tax Law Changes: What You Need to Know
            </h3>
            <p className="text-gray-600 mb-6">
              Stay informed about the latest tax law changes and how they might
              affect your business or personal finances. Our comprehensive guide
              breaks down the key updates and provides actionable insights.
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <span>March 20, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 self-start">
              Read More
            </button>
          </div>
        </div>
      </div> */}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                {/* <span className="text-sm text-gray-500">{post.readTime}</span> */}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {post.title}
              </h4>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{post.date}</span>
                <button className="text-green-600 hover:text-green-700 font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="mt-16 bg-green-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-6">
          Stay updated with our latest insights and expert advice
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-l-lg border-2 border-r-0 border-green-200 focus:outline-none focus:border-green-500"
          />
          <button className="bg-green-600 text-white px-6 py-2 rounded-r-lg hover:bg-green-700 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
