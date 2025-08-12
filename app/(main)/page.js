import { fetchBanner, fetchData } from "@/appwrite/data";
import CalltoAction from "@/modules/components/CalltoAction";
import FaqAccordians from "@/modules/components/FaqAccordians";
import HeroSection from "@/modules/components/HeroSection";
import Introdcution from "@/modules/components/Introdcution";
import VideoSection from "@/modules/components/IntroVideo";
import JoinOurWaitlist from "@/modules/components/JoinOurWaitlist";
import KeyFeatures from "@/modules/components/KeyFeatures";
import LatestBlogs from "@/modules/components/LatestBlogs";
import StickyElements from "@/modules/components/layout/StickyElements";
import LetsGo from "@/modules/components/LetsGo";
import Loader from "@/modules/components/Loader";
import PopUp from "@/modules/components/PopUp";
import StackingCards from "@/modules/components/StackingCards";
import WaitList from "@/modules/components/WaitList";
import WhyChooseHead from "@/modules/components/WhyChooseHead";
import WhyChooseus from "@/modules/components/WhyChooseus";
import { cookies } from "next/headers";

// export default async function Home({searchParams}) {
//  cookies()
//   const data=await fetchData()
//   const {referCode}=searchParams;
//   const banner= await fetchBanner()

//   return (
//     <>
//       <HeroSection heroData={data.HeroContent}/>

//       <LetsGo heroCta={data.HeroContent} />

//       <Introdcution introData={data.IntroductionData} />

//       <VideoSection />

//       <WhyChooseHead WhyHead={data.WhyHead} />

//       <WhyChooseus whyCards={data.whyCards} />

//       <KeyFeatures headData={data.keyfeaturesHeadData} cardData={data.keyfeaturesCardsData} />

//       <LatestBlogs BlogCards={data.RecentBlogs} />

//       <FaqAccordians faqData={data.faqData} />

//       <WaitList waitList={data.WaitListData} referCode={referCode} />

//       <StickyElements linksUrl={data.stickyLinksUrl} />

//       <PopUp banner={banner}/>
//     </>
//   );
// }

export default async function Home({ searchParams }) {
  cookies();
  let data = null;
  let banner = null;

  try {
    data = await fetchData();
    // console.log("Data fetched :", data);
    // banner = await fetchBanner();
  } catch (error) {
    console.error("Server is down or unresponsive:", error);
  }

  // if (!data) {
  //   // Return loading state if data or banner is not available
  //   return <Loader />;
  // }

  const referCode = searchParams?.referCode ?? null;
  

  return (
    <>
      <HeroSection heroData={data.HeroContent} />
      <LetsGo heroCta={data.HeroContent} />
      <Introdcution introData={data.IntroductionData} />
      <VideoSection />
      <WhyChooseHead WhyHead={data.WhyHead} />
      <WhyChooseus whyCards={data.whyCards} />
      {/* <StackingCards WhyHead={data.WhyHead} whyCards={data.whyCards} /> */}
      <KeyFeatures
        headData={data.keyfeaturesHeadData}
        cardData={data.keyfeaturesCardsData}
      />
      <LatestBlogs BlogCards={data.blogCardsData} />
      <FaqAccordians faqData={data.faqData} />
      <WaitList waitList={data.WaitListData} referCode={referCode} />
      <StickyElements />
      {/* <PopUp banner={banner} /> */}
    </>
  );
}
