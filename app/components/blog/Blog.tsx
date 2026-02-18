import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type BlogPost = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  content: string;
};

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const blogPosts: BlogPost[] = [
    {
      title: "Understanding Tax Deductions for Small Businesses",
      category: "Tax Planning",
      date: "March 15, 2024",
      image: "https://picsum.photos/400",
      excerpt:
        "Learn about the essential tax deductions that can help your small business save money and stay compliant with tax regulations.",
      readTime: "5 min read",
      content: `Tax deductions are one of the most powerful tools available to small business owners. Understanding which expenses qualify can significantly reduce your taxable income and save you money.

**Common Deductible Expenses:**
- Office supplies and equipment
- Business travel and meals
- Professional services (accounting, legal)
- Marketing and advertising costs
- Home office expenses (if applicable)
- Vehicle expenses for business use
- Insurance premiums
- Software and technology subscriptions

**Best Practices:**
1. Keep detailed records of all business expenses
2. Separate personal and business expenses
3. Consult with a tax professional for complex situations
4. Stay updated on tax law changes

By taking advantage of legitimate tax deductions, you can maximize your savings while remaining compliant with tax regulations.`,
    },
    {
      title: "The Future of Digital Accounting",
      category: "Technology",
      date: "March 12, 2024",
      image: "https://picsum.photos/400",
      excerpt:
        "Explore how AI and automation are transforming the accounting industry and what it means for businesses.",
      readTime: "4 min read",
      content: `The accounting industry is experiencing a digital transformation that's reshaping how businesses manage their finances. Artificial intelligence and automation are at the forefront of this revolution.

**Key Technologies:**
- AI-powered bookkeeping and data entry
- Automated invoice processing
- Real-time financial reporting
- Cloud-based accounting platforms
- Machine learning for fraud detection

**Benefits for Businesses:**
- Reduced manual errors
- Faster processing times
- Better financial insights
- Cost savings on routine tasks
- Enhanced security and compliance

**What This Means:**
As technology continues to evolve, accountants are shifting from data entry to strategic advisory roles. Businesses that embrace these technologies will gain a competitive advantage through improved efficiency and decision-making.`,
    },
    {
      title: "Financial Planning for Startups",
      category: "Business Advisory",
      date: "March 10, 2024",
      image: "https://picsum.photos/400",
      excerpt:
        "Essential financial planning strategies and tips for startup companies to ensure sustainable growth.",
      readTime: "6 min read",
      content: `Starting a business requires more than just a great idea—it demands solid financial planning. Proper financial management from the start can make the difference between success and failure.

**Critical Financial Planning Steps:**
1. Create a detailed business plan with financial projections
2. Establish a realistic budget and stick to it
3. Set up proper accounting systems from day one
4. Build an emergency fund (3-6 months of expenses)
5. Monitor cash flow closely

**Key Metrics to Track:**
- Monthly recurring revenue (MRR)
- Customer acquisition cost (CAC)
- Burn rate
- Runway (months until funds run out)
- Profit margins

**Common Pitfalls to Avoid:**
- Underestimating expenses
- Mixing personal and business finances
- Ignoring tax obligations
- Failing to plan for growth
- Not seeking professional advice

With careful planning and disciplined execution, startups can build a strong financial foundation for long-term success.`,
    },
    {
      title: "Navigating International Tax Regulations",
      category: "International Tax",
      date: "March 8, 2024",
      image: "https://picsum.photos/400",
      excerpt:
        "A comprehensive guide to understanding and complying with international tax laws for global businesses.",
      readTime: "7 min read",
      content: `Expanding your business internationally opens up new opportunities but also introduces complex tax challenges. Understanding international tax regulations is crucial for compliance and optimization.

**Key Considerations:**
- Double taxation treaties between countries
- Transfer pricing regulations
- Permanent establishment rules
- Withholding tax requirements
- Value-added tax (VAT) obligations

**Common Challenges:**
- Different tax systems and rates
- Currency fluctuations
- Compliance deadlines across jurisdictions
- Documentation requirements
- Language barriers

**Best Practices:**
1. Work with international tax experts
2. Understand tax treaties between countries
3. Maintain detailed records of all transactions
4. Plan ahead for tax implications
5. Stay updated on regulatory changes

Proper planning and expert guidance can help you navigate these complexities while minimizing your tax burden and ensuring full compliance.`,
    },
    {
      title: "Effective Bookkeeping Practices",
      category: "Bookkeeping",
      date: "March 5, 2024",
      image: "https://picsum.photos/400",
      excerpt:
        "Best practices and tips for maintaining accurate and efficient bookkeeping records for your business.",
      readTime: "5 min read",
      content: `Accurate bookkeeping is the foundation of sound financial management. Good bookkeeping practices help you make informed decisions, stay compliant, and avoid costly mistakes.

**Essential Bookkeeping Practices:**
- Record transactions promptly and accurately
- Reconcile bank statements monthly
- Categorize expenses correctly
- Keep receipts and documentation organized
- Use accounting software for efficiency

**What to Track:**
- All income sources
- Business expenses (with receipts)
- Accounts receivable and payable
- Inventory (if applicable)
- Payroll records
- Tax-related documents

**Benefits of Good Bookkeeping:**
- Better cash flow management
- Easier tax preparation
- Clear financial picture
- Easier to secure financing
- Compliance with regulations

**Tools and Software:**
Modern accounting software can automate many bookkeeping tasks, reducing errors and saving time. Choose a solution that fits your business size and needs.

Regular, consistent bookkeeping is an investment that pays dividends in financial clarity and peace of mind.`,
    },
    {
      title: "Preparing for Tax Season",
      category: "Tax Planning",
      date: "March 1, 2024",
      image: "https://picsum.photos/200",
      excerpt:
        "Essential steps and checklist to help you prepare for the upcoming tax season with confidence.",
      readTime: "4 min read",
      content: `Tax season doesn't have to be stressful. With proper preparation and organization, you can navigate tax filing smoothly and maximize your returns.

**Pre-Tax Season Checklist:**
- Gather all income documents (W-2s, 1099s, etc.)
- Collect receipts for deductible expenses
- Review bank and credit card statements
- Organize business expense records
- Check for any tax law changes

**Documents You'll Need:**
- Previous year's tax return
- Income statements
- Expense receipts and invoices
- Investment statements
- Property tax records
- Charitable contribution receipts

**Tips for Success:**
1. Start early—don't wait until the deadline
2. Keep records organized throughout the year
3. Consider working with a tax professional
4. Review your return before submitting
5. File electronically for faster processing

**Common Deductions to Remember:**
- Business expenses
- Home office deduction (if eligible)
- Retirement contributions
- Health savings account contributions
- Educational expenses (if applicable)

Being prepared makes tax season less stressful and helps ensure you don't miss valuable deductions or credits.`,
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12" id="blog">
        {/* Header Section */}
        <div className="flex flex-col items-center relative mb-12">
          <h2 className="text-4xl sm:text-[80px] lg:text-[120px] leading-tight sm:leading-[100px] lg:leading-[140px] font-extrabold tracking-wider text-shadow-[0_5px_7px_#0000002b] text-white">
            Our Blog
          </h2>
          <h6 className="text-3xl sm:text-[40px] lg:text-[65px] font-semibold absolute -bottom-3 text-green-700">
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-1">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4 h-[72px] overflow-hidden text-ellipsis line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedPost(post);
                      setIsModalOpen(true);
                    }}
                    className="text-green-600 hover:text-green-700 font-semibold cursor-pointer"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && selectedPost &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/20 bg-opacity-50 z-[9999] flex items-center justify-center p-4 backdrop-blur-xs"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">

                <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                  {selectedPost.title}
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8">
                {/* Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                  {selectedPost.title}
                </h2>


                {/* Meta Information */}
                <div className="flex items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
                  <span>{selectedPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedPost.content}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              {/* <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Blog;
