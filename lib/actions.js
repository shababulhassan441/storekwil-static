"use server";

import { AdminClientPerktify, createAdminClient } from "@/appwrite/config";
import { ID, Query } from "node-appwrite";
import { Resend } from "resend";
import { generateReferralCode } from "./utils";
import { redirect } from "next/navigation";
import { welcomeEmailTemplate } from "@/appwrite/data";

// Registeration
export async function createNewUserRegistration(formData) {
  const data = Object.fromEntries(formData);
  const {
    firstName,
    lastName,
    email,
    company,
    country,
    phone,
    referCode,
    vipAccess,
  } = data;

  const password = generateReferralCode(firstName) + "_test";
  let user;
  try {
    const { users, account, databases } = await AdminClientPerktify();

    let referredBy = null;

    if (referCode) {
      const { documents } = await databases.listDocuments(
        process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
        process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
        [Query.equal("referralCode", referCode)]
      );

      referredBy = documents.length !== 0 ? documents[0].$id : null;
    }

    if (referCode && !referredBy) {
      return { message: "Invalid Invitation Code", type: "error" };
    } else if (referCode && referredBy) {
      if (vipAccess === "false") {
        // Add The user to storekwill waitlist
        const waitlistID = await addToWaitlist(
          firstName,
          lastName,
          company,
          country,
          email,
          phone
        );

        //create document in points collection
        await databases.createDocument(
          process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
          process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_POINTS,
          ID.unique(),
          {
            userId: referredBy,
            points: 100,
          }
        );

        return {
          message: waitlistID,
          type: "success",
          regType: "waitlist",
        };
      } else {
        {
          // Add The user to storekwill waitlist
          await addToWaitlist(
            firstName,
            lastName,
            company,
            country,
            email,
            phone
          );
          // creates new auth user
          const newUserAccount = await account.create(
            ID.unique(),
            email,
            password,
            firstName
          );

          user = newUserAccount.$id;

          // sets prefs of the user
          await users.updateLabels(
            newUserAccount.$id, // userId
            ["user"] // prefs
          );

          // sets Email Verification of the user
          await users.updateEmailVerification(
            newUserAccount.$id, // userId
            true
          );
          // update MFA of the user
          await users.updateMfa(
            newUserAccount.$id, // userId
            true
          );

          //create document in users collection
          await databases.createDocument(
            process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
            process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
            newUserAccount.$id,
            {
              firstName,
              lastName,
              company,
              country,
              referralCode: generateReferralCode(firstName),
              isRefferedLead: true,
              refferedBy: referredBy,
              email,
              phone,
            }
          );
          //create document in leads collection
          await databases.createDocument(
            process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
            process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_LEADS,
            ID.unique(),
            {
              referredBy: referredBy,
              users: newUserAccount.$id,
            }
          );

          //create document in points collection
          await databases.createDocument(
            process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
            process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_POINTS,
            ID.unique(),
            {
              userId: referredBy,
              points: 100,
            }
          );

          await sendmail(email, firstName, password);

          return {
            message: newUserAccount.$id,
            type: "success",
            regType: "perktify",
          };
        }
      }
    } else {
      if (vipAccess === "false") {
        const waitlistID = await addToWaitlist(
          firstName,
          lastName,
          company,
          country,
          email,
          phone
        );

        return {
          message: waitlistID,
          type: "success",
          regType: "waitlist",
        };
      } else {
        await addToWaitlist(
          firstName,
          lastName,
          company,
          country,
          email,
          phone
        );
        // creates new auth user
        const newUserAccount = await account.create(
          ID.unique(),
          email,
          password,
          firstName
        );
        user = newUserAccount.$id;
        // sets prefs of the user
        await users.updateLabels(
          newUserAccount.$id, // userId
          ["user"] // prefs
        );

        // sets Email Verification of the user
        await users.updateEmailVerification(
          newUserAccount.$id, // userId
          true
        );
        // update MFA of the user
        await users.updateMfa(
          newUserAccount.$id, // userId
          true
        );

        //create document in users collection
        await databases.createDocument(
          process.env.NEXT_PUBLIC_PERKTIFY_DATABASE_ID,
          process.env.NEXT_PUBLIC_PERKTIFY_COLLECTION_ID_USERS,
          newUserAccount.$id,
          {
            firstName,
            lastName,
            company,
            country,
            referralCode: generateReferralCode(firstName),
            isRefferedLead: false,
            refferedBy: null,
            email,
            phone,
          }
        );

        await sendmail(email, firstName, password);

        return {
          message: newUserAccount.$id,
          type: "success",
          regType: "perktify",
        };
      }
    }
  } catch (error) {
    return { message: `${error?.message}`, type: "error" };
  }
}

export async function sendmail(email, user, pwd) {
  const resend = new Resend("re_MqoY9Wse_CD8ihg293VR1ZL6k58tvsb3d");
  const data = await welcomeEmailTemplate();
  const { heading, congratsText, para, linkText, reachOut, regard1, regard2 } =
    data.emailTemplateData;
    resend.emails.send({
    from: "customers@storekwil.com",
    to: email,
    subject: `Welcome to StoreKwil`,
    html: `
      <h1>${heading || ""}</h1>
      <p>${congratsText || ""}</p>
      <p>${para || ""}</p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Password:</strong> ${pwd}</li>
      </ul>
      <p><a href="https://rewards.storekwil.com/login" target="_blank">${linkText}</a></p>
      <p>${reachOut || ""}</p>
      <p>${regard1 || ""}</p>
      <p>${regard2 || ""}</p>
    `,
  });
}

export async function addToWaitlist(
  firstName,
  lastName,
  company,
  country,
  email,
  telephone
) {
  const { databases } = await createAdminClient();

  const waitlistID = await databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ID_WAITLIST,
    ID.unique(),
    {
      firstName,
      lastName,
      company,
      country,
      email,
      telephone,
    }
  );

  return waitlistID.$id;
}
