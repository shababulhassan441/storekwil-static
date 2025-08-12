import {
  FaRegClock,
  FaTachometerAlt,
  FaLightbulb,
  FaHandsHelping,
  FaLifeRing,
} from "react-icons/fa";

export const fallbackData = {
  HeroContent: {
    title: "Build Stunning Web Experiences",
    tagLines: [
      "High-performance Webflow development",
      "Smooth animations & interactions",
      "Responsive and SEO-friendly designs",
    ],
    hero_image: "/images/hero-banner.png",
    ctaText: "Join the waitlist for exclusive ",
  },
  IntroductionData: {
    title: "About us",
    subTitle: "Designing with Purpose, Building for Performance",
    para: "We create interactive, user-focused websites that deliver results, combining beautiful design with cutting-edge performance.",
    introImage: "/globebg.webp",
    points: [
      "High-performance Webflow development",
      "Pixel-perfect responsive design",
      "SEO-optimized for better ranking",
    ],
    bannerPoints: [
      "500+ Projects Delivered",
      "100% Client Satisfaction",
      "Global Clientele",
    ],
    bannerIcons: [
      "/icons/growth.svg",
      "/icons/problem.svg",
      "/icons/solution.svg",
    ],
  },
  WhyHead: {
    floatHead: "Why Choose Us",
    backgroundHead: "Storekwil",
    float1: "",
    float2: "",
    float3: "",
  },
  whyCards: [
    {
      title: "Experience",
      description:
        "With years of delivering high-end projects, we bring precision, creativity, and deep industry knowledge to every challenge we tackle.",
      icon: <FaRegClock size={30} color="#4A90E2" />,
    },
    {
      title: "Performance",
      description:
        "Our websites are built to be fast-loading and highly optimized, ensuring smooth user experiences that boost engagement and retention.",
      icon: <FaTachometerAlt size={30} color="#4A90E2" />,
    },
    {
      title: "Innovation",
      description:
        "We continuously embrace new technologies and creative solutions to deliver cutting-edge, future-ready digital experiences.",
      icon: <FaLightbulb size={30} color="#4A90E2" />,
    },
    {
      title: "Collaboration",
      description:
        "Working closely with clients, we tailor our approach to meet unique needs and deliver exceptional, personalized results.",
      icon: <FaHandsHelping size={30} color="#4A90E2" />,
    },
    {
      title: "Support",
      description:
        "Our commitment extends beyond launch — we provide ongoing support and maintenance to ensure your digital presence thrives long term.",
      icon: <FaLifeRing size={30} color="#4A90E2" />,
    },
  ],

  WaitListData: {
    title: "Join Our Exclusive Waitlist",
    para: "Be the first to get access to our latest features, updates, and special offers. Don't miss out on exclusive benefits available only to our waitlist members.",
    vipaccessPara:
      "VIP Access grants you early entry, personalized support, and special discounts before the general public.",
    termsExclusions:
      "By joining the waitlist, you agree to receive occasional emails. Certain offers may be subject to terms and exclusions, which will be communicated separately.",
  },
  footerData: {
    footerPara:
      "We are committed to delivering high-quality web solutions tailored to your needs. Connect with us to start your digital journey today.",
    address: "123 Webflow Street, Suite 456, San Francisco, CA 94107",
    phone: "+1 (555) 123-4567",
    bottomText: "Shabab. All rights reserved.",
    infoMail: "info@storekwil.com",
    salesMail: "sales@storekwil.com",
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
  },
  keyfeaturesHeadData: {
    title: "Key Features",
    subTitle: "Our services include...",
  },
  keyfeaturesCardsData: [
    {
      title: "Responsive Design",
      description:
        "Your website will adapt seamlessly to desktops, tablets, and mobile devices for a flawless user experience.",
      icon: "/blogsimages/responsivedesign.jpg",
    },
    {
      title: "SEO Optimization",
      description:
        "Built with best SEO practices to help your website rank higher in search engines and reach more visitors.",
      icon: "/blogsimages/seo.png",
    },
    {
      title: "Fast Performance",
      description:
        "Optimized code and images for lightning-fast load times that keep users engaged.",
      icon: "/blogsimages/pagespeed.jpg",
    },
    {
      title: "Custom Animations",
      description:
        "Eye-catching animations and interactions that enhance user engagement and brand personality.",
      icon: "/blogsimages/animations.png",
    },
  ],

  blogPageData: {
    heading: "Our Blog",
    paragraph:
      "Stay updated with the latest trends and insights in web development.",
  },
  blogCardsData: [
    {
      id: 1,
      title: "Top 5 Web Design Trends for 2025",
      description:
        "As web design continues to evolve rapidly, staying ahead of emerging trends is crucial for creating websites that capture attention and deliver excellent user experiences. In 2025, expect a continued rise in minimalistic layouts that emphasize clarity, whitespace, and bold typography, allowing content to shine without distractions. Dark mode designs will also dominate, offering both aesthetic appeal and reduced eye strain, while conserving battery life on devices with OLED screens. Micro-interactions — small animations and feedback triggered by user actions — will become essential for making websites feel interactive and engaging. Personalization technologies will enable sites to tailor content dynamically, improving relevance and satisfaction for users. Finally, immersive 3D graphics and augmented reality features will move from niche applications into mainstream design, offering new ways to captivate visitors. Implementing these trends thoughtfully can enhance your brand’s identity, boost engagement, and provide memorable digital experiences.",
      thumbnail: "/blogsimages/top5.jpg",
      authorName: "Johny Smith",
      createdAt: "2025-08-12",
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Speed",
      description:
        "Website speed is a critical factor in both user satisfaction and search engine rankings. Slow-loading pages frustrate visitors, increase bounce rates, and harm your SEO performance. This blog dives into practical strategies to optimize your website’s speed. You’ll learn how to compress and properly size images, enabling faster loading without sacrificing visual quality. Leveraging browser caching stores frequently used resources locally, reducing server requests and load times. Combining CSS and JavaScript files minimizes HTTP requests, and using a Content Delivery Network (CDN) helps deliver content faster by serving files from servers closer to your users. Additionally, implementing lazy loading delays loading of images and videos until they enter the viewport, saving bandwidth and speeding initial page loads. We also cover modern protocols like HTTP/2 that enable multiplexing, and tools like Google PageSpeed Insights to analyze and improve your site’s performance. By applying these techniques, you’ll create a fast, efficient website that keeps visitors happy and boosts your visibility online.",
      thumbnail: "/blogsimages/pagespeed.jpg",
      authorName: "Michael Smith",
      createdAt: "2025-07-05",
    },
    {
      id: 3,
      title: "Mastering Responsive Design",
      description:
        "In today’s multi-device world, mastering responsive design is essential for reaching and engaging your audience. This blog explains how to build websites that adapt fluidly across a range of screen sizes and device types. We cover the fundamentals of fluid grids, which allow page layouts to resize proportionally rather than using fixed pixel widths. Flexible images and media ensure visuals scale appropriately without breaking the design. CSS media queries enable targeted styling for different device widths, orientations, and resolutions. A mobile-first approach is emphasized, where design begins with small screens and progressively enhances for larger displays. We also discuss making touch-friendly interactions, adapting navigation menus for mobile devices, and tools for testing responsiveness across platforms. Responsive design improves user experience, accessibility, and SEO rankings by ensuring your website performs optimally regardless of how visitors access it.",
      thumbnail: "/blogsimages/responsivedesign.jpg",
      authorName: "Lisa Ray",
      createdAt: "2025-06-20",
    },
    {
      id: 4,
      title: "SEO Basics for New Websites",
      description:
        "Search Engine Optimization (SEO) is vital for attracting organic traffic to your website. This beginner-friendly guide covers foundational SEO practices to help your new site rank well on Google and other search engines. Learn how to conduct keyword research to discover terms your target audience uses and how to integrate those keywords naturally into your page content, titles, and headings. Optimizing meta titles and descriptions improves your listing’s appeal and click-through rate. We explain the importance of clean, descriptive URLs and fast site speed, both key ranking factors. Mobile-friendliness is also crucial as Google prioritizes mobile-first indexing. Additionally, you’ll learn how to create XML sitemaps and use schema markup to help search engines understand your content better. Setting up Google Search Console allows you to monitor your site’s performance and fix crawl errors. Coupled with consistent high-quality content and strategic link building, these basics lay a strong foundation for SEO success.",
      thumbnail: "/blogsimages/seo.png",
      authorName: "Mark Johnson",
      createdAt: "2025-06-01",
    },
    {
      id: 5,
      title: "The Power of Animations in Webflow",
      description:
        "Animations are a powerful way to add personality and interactivity to your website, and Webflow offers robust tools to create them without needing to write code. This post explores how you can leverage Webflow’s animation and interaction features to create smooth, engaging effects that enhance user experience. From simple hover states to complex scroll-triggered animations and page load sequences, these tools help highlight important content and guide users through your site intuitively. We also discuss performance considerations to ensure animations don’t slow your site down or distract visitors, as well as accessibility practices to make sure animations are usable by everyone. Mastering animations in Webflow can transform a static website into a dynamic digital experience that leaves a lasting impression on your visitors.",
      thumbnail: "/blogsimages/animations.png",
      authorName: "Anna Lee",
      createdAt: "2025-05-15",
    },
    {
      id: 6,
      title: "Building Accessible Websites",
      description:
        "Accessibility is about making the web usable for everyone, including people with disabilities. This blog covers essential best practices to build accessible websites that comply with standards such as the WCAG guidelines. Topics include providing descriptive alternative text for images, ensuring sufficient color contrast for readability, and designing navigation that works with keyboard input alone. We emphasize the importance of semantic HTML elements to help screen readers correctly interpret content, and the use of ARIA attributes where appropriate. Testing your site’s accessibility with automated tools and manual checks ensures inclusivity. Beyond legal compliance, accessible design improves overall user experience and broadens your audience. Building accessible websites is both an ethical responsibility and a smart business decision.",
      thumbnail: "/blogsimages/accesible.jpg",
      authorName: "David Kim",
      createdAt: "2025-05-01",
    },
  ],
  RecentBlogs: [
    {
      id: 1,
      title: "Top 5 Web Design Trends for 2025",
      thumbnail: "/placeholder-image.webp",
      authorName: "Johny Smith",
      createdAt: "12 Aug 2025",
    },
    {
      id: 2,
      title: "How to Optimize Your Website for",
      thumbnail: "/placeholder-image.webp",
      authorName: "Michael Smith",
      createdAt: "05 Jul 2025",
    },
  ],

  faqData: [
    {
      question: "What services do you offer?",
      answer:
        "We offer Webflow development, animations, website optimization, SEO, and custom design solutions.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline varies based on project complexity, but typically ranges from 2 to 8 weeks.",
    },
    {
      question: "Can you help with website redesigns?",
      answer:
        "Yes, we specialize in redesigning websites to improve usability, performance, and aesthetics.",
    },
    {
      question: "Do you provide ongoing website maintenance?",
      answer:
        "Absolutely, we offer maintenance and support packages to keep your website up-to-date and secure.",
    },
    {
      question: "Are your websites mobile-friendly?",
      answer:
        "Yes, all websites we build are fully responsive and optimized for all device types.",
    },
    {
      question: "Do you integrate animations into websites?",
      answer:
        "Yes, we use Webflow and GSAP to create smooth, engaging animations tailored to your brand.",
    },
    {
      question: "Can you optimize my website for search engines?",
      answer:
        "We implement SEO best practices to help improve your site’s visibility and rankings.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Pricing depends on project scope. We offer both fixed-price and hourly rate options.",
    },
    {
      question: "Do you support e-commerce development?",
      answer:
        "Yes, we can build and customize e-commerce sites using Webflow and other platforms.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply contact us via our website or email to discuss your project requirements and goals.",
    },
  ],
};
