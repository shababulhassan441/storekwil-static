import { AdminClientPerktify, createAdminClient } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";
// import { Query } from "appwrite";

import { fallbackData } from "./fallbackData";

export async function fetchData() {
  try {
    const { databases } = await createAdminClient();

    const [
      hero,
      intro,
      whyhead,
      chooseCards,
      WaitList,
      footer,
      keyfeaturesHead,
      keyfeaturesCards,
      stickyLinks,
      blogsPage,
      blogCards,
      recentBlogs,
      faqAccordians,
    ] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_HERO
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_INTRODUCTION
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WHYCHOOSEUS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WHYCHOOSEUS_CARDS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST_CONTENT
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FOOTER
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_KEYFEATURES
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_KEYFEATURES_CARDS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_STICKY_LINKS
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_BLOGSPAGE
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_BLOGCARDS,
        [
          Query.orderDesc("$createdAt"), // Sort by creation date (descending)
        ]
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_BLOGCARDS,
        [
          Query.orderDesc("$createdAt"), // Sort by creation date (descending)
          Query.limit(2), // Limit to 2 results
        ]
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FAQ,
        [
          Query.orderDesc("$createdAt"), // Sort by creation date (descending)
        ]
      ),
    ]);
    console.log("fallbackData:", fallbackData);
    const HeroContent = hero.documents[0] || fallbackData.HeroContent;
    const IntroductionData = intro.documents[0] || {};
    const WhyHead = whyhead.documents[0] || {};
    const whyCards = chooseCards.documents || {};
    const WaitListData = WaitList.documents[0] || {};
    const footerData = footer.documents[0] || {};
    const keyfeaturesHeadData = keyfeaturesHead.documents[0] || {};
    const keyfeaturesCardsData = keyfeaturesCards.documents || {};
    const stickyLinksUrl = stickyLinks.documents[0] || {};
    const blogPageData = blogsPage.documents[0] || {};
    const blogCardsData = blogCards.documents || {};
    const RecentBlogs = recentBlogs.documents || [];
    const faqData = faqAccordians.documents || [];

    // console.log("HeroContent,",HeroContent)
    return {
      HeroContent,
      // IntroductionData,
      // WhyHead,
      // whyCards,
      // WaitListData,
      // footerData,
      // keyfeaturesHeadData,
      // keyfeaturesCardsData,
      // stickyLinksUrl,
      // blogPageData,
      // blogCardsData,
      // RecentBlogs,
      // faqData,
    };
  } catch (error) {
    console.error(
      "Failed to fetched data: Appwrite server is down or unresponsive"
    );
    return { ...fallbackData };
  }
}

export async function fetchheaderFooter() {
  try {
    const { databases } = await createAdminClient();

    const [footer, header] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_FOOTER
      ),
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_HEADER
      ),
    ]);

    // const headerData = header.documents[0] || {};
    const footerData = footer.documents[0] || {
      fallbackData: fallbackData.footerData,
    };
    // const headerData = header.documents[0] || {};

    return {
      footerData,
      // headerData,
    };
  } catch (error) {
    console.error("footer data fetch failed:");
    return { ...fallbackData };
  }
}

export async function RegisterToWaitList(formData) {
  const data = Object.fromEntries(formData);
  const { firstName, lastName, email, company, country, telephone } = data;

  // console.log(firstName, lastName, email, company, country, telephone);

  try {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST,
      ID.unique(),
      {
        firstName,
        lastName,
        email,
        company,
        country,
        telephone,
      }
    );

    return { message: "Request submitted Successfully!", type: "success" };
  } catch (error) {
    console.error("ERROR RegisterToWaitList", error);
    return { message: error?.message, type: "error" };
  }
}

export async function fetchUserDetails(userId) {
  try {
    const { databases } = await AdminClientPerktify();

    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
      process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
      userId
    );
    return response;
  } catch (error) {
    console.error("ERROR in fetchUserDetails", error);
    return null;
  }
}
export async function fetchWaitListUserDetails(userId) {
  try {
    const { databases } = await createAdminClient();

    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST,
      userId
    );
    return response;
  } catch (error) {
    console.error("ERROR in fetchWaitListUserDetails", error);
    return null;
  }
}

export async function fetchBanner() {
  try {
    const { databases } = await AdminClientPerktify();

    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
      process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_COMPAIGN,
      [Query.limit(1)]
    );
    return response?.documents?.[0];
  } catch (error) {
    console.error("ERROR in fetchBanner", error);
    return null;
  }
}

export async function waitlistReigsterSuccess() {
  try {
    const { databases } = await createAdminClient();
    const [popupcontent] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST_REGISTER_SUCCESS
      ),
    ]);

    const popUpData = popupcontent.documents[0] || {};

    return {
      popUpData,
    };
  } catch (error) {
    console.error("error in fetching waitlistReigsterSuccess:", error);
  }
}

export async function referralRegisterSuccess() {
  try {
    const { databases } = await createAdminClient();
    const [popupcontent] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_REFERRAL_REGISTER_SUCCESS
      ),
    ]);

    const popUpData = popupcontent.documents[0] || {};

    return {
      popUpData,
    };
  } catch (error) {
    console.error("error in fetching referralRegisterSuccess", error);
  }
}
export async function welcomeEmailTemplate() {
  try {
    const { databases } = await createAdminClient();
    const [emailTempate] = await Promise.all([
      databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ID_WELCOME_EMAIL_TEMPLATE
      ),
    ]);

    const emailTemplateData = emailTempate.documents[0] || {};

    return {
      emailTemplateData,
    };
  } catch (error) {
    console.error("error in fetching emailtempalte Data:", error);
  }
}
