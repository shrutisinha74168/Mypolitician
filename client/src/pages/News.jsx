import React, { useState } from "react";

const newsData = [
  {
    id: 1,
    title: "Leader Launches Mega Youth Empowerment Scheme",
    date: "Aug 5, 2025",
    image: "https://psti.on.gov.ng/wp-content/uploads/2024/05/Governor-Lucky-Orimisan-Aiyedatiwa-at-PSTI-pilot-youth-empowerment-scheme.jpg",
    description:
      "A historic step towards building a stronger future for our youth. The scheme includes free training programs, startup funding, and career guidance.",
    fullArticle:
      "The Youth Empowerment Scheme, announced by our leader, will provide skill development training in 200+ sectors, offer startup loans with minimal interest, and create partnerships with major companies for job placements. The initiative is expected to benefit over 50,000 young individuals in the first phase alone. Special focus will be given to rural youth and women entrepreneurs."
  },
  {
    id: 2,
    title: "Massive Rally Unites Thousands in Capital City",
    date: "July 28, 2025",
    image: "https://d3i6fh83elv35t.cloudfront.net/static/2023/11/GettyImages-1763970652-1024x683.jpg",
    description:
      "An unforgettable rally where thousands came together to support the vision for a new era of development.",
    fullArticle:
      "The rally in the capital city was attended by more than 1 lakh supporters from across the state. The leader addressed the crowd on topics such as education reforms, better healthcare, and infrastructure development. The energy in the crowd reflected the growing public trust in our policies. Many cultural performances also took place, symbolizing unity in diversity."
  },
  {
    id: 3,
    title: "New Healthcare Centers Inaugurated",
    date: "July 15, 2025",
    image: "https://tse3.mm.bing.net/th/id/OIP.tl7G_MQ5p7ZHTS_QRDWmBAHaEK?pid=Api&P=0&h=180",
    description:
      "10 modern healthcare facilities have been inaugurated to serve rural communities.",
    fullArticle:
      "The newly inaugurated healthcare centers are equipped with advanced medical equipment, telemedicine facilities, and trained staff. They will provide free primary care and subsidized medicines to rural families. The initiative is expected to reduce the travel time for medical emergencies by more than 50% in these areas."
  },
  {
    id: 4,
    title: "Educational Reforms to Transform Rural Schools",
    date: "June 30, 2025",
    image: "https://classplusapp.com/growth/wp-content/uploads/2022/08/5-Tips-to-Start-a-Successful-Rural-School.jpg",
    description:
      "Major changes in the rural school system aim to improve quality education.",
    fullArticle:
      "Under the education reform policy, rural schools will be provided with digital classrooms, free tablets for students, and better teacher training programs. A budget of ₹500 crore has been allocated for improving infrastructure and ensuring every child has access to quality education."
  }
];

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="news-page">
      {/* Hero Section */}
      <div className="news-hero fade-in">
        <div className="hero-content">
          <h1>Latest News & Updates</h1>
          <p>
            Stay updated with the latest developments, policies, and events from
            our leader’s journey towards progress.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <div className="news-grid">
        {newsData.map((news) => (
          <div
            className="news-card slide-up"
            key={news.id}
            onClick={() => setSelectedNews(news)}
          >
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <h2>{news.title}</h2>
              <p className="news-date">{news.date}</p>
              <p>{news.description}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="news-modal fade-in">
          <div className="news-modal-content zoom-in">
            <button
              className="close-modal"
              onClick={() => setSelectedNews(null)}
            >
              ✖
            </button>
            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              className="modal-image"
            />
            <h2>{selectedNews.title}</h2>
            <p className="news-date">{selectedNews.date}</p>
            <p>{selectedNews.fullArticle}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
